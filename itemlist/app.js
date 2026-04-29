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
const priceInput = document.querySelector("#price-input");
const eventDateInput = document.querySelector("#event-date-input");
const submitButton = document.querySelector("#submit-button");
const pantryScanButton = document.querySelector("#pantry-scan-button");
const pantryCategoryFilters = document.querySelector("#pantry-category-filters");
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
const emptyState = document.querySelector("#empty-state");
const historyList = document.querySelector("#history-list");
const historyPeriodFilter = document.querySelector("#history-period-filter");
const historyDateFrom = document.querySelector("#history-date-from");
const historyDateTo = document.querySelector("#history-date-to");
const openComboChangeButton = document.querySelector("#open-combo-change");
const comboChangeModal = document.querySelector("#combo-change-modal");
const comboChangeSelect = document.querySelector("#combo-change-select");
const comboChangeAction = document.querySelector("#combo-change-action");
const comboChangeItems = document.querySelector("#combo-change-items");
const cancelComboChange = document.querySelector("#cancel-combo-change");
const applyComboChangeButton = document.querySelector("#apply-combo-change");
const priceStats = document.querySelector("#price-stats");
const statsPanel = document.querySelector("#stats-panel");
const statsMetrics = document.querySelector("#stats-metrics");
const statsGrid = document.querySelector("#stats-grid");
const statsExportPdfButton = document.querySelector("#stats-export-pdf");
const statsChartCanvas = document.querySelector("#stats-chart-canvas");
const catalogBody = document.querySelector("#catalog-body");
const catalogForm = document.querySelector("#catalog-form");
const catalogName = document.querySelector("#catalog-name");
const catalogCategory = document.querySelector("#catalog-category");
const catalogUnit = document.querySelector("#catalog-unit");
const catalogAliasList = document.querySelector("#catalog-alias-list");
const catalogAliasName = document.querySelector("#catalog-alias-name");
const catalogAliasEan = document.querySelector("#catalog-alias-ean");
const catalogAliasAmount = document.querySelector("#catalog-alias-amount");
const catalogAliasUnit = document.querySelector("#catalog-alias-unit");
const catalogAliasAddButton = document.querySelector("#catalog-alias-add-button");
const catalogSubmitButton = document.querySelector("#catalog-submit-button");
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
const comboSubmitButton = document.querySelector("#combo-submit-button");
const cancelComboEditButton = document.querySelector("#cancel-combo-edit");
const comboSelect = document.querySelector("#combo-select");
const useComboButton = document.querySelector("#use-combo-button");
const comboList = document.querySelector("#combo-list");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const settingsShoppingSubtractStock = document.querySelector("#settings-shopping-subtract-stock");
const settingsLogList = document.querySelector("#settings-log-list");
const message = document.querySelector("#message");

const SUPABASE_TABLE = "shopping_app_state";
const ALLOWED_USERS_TABLE = "allowed_users";
const HISTORY_LIMIT = 120;
const IMPORT_UNITS = ["g", "ml", "ks", "kg"];
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
  "Ostatní"
];
const CATEGORY_ICONS = {
  "Pečivo": "🥖",
  "Mléčné": "🥛",
  "Maso": "🥩",
  "Ovoce a zelenina": "🥕",
  "Nápoje": "🥤",
  "Sladké": "🍫",
  "Mražené": "🧊",
  "Trvanlivé": "🥫",
  "Drogerie": "🧼",
  "Ostatní": "📦"
};
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
let editingComboId = null;
let supabaseClient = null;
let saveTimer = null;
let currentUser = null;
let currentAccess = null;
let listNameBeforeEdit = "";
let editingCatalogId = null;
let editingCatalogAliases = [];
let editingCatalogAliasIndex = -1;
let selectedPantryCategories = new Set();
let pantryCategoryFiltersInitialized = false;
let pendingEanProduct = null;
let pendingEanCatalogChoice = null;
let pendingCatalogEanProduct = null;
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
  window.addEventListener("resize", syncResponsiveMenu);
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
  pantryScanButton.addEventListener("click", openEanImport);
  pantryCategoryFilters?.addEventListener("change", handlePantryCategoryFilterChange);
  historyPeriodFilter.addEventListener("change", handleHistoryFilterChange);
  historyDateFrom.addEventListener("input", () => {
    historyPeriodFilter.value = "";
    renderHistory();
  });
  historyDateTo.addEventListener("input", () => {
    historyPeriodFilter.value = "";
    renderHistory();
  });
  statsMetrics.addEventListener("change", renderHistory);
  statsExportPdfButton.addEventListener("click", exportStatsPdf);
  darkModeToggle.addEventListener("change", toggleDarkMode);
  shoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  settingsShoppingSubtractStock.addEventListener("change", updateShoppingSubtractSetting);
  catalogForm.addEventListener("submit", saveCatalogItem);
  catalogBody.addEventListener("click", handleCatalogClick);
  catalogAliasAddButton.addEventListener("click", addOrUpdateCatalogAlias);
  catalogAliasList.addEventListener("click", handleCatalogAliasClick);
  shoppingForm.addEventListener("submit", addShoppingItem);
  shoppingProduct.addEventListener("input", syncShoppingUnitFromProduct);
  shoppingProduct.addEventListener("change", syncShoppingUnitFromProduct);
  shoppingList.addEventListener("click", handleShoppingClick);
  comboForm.addEventListener("submit", saveCombo);
  addComboItemButton.addEventListener("click", () => addComboItemRow());
  cancelComboEditButton.addEventListener("click", resetComboForm);
  comboItemsList.addEventListener("click", handleComboBuilderClick);
  comboItemsList.addEventListener("input", handleComboBuilderInput);
  comboItemsList.addEventListener("change", handleComboBuilderInput);
  useComboButton.addEventListener("click", useSelectedCombo);
  comboList.addEventListener("click", handleComboClick);
  openComboChangeButton?.addEventListener("click", () => openComboChangeModal());
  comboChangeSelect?.addEventListener("change", renderComboChangeItems);
  cancelComboChange?.addEventListener("click", closeComboChangeModal);
  applyComboChangeButton?.addEventListener("click", applyComboChangeFromModal);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = formatProductName(productInput.value);
    const amount = Number(amountInput.value);
    const price = parseOptionalPrice(priceInput.value);
    const eventDate = normalizeEventDate(eventDateInput.value);
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

    await applyItemChange({ name, amount, unit, action, category, price, eventDate });
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
  productInput.addEventListener("input", syncEntryProductLock);
  productInput.addEventListener("change", syncEntryProductLock);
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

  comboChangeModal?.addEventListener("click", (event) => {
    if (event.target === comboChangeModal) {
      closeComboChangeModal();
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

    if (input.readOnly && !input.dataset.selectCombobox) {
      return;
    }

    prepareComboboxInput(input);
    renderComboboxMenu(input);
  });

  document.addEventListener("input", (event) => {
    const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

    if (input && (!input.readOnly || input.dataset.selectCombobox)) {
      renderComboboxMenu(input);
    }
  });

  document.addEventListener("click", (event) => {
    const input = event.target.closest?.(COMBOBOX_INPUT_SELECTOR);

    if (input && input === activeComboboxInput && (!input.readOnly || input.dataset.selectCombobox)) {
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
    text.textContent = input.dataset.comboboxSource === "category-options"
      ? formatCategoryLabel(item.value)
      : item.value;
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
    .sort((a, b) => getComboboxOptionScore(a, query) - getComboboxOptionScore(b, query)
      || a.value.localeCompare(b.value, "cs"))
    .slice(0, 8);
}

function getComboboxOptionScore(item, query) {
  if (!query) {
    return 100;
  }

  const value = normalize(item.value);
  const meta = normalize(item.meta);

  if (value === query) {
    return 0;
  }

  if (value.startsWith(query)) {
    return 1;
  }

  if (value.split(" ").some((part) => part.startsWith(query))) {
    return 2;
  }

  if (value.includes(query)) {
    return 3;
  }

  if (meta.startsWith(query)) {
    return 4;
  }

  return 5;
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

  if (input === productInput) {
    amountInput.focus();
    amountInput.select();
  } else if (input === shoppingProduct) {
    shoppingAmount.focus();
    shoppingAmount.select();
  } else {
    input.focus();
  }
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
  renderCatalogAliasEditor();
  renderShoppingList();
  renderCombos();
  syncSettingsControls();
  setDefaultEventDate();
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
  syncResponsiveMenu();
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

function syncResponsiveMenu() {
  if (isDesktopMenuPersistent() && !appShell.hidden) {
    menuPanel.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
    return;
  }

  if (!isDesktopMenuPersistent()) {
    menuPanel.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }
}

function switchView(view, options = {}) {
  const nextView = view || "pantry";

  if (activeView === "catalog" && nextView !== "catalog" && pendingCatalogEanProduct) {
    pendingCatalogEanProduct = null;
  }

  activeView = nextView;

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

  if (!options.keepMenu && !isDesktopMenuPersistent()) {
    menuPanel.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }
}

function isDesktopMenuPersistent() {
  return window.matchMedia("(min-width: 1280px)").matches;
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
  const match = line.match(/^(.+?)\s+(\d[\d\s\u00a0]*(?:[,.]\d+)?)\s*([^\d\s]+(?:\s+[^\d\s]+)?)?$/u);

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
  const match = line.match(/^(\d[\d\s\u00a0]*(?:[,.]\d+)?)\s*([^\d\s]+)?\s+(.+)$/u);

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
  const amount = Number(String(value).replace(/[\s\u00a0]/g, "").replace(",", "."));
  return Number.isFinite(amount) && amount > 0 ? roundAmount(amount) : null;
}

function parseOptionalPrice(value) {
  const normalized = String(value || "").replace(",", ".").trim();

  if (!normalized) {
    return null;
  }

  const price = Number(normalized);
  return Number.isFinite(price) && price >= 0 ? roundAmount(price) : null;
}

function normalizeEventDate(value) {
  const text = String(value || "");

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(text)) {
    return text.length === 16 ? `${text}:00` : text;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return `${text}T00:00:00`;
  }

  return getLocalDateTimeValue(new Date());
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
    pc: "ks",
    pcs: "ks",
    piece: "ks",
    pieces: "ks",
    ml: "ml",
    mililitru: "ml",
    mililitrů: "ml",
    kilogram: "kg",
    kilogramu: "kg",
    kilogramů: "kg",
    kg: "kg",
    l: "ml"
  };
  const mappedUnit = unitMap[normalize(normalizedUnit)] || normalizedUnit;

  if (IMPORT_UNITS.includes(mappedUnit)) {
    return mappedUnit;
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
          createdAt: entry.createdAt,
          occurredAt: normalizeEventDate(typeof entry.occurredAt === "string" ? entry.occurredAt : entry.createdAt.slice(0, 10)),
          product: typeof entry.product === "string" ? entry.product : "",
          amount: Number.isFinite(Number(entry.amount)) ? roundAmount(Number(entry.amount)) : null,
          unit: typeof entry.unit === "string" ? entry.unit : "",
          price: Number.isFinite(Number(entry.price)) ? roundAmount(Number(entry.price)) : null,
          action: typeof entry.action === "string" ? entry.action : ""
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
        const aliases = normalizeEanAliases(item.eanAliases);
        const eans = normalizeEanList([
          ...(Array.isArray(item.eans) ? item.eans : [item.eans]),
          item.ean,
          ...aliases.map((alias) => alias.ean)
        ]);

        return {
          id: typeof item.id === "string" ? item.id : createId(),
          name: formatProductName(item.name),
          category: tidyName(item.category || "Ostatní"),
          unit: normalizeImportUnit(item.unit || "ks"),
          ean: eans[0] || "",
          eans,
          eanAliases: aliases
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
  setState(createDefaultState());
  selectedPantryCategories.clear();
  pantryCategoryFiltersInitialized = false;
  closeDeleteAllModal();
  resetForm();
  renderLists();
  renderItems();
  renderHistory();
  showMessage("Všechna data včetně historie a statistik byla smazána.");
  await saveState();
}

async function applyItemChange({ name, amount, unit, action, category, price = null, eventDate = "" }) {
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

  const historyText = getItemHistoryText(itemName, amount, unit, action, result, price);
  recordHistory(historyText, "item", getActiveList(), {
    action,
    product: itemName,
    amount,
    unit,
    price,
    occurredAt: eventDate || getLocalDateValue(new Date())
  });
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

function getItemHistoryText(name, amount, unit, action, result, price = null) {
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

  const priceSuffix = Number.isFinite(price) && price > 0 ? `, cena ${formatPrice(price)}` : "";

  if (result === "set") {
    return `Nastaveno ${name}: ${formatAmount(amount)} ${unit}${priceSuffix}.`;
  }

  if (["eaten", "discarded", "adjustMinus", "subtract"].includes(action)) {
    return `${labels[action]}: ${name} -${formatAmount(amount)} ${unit}.`;
  }

  if (result === "created") {
    return `${labels[action] || "Přidáno"}: ${name} ${formatAmount(amount)} ${unit}${priceSuffix}.`;
  }

  return `${labels[action] || "Přidáno"}: ${name} +${formatAmount(amount)} ${unit}${priceSuffix}.`;
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
  switchView("history");
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
    const parsed = parseImportLine(item.name);
    const summary = parsed ? getShoppingNeedSummary(parsed) : null;
    const row = document.createElement("article");
    const content = document.createElement("div");
    const text = document.createElement("strong");
    const meta = document.createElement("span");
    const actions = document.createElement("div");
    const toggle = document.createElement("button");
    const remove = document.createElement("button");

    row.className = `card-row${item.done ? " is-done" : ""}`;
    row.classList.toggle("is-covered", Boolean(appSettings.subtractStockFromShopping && summary && summary.missing === 0));
    content.className = "row-content";
    text.textContent = getShoppingDisplayTitle(item, parsed, summary);
    meta.className = "muted-text";
    meta.textContent = getShoppingItemMeta(item, parsed, summary);
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

function getShoppingDisplayTitle(item, parsed, summary) {
  if (!appSettings.subtractStockFromShopping || !parsed || !summary) {
    return item.name;
  }

  if (summary.missing === 0) {
    return `${parsed.name}: není potřeba kupovat`;
  }

  return `${parsed.name}: koupit ${formatAmountWithUnit(summary.missing, parsed.unit)}`;
}

function getShoppingItemMeta(item, parsed = parseImportLine(item.name), summary = parsed ? getShoppingNeedSummary(parsed) : null) {
  if (!appSettings.subtractStockFromShopping) {
    return "";
  }

  if (!parsed) {
    return "Zadej třeba: Mléko 1000 ml, potom odečtu zásoby.";
  }

  if (summary.missing === 0) {
    return `Cíl ${formatAmountWithUnit(summary.totalWanted, parsed.unit)}, v zásobách ${formatAmountWithUnit(summary.currentAmount, parsed.unit)}.`;
  }

  return `Zadáno ${formatAmountWithUnit(summary.totalWanted, parsed.unit)}, v zásobách ${formatAmountWithUnit(summary.currentAmount, parsed.unit)}.`;
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
  const editedCombo = editingComboId
    ? combos.find((combo) => combo.id === editingComboId)
    : null;

  if (editedCombo) {
    editedCombo.name = name;
    editedCombo.items = items;
  } else if (existing) {
    existing.items = items;
  } else {
    combos.unshift({
      id: createId(),
      name,
      items
    });
  }

  resetComboForm();
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

function resetComboForm() {
  editingComboId = null;
  comboForm.reset();
  resetComboBuilderRows();
  comboSubmitButton.textContent = "Uložit kombinaci";
  cancelComboEditButton.hidden = true;
}

function addComboItemRow(item = {}) {
  const row = document.createElement("div");
  row.className = "combo-item-row";
  row.innerHTML = `
    <label class="field combo-field">
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
        <option value="kg">kg</option>
      </select>
    </label>
    <label class="field combo-field">
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

  openComboChangeModal(combo.id);
}

function openComboChangeModal(selectedComboId = "") {
  if (!comboChangeModal || !comboChangeSelect) {
    return;
  }

  comboChangeSelect.replaceChildren();

  if (!combos.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Zatím žádná kombinace";
    comboChangeSelect.append(option);
  } else {
    combos.forEach((combo) => {
      const option = document.createElement("option");
      option.value = combo.id;
      option.textContent = combo.name;
      comboChangeSelect.append(option);
    });
  }

  if (selectedComboId) {
    comboChangeSelect.value = selectedComboId;
  }

  comboChangeAction.value = "purchase";
  renderComboChangeItems();
  comboChangeModal.hidden = false;
}

function closeComboChangeModal() {
  if (comboChangeModal) {
    comboChangeModal.hidden = true;
  }
}

function renderComboChangeItems() {
  if (!comboChangeItems || !comboChangeSelect) {
    return;
  }

  const combo = combos.find((currentCombo) => currentCombo.id === comboChangeSelect.value);
  comboChangeItems.replaceChildren();

  if (!combo) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Nejdřív si ulož kombinaci.";
    comboChangeItems.append(empty);
    return;
  }

  combo.items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "combo-change-row";
    row.innerHTML = `
      <div class="combo-change-product">
        <strong></strong>
        <small></small>
      </div>
      <label class="field">
        <span>Množství</span>
        <input type="number" min="0.01" step="any" inputmode="decimal" data-combo-change-amount="${index}">
      </label>
    `;

    row.querySelector("strong").textContent = item.name;
    row.querySelector("small").textContent = `${formatCategoryLabel(item.category)} · ${item.unit || "ks"}`;
    row.querySelector("input").value = item.amount ? String(item.amount) : "1";
    comboChangeItems.append(row);
  });
}

async function applyComboChangeFromModal() {
  const combo = combos.find((currentCombo) => currentCombo.id === comboChangeSelect?.value);
  const action = comboChangeAction?.value || "purchase";

  if (!combo) {
    showMessage("Vyber kombinaci.", true);
    return;
  }

  let changed = 0;
  let missing = 0;

  combo.items.forEach((item, index) => {
    const amountInput = comboChangeItems.querySelector(`[data-combo-change-amount="${index}"]`);
    const amount = Number(amountInput?.value);

    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const result = upsertItemAmount({
      ...item,
      amount: roundAmount(amount),
      action
    });

    if (result === "missing") {
      missing += 1;
    } else {
      changed += 1;
    }
  });

  recordHistory(
    `${action === "purchase" ? "Přičtena" : "Odečtena"} kombinace ${combo.name}: ${changed} položek${missing ? `, ${missing} chybělo` : ""}.`,
    "item",
    getActiveList(),
    {
      action,
      product: combo.name,
      amount: changed,
      unit: "ks",
      price: null,
      occurredAt: normalizeEventDate(eventDateInput.value)
    }
  );
  renderItems();
  renderCombos();
  renderHistory();
  closeComboChangeModal();
  showMessage(`${combo.name}: změna zapsána.`);
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
    if (editingComboId === combo.id) {
      resetComboForm();
    }
    recordHistory(`Smazána kombinace ${combo.name}.`, "combo");
  }

  if (button.dataset.comboAction === "edit") {
    startComboEdit(combo);
    return;
  }

  renderCombos();
  renderCatalog();
  renderHistory();
  await saveState();
}

function startComboEdit(combo) {
  editingComboId = combo.id;
  comboName.value = combo.name;
  comboItemsList.replaceChildren();
  combo.items.forEach((item) => addComboItemRow(item));

  if (!combo.items.length) {
    addComboItemRow();
  }

  comboSubmitButton.textContent = "Uložit úpravu";
  cancelComboEditButton.hidden = false;
  comboName.focus();
  showMessage(`Upravuješ kombinaci ${combo.name}.`);
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
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const remove = document.createElement("button");

    option.value = combo.id;
    option.textContent = combo.name;
    comboSelect.append(option);

    row.className = "card-row";
    content.className = "row-content";
    text.textContent = combo.name;
    meta.className = "muted-text";
    meta.textContent = combo.items.map((item) => `${item.name} ${formatAmount(item.amount)} ${item.unit}`).join(", ");
    actions.className = "row-actions";
    edit.className = "ghost-button";
    edit.type = "button";
    edit.dataset.comboAction = "edit";
    edit.dataset.id = combo.id;
    edit.textContent = "Upravit";
    remove.className = "danger-button";
    remove.type = "button";
    remove.dataset.comboAction = "remove";
    remove.dataset.id = combo.id;
    remove.textContent = "Smazat";

    content.append(text, meta);
    actions.append(edit, remove);
    row.append(content, actions);
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
  renderPantryCategoryFilters(items);
  const visibleItems = getVisiblePantryItems(items);
  itemsBody.innerHTML = "";
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();

  tableWrap.classList.toggle("has-items", visibleItems.length > 0);
  if (emptyState) {
    emptyState.textContent = items.length && !visibleItems.length
      ? "Žádná položka neodpovídá vybraným kategoriím."
      : "Lednice je zatím prázdná.";
  }

  visibleItems
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <span class="product-title-row">
            <span class="product-name"></span>
            <button class="icon-inline-button" type="button" data-action="edit" data-id="${item.id}" aria-label="Upravit položku">${icons.edit}</button>
          </span>
          <small class="product-card-category"></small>
        </td>
        <td class="category-cell"></td>
        <td class="number-cell">${formatAmountWithUnit(item.amount, item.unit)}</td>
      `;

      row.querySelector(".product-name").textContent = item.name;
      row.querySelector(".category-cell").textContent = formatCategoryLabel(item.category);
      row.querySelector(".product-card-category").textContent = formatCategoryLabel(item.category);
      itemsBody.append(row);
    });
}

function renderPantryCategoryFilters(items = getActiveItems()) {
  if (!pantryCategoryFilters) {
    return;
  }

  const categories = [...new Set(items.map((item) => tidyName(item.category) || "Ostatní"))]
    .sort((a, b) => a.localeCompare(b, "cs"));

  pantryCategoryFilters.replaceChildren();

  if (!categories.length) {
    selectedPantryCategories.clear();
    pantryCategoryFiltersInitialized = false;
    pantryCategoryFilters.hidden = true;
    return;
  }

  pantryCategoryFilters.hidden = false;
  selectedPantryCategories = new Set([...selectedPantryCategories].filter((category) => categories.includes(category)));

  if (!pantryCategoryFiltersInitialized) {
    selectedPantryCategories = new Set(categories);
    pantryCategoryFiltersInitialized = true;
  }

  categories.forEach((category) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.value = category;
    checkbox.checked = selectedPantryCategories.has(category);
    text.textContent = formatCategoryLabel(category);
    label.append(checkbox, text);
    pantryCategoryFilters.append(label);
  });
}

function handlePantryCategoryFilterChange(event) {
  const checkbox = event.target.closest?.("input[type='checkbox']");

  if (!checkbox) {
    return;
  }

  if (checkbox.checked) {
    selectedPantryCategories.add(checkbox.value);
  } else {
    selectedPantryCategories.delete(checkbox.value);
  }

  renderItems();
}

function getVisiblePantryItems(items) {
  if (!selectedPantryCategories.size) {
    return [];
  }

  return items.filter((item) => selectedPantryCategories.has(tidyName(item.category) || "Ostatní"));
}

function formatCategoryLabel(category) {
  const cleanCategory = tidyName(category) || "Ostatní";
  return `${getCategoryIcon(cleanCategory)} ${cleanCategory}`;
}

function getCategoryIcon(category) {
  const cleanCategory = tidyName(category) || "Ostatní";
  const match = Object.entries(CATEGORY_ICONS).find(([name]) => normalize(name) === normalize(cleanCategory));
  return match ? match[1] : CATEGORY_ICONS["Ostatní"];
}

function renderProductOptions() {
  productOptions.innerHTML = "";
  const options = [
    ...getCatalogItems().flatMap((item) => [
      {
        value: item.name,
        label: `${formatCategoryLabel(item.category)} | ${item.unit}`,
        text: item.unit
      },
      ...normalizeEanAliases(item.eanAliases).map((alias) => ({
        value: alias.name,
        label: `Alias pro ${item.name}${alias.ean ? ` | EAN ${alias.ean}` : ""}`,
        text: alias.unit || item.unit
      }))
    ]),
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
  ].filter((category) => normalize(category) !== "kombinace")
    .sort((a, b) => a.localeCompare(b, "cs"));
  categoryOptions.replaceChildren();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.label = formatCategoryLabel(category);
    option.textContent = formatCategoryLabel(category);
    categoryOptions.append(option);
  });
}

async function saveCatalogItem(event) {
  event.preventDefault();
  const name = formatProductName(catalogName.value);
  const categoryValue = tidyName(catalogCategory.value) || "Ostatní";
  const category = normalize(categoryValue) === "kombinace" ? "Ostatní" : categoryValue;
  const unit = normalizeImportUnit(catalogUnit.value || "ks");

  if (!name) {
    showMessage("Zadej název potraviny do číselníku.", true);
    catalogName.focus();
    return;
  }

  const eanPayload = getPendingCatalogEanPayload(pendingCatalogEanProduct);
  const savedFromEan = Boolean(eanPayload.ean);
  const aliases = mergeEanAliases(editingCatalogAliases, eanPayload.eanAliases || []);
  const eans = normalizeEanList([
    ...aliases.map((alias) => alias.ean),
    ...(eanPayload.eans || []),
    eanPayload.ean
  ]);

  upsertCatalogItem({ id: editingCatalogId, name, category, unit, eans, eanAliases: aliases, replaceAliases: true });
  resetCatalogEditor(unit);
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  recordHistory(savedFromEan
    ? `Číselník: uložena potravina ${name} z EAN ${eanPayload.ean}.`
    : `Číselník: uložena potravina ${name}.`, "catalog");
  renderHistory();
  showMessage(`Potravina ${name} je v číselníku.`);
  await saveState();
}

function getPendingCatalogEanPayload(product) {
  const ean = normalizeEan(product?.ean);

  if (!ean) {
    return {};
  }

  return {
    ean,
    eans: [ean],
    eanAliases: [product]
  };
}

function resetCatalogEditor(unit = "ks") {
  catalogForm.reset();
  editingCatalogId = null;
  editingCatalogAliases = [];
  editingCatalogAliasIndex = -1;
  pendingCatalogEanProduct = null;
  catalogUnit.value = unit;
  catalogAliasAmount.value = "1";
  catalogAliasUnit.value = unit;
  catalogAliasAddButton.textContent = "Přidat alias";
  catalogSubmitButton.textContent = "Přidat do číselníku";
  renderCatalogAliasEditor();
}

function getCatalogAliasesForEditor(item) {
  const aliases = normalizeEanAliases(item?.eanAliases);
  const existingEans = new Set(aliases.map((alias) => alias.ean).filter(Boolean));

  normalizeEanList(item?.eans || item?.ean).forEach((ean) => {
    if (!existingEans.has(ean)) {
      aliases.push({
        ean,
        name: item.name,
        amount: 1,
        unit: item.unit || "ks",
        category: item.category || "Ostatní"
      });
    }
  });

  return aliases;
}

function renderCatalogAliasEditor() {
  if (!catalogAliasList) {
    return;
  }

  catalogAliasList.replaceChildren();

  if (!editingCatalogAliases.length) {
    const empty = document.createElement("p");
    empty.className = "message catalog-alias-empty";
    empty.textContent = "Zatím bez aliasů. Přidej třeba Mléko Kunín + jeho EAN, aby se při skenu nabídlo pod Mléko.";
    catalogAliasList.append(empty);
    return;
  }

  editingCatalogAliases.forEach((alias, index) => {
    const row = document.createElement("div");
    const text = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const actions = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    row.className = "catalog-alias-row";
    text.className = "catalog-alias-text";
    actions.className = "row-actions";
    title.textContent = alias.name;
    meta.textContent = `${alias.ean ? `EAN ${alias.ean}` : "bez EANu"} | ${formatAmount(alias.amount || 1)} ${alias.unit || "ks"}`;
    editButton.className = "ghost-button";
    editButton.type = "button";
    editButton.dataset.catalogAliasAction = "edit";
    editButton.dataset.index = String(index);
    editButton.textContent = "Upravit";
    deleteButton.className = "danger-button";
    deleteButton.type = "button";
    deleteButton.dataset.catalogAliasAction = "delete";
    deleteButton.dataset.index = String(index);
    deleteButton.textContent = "Smazat";
    text.append(title, meta);
    actions.append(editButton, deleteButton);
    row.append(text, actions);
    catalogAliasList.append(row);
  });
}

function addOrUpdateCatalogAlias() {
  const name = formatProductName(catalogAliasName.value);
  const eanText = tidyName(catalogAliasEan.value);
  const ean = normalizeEan(eanText);
  const amount = Number(catalogAliasAmount.value);
  const unit = normalizeImportUnit(catalogAliasUnit.value || catalogUnit.value || "ks");
  const categoryValue = tidyName(catalogCategory.value) || "Ostatní";
  const category = normalize(categoryValue) === "kombinace" ? "Ostatní" : categoryValue;

  if (!name) {
    showMessage("Zadej název aliasu, třeba Mléko Kunín.", true);
    catalogAliasName.focus();
    return;
  }

  if (eanText && !ean) {
    showMessage("EAN/barcode musí mít 8 až 14 číslic.", true);
    catalogAliasEan.focus();
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showMessage("Množství aliasu musí být číslo větší než nula.", true);
    catalogAliasAmount.focus();
    return;
  }

  const alias = normalizeEanAlias({ ean, name, amount, unit, category });

  if (!alias) {
    showMessage("Alias se nepodařilo připravit.", true);
    return;
  }

  editingCatalogAliases = editingCatalogAliases.filter((currentAlias, index) => {
    if (index === editingCatalogAliasIndex) {
      return false;
    }

    return !isSameEanAlias(currentAlias, alias);
  });

  if (editingCatalogAliasIndex >= 0 && editingCatalogAliasIndex <= editingCatalogAliases.length) {
    editingCatalogAliases.splice(editingCatalogAliasIndex, 0, alias);
  } else {
    editingCatalogAliases.push(alias);
  }

  clearCatalogAliasFields();
  renderCatalogAliasEditor();
  showMessage(`Alias ${alias.name} je připravený k uložení v číselníku.`);
}

function handleCatalogAliasClick(event) {
  const button = event.target.closest("button[data-catalog-alias-action]");

  if (!button) {
    return;
  }

  const index = Number(button.dataset.index);
  const alias = editingCatalogAliases[index];

  if (!alias) {
    return;
  }

  if (button.dataset.catalogAliasAction === "edit") {
    editingCatalogAliasIndex = index;
    catalogAliasName.value = alias.name;
    catalogAliasEan.value = alias.ean || "";
    catalogAliasAmount.value = formatFormNumber(alias.amount || 1);
    catalogAliasUnit.value = alias.unit || catalogUnit.value || "ks";
    catalogAliasAddButton.textContent = "Uložit alias";
    catalogAliasName.focus();
    return;
  }

  if (button.dataset.catalogAliasAction === "delete") {
    editingCatalogAliases.splice(index, 1);
    clearCatalogAliasFields();
    renderCatalogAliasEditor();
    showMessage(`Alias ${alias.name} byl odebraný. Ulož číselník pro potvrzení změn.`);
  }
}

function clearCatalogAliasFields() {
  editingCatalogAliasIndex = -1;
  catalogAliasName.value = "";
  catalogAliasEan.value = "";
  catalogAliasAmount.value = "1";
  catalogAliasUnit.value = catalogUnit.value || "ks";
  catalogAliasAddButton.textContent = "Přidat alias";
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
    pendingCatalogEanProduct = null;
    editingCatalogAliases = getCatalogAliasesForEditor(existing || item);
    editingCatalogAliasIndex = -1;
    catalogName.value = item.name;
    catalogCategory.value = item.category || "Ostatní";
    catalogUnit.value = item.unit || "ks";
    catalogAliasUnit.value = item.unit || "ks";
    catalogAliasAddButton.textContent = "Přidat alias";
    catalogSubmitButton.textContent = "Uložit položku";
    renderCatalogAliasEditor();
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
    const product = createEanProductFromCatalogItem(localItem, ean);
    renderEanResolution(product, [{ item: localItem, score: 120 }]);
    eanMessage.textContent = `EAN už je v číselníku u položky ${localItem.name}. Můžeš ho přidat do seznamu nebo založit jako novou položku.`;
    return;
  }

  eanMessage.textContent = "Hledám produkt ve veřejných databázích...";

  try {
    const product = await lookupProductInPublicDatabases(ean);

    if (!product) {
      renderEanResolution(createDefaultEanProduct(ean), []);
      eanMessage.textContent = "EAN jsem nenašel v databázi. Můžeš ho založit do číselníku se standardy.";
      return;
    }

    const matches = findCatalogMatchesForEanProduct(product);
    renderEanResolution(product, matches);
    eanMessage.textContent = matches.length
      ? `Načteno: ${product.name}. Vyber, jestli patří pod existující položku.`
      : `Načteno: ${product.name}. V číselníku jsem nenašel podobnou položku.`;
  } catch (error) {
    eanMessage.textContent = "EAN API teď neodpovídá. Zkus to za chvíli nebo zadej položku ručně.";
  }
}

async function lookupProductInPublicDatabases(ean) {
  const openFactsHosts = [
    "https://world.openfoodfacts.org",
    "https://cz.openfoodfacts.org",
    "https://sk.openfoodfacts.org",
    "https://de.openfoodfacts.org",
    "https://at.openfoodfacts.org",
    "https://pl.openfoodfacts.org",
    "https://fr.openfoodfacts.org",
    "https://it.openfoodfacts.org",
    "https://es.openfoodfacts.org",
    "https://uk.openfoodfacts.org",
    "https://us.openfoodfacts.org",
    "https://world.openproductsfacts.org",
    "https://world.openbeautyfacts.org",
    "https://world.openpetfoodfacts.org"
  ];
  const lookups = [
    ...openFactsHosts.map((host) => () => lookupOpenFoodFactsProduct(ean, host)),
    () => lookupUpcItemDbProduct(ean),
    () => lookupBarcodeMonsterProduct(ean)
  ];

  for (const lookup of lookups) {
    try {
      const product = await lookup();

      if (product?.name && normalize(product.name) !== normalize(`EAN ${ean}`)) {
        return product;
      }
    } catch (error) {
      // Pokračujeme dalším veřejným zdrojem, aby jeden výpadek neshodil celé načtení.
    }
  }

  return null;
}

async function lookupBarcodeMonsterProduct(ean) {
  const response = await fetch(`https://barcode.monster/api/${ean}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  if (!data || data.status === "notfound") {
    return null;
  }

  return mapExternalBarcodeProduct({
    title: data.description || data.name || data.title,
    brand: data.company || data.brand,
    size: data.size
  }, ean);
}

async function lookupOpenFoodFactsProduct(ean, baseUrl) {
  const fields = [
    "product_name",
    "product_name_cs",
    "generic_name",
    "brands",
    "categories",
    "categories_tags",
    "quantity",
    "product_quantity",
    "product_quantity_unit",
    "net_weight",
    "code"
  ].join(",");
  const response = await fetch(`${baseUrl}/api/v2/product/${ean}.json?fields=${fields}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  if (data.status === 0 || !data.product) {
    return null;
  }

  return mapOpenFoodFactsProduct(data.product, ean);
}

async function lookupUpcItemDbProduct(ean) {
  const response = await fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${ean}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const item = Array.isArray(data.items) ? data.items[0] : null;

  if (!item) {
    return null;
  }

  return mapExternalBarcodeProduct(item, ean);
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

function createEanProductFromCatalogItem(item, ean) {
  const alias = item._eanAlias || {};

  return {
    id: createId(),
    name: alias.name || item.name,
    category: alias.category || item.category || "Ostatní",
    amount: alias.amount || 1,
    unit: alias.unit || item.unit || "ks",
    ean
  };
}

function renderEanResolution(product, matches) {
  pendingEanProduct = product;
  pendingEanCatalogChoice = matches[0]?.item || null;
  eanResult.replaceChildren();
  eanResult.hidden = false;

  const header = document.createElement("div");
  const title = document.createElement("strong");
  const meta = document.createElement("span");
  const matchActions = document.createElement("div");
  const primaryActions = document.createElement("div");
  const addToListButton = document.createElement("button");
  const addScannedButton = document.createElement("button");
  const addToCatalogButton = document.createElement("button");

  header.className = "ean-result-head";
  title.textContent = product.name;
  meta.textContent = `${formatCategoryLabel(product.category)} | odhad: ${formatAmount(product.amount || 1)} ${product.unit || "ks"}`;
  header.append(title, meta);
  eanResult.append(header);

  if (matches.length) {
    const hint = document.createElement("p");
    hint.textContent = "Podobné položky v číselníku. Vybraná položka se použije pro přidání do seznamu.";
    matchActions.className = "ean-match-actions";
    eanResult.append(hint);

    matches.forEach((match) => {
      const button = document.createElement("button");
      const isSelected = pendingEanCatalogChoice && normalize(pendingEanCatalogChoice.name) === normalize(match.item.name);
      button.className = `ghost-button${isSelected ? " is-selected" : ""}`;
      button.type = "button";
      button.dataset.eanAction = "select-match";
      button.dataset.name = match.item.name;
      button.setAttribute("aria-pressed", String(isSelected));
      button.textContent = `Použít ${match.item.name}`;
      matchActions.append(button);
    });
    eanResult.append(matchActions);
  } else {
    const hint = document.createElement("p");
    hint.textContent = "Žádná jistá shoda v číselníku. Můžeš položku připravit do seznamu, nebo ji založit v číselníku a upravit standardy.";
    eanResult.append(hint);
  }

  const aliasPanel = document.createElement("div");
  const aliasLabel = document.createElement("label");
  const aliasText = document.createElement("span");
  const aliasInput = document.createElement("input");
  const aliasButton = document.createElement("button");

  aliasPanel.className = "ean-alias-panel";
  aliasLabel.className = "field";
  aliasText.textContent = "Přiřadit EAN k jiné položce";
  aliasInput.id = "ean-alias-target-input";
  aliasInput.type = "text";
  aliasInput.dataset.comboboxSource = "product-options";
  aliasInput.placeholder = "Např. Mléko nebo Cottage";
  aliasButton.className = "ghost-button";
  aliasButton.type = "button";
  aliasButton.dataset.eanAction = "assign-custom";
  aliasButton.textContent = "Přiřadit EAN";
  aliasLabel.append(aliasText, aliasInput);
  aliasPanel.append(aliasLabel, aliasButton);
  eanResult.append(aliasPanel);

  addToListButton.className = "primary-button";
  addToListButton.type = "button";
  addToListButton.dataset.eanAction = "add-to-list";
  addToListButton.textContent = pendingEanCatalogChoice
    ? `Přidat jako ${pendingEanCatalogChoice.name} do ${getDisplayListName(getActiveList())}`
    : `Přidat do ${getDisplayListName(getActiveList())}`;

  addScannedButton.className = "ghost-button";
  addScannedButton.type = "button";
  addScannedButton.dataset.eanAction = "add-scanned-to-list";
  addScannedButton.textContent = `Přidat naskenované: ${product.name}`;

  addToCatalogButton.className = "ghost-button";
  addToCatalogButton.type = "button";
  addToCatalogButton.dataset.eanAction = "add-to-catalog";
  addToCatalogButton.textContent = "Přidat do číselníku";

  primaryActions.className = "ean-result-actions ean-result-primary-actions";
  primaryActions.append(addToListButton);

  if (pendingEanCatalogChoice && normalize(pendingEanCatalogChoice.name) !== normalize(product.name)) {
    primaryActions.append(addScannedButton);
  }

  primaryActions.append(addToCatalogButton);
  eanResult.append(primaryActions);
}

async function handleEanResultClick(event) {
  const button = event.target.closest("button[data-ean-action]");

  if (!button || !pendingEanProduct) {
    return;
  }

  if (button.dataset.eanAction === "select-match") {
    const item = findCatalogItemByName(button.dataset.name);

    if (item) {
      pendingEanCatalogChoice = item;
      eanResult.querySelectorAll("[data-ean-action='select-match']").forEach((matchButton) => {
        const isSelected = normalize(matchButton.dataset.name) === normalize(item.name);
        matchButton.classList.toggle("is-selected", isSelected);
        matchButton.setAttribute("aria-pressed", String(isSelected));
      });
      const addButton = eanResult.querySelector("[data-ean-action='add-to-list']");

      if (addButton) {
        addButton.textContent = `Přidat jako ${item.name} do ${getDisplayListName(getActiveList())}`;
      }

      eanMessage.textContent = `Vybráno: ${item.name}. Teď můžeš přidat položku do seznamu.`;
    }

    return;
  }

  if (button.dataset.eanAction === "add-to-list") {
    if (pendingEanCatalogChoice) {
      await applyEanCatalogChoice(pendingEanCatalogChoice, pendingEanProduct, "assigned");
      return;
    }

    addEanProductToActiveList(pendingEanProduct);
    return;
  }

  if (button.dataset.eanAction === "add-scanned-to-list") {
    addEanProductToActiveList(pendingEanProduct);
    return;
  }

  if (button.dataset.eanAction === "assign-custom") {
    const input = eanResult.querySelector("#ean-alias-target-input");
    const item = findCatalogItemByName(input?.value);

    if (!item) {
      eanMessage.textContent = "Vyber existující položku z číselníku, ke které se má EAN přiřadit.";
      input?.focus();
      return;
    }

    await applyEanCatalogChoice(item, pendingEanProduct, "assigned");
    return;
  }

  if (button.dataset.eanAction === "add-to-catalog") {
    prepareCatalogItemFromEan(pendingEanProduct);
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

function addEanProductToActiveList(product) {
  productInput.value = product.name;
  categoryInput.value = product.category || inferCategoryFromName(product.name);
  amountInput.value = formatFormNumber(product.amount || 1);
  unitSelect.value = product.unit || "ks";
  clearEanResult();
  switchView("pantry");
  eanMessage.textContent = `Připraveno k přidání do ${getDisplayListName(getActiveList())}.`;
  showMessage(`Připraveno jako ${product.name}. Název, kategorii i jednotku můžeš ještě upravit.`);
}

function prepareCatalogItemFromEan(product) {
  const category = product.category || inferCategoryFromName(product.name);
  const unit = normalizeImportUnit(product.unit || "ks");

  pendingCatalogEanProduct = {
    ...product,
    category,
    amount: product.amount || 1,
    unit: product.unit || unit
  };
  editingCatalogId = null;
  editingCatalogAliases = normalizeEanAliases([pendingCatalogEanProduct]);
  editingCatalogAliasIndex = -1;
  catalogName.value = formatProductName(product.name);
  catalogCategory.value = category;
  catalogUnit.value = unit;
  catalogAliasUnit.value = unit;
  catalogSubmitButton.textContent = "Uložit položku";
  renderCatalogAliasEditor();
  renderCategoryOptions();
  clearEanResult();
  switchView("catalog");
  catalogName.focus();
  catalogName.select();
  eanMessage.textContent = `EAN ${product.ean} je připravený k založení v číselníku.`;
  showMessage(`Doplň položku ${product.name} v číselníku a ulož ji.`);
}

function clearEanResult() {
  pendingEanProduct = null;
  pendingEanCatalogChoice = null;

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

  eanMessage.textContent = "Čtu kód z fotky: zkouším originál, výřezy, otočení a kontrastní varianty...";

  try {
    const code = await detectEanFromImage(file);

    if (!code) {
      eanMessage.textContent = "Na fotce jsem kód nenašel ani po úpravách obrazu. Zkus fotku kolmo na čárový kód, bez odlesku a tak, aby byly vidět celé krajní čáry.";
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
  const variants = [file, ...await createBarcodeImageVariants(file)];
  const candidates = [];

  for (const variant of variants) {
    candidates.push(...await detectEanCandidatesWithBarcodeDetector(variant));
  }

  for (const variant of variants) {
    const code = await detectEanWithZxing(variant);

    if (code) {
      candidates.push(code);
    }
  }

  for (const variant of variants.slice(0, 8)) {
    const code = await detectEanWithOcr(variant);

    if (code) {
      candidates.push(code);
    }
  }

  return pickLikelyEanCode(candidates);
}

async function detectEanWithBarcodeDetector(file) {
  return pickLikelyEanCode(await detectEanCandidatesWithBarcodeDetector(file));
}

async function detectEanCandidatesWithBarcodeDetector(file) {
  if (!("BarcodeDetector" in window) || !window.createImageBitmap) {
    return [];
  }

  try {
    const bitmap = await createImageBitmap(file);
    const requestedFormats = [
      "ean_13",
      "ean_8",
      "upc_a",
      "upc_e",
      "code_128",
      "code_39",
      "code_93",
      "itf",
      "codabar",
      "data_matrix",
      "qr_code"
    ];
    const supportedFormats = typeof BarcodeDetector.getSupportedFormats === "function"
      ? await BarcodeDetector.getSupportedFormats()
      : requestedFormats;
    const formats = requestedFormats.filter((format) => supportedFormats.includes(format));
    const detector = formats.length
      ? new BarcodeDetector({ formats })
      : new BarcodeDetector();
    const codes = await detector.detect(bitmap);
    return codes.flatMap((item) => findLikelyEanCodes(item.rawValue));
  } catch (error) {
    return [];
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

async function detectEanWithZxingVariants(file) {
  if (!window.ZXing?.BrowserMultiFormatReader || !window.createImageBitmap) {
    return "";
  }

  const variants = await createBarcodeImageVariants(file);

  for (const variant of variants) {
    const code = await detectEanWithZxing(variant);

    if (code) {
      return code;
    }
  }

  return "";
}

async function createBarcodeImageVariants(file) {
  try {
    const bitmap = await createImageBitmap(file);
    const maxSide = 2600;
    const sourceMaxSide = Math.max(bitmap.width, bitmap.height);
    const scale = sourceMaxSide > maxSide
      ? maxSide / sourceMaxSide
      : Math.min(2.4, maxSide / sourceMaxSide);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext("2d");

    if (!context) {
      return [];
    }

    context.imageSmoothingEnabled = false;
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    const sourceCanvases = [
      canvas,
      cropCanvas(canvas, 0.04, 0.04, 0.92, 0.92),
      cropCanvas(canvas, 0, 0.18, 1, 0.64),
      cropCanvas(canvas, 0.16, 0, 0.68, 1),
      cropCanvas(canvas, 0, 0, 0.58, 1),
      cropCanvas(canvas, 0.42, 0, 0.58, 1),
      rotateCanvas(canvas, Math.PI / 2),
      rotateCanvas(canvas, Math.PI),
      rotateCanvas(canvas, (Math.PI * 3) / 2)
    ].filter(Boolean);
    const modes = [
      "plain",
      "contrast",
      "threshold-105",
      "threshold-125",
      "threshold-150",
      "threshold-175",
      "invert-threshold",
      "red-channel",
      "green-channel",
      "blue-channel",
      "black-key",
      "red-bg-black-key"
    ];
    const variants = [];

    for (const sourceCanvas of sourceCanvases) {
      for (const mode of modes) {
        const blob = await createBarcodeVariantBlob(sourceCanvas, mode);

        if (blob) {
          variants.push(blob);
        }
      }
    }

    return variants;
  } catch (error) {
    return [];
  }
}

function cropCanvas(sourceCanvas, xRatio, yRatio, widthRatio, heightRatio) {
  const x = Math.max(0, Math.round(sourceCanvas.width * xRatio));
  const y = Math.max(0, Math.round(sourceCanvas.height * yRatio));
  const width = Math.max(1, Math.round(sourceCanvas.width * widthRatio));
  const height = Math.max(1, Math.round(sourceCanvas.height * heightRatio));
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(width, sourceCanvas.width - x);
  canvas.height = Math.min(height, sourceCanvas.height - y);
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  context.drawImage(sourceCanvas, x, y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function rotateCanvas(sourceCanvas, radians) {
  const quarterTurn = Math.abs(Math.sin(radians)) > 0.5;
  const canvas = document.createElement("canvas");
  canvas.width = quarterTurn ? sourceCanvas.height : sourceCanvas.width;
  canvas.height = quarterTurn ? sourceCanvas.width : sourceCanvas.height;
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(radians);
  context.drawImage(sourceCanvas, -sourceCanvas.width / 2, -sourceCanvas.height / 2);
  return canvas;
}

async function createBarcodeVariantBlob(sourceCanvas, mode) {
  if (mode === "plain") {
    return await canvasToBlob(sourceCanvas);
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return null;
  }

  canvas.width = sourceCanvas.width;
  canvas.height = sourceCanvas.height;
  context.drawImage(sourceCanvas, 0, 0);
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const threshold = Number(mode.split("-")[1]) || 150;

  for (let index = 0; index < image.data.length; index += 4) {
    const red = image.data[index];
    const green = image.data[index + 1];
    const blue = image.data[index + 2];
    const gray = (red * 0.299) + (green * 0.587) + (blue * 0.114);
    const channelValue = getBarcodeFilterValue({ red, green, blue, gray, mode, threshold });
    const value = mode === "contrast"
      ? Math.max(0, Math.min(255, (gray - 128) * 2.15 + 128))
      : mode === "invert-threshold"
        ? (gray > threshold ? 0 : 255)
        : channelValue;
    image.data[index] = value;
    image.data[index + 1] = value;
    image.data[index + 2] = value;
  }

  context.putImageData(image, 0, 0);
  return await canvasToBlob(canvas);
}

function getBarcodeFilterValue({ red, green, blue, gray, mode, threshold }) {
  if (mode === "red-channel") {
    return red > threshold ? 255 : 0;
  }

  if (mode === "green-channel") {
    return green > threshold ? 255 : 0;
  }

  if (mode === "blue-channel") {
    return blue > threshold ? 255 : 0;
  }

  if (mode === "black-key") {
    return Math.max(red, green, blue) < 92 ? 0 : 255;
  }

  if (mode === "red-bg-black-key") {
    const looksRed = red > 120 && green < 115 && blue < 115;
    const looksBlack = Math.max(red, green, blue) < 120;
    return looksBlack && !looksRed ? 0 : 255;
  }

  return gray > threshold ? 255 : 0;
}

async function canvasToBlob(canvas) {
  return await new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
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
  return pickLikelyEanCode(findLikelyEanCodes(value));
}

function findLikelyEanCodes(value) {
  const text = String(value || "");
  const directCandidates = text.match(/\d{8,14}/g) || [];
  const spacedCandidates = text.match(/\d(?:[\s.-]?\d){7,13}/g) || [];
  const candidates = [...directCandidates, ...spacedCandidates]
    .map((candidate) => candidate.replace(/\D/g, ""))
    .filter((candidate) => candidate.length >= 8 && candidate.length <= 14);

  return [...new Set(candidates)].sort(sortEanCandidates);
}

function pickLikelyEanCode(values) {
  const candidates = [...new Set(values.flatMap(findLikelyEanCodes))];

  if (!candidates.length) {
    return "";
  }

  return candidates.sort(sortEanCandidates)[0] || "";
}

function sortEanCandidates(first, second) {
  const firstValid = hasValidGtinChecksum(first) ? 1 : 0;
  const secondValid = hasValidGtinChecksum(second) ? 1 : 0;

  if (firstValid !== secondValid) {
    return secondValid - firstValid;
  }

  const preferredLengths = [13, 8, 12, 14];
  const firstRank = preferredLengths.indexOf(first.length);
  const secondRank = preferredLengths.indexOf(second.length);

  if (firstRank !== secondRank) {
    return (firstRank === -1 ? 99 : firstRank) - (secondRank === -1 ? 99 : secondRank);
  }

  return first.localeCompare(second);
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
  const quantity = inferQuantity([
    product.quantity,
    [product.product_quantity, product.product_quantity_unit].filter(Boolean).join(" "),
    product.net_weight
  ].filter(Boolean).join(" "));

  return {
    id: createId(),
    name,
    category,
    amount: quantity.amount,
    unit: quantity.unit,
    ean
  };
}

function mapExternalBarcodeProduct(product, ean) {
  const name = formatProductName(product.title || product.description || product.brand || `EAN ${ean}`);
  const quantity = inferQuantity([
    product.size,
    product.title,
    product.description
  ].filter(Boolean).join(" "));

  return {
    id: createId(),
    name,
    category: inferCategoryFromName(name),
    amount: quantity.amount,
    unit: quantity.unit,
    ean
  };
}

function inferQuantity(quantity) {
  const text = String(quantity || "").replace(/[×]/g, "x");
  const packageMatch = text.match(/(\d+(?:[,.]\d+)?)\s*x\s*(\d+(?:[,.]\d+)?)\s*(kg|g|l|ml|ks|pcs|pc|pieces|piece)\b/i);

  if (packageMatch) {
    const count = parseImportAmount(packageMatch[1]) || 1;
    const itemAmount = parseImportAmount(packageMatch[2]) || 1;
    const normalized = normalizeImportAmountAndUnit(itemAmount, packageMatch[3]);

    return {
      amount: roundAmount(count * normalized.amount),
      unit: normalized.unit
    };
  }

  const match = text.match(/(\d+(?:[,.]\d+)?)\s*(kg|g|l|ml|ks|pcs|pc|pieces|piece)\b/i);

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
  const nextName = normalize(item.name);
  const nextAliasNames = nextAliases.map((alias) => normalize(alias.name)).filter(Boolean);

  if (nextEans.length || nextAliasNames.length) {
    catalogItems.forEach((currentItem) => {
      const sameItem = (item.id && currentItem.id === item.id) || normalize(currentItem.name) === nextName;

      if (sameItem) {
        return;
      }

      const eans = normalizeEanList(currentItem.eans || currentItem.ean).filter((ean) => !nextEans.includes(ean));
      const aliases = normalizeEanAliases(currentItem.eanAliases).filter((alias) => {
        return !nextEans.includes(alias.ean) && !nextAliasNames.includes(normalize(alias.name));
      });
      currentItem.ean = eans[0] || "";
      currentItem.eans = eans;
      currentItem.eanAliases = aliases;
    });
  }

  const existing = catalogItems.find((currentItem) => {
    return (item.id && currentItem.id === item.id)
      || normalize(currentItem.name) === nextName;
  });

  if (existing) {
    const mergedEans = item.replaceAliases
      ? nextEans
      : normalizeEanList([...(existing.eans || []), existing.ean, ...nextEans]);
    const mergedAliases = item.replaceAliases
      ? nextAliases
      : mergeEanAliases(existing.eanAliases, nextAliases);
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
      <td></td>
      <td class="icon-cell">
        <div class="row-actions">
          <button class="ghost-button" type="button" data-catalog-action="edit">Upravit</button>
          <button class="danger-button" type="button" data-catalog-action="delete">Smazat</button>
        </div>
      </td>
    `;
    row.children[0].textContent = item.name;
    row.children[1].textContent = formatCategoryLabel(item.category);
    row.children[2].textContent = item.unit;
    row.children[3].append(createCatalogAliasSummary(item));
    row.querySelectorAll("[data-catalog-action]").forEach((button) => {
      button.dataset.name = normalize(item.name);
    });
    catalogBody.append(row);
  });
}

function createCatalogAliasSummary(item) {
  const aliases = normalizeEanAliases(item.eanAliases);
  const wrapper = document.createElement("div");

  wrapper.className = "catalog-alias-summary";

  if (!aliases.length) {
    wrapper.textContent = "Bez aliasů";
    return wrapper;
  }

  aliases.slice(0, 3).forEach((alias) => {
    const chip = document.createElement("span");
    chip.textContent = alias.ean ? `${alias.name} · ${alias.ean}` : alias.name;
    wrapper.append(chip);
  });

  if (aliases.length > 3) {
    const more = document.createElement("span");
    more.textContent = `+${aliases.length - 3}`;
    wrapper.append(more);
  }

  return wrapper;
}

function getCatalogItems() {
  const map = new Map();

  catalogItems.forEach((item) => {
    const key = normalize(item.name);

    if (!map.has(key)) {
      const aliases = normalizeEanAliases(item.eanAliases);
      const eans = normalizeEanList([
        ...(Array.isArray(item.eans) ? item.eans : [item.eans]),
        item.ean,
        ...aliases.map((alias) => alias.ean)
      ]);
      map.set(key, {
        name: item.name,
        category: item.category || "Ostatní",
        unit: item.unit || "ks",
        ean: eans[0] || "",
        eans,
        eanAliases: aliases
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

function recordHistory(text, type = "info", list = getActiveList(), details = {}) {
  history.unshift({
    id: createId(),
    text,
    type,
    listName: list ? getDisplayListName(list) : "",
    createdAt: new Date().toISOString(),
    occurredAt: details.occurredAt || getLocalDateTimeValue(new Date()),
    product: details.product || "",
    amount: Number.isFinite(Number(details.amount)) ? roundAmount(Number(details.amount)) : null,
    unit: details.unit || "",
    price: Number.isFinite(Number(details.price)) ? roundAmount(Number(details.price)) : null,
    action: details.action || ""
  });
  history = history.slice(0, HISTORY_LIMIT);
}

function renderHistory() {
  historyList.replaceChildren();
  const filteredHistory = getFilteredHistory();
  const visibleHistory = filteredHistory.filter(isInventoryHistoryEntry);
  renderPriceStats(filteredHistory);
  renderStatsDashboard(filteredHistory);
  renderSettingsLog(history);

  if (!visibleHistory.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Pro vybrané období nejsou žádné změny lednice.";
    historyList.append(empty);
    return;
  }

  renderHistoryRows(historyList, visibleHistory.slice(0, 80));
}

function renderSettingsLog(entries = history) {
  if (!settingsLogList) {
    return;
  }

  settingsLogList.replaceChildren();

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Log je prázdný.";
    settingsLogList.append(empty);
    return;
  }

  renderHistoryRows(settingsLogList, entries.slice(0, 120));
}

function renderHistoryRows(container, entries) {
  entries.forEach((entry) => {
    const row = document.createElement("article");
    const icon = document.createElement("span");
    const text = document.createElement("strong");
    const time = document.createElement("time");
    const meta = document.createElement("span");
    const date = new Date(entry.createdAt);
    const eventDate = getHistoryEventDate(entry);
    const visual = getHistoryVisual(entry);

    row.className = `history-entry ${visual.className}`;
    icon.className = "history-entry-icon";
    icon.setAttribute("aria-hidden", "true");
    text.textContent = entry.text;
    time.dateTime = entry.createdAt;
    time.textContent = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleString("cs-CZ", {
        dateStyle: "short",
        timeStyle: "short"
      });
    meta.className = "muted-text";
    meta.textContent = eventDate ? `Stalo se: ${formatDisplayDate(entry.occurredAt || eventDate)}` : "";

    row.append(icon, text, time);

    if (meta.textContent) {
      row.append(meta);
    }

    container.append(row);
  });
}

function isInventoryHistoryEntry(entry) {
  return entry.type === "item";
}

function getHistoryVisual(entry) {
  if (["purchase", "gift", "adjustPlus", "add"].includes(entry.action)) {
    return { icon: "+", className: "is-positive" };
  }

  if (["eaten", "discarded", "adjustMinus", "subtract"].includes(entry.action)) {
    return { icon: "-", className: "is-negative" };
  }

  return { icon: "=", className: "is-neutral" };
}

function getSelectedStatsMetrics() {
  return [...statsMetrics.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
}

function renderStatsDashboard(entries) {
  if (!statsGrid) {
    return;
  }

  const metrics = getSelectedStatsMetrics();
  const stats = buildStatsModel(entries);
  statsGrid.replaceChildren();

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Pro vybrané období nejsou data pro grafy.";
    statsGrid.append(empty);
    return;
  }

  const cards = [];

  if (metrics.includes("count")) {
    cards.push(createStatsCard("Počty změn", createBarChart("Změny podle dne", stats.countByDay, "ks"), createStatsTable(["Den", "Počet"], stats.countByDay)));
  }

  if (metrics.includes("spend")) {
    cards.push(createStatsCard("Celková útrata", createBarChart("Útrata podle dne", stats.spendByDay, "Kč"), createStatsTable(["Den", "Útrata"], stats.spendByDay, formatPrice)));
  }

  if (metrics.includes("avgPrice")) {
    cards.push(createStatsCard("Průměrná cena za produkt", createBarChart("Průměrná cena", stats.avgPriceByProduct, "Kč"), createStatsTable(["Produkt", "Průměr"], stats.avgPriceByProduct, formatPrice)));
  }

  if (metrics.includes("consumed")) {
    cards.push(createStatsCard("Projezeno / odečteno", createBarChart("Odečtené množství", stats.consumedByProduct, "jedn."), createStatsTable(["Produkt", "Množství"], stats.consumedByProduct)));
  }

  if (metrics.includes("topProducts")) {
    cards.push(createStatsCard("Top produkty podle změn", createBarChart("Top produkty", stats.topProducts, "ks"), createStatsTable(["Produkt", "Počet"], stats.topProducts)));
  }

  cards.forEach((card) => statsGrid.append(card));
}

function buildStatsModel(entries) {
  const countByDay = new Map();
  const spendByDay = new Map();
  const productCounts = new Map();
  const productPriceTotals = new Map();
  const productPriceCounts = new Map();
  const consumedByProduct = new Map();

  entries.forEach((entry) => {
    const day = getHistoryEventDate(entry);
    const product = entry.product || getProductNameFromHistoryText(entry.text) || "Ostatní";
    const price = Number(entry.price);
    const amount = Number(entry.amount);

    incrementMap(countByDay, day, 1);
    incrementMap(productCounts, product, 1);

    if (Number.isFinite(price) && price > 0) {
      incrementMap(spendByDay, day, price);
      incrementMap(productPriceTotals, product, price);
      incrementMap(productPriceCounts, product, 1);
    }

    if (["eaten", "discarded", "adjustMinus", "subtract"].includes(entry.action) && Number.isFinite(amount)) {
      incrementMap(consumedByProduct, `${product} ${entry.unit || ""}`.trim(), amount);
    }
  });

  return {
    countByDay: mapToChartRows(countByDay, 12),
    spendByDay: mapToChartRows(spendByDay, 12),
    avgPriceByProduct: [...productPriceTotals.entries()]
      .map(([product, total]) => [product, roundAmount(total / (productPriceCounts.get(product) || 1))])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8),
    consumedByProduct: mapToChartRows(consumedByProduct, 8),
    topProducts: mapToChartRows(productCounts, 8)
  };
}

function incrementMap(map, key, amount) {
  map.set(key, roundAmount((map.get(key) || 0) + amount));
}

function mapToChartRows(map, limit) {
  return [...map.entries()]
    .filter(([, value]) => Number(value) > 0)
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "cs"))
    .slice(0, limit);
}

function getProductNameFromHistoryText(text) {
  const match = String(text || "").match(/:\s*([^,+.-]+?)(?:\s+[+-]?\d|,|\.|$)/u);
  return match ? tidyName(match[1]) : "";
}

function createStatsCard(title, chartDataUrl, table) {
  const card = document.createElement("article");
  const heading = document.createElement("h3");
  const image = document.createElement("img");

  card.className = "stats-card";
  heading.textContent = title;
  image.src = chartDataUrl;
  image.alt = title;
  card.append(heading, image, table);
  return card;
}

function createStatsTable(headers, rows, formatter = formatAmount) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  thead.innerHTML = `<tr><th>${headers[0]}</th><th>${headers[1]}</th></tr>`;
  rows.forEach(([label, value]) => {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    const valueCell = document.createElement("td");
    labelCell.textContent = label;
    valueCell.textContent = formatter(value);
    row.append(labelCell, valueCell);
    tbody.append(row);
  });
  table.append(thead, tbody);
  return table;
}

function createBarChart(title, rows, unit) {
  const canvas = statsChartCanvas;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 48;
  const max = Math.max(1, ...rows.map(([, value]) => Number(value)));

  context.clearRect(0, 0, width, height);
  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#f8fbfb");
  background.addColorStop(1, "#eef6f4");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  context.fillStyle = "#17202a";
  context.font = "700 24px Arial";
  context.fillText(title, padding, 34);
  context.strokeStyle = "#d8e0e7";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(padding, height - padding);
  context.lineTo(width - 18, height - padding);
  context.stroke();

  if (!rows.length) {
    context.fillStyle = "#657184";
    context.font = "16px Arial";
    context.fillText("Bez dat", padding, height / 2);
    return canvas.toDataURL("image/png");
  }

  const barGap = 10;
  const barWidth = Math.max(18, (width - padding - 28 - (rows.length - 1) * barGap) / rows.length);

  rows.forEach(([label, value], index) => {
    const x = padding + index * (barWidth + barGap);
    const barHeight = Math.round((height - 110) * (Number(value) / max));
    const y = height - padding - barHeight;
    const gradient = context.createLinearGradient(0, y, 0, height - padding);
    gradient.addColorStop(0, "#20a394");
    gradient.addColorStop(1, "#0f766e");
    context.fillStyle = "rgba(15, 118, 110, 0.12)";
    context.fillRect(x + 4, y + 5, barWidth, barHeight);
    context.fillStyle = gradient;
    roundRect(context, x, y, barWidth, barHeight, 8);
    context.fill();
    context.fillStyle = "#17202a";
    context.font = "700 13px Arial";
    context.fillText(`${formatAmount(value)} ${unit}`, x, Math.max(56, y - 8));
    context.save();
    context.translate(x + 4, height - 18);
    context.rotate(-0.35);
    context.font = "12px Arial";
    context.fillStyle = "#657184";
    context.fillText(String(label).slice(0, 18), 0, 0);
    context.restore();
  });

  return canvas.toDataURL("image/png");
}

function roundRect(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height);
  context.lineTo(x, y + height);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function exportStatsPdf() {
  const entries = getFilteredHistory();
  const metrics = getSelectedStatsMetrics();
  const stats = buildStatsModel(entries);
  const sections = [];

  if (metrics.includes("count")) {
    sections.push(getExportSection("Počty změn", createBarChart("Změny podle dne", stats.countByDay, "ks"), ["Den", "Počet"], stats.countByDay));
  }

  if (metrics.includes("spend")) {
    sections.push(getExportSection("Celková útrata", createBarChart("Útrata podle dne", stats.spendByDay, "Kč"), ["Den", "Útrata"], stats.spendByDay, formatPrice));
  }

  if (metrics.includes("avgPrice")) {
    sections.push(getExportSection("Průměrná cena za produkt", createBarChart("Průměrná cena", stats.avgPriceByProduct, "Kč"), ["Produkt", "Průměr"], stats.avgPriceByProduct, formatPrice));
  }

  if (metrics.includes("consumed")) {
    sections.push(getExportSection("Projezeno / odečteno", createBarChart("Odečtené množství", stats.consumedByProduct, "jedn."), ["Produkt", "Množství"], stats.consumedByProduct));
  }

  if (metrics.includes("topProducts")) {
    sections.push(getExportSection("Top produkty podle změn", createBarChart("Top produkty", stats.topProducts, "ks"), ["Produkt", "Počet"], stats.topProducts));
  }

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    showMessage("Prohlížeč zablokoval okno pro export PDF.", true);
    return;
  }

  printWindow.document.write(getStatsExportHtml(sections));
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function getExportSection(title, chart, headers, rows, formatter = formatAmount) {
  return { title, chart, headers, rows, formatter };
}

function getStatsExportHtml(sections) {
  const rowsHtml = sections.map((section) => `
    <section>
      <h2>${escapeHtml(section.title)}</h2>
      <table>
        <thead><tr><th>${escapeHtml(section.headers[0])}</th><th>${escapeHtml(section.headers[1])}</th></tr></thead>
        <tbody>${section.rows.map(([label, value]) => `<tr><td>${escapeHtml(label)}</td><td>${escapeHtml(section.formatter(value))}</td></tr>`).join("")}</tbody>
      </table>
      <img src="${section.chart}" alt="${escapeHtml(section.title)}">
    </section>
  `).join("");

  return `<!doctype html>
    <html lang="cs">
      <head>
        <meta charset="utf-8">
        <title>Statistiky domácích zásob</title>
        <style>
          body { font-family: Arial, sans-serif; color: #17202a; margin: 28px; }
          h1 { margin-bottom: 4px; }
          section { break-inside: avoid; margin-top: 24px; }
          table { width: 100%; border-collapse: collapse; margin: 10px 0 14px; }
          th, td { border: 1px solid #d8e0e7; padding: 8px; text-align: left; }
          th { background: #f3f6f8; }
          img { width: 100%; max-width: 900px; border: 1px solid #d8e0e7; }
        </style>
      </head>
      <body>
        <h1>Statistiky domácích zásob</h1>
        <p>Vygenerováno ${escapeHtml(new Date().toLocaleString("cs-CZ"))}</p>
        ${rowsHtml || "<p>Bez vybraných dat.</p>"}
      </body>
    </html>`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function handleHistoryFilterChange() {
  historyDateFrom.value = "";
  historyDateTo.value = "";

  renderHistory();
}

function getFilteredHistory() {
  const range = getHistoryFilterRange();

  return history.filter((entry) => {
    const eventDate = getHistoryEventDate(entry);

    if (!range.from && !range.to) {
      return true;
    }

    return (!range.from || eventDate >= range.from) && (!range.to || eventDate <= range.to);
  });
}

function getHistoryFilterRange() {
  const today = getLocalDateValue(new Date());
  const period = historyPeriodFilter.value;

  if (historyDateFrom.value || historyDateTo.value) {
    return {
      from: historyDateFrom.value || "",
      to: historyDateTo.value || ""
    };
  }

  if (period === "today") {
    return { from: today, to: today };
  }

  const days = {
    "3d": 3,
    week: 7,
    month: 31,
    year: 365
  }[period];

  if (days) {
    return { from: shiftLocalDate(today, -(days - 1)), to: today };
  }

  return {};
}

function shiftLocalDate(dateValue, days) {
  const date = new Date(`${dateValue}T12:00:00`);
  date.setDate(date.getDate() + days);
  return getLocalDateValue(date);
}

function getHistoryEventDate(entry) {
  return normalizeEventDate(entry.occurredAt || String(entry.createdAt || "").slice(0, 10)).slice(0, 10);
}

function formatDisplayDate(dateValue) {
  const normalized = normalizeEventDate(dateValue);
  const date = new Date(normalized);
  return Number.isNaN(date.getTime())
    ? dateValue
    : date.toLocaleString("cs-CZ", {
      dateStyle: "short",
      timeStyle: "medium"
    });
}

function renderPriceStats(entries) {
  if (!priceStats) {
    return;
  }

  const purchases = entries.filter((entry) => {
    return ["purchase", "shopping"].includes(entry.action || entry.type)
      && Number.isFinite(Number(entry.price))
      && Number(entry.price) > 0;
  });
  const total = purchases.reduce((sum, entry) => sum + Number(entry.price), 0);
  const average = purchases.length ? total / purchases.length : 0;

  priceStats.replaceChildren();

  const totalItem = document.createElement("div");
  const countItem = document.createElement("div");
  const averageItem = document.createElement("div");

  totalItem.innerHTML = `<span>Útrata</span><strong>${formatPrice(total)}</strong>`;
  countItem.innerHTML = `<span>Nákupních zápisů</span><strong>${purchases.length}</strong>`;
  averageItem.innerHTML = `<span>Průměr</span><strong>${formatPrice(average)}</strong>`;
  priceStats.append(totalItem, countItem, averageItem);
}

function resetForm() {
  editingId = null;
  form.reset();
  setDefaultEventDate();
  unlockEntryProductMeta();
  setActionState("purchase");
  setActionButtonsDisabled(false);
  updateSubmitButtonText();
  cancelEditButton.hidden = true;
  productInput.focus();
}

function setDefaultEventDate() {
  if (eventDateInput) {
    eventDateInput.value = getLocalDateTimeValue(new Date());
  }
}

function getLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getLocalDateTimeValue(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${getLocalDateValue(date)}T${hours}:${minutes}:${seconds}`;
}

function syncEntryProductLock() {
  const item = findCatalogItemByName(productInput.value);

  if (!item) {
    unlockEntryProductMeta();
    return;
  }

  categoryInput.value = item.category || "Ostatní";
  unitSelect.value = item.unit || "ks";
  categoryInput.readOnly = true;
  unitSelect.disabled = true;
  categoryInput.closest(".field")?.classList.add("is-locked");
  unitSelect.closest(".field")?.classList.add("is-locked");
}

function unlockEntryProductMeta() {
  categoryInput.readOnly = false;
  unitSelect.disabled = false;
  categoryInput.closest(".field")?.classList.remove("is-locked");
  unitSelect.closest(".field")?.classList.remove("is-locked");
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

  updatePriceInputLock();
  updateSubmitButtonText();
}

function updatePriceInputLock() {
  if (!priceInput) {
    return;
  }

  const lockedActions = new Set(["eaten", "discarded", "adjustPlus", "adjustMinus", "subtract", "set"]);
  const locked = lockedActions.has(actionSelect.value);

  priceInput.disabled = locked;
  priceInput.closest(".field")?.classList.toggle("is-locked", locked);

  if (locked) {
    priceInput.value = "";
  }
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
  const base = direction > 0 ? Math.floor(currentValue) : Math.ceil(currentValue);
  const next = Number.isFinite(currentValue) && currentValue >= min
    ? Math.max(min, base + direction)
    : 1;

  amountInput.value = formatFormNumber(next);
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

  const items = getCatalogItems();
  const exactItem = items.find((item) => normalize(item.name) === normalizedName);

  if (exactItem) {
    return exactItem;
  }

  for (const item of items) {
    const alias = normalizeEanAliases(item.eanAliases).find((currentAlias) => normalize(currentAlias.name) === normalizedName);

    if (alias) {
      return { ...item, _nameAlias: alias };
    }
  }

  return null;
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

  const targetName = normalize(item.name);

  catalogItems.forEach((currentItem) => {
    if (normalize(currentItem.name) === targetName) {
      return;
    }

    const eans = normalizeEanList(currentItem.eans || currentItem.ean).filter((ean) => ean !== normalizedEan);
    const aliases = normalizeEanAliases(currentItem.eanAliases).filter((alias) => alias.ean !== normalizedEan);
    currentItem.ean = eans[0] || "";
    currentItem.eans = eans;
    currentItem.eanAliases = aliases;
  });

  const alias = normalizeEanAlias({
    ean: normalizedEan,
    name: product?.name || item.name,
    amount: product?.amount || 1,
    unit: product?.unit || item.unit || "ks",
    category: product?.category || item.category || "Ostatní"
  });

  const existing = catalogItems.find((currentItem) => normalize(currentItem.name) === targetName);

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
  const aliasScore = normalizeEanAliases(item.eanAliases).reduce((bestScore, alias) => {
    const score = getCatalogNameMatchScore(product, {
      ...item,
      name: alias.name,
      category: alias.category || item.category,
      unit: alias.unit || item.unit
    }) + 12;
    return Math.max(bestScore, score);
  }, 0);

  return Math.max(getCatalogNameMatchScore(product, item), aliasScore);
}

function getCatalogNameMatchScore(product, item) {
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
  const name = formatProductName(value?.name || (ean ? `EAN ${ean}` : ""));

  if (!ean && !name) {
    return null;
  }

  return {
    ean,
    name,
    amount: roundAmount(Number(value.amount) || 1),
    unit: normalizeImportUnit(value.unit || "ks"),
    category: tidyName(value.category || "Ostatní")
  };
}

function mergeEanAliases(existingAliases, nextAliases) {
  const aliases = [];

  normalizeEanAliases(existingAliases).forEach((alias) => {
    upsertEanAliasInList(aliases, alias);
  });

  normalizeEanAliases(nextAliases).forEach((alias) => {
    upsertEanAliasInList(aliases, alias);
  });

  return aliases;
}

function upsertEanAliasInList(aliases, alias) {
  const existingIndex = aliases.findIndex((currentAlias) => isSameEanAlias(currentAlias, alias));

  if (existingIndex >= 0) {
    aliases[existingIndex] = alias;
    return;
  }

  aliases.push(alias);
}

function isSameEanAlias(first, second) {
  if (first.ean && second.ean && first.ean === second.ean) {
    return true;
  }

  return normalize(first.name) === normalize(second.name);
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

function formatAmountWithUnit(amount, unit) {
  return `${formatAmount(amount)} ${unit || "ks"}`;
}

function formatPrice(value) {
  return `${Number(value).toLocaleString("cs-CZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })} Kč`;
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
