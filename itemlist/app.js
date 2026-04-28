const form = document.querySelector("#entry-form");
const authScreen = document.querySelector("#auth-screen");
const appShell = document.querySelector("#app-shell");
const authMessage = document.querySelector("#auth-message");
const googleLoginButton = document.querySelector("#google-login-button");
const userEmail = document.querySelector("#user-email");
const logoutButton = document.querySelector("#logout-button");
const menuButton = document.querySelector("#menu-button");
const menuPanel = document.querySelector("#menu-panel");
const currentViewLabel = document.querySelector("#current-view-label");
const menuLinks = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");
const importButton = document.querySelector("#import-button");
const exportButton = document.querySelector("#export-button");
const exportFridgeButton = document.querySelector("#export-fridge-button");
const exportCatalogButton = document.querySelector("#export-catalog-button");
const anonymousExportButton = document.querySelector("#anonymous-export-button");
const receiptImportButton = document.querySelector("#receipt-import-button");
const eanImportButton = document.querySelector("#ean-import-button");
const xmlImportButton = document.querySelector("#xml-import-button");
const eanTool = document.querySelector("#ean-tool");
const eanInput = document.querySelector("#ean-input");
const eanLookupButton = document.querySelector("#ean-lookup-button");
const eanFileInput = document.querySelector("#ean-file-input");
const eanMessage = document.querySelector("#ean-message");
const receiptTool = document.querySelector("#receipt-tool");
const receiptFileInput = document.querySelector("#receipt-file-input");
const receiptMessage = document.querySelector("#receipt-message");
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
const categoryInput = document.querySelector("#category-input");
const categoryOptions = document.querySelector("#category-options");
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
const importModal = document.querySelector("#import-modal");
const importText = document.querySelector("#import-text");
const importError = document.querySelector("#import-error");
const cancelImport = document.querySelector("#cancel-import");
const confirmImport = document.querySelector("#confirm-import");
const itemsBody = document.querySelector("#items-body");
const tableWrap = document.querySelector(".table-wrap");
const historyList = document.querySelector("#history-list");
const historyDateFilter = document.querySelector("#history-date-filter");
const catalogBody = document.querySelector("#catalog-body");
const catalogForm = document.querySelector("#catalog-form");
const catalogName = document.querySelector("#catalog-name");
const catalogCategory = document.querySelector("#catalog-category");
const catalogUnit = document.querySelector("#catalog-unit");
const shoppingForm = document.querySelector("#shopping-form");
const shoppingInput = document.querySelector("#shopping-input");
const shoppingList = document.querySelector("#shopping-list");
const shoppingSubtractStock = document.querySelector("#shopping-subtract-stock");
const comboForm = document.querySelector("#combo-form");
const comboName = document.querySelector("#combo-name");
const comboItems = document.querySelector("#combo-items");
const comboSelect = document.querySelector("#combo-select");
const useComboButton = document.querySelector("#use-combo-button");
const comboList = document.querySelector("#combo-list");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const settingsShoppingSubtractStock = document.querySelector("#settings-shopping-subtract-stock");
const message = document.querySelector("#message");

const SUPABASE_TABLE = "shopping_app_state";
const ALLOWED_USERS_TABLE = "allowed_users";
const HISTORY_LIMIT = 120;
const IMPORT_UNITS = ["g", "ml", "ks", "Kč", "kč"];

let lists = [];
let activeListId = null;
let history = [];
let shoppingItems = [];
let combos = [];
let catalogItems = [];
let appSettings = {
  subtractStockFromShopping: false
};
let activeView = "pantry";
let editingId = null;
let supabaseClient = null;
let saveTimer = null;
let currentUser = null;
let currentAccess = null;
let listNameBeforeEdit = "";

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
  menuButton.addEventListener("click", toggleMenu);
  menuLinks.forEach((button) => {
    button.addEventListener("click", () => {
      switchView(button.dataset.view);
    });
  });
  importButton.addEventListener("click", () => openImportModal());
  exportButton.addEventListener("click", exportData);
  exportFridgeButton.addEventListener("click", exportFridge);
  exportCatalogButton.addEventListener("click", exportCatalog);
  anonymousExportButton.addEventListener("click", exportAnonymousData);
  receiptImportButton.addEventListener("click", openReceiptImport);
  eanImportButton.addEventListener("click", openEanImport);
  xmlImportButton.addEventListener("click", openXmlImport);
  eanLookupButton.addEventListener("click", lookupEanProduct);
  eanFileInput.addEventListener("change", scanEanFromFile);
  receiptFileInput.addEventListener("change", importReceiptFromImage);
  toggleAdminPanelButton.addEventListener("click", toggleAdminPanel);
  adminForm.addEventListener("submit", saveAllowedUser);
  allowedUsersList.addEventListener("click", handleAllowedUsersClick);
  historyDateFilter.addEventListener("input", renderHistory);
  darkModeToggle.addEventListener("change", toggleDarkMode);
  shoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  settingsShoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  catalogForm.addEventListener("submit", saveCatalogItem);
  shoppingForm.addEventListener("submit", addShoppingItem);
  shoppingList.addEventListener("click", handleShoppingClick);
  comboForm.addEventListener("submit", saveCombo);
  useComboButton.addEventListener("click", useSelectedCombo);
  comboList.addEventListener("click", handleComboClick);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = tidyName(productInput.value);
    const amount = Number(amountInput.value);
    const category = tidyName(categoryInput.value) || "Ostatní";
    const existingProduct = findItemByName(name);
    const action = actionSelect.value;
    const unit = existingProduct && action !== "set" ? existingProduct.unit : unitSelect.value;

    if (!name) {
      showMessage("Vyplň položku.", true);
      productInput.focus();
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      showMessage("Počet musí být číslo větší než nula.", true);
      amountInput.focus();
      return;
    }

    unitSelect.value = unit;

    if (editingId) {
      await updateEditedItem(name, amount, unit);
      return;
    }

    await applyItemChange({ name, amount, unit, action, category });
  });

  amountInput.addEventListener("input", () => {
    if (Number(amountInput.value) < 0) {
      amountInput.value = "";
    }
  });

  productInput.addEventListener("input", syncUnitFromProduct);
  productInput.addEventListener("change", syncUnitFromProduct);
  productInput.addEventListener("input", syncCategoryFromProduct);
  productInput.addEventListener("change", syncCategoryFromProduct);
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

  listNameInput.addEventListener("focus", () => {
    listNameBeforeEdit = getDisplayListName(getActiveList());
  });

  listNameInput.addEventListener("blur", () => {
    const list = getActiveList();

    if (!tidyName(list.name)) {
      list.name = "Bez názvu";
      renderLists();
      queueSaveState();
    }

    const nextName = getDisplayListName(list);

    if (listNameBeforeEdit && listNameBeforeEdit !== nextName) {
      recordHistory(`Seznam přejmenován z ${listNameBeforeEdit} na ${nextName}.`, "list");
      renderHistory();
      queueSaveState();
    }

    listNameBeforeEdit = "";
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActionState(button.dataset.actionChoice);
    });
  });
  actionSelect.addEventListener("change", () => {
    setActionState(actionSelect.value);
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
  cancelImport.addEventListener("click", closeImportModal);
  confirmImport.addEventListener("click", importShoppingList);

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

  importModal.addEventListener("click", (event) => {
    if (event.target === importModal) {
      closeImportModal();
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
  renderHistory();
  renderCatalog();
  renderShoppingList();
  renderCombos();
  syncSettingsControls();
  applyTheme();
  switchView(activeView, { keepMenu: true });
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

  switchView(activeView, { keepMenu: true });
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
    renderHistory();
    renderCatalog();
    renderShoppingList();
    renderCombos();
    syncSettingsControls();
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
  renderHistory();
  renderCatalog();
  renderShoppingList();
  renderCombos();
  syncSettingsControls();
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

function toggleMenu() {
  const nextHidden = !menuPanel.hidden;
  menuPanel.hidden = nextHidden;
  menuButton.setAttribute("aria-expanded", String(!nextHidden));
}

function switchView(view, options = {}) {
  activeView = view || "pantry";

  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === activeView;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  menuLinks.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === activeView);
  });

  const labels = {
    pantry: "Lednice",
    shopping: "Nákupní list",
    history: "Změny",
    catalog: "Číselník",
    combos: "Kombinace",
    tools: "Import / export",
    settings: "Nastavení"
  };

  currentViewLabel.textContent = labels[activeView] || "Lednice";

  if (!options.keepMenu) {
    menuPanel.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }
}

function exportData() {
  const exportedState = {
    exportedAt: new Date().toISOString(),
    user: getCurrentUserEmail(),
    ...serializeState()
  };
  const blob = new Blob([JSON.stringify(exportedState, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `itemlist-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  recordHistory("Export dat.", "export");
  renderHistory();
  queueSaveState();
  showMessage("Export připraven.");
}

function exportFridge() {
  downloadJson("lednice", getActiveItems());
  recordHistory("Export lednice.", "export");
  renderHistory();
  queueSaveState();
}

function exportCatalog() {
  downloadJson("ciselnik-potravin", getCatalogItems());
  recordHistory("Export číselníku potravin.", "export");
  renderHistory();
  queueSaveState();
}

function exportAnonymousData() {
  const anonymized = {
    exportedAt: new Date().toISOString(),
    user: "anonymous",
    lists: lists.map((list) => {
      return {
        ...list,
        id: anonymizeValue(list.id),
        items: list.items.map((item) => ({
          ...item,
          id: anonymizeValue(item.id)
        }))
      };
    }),
    shoppingItems: shoppingItems.map((item) => ({
      ...item,
      id: anonymizeValue(item.id)
    })),
    combos: combos.map((combo) => ({
      ...combo,
      id: anonymizeValue(combo.id)
    })),
    history: history.map((entry) => ({
      ...entry,
      id: anonymizeValue(entry.id)
    }))
  };

  downloadJson("itemlist-anonymizovano", anonymized);
  recordHistory("Anonymizovaný export dat.", "export");
  renderHistory();
  queueSaveState();
}

function downloadJson(name, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${name}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function anonymizeValue(value) {
  let hash = 0;
  const text = String(value || "");

  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(index);
    hash |= 0;
  }

  return `anon-${Math.abs(hash).toString(16)}`;
}

function openReceiptImport() {
  switchView("tools");
  receiptTool.hidden = false;
  eanTool.hidden = true;
  receiptMessage.textContent = "Vyber fotku účtenky. Text po rozpoznání ještě můžeš upravit před importem.";
  receiptFileInput.focus();
}

function openEanImport() {
  switchView("tools");
  eanTool.hidden = false;
  receiptTool.hidden = true;
  eanMessage.textContent = "Naskenuj fotku čárového kódu nebo zadej EAN ručně.";
  eanInput.focus();
}

function openXmlImport() {
  openImportModal("Import XML", "<items>\n  <item name=\"Mléko\" amount=\"1000\" unit=\"ml\" category=\"Mléčné\" />\n</items>");
}

function openImportModal(title = "Import", placeholder = "Rohlík 4 ks\nŠunka 100 g\nMléko 1000 ml") {
  importModal.hidden = false;
  importModal.querySelector("#import-title").textContent = title;
  importText.value = "";
  importText.placeholder = placeholder;
  importError.textContent = "";
  importText.focus();
}

function closeImportModal() {
  importModal.hidden = true;
  importText.value = "";
  importError.textContent = "";
  importButton.focus();
}

async function importShoppingList() {
  const parsedItems = importText.value.trim().startsWith("<")
    ? parseXmlItems(importText.value)
    : parseImportedItems(importText.value);

  if (!parsedItems.items.length) {
    importError.textContent = "Nenašel jsem žádnou použitelnou položku.";
    importText.focus();
    return;
  }

  const list = getActiveList();
  let added = 0;
  let updated = 0;

  parsedItems.items.forEach((importedItem) => {
    const result = upsertItemAmount({
      name: importedItem.name,
      amount: importedItem.amount,
      unit: importedItem.unit,
      action: "purchase",
      category: importedItem.category || "Ostatní"
    });

    if (result === "created") {
      added += 1;
    }

    if (result === "updated") {
      updated += 1;
    }
  });

  closeImportModal();
  renderItems();
  resetForm();
  recordHistory(`Importováno ${parsedItems.items.length} položek do ${getDisplayListName(list)}.`, "import", list);
  renderHistory();
  showMessage(getImportMessage(added, updated, parsedItems.skipped));
  await saveState();
}

function parseImportedItems(value) {
  const items = [];
  const skipped = [];
  const lines = value
    .split(/\r?\n|;/)
    .map((line) => tidyName(line))
    .filter(Boolean);

  lines.forEach((line) => {
    const parsed = parseImportLine(line);

    if (parsed) {
      items.push(parsed);
    } else {
      skipped.push(line);
    }
  });

  return { items, skipped };
}

function parseXmlItems(value) {
  const items = [];
  const skipped = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "application/xml");

  if (doc.querySelector("parsererror")) {
    return { items, skipped: [value] };
  }

  doc.querySelectorAll("item").forEach((node) => {
    const name = tidyName(node.getAttribute("name") || node.querySelector("name")?.textContent || "");
    const rawAmount = parseImportAmount(node.getAttribute("amount") || node.querySelector("amount")?.textContent || "1");
    const normalized = normalizeImportAmountAndUnit(rawAmount, node.getAttribute("unit") || node.querySelector("unit")?.textContent || unitSelect.value);
    const amount = normalized.amount;
    const unit = normalized.unit;
    const category = tidyName(node.getAttribute("category") || node.querySelector("category")?.textContent || "Ostatní");

    if (name && amount && unit) {
      items.push({ name, amount, unit, category });
    }
  });

  return { items, skipped };
}

function parseImportLine(line) {
  return parseNameFirstImportLine(line) || parseAmountFirstImportLine(line);
}

function parseNameFirstImportLine(line) {
  const match = line.match(/^(.+?)\s+(\d+(?:[,.]\d+)?)\s*([^\d\s]+(?:\s+[^\d\s]+)?)?$/u);

  if (!match) {
    return null;
  }

  const name = tidyName(match[1]);
  const parsedAmount = parseImportAmount(match[2]);
  const normalized = normalizeImportAmountAndUnit(parsedAmount, match[3] || unitSelect.value);
  const amount = normalized.amount;
  const unit = normalized.unit;

  if (!name || !amount || !unit) {
    return null;
  }

  return { name, amount, unit, category: "Ostatní" };
}

function parseAmountFirstImportLine(line) {
  const match = line.match(/^(\d+(?:[,.]\d+)?)\s*([^\d\s]+)?\s+(.+)$/u);

  if (!match) {
    return null;
  }

  const parsedAmount = parseImportAmount(match[1]);
  const normalized = normalizeImportAmountAndUnit(parsedAmount, match[2] || unitSelect.value);
  const amount = normalized.amount;
  const unit = normalized.unit;
  const name = tidyName(match[3]);

  if (!name || !amount || !unit) {
    return null;
  }

  return { name, amount, unit, category: "Ostatní" };
}

function parseImportAmount(value) {
  const amount = Number(String(value).replace(",", "."));
  return Number.isFinite(amount) && amount > 0 ? roundAmount(amount) : null;
}

function normalizeImportAmountAndUnit(amount, unitValue) {
  const normalized = normalize(String(unitValue || ""));

  if (normalized === "kg") {
    return { amount: roundAmount(amount * 1000), unit: "g" };
  }

  if (normalized === "l") {
    return { amount: roundAmount(amount * 1000), unit: "ml" };
  }

  return {
    amount,
    unit: normalizeImportUnit(unitValue)
  };
}

function normalizeImportUnit(value) {
  const normalizedUnit = tidyName(String(value || "")).toLocaleLowerCase("cs");
  const unitMap = {
    gramů: "g",
    gramu: "g",
    gramy: "g",
    gram: "g",
    gr: "g",
    g: "g",
    kusů: "ks",
    ks: "ks",
    kusu: "ks",
    kus: "ks",
    kusy: "ks",
    ml: "ml",
    mililitru: "ml",
    mililitrů: "ml",
    kc: "Kč",
    kč: "Kč",
    czk: "Kč",
    kg: "g",
    l: "ml"
  };
  const mappedUnit = unitMap[normalize(normalizedUnit)] || normalizedUnit;

  if (IMPORT_UNITS.includes(mappedUnit)) {
    return mappedUnit === "kč" ? "Kč" : mappedUnit;
  }

  return unitSelect.value || "ks";
}

function getImportMessage(added, updated, skipped) {
  const parts = [];

  if (added) {
    parts.push(`nových ${added}`);
  }

  if (updated) {
    parts.push(`upravených ${updated}`);
  }

  if (skipped.length) {
    parts.push(`přeskočeno ${skipped.length}`);
  }

  return `Import hotový: ${parts.join(", ")}.`;
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
  history = state.history || [];
  shoppingItems = state.shoppingItems || [];
  combos = state.combos || [];
  catalogItems = state.catalogItems || [];
  appSettings = {
    subtractStockFromShopping: Boolean(state.appSettings?.subtractStockFromShopping)
  };
}

function createDefaultState() {
  const list = createList("Produkty");

  return {
    lists: [list],
    activeListId: list.id,
    history: [],
    shoppingItems: [],
    combos: [],
    catalogItems: [],
    appSettings: {
      subtractStockFromShopping: false
    }
  };
}

function serializeState() {
  return {
    lists,
    activeListId,
    history,
    shoppingItems,
    combos,
    catalogItems,
    appSettings
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
                amount: Math.max(0.01, roundAmount(Number(item.amount))),
                unit: normalizeImportUnit(item.unit),
                category: typeof item.category === "string" ? item.category : "Ostatní"
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
  const sanitizedHistory = Array.isArray(state.history)
    ? state.history
      .filter((entry) => {
        return entry
          && typeof entry.text === "string"
          && typeof entry.createdAt === "string";
      })
      .map((entry) => {
        return {
          id: typeof entry.id === "string" ? entry.id : createId(),
          text: entry.text,
          type: typeof entry.type === "string" ? entry.type : "info",
          listName: typeof entry.listName === "string" ? entry.listName : "",
          createdAt: entry.createdAt
        };
      })
      .slice(0, HISTORY_LIMIT)
    : [];

  return {
    lists: sanitizedLists,
    activeListId: activeId,
    history: sanitizedHistory,
    shoppingItems: sanitizeShoppingItems(state.shoppingItems),
    combos: sanitizeCombos(state.combos),
    catalogItems: sanitizeCatalogItems(state.catalogItems),
    appSettings: {
      subtractStockFromShopping: Boolean(state.appSettings?.subtractStockFromShopping)
    }
  };
}

function sanitizeCatalogItems(items) {
  return Array.isArray(items)
    ? items
      .filter((item) => item && typeof item.name === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : createId(),
        name: tidyName(item.name),
        category: tidyName(item.category || "Ostatní"),
        unit: normalizeImportUnit(item.unit || "ks"),
        ean: typeof item.ean === "string" ? item.ean : ""
      }))
      .filter((item) => item.name)
    : [];
}

function sanitizeShoppingItems(items) {
  return Array.isArray(items)
    ? items
      .filter((item) => item && typeof item.name === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : createId(),
        name: item.name,
        done: Boolean(item.done),
        createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date().toISOString()
      }))
    : [];
}

function sanitizeCombos(items) {
  return Array.isArray(items)
    ? items
      .filter((combo) => combo && typeof combo.name === "string" && Array.isArray(combo.items))
      .map((combo) => ({
        id: typeof combo.id === "string" ? combo.id : createId(),
        name: combo.name,
        items: combo.items
          .filter((item) => item && typeof item.name === "string")
          .map((item) => ({
            name: item.name,
            amount: Math.max(0.01, roundAmount(Number(item.amount) || 1)),
            unit: normalizeImportUnit(item.unit || "ks"),
            category: typeof item.category === "string" ? item.category : "Ostatní"
          }))
      }))
    : [];
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
  recordHistory(`Přidán seznam ${getDisplayListName(list)}.`, "list", list);
  renderHistory();
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
  recordHistory(`Odebrán seznam ${getDisplayListName(removedList)}.`, "list", removedList);
  renderHistory();
  showMessage(`Seznam ${getDisplayListName(removedList)} odebrán.`);
  await saveState();
}

async function confirmDeleteAllLists() {
  const removedCount = lists.length;
  const previousHistory = history;
  setState(createDefaultState());
  history = previousHistory;
  closeDeleteAllModal();
  resetForm();
  renderLists();
  renderItems();
  recordHistory(`Smazány všechny seznamy (${removedCount}).`, "list");
  renderHistory();
  showMessage("Všechny seznamy byly smazány.");
  await saveState();
}

async function applyItemChange({ name, amount, unit, action, category }) {
  const existingItem = findItemByName(name);
  const matchedDifferentName = existingItem && normalize(existingItem.name) !== normalize(name);
  const result = upsertItemAmount({ name, amount, unit, action, category });
  const itemName = existingItem ? existingItem.name : name;

  if (result === "missing") {
    showMessage("Položka v seznamu ještě není.", true);
    return;
  }

  if (result === "created") {
    showMessage("Položka přidána.");
  }

  if (result === "removed") {
    showMessage("Položka odebrána.");
  }

  if (result === "set") {
    showMessage(matchedDifferentName
      ? `Rozpoznáno jako ${itemName}, počet nastaven.`
      : "Počet nastaven.");
  }

  if (result === "updated") {
    if (matchedDifferentName) {
      showMessage(`Rozpoznáno jako ${itemName}, počet ${action === "add" ? "navýšen" : "snížen"}.`);
    } else {
      showMessage(action === "add" ? "Počet navýšen." : "Počet snížen.");
    }
  }

  recordHistory(getItemHistoryText(itemName, amount, unit, action, result), "item");
  renderHistory();
  renderItems();
  resetForm();
  await saveState();
}

function upsertItemAmount({ name, amount, unit, action, category = "Ostatní" }) {
  const list = getActiveList();
  const items = list.items;
  const existingItem = findItemByName(name);

  const negativeActions = ["eaten", "discarded", "adjustMinus", "subtract"];
  const positiveActions = ["purchase", "gift", "adjustPlus", "add"];

  if (!existingItem) {
    if (negativeActions.includes(action)) {
      return "missing";
    }

    items.push({
      id: createId(),
      name,
      amount,
      unit,
      category
    });
    return "created";
  }

  if (action === "set") {
    existingItem.amount = roundAmount(amount);
    existingItem.unit = unit;
    existingItem.category = category || existingItem.category || "Ostatní";
    return "set";
  }

  const nextAmount = positiveActions.includes(action)
    ? existingItem.amount + amount
    : existingItem.amount - amount;

  if (nextAmount <= 0) {
    list.items = items.filter((item) => item.id !== existingItem.id);
    return "removed";
  }

  existingItem.amount = roundAmount(nextAmount);
  existingItem.category = category || existingItem.category || "Ostatní";
  return "updated";
}

function getItemHistoryText(name, amount, unit, action, result) {
  const labels = {
    purchase: "Nákup",
    gift: "Dar",
    eaten: "Snězeno",
    discarded: "Vyhozeno",
    adjustPlus: "Korekce +",
    adjustMinus: "Korekce -",
    add: "Přidáno",
    subtract: "Odebráno"
  };

  if (result === "removed") {
    return `${labels[action] || "Odebráno"}: ${name} do nuly.`;
  }

  if (result === "set") {
    return `Nastaveno ${name}: ${formatAmount(amount)} ${unit}.`;
  }

  if (["eaten", "discarded", "adjustMinus", "subtract"].includes(action)) {
    return `${labels[action]}: ${name} -${formatAmount(amount)} ${unit}.`;
  }

  if (result === "created") {
    return `${labels[action] || "Přidáno"}: ${name} ${formatAmount(amount)} ${unit}.`;
  }

  return `${labels[action] || "Přidáno"}: ${name} +${formatAmount(amount)} ${unit}.`;
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
    editedItem.category = tidyName(categoryInput.value) || editedItem.category || "Ostatní";
  }

  renderItems();
  resetForm();
  recordHistory(`Upravena položka ${name}: ${formatAmount(amount)} ${unit}.`, "item");
  renderHistory();
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
  categoryInput.value = item.category || "Ostatní";
  setActionState("set");
  setActionButtonsDisabled(true);
  submitButton.textContent = "Uložit";
  cancelEditButton.hidden = false;
  productInput.focus();
  showMessage("");
}

async function removeItem(id) {
  const list = getActiveList();
  const removedItem = list.items.find((item) => item.id === id);
  list.items = list.items.filter((item) => item.id !== id);
  renderItems();

  if (editingId === id) {
    resetForm();
  }

  showMessage("Položka smazána.");
  if (removedItem) {
    recordHistory(`Smazána položka ${removedItem.name}.`, "item", list);
    renderHistory();
  }
  await saveState();
}

async function addShoppingItem(event) {
  event.preventDefault();
  const name = tidyName(shoppingInput.value);

  if (!name) {
    return;
  }

  shoppingItems.unshift({
    id: createId(),
    name,
    done: false,
    createdAt: new Date().toISOString()
  });
  shoppingInput.value = "";
  recordHistory(`Do nákupního listu přidáno: ${name}.`, "shopping");
  renderShoppingList();
  renderHistory();
  await saveState();
}

async function updateShoppingSubtractSetting(event) {
  appSettings.subtractStockFromShopping = Boolean(event.target.checked);
  syncSettingsControls();
  renderShoppingList();
  recordHistory(
    appSettings.subtractStockFromShopping
      ? "Nákupní list odečítá aktuální zásoby."
      : "Nákupní list už zásoby neodečítá.",
    "settings"
  );
  renderHistory();
  await saveState();
}

function syncSettingsControls() {
  if (shoppingSubtractStock) {
    shoppingSubtractStock.checked = Boolean(appSettings.subtractStockFromShopping);
  }

  if (settingsShoppingSubtractStock) {
    settingsShoppingSubtractStock.checked = Boolean(appSettings.subtractStockFromShopping);
  }
}

async function handleShoppingClick(event) {
  const button = event.target.closest("button[data-shopping-action]");

  if (!button) {
    return;
  }

  const item = shoppingItems.find((currentItem) => currentItem.id === button.dataset.id);

  if (!item) {
    return;
  }

  if (button.dataset.shoppingAction === "toggle") {
    item.done = !item.done;
    recordHistory(`${item.done ? "Nakoupeno" : "Vráceno do nákupu"}: ${item.name}.`, "shopping");
  }

  if (button.dataset.shoppingAction === "remove") {
    shoppingItems = shoppingItems.filter((currentItem) => currentItem.id !== item.id);
    recordHistory(`Z nákupního listu odebráno: ${item.name}.`, "shopping");
  }

  renderShoppingList();
  renderHistory();
  await saveState();
}

function renderShoppingList() {
  shoppingList.replaceChildren();

  if (!shoppingItems.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Nákupní list je prázdný.";
    shoppingList.append(empty);
    return;
  }

  shoppingItems.forEach((item) => {
    const row = document.createElement("article");
    const content = document.createElement("div");
    const text = document.createElement("strong");
    const meta = document.createElement("span");
    const actions = document.createElement("div");
    const toggle = document.createElement("button");
    const remove = document.createElement("button");

    row.className = `card-row${item.done ? " is-done" : ""}`;
    content.className = "row-content";
    text.textContent = item.name;
    meta.className = "muted-text";
    meta.textContent = getShoppingItemMeta(item);
    actions.className = "row-actions";
    toggle.className = "ghost-button";
    toggle.type = "button";
    toggle.dataset.shoppingAction = "toggle";
    toggle.dataset.id = item.id;
    toggle.textContent = item.done ? "Vrátit" : "Hotovo";
    remove.className = "danger-button";
    remove.type = "button";
    remove.dataset.shoppingAction = "remove";
    remove.dataset.id = item.id;
    remove.textContent = "Smazat";

    content.append(text);

    if (meta.textContent) {
      content.append(meta);
    }

    actions.append(toggle, remove);
    row.append(content, actions);
    shoppingList.append(row);
  });
}

function getShoppingItemMeta(item) {
  if (!appSettings.subtractStockFromShopping) {
    return "";
  }

  const parsed = parseImportLine(item.name);

  if (!parsed) {
    return "Zadej třeba: Mléko 1000 ml, potom odečtu zásoby.";
  }

  const stocked = getActiveItems().find((currentItem) => {
    return normalize(currentItem.name) === normalize(parsed.name)
      && currentItem.unit === parsed.unit;
  });
  const currentAmount = stocked ? stocked.amount : 0;
  const missing = Math.max(0, roundAmount(parsed.amount - currentAmount));

  if (missing === 0) {
    return `V zásobách je ${formatAmount(currentAmount)} ${parsed.unit}, kupovat netřeba.`;
  }

  return `Koupit ještě ${formatAmount(missing)} ${parsed.unit} z ${formatAmount(parsed.amount)} ${parsed.unit}.`;
}

async function saveCombo(event) {
  event.preventDefault();
  const name = tidyName(comboName.value);
  const parsed = parseImportedItems(comboItems.value);

  if (!name || !parsed.items.length) {
    showMessage("Vyplň název kombinace a aspoň jednu položku.", true);
    return;
  }

  const existing = combos.find((combo) => normalize(combo.name) === normalize(name));

  if (existing) {
    existing.items = parsed.items;
  } else {
    combos.unshift({
      id: createId(),
      name,
      items: parsed.items
    });
  }

  comboForm.reset();
  recordHistory(`Uložena kombinace ${name}.`, "combo");
  renderCombos();
  renderCatalog();
  renderHistory();
  await saveState();
}

async function useSelectedCombo() {
  const combo = combos.find((currentCombo) => currentCombo.id === comboSelect.value);

  if (!combo) {
    showMessage("Vyber kombinaci.", true);
    return;
  }

  let changed = 0;

  combo.items.forEach((item) => {
    const result = upsertItemAmount({
      ...item,
      action: "eaten"
    });

    if (result !== "missing") {
      changed += 1;
    }
  });

  recordHistory(`Použita kombinace ${combo.name}, odečteno ${changed} položek.`, "combo");
  renderItems();
  renderCombos();
  renderHistory();
  showMessage(`Kombinace ${combo.name} použita.`);
  await saveState();
}

async function handleComboClick(event) {
  const button = event.target.closest("button[data-combo-action]");

  if (!button) {
    return;
  }

  const combo = combos.find((currentCombo) => currentCombo.id === button.dataset.id);

  if (!combo) {
    return;
  }

  if (button.dataset.comboAction === "remove") {
    combos = combos.filter((currentCombo) => currentCombo.id !== combo.id);
    recordHistory(`Smazána kombinace ${combo.name}.`, "combo");
  }

  renderCombos();
  renderCatalog();
  renderHistory();
  await saveState();
}

function renderCombos() {
  comboList.replaceChildren();
  comboSelect.replaceChildren();

  if (!combos.length) {
    const option = document.createElement("option");
    option.textContent = "Zatím žádná kombinace";
    option.value = "";
    comboSelect.append(option);
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Ulož si třeba kombinaci Rohlík se šunkou.";
    comboList.append(empty);
    return;
  }

  combos.forEach((combo) => {
    const option = document.createElement("option");
    const row = document.createElement("article");
    const text = document.createElement("strong");
    const meta = document.createElement("span");
    const remove = document.createElement("button");

    option.value = combo.id;
    option.textContent = combo.name;
    comboSelect.append(option);

    row.className = "card-row";
    text.textContent = combo.name;
    meta.className = "muted-text";
    meta.textContent = combo.items.map((item) => `${item.name} ${formatAmount(item.amount)} ${item.unit}`).join(", ");
    remove.className = "danger-button";
    remove.type = "button";
    remove.dataset.comboAction = "remove";
    remove.dataset.id = combo.id;
    remove.textContent = "Smazat";

    row.append(text, meta, remove);
    comboList.append(row);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
  localStorage.setItem("itemlist-dark-mode", darkModeToggle.checked ? "1" : "0");
}

function applyTheme() {
  const isDark = localStorage.getItem("itemlist-dark-mode") === "1";
  darkModeToggle.checked = isDark;
  document.body.classList.toggle("dark-mode", isDark);
}

function renderItems() {
  const items = getActiveItems();
  itemsBody.innerHTML = "";
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();

  tableWrap.classList.toggle("has-items", items.length > 0);

  items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><span class="product-name"></span></td>
        <td class="category-cell"></td>
        <td class="number-cell">${formatAmount(item.amount)}</td>
        <td class="unit-cell"></td>
        <td class="icon-cell">
          <div class="row-actions">
            <button class="ghost-button" type="button" data-action="edit" data-id="${item.id}" aria-label="Upravit ${escapeAttribute(item.name)}">Upravit</button>
            <button class="danger-button" type="button" data-action="delete" data-id="${item.id}" aria-label="Smazat ${escapeAttribute(item.name)}">Smazat</button>
          </div>
        </td>
      `;

      row.querySelector(".product-name").textContent = item.name;
      row.querySelector(".category-cell").textContent = item.category || "Ostatní";
      row.querySelector(".unit-cell").textContent = item.unit;
      itemsBody.append(row);
    });
}

function renderProductOptions() {
  productOptions.innerHTML = "";

  getCatalogItems()
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

function renderCategoryOptions() {
  if (!categoryOptions) {
    return;
  }

  const categories = [...new Set(getCatalogItems().map((item) => item.category || "Ostatní"))].sort((a, b) => a.localeCompare(b, "cs"));
  categoryOptions.replaceChildren();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    categoryOptions.append(option);
  });
}

async function saveCatalogItem(event) {
  event.preventDefault();
  const name = tidyName(catalogName.value);
  const category = tidyName(catalogCategory.value) || "Ostatní";
  const unit = normalizeImportUnit(catalogUnit.value || "ks");

  if (!name) {
    showMessage("Zadej název potraviny do číselníku.", true);
    catalogName.focus();
    return;
  }

  upsertCatalogItem({ name, category, unit });
  catalogForm.reset();
  catalogUnit.value = unit;
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  recordHistory(`Číselník: uložena potravina ${name}.`, "catalog");
  renderHistory();
  showMessage(`Potravina ${name} je v číselníku.`);
  await saveState();
}

async function lookupEanProduct() {
  const ean = String(eanInput.value || "").replace(/\D/g, "");

  if (!/^\d{8,14}$/.test(ean)) {
    eanMessage.textContent = "Zadej platný EAN, obvykle 8 až 14 číslic.";
    eanInput.focus();
    return;
  }

  eanMessage.textContent = "Hledám potravinu v Open Food Facts...";

  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${ean}.json?fields=product_name,product_name_cs,generic_name,brands,categories,categories_tags,quantity,code`);
    const data = await response.json();

    if (!response.ok || data.status === 0 || !data.product) {
      eanMessage.textContent = "EAN jsem nenašel. Můžeš položku doplnit ručně a uložit do číselníku.";
      return;
    }

    const product = mapOpenFoodFactsProduct(data.product, ean);
    productInput.value = product.name;
    categoryInput.value = product.category;
    amountInput.value = product.amount;
    unitSelect.value = product.unit;
    upsertCatalogItem(product);
    renderProductOptions();
    renderCategoryOptions();
    renderCatalog();
    switchView("pantry");
    eanMessage.textContent = `Načteno: ${product.name}.`;
    showMessage(`EAN našel ${product.name}. Stačí potvrdit akci.`);
    recordHistory(`EAN načten: ${product.name}.`, "catalog");
    renderHistory();
    await saveState();
  } catch (error) {
    eanMessage.textContent = "EAN API teď neodpovídá. Zkus to za chvíli nebo zadej položku ručně.";
  }
}

async function scanEanFromFile(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  if (!("BarcodeDetector" in window)) {
    eanMessage.textContent = "Tenhle prohlížeč neumí číst EAN z fotky. Zadej číslo ručně.";
    return;
  }

  eanMessage.textContent = "Čtu čárový kód z obrázku...";

  try {
    const bitmap = await createImageBitmap(file);
    const detector = new BarcodeDetector({
      formats: ["ean_13", "ean_8", "upc_a", "upc_e"]
    });
    const codes = await detector.detect(bitmap);
    const code = codes[0]?.rawValue || "";

    if (!code) {
      eanMessage.textContent = "Na fotce jsem EAN nenašel. Zkus ostřejší fotku nebo číslo napiš.";
      return;
    }

    eanInput.value = code;
    await lookupEanProduct();
  } catch (error) {
    eanMessage.textContent = "Sken se nepovedl. Zkus jinou fotku nebo ruční zadání.";
  } finally {
    eanFileInput.value = "";
  }
}

async function importReceiptFromImage(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  if (!window.Tesseract) {
    receiptMessage.textContent = "OCR knihovna se nenačetla. Účtenku můžeš zatím přepsat přes hromadný import.";
    return;
  }

  receiptMessage.textContent = "Rozpoznávám text z účtenky...";

  try {
    const result = await recognizeReceiptText(file);
    const text = tidyReceiptText(result);

    if (!text) {
      receiptMessage.textContent = "Z účtenky jsem nevyčetl žádný použitelný text.";
      return;
    }

    openImportModal("Import z účtenky", "Rozpoznané položky uprav a potvrď.");
    importText.value = text;
    importError.textContent = "Zkontroluj množství a jednotky, účtenky bývají šumivé.";
    receiptMessage.textContent = "Hotovo. Otevřel jsem import, kde si text doladíš.";
  } catch (error) {
    receiptMessage.textContent = "OCR se nepovedlo. Zkus ostřejší fotku nebo ruční hromadný import.";
  } finally {
    receiptFileInput.value = "";
  }
}

async function recognizeReceiptText(file) {
  try {
    const { data } = await Tesseract.recognize(file, "ces+eng");
    return data.text || "";
  } catch (error) {
    const { data } = await Tesseract.recognize(file, "eng");
    return data.text || "";
  }
}

function tidyReceiptText(text) {
  return text
    .split(/\r?\n/)
    .map((line) => tidyName(line.replace(/\s+\d+[,.]\d{2}\s*(Kč|CZK)?$/i, "")))
    .filter((line) => /[a-zá-ž]/i.test(line))
    .slice(0, 80)
    .join("\n");
}

function mapOpenFoodFactsProduct(product, ean) {
  const name = tidyName(product.product_name_cs || product.product_name || product.generic_name || product.brands || `EAN ${ean}`);
  const category = inferProductCategory(product);
  const quantity = inferQuantity(product.quantity);

  return {
    id: createId(),
    name,
    category,
    amount: quantity.amount,
    unit: quantity.unit,
    ean
  };
}

function inferQuantity(quantity) {
  const match = String(quantity || "").match(/(\d+(?:[,.]\d+)?)\s*(kg|g|l|ml|ks|pcs|pc)/i);

  if (!match) {
    return { amount: 1, unit: "ks" };
  }

  const amount = parseImportAmount(match[1]) || 1;
  const normalized = normalizeImportAmountAndUnit(amount, match[2]);
  return {
    amount: normalized.amount,
    unit: normalized.unit
  };
}

function inferProductCategory(product) {
  const text = [
    product.categories,
    ...(Array.isArray(product.categories_tags) ? product.categories_tags : [])
  ].join(" ").toLocaleLowerCase("cs");

  const rules = [
    [/dair|milk|yogurt|cheese|mlé|sýr|jogurt/, "Mléčné"],
    [/bread|bakery|peč|rohl|hous/, "Pečivo"],
    [/meat|ham|salami|maso|šunk|salám/, "Maso"],
    [/fruit|vegetable|ovoce|zelen/, "Ovoce a zelenina"],
    [/beverage|drink|water|juice|nápoj|voda|džus/, "Nápoje"],
    [/sweet|chocolate|candy|sušen|čokol/, "Sladké"],
    [/frozen|mraž/, "Mražené"]
  ];
  const match = rules.find(([pattern]) => pattern.test(text));

  return match ? match[1] : "Ostatní";
}

function upsertCatalogItem(item) {
  const existing = catalogItems.find((currentItem) => normalize(currentItem.name) === normalize(item.name));

  if (existing) {
    existing.category = item.category || existing.category || "Ostatní";
    existing.unit = item.unit || existing.unit || "ks";
    existing.ean = item.ean || existing.ean || "";
    return;
  }

  catalogItems.unshift({
    id: item.id || createId(),
    name: item.name,
    category: item.category || "Ostatní",
    unit: item.unit || "ks",
    ean: item.ean || ""
  });
}

function renderCatalog() {
  if (!catalogBody) {
    return;
  }

  catalogBody.replaceChildren();

  getCatalogItems().forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td></td>
      <td></td>
      <td></td>
    `;
    row.children[0].textContent = item.name;
    row.children[1].textContent = item.category;
    row.children[2].textContent = item.unit;
    catalogBody.append(row);
  });
}

function getCatalogItems() {
  const map = new Map();

  catalogItems.forEach((item) => {
    const key = normalize(item.name);

    if (!map.has(key)) {
      map.set(key, {
        name: item.name,
        category: item.category || "Ostatní",
        unit: item.unit || "ks"
      });
    }
  });

  lists.forEach((list) => {
    list.items.forEach((item) => {
      const key = normalize(item.name);

      if (!map.has(key)) {
        map.set(key, {
          name: item.name,
          category: item.category || "Ostatní",
          unit: item.unit
        });
      }
    });
  });

  combos.forEach((combo) => {
    combo.items.forEach((item) => {
      const key = normalize(item.name);

      if (!map.has(key)) {
        map.set(key, {
          name: item.name,
          category: item.category || "Ostatní",
          unit: item.unit
        });
      }
    });
  });

  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function recordHistory(text, type = "info", list = getActiveList()) {
  history.unshift({
    id: createId(),
    text,
    type,
    listName: list ? getDisplayListName(list) : "",
    createdAt: new Date().toISOString()
  });
  history = history.slice(0, HISTORY_LIMIT);
}

function renderHistory() {
  historyList.replaceChildren();
  const selectedDate = historyDateFilter?.value || "";
  const visibleHistory = selectedDate
    ? history.filter((entry) => entry.createdAt.slice(0, 10) === selectedDate)
    : history;

  if (!visibleHistory.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = selectedDate ? "Pro vybrané datum nejsou žádné změny." : "Historie je zatím prázdná.";
    historyList.append(empty);
    return;
  }

  visibleHistory.slice(0, 80).forEach((entry) => {
    const row = document.createElement("article");
    const text = document.createElement("strong");
    const time = document.createElement("time");
    const date = new Date(entry.createdAt);

    row.className = "history-entry";
    text.textContent = entry.text;
    time.dateTime = entry.createdAt;
    time.textContent = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleString("cs-CZ", {
        dateStyle: "short",
        timeStyle: "short"
      });

    row.append(text, time);
    historyList.append(row);
  });
}

function resetForm() {
  editingId = null;
  form.reset();
  setActionState("add");
  setActionButtonsDisabled(false);
  updateSubmitButtonText();
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

  updateSubmitButtonText();
}

function setActionButtonsDisabled(disabled) {
  actionButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

function updateSubmitButtonText() {
  if (editingId) {
    submitButton.textContent = "Uložit";
    return;
  }

  const labels = {
    purchase: "Zapsat nákup",
    gift: "Zapsat dar",
    eaten: "Odečíst snězené",
    discarded: "Odečíst vyhozené",
    adjustPlus: "Korekce +",
    adjustMinus: "Korekce -",
    add: "Přidat",
    subtract: "Odebrat",
    set: "Nastavit"
  };

  submitButton.textContent = labels[actionSelect.value] || "Zapsat";
}

function stepAmount(direction) {
  const min = Number(amountInput.min) || 1;
  const currentValue = Number(amountInput.value);
  const current = Number.isFinite(currentValue) && currentValue >= min
    ? currentValue
    : min;
  const next = Math.max(min, roundAmount(current + direction));

  amountInput.value = String(next);
  amountInput.dispatchEvent(new Event("input", { bubbles: true }));
  amountInput.focus();
}

function syncUnitFromProduct() {
  const item = findCatalogItemByName(productInput.value) || findItemByName(productInput.value);

  if (item) {
    unitSelect.value = item.unit;
  }
}

function syncCategoryFromProduct() {
  const item = findCatalogItemByName(productInput.value) || findItemByName(productInput.value);

  if (item) {
    categoryInput.value = item.category || "Ostatní";
  }
}

function findCatalogItemByName(name) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  return getCatalogItems().find((item) => normalize(item.name) === normalizedName) || null;
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
