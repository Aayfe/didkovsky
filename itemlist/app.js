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
const xmlFileButton = document.querySelector("#xml-file-button");
const xmlFileInput = document.querySelector("#xml-file-input");
const xmlExportButton = document.querySelector("#xml-export-button");
const eanTool = document.querySelector("#ean-tool");
const eanInput = document.querySelector("#ean-input");
const eanLookupButton = document.querySelector("#ean-lookup-button");
const eanFileInput = document.querySelector("#ean-file-input");
const eanResult = document.querySelector("#ean-result");
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
const actionComboInput = document.querySelector("#action-combo-input");
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
const shoppingProduct = document.querySelector("#shopping-product");
const shoppingAmount = document.querySelector("#shopping-amount");
const shoppingUnit = document.querySelector("#shopping-unit");
const shoppingList = document.querySelector("#shopping-list");
const shoppingSubtractStock = document.querySelector("#shopping-subtract-stock");
const comboForm = document.querySelector("#combo-form");
const comboName = document.querySelector("#combo-name");
const comboItemsList = document.querySelector("#combo-items-list");
const addComboItemButton = document.querySelector("#add-combo-item");
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
const DEFAULT_CATEGORIES = [
  "Pečivo",
  "Mléčné",
  "Maso",
  "Ovoce a zelenina",
  "Nápoje",
  "Sladké",
  "Mražené",
  "Trvanlivé",
  "Drogerie",
  "Kombinace",
  "Ostatní"
];
const RECEIPT_SKIP_PATTERNS = [
  /^(celkem|suma|součet|subtotal|total|hotově|hotovost|kartou|visa|mastercard|cash|vráceno|zaplaceno|účtenka|ucet|datum|čas|dic|dič|ičo|ico|provozovna|pokladna|doklad|terminál|terminal|děkujeme|dekujeme|www|tel\.?|eet|fik|bkp)\b/iu,
  /\b(dph|vat|sazba|základ|zaklad|sleva|platební|platebni|transakce|autorizační|autorizacni)\b/iu,
  /^[\d\s.,:/\\-]+$/u
];
const CATEGORY_NAME_RULES = [
  [/rohl|hous|chleb|baget|toast|toust|pečiv|peciv|vánoč|vanoc|koláč|kolac|buch/, "Pečivo"],
  [/mlék|mlek|másl|masl|sýr|syr|jogurt|tvaroh|smetan|kefír|kefir|mozzarell|eidam|gouda/, "Mléčné"],
  [/kuř|kur|vepř|vepr|hověz|hovez|maso|šunk|sunk|salám|salam|slanina|klobás|klobas|párk|park/, "Maso"],
  [/jabl|banán|banan|rajč|rajc|okurk|paprik|brambor|cibul|mrkev|salát|salat|citron|pomeranč|pomeranc|ovoce|zelen/, "Ovoce a zelenina"],
  [/voda|minerál|mineral|džus|dzus|cola|limon|pivo|víno|vino|nápoj|napoj|sirup/, "Nápoje"],
  [/čokol|cokol|sušenk|susenk|oplat|bonbon|cukr|zmrz|dezert|sladk/, "Sladké"],
  [/mraž|mraz|pizza|hranolky/, "Mražené"],
  [/rýž|ryz|těst|test|mouka|olej|sůl|sul|kečup|kecup|hořč|horc|konzerv|trvanl|vločky|vlocky/, "Trvanlivé"],
  [/jar|prášek|prasek|ubrousk|papír|papir|šampon|sampon|mýdlo|mydlo|droger/, "Drogerie"]
];
const PRODUCT_WORDS = {
  rohlik: "rohlík",
  rohliky: "rohlíky",
  chleba: "chleba",
  chleb: "chléb",
  mleko: "mléko",
  maslo: "máslo",
  syr: "sýr",
  sunka: "šunka",
  salam: "salám",
  kure: "kuře",
  kvetak: "květák",
  mrkev: "mrkev",
  vejce: "vejce",
  vajecna: "vaječná",
  pomazanka: "pomazánka",
  jogurt: "jogurt",
  ryze: "rýže",
  testoviny: "těstoviny",
  mouka: "mouka",
  cukr: "cukr",
  sul: "sůl",
  krystal: "krystal",
  toust: "toust"
};

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
let editingCatalogId = null;
let pendingEanProduct = null;
let activeComboboxInput = null;
let activeComboboxIndex = -1;

const COMBOBOX_INPUT_SELECTOR = "[data-combobox-source]";

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
  xmlFileButton.addEventListener("click", () => xmlFileInput.click());
  xmlFileInput.addEventListener("change", importXmlFromFile);
  xmlExportButton.addEventListener("click", exportXml);
  eanLookupButton.addEventListener("click", lookupEanProduct);
  eanFileInput.addEventListener("change", scanEanFromFile);
  eanResult.addEventListener("click", handleEanResultClick);
  receiptFileInput.addEventListener("change", importReceiptFromImage);
  toggleAdminPanelButton.addEventListener("click", toggleAdminPanel);
  adminForm.addEventListener("submit", saveAllowedUser);
  allowedUsersList.addEventListener("click", handleAllowedUsersClick);
  historyDateFilter.addEventListener("input", renderHistory);
  darkModeToggle.addEventListener("change", toggleDarkMode);
  shoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  settingsShoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  catalogForm.addEventListener("submit", saveCatalogItem);
  catalogBody.addEventListener("click", handleCatalogClick);
  shoppingForm.addEventListener("submit", addShoppingItem);
  shoppingProduct.addEventListener("input", syncShoppingUnitFromProduct);
  shoppingProduct.addEventListener("change", syncShoppingUnitFromProduct);
  shoppingList.addEventListener("click", handleShoppingClick);
  comboForm.addEventListener("submit", saveCombo);
  addComboItemButton.addEventListener("click", () => addComboItemRow());
  comboItemsList.addEventListener("click", handleComboBuilderClick);
  comboItemsList.addEventListener("input", handleComboBuilderInput);
  comboItemsList.addEventListener("change", handleComboBuilderInput);
  useComboButton.addEventListener("click", useSelectedCombo);
  comboList.addEventListener("click", handleComboClick);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = formatProductName(productInput.value);
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

    const combo = findComboByName(name);

    if (combo && !editingId) {
      await applyComboChange(combo, amount, action);
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

  setupComboboxes();

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

function setupComboboxes() {
  document.addEventListener("focusin", (event) => {
    const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

    if (!input) {
      return;
    }

    prepareComboboxInput(input);
    renderComboboxMenu(input);
  });

  document.addEventListener("input", (event) => {
    const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

    if (input) {
      renderComboboxMenu(input);
    }
  });

  document.addEventListener("click", (event) => {
    const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

    if (input && input === activeComboboxInput) {
      renderComboboxMenu(input);
    }
  });

  document.addEventListener("keydown", handleComboboxKeydown);

  document.addEventListener("pointerdown", (event) => {
    if (!activeComboboxInput) {
      return;
    }

    const menu = getComboboxMenu(activeComboboxInput, false);

    if (event.target === activeComboboxInput || menu?.contains(event.target)) {
      return;
    }

    hideComboboxMenu(activeComboboxInput);
  });
}

function prepareComboboxInput(input) {
  const field = input.closest(".field");

  input.setAttribute("autocomplete", "off");
  input.setAttribute("autocapitalize", "sentences");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");

  if (field) {
    field.classList.add("has-combobox");
  }
}

function renderComboboxMenu(input) {
  const options = getComboboxOptions(input);
  const menu = getComboboxMenu(input);

  activeComboboxInput = input;
  activeComboboxIndex = -1;
  menu.replaceChildren();

  if (!options.length) {
    hideComboboxMenu(input);
    return;
  }

  options.forEach((item, index) => {
    const button = document.createElement("button");
    const text = document.createElement("span");
    const meta = document.createElement("small");

    button.className = "combobox-option";
    button.type = "button";
    button.dataset.index = String(index);
    button.dataset.value = item.value;
    button.dataset.optionValue = item.optionValue;
    button.setAttribute("role", "option");
    text.textContent = item.value;
    button.append(text);

    if (item.meta) {
      meta.textContent = item.meta;
      button.append(meta);
    }

    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });
    button.addEventListener("click", () => {
      selectComboboxValue(input, item.value, item.optionValue);
    });

    menu.append(button);
  });

  menu.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function getComboboxOptions(input) {
  const source = document.getElementById(input.dataset.comboboxSource);

  if (!source) {
    return [];
  }

  const query = input.readOnly ? "" : normalize(input.value);
  const seen = new Set();

  return [...source.options]
    .map((option) => ({
      value: option.value || option.textContent || "",
      meta: option.label || option.textContent || "",
      optionValue: option.dataset.value || option.value || option.textContent || ""
    }))
    .filter((item) => {
      const key = normalize(item.value);

      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);

      if (!query) {
        return true;
      }

      return key.includes(query) || normalize(item.meta).includes(query);
    })
    .sort((a, b) => a.value.localeCompare(b.value, "cs"))
    .slice(0, 8);
}

function getComboboxMenu(input, createIfMissing = true) {
  const field = input.closest(".field") || input.parentElement;
  let menu = field?.querySelector(".combobox-menu");

  if (!menu && createIfMissing && field) {
    menu = document.createElement("div");
    menu.className = "combobox-menu";
    menu.hidden = true;
    menu.setAttribute("role", "listbox");
    field.append(menu);
  }

  return menu;
}

function handleComboboxKeydown(event) {
  const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

  if (!input) {
    return;
  }

  const menu = getComboboxMenu(input, false);
  const options = menu && !menu.hidden ? [...menu.querySelectorAll(".combobox-option")] : [];

  if (event.key === "ArrowDown") {
    event.preventDefault();

    if (!options.length) {
      renderComboboxMenu(input);
      return;
    }

    setComboboxIndex(input, Math.min(activeComboboxIndex + 1, options.length - 1));
  }

  if (event.key === "ArrowUp" && options.length) {
    event.preventDefault();
    setComboboxIndex(input, Math.max(activeComboboxIndex - 1, 0));
  }

  if (event.key === "Enter" && options.length && activeComboboxIndex >= 0) {
    event.preventDefault();
    selectComboboxValue(input, options[activeComboboxIndex].dataset.value, options[activeComboboxIndex].dataset.optionValue);
  }

  if (event.key === "Escape") {
    hideComboboxMenu(input);
  }
}

function setComboboxIndex(input, index) {
  const menu = getComboboxMenu(input, false);

  if (!menu) {
    return;
  }

  const options = [...menu.querySelectorAll(".combobox-option")];
  activeComboboxIndex = index;

  options.forEach((option, optionIndex) => {
    option.classList.toggle("is-active", optionIndex === index);
  });

  options[index]?.scrollIntoView({ block: "nearest" });
}

function selectComboboxValue(input, value, optionValue = value) {
  input.value = value;

  if (input.dataset.selectCombobox) {
    const select = document.getElementById(input.dataset.selectCombobox);

    if (select) {
      select.value = optionValue;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
  hideComboboxMenu(input);
  input.focus();
}

function hideComboboxMenu(input) {
  const menu = getComboboxMenu(input, false);

  if (menu) {
    menu.hidden = true;
  }

  input?.setAttribute("aria-expanded", "false");

  if (activeComboboxInput === input) {
    activeComboboxInput = null;
    activeComboboxIndex = -1;
  }
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

function exportXml() {
  const xml = buildItemsXml(getActiveItems(), getDisplayListName(getActiveList()));
  downloadText("lednice", "xml", xml, "application/xml");
  recordHistory("Export XML lednice.", "export");
  renderHistory();
  queueSaveState();
  showMessage("XML export připraven.");
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
  downloadText(name, "json", JSON.stringify(data, null, 2), "application/json");
}

function downloadText(name, extension, text, type) {
  const blob = new Blob([text], {
    type
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${name}-${new Date().toISOString().slice(0, 10)}.${extension}`;
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
  clearEanResult();
  eanMessage.textContent = "Naskenuj fotku čárového kódu nebo zadej EAN ručně.";
  eanInput.focus();
}

function openXmlImport() {
  openImportModal("Import XML", getXmlExample());
  importError.textContent = "Použij stejný formát jako Export XML, nebo vyber XML soubor v nástrojích.";
}

async function importXmlFromFile(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    openImportModal("Import XML", getXmlExample());
    importText.value = text.trim();
    importError.textContent = "XML soubor je načtený. Zkontroluj položky a potvrď import.";
    confirmImport.focus();
  } catch (error) {
    showMessage("XML soubor se nepodařilo načíst.", true);
  } finally {
    xmlFileInput.value = "";
  }
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
    const rawName = readXmlValue(node, "name");
    const rawAmount = parseImportAmount(readXmlValue(node, "amount") || "1") || 1;
    const rawUnit = readXmlValue(node, "unit") || unitSelect.value;
    const rawCategory = readXmlValue(node, "category");
    const name = formatProductName(rawName);
    const normalized = normalizeImportAmountAndUnit(rawAmount, rawUnit);
    const amount = normalized.amount;
    const unit = normalized.unit;
    const category = tidyName(rawCategory) || inferCategoryFromName(name);

    if (name && amount && unit) {
      items.push({ name, amount, unit, category });
    } else {
      skipped.push(node.outerHTML || rawName || "item");
    }
  });

  return { items, skipped };
}

function readXmlValue(node, name) {
  return node.getAttribute(name) || node.querySelector(name)?.textContent || "";
}

function getXmlExample() {
  return [
    '<domaci-zasoby version="1">',
    '  <items list="Lednice">',
    '    <item name="Mléko" category="Mléčné" amount="1000" unit="ml" />',
    '    <item name="Rohlík" category="Pečivo" amount="4" unit="ks" />',
    '  </items>',
    '</domaci-zasoby>'
  ].join("\n");
}

function buildItemsXml(items, listName) {
  const rows = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .map((item) => {
      return `    <item name="${escapeXml(item.name)}" category="${escapeXml(item.category || inferCategoryFromName(item.name))}" amount="${escapeXml(formatXmlAmount(item.amount))}" unit="${escapeXml(item.unit || "ks")}" />`;
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<domaci-zasoby version="1">',
    `  <items list="${escapeXml(listName || "Lednice")}">`,
    rows || '    <!-- Žádné položky -->',
    '  </items>',
    '</domaci-zasoby>',
    ''
  ].join("\n");
}

function formatXmlAmount(value) {
  return String(roundAmount(Number(value) || 0)).replace(",", ".");
}

function parseImportLine(line) {
  return parseNameFirstImportLine(line) || parseAmountFirstImportLine(line);
}

function parseNameFirstImportLine(line) {
  const match = line.match(/^(.+?)\s+(\d+(?:[,.]\d+)?)\s*([^\d\s]+(?:\s+[^\d\s]+)?)?$/u);

  if (!match) {
    return null;
  }

  const name = formatProductName(match[1]);
  const parsedAmount = parseImportAmount(match[2]);
  const normalized = normalizeImportAmountAndUnit(parsedAmount, match[3] || unitSelect.value);
  const amount = normalized.amount;
  const unit = normalized.unit;

  if (!name || !amount || !unit) {
    return null;
  }

  return { name, amount, unit, category: inferCategoryFromName(name) };
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
  const name = formatProductName(match[3]);

  if (!name || !amount || !unit) {
    return null;
  }

  return { name, amount, unit, category: inferCategoryFromName(name) };
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
  mergeShoppingItems();
  combos = state.combos || [];
  catalogItems = state.catalogItems || [];
  appSettings = {
    subtractStockFromShopping: Boolean(state.appSettings?.subtractStockFromShopping)
  };
  ensureComboBuilderRows();
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
                name: formatProductName(item.name),
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
      .map((item) => {
        const eans = normalizeEanList(item.eans || item.ean);

        return {
          id: typeof item.id === "string" ? item.id : createId(),
          name: formatProductName(item.name),
          category: tidyName(item.category || "Ostatní"),
          unit: normalizeImportUnit(item.unit || "ks"),
          ean: eans[0] || "",
          eans,
          eanAliases: normalizeEanAliases(item.eanAliases)
        };
      })
      .filter((item) => item.name)
    : [];
}

function sanitizeShoppingItems(items) {
  return Array.isArray(items)
    ? items
      .filter((item) => item && typeof item.name === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : createId(),
        name: formatProductName(item.name),
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
        name: formatProductName(combo.name),
        items: combo.items
          .filter((item) => item && typeof item.name === "string")
          .map((item) => ({
            name: formatProductName(item.name),
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

async function applyComboChange(combo, multiplier, action) {
  if (action === "set") {
    showMessage("Kombinaci nejde nastavit na pevný počet. Použij nákup, snězeno nebo korekci.", true);
    return;
  }

  let changed = 0;
  let missing = 0;

  combo.items.forEach((item) => {
    const result = upsertItemAmount({
      ...item,
      amount: roundAmount(item.amount * multiplier),
      action
    });

    if (result === "missing") {
      missing += 1;
    } else {
      changed += 1;
    }
  });

  if (!changed) {
    showMessage("Žádná položka z kombinace v zásobách není.", true);
    return;
  }

  const suffix = missing ? `, ${missing} položek chybělo` : "";
  recordHistory(`Kombinace ${combo.name}: provedena akce ${getActionLabel(action)} ${formatAmount(multiplier)}x${suffix}.`, "combo");
  renderHistory();
  renderItems();
  resetForm();
  showMessage(`Kombinace ${combo.name} zapsána.`);
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

function getActionLabel(action) {
  const labels = {
    purchase: "Nákup",
    gift: "Dar",
    eaten: "Snězeno",
    discarded: "Vyhozeno",
    adjustPlus: "Korekce +",
    adjustMinus: "Korekce -",
    add: "Přidat",
    subtract: "Odebrat",
    set: "Nastavit"
  };

  return labels[action] || "Akce";
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
  const product = formatProductName(shoppingProduct.value);
  const amount = Number(shoppingAmount.value);
  const unit = shoppingUnit.value;

  if (!product) {
    shoppingProduct.focus();
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    shoppingAmount.focus();
    return;
  }

  const name = `${product} ${formatAmount(amount)} ${unit}`;

  upsertShoppingItem({ product, amount: roundAmount(amount), unit });
  shoppingForm.reset();
  shoppingUnit.value = unit;
  recordHistory(`Do nákupního listu přidáno: ${name}.`, "shopping");
  renderShoppingList();
  renderHistory();
  await saveState();
}

function upsertShoppingItem({ product, amount, unit }) {
  const existing = shoppingItems.find((item) => {
    const parsed = parseImportLine(item.name);

    return !item.done
      && parsed
      && normalize(parsed.name) === normalize(product)
      && parsed.unit === unit;
  });

  if (existing) {
    const parsed = parseImportLine(existing.name);
    existing.name = `${parsed.name} ${formatAmount(roundAmount(parsed.amount + amount))} ${unit}`;
    return;
  }

  shoppingItems.unshift({
    id: createId(),
    name: `${product} ${formatAmount(amount)} ${unit}`,
    done: false,
    createdAt: new Date().toISOString()
  });
}

function syncShoppingUnitFromProduct() {
  const item = findCatalogItemByName(shoppingProduct.value) || findItemByName(shoppingProduct.value);

  if (item) {
    shoppingUnit.value = item.unit;
  }
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
  mergeShoppingItems();
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

function mergeShoppingItems() {
  const merged = [];
  const openMap = new Map();

  shoppingItems.forEach((item) => {
    const parsed = parseImportLine(item.name);

    if (item.done || !parsed) {
      merged.push(item);
      return;
    }

    const key = `${normalize(parsed.name)}|${parsed.unit}`;
    const existing = openMap.get(key);

    if (existing) {
      const existingParsed = parseImportLine(existing.name);
      existing.name = `${existingParsed.name} ${formatAmount(roundAmount(existingParsed.amount + parsed.amount))} ${parsed.unit}`;
      return;
    }

    item.name = `${parsed.name} ${formatAmount(parsed.amount)} ${parsed.unit}`;
    openMap.set(key, item);
    merged.push(item);
  });

  shoppingItems = merged;
}

function getShoppingItemMeta(item) {
  if (!appSettings.subtractStockFromShopping) {
    return "";
  }

  const parsed = parseImportLine(item.name);

  if (!parsed) {
    return "Zadej třeba: Mléko 1000 ml, potom odečtu zásoby.";
  }

  const summary = getShoppingNeedSummary(parsed);

  if (summary.totalWanted !== parsed.amount) {
    if (summary.missing === 0) {
      return `Celkem chceš ${formatAmount(summary.totalWanted)} ${parsed.unit}, v zásobách je ${formatAmount(summary.currentAmount)} ${parsed.unit}.`;
    }

    return `Celkem chceš ${formatAmount(summary.totalWanted)} ${parsed.unit}, koupit ještě ${formatAmount(summary.missing)} ${parsed.unit}.`;
  }

  if (summary.missing === 0) {
    return `V zásobách je ${formatAmount(summary.currentAmount)} ${parsed.unit}, kupovat netřeba.`;
  }

  return `Koupit ještě ${formatAmount(summary.missing)} ${parsed.unit} z ${formatAmount(parsed.amount)} ${parsed.unit}.`;
}

function getShoppingNeedSummary(parsed) {
  const stocked = getActiveItems().find((currentItem) => {
    return normalize(currentItem.name) === normalize(parsed.name)
      && currentItem.unit === parsed.unit;
  });
  const currentAmount = stocked ? stocked.amount : 0;
  const totalWanted = shoppingItems
    .filter((item) => !item.done)
    .map((item) => parseImportLine(item.name))
    .filter((item) => {
      return item
        && normalize(item.name) === normalize(parsed.name)
        && item.unit === parsed.unit;
    })
    .reduce((sum, item) => sum + item.amount, 0);

  return {
    currentAmount,
    totalWanted: roundAmount(totalWanted || parsed.amount),
    missing: Math.max(0, roundAmount((totalWanted || parsed.amount) - currentAmount))
  };
}

async function saveCombo(event) {
  event.preventDefault();
  const name = tidyName(comboName.value);
  const items = getComboBuilderItems();

  if (!name || !items.length) {
    showMessage("Vyplň název kombinace a aspoň jednu položku.", true);
    return;
  }

  const existing = combos.find((combo) => normalize(combo.name) === normalize(name));

  if (existing) {
    existing.items = items;
  } else {
    combos.unshift({
      id: createId(),
      name,
      items
    });
  }

  comboForm.reset();
  resetComboBuilderRows();
  recordHistory(`Uložena kombinace ${name}.`, "combo");
  renderCombos();
  renderCatalog();
  renderHistory();
  await saveState();
}

function ensureComboBuilderRows() {
  if (!comboItemsList || comboItemsList.children.length) {
    return;
  }

  addComboItemRow();
  addComboItemRow();
}

function resetComboBuilderRows() {
  comboItemsList.replaceChildren();
  addComboItemRow();
  addComboItemRow();
}

function addComboItemRow(item = {}) {
  const row = document.createElement("div");
  row.className = "combo-item-row";
  row.innerHTML = `
    <label class="field">
      <span>Potravina</span>
      <input class="combo-product" type="text" data-combobox-source="product-options" placeholder="Rohlík">
    </label>
    <label class="field">
      <span>Množství</span>
      <input class="combo-amount" type="number" min="0.01" step="any" inputmode="decimal" placeholder="1">
    </label>
    <label class="field">
      <span>Jednotka</span>
      <select class="combo-unit">
        <option value="g">g</option>
        <option value="ml">ml</option>
        <option value="ks">ks</option>
        <option value="Kč">Kč</option>
      </select>
    </label>
    <label class="field">
      <span>Kategorie</span>
      <input class="combo-category" type="text" data-combobox-source="category-options" placeholder="Ostatní">
    </label>
    <button class="ghost-button combo-remove-button" type="button" data-combo-builder-action="remove">Odebrat</button>
  `;

  row.querySelector(".combo-product").value = item.name || "";
  row.querySelector(".combo-amount").value = item.amount ? String(item.amount) : "";
  row.querySelector(".combo-unit").value = item.unit || "ks";
  row.querySelector(".combo-category").value = item.category || "";
  comboItemsList.append(row);
  updateComboRemoveButtons();
}

function handleComboBuilderClick(event) {
  const button = event.target.closest("[data-combo-builder-action='remove']");

  if (!button) {
    return;
  }

  button.closest(".combo-item-row")?.remove();
  updateComboRemoveButtons();
}

function handleComboBuilderInput(event) {
  const input = event.target.closest(".combo-product");

  if (!input) {
    return;
  }

  const row = input.closest(".combo-item-row");
  const item = findCatalogItemByName(input.value) || findItemByName(input.value);

  if (!row || !item) {
    return;
  }

  row.querySelector(".combo-unit").value = item.unit;
  row.querySelector(".combo-category").value = item.category || "Ostatní";
}

function updateComboRemoveButtons() {
  const rows = comboItemsList.querySelectorAll(".combo-item-row");

  rows.forEach((row) => {
    row.querySelector(".combo-remove-button").disabled = rows.length <= 1;
  });
}

function getComboBuilderItems() {
  return [...comboItemsList.querySelectorAll(".combo-item-row")]
    .map((row) => {
      const name = formatProductName(row.querySelector(".combo-product").value);
      const amount = Number(row.querySelector(".combo-amount").value);
      const unit = row.querySelector(".combo-unit").value;
      const category = tidyName(row.querySelector(".combo-category").value) || "Ostatní";

      if (!name || !Number.isFinite(amount) || amount <= 0) {
        return null;
      }

      return {
        name,
        amount: roundAmount(amount),
        unit,
        category
      };
    })
    .filter(Boolean);
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
      action: "purchase"
    });

    if (result !== "missing") {
      changed += 1;
    }
  });

  recordHistory(`Použita kombinace ${combo.name}, přidáno ${changed} položek do zásob.`, "combo");
  renderItems();
  renderCombos();
  renderHistory();
  showMessage(`Kombinace ${combo.name} přidána do lednice.`);
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
  renderProductOptions();

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
    const content = document.createElement("div");
    const text = document.createElement("strong");
    const meta = document.createElement("span");
    const remove = document.createElement("button");

    option.value = combo.id;
    option.textContent = combo.name;
    comboSelect.append(option);

    row.className = "card-row";
    content.className = "row-content";
    text.textContent = combo.name;
    meta.className = "muted-text";
    meta.textContent = combo.items.map((item) => `${item.name} ${formatAmount(item.amount)} ${item.unit}`).join(", ");
    remove.className = "danger-button";
    remove.type = "button";
    remove.dataset.comboAction = "remove";
    remove.dataset.id = combo.id;
    remove.textContent = "Smazat";

    content.append(text, meta);
    row.append(content, remove);
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
  const options = [
    ...getCatalogItems().map((item) => ({
      value: item.name,
      label: `${item.category || "Ostatní"} | ${item.unit}`,
      text: item.unit
    })),
    ...combos.map((combo) => ({
      value: combo.name,
      label: "Kombinace",
      text: combo.items.map((item) => item.name).join(", ")
    }))
  ];

  options
    .sort((a, b) => a.value.localeCompare(b.value, "cs"))
    .forEach((item) => {
      const option = document.createElement("option");
      option.value = item.value;
      option.label = item.label;
      option.textContent = item.text;
      productOptions.append(option);
    });
}

function renderCategoryOptions() {
  if (!categoryOptions) {
    return;
  }

  const categories = [
    ...new Set([
      ...DEFAULT_CATEGORIES,
      ...getCatalogItems().map((item) => item.category || "Ostatní")
    ])
  ].sort((a, b) => a.localeCompare(b, "cs"));
  categoryOptions.replaceChildren();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    categoryOptions.append(option);
  });
}

async function saveCatalogItem(event) {
  event.preventDefault();
  const name = formatProductName(catalogName.value);
  const category = tidyName(catalogCategory.value) || "Ostatní";
  const unit = normalizeImportUnit(catalogUnit.value || "ks");

  if (!name) {
    showMessage("Zadej název potraviny do číselníku.", true);
    catalogName.focus();
    return;
  }

  upsertCatalogItem({ id: editingCatalogId, name, category, unit });
  catalogForm.reset();
  editingCatalogId = null;
  catalogUnit.value = unit;
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  recordHistory(`Číselník: uložena potravina ${name}.`, "catalog");
  renderHistory();
  showMessage(`Potravina ${name} je v číselníku.`);
  await saveState();
}

async function handleCatalogClick(event) {
  const button = event.target.closest("button[data-catalog-action]");

  if (!button) {
    return;
  }

  const item = getCatalogItems().find((currentItem) => normalize(currentItem.name) === button.dataset.name);

  if (!item) {
    return;
  }

  if (button.dataset.catalogAction === "edit") {
    const existing = catalogItems.find((currentItem) => normalize(currentItem.name) === normalize(item.name));
    editingCatalogId = existing?.id || null;
    catalogName.value = item.name;
    catalogCategory.value = item.category || "Ostatní";
    catalogUnit.value = item.unit || "ks";
    catalogName.focus();
    showMessage(`Upravuješ položku číselníku ${item.name}.`);
    return;
  }

  if (button.dataset.catalogAction === "delete") {
    catalogItems = catalogItems.filter((currentItem) => normalize(currentItem.name) !== normalize(item.name));
    renderProductOptions();
    renderCategoryOptions();
    renderCatalog();
    recordHistory(`Číselník: smazána potravina ${item.name}.`, "catalog");
    renderHistory();
    await saveState();
  }
}

async function lookupEanProduct() {
  const ean = String(eanInput.value || "").replace(/\D/g, "");

  if (!/^\d{8,14}$/.test(ean)) {
    eanMessage.textContent = "Zadej platný EAN, obvykle 8 až 14 číslic.";
    eanInput.focus();
    return;
  }

  clearEanResult();

  const localItem = findCatalogItemByEan(ean);

  if (localItem) {
    applyEanCatalogChoice(localItem, {
      ean,
      name: localItem.name,
      category: localItem.category || "Ostatní",
      amount: 1,
      unit: localItem.unit || "ks"
    }, "local");
    return;
  }

  eanMessage.textContent = "Hledám potravinu v Open Food Facts...";

  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${ean}.json?fields=product_name,product_name_cs,generic_name,brands,categories,categories_tags,quantity,code`);
    const data = await response.json();

    if (!response.ok || data.status === 0 || !data.product) {
      const product = createDefaultEanProduct(ean);
      renderEanResolution(product, []);
      eanMessage.textContent = "EAN jsem nenašel v databázi. Můžeš ho založit do číselníku se standardy.";
      return;
    }

    const product = mapOpenFoodFactsProduct(data.product, ean);
    const matches = findCatalogMatchesForEanProduct(product);
    renderEanResolution(product, matches);
    eanMessage.textContent = matches.length
      ? `Načteno: ${product.name}. Vyber, jestli patří pod existující položku.`
      : `Načteno: ${product.name}. V číselníku jsem nenašel podobnou položku.`;
  } catch (error) {
    eanMessage.textContent = "EAN API teď neodpovídá. Zkus to za chvíli nebo zadej položku ručně.";
  }
}

function createDefaultEanProduct(ean) {
  return {
    id: createId(),
    name: `EAN ${ean}`,
    category: "Ostatní",
    amount: 1,
    unit: "ks",
    ean
  };
}

function renderEanResolution(product, matches) {
  pendingEanProduct = product;
  eanResult.replaceChildren();
  eanResult.hidden = false;

  const header = document.createElement("div");
  const title = document.createElement("strong");
  const meta = document.createElement("span");
  const actions = document.createElement("div");
  const createButton = document.createElement("button");

  header.className = "ean-result-head";
  title.textContent = product.name;
  meta.textContent = `${product.category || "Ostatní"} | standard: ${formatAmount(product.amount || 1)} ${product.unit || "ks"}`;
  header.append(title, meta);

  if (matches.length) {
    const hint = document.createElement("p");
    hint.textContent = "Podobné položky v číselníku:";
    eanResult.append(header, hint);

    matches.forEach((match) => {
      const button = document.createElement("button");
      button.className = "ghost-button";
      button.type = "button";
      button.dataset.eanAction = "assign";
      button.dataset.name = match.item.name;
      button.textContent = `Použít ${match.item.name}`;
      actions.append(button);
    });
  } else {
    const hint = document.createElement("p");
    hint.textContent = "Žádná jistá shoda v číselníku. Založení použije odhadnutou kategorii a jednotku.";
    eanResult.append(header, hint);
  }

  createButton.className = "primary-button";
  createButton.type = "button";
  createButton.dataset.eanAction = "create";
  createButton.textContent = `Založit jako ${product.name}`;
  actions.className = "ean-result-actions";
  actions.append(createButton);
  eanResult.append(actions);
}

async function handleEanResultClick(event) {
  const button = event.target.closest("button[data-ean-action]");

  if (!button || !pendingEanProduct) {
    return;
  }

  if (button.dataset.eanAction === "assign") {
    const item = findCatalogItemByName(button.dataset.name);

    if (item) {
      await applyEanCatalogChoice(item, pendingEanProduct, "assigned");
    }
  }

  if (button.dataset.eanAction === "create") {
    await createCatalogItemFromEan(pendingEanProduct);
  }
}

async function applyEanCatalogChoice(item, product, mode) {
  const alias = item._eanAlias || product;
  const amount = item.unit === alias.unit ? alias.amount : 1;
  addEanToCatalogItem(item, product);
  productInput.value = item.name;
  categoryInput.value = item.category || "Ostatní";
  amountInput.value = formatFormNumber(amount || 1);
  unitSelect.value = item.unit || "ks";
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  clearEanResult();
  switchView("pantry");
  eanMessage.textContent = mode === "local"
    ? `EAN je už přiřazený k položce ${item.name}.`
    : `EAN ${product.name} je přiřazený pod ${item.name}.`;
  showMessage(`Připraveno jako ${item.name}. Stačí potvrdit zápis.`);
  recordHistory(`EAN ${product.ean} přiřazen k položce ${item.name}.`, "catalog");
  renderHistory();
  await saveState();
}

async function createCatalogItemFromEan(product) {
  upsertCatalogItem({
    ...product,
    category: product.category || inferCategoryFromName(product.name),
    unit: product.unit || "ks",
    amount: product.amount || 1,
    eans: [product.ean],
    eanAliases: [product]
  });
  productInput.value = product.name;
  categoryInput.value = product.category || inferCategoryFromName(product.name);
  amountInput.value = formatFormNumber(product.amount || 1);
  unitSelect.value = product.unit || "ks";
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  clearEanResult();
  switchView("pantry");
  eanMessage.textContent = `Založeno v číselníku: ${product.name}.`;
  showMessage(`EAN založil ${product.name}. Stačí potvrdit zápis.`);
  recordHistory(`EAN založil položku číselníku ${product.name}.`, "catalog");
  renderHistory();
  await saveState();
}

function clearEanResult() {
  pendingEanProduct = null;

  if (eanResult) {
    eanResult.hidden = true;
    eanResult.replaceChildren();
  }
}

async function scanEanFromFile(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  eanMessage.textContent = "Čtu EAN z obrázku...";

  try {
    const code = await detectEanFromImage(file);

    if (!code) {
      eanMessage.textContent = "Na fotce jsem EAN nenašel. Zkus ostřejší fotku zblízka nebo číslo napiš ručně.";
      return;
    }

    eanInput.value = code;
    await lookupEanProduct();
  } catch (error) {
    eanMessage.textContent = "Sken se nepovedl. Zkus jinou fotku, lepší světlo nebo ruční zadání.";
  } finally {
    eanFileInput.value = "";
  }
}

async function detectEanFromImage(file) {
  return await detectEanWithBarcodeDetector(file)
    || await detectEanWithZxing(file)
    || await detectEanWithOcr(file);
}

async function detectEanWithBarcodeDetector(file) {
  if (!("BarcodeDetector" in window) || !window.createImageBitmap) {
    return "";
  }

  try {
    const bitmap = await createImageBitmap(file);
    const detector = new BarcodeDetector({
      formats: ["ean_13", "ean_8", "upc_a", "upc_e"]
    });
    const codes = await detector.detect(bitmap);
    const code = codes.map((item) => item.rawValue).find(Boolean);
    return findLikelyEanCode(code);
  } catch (error) {
    return "";
  }
}

async function detectEanWithZxing(file) {
  if (!window.ZXing?.BrowserMultiFormatReader) {
    return "";
  }

  const reader = new ZXing.BrowserMultiFormatReader();
  const url = URL.createObjectURL(file);

  try {
    const result = await reader.decodeFromImageUrl(url);
    const text = typeof result.getText === "function" ? result.getText() : result.text;
    return findLikelyEanCode(text);
  } catch (error) {
    return "";
  } finally {
    if (typeof reader.reset === "function") {
      reader.reset();
    }

    URL.revokeObjectURL(url);
  }
}

async function detectEanWithOcr(file) {
  if (!window.Tesseract) {
    return "";
  }

  try {
    const preparedImage = await prepareReceiptImage(file);
    const { data } = await Tesseract.recognize(preparedImage || file, "eng", {
      tessedit_char_whitelist: "0123456789",
      tessedit_pageseg_mode: "6"
    });
    return findLikelyEanCode(data.text);
  } catch (error) {
    return "";
  }
}

function findLikelyEanCode(value) {
  const candidates = String(value || "").match(/\d{8,14}/g) || [];
  return candidates.find(hasValidGtinChecksum) || candidates[0] || "";
}

function hasValidGtinChecksum(value) {
  const code = String(value || "").replace(/\D/g, "");

  if (![8, 12, 13, 14].includes(code.length)) {
    return false;
  }

  const digits = [...code].map(Number);
  const checkDigit = digits.pop();
  const sum = digits
    .reverse()
    .reduce((total, digit, index) => total + digit * (index % 2 === 0 ? 3 : 1), 0);
  const expected = (10 - (sum % 10)) % 10;

  return expected === checkDigit;
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

  receiptMessage.textContent = "Rozpoznávám text z účtenky a čistím položky...";

  try {
    const result = await recognizeReceiptText(file);
    const parsed = parseReceiptText(result);
    const text = formatReceiptItemsForImport(parsed.items);

    if (!text) {
      receiptMessage.textContent = "Z účtenky jsem nevyčetl žádné použitelné položky.";
      return;
    }

    openImportModal("Import z účtenky", "Rozpoznané položky uprav a potvrď.");
    importText.value = text;
    importError.textContent = parsed.skipped.length
      ? `Zkontroluj množství a jednotky. Přeskočeno řádků: ${parsed.skipped.length}.`
      : "Zkontroluj množství a jednotky, účtenky bývají šumivé.";
    receiptMessage.textContent = `Hotovo. Našel jsem ${parsed.items.length} položek k importu.`;
  } catch (error) {
    receiptMessage.textContent = "OCR se nepovedlo. Zkus ostřejší fotku nebo ruční hromadný import.";
  } finally {
    receiptFileInput.value = "";
  }
}

async function recognizeReceiptText(file) {
  const preparedImage = await prepareReceiptImage(file);

  try {
    const { data } = await Tesseract.recognize(preparedImage || file, "ces+eng", {
      tessedit_pageseg_mode: "6",
      preserve_interword_spaces: "1"
    });
    return data.text || "";
  } catch (error) {
    const { data } = await Tesseract.recognize(file, "eng");
    return data.text || "";
  }
}

async function prepareReceiptImage(file) {
  try {
    const bitmap = await createImageBitmap(file);
    const maxSide = 1800;
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!context) {
      return file;
    }

    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const image = context.getImageData(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < image.data.length; index += 4) {
      const gray = (image.data[index] * 0.299) + (image.data[index + 1] * 0.587) + (image.data[index + 2] * 0.114);
      const contrasted = gray > 158 ? 255 : 0;
      image.data[index] = contrasted;
      image.data[index + 1] = contrasted;
      image.data[index + 2] = contrasted;
    }

    context.putImageData(image, 0, 0);

    return await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob || file), "image/png");
    });
  } catch (error) {
    return file;
  }
}

function parseReceiptText(text) {
  const items = [];
  const skipped = [];

  String(text || "")
    .split(/\r?\n/)
    .map(normalizeReceiptLine)
    .filter(Boolean)
    .forEach((line) => {
      const parsed = parseReceiptProductLine(line);

      if (parsed) {
        mergeReceiptItem(items, parsed);
      } else {
        skipped.push(line);
      }
    });

  return { items: items.slice(0, 80), skipped };
}

function formatReceiptItemsForImport(items) {
  return items
    .map((item) => `${item.name} ${formatAmount(item.amount)} ${item.unit}`)
    .join("\n");
}

function parseReceiptProductLine(line) {
  if (isReceiptNoiseLine(line)) {
    return null;
  }

  const normalizedLine = line
    .replace(/\b(\d+(?:[,.]\d+)?)\s*[x×]\s*(\d+(?:[,.]\d{2})\s*(?:kč|czk)?)\b/iu, "$1 ks")
    .replace(/\s+\d+(?:[,.]\d{2})\s*(?:kč|czk)?\s*$/iu, "");
  const parsed = parseImportLine(normalizedLine);

  if (!parsed || normalize(parsed.name).length < 3) {
    return parseReceiptPriceLine(line);
  }

  parsed.category = inferCategoryFromName(parsed.name);
  return parsed;
}

function parseReceiptPriceLine(line) {
  const match = line.match(/^(.+?)\s+(-?\d+(?:[,.]\d{2}))\s*(?:kč|czk)?\s*$/iu);

  if (!match) {
    return null;
  }

  const name = cleanReceiptProductName(match[1]);

  if (!name || normalize(name).length < 3) {
    return null;
  }

  const quantity = inferReceiptQuantity(line);

  return {
    name,
    amount: quantity.amount,
    unit: quantity.unit,
    category: inferCategoryFromName(name)
  };
}

function inferReceiptQuantity(line) {
  const quantityMatch = line.match(/\b(\d+(?:[,.]\d+)?)\s*(kg|g|l|ml|ks|kus|kusu|kusy)\b/iu);

  if (quantityMatch) {
    const amount = parseImportAmount(quantityMatch[1]) || 1;
    return normalizeImportAmountAndUnit(amount, quantityMatch[2]);
  }

  const multiplierMatch = line.match(/\b(\d+(?:[,.]\d+)?)\s*[x×]\b/iu);

  if (multiplierMatch) {
    return {
      amount: parseImportAmount(multiplierMatch[1]) || 1,
      unit: "ks"
    };
  }

  return { amount: 1, unit: "ks" };
}

function cleanReceiptProductName(value) {
  const text = tidyName(String(value || "")
    .replace(/\b\d+(?:[,.]\d+)?\s*(kg|g|l|ml|ks|kus|kusu|kusy)\b/igu, " ")
    .replace(/\b\d+(?:[,.]\d+)?\s*[x×]\s*/igu, " ")
    .replace(/\b[a-z]?\d{4,}\b/igu, " ")
    .replace(/\b(akce|sleva|kaufland|lidl|tesco|albert|billa|penny|globus)\b/igu, " ")
    .replace(/[^\p{L}\p{N}\s%.-]/gu, " "));

  return formatProductName(text);
}

function mergeReceiptItem(items, item) {
  const existing = items.find((currentItem) => {
    return normalize(currentItem.name) === normalize(item.name)
      && currentItem.unit === item.unit;
  });

  if (existing) {
    existing.amount = roundAmount(existing.amount + item.amount);
    return;
  }

  items.push(item);
}

function isReceiptNoiseLine(line) {
  const normalizedLine = tidyName(line);

  if (normalizedLine.length < 3) {
    return true;
  }

  return RECEIPT_SKIP_PATTERNS.some((pattern) => pattern.test(normalizedLine));
}

function normalizeReceiptLine(line) {
  return tidyName(String(line || "")
    .replace(/[|*_~[\]{}]/g, " ")
    .replace(/[€$]/g, " Kč")
    .replace(/[×]/g, "x")
    .replace(/\bO(?=\d)/g, "0")
    .replace(/(?<=\d)O\b/g, "0")
    .replace(/(?<=\d)[Il]\b/g, "1")
    .replace(/[|*_~]/g, " ")
    .replace(/^[A-Z]\.(?=\S)/u, "")
    .replace(/\bEAN\s*\d+\b/iu, "")
    .replace(/(\d+(?:[,.]\d+)?)(kg|g|l|ml|ks)\b/iu, "$1 $2")
    .replace(/\s+Kc\b/iu, " Kč")
    .replace(/[;:]+/g, " ")
    .replace(/\s+/g, " "));
}

function mapOpenFoodFactsProduct(product, ean) {
  const name = formatProductName(product.product_name_cs || product.product_name || product.generic_name || product.brands || `EAN ${ean}`);
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

function inferCategoryFromName(name) {
  const catalogItem = findCatalogItemByName(name);

  if (catalogItem?.category) {
    return catalogItem.category;
  }

  const normalizedName = normalize(name);
  const match = CATEGORY_NAME_RULES.find(([pattern]) => pattern.test(normalizedName));

  return match ? match[1] : "Ostatní";
}

function upsertCatalogItem(item) {
  const nextEans = normalizeEanList(item.eans || item.ean);
  const nextAliases = normalizeEanAliases(item.eanAliases);
  const existing = catalogItems.find((currentItem) => {
    return (item.id && currentItem.id === item.id)
      || normalize(currentItem.name) === normalize(item.name);
  });

  if (existing) {
    const mergedEans = normalizeEanList([...(existing.eans || []), existing.ean, ...nextEans]);
    const mergedAliases = mergeEanAliases(existing.eanAliases, nextAliases);
    existing.name = item.name || existing.name;
    existing.category = item.category || existing.category || "Ostatní";
    existing.unit = item.unit || existing.unit || "ks";
    existing.ean = mergedEans[0] || "";
    existing.eans = mergedEans;
    existing.eanAliases = mergedAliases;
    return;
  }

  catalogItems.unshift({
    id: item.id || createId(),
    name: item.name,
    category: item.category || "Ostatní",
    unit: item.unit || "ks",
    ean: nextEans[0] || "",
    eans: nextEans,
    eanAliases: nextAliases
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
      <td class="icon-cell">
        <div class="row-actions">
          <button class="ghost-button" type="button" data-catalog-action="edit">Upravit</button>
          <button class="danger-button" type="button" data-catalog-action="delete">Smazat</button>
        </div>
      </td>
    `;
    row.children[0].textContent = item.name;
    row.children[1].textContent = item.category;
    row.children[2].textContent = item.unit;
    row.querySelectorAll("[data-catalog-action]").forEach((button) => {
      button.dataset.name = normalize(item.name);
    });
    catalogBody.append(row);
  });
}

function getCatalogItems() {
  const map = new Map();

  catalogItems.forEach((item) => {
    const key = normalize(item.name);

    if (!map.has(key)) {
      const eans = normalizeEanList(item.eans || item.ean);
      map.set(key, {
        name: item.name,
        category: item.category || "Ostatní",
        unit: item.unit || "ks",
        ean: eans[0] || "",
        eans,
        eanAliases: normalizeEanAliases(item.eanAliases)
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
  setActionState("purchase");
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
  const selectedOption = [...actionSelect.options].find((option) => option.value === action);

  if (actionComboInput && selectedOption) {
    actionComboInput.value = selectedOption.textContent;
  }

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
  const currentValue = Number(amountInput.value);
  const min = 1;
  const next = Number.isFinite(currentValue) && currentValue >= min
    ? Math.max(min, Math.round(currentValue) + direction)
    : min;

  amountInput.value = String(next);
  amountInput.dispatchEvent(new Event("input", { bubbles: true }));
  amountInput.focus();
}

function syncUnitFromProduct() {
  const combo = findComboByName(productInput.value);

  if (combo) {
    unitSelect.value = "ks";
    return;
  }

  const item = findCatalogItemByName(productInput.value) || findItemByName(productInput.value);

  if (item) {
    unitSelect.value = item.unit;
  }
}

function syncCategoryFromProduct() {
  const combo = findComboByName(productInput.value);

  if (combo) {
    categoryInput.value = "Kombinace";
    return;
  }

  const item = findCatalogItemByName(productInput.value) || findItemByName(productInput.value);

  if (item) {
    categoryInput.value = item.category || "Ostatní";
  }
}

function findComboByName(name) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  return combos.find((combo) => normalize(combo.name) === normalizedName) || null;
}

function findCatalogItemByName(name) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  return getCatalogItems().find((item) => normalize(item.name) === normalizedName) || null;
}

function findCatalogItemByEan(ean) {
  const normalizedEan = normalizeEan(ean);

  if (!normalizedEan) {
    return null;
  }

  const item = getCatalogItems().find((currentItem) => normalizeEanList(currentItem.eans || currentItem.ean).includes(normalizedEan)) || null;

  if (!item) {
    return null;
  }

  const alias = normalizeEanAliases(item.eanAliases).find((currentAlias) => currentAlias.ean === normalizedEan) || null;
  return alias ? { ...item, _eanAlias: alias } : item;
}

function addEanToCatalogItem(item, product) {
  const normalizedEan = normalizeEan(product?.ean || product);

  if (!item?.name || !normalizedEan) {
    return;
  }

  const alias = normalizeEanAlias({
    ean: normalizedEan,
    name: product?.name || item.name,
    amount: product?.amount || 1,
    unit: product?.unit || item.unit || "ks",
    category: product?.category || item.category || "Ostatní"
  });

  const existing = catalogItems.find((currentItem) => normalize(currentItem.name) === normalize(item.name));

  if (existing) {
    const eans = normalizeEanList([...(existing.eans || []), existing.ean, normalizedEan]);
    const aliases = mergeEanAliases(existing.eanAliases, alias ? [alias] : []);
    existing.ean = eans[0] || "";
    existing.eans = eans;
    existing.eanAliases = aliases;
    existing.category = existing.category || item.category || "Ostatní";
    existing.unit = existing.unit || item.unit || "ks";
    return;
  }

  catalogItems.unshift({
    id: createId(),
    name: item.name,
    category: item.category || "Ostatní",
    unit: item.unit || "ks",
    ean: normalizedEan,
    eans: [normalizedEan],
    eanAliases: alias ? [alias] : []
  });
}

function findCatalogMatchesForEanProduct(product) {
  const productName = normalize(product.name);

  if (!productName) {
    return [];
  }

  return getCatalogItems()
    .map((item) => ({
      item,
      score: getCatalogMatchScore(product, item)
    }))
    .filter((match) => match.score >= 35)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name, "cs"))
    .slice(0, 4);
}

function getCatalogMatchScore(product, item) {
  const productName = normalize(product.name);
  const itemName = normalize(item.name);

  if (!productName || !itemName) {
    return 0;
  }

  if (productName === itemName) {
    return 120;
  }

  const productTokens = getMeaningfulNameTokens(productName);
  const itemTokens = getMeaningfulNameTokens(itemName);
  const shared = itemTokens.filter((token) => productTokens.includes(token));
  let score = 0;

  if (productName.includes(itemName) || itemName.includes(productName)) {
    score += 70;
  }

  if (itemTokens.length) {
    score += (shared.length / itemTokens.length) * 55;
  }

  if (productTokens.length) {
    score += (shared.length / productTokens.length) * 20;
  }

  if ((product.category || "") === (item.category || "")) {
    score += 10;
  }

  if ((product.unit || "") === (item.unit || "")) {
    score += 6;
  }

  return score;
}

function getMeaningfulNameTokens(value) {
  const ignored = new Set(["light", "bio", "fresh", "extra", "fit", "bez", "novy", "nova", "new", "cz", "ks"]);

  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !ignored.has(token));
}

function normalizeEan(value) {
  const ean = String(value || "").replace(/\D/g, "");
  return /^\d{8,14}$/.test(ean) ? ean : "";
}

function normalizeEanList(value) {
  const values = Array.isArray(value)
    ? value
    : String(value || "").split(/[,\s;]+/);

  return [...new Set(values.map(normalizeEan).filter(Boolean))];
}

function normalizeEanAliases(value) {
  return Array.isArray(value)
    ? value.map(normalizeEanAlias).filter(Boolean)
    : [];
}

function normalizeEanAlias(value) {
  const ean = normalizeEan(value?.ean);

  if (!ean) {
    return null;
  }

  return {
    ean,
    name: formatProductName(value.name || `EAN ${ean}`),
    amount: roundAmount(Number(value.amount) || 1),
    unit: normalizeImportUnit(value.unit || "ks"),
    category: tidyName(value.category || "Ostatní")
  };
}

function mergeEanAliases(existingAliases, nextAliases) {
  const map = new Map();

  normalizeEanAliases(existingAliases).forEach((alias) => {
    map.set(alias.ean, alias);
  });

  normalizeEanAliases(nextAliases).forEach((alias) => {
    map.set(alias.ean, alias);
  });

  return [...map.values()];
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
  return String(value || "").trim().replace(/\s+/g, " ");
}

function formatProductName(value) {
  const text = tidyName(value)
    .toLocaleLowerCase("cs")
    .split(" ")
    .map((word) => PRODUCT_WORDS[normalize(word)] || word)
    .join(" ");

  if (!text) {
    return "";
  }

  return text.charAt(0).toLocaleUpperCase("cs") + text.slice(1);
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

function formatFormNumber(value) {
  return String(roundAmount(Number(value) || 1)).replace(",", ".");
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeXml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
