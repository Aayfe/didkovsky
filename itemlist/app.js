const form = document.querySelector("#entry-form");
const authScreen = document.querySelector("#auth-screen");
const appShell = document.querySelector("#app-shell");
const authMessage = document.querySelector("#auth-message");
const googleLoginButton = document.querySelector("#google-login-button");
const userEmail = document.querySelector("#user-email");
const logoutButton = document.querySelector("#logout-button");
const toggleAdminPanelButton = document.querySelector("#toggle-admin-panel");
const adminPanel = document.querySelector("#admin-panel");
const adminForm = document.querySelector("#admin-form");
const adminEmailInput = document.querySelector("#admin-email-input");
const adminIsAdmin = document.querySelector("#admin-is-admin");
const allowedUsersList = document.querySelector("#allowed-users-list");
const listTabs = document.querySelector("#list-tabs");
const addListButton = document.querySelector("#add-list-button");
const listNameInput = document.querySelector("#list-name-input");
const pageTitle = document.querySelector("#page-title");
const productInput = document.querySelector("#product-input");
const productOptions = document.querySelector("#product-options");
const actionSelect = document.querySelector("#action-select");
const actionButtons = document.querySelectorAll("[data-action-choice]");
const amountInput = document.querySelector("#amount-input");
const amountStepButtons = document.querySelectorAll("[data-amount-step]");
const unitSelect = document.querySelector("#unit-select");
const submitButton = document.querySelector("#submit-button");
const cancelEditButton = document.querySelector("#cancel-edit");
const deleteListButton = document.querySelector("#delete-list-button");
const deleteListModal = document.querySelector("#delete-list-modal");
const deleteListDescription = document.querySelector("#delete-list-description");
const cancelDeleteList = document.querySelector("#cancel-delete-list");
const confirmDeleteList = document.querySelector("#confirm-delete-list");
const deleteAllButton = document.querySelector("#delete-all-button");
const deleteAllModal = document.querySelector("#delete-all-modal");
const cancelDeleteAll = document.querySelector("#cancel-delete-all");
const confirmDeleteAll = document.querySelector("#confirm-delete-all");
const itemsBody = document.querySelector("#items-body");
const tableWrap = document.querySelector(".table-wrap");
const message = document.querySelector("#message");

const SUPABASE_TABLE = "shopping_app_state";
const ALLOWED_USERS_TABLE = "allowed_users";

let lists = [];
let activeListId = null;
let editingId = null;
let supabaseClient = null;
let saveTimer = null;
let currentUser = null;
let currentAccess = null;

const icons = {
  edit: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,
  trash: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18"></path>
      <path d="M8 6V4h8v2"></path>
      <path d="M19 6l-1 14H6L5 6"></path>
      <path d="M10 11v6"></path>
      <path d="M14 11v6"></path>
    </svg>
  `
};

setupEvents();
initializeApp();

function setupEvents() {
  googleLoginButton.addEventListener("click", signInWithGoogle);
  logoutButton.addEventListener("click", signOut);
  toggleAdminPanelButton.addEventListener("click", toggleAdminPanel);
  adminForm.addEventListener("submit", saveAllowedUser);
  allowedUsersList.addEventListener("click", handleAllowedUsersClick);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = tidyName(productInput.value);
    const amount = Number(amountInput.value);
    const existingProduct = findItemByName(name);
    const unit = existingProduct ? existingProduct.unit : unitSelect.value;
    const action = actionSelect.value;

    if (!name) {
      showMessage("Vyplň položku.", true);
      productInput.focus();
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0 || !Number.isInteger(amount)) {
      showMessage("Počet musí být celé číslo větší než nula.", true);
      amountInput.focus();
      return;
    }

    unitSelect.value = unit;

    if (editingId) {
      await updateEditedItem(name, amount, unit);
      return;
    }

    await applyItemChange({ name, amount, unit, action });
  });

  amountInput.addEventListener("input", () => {
    if (Number(amountInput.value) < 0) {
      amountInput.value = "";
    }
  });

  productInput.addEventListener("input", syncUnitFromProduct);
  productInput.addEventListener("change", syncUnitFromProduct);
  addListButton.addEventListener("click", addList);

  listTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-list-id]");

    if (tab) {
      switchList(tab.dataset.listId);
    }
  });

  listNameInput.addEventListener("input", () => {
    const list = getActiveList();
    list.name = listNameInput.value;
    pageTitle.textContent = getDisplayListName(list);
    renderLists({ syncInput: false });
    queueSaveState();
  });

  listNameInput.addEventListener("blur", () => {
    const list = getActiveList();

    if (!tidyName(list.name)) {
      list.name = "Bez názvu";
      renderLists();
      queueSaveState();
    }
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActionState(button.dataset.actionChoice);
    });
  });

  amountStepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.amountStep === "up" ? 1 : -1;
      stepAmount(direction);
    });
  });

  cancelEditButton.addEventListener("click", resetForm);
  deleteListButton.addEventListener("click", openDeleteListModal);
  cancelDeleteList.addEventListener("click", closeDeleteListModal);
  confirmDeleteList.addEventListener("click", confirmDeleteActiveList);
  deleteAllButton.addEventListener("click", openDeleteAllModal);
  cancelDeleteAll.addEventListener("click", closeDeleteAllModal);
  confirmDeleteAll.addEventListener("click", confirmDeleteAllLists);

  deleteListModal.addEventListener("click", (event) => {
    if (event.target === deleteListModal) {
      closeDeleteListModal();
    }
  });

  deleteAllModal.addEventListener("click", (event) => {
    if (event.target === deleteAllModal) {
      closeDeleteAllModal();
    }
  });

  itemsBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) {
      return;
    }

    const id = button.dataset.id;

    if (button.dataset.action === "edit") {
      startEdit(id);
    }

    if (button.dataset.action === "delete") {
      removeItem(id);
    }
  });
}

async function initializeApp() {
  setState(createDefaultState());
  renderLists();
  renderItems();
  setActionState(actionSelect.value);
  showSignedOut("Kontroluji přihlášení...");

  if (!initializeSupabase()) {
    showSignedOut("Supabase není správně nakonfigurovaná.", true);
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    showSignedOut(`Přihlášení se nepodařilo načíst: ${error.message}`, true);
    return;
  }

  await handleSession(data.session);

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    handleSession(session);
  });
}

function initializeSupabase() {
  const config = window.SUPABASE_CONFIG || {};
  const publicKey = config.publishableKey || config.anonKey;
  const hasUrl = config.url && !config.url.includes("VLOZ_");
  const hasKey = publicKey && !publicKey.includes("VLOZ_");

  if (!hasUrl || !hasKey || !window.supabase) {
    return false;
  }

  supabaseClient = window.supabase.createClient(config.url, publicKey);
  return true;
}

async function signInWithGoogle() {
  if (!supabaseClient) {
    showAuthMessage("Supabase není připravená.", true);
    return;
  }

  googleLoginButton.disabled = true;
  showAuthMessage("Přesměrovávám na Google...");

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getRedirectUrl(),
      queryParams: {
        prompt: "select_account"
      }
    }
  });

  if (error) {
    googleLoginButton.disabled = false;
    showAuthMessage(`Přihlášení se nepodařilo: ${error.message}`, true);
  }
}

async function signOut() {
  if (!supabaseClient) {
    return;
  }

  await supabaseClient.auth.signOut();
}

function getRedirectUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  return url.href;
}

async function loadCurrentAccess() {
  const email = getCurrentUserEmail();

  if (!email) {
    return null;
  }

  const { data, error } = await supabaseClient
    .from(ALLOWED_USERS_TABLE)
    .select("email,is_admin")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    showSignedOut(`Kontrola přístupu selhala: ${error.message}`, true);
    return null;
  }

  return data;
}

function showSignedOut(text, isError = false) {
  authScreen.hidden = false;
  appShell.hidden = true;
  deleteAllButton.hidden = true;
  googleLoginButton.disabled = false;
  showAuthMessage(text, isError);
}

function showApp() {
  authScreen.hidden = true;
  appShell.hidden = false;
  deleteAllButton.hidden = false;
  userEmail.textContent = getCurrentUserEmail();
  toggleAdminPanelButton.hidden = !currentAccess?.is_admin;

  if (!currentAccess?.is_admin) {
    adminPanel.hidden = true;
  }
}

function showAuthMessage(text, isError = false) {
  authMessage.textContent = text;
  authMessage.classList.toggle("is-error", isError);
}

function getCurrentUserEmail() {
  return (currentUser?.email || "").trim().toLocaleLowerCase("cs");
}

async function handleSession(session) {
  clearTimeout(saveTimer);
  currentUser = session?.user || null;
  currentAccess = null;
  adminPanel.hidden = true;

  if (!currentUser) {
    setState(createDefaultState());
    renderLists();
    renderItems();
    showSignedOut("Přihlas se Google účtem.");
    return;
  }

  const email = getCurrentUserEmail();
  showSignedOut(`Kontroluji přístup pro ${email}...`);
  currentAccess = await loadCurrentAccess();

  if (!currentAccess) {
    await supabaseClient.auth.signOut();
    currentUser = null;
    showSignedOut(`Účet ${email} není povolený adminem.`, true);
    return;
  }

  showApp();
  showMessage("Načítám tvoje data ze Supabase...");
  await loadStateFromSupabase();
  renderLists();
  renderItems();
  showMessage("Data načtená.");

  if (currentAccess.is_admin) {
    loadAllowedUsers();
  }
}

async function loadStateFromSupabase() {
  if (!currentUser) {
    return;
  }

  const { data, error } = await supabaseClient
    .from(SUPABASE_TABLE)
    .select("data")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (error) {
    showMessage(`Supabase chyba: ${error.message}`, true);
    return;
  }

  if (data?.data) {
    setState(sanitizeState(data.data));
    return;
  }

  setState(createDefaultState());
  await saveState();
}

function queueSaveState() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveState();
  }, 450);
}

async function saveState() {
  if (!supabaseClient || !currentUser) {
    return;
  }

  clearTimeout(saveTimer);

  const { error } = await supabaseClient
    .from(SUPABASE_TABLE)
    .upsert({
      id: currentUser.id,
      user_id: currentUser.id,
      data: serializeState(),
      updated_at: new Date().toISOString()
    }, { onConflict: "id" });

  if (error) {
    showMessage(`Uložení do Supabase selhalo: ${error.message}`, true);
  }
}

function toggleAdminPanel() {
  if (!currentAccess?.is_admin) {
    return;
  }

  adminPanel.hidden = !adminPanel.hidden;

  if (!adminPanel.hidden) {
    adminEmailInput.focus();
    loadAllowedUsers();
  }
}

async function saveAllowedUser(event) {
  event.preventDefault();

  if (!currentAccess?.is_admin) {
    return;
  }

  const email = normalizeEmail(adminEmailInput.value);

  if (!email) {
    showMessage("Zadej platný Google email.", true);
    adminEmailInput.focus();
    return;
  }

  if (email === getCurrentUserEmail() && !adminIsAdmin.checked) {
    showMessage("Svůj vlastní účet nech raději jako admin.", true);
    return;
  }

  const { error } = await supabaseClient
    .from(ALLOWED_USERS_TABLE)
    .upsert({
      email,
      is_admin: adminIsAdmin.checked
    }, { onConflict: "email" });

  if (error) {
    showMessage(`Účet se nepodařilo povolit: ${error.message}`, true);
    return;
  }

  adminForm.reset();
  showMessage(`Účet ${email} je povolený.`);
  await loadAllowedUsers();
}

async function loadAllowedUsers() {
  if (!currentAccess?.is_admin) {
    return;
  }

  const { data, error } = await supabaseClient
    .from(ALLOWED_USERS_TABLE)
    .select("email,is_admin,created_at")
    .order("email", { ascending: true });

  if (error) {
    allowedUsersList.textContent = "";
    showMessage(`Seznam účtů se nepodařilo načíst: ${error.message}`, true);
    return;
  }

  renderAllowedUsers(data || []);
}

function renderAllowedUsers(users) {
  allowedUsersList.replaceChildren();

  if (!users.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Zatím není povolený žádný účet.";
    allowedUsersList.append(empty);
    return;
  }

  users.forEach((user) => {
    const row = document.createElement("div");
    row.className = "allowed-user-row";

    const email = document.createElement("span");
    email.className = "allowed-user-email";
    email.textContent = user.email;

    const role = document.createElement("span");
    role.className = `role-pill${user.is_admin ? "" : " is-user"}`;
    role.textContent = user.is_admin ? "Admin" : "Uživatel";

    const toggleAdmin = document.createElement("button");
    toggleAdmin.className = "ghost-button";
    toggleAdmin.type = "button";
    toggleAdmin.dataset.adminAction = "toggle-admin";
    toggleAdmin.dataset.email = user.email;
    toggleAdmin.dataset.isAdmin = String(user.is_admin);
    toggleAdmin.textContent = user.is_admin ? "Odebrat admin" : "Dát admin";
    toggleAdmin.disabled = user.email === getCurrentUserEmail() && user.is_admin;

    const remove = document.createElement("button");
    remove.className = "danger-button";
    remove.type = "button";
    remove.dataset.adminAction = "remove";
    remove.dataset.email = user.email;
    remove.textContent = "Odebrat";
    remove.disabled = user.email === getCurrentUserEmail();

    row.append(email, role, toggleAdmin, remove);
    allowedUsersList.append(row);
  });
}

async function handleAllowedUsersClick(event) {
  const button = event.target.closest("button[data-admin-action]");

  if (!button || !currentAccess?.is_admin) {
    return;
  }

  const email = button.dataset.email;

  if (button.dataset.adminAction === "remove") {
    await removeAllowedUser(email);
  }

  if (button.dataset.adminAction === "toggle-admin") {
    await updateAllowedUserAdmin(email, button.dataset.isAdmin !== "true");
  }
}

async function removeAllowedUser(email) {
  if (email === getCurrentUserEmail()) {
    showMessage("Svůj vlastní účet neodebírej tady v aplikaci.", true);
    return;
  }

  const confirmed = window.confirm(`Odebrat přístup pro ${email}?`);

  if (!confirmed) {
    return;
  }

  const { error } = await supabaseClient
    .from(ALLOWED_USERS_TABLE)
    .delete()
    .eq("email", email);

  if (error) {
    showMessage(`Účet se nepodařilo odebrat: ${error.message}`, true);
    return;
  }

  showMessage(`Účet ${email} už nemá přístup.`);
  await loadAllowedUsers();
}

async function updateAllowedUserAdmin(email, isAdmin) {
  if (email === getCurrentUserEmail() && !isAdmin) {
    showMessage("Svůj vlastní admin přístup neodebírej tady v aplikaci.", true);
    return;
  }

  const confirmed = window.confirm(
    isAdmin
      ? `Dát účtu ${email} admin přístup?`
      : `Odebrat účtu ${email} admin přístup?`
  );

  if (!confirmed) {
    return;
  }

  const { error } = await supabaseClient
    .from(ALLOWED_USERS_TABLE)
    .update({ is_admin: isAdmin })
    .eq("email", email);

  if (error) {
    showMessage(`Admin práva se nepodařilo změnit: ${error.message}`, true);
    return;
  }

  showMessage(`Admin práva pro ${email} upravena.`);
  await loadAllowedUsers();
}

function setState(state) {
  lists = state.lists;
  activeListId = state.activeListId;
}

function createDefaultState() {
  const list = createList("Produkty");

  return {
    lists: [list],
    activeListId: list.id
  };
}

function serializeState() {
  return {
    lists,
    activeListId
  };
}

function sanitizeState(state) {
  if (!state || !Array.isArray(state.lists)) {
    return createDefaultState();
  }

  const sanitizedLists = state.lists
    .filter((list) => list && typeof list.name === "string")
    .map((list) => {
      return {
        id: typeof list.id === "string" ? list.id : createId(),
        name: list.name,
        items: Array.isArray(list.items)
          ? list.items
            .filter((item) => {
              return item
                && typeof item.name === "string"
                && typeof item.unit === "string"
                && Number.isFinite(Number(item.amount));
            })
            .map((item) => {
              return {
                id: typeof item.id === "string" ? item.id : createId(),
                name: item.name,
                amount: Math.max(1, Math.trunc(Number(item.amount))),
                unit: item.unit
              };
            })
          : []
      };
    });

  if (!sanitizedLists.length) {
    return createDefaultState();
  }

  const activeId = sanitizedLists.some((list) => list.id === state.activeListId)
    ? state.activeListId
    : sanitizedLists[0].id;

  return {
    lists: sanitizedLists,
    activeListId: activeId
  };
}

function createList(name) {
  return {
    id: createId(),
    name,
    items: []
  };
}

function getActiveList() {
  return lists.find((list) => list.id === activeListId) || lists[0];
}

function getActiveItems() {
  return getActiveList().items;
}

async function addList() {
  const list = createList(getNextListName());
  lists.push(list);
  activeListId = list.id;
  resetForm();
  renderLists();
  renderItems();
  showMessage("Nový seznam přidán.");
  listNameInput.focus();
  listNameInput.select();
  await saveState();
}

function getNextListName() {
  let index = lists.length + 1;
  let name = `Seznam ${index}`;

  while (lists.some((list) => normalize(list.name) === normalize(name))) {
    index += 1;
    name = `Seznam ${index}`;
  }

  return name;
}

function switchList(id) {
  if (id === activeListId) {
    return;
  }

  activeListId = id;
  resetForm();
  renderLists();
  renderItems();
  showMessage("");
}

function renderLists(options = {}) {
  const activeList = getActiveList();
  const shouldSyncInput = options.syncInput !== false;

  listTabs.innerHTML = "";

  if (shouldSyncInput) {
    listNameInput.value = activeList.name;
  }

  pageTitle.textContent = getDisplayListName(activeList);

  lists.forEach((list) => {
    const tab = document.createElement("button");
    const isActive = list.id === activeList.id;

    tab.className = `list-tab${isActive ? " is-active" : ""}`;
    tab.type = "button";
    tab.dataset.listId = list.id;
    tab.role = "tab";
    tab.setAttribute("aria-selected", String(isActive));
    tab.textContent = getDisplayListName(list);
    listTabs.append(tab);
  });
}

function getDisplayListName(list) {
  return tidyName(list.name) || "Bez názvu";
}

function openDeleteListModal() {
  const activeList = getActiveList();
  const listName = getDisplayListName(activeList);

  deleteListModal.hidden = false;
  deleteListModal.querySelector("#delete-list-title").textContent = `Odebrat ${listName}`;
  deleteListDescription.textContent = `Opravdu chceš odebrat seznam ${listName}?`;
  cancelDeleteList.focus();
}

function closeDeleteListModal() {
  deleteListModal.hidden = true;
  deleteListButton.focus();
}

function openDeleteAllModal() {
  deleteAllModal.hidden = false;
  cancelDeleteAll.focus();
}

function closeDeleteAllModal() {
  deleteAllModal.hidden = true;
  deleteAllButton.focus();
}

async function confirmDeleteActiveList() {
  const removedList = getActiveList();
  const removedIndex = lists.findIndex((list) => list.id === removedList.id);

  lists = lists.filter((list) => list.id !== removedList.id);

  if (!lists.length) {
    setState(createDefaultState());
  } else {
    activeListId = lists[Math.max(0, removedIndex - 1)].id;
  }

  closeDeleteListModal();
  resetForm();
  renderLists();
  renderItems();
  showMessage(`Seznam ${getDisplayListName(removedList)} odebrán.`);
  await saveState();
}

async function confirmDeleteAllLists() {
  setState(createDefaultState());
  closeDeleteAllModal();
  resetForm();
  renderLists();
  renderItems();
  showMessage("Všechny seznamy byly smazány.");
  await saveState();
}

async function applyItemChange({ name, amount, unit, action }) {
  const list = getActiveList();
  const items = list.items;
  const existingItem = findItemByName(name);
  const matchedDifferentName = existingItem && normalize(existingItem.name) !== normalize(name);

  if (!existingItem) {
    if (action === "subtract") {
      showMessage("Položka v seznamu ještě není.", true);
      return;
    }

    items.push({
      id: createId(),
      name,
      amount,
      unit
    });
    showMessage("Položka přidána.");
  } else {
    const nextAmount = action === "add"
      ? existingItem.amount + amount
      : existingItem.amount - amount;

    if (nextAmount <= 0) {
      list.items = items.filter((item) => item.id !== existingItem.id);
      showMessage("Položka odebrána.");
    } else {
      existingItem.amount = roundAmount(nextAmount);

      if (matchedDifferentName) {
        showMessage(`Rozpoznáno jako ${existingItem.name}, počet ${action === "add" ? "navýšen" : "snížen"}.`);
      } else {
        showMessage(action === "add" ? "Počet navýšen." : "Počet snížen.");
      }
    }
  }

  renderItems();
  resetForm();
  await saveState();
}

async function updateEditedItem(name, amount, unit) {
  const list = getActiveList();
  const items = list.items;
  const editedItem = items.find((item) => item.id === editingId);

  if (!editedItem) {
    resetForm();
    return;
  }

  const duplicate = items.find((item) => {
    return item.id !== editingId
      && normalize(item.name) === normalize(name)
      && item.unit === unit;
  });

  if (duplicate) {
    duplicate.amount = roundAmount(duplicate.amount + amount);
    list.items = items.filter((item) => item.id !== editingId);
  } else {
    editedItem.name = name;
    editedItem.amount = roundAmount(amount);
    editedItem.unit = unit;
  }

  renderItems();
  resetForm();
  showMessage("Položka upravena.");
  await saveState();
}

function startEdit(id) {
  const item = getActiveItems().find((currentItem) => currentItem.id === id);

  if (!item) {
    return;
  }

  editingId = id;
  productInput.value = item.name;
  amountInput.value = String(item.amount);
  unitSelect.value = item.unit;
  setActionState("add");
  setActionButtonsDisabled(true);
  submitButton.textContent = "Uložit";
  cancelEditButton.hidden = false;
  productInput.focus();
  showMessage("");
}

async function removeItem(id) {
  const list = getActiveList();
  list.items = list.items.filter((item) => item.id !== id);
  renderItems();

  if (editingId === id) {
    resetForm();
  }

  showMessage("Položka smazána.");
  await saveState();
}

function renderItems() {
  const items = getActiveItems();
  itemsBody.innerHTML = "";
  renderProductOptions();

  tableWrap.classList.toggle("has-items", items.length > 0);

  items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><span class="product-name"></span></td>
        <td class="number-cell">${formatAmount(item.amount)}</td>
        <td class="unit-cell"></td>
        <td class="icon-cell">
          <button class="icon-button" type="button" data-action="edit" data-id="${item.id}" aria-label="Upravit ${escapeAttribute(item.name)}">
            ${icons.edit}
          </button>
        </td>
        <td class="icon-cell">
          <button class="icon-button delete" type="button" data-action="delete" data-id="${item.id}" aria-label="Smazat ${escapeAttribute(item.name)}">
            ${icons.trash}
          </button>
        </td>
      `;

      row.querySelector(".product-name").textContent = item.name;
      row.querySelector(".unit-cell").textContent = item.unit;
      itemsBody.append(row);
    });
}

function renderProductOptions() {
  const items = getActiveItems();
  productOptions.innerHTML = "";

  items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.label = item.unit;
      option.textContent = item.unit;
      productOptions.append(option);
    });
}

function resetForm() {
  editingId = null;
  form.reset();
  setActionState("add");
  setActionButtonsDisabled(false);
  submitButton.textContent = "Přidat";
  cancelEditButton.hidden = true;
  productInput.focus();
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("is-error", isError);
}

function setActionState(action) {
  actionSelect.value = action;

  actionButtons.forEach((button) => {
    const isActive = button.dataset.actionChoice === action;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setActionButtonsDisabled(disabled) {
  actionButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

function stepAmount(direction) {
  const min = Number(amountInput.min) || 1;
  const currentValue = Number(amountInput.value);
  const current = Number.isFinite(currentValue) && currentValue >= min
    ? currentValue
    : min;
  const next = Math.max(min, Math.trunc(current) + direction);

  amountInput.value = String(next);
  amountInput.dispatchEvent(new Event("input", { bubbles: true }));
  amountInput.focus();
}

function syncUnitFromProduct() {
  const item = findItemByName(productInput.value);

  if (item) {
    unitSelect.value = item.unit;
  }
}

function findItemByName(name) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  const exactMatch = getActiveItems().find((item) => normalize(item.name) === normalizedName);

  if (exactMatch) {
    return exactMatch;
  }

  return findFuzzyItemByName(normalizedName);
}

function findFuzzyItemByName(normalizedName) {
  if (normalizedName.length < 4) {
    return null;
  }

  const candidates = getActiveItems()
    .map((item) => {
      const itemName = normalize(item.name);
      const distance = getEditDistance(normalizedName, itemName);
      const maxLength = Math.max(normalizedName.length, itemName.length);

      return {
        item,
        distance,
        score: 1 - distance / maxLength
      };
    })
    .filter((candidate) => {
      return isLikelySameName(candidate.distance, candidate.score, Math.max(
        normalizedName.length,
        normalize(candidate.item.name).length
      ));
    })
    .sort((a, b) => {
      return a.distance - b.distance || b.score - a.score;
    });

  if (!candidates.length) {
    return null;
  }

  const [best, second] = candidates;

  if (second && best.distance === second.distance) {
    return null;
  }

  return best.item;
}

function isLikelySameName(distance, score, length) {
  if (distance === 0) {
    return true;
  }

  if (length < 4) {
    return false;
  }

  const maxDistance = length <= 5
    ? 1
    : length <= 8
      ? 2
      : 3;

  return distance <= maxDistance && score >= 0.68;
}

function getEditDistance(firstValue, secondValue) {
  const first = [...firstValue];
  const second = [...secondValue];
  const rows = first.length + 1;
  const columns = second.length + 1;
  const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let column = 0; column < columns; column += 1) {
    matrix[0][column] = column;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let column = 1; column < columns; column += 1) {
      const cost = first[row - 1] === second[column - 1] ? 0 : 1;

      matrix[row][column] = Math.min(
        matrix[row - 1][column] + 1,
        matrix[row][column - 1] + 1,
        matrix[row - 1][column - 1] + cost
      );

      if (
        row > 1
        && column > 1
        && first[row - 1] === second[column - 2]
        && first[row - 2] === second[column - 1]
      ) {
        matrix[row][column] = Math.min(
          matrix[row][column],
          matrix[row - 2][column - 2] + 1
        );
      }
    }
  }

  return matrix[first.length][second.length];
}

function tidyName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeEmail(value) {
  const email = value.trim().toLocaleLowerCase("cs");
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

function normalize(value) {
  return tidyName(value)
    .toLocaleLowerCase("cs")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function roundAmount(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function formatAmount(value) {
  return Number(value).toLocaleString("cs-CZ", {
    maximumFractionDigits: 2
  });
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
