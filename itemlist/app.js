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
const calorieDiaryButton = document.querySelector("#calorie-diary-button");
const xmlImportButton = document.querySelector("#xml-import-button");
const catalogImportButton = document.querySelector("#catalog-import-button");
const xmlFileButton = document.querySelector("#xml-file-button");
const xmlFileInput = document.querySelector("#xml-file-input");
const xmlExportButton = document.querySelector("#xml-export-button");
const importFilePickButton = document.querySelector("#import-file-pick-button");
const eanTool = document.querySelector("#ean-tool");
const eanInput = document.querySelector("#ean-input");
const eanLookupButton = document.querySelector("#ean-lookup-button");
const eanFileInput = document.querySelector("#ean-file-input");
const eanResult = document.querySelector("#ean-result");
const eanMessage = document.querySelector("#ean-message");
const receiptTool = document.querySelector("#receipt-tool");
const receiptFileInput = document.querySelector("#receipt-file-input");
const receiptMessage = document.querySelector("#receipt-message");
const calorieDiaryTool = document.querySelector("#calorie-diary-tool");
const calorieDiaryDate = document.querySelector("#calorie-diary-date");
const calorieDiaryLoadButton = document.querySelector("#calorie-diary-load-button");
const calorieDiaryApplyButton = document.querySelector("#calorie-diary-apply-button");
const calorieDiaryRows = document.querySelector("#calorie-diary-rows");
const calorieDiaryMessage = document.querySelector("#calorie-diary-message");
const calorieDiaryApplyMessage = document.querySelector("#calorie-diary-apply-message");
const fridgeExportTool = document.querySelector("#fridge-export-tool");
const fridgeExportTitle = document.querySelector("#fridge-export-title");
const fridgeExportText = document.querySelector("#fridge-export-text");
const fridgeExportCopyButton = document.querySelector("#fridge-export-copy-button");
const fridgeExportDownloadButton = document.querySelector("#fridge-export-download-button");
const fridgeExportMessage = document.querySelector("#fridge-export-message");
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
const productFieldLabel = document.querySelector("#product-field-label");
const entryStockInfo = document.querySelector("#entry-stock-info");
const pantryScanButton = document.querySelector("#pantry-scan-button");
const pantryExportTextButton = document.querySelector("#pantry-export-text-button");
const pantrySearchInput = document.querySelector("#pantry-search-input");
const pantryCategoryFilters = document.querySelector("#pantry-category-filters");
const tempToast = document.querySelector("#temp-toast");
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
const settingsPeriodFilter = document.querySelector("#settings-period-filter");
const settingsDateFrom = document.querySelector("#settings-date-from");
const settingsDateTo = document.querySelector("#settings-date-to");
const settingsLogPeriodFilter = document.querySelector("#settings-log-period-filter");
const settingsLogDateFrom = document.querySelector("#settings-log-date-from");
const settingsLogDateTo = document.querySelector("#settings-log-date-to");
const calorieAccountEmail = document.querySelector("#calorie-account-email");
const calorieAccountPassword = document.querySelector("#calorie-account-password");
const calorieSessionCookie = document.querySelector("#calorie-session-cookie");
const calorieSaveConnectionButton = document.querySelector("#calorie-save-connection-button");
const caloriePasswordLoginButton = document.querySelector("#calorie-password-login-button");
const calorieTestConnectionButton = document.querySelector("#calorie-test-connection-button");
const calorieConnectionMessage = document.querySelector("#calorie-connection-message");
const calorieImportText = document.querySelector("#calorie-import-text");
const calorieParseButton = document.querySelector("#calorie-parse-button");
const calorieApplyButton = document.querySelector("#calorie-apply-button");
const calorieImportRows = document.querySelector("#calorie-import-rows");
const calorieImportMessage = document.querySelector("#calorie-import-message");
const calorieApplyMessage = document.querySelector("#calorie-apply-message");
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
const CALORIE_MEAL_ORDER = [
  "Snídaně",
  "Dopolední svačina",
  "Oběd",
  "Odpolední svačina",
  "Večeře",
  "Druhá večeře",
  "Ostatní"
];
const CALORIE_MEAL_TIMES = {
  "Snídaně": "08:00:00",
  "Dopolední svačina": "10:30:00",
  "Oběd": "12:30:00",
  "Odpolední svačina": "15:30:00",
  "Večeře": "18:30:00",
  "Druhá večeře": "21:00:00",
  "Ostatní": "12:00:00"
};
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
const ACTION_COMBOBOX_OPTIONS = [
  { value: "Snězeno", optionValue: "eaten", meta: "Odečíst ze zásob" },
  { value: "Nákup", optionValue: "purchase", meta: "Přidat do zásob" },
  { value: "Korekce +", optionValue: "adjustPlus", meta: "Ruční navýšení" },
  { value: "Korekce -", optionValue: "adjustMinus", meta: "Ruční snížení" },
  { value: "Dar", optionValue: "gift", meta: "Přidat do zásob" },
  { value: "Vyhozeno", optionValue: "discarded", meta: "Odečíst ze zásob" },
  { value: "Nastavit", optionValue: "set", meta: "Nastavit přesný stav" }
];
const NEGATIVE_ENTRY_ACTIONS = new Set(["eaten", "discarded", "adjustMinus", "subtract"]);
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
  /^(celkem|suma|součet|soucet|subtotal|total|hotově|hotovost|kartou|visa|mastercard|cash|vráceno|zaplaceno|účtenka|ucet|datum|čas|dic|dič|ičo|ico|provozovna|pokladna|doklad|terminál|terminal|děkujeme|dekujeme|www|tel\.?|eet|fik|bkp|prodejna|adresa|otevírací|oteviraci)\b/iu,
  /\b(dph|vat|sazba|základ|zaklad|sleva|platební|platebni|transakce|autorizační|autorizacni|faktura|fakturujeme|variabilní|variabilni|objednávka|objednavka)\b/iu,
  /^[\d\s.,:/\\-]+$/u
];
const RECEIPT_HEADER_PATTERNS = [
  /\b(kaufland|lidl|tesco|albert|billa|penny|globus|makro|coop|norma|dm drogerie|rossmann)\b/iu,
  /\b(s\.?\s*r\.?\s*o\.?|a\.?\s*s\.?|spol\.|česká republika|ceska republika|czech republic)\b/iu,
  /\b(ul\.|ulice|nám\.|nam\.|náměstí|namesti|třída|trida|č\.?\s*p\.?|čp|cp|psč|psc)\b/iu,
  /\b(praha|brno|ostrava|plzeň|plzen|liberec|olomouc|hradec králové|hradec kralove|pardubice|zlín|zlin|jihlava|české budějovice|ceske budejovice)\b/iu,
  /\b\d{3}\s?\d{2}\b/u,
  /\b(?:\+420|00420)?\s?\d{3}\s?\d{3}\s?\d{3}\b/u,
  /\b(www\.|\.cz|\.com|@)\b/iu
];
const RECEIPT_UNIT_PATTERN = "(?:kg|g|l|ml|ks|kus|kusu|kusy|bal|baleni|balení)";
const RECEIPT_MAX_OCR_ATTEMPTS = 7;
const RECEIPT_AI_TIMEOUT_MS = 45000;
const RECEIPT_AI_IMAGE_MAX_SIDE = 1800;
const RECEIPT_OCR_ATTEMPTS = [
  { key: "original", label: "originál", language: "ces+eng", pageSegMode: "6" },
  { key: "gray", label: "šedá verze", language: "ces+eng", pageSegMode: "6" },
  { key: "contrast", label: "vyšší kontrast", language: "ces+eng", pageSegMode: "6" },
  { key: "threshold-soft", label: "jemný práh", language: "ces+eng", pageSegMode: "6" },
  { key: "threshold-hard", label: "ostrý práh", language: "ces+eng", pageSegMode: "4" },
  { key: "trimmed", label: "oříznuté okraje", language: "ces+eng", pageSegMode: "6" },
  { key: "inverted", label: "obrácené barvy", language: "eng", pageSegMode: "6" }
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
  subtractStockFromShopping: false,
  calorieAccountEmail: "",
  calorieSessionCookie: "",
  caloriePairings: {}
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
let calorieImportRowsState = [];
let activeComboboxInput = null;
let activeComboboxIndex = -1;
let currentTextExport = {
  fileName: "export",
  text: ""
};
let currentImportMode = "items";
let tempToastTimer = null;

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
  fridgeExportCopyButton?.addEventListener("click", copyFridgeExportToClipboard);
  fridgeExportDownloadButton?.addEventListener("click", downloadCurrentTextExport);
  exportCatalogButton.addEventListener("click", exportCatalog);
  anonymousExportButton.addEventListener("click", exportAnonymousData);
  receiptImportButton.addEventListener("click", openReceiptImport);
  eanImportButton.addEventListener("click", openEanImport);
  calorieDiaryButton?.addEventListener("click", openCalorieDiaryImport);
  xmlImportButton.addEventListener("click", openXmlImport);
  catalogImportButton?.addEventListener("click", openCatalogImport);
  xmlFileButton?.addEventListener("click", () => xmlFileInput.click());
  importFilePickButton?.addEventListener("click", () => xmlFileInput.click());
  xmlFileInput.addEventListener("change", importXmlFromFile);
  xmlExportButton.addEventListener("click", exportXml);
  eanLookupButton.addEventListener("click", lookupEanProduct);
  eanFileInput.addEventListener("change", scanEanFromFile);
  eanResult.addEventListener("click", handleEanResultClick);
  receiptFileInput.addEventListener("change", importReceiptFromImage);
  calorieDiaryLoadButton?.addEventListener("click", loadCalorieDiaryEntries);
  calorieDiaryApplyButton?.addEventListener("click", applyCalorieImportDeduction);
  calorieDiaryRows?.addEventListener("input", handleCalorieImportRowChange);
  calorieDiaryRows?.addEventListener("change", handleCalorieImportRowChange);
  toggleAdminPanelButton.addEventListener("click", toggleAdminPanel);
  adminForm.addEventListener("submit", saveAllowedUser);
  allowedUsersList.addEventListener("click", handleAllowedUsersClick);
  pantryScanButton.addEventListener("click", openEanImport);
  pantryExportTextButton?.addEventListener("click", copyPantryTextExportShortcut);
  pantrySearchInput?.addEventListener("input", renderItems);
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
  settingsPeriodFilter?.addEventListener("change", handleSettingsHistoryFilterChange);
  settingsDateFrom?.addEventListener("input", () => {
    settingsPeriodFilter.value = "";
    renderHistory();
  });
  settingsDateTo?.addEventListener("input", () => {
    settingsPeriodFilter.value = "";
    renderHistory();
  });
  settingsLogPeriodFilter?.addEventListener("change", handleSettingsLogFilterChange);
  settingsLogDateFrom?.addEventListener("input", () => {
    settingsLogPeriodFilter.value = "";
    renderHistory();
  });
  settingsLogDateTo?.addEventListener("input", () => {
    settingsLogPeriodFilter.value = "";
    renderHistory();
  });
  calorieSaveConnectionButton?.addEventListener("click", saveCalorieConnectionSettings);
  caloriePasswordLoginButton?.addEventListener("click", connectCalorieAccountWithPassword);
  calorieTestConnectionButton?.addEventListener("click", testCalorieConnection);
  calorieParseButton?.addEventListener("click", parseCalorieImportFromText);
  calorieApplyButton?.addEventListener("click", applyCalorieImportDeduction);
  calorieImportRows?.addEventListener("input", handleCalorieImportRowChange);
  calorieImportRows?.addEventListener("change", handleCalorieImportRowChange);
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

    if (!isEntryActionAvailable(action)) {
      showMessage("Tuhle akci můžeš použít až u položky, která je v lednici.", true);
      actionComboInput.focus();
      return;
    }

    if (!Number.isFinite(amount) || amount < 0 || (action !== "set" && amount <= 0)) {
      showMessage(action === "set" ? "Počet musí být číslo nula nebo větší." : "Počet musí být číslo větší než nula.", true);
      amountInput.focus();
      return;
    }

    const combo = findComboByName(name);

    if (combo && !editingId) {
      openComboChangeModal(combo.id);
      if (comboChangeAction) {
        comboChangeAction.value = action === "set" ? "purchase" : action;
      }
      comboChangeItems?.querySelectorAll("[data-combo-change-amount]").forEach((input, index) => {
        const item = combo.items[index];
        input.value = formatFormNumber(roundAmount((item?.amount || 1) * amount));
      });
      showMessage("Zkontroluj položky kombinace a potvrď změnu.");
      return;
    }

    unitSelect.value = unit;

    const maxAmount = getMaxAmountForNegativeAction(name, unit, action);

    if (Number.isFinite(maxAmount) && amount > maxAmount) {
      amountInput.value = formatFormNumber(maxAmount);
      showMessage(`V lednici je jen ${formatAmountWithUnit(maxAmount, unit)}. Víc odečíst nejde.`, true);
      amountInput.focus();
      amountInput.select();
      return;
    }

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

    clampAmountToAvailableStock();
  });

  productInput.addEventListener("input", syncUnitFromProduct);
  productInput.addEventListener("change", syncUnitFromProduct);
  productInput.addEventListener("input", syncCategoryFromProduct);
  productInput.addEventListener("change", syncCategoryFromProduct);
  productInput.addEventListener("input", syncEntryProductLock);
  productInput.addEventListener("change", syncEntryProductLock);
  productInput.addEventListener("input", syncEntryProductInfo);
  productInput.addEventListener("change", syncEntryProductInfo);
  productInput.addEventListener("input", clampAmountToAvailableStock);
  productInput.addEventListener("change", clampAmountToAvailableStock);
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
    clampAmountToAvailableStock();
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

  if (input.dataset.selectCombobox === "action-select") {
    return getActionComboboxOptions(query);
  }

  const seen = new Set();

  return [...source.options]
    .map((option) => ({
      value: option.value || option.textContent || "",
      meta: input.dataset.comboboxSource === "category-options" ? "" : option.label || option.textContent || "",
      optionValue: option.dataset.value || option.value || option.textContent || ""
    }))
    .filter((item) => {
      const key = input.dataset.selectCombobox
        ? `${normalize(item.value)}|${normalize(item.optionValue)}`
        : normalize(item.value);

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

function getActionComboboxOptions(query = "") {
  return ACTION_COMBOBOX_OPTIONS
    .filter((item) => isEntryActionAvailable(item.optionValue))
    .filter((item) => {
      if (!query) {
        return true;
      }

      return normalize(item.value).includes(query) || normalize(item.meta).includes(query);
    })
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

  if (event.key === "Enter" && options.length) {
    event.preventDefault();
    const selectedIndex = activeComboboxIndex >= 0 ? activeComboboxIndex : 0;
    selectComboboxValue(input, options[selectedIndex].dataset.value, options[selectedIndex].dataset.optionValue);
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
    focusNextEntryFieldAfterProductSelect();
  } else if (input === actionComboInput) {
    amountInput.focus();
    amountInput.select();
  } else if (input === shoppingProduct) {
    shoppingAmount.focus();
    shoppingAmount.select();
  } else {
    input.focus();
  }
}

function focusNextEntryFieldAfterProductSelect() {
  const hasKnownProduct = Boolean(findCatalogItemByName(productInput.value) || findItemByName(productInput.value) || findComboByName(productInput.value));
  const nextField = hasKnownProduct ? actionComboInput : categoryInput;

  nextField.focus();
  nextField.select?.();
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

  openTextExport({
    title: "Export všech dat",
    fileName: "domaci-zasoby-vse",
    text: buildStateXml(exportedState)
  });
  recordHistory("Export dat.", "export");
  renderHistory();
  queueSaveState();
  showMessage("Export připraven.");
}

function exportFridge() {
  openTextExport({
    title: "Export lednice",
    fileName: "lednice",
    text: buildItemsXml(getActiveItems(), getDisplayListName(getActiveList()))
  });

  recordHistory("Export lednice.", "export");
  renderHistory();
  queueSaveState();
}

function buildFridgeTextExport() {
  const list = getActiveList();
  const items = [...getActiveItems()].sort((first, second) => {
    const categoryCompare = normalize(first.category).localeCompare(normalize(second.category), "cs");

    if (categoryCompare !== 0) {
      return categoryCompare;
    }

    return normalize(first.name).localeCompare(normalize(second.name), "cs");
  });
  const lines = [
    `Lednice: ${getDisplayListName(list)}`,
    `Export: ${new Date().toLocaleString("cs-CZ", { dateStyle: "short", timeStyle: "short" })}`,
    ""
  ];

  if (!items.length) {
    lines.push("Lednice je prázdná.");
    return lines.join("\n");
  }

  items.forEach((item, index) => {
    const category = tidyName(item.category || "Ostatní");
    const unit = item.unit || "ks";
    lines.push(`${index + 1}. ${item.name} - ${formatAmount(item.amount)} ${unit} (${category})`);
  });

  return lines.join("\n");
}

function openTextExport({ title, fileName, text }) {
  switchView("tools");
  receiptTool.hidden = true;
  eanTool.hidden = true;
  if (calorieDiaryTool) {
    calorieDiaryTool.hidden = true;
  }
  if (fridgeExportTool) {
    fridgeExportTool.hidden = false;
  }
  currentTextExport = {
    fileName: fileName || "export",
    text: text || ""
  };

  if (fridgeExportTitle) {
    fridgeExportTitle.textContent = title || "Export";
  }

  if (fridgeExportText) {
    fridgeExportText.value = currentTextExport.text;
    fridgeExportText.focus();
    fridgeExportText.select();
  }

  setFridgeExportMessage("Export je připravený.");
}

function downloadCurrentTextExport() {
  const text = fridgeExportText?.value || currentTextExport.text || "";

  if (!text.trim()) {
    setFridgeExportMessage("Nejdřív připrav export.", true);
    return;
  }

  downloadText(currentTextExport.fileName || "export", "xml", text, "application/xml");
  setFridgeExportMessage("XML soubor připravený ke stažení.");
}

async function copyFridgeExportToClipboard() {
  const text = fridgeExportText?.value || "";

  if (!text.trim()) {
    exportFridge();
    return;
  }

  const copied = await copyTextToClipboard(text);
  setFridgeExportMessage(
    copied
      ? "Export zkopírovaný do schránky."
      : "Kopírování se nepovedlo. Označ text a zkopíruj ho ručně.",
    !copied
  );
}

async function copyPantryTextExportShortcut() {
  const text = buildFridgeTextExport();
  const listName = getDisplayListName(getActiveList());
  const copiedLabel = listName ? `Lednice - ${listName}` : "Lednice";

  if (fridgeExportText) {
    fridgeExportText.value = text;
  }

  const copied = await copyTextToClipboard(text);
  if (copied) {
    showTempToast(`${copiedLabel} zkopírovaná.`);
  }
  showMessage(copied
    ? "Textový export lednice zkopírovaný do schránky."
    : "Kopírování se nepovedlo. Otevři export lednice a zkopíruj text ručně.", !copied);
}

function showTempToast(text) {
  if (!tempToast) {
    return;
  }

  clearTimeout(tempToastTimer);
  tempToast.textContent = text;
  tempToast.hidden = false;
  tempToast.classList.add("is-visible");
  tempToastTimer = window.setTimeout(() => {
    tempToast.classList.remove("is-visible");
    tempToast.hidden = true;
  }, 2000);
}

async function copyTextToClipboard(text) {
  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error("Clipboard API není dostupné.");
    }

    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.append(textarea);
    const copied = copyTextFromTextarea(textarea);
    textarea.remove();
    return copied;
  }
}

function copyTextFromTextarea(textarea) {
  if (!textarea) {
    return false;
  }

  textarea.focus();
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch (error) {
    return false;
  }
}

function setFridgeExportMessage(text, isError = false) {
  if (!fridgeExportMessage) {
    showMessage(text, isError);
    return;
  }

  fridgeExportMessage.textContent = text;
  fridgeExportMessage.classList.toggle("is-error", isError);
}

function exportXml() {
  const xml = buildItemsXml(getActiveItems(), getDisplayListName(getActiveList()));
  openTextExport({
    title: "Export XML lednice",
    fileName: "lednice",
    text: xml
  });
  recordHistory("Export XML lednice.", "export");
  renderHistory();
  queueSaveState();
  showMessage("XML export připraven.");
}

function exportCatalog() {
  openTextExport({
    title: "Export číselníku",
    fileName: "ciselnik-potravin",
    text: buildCatalogXml(getCatalogItems())
  });
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

  openTextExport({
    title: "Anonymizovaný export",
    fileName: "domaci-zasoby-anonymizovano",
    text: buildStateXml(anonymized)
  });
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
  if (calorieDiaryTool) {
    calorieDiaryTool.hidden = true;
  }
  if (fridgeExportTool) {
    fridgeExportTool.hidden = true;
  }
  receiptMessage.textContent = "Vyber fotku účtenky. Rozpoznání zkusí několik verzí fotky a výsledek ještě můžeš upravit před importem.";
  receiptFileInput.focus();
}

function openEanImport() {
  switchView("tools");
  eanTool.hidden = false;
  receiptTool.hidden = true;
  if (calorieDiaryTool) {
    calorieDiaryTool.hidden = true;
  }
  if (fridgeExportTool) {
    fridgeExportTool.hidden = true;
  }
  clearEanResult();
  eanMessage.textContent = "Naskenuj fotku čárového kódu nebo zadej EAN ručně.";
  eanInput.focus();
}

function openCalorieDiaryImport() {
  switchView("tools");
  eanTool.hidden = true;
  receiptTool.hidden = true;

  if (!calorieDiaryTool) {
    return;
  }

  calorieDiaryTool.hidden = false;
  if (fridgeExportTool) {
    fridgeExportTool.hidden = true;
  }

  if (calorieDiaryDate && !calorieDiaryDate.value) {
    calorieDiaryDate.value = getLocalDateValue(new Date());
  }

  setCalorieImportMessage(hasCalorieDiaryIntegration()
    ? "Vyber den a načti položky z Kalorických tabulek. Před odečtem je můžeš upravit nebo vynechat."
    : "Backend pro Kalorické tabulky zatím není nastavený. Ruční odečet najdeš v Nastavení.");
  renderCalorieImportRows();
  setCalorieApplyMessage("");
  calorieDiaryDate?.focus();
}

function openXmlImport() {
  openImportModal("Import XML", getXmlExample(), "items");
  importError.textContent = "Použij stejný formát jako Export XML, nebo vyber XML soubor v nástrojích.";
}

function openCatalogImport() {
  openImportModal("Import číselníku", getCatalogXmlExample(), "catalog");
  importError.textContent = "Vlož XML z exportu číselníku, nebo jednoduchý seznam položek.";
}

async function importXmlFromFile(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    openImportModal(currentImportMode === "catalog" ? "Import číselníku" : "Import XML", currentImportMode === "catalog" ? getCatalogXmlExample() : getXmlExample(), currentImportMode);
    importText.value = text.trim();
    importError.textContent = "XML soubor je načtený. Zkontroluj položky a potvrď import.";
    confirmImport.focus();
  } catch (error) {
    showMessage("XML soubor se nepodařilo načíst.", true);
  } finally {
    xmlFileInput.value = "";
  }
}

function openImportModal(title = "Import", placeholder = "Rohlík 4 ks\nŠunka 100 g\nMléko 1000 ml", mode = "items") {
  currentImportMode = mode;
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
  if (currentImportMode === "catalog") {
    await importCatalogFromModal();
    return;
  }

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
    const existingItem = findItemByName(importedItem.name);
    const result = upsertItemAmount({
      name: importedItem.name,
      amount: importedItem.amount,
      unit: importedItem.unit,
      action: "purchase",
      category: importedItem.category || "Ostatní"
    });
    const itemName = existingItem ? existingItem.name : importedItem.name;
    const price = Number.isFinite(Number(importedItem.price)) ? roundAmount(Number(importedItem.price)) : null;

    if (result !== "missing" && result !== "too-much") {
      ensureCatalogItemFromEntry({
        name: itemName,
        category: importedItem.category || "Ostatní",
        unit: importedItem.unit
      });
    }

    recordHistory(getItemHistoryText(itemName, importedItem.amount, importedItem.unit, "purchase", result, price), "item", list, {
      action: "purchase",
      product: itemName,
      amount: importedItem.amount,
      unit: importedItem.unit,
      price,
      occurredAt: getLocalDateTimeValue(new Date())
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

  const itemNodes = doc.querySelectorAll("items > item, list > item");
  const nodes = itemNodes.length ? itemNodes : doc.querySelectorAll("item");

  nodes.forEach((node) => {
    const rawName = readXmlValue(node, "name");
    const rawAmount = parseImportAmount(readXmlValue(node, "amount") || "1") || 1;
    const rawUnit = readXmlValue(node, "unit") || unitSelect.value;
    const rawCategory = readXmlValue(node, "category");
    const rawPrice = parseOptionalPrice(readXmlValue(node, "price"));
    const name = formatProductName(rawName);
    const normalized = normalizeImportAmountAndUnit(rawAmount, rawUnit);
    const amount = normalized.amount;
    const unit = normalized.unit;
    const category = tidyName(rawCategory) || inferCategoryFromName(name);

    if (name && amount && unit) {
      items.push({ name, amount, unit, category, price: rawPrice });
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

function getCatalogXmlExample() {
  return [
    '<domaci-zasoby version="1">',
    '  <catalog>',
    '    <catalogItem name="Mléko" category="Mléčné" unit="ml">',
    '      <alias name="Mléko Kunín" ean="12345678" amount="1000" unit="ml" />',
    '    </catalogItem>',
    '  </catalog>',
    '</domaci-zasoby>'
  ].join("\n");
}

async function importCatalogFromModal() {
  const source = importText.value.trim();
  const parsed = source.startsWith("<")
    ? parseXmlCatalogItems(source)
    : { items: parseImportedItems(source).items.map((item) => ({ ...item, eans: [], eanAliases: [] })), skipped: [] };

  if (!parsed.items.length) {
    importError.textContent = "Nenašel jsem žádné položky číselníku.";
    importText.focus();
    return;
  }

  parsed.items.forEach((item) => {
    upsertCatalogItem({
      id: item.id || createId(),
      name: item.name,
      category: item.category || inferCategoryFromName(item.name) || "Ostatní",
      unit: item.unit || "ks",
      listId: activeListId,
      eans: item.eans || [],
      eanAliases: item.eanAliases || [],
      replaceAliases: false
    });
  });

  closeImportModal();
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
  recordHistory(`Import číselníku: ${parsed.items.length} položek.`, "catalog");
  renderHistory();
  showMessage(`Číselník importován: ${parsed.items.length} položek.`);
  await saveState();
}

function parseXmlCatalogItems(value) {
  const items = [];
  const skipped = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "application/xml");

  if (doc.querySelector("parsererror")) {
    return { items, skipped: [value] };
  }

  doc.querySelectorAll("catalogItem").forEach((node) => {
    const name = formatProductName(readXmlValue(node, "name"));
    const category = tidyName(readXmlValue(node, "category")) || inferCategoryFromName(name) || "Ostatní";
    const unit = normalizeImportUnit(readXmlValue(node, "unit") || "ks");
    const eans = normalizeEanList(readXmlValue(node, "ean"));
    const eanAliases = [...node.querySelectorAll("alias")]
      .map((aliasNode) => ({
        name: formatProductName(readXmlValue(aliasNode, "name")),
        ean: normalizeEan(readXmlValue(aliasNode, "ean")),
        amount: parseImportAmount(readXmlValue(aliasNode, "amount")) || 1,
        unit: normalizeImportUnit(readXmlValue(aliasNode, "unit") || unit)
      }))
      .filter((alias) => alias.name);

    if (name) {
      items.push({ name, category, unit, eans, eanAliases });
    } else {
      skipped.push(node.outerHTML || "catalogItem");
    }
  });

  return { items, skipped };
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

function buildCatalogXml(items = getCatalogItems()) {
  const rows = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .map((item) => {
      const aliases = normalizeEanAliases(item.eanAliases)
        .map((alias) => {
          return `      <alias name="${escapeXml(alias.name)}" ean="${escapeXml(alias.ean || "")}" amount="${escapeXml(formatXmlAmount(alias.amount || 1))}" unit="${escapeXml(alias.unit || item.unit || "ks")}" />`;
        })
        .join("\n");

      return [
        `    <catalogItem name="${escapeXml(item.name)}" category="${escapeXml(item.category || "Ostatní")}" unit="${escapeXml(item.unit || "ks")}" ean="${escapeXml(item.ean || "")}">`,
        aliases || "      <!-- žádné aliasy -->",
        "    </catalogItem>"
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<domaci-zasoby version="1">',
    "  <catalog>",
    rows || "    <!-- žádné položky -->",
    "  </catalog>",
    "</domaci-zasoby>",
    ""
  ].join("\n");
}

function buildStateXml(state = serializeState()) {
  const listRows = (state.lists || [])
    .map((list) => {
      return [
        `    <list id="${escapeXml(list.id || "")}" name="${escapeXml(list.name || "Lednice")}">`,
        ...((list.items || []).map((item) => {
          return `      <item id="${escapeXml(item.id || "")}" name="${escapeXml(item.name)}" category="${escapeXml(item.category || "Ostatní")}" amount="${escapeXml(formatXmlAmount(item.amount))}" unit="${escapeXml(item.unit || "ks")}" />`;
        })),
        "    </list>"
      ].join("\n");
    })
    .join("\n");
  const shoppingRows = (state.shoppingItems || [])
    .map((item) => `    <shoppingItem id="${escapeXml(item.id || "")}" name="${escapeXml(item.name)}" done="${Boolean(item.done)}" />`)
    .join("\n");
  const comboRows = (state.combos || [])
    .map((combo) => {
      return [
        `    <combo id="${escapeXml(combo.id || "")}" name="${escapeXml(combo.name)}">`,
        ...((combo.items || []).map((item) => `      <item name="${escapeXml(item.name)}" amount="${escapeXml(formatXmlAmount(item.amount))}" unit="${escapeXml(item.unit || "ks")}" />`)),
        "    </combo>"
      ].join("\n");
    })
    .join("\n");
  const historyRows = (state.history || [])
    .slice(0, 120)
    .map((entry) => `    <historyEntry type="${escapeXml(entry.type || "")}" action="${escapeXml(entry.action || "")}" createdAt="${escapeXml(entry.createdAt || "")}" occurredAt="${escapeXml(entry.occurredAt || "")}" text="${escapeXml(entry.text || "")}" />`)
    .join("\n");
  const catalogXml = buildCatalogXml(state.catalogItems || [])
    .split("\n")
    .slice(2, -2)
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<domaci-zasoby version="1">',
    `  <meta exportedAt="${escapeXml(state.exportedAt || new Date().toISOString())}" user="${escapeXml(state.user || getCurrentUserEmail() || "")}" activeListId="${escapeXml(state.activeListId || "")}" />`,
    "  <lists>",
    listRows || "    <!-- žádné seznamy -->",
    "  </lists>",
    catalogXml || "  <catalog />",
    "  <shoppingList>",
    shoppingRows || "    <!-- žádný nákupní list -->",
    "  </shoppingList>",
    "  <combos>",
    comboRows || "    <!-- žádné kombinace -->",
    "  </combos>",
    "  <history>",
    historyRows || "    <!-- žádná historie -->",
    "  </history>",
    "</domaci-zasoby>",
    ""
  ].join("\n");
}

function formatXmlAmount(value) {
  return String(roundAmount(Number(value) || 0)).replace(",", ".");
}

function parseImportLine(line) {
  const normalizedLine = splitImportPriceSuffix(line);
  const parsed = parseNameFirstImportLine(normalizedLine.text) || parseAmountFirstImportLine(normalizedLine.text);

  if (parsed && Number.isFinite(normalizedLine.price)) {
    parsed.price = normalizedLine.price;
  }

  return parsed;
}

function splitImportPriceSuffix(line) {
  const text = tidyName(String(line || "").replace(/\s*\|\s*/g, " | "));
  const priceMatch = text.match(/^(.*?)\s*(?:\|\s*)?(?:cena\s*)?:?\s*(-?\d[\d\s\u00a0]*(?:[,.]\d{1,2})?)\s*(?:kč|kc|czk)\s*$/iu);

  if (!priceMatch) {
    return { text, price: null };
  }

  const price = parseOptionalPrice(priceMatch[2]);
  const textWithoutPrice = tidyName(priceMatch[1]);

  return {
    text: textWithoutPrice || text,
    price
  };
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
  const compact = String(value || "")
    .replace(/[\s\u00a0]/g, "")
    .replace(/[^\d,.-]/g, "")
    .trim();
  const commaIndex = compact.lastIndexOf(",");
  const dotIndex = compact.lastIndexOf(".");
  let normalized = compact;

  if (commaIndex > -1 && dotIndex > -1) {
    normalized = commaIndex > dotIndex
      ? compact.replace(/\./g, "").replace(",", ".")
      : compact.replace(/,/g, "");
  } else if (commaIndex > -1) {
    normalized = compact.replace(",", ".");
  }

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
    bal: "ks",
    baleni: "ks",
    balení: "ks",
    porce: "ks",
    porci: "ks",
    porcí: "ks",
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
    subtractStockFromShopping: Boolean(state.appSettings?.subtractStockFromShopping),
    calorieAccountEmail: typeof state.appSettings?.calorieAccountEmail === "string"
      ? state.appSettings.calorieAccountEmail
      : "",
    calorieSessionCookie: typeof state.appSettings?.calorieSessionCookie === "string"
      ? state.appSettings.calorieSessionCookie
      : "",
    caloriePairings: sanitizeCaloriePairings(state.appSettings?.caloriePairings)
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
      subtractStockFromShopping: false,
      calorieAccountEmail: "",
      calorieSessionCookie: "",
      caloriePairings: {}
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
          listId: typeof entry.listId === "string" ? entry.listId : "",
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
  const sanitizedShopping = sanitizeShoppingItems(state.shoppingItems)
    .map((item) => ({ ...item, listId: item.listId || activeId }));
  const sanitizedCombos = sanitizeCombos(state.combos)
    .map((combo) => ({ ...combo, listId: combo.listId || activeId }));
  const sanitizedCatalog = sanitizeCatalogItems(state.catalogItems)
    .map((item) => ({ ...item, listId: item.listId || activeId }));

  return {
    lists: sanitizedLists,
    activeListId: activeId,
    history: sanitizedHistory,
    shoppingItems: sanitizedShopping,
    combos: sanitizedCombos,
    catalogItems: sanitizedCatalog,
    appSettings: {
      subtractStockFromShopping: Boolean(state.appSettings?.subtractStockFromShopping),
      calorieAccountEmail: typeof state.appSettings?.calorieAccountEmail === "string"
        ? state.appSettings.calorieAccountEmail
        : "",
      calorieSessionCookie: typeof state.appSettings?.calorieSessionCookie === "string"
        ? state.appSettings.calorieSessionCookie
        : "",
      caloriePairings: sanitizeCaloriePairings(state.appSettings?.caloriePairings)
    }
  };
}

function sanitizeCaloriePairings(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value).reduce((pairings, [sourceName, targetName]) => {
    const key = normalize(sourceName);
    const target = formatProductName(targetName);

    if (key && target) {
      pairings[key] = target;
    }

    return pairings;
  }, {});
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
          listId: typeof item.listId === "string" ? item.listId : "",
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
        listId: typeof item.listId === "string" ? item.listId : "",
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
        listId: typeof combo.listId === "string" ? combo.listId : "",
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
  renderShoppingList();
  renderCatalog();
  renderHistory();
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

  if (result === "too-much") {
    showMessage(`V lednici je jen ${formatAmountWithUnit(existingItem.amount, existingItem.unit)}. Víc odečíst nejde.`, true);
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

  ensureCatalogItemFromEntry({ name: itemName, category, unit });
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

    if (result === "missing" || result === "too-much") {
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
    if (action === "set" && amount <= 0) {
      return "missing";
    }

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
    if (amount <= 0) {
      list.items = items.filter((item) => item.id !== existingItem.id);
      return "removed";
    }

    existingItem.amount = roundAmount(amount);
    existingItem.unit = unit;
    existingItem.category = category || existingItem.category || "Ostatní";
    return "set";
  }

  if (negativeActions.includes(action) && amount > existingItem.amount) {
    return "too-much";
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

  if (amount <= 0) {
    list.items = items.filter((item) => item.id !== editingId);
    renderItems();
    resetForm();
    recordHistory(`Nastaveno ${name}: 0 ${unit}.`, "item");
    renderHistory();
    showMessage("Položka nastavena na nulu.");
    await saveState();
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
      && isShoppingItemForActiveList(item)
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
    listId: activeListId,
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

  if (calorieAccountEmail) {
    calorieAccountEmail.value = appSettings.calorieAccountEmail || getCurrentUserEmail();
  }

  if (calorieSessionCookie) {
    calorieSessionCookie.value = appSettings.calorieSessionCookie || "";
  }

  if (calorieDiaryDate && !calorieDiaryDate.value) {
    calorieDiaryDate.value = getLocalDateValue(new Date());
  }
}

async function saveCalorieConnectionSettings() {
  appSettings.calorieAccountEmail = tidyName(calorieAccountEmail?.value || getCurrentUserEmail());
  appSettings.calorieSessionCookie = sanitizeCalorieSessionCookie(calorieSessionCookie?.value || "");
  if (calorieAccountPassword) {
    calorieAccountPassword.value = "";
  }
  syncSettingsControls();
  await saveState();

  if (calorieConnectionMessage) {
    calorieConnectionMessage.textContent = appSettings.calorieSessionCookie
      ? "Propojení uloženo. Teď můžeš v Import / export načíst konkrétní den."
      : "Propojení uloženo bez cookie. Pro automatické načtení dne vlož session cookie z Kalorických tabulek.";
  }
}

async function connectCalorieAccountWithPassword() {
  const email = tidyName(calorieAccountEmail?.value || "");
  const password = calorieAccountPassword?.value || "";

  if (!email || !password) {
    setCalorieConnectionMessage("Vyplň e-mail a heslo do Kalorických tabulek.", true);
    return;
  }

  if (!hasCalorieDiaryIntegration()) {
    setCalorieConnectionMessage("Funkce calorie-diary není v supabase-config.js nastavená.", true);
    return;
  }

  try {
    setCalorieConnectionMessage("Přihlašuji se do Kalorických tabulek...");
    appSettings.calorieAccountEmail = email;
    const data = await fetchCalorieDiaryFromIntegration(getLocalDateValue(new Date()), {
      loginOnly: true,
      password
    });

    if (!data?.sessionCookie) {
      throw new Error("Kalorické tabulky nevrátily session cookie.");
    }

    appSettings.calorieAccountEmail = email;
    appSettings.calorieSessionCookie = sanitizeCalorieSessionCookie(data.sessionCookie);
    if (calorieSessionCookie) {
      calorieSessionCookie.value = appSettings.calorieSessionCookie;
    }
    if (calorieAccountPassword) {
      calorieAccountPassword.value = "";
    }
    await saveState();
    setCalorieConnectionMessage("Připojeno. Relace je uložená a můžeš načítat dny v Import / export.");
  } catch (error) {
    setCalorieConnectionMessage(`Přihlášení se nepovedlo: ${getErrorMessage(error)}`, true);
  }
}

async function testCalorieConnection() {
  await saveCalorieConnectionSettings();

  if (!hasCalorieDiaryIntegration()) {
    setCalorieConnectionMessage("Funkce calorie-diary není v supabase-config.js nastavená.", true);
    return;
  }

  const date = getLocalDateValue(new Date());

  try {
    setCalorieConnectionMessage("Testuji propojení přes Supabase funkci...");
    await fetchCalorieDiaryFromIntegration(date, { testOnly: true });
    setCalorieConnectionMessage("Propojení odpovědělo. V Import / export můžeš načíst konkrétní den.");
  } catch (error) {
    setCalorieConnectionMessage(`Propojení zatím neodpovědělo: ${getErrorMessage(error)}`, true);
  }
}

function setCalorieConnectionMessage(text, isError = false) {
  if (!calorieConnectionMessage) {
    return;
  }

  calorieConnectionMessage.textContent = text;
  calorieConnectionMessage.classList.toggle("is-error", isError);
}

function setCalorieImportMessage(text, isError = false) {
  [calorieImportMessage, calorieDiaryMessage].forEach((element) => {
    if (!element) {
      return;
    }

    element.textContent = text;
    element.classList.toggle("is-error", isError);
  });
}

function setCalorieApplyMessage(text, isError = false) {
  [calorieApplyMessage, calorieDiaryApplyMessage].forEach((element) => {
    if (!element) {
      return;
    }

    element.textContent = text;
    element.classList.toggle("is-error", isError);
  });
}

function hasCalorieDiaryIntegration() {
  const config = window.SUPABASE_CONFIG || {};
  return Boolean(config.calorieDiaryFunction || config.calorieDiaryEndpoint);
}

function sanitizeCalorieSessionCookie(value) {
  return String(value || "")
    .replace(/\r?\n/g, "; ")
    .replace(/\s*;\s*/g, "; ")
    .replace(/\s+/g, " ")
    .trim();
}

async function loadCalorieDiaryEntries() {
  if (!calorieDiaryDate?.value) {
    setCalorieImportMessage("Vyber den, ze kterého chceš načíst položky.", true);
    calorieDiaryDate?.focus();
    return;
  }

  if (!hasCalorieDiaryIntegration()) {
    setCalorieImportMessage("Backend pro Kalorické tabulky zatím není nastavený. Nastav Supabase funkci calorie-diary.", true);
    return;
  }

  try {
    setCalorieImportMessage("Načítám den z Kalorických tabulek...");
    const data = await fetchCalorieDiaryFromIntegration(calorieDiaryDate.value);
    const rows = normalizeCalorieDiaryResult(data, calorieDiaryDate.value);
    calorieImportRowsState = rows.map((row) => createCalorieImportRowState(row));
    renderCalorieImportRows();
    setCalorieApplyMessage("");
    setCalorieImportMessage(calorieImportRowsState.length
      ? `Načteno ${calorieImportRowsState.length} položek. Jsou seřazené podle fází dne, zkontroluj párování a odečti vybrané.`
      : `Kalorické tabulky odpověděly, ale parser ux29 nenašel položky k odečtu. ${summarizeCalorieDiaryPayload(data)}`, !calorieImportRowsState.length);
  } catch (error) {
    setCalorieImportMessage(getCalorieDiaryUserError(error), true);
  }
}

function getCalorieDiaryUserError(error) {
  const message = getErrorMessage(error);

  if (/session cookie|CALORIE_DIARY_ENDPOINT|KALORICKE_TABULKY_MCP_URL|APIFY_TOKEN|cookie/i.test(message)) {
    return "Kalorické tabulky nejdou načíst. V Nastavení nejdřív propoj účet nebo vlož session cookie z Kalorických tabulek.";
  }

  return `Načtení Kalorických tabulek selhalo: ${message}`;
}

function summarizeCalorieDiaryPayload(data) {
  const provider = data?.provider ? `Zdroj: ${data.provider}.` : "";
  const root = data?.raw && typeof data.raw === "object" ? data.raw : data;
  const keys = root && typeof root === "object" ? Object.keys(root).slice(0, 8).join(", ") : "";
  const nestedData = root?.data && typeof root.data === "object" ? root.data : null;
  const dataKeys = nestedData ? Object.keys(nestedData).slice(0, 12).join(", ") : "";
  const foodstuffCount = Number(root?.data?.foodstuffCount ?? root?.foodstuffCount);
  const sourceUrl = root?.__sourceUrl ? `Endpoint: ${root.__sourceUrl}.` : "";
  const returnedDate = Number.isFinite(Number(root?.data?.date))
    ? `Vrácené datum: ${new Date(Number(root.data.date)).toLocaleDateString("cs-CZ")}.`
    : "";

  return [
    provider,
    sourceUrl,
    returnedDate,
    Number.isFinite(foodstuffCount) ? `foodstuffCount: ${foodstuffCount}.` : "",
    keys ? `Klíče odpovědi: ${keys}.` : "",
    dataKeys ? `Klíče v data: ${dataKeys}.` : ""
  ].filter(Boolean).join(" ");
}

async function fetchCalorieDiaryFromIntegration(date, options = {}) {
  const config = window.SUPABASE_CONFIG || {};
  const payload = {
    date,
    email: appSettings.calorieAccountEmail || getCurrentUserEmail(),
    sessionCookie: appSettings.calorieSessionCookie || "",
    password: options.password || "",
    loginOnly: Boolean(options.loginOnly),
    testOnly: Boolean(options.testOnly)
  };

  if (config.calorieDiaryFunction && supabaseClient?.functions?.invoke) {
    const result = await withTimeout(
      supabaseClient.functions.invoke(config.calorieDiaryFunction, { body: payload }),
      RECEIPT_AI_TIMEOUT_MS,
      "Načtení Kalorických tabulek trvá moc dlouho."
    );

    if (result.error) {
      throw new Error(await getSupabaseFunctionErrorMessage(result.error));
    }

    return result.data;
  }

  if (!config.calorieDiaryEndpoint) {
    throw new Error("Endpoint pro Kalorické tabulky není nastavený.");
  }

  const headers = { "Content-Type": "application/json" };

  if (supabaseClient?.auth) {
    const { data } = await supabaseClient.auth.getSession();

    if (data?.session?.access_token) {
      headers.Authorization = `Bearer ${data.session.access_token}`;
    }
  }

  const response = await withTimeout(fetch(config.calorieDiaryEndpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  }), RECEIPT_AI_TIMEOUT_MS, "Načtení Kalorických tabulek trvá moc dlouho.");

  if (!response.ok) {
    throw new Error(`Endpoint vrátil ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

function normalizeCalorieDiaryResult(data, fallbackDate) {
  const rows = [];

  if (Array.isArray(data?.meals)) {
    data.meals.forEach((meal) => {
      const mealName = normalizeCalorieMealName(meal?.name || meal?.meal || meal?.phase);
      normalizeCalorieDiaryItems(meal?.foodstuff || meal?.items || meal?.entries || [], mealName, fallbackDate).forEach((item) => rows.push(item));
    });
  }

  normalizeCalorieDiaryItems(data?.items || data?.entries || [], "", fallbackDate).forEach((item) => rows.push(item));
  if (!rows.length && Array.isArray(data?.raw?.data?.times)) {
    data.raw.data.times.forEach((meal) => {
      const mealName = normalizeCalorieMealName(meal?.title || meal?.name || meal?.meal || meal?.phase);
      normalizeCalorieDiaryItems(meal?.foodstuff || meal?.items || meal?.entries || [], mealName, fallbackDate).forEach((item) => rows.push(item));
    });
  }
  if (!rows.length) {
    normalizeCalorieDiaryItems(data?.raw?.data?.foodstuff || data?.raw?.data?.items || data?.raw?.data?.entries || [], "", fallbackDate).forEach((item) => rows.push(item));
  }

  if (!rows.length) {
    extractCalorieDiaryRowsDeep(data?.raw?.data ?? data?.raw ?? data, fallbackDate).forEach((item) => rows.push(item));
  }

  const uniqueRows = [];
  const seenRows = new Set();

  rows.forEach((row) => {
    const key = `${normalize(row.name)}|${roundAmount(Number(row.amount) || 0)}|${row.unit}|${normalizeCalorieMealName(row.meal)}`;

    if (!seenRows.has(key)) {
      seenRows.add(key);
      uniqueRows.push(row);
    }
  });

  return uniqueRows
    .filter((row) => row.name && row.amount > 0)
    .sort((first, second) => getCalorieMealIndex(first.meal) - getCalorieMealIndex(second.meal)
      || first.name.localeCompare(second.name, "cs"))
    .slice(0, 120);
}

function normalizeCalorieDiaryItems(items, mealName, fallbackDate) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => normalizeCalorieDiaryItem(item, mealName, fallbackDate))
    .filter(Boolean);
}

function normalizeCalorieDiaryItem(item, mealName, fallbackDate) {
  if (!item) {
    return null;
  }

  const nestedFood = item.food || item.product || item.item || {};
  const rawLine = tidyName(stripCalorieHtml(item.rawLine || item.sourceLine || item.text || item.html || item.title || item.name || nestedFood.title || nestedFood.name || ""));
  const parsedLine = parseCalorieImportLine(rawLine);
  const rawAmount = item.amount
    ?? item.quantity
    ?? item.qty
    ?? item.grams
    ?? item.weight
    ?? item.weightValue
    ?? item.weight_value
    ?? item.mnozstvi
    ?? nestedFood.amount
    ?? nestedFood.quantity
    ?? nestedFood.grams
    ?? nestedFood.weight
    ?? parsedLine?.amount;
  const rawUnit = item.unit
    || item.measure
    || item.unitName
    || item.unit_name
    || item.weightUnit
    || item.weight_unit
    || item.jednotka
    || nestedFood.unit
    || nestedFood.measure
    || (Number.isFinite(Number(item.grams ?? item.weight ?? nestedFood.grams ?? nestedFood.weight)) ? "g" : parsedLine?.unit || "g");
  const unitQuantity = parseCalorieDiaryUnitValue(rawUnit);
  const normalized = normalizeImportAmountAndUnit(
    parseImportAmount(rawAmount) || unitQuantity?.amount || parsedLine?.amount || 1,
    unitQuantity?.unit || rawUnit
  );
  const name = cleanCalorieImportName(stripCalorieHtml(item.name || item.title || item.foodName || item.food_name || item.nazev || item.label || nestedFood.name || nestedFood.title || parsedLine?.name || rawLine.replace(parsedLine?.raw || "", "")));
  const meal = normalizeCalorieMealName(item.meal || item.phase || item.section || item.group || item.mealName || item.meal_name || mealName);
  const occurredAt = normalizeCalorieDiaryOccurredAt(item.occurredAt || item.time, meal, item.date || fallbackDate);

  if (!name || normalize(name).length < 3) {
    return null;
  }

  return {
    name,
    amount: normalized.amount,
    unit: normalized.unit,
    meal,
    occurredAt,
    rawLine
  };
}

function parseCalorieDiaryUnitValue(value) {
  const text = tidyName(stripCalorieHtml(value));

  if (!text) {
    return null;
  }

  const multiplierMatch = text.match(/(\d+(?:[,.]\d+)?)\s*(?:x|×|\*)\s*(\d+(?:[,.]\d+)?)\s*(kg|g|gramů|gramu|gramy|gram|ml|l|ks|kusů|kusu|kus|kusy|porce|porcí)\b/iu);

  if (multiplierMatch) {
    return normalizeImportAmountAndUnit(
      roundAmount((parseImportAmount(multiplierMatch[1]) || 1) * (parseImportAmount(multiplierMatch[2]) || 1)),
      multiplierMatch[3]
    );
  }

  const parenthesized = [...text.matchAll(/\(([^)]*)\)/g)]
    .map((match) => match[1])
    .reverse();

  for (const part of parenthesized) {
    const quantity = findCalorieQuantity(part);

    if (quantity) {
      return normalizeImportAmountAndUnit(quantity.amount, quantity.unit);
    }
  }

  const quantity = findCalorieQuantity(text);

  return quantity
    ? normalizeImportAmountAndUnit(quantity.amount, quantity.unit)
    : null;
}

function extractCalorieDiaryRowsDeep(value, fallbackDate, mealName = "") {
  const rows = [];
  const visited = new Set();

  function visit(current, currentMeal) {
    if (!current || visited.has(current)) {
      return;
    }

    if (typeof current === "string") {
      parseCalorieTextDiaryLines(current).forEach((line) => {
        const parsed = parseCalorieImportLine(line);

        if (parsed) {
          rows.push({
            ...parsed,
            meal: normalizeCalorieMealName(currentMeal),
            occurredAt: normalizeCalorieDiaryOccurredAt("", currentMeal, fallbackDate)
          });
        }
      });
      return;
    }

    if (typeof current !== "object") {
      return;
    }

    visited.add(current);

    if (Array.isArray(current)) {
      const normalized = normalizeCalorieDiaryItems(current, currentMeal, fallbackDate);

      if (normalized.length) {
        rows.push(...normalized);
        return;
      }

      current.forEach((item) => visit(item, currentMeal));
      return;
    }

    const nextMeal = current.meal || current.phase || current.section || current.group || current.mealName || current.meal_name || current.title || current.name || currentMeal;
    const direct = normalizeCalorieDiaryItem(current, currentMeal, fallbackDate);

    if (direct && (current.amount || current.quantity || current.grams || current.weight || current.rawLine || current.text)) {
      rows.push(direct);
    }

    Object.entries(current).forEach(([key, nestedValue]) => {
      if (["parent", "owner"].includes(key)) {
        return;
      }

      visit(nestedValue, nextMeal);
    });
  }

  visit(value, mealName);
  return rows;
}

function parseCalorieTextDiaryLines(value) {
  return stripCalorieHtml(value)
    .split(/\r?\n| {2,}|;/)
    .map(tidyName)
    .filter((line) => /(\d+(?:[,.]\d+)?)\s*(kg|g|gramů|gramu|gramy|gram|ml|l|ks|kusů|kusu|kus|kusy|porce|porcí)\b/iu.test(line));
}

function stripCalorieHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(?:div|p|li|tr|td|th|span|section|article|h1|h2|h3|h4)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/\s+\n/g, "\n")
    .replace(/\n\s+/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function normalizeCalorieMealName(value) {
  const normalized = normalize(value);

  if (!normalized) {
    return "Ostatní";
  }

  if (normalized.includes("snidane")) {
    return "Snídaně";
  }

  if (normalized.includes("dopoled")) {
    return "Dopolední svačina";
  }

  if (normalized.includes("obed")) {
    return "Oběd";
  }

  if (normalized.includes("odpoled")) {
    return "Odpolední svačina";
  }

  if (normalized.includes("druha") || normalized.includes("2 vecere")) {
    return "Druhá večeře";
  }

  if (normalized.includes("vecere")) {
    return "Večeře";
  }

  if (normalized.includes("svacina")) {
    return "Ostatní";
  }

  return CALORIE_MEAL_ORDER.find((meal) => normalize(meal) === normalized) || "Ostatní";
}

function getCalorieMealIndex(meal) {
  const index = CALORIE_MEAL_ORDER.indexOf(normalizeCalorieMealName(meal));
  return index >= 0 ? index : CALORIE_MEAL_ORDER.length;
}

function normalizeCalorieDiaryOccurredAt(value, meal, fallbackDate) {
  const text = tidyName(value);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(fallbackDate || ""))
    ? fallbackDate
    : getLocalDateValue(new Date());
  const timeMatch = text.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);

  if (/^\d{4}-\d{2}-\d{2}T/.test(text)) {
    return normalizeEventDate(text);
  }

  if (timeMatch) {
    return `${date}T${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}:${(timeMatch[3] || "00").padStart(2, "0")}`;
  }

  return `${date}T${CALORIE_MEAL_TIMES[normalizeCalorieMealName(meal)] || CALORIE_MEAL_TIMES.Ostatní}`;
}

function createCalorieImportRowState(row) {
  const rememberedTarget = findRememberedCaloriePairing(row.name);
  const match = rememberedTarget
    ? { item: rememberedTarget, score: 100 }
    : findBestCalorieCatalogMatch(row.name, row.unit);
  const state = {
    ...row,
    id: createId(),
    skipped: false,
    sourceName: row.name,
    sourceAmount: row.amount,
    sourceUnit: row.unit,
    targetName: "",
    matchScore: match?.score || 0
  };

  if (match?.item) {
    applyCalorieTargetToRow(state, match.item.name, { remember: false, score: match.score });
  }

  return state;
}

function parseCalorieImportFromText() {
  if (!calorieImportText || !calorieImportRows) {
    return;
  }

  const rows = parseCalorieImportRows(calorieImportText.value);
  calorieImportRowsState = rows.map((row) => createCalorieImportRowState(row));

  renderCalorieImportRows();
  setCalorieApplyMessage("");

  setCalorieImportMessage(calorieImportRowsState.length
    ? `Načteno ${calorieImportRowsState.length} položek. Zkontroluj párování a případně zaškrtni řádky, které se nemají odečíst.`
    : "Nenašel jsem žádné použitelné položky. Zkus zkopírovat řádky s názvem a množstvím v g/ml/ks.", !calorieImportRowsState.length);
}

function parseCalorieImportRows(value) {
  return String(value || "")
    .split(/\r?\n|;/)
    .map((line) => parseCalorieImportLine(line))
    .filter(Boolean)
    .slice(0, 80);
}

function parseCalorieImportLine(line) {
  const rawLine = tidyName(line);

  if (!rawLine || isCalorieImportNoiseLine(rawLine)) {
    return null;
  }

  const quantity = findCalorieQuantity(rawLine);

  if (!quantity) {
    return null;
  }

  const name = cleanCalorieImportName(rawLine.slice(0, quantity.index) || rawLine.replace(quantity.raw, " "));

  if (!name || normalize(name).length < 3) {
    return null;
  }

  const normalized = normalizeImportAmountAndUnit(quantity.amount, quantity.unit);

  return {
    name,
    amount: normalized.amount,
    unit: normalized.unit,
    rawLine
  };
}

function isCalorieImportNoiseLine(line) {
  return /^(jídlo|jidlo|název|nazev|kcal|kalorie|energie|bílkoviny|bilkoviny|sacharidy|tuky|celkem|součet|soucet)\b/iu.test(line);
}

function findCalorieQuantity(line) {
  const multiplierMatch = String(line || "").match(/(\d+(?:[,.]\d+)?)\s*(?:x|×|\*)\s*(\d+(?:[,.]\d+)?)\s*(kg|g|gramů|gramu|gramy|gram|ml|l|ks|kusů|kusu|kus|kusy|porce|porcí)\b/iu);

  if (multiplierMatch) {
    const count = parseImportAmount(multiplierMatch[1]) || 1;
    const amount = parseImportAmount(multiplierMatch[2]) || 1;

    return {
      raw: multiplierMatch[0],
      amount: roundAmount(count * amount),
      unit: multiplierMatch[3],
      index: multiplierMatch.index || 0
    };
  }

  const matches = [...String(line || "").matchAll(/(\d+(?:[,.]\d+)?)\s*(kg|g|gramů|gramu|gramy|gram|ml|l|ks|kusů|kusu|kus|kusy|porce|porcí)\b/giu)];

  if (!matches.length) {
    return null;
  }

  const match = matches.find((currentMatch) => !/^(ks|kus|kusy|porce)$/iu.test(normalizeImportUnit(currentMatch[2]))) || matches[0];
  return {
    raw: match[0],
    amount: parseImportAmount(match[1]) || 1,
    unit: match[2],
    index: match.index || 0
  };
}

function cleanCalorieImportName(value) {
  const text = tidyName(String(value || "")
    .replace(/\b(snídaně|snidane|oběd|obed|večeře|vecere|svačina|svacina)\b/igu, " ")
    .replace(/^\d+(?:[,.]\d+)?\s*(?:x|×|\*)\s*/iu, " ")
    .replace(/\s+\d+(?:[,.]\d+)?\s*(?:x|×|\*)$/iu, " ")
    .replace(/[,:|]+$/g, " ")
    .replace(/\s+/g, " "));

  return formatProductName(text);
}

function renderCalorieImportRows() {
  [calorieImportRows, calorieDiaryRows].forEach((container) => {
    if (container) {
      renderCalorieImportRowsInto(container);
    }
  });
}

function renderCalorieImportRowsInto(container) {
  container.replaceChildren();
  if (!calorieImportRowsState.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Zatím nejsou načtené žádné položky.";
    container.append(empty);
    return;
  }

  const pairingTargets = getCaloriePairingTargets();
  const hasMealGroups = calorieImportRowsState.some((row) => row.meal);
  const groupedRows = hasMealGroups
    ? CALORIE_MEAL_ORDER
      .map((meal) => ({
        meal,
        rows: calorieImportRowsState.filter((row) => normalizeCalorieMealName(row.meal) === meal)
      }))
      .filter((group) => group.rows.length)
    : [{ meal: "", rows: calorieImportRowsState }];

  groupedRows.forEach((group) => {
    if (group.meal) {
      const heading = document.createElement("h3");
      heading.className = "calorie-meal-heading";
      heading.textContent = group.meal;
      container.append(heading);
    }

    group.rows.forEach((row) => {
      syncCalorieRowWithStock(row);
      const article = document.createElement("article");
      const skipLabel = document.createElement("label");
      const skipInput = document.createElement("input");
      const skipText = document.createElement("span");
      const nameInput = document.createElement("input");
      const amountInputElement = document.createElement("input");
      const unitSelectElement = document.createElement("select");
      const targetSelect = document.createElement("select");
      const meta = document.createElement("small");

      article.className = `calorie-import-row${row.skipped ? " is-skipped" : ""}${row.lockedNoStock ? " is-memory-only" : ""}`;
      article.dataset.calorieRow = row.id;

      skipLabel.className = "calorie-skip-check";
      skipInput.type = "checkbox";
      skipInput.checked = Boolean(row.skipped);
      skipInput.dataset.calorieField = "skipped";
      skipInput.disabled = Boolean(row.lockedNoStock);
      skipText.textContent = "Neodečítat";
      skipLabel.append(skipInput, skipText);

      nameInput.type = "text";
      nameInput.value = row.name;
      nameInput.dataset.calorieField = "name";
      nameInput.disabled = Boolean(row.lockedNoStock);
      nameInput.setAttribute("aria-label", "Položka z Kalorických tabulek");

      amountInputElement.type = "number";
      amountInputElement.min = row.lockedNoStock ? "0" : "0.01";
      amountInputElement.step = "0.01";
      amountInputElement.inputMode = "decimal";
      amountInputElement.value = formatCalorieAmountInput(row.amount);
      amountInputElement.dataset.calorieField = "amount";
      amountInputElement.disabled = Boolean(row.lockedNoStock);
      if (Number.isFinite(row.maxAmount)) {
        amountInputElement.max = formatCalorieAmountInput(row.maxAmount);
      }
      amountInputElement.setAttribute("aria-label", "Množství");

      ["g", "ml", "ks", "kg"].forEach((unit) => {
        const option = document.createElement("option");
        option.value = unit;
        option.textContent = unit;
        unitSelectElement.append(option);
      });
      unitSelectElement.value = row.unit;
      unitSelectElement.dataset.calorieField = "unit";
      unitSelectElement.disabled = Boolean(row.targetName);
      unitSelectElement.setAttribute("aria-label", "Jednotka");

      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "Nenapárováno";
      targetSelect.append(emptyOption);

      pairingTargets.forEach((item) => {
        const stockedItem = findExactActiveItemByName(item.name);
        const option = document.createElement("option");
        option.value = item.name;
        option.textContent = stockedItem
          ? `${item.name} (${formatAmount(stockedItem.amount)} ${stockedItem.unit} v lednici)`
          : `${item.name} (${item.unit || "ks"}, není v lednici)`;
        targetSelect.append(option);
      });
      targetSelect.value = row.targetName;
      targetSelect.dataset.calorieField = "targetName";
      targetSelect.setAttribute("aria-label", "Položka v lednici");

      meta.className = "muted-text";
      meta.textContent = getCalorieRowMetaText(row);
      if (!meta.textContent) {
        meta.textContent = row.targetName
        ? `${row.meal ? `${row.meal} · ` : ""}Párování: ${Math.round(row.matchScore)} %, jednotka z číselníku`
        : `${row.meal ? `${row.meal} · ` : ""}Vyber položku z číselníku.`;
      }

      article.append(skipLabel, nameInput, amountInputElement, unitSelectElement, targetSelect, meta);
      container.append(article);
    });
  });
}

function handleCalorieImportRowChange(event) {
  const rowElement = event.target.closest("[data-calorie-row]");

  if (!rowElement) {
    return;
  }

  const row = calorieImportRowsState.find((item) => item.id === rowElement.dataset.calorieRow);

  if (!row) {
    return;
  }

  const previousTargetName = row.targetName;
  row.skipped = Boolean(rowElement.querySelector('[data-calorie-field="skipped"]')?.checked);
  row.name = tidyName(rowElement.querySelector('[data-calorie-field="name"]')?.value || row.name);
  row.amount = parseCalorieAmountInput(rowElement.querySelector('[data-calorie-field="amount"]')?.value, row.amount);
  row.unit = rowElement.querySelector('[data-calorie-field="unit"]')?.value || row.unit;
  row.targetName = rowElement.querySelector('[data-calorie-field="targetName"]')?.value || "";

  if (row.targetName !== previousTargetName) {
    if (row.targetName) {
      applyCalorieTargetToRow(row, row.targetName, { remember: true, score: 100, fromCurrent: true });
    } else {
      row.lockedNoStock = false;
      row.lockReason = "";
      row.maxAmount = null;
    }
    renderCalorieImportRows();
    setCalorieApplyMessage(row.targetName
      ? (row.lockedNoStock
        ? `${row.targetName} není v lednici. Párování jsem uložil, odečet bude 0.`
        : `${row.name} je napárované na ${row.targetName}.`)
      : "Párování řádku je zrušené.");
    return;
  }

  syncCalorieRowWithStock(row);
  const amountInputElement = rowElement.querySelector('[data-calorie-field="amount"]');
  const unitSelectElement = rowElement.querySelector('[data-calorie-field="unit"]');
  const meta = rowElement.querySelector("small");

  if (amountInputElement) {
    amountInputElement.value = formatCalorieAmountInput(row.amount);
    if (Number.isFinite(row.maxAmount)) {
      amountInputElement.max = formatCalorieAmountInput(row.maxAmount);
    } else {
      amountInputElement.removeAttribute("max");
    }
  }

  if (unitSelectElement) {
    unitSelectElement.value = row.unit;
  }

  if (meta) {
    meta.textContent = getCalorieRowMetaText(row) || meta.textContent;
  }

  rowElement.classList.toggle("is-skipped", row.skipped);
  rowElement.classList.toggle("is-memory-only", Boolean(row.lockedNoStock));
}

async function applyCalorieImportDeduction() {
  if (!calorieImportRowsState.length) {
    setCalorieImportMessage("Nejdřív načti položky z Kalorických tabulek.", true);
    return;
  }

  let changed = 0;
  let skipped = 0;
  let missing = 0;
  let rememberedOnly = 0;
  let capped = 0;

  calorieImportRowsState.forEach((row) => {
    if (row.skipped) {
      skipped += 1;
      return;
    }

    rememberCaloriePairing(row, row.targetName);
    const pairedTarget = findCalorieTargetByName(row.targetName);
    const target = findExactActiveItemByName(pairedTarget?.name || row.targetName);

    if (!target) {
      if (pairedTarget) {
        row.amount = 0;
        row.lockedNoStock = true;
        rememberedOnly += 1;
      } else {
        missing += 1;
      }
      return;
    }

    const beforeSyncAmount = Number(row.amount) || 0;
    syncCalorieRowWithStock(row);

    if (beforeSyncAmount > row.amount) {
      capped += 1;
    }

    if (row.lockedNoStock || row.amount <= 0) {
      rememberedOnly += 1;
      return;
    }

    let convertedAmount = convertCalorieAmountToTargetUnit(row.amount, row.unit, target.unit);

    if (!convertedAmount) {
      missing += 1;
      return;
    }

    convertedAmount = Math.min(convertedAmount, target.amount);

    const result = upsertItemAmount({
      name: target.name,
      amount: convertedAmount,
      unit: target.unit,
      action: "eaten",
      category: target.category || "Ostatní"
    });

    if (result === "missing" || result === "too-much") {
      missing += 1;
      return;
    }

    changed += 1;
    recordHistory(`Kalorické tabulky${row.meal ? ` (${row.meal})` : ""}: ${target.name} -${formatAmount(convertedAmount)} ${target.unit}.`, "item", getActiveList(), {
      action: "eaten",
      product: target.name,
      amount: convertedAmount,
      unit: target.unit,
      price: null,
      occurredAt: row.occurredAt || getLocalDateTimeValue(new Date())
    });
  });

  renderItems();
  renderHistory();
  renderCalorieImportRows();
  await saveState();

  const summary = [
    `Odečteno ${changed}`,
    skipped ? `vynecháno ${skipped}` : "",
    rememberedOnly ? `jen uloženo párování ${rememberedOnly}` : "",
    capped ? `sníženo na stav lednice ${capped}` : "",
    missing ? `nenapárováno/nešlo odečíst ${missing}` : ""
  ].filter(Boolean).join(", ");
  const isError = changed === 0 && rememberedOnly === 0 && missing > 0;

  setCalorieImportMessage(`Odečet hotový: ${summary}.`, isError);
  setCalorieApplyMessage(`Hotovo: ${summary}.`, isError);
}

function convertCalorieAmountToTargetUnit(amount, unit, targetUnit) {
  const normalized = normalizeImportAmountAndUnit(Number(amount) || 0, unit);
  const sourceUnit = normalized.unit;
  const sourceAmount = normalized.amount;

  if (!Number.isFinite(sourceAmount) || sourceAmount <= 0) {
    return null;
  }

  if (sourceUnit === targetUnit) {
    return sourceAmount;
  }

  if (sourceUnit === "g" && targetUnit === "kg") {
    return roundAmount(sourceAmount / 1000);
  }

  if (sourceUnit === "kg" && targetUnit === "g") {
    return roundAmount(sourceAmount * 1000);
  }

  if (sourceUnit === "ml" && targetUnit === "l") {
    return roundAmount(sourceAmount / 1000);
  }

  if (sourceUnit === "l" && targetUnit === "ml") {
    return roundAmount(sourceAmount * 1000);
  }

  return null;
}

function parseCalorieAmountInput(value, fallback = 0) {
  const amount = Number(String(value ?? "").replace(/[\s\u00a0]/g, "").replace(",", "."));
  return Number.isFinite(amount) && amount >= 0 ? roundAmount(amount) : roundAmount(Number(fallback) || 0);
}

function formatCalorieAmountInput(value) {
  return String(roundAmount(Number(value) || 0)).replace(",", ".");
}

function syncCalorieRowWithStock(row) {
  row.lockedNoStock = false;
  row.lockReason = "";
  row.cappedToStock = false;
  row.maxAmount = null;

  if (!row?.targetName) {
    return row;
  }

  const target = findCalorieTargetByName(row.targetName);

  if (!target) {
    return row;
  }

  row.targetName = target.name;
  row.unit = target.unit || row.unit;

  const stockedItem = findExactActiveItemByName(target.name);

  if (!stockedItem) {
    row.amount = 0;
    row.maxAmount = 0;
    row.lockedNoStock = true;
    row.lockReason = "Položka není v lednici, uloží se jen párování.";
    return row;
  }

  const availableAmount = convertCalorieAmountToTargetUnit(stockedItem.amount, stockedItem.unit, row.unit);

  if (!Number.isFinite(availableAmount)) {
    row.amount = 0;
    row.maxAmount = 0;
    row.lockedNoStock = true;
    row.lockReason = "Jednotky nejdou převést, uloží se jen párování.";
    return row;
  }

  row.maxAmount = roundAmount(availableAmount);

  if ((Number(row.amount) || 0) > row.maxAmount) {
    row.amount = row.maxAmount;
    row.cappedToStock = true;
  }

  return row;
}

function getCalorieRowMetaText(row) {
  const prefix = row.meal ? `${row.meal} · ` : "";

  if (!row.targetName) {
    return `${prefix}Vyber položku z číselníku.`;
  }

  if (row.lockedNoStock) {
    return `${prefix}${row.lockReason || "Položka není v lednici, uloží se jen párování."}`;
  }

  if (row.cappedToStock && Number.isFinite(row.maxAmount)) {
    return `${prefix}V lednici je jen ${formatAmountWithUnit(row.maxAmount, row.unit)}, odečte se maximum.`;
  }

  if (Number.isFinite(row.maxAmount)) {
    return `${prefix}Párování uloženo, max. odečet ${formatAmountWithUnit(row.maxAmount, row.unit)}.`;
  }

  return `${prefix}Párování: ${Math.round(row.matchScore || 0)} %, jednotka z číselníku.`;
}

function getCaloriePairingKey(name) {
  return normalize(name);
}

function findRememberedCaloriePairing(name) {
  const targetName = appSettings.caloriePairings?.[getCaloriePairingKey(name)];
  return targetName ? findCalorieTargetByName(targetName) : null;
}

function rememberCaloriePairing(row, targetName) {
  const target = findCalorieTargetByName(targetName);
  const key = getCaloriePairingKey(row?.name || row?.sourceName);

  if (!target || !key) {
    return;
  }

  appSettings.caloriePairings = sanitizeCaloriePairings(appSettings.caloriePairings);
  appSettings.caloriePairings[key] = target.name;
  queueSaveState();
}

function applyCalorieTargetToRow(row, targetName, options = {}) {
  const target = findCalorieTargetByName(targetName);

  if (!row || !target) {
    return;
  }

  const sourceAmount = Number(options.fromCurrent ? row.amount : (row.sourceAmount ?? row.amount));
  const sourceUnit = options.fromCurrent ? row.unit : (row.sourceUnit || row.unit);
  const convertedAmount = convertCalorieAmountToTargetUnit(sourceAmount, sourceUnit, target.unit);

  row.targetName = target.name;
  row.unit = target.unit || row.unit;

  if (convertedAmount) {
    row.amount = convertedAmount;
  }

  row.matchScore = options.score ?? row.matchScore ?? 100;
  syncCalorieRowWithStock(row);

  if (options.remember) {
    rememberCaloriePairing(row, target.name);
  }
}

function getCaloriePairingTargets() {
  const targets = new Map();

  getCatalogItems().forEach((item) => {
    if (item?.name) {
      targets.set(normalize(item.name), item);
    }
  });

  getActiveItems().forEach((item) => {
    const key = normalize(item.name);

    if (key && !targets.has(key)) {
      targets.set(key, item);
    }
  });

  return [...targets.values()].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function findCalorieTargetByName(name) {
  const catalogItem = findCatalogItemByName(name);

  if (catalogItem) {
    return catalogItem;
  }

  return findExactActiveItemByName(name);
}

function findExactActiveItemByName(name) {
  const normalizedName = normalize(name);
  return getActiveItems().find((item) => normalize(item.name) === normalizedName) || null;
}

function findBestCalorieCatalogMatch(name, unit) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  const matches = getCaloriePairingTargets()
    .map((item) => ({
      item,
      score: getCaloriePantryMatchScore(name, unit, item)
    }))
    .filter((match) => match.score >= 42)
    .sort((first, second) => second.score - first.score || first.item.name.localeCompare(second.item.name, "cs"));

  return matches[0] || null;
}

function findBestCaloriePantryMatch(name, unit) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return null;
  }

  const matches = getActiveItems()
    .map((item) => ({
      item,
      score: getCaloriePantryMatchScore(name, unit, item)
    }))
    .filter((match) => match.score >= 42)
    .sort((first, second) => second.score - first.score || first.item.name.localeCompare(second.item.name, "cs"));

  return matches[0] || null;
}

function getCaloriePantryMatchScore(sourceName, sourceUnit, item) {
  const source = normalize(sourceName);
  const target = normalize(item.name);

  if (!source || !target) {
    return 0;
  }

  if (source === target) {
    return 120;
  }

  const sourceTokens = getMeaningfulNameTokens(source);
  const targetTokens = getMeaningfulNameTokens(target);
  let score = 0;

  if (source.includes(target) || target.includes(source)) {
    score += 45;
  }

  if (targetTokens.length) {
    const tokenScore = targetTokens.reduce((total, token) => total + getBestTokenMatchScore(token, sourceTokens), 0);
    score += (tokenScore / targetTokens.length) * 72;
  }

  if (sourceTokens.length) {
    const reverseScore = sourceTokens.reduce((total, token) => total + getBestTokenMatchScore(token, targetTokens), 0);
    score += (reverseScore / sourceTokens.length) * 16;
  }

  const normalizedSourceUnit = normalizeImportUnit(sourceUnit);

  if (normalizedSourceUnit === item.unit) {
    score += 8;
  }

  return score;
}

function getBestTokenMatchScore(token, candidates) {
  if (!candidates.length) {
    return 0;
  }

  return candidates.reduce((best, candidate) => {
    if (token === candidate) {
      return 1;
    }

    if (token.includes(candidate) || candidate.includes(token)) {
      return Math.max(best, 0.88);
    }

    const distance = getEditDistance(token, candidate);
    const maxLength = Math.max(token.length, candidate.length);
    const score = maxLength ? 1 - distance / maxLength : 0;

    return Math.max(best, score >= 0.66 ? score : 0);
  }, 0);
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
  const activeShoppingItems = shoppingItems.filter(isShoppingItemForActiveList);

  if (!activeShoppingItems.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Nákupní list je prázdný.";
    shoppingList.append(empty);
    return;
  }

  let visibleCount = 0;
  activeShoppingItems.forEach((item) => {
    const parsed = parseImportLine(item.name);
    const summary = parsed ? getShoppingNeedSummary(parsed) : null;

    if (appSettings.subtractStockFromShopping && summary && summary.missing === 0 && !item.done) {
      return;
    }

    const row = document.createElement("article");
    const content = document.createElement("div");
    const text = document.createElement("strong");
    const meta = document.createElement("span");
    const metrics = document.createElement("div");
    const actions = document.createElement("div");
    const toggle = document.createElement("button");
    const remove = document.createElement("button");

    visibleCount += 1;
    row.className = `card-row shopping-row${item.done ? " is-done" : ""}`;
    row.classList.toggle("is-covered", Boolean(appSettings.subtractStockFromShopping && summary && summary.missing === 0));
    content.className = "row-content";
    text.textContent = parsed ? parsed.name : getShoppingDisplayTitle(item, parsed, summary);
    metrics.className = "shopping-metrics";
    metrics.append(...createShoppingMetricNodes(parsed, summary));
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
    if (metrics.children.length) {
      content.append(metrics);
    }

    if (meta.textContent) {
      content.append(meta);
    }

    actions.append(toggle, remove);
    row.append(content, actions);
    shoppingList.append(row);
  });

  if (!visibleCount) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Všechno je nad nastaveným limitem.";
    shoppingList.append(empty);
  }
}

function createShoppingMetricNodes(parsed, summary) {
  if (!parsed || !summary) {
    return [];
  }

  return [
    ["Limit", formatAmountWithUnit(summary.totalWanted, parsed.unit), ""],
    ["V lednici", formatAmountWithUnit(summary.currentAmount, parsed.unit), ""],
    ["Koupit", summary.missing > 0 ? formatAmountWithUnit(summary.missing, parsed.unit) : "0", summary.missing > 0 ? "is-needed" : "is-ok"]
  ].map(([label, value, className]) => {
    const item = document.createElement("span");
    const labelElement = document.createElement("small");
    const valueElement = document.createElement("strong");
    item.className = className;
    labelElement.textContent = label;
    valueElement.textContent = value;
    item.append(labelElement, valueElement);
    return item;
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

    const key = `${item.listId || ""}|${normalize(parsed.name)}|${parsed.unit}`;
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

function isShoppingItemForActiveList(item) {
  return !item.listId || item.listId === activeListId;
}

function getShoppingDisplayTitle(item, parsed, summary) {
  if (!appSettings.subtractStockFromShopping || !parsed || !summary) {
    return item.name;
  }

  if (summary.missing === 0) {
    return `${parsed.name}: není potřeba kupovat`;
  }

  const suggestion = getShoppingPackageSuggestion(parsed, summary);
  return `${parsed.name}: ${suggestion || `koupit ${formatAmountWithUnit(summary.missing, parsed.unit)}`}`;
}

function getShoppingItemMeta(item, parsed = parseImportLine(item.name), summary = parsed ? getShoppingNeedSummary(parsed) : null) {
  if (!appSettings.subtractStockFromShopping) {
    return "";
  }

  if (!parsed) {
    return "Zadej třeba: Mléko 1000 ml, potom odečtu zásoby.";
  }

  const suggestion = getShoppingPackageSuggestion(parsed, summary);
  return suggestion ? `Doporučení: ${suggestion}.` : "";
}

function getShoppingPackageSuggestion(parsed, summary) {
  if (!summary || summary.missing <= 0) {
    return "";
  }

  const catalogItem = findCatalogItemByName(parsed.name);
  const aliases = normalizeEanAliases(catalogItem?.eanAliases)
    .filter((alias) => alias.unit === parsed.unit && Number(alias.amount) >= summary.missing)
    .sort((a, b) => Number(a.amount) - Number(b.amount));
  const alias = aliases[0];

  if (alias) {
    return `koupit 1x ${alias.name} (${formatAmountWithUnit(alias.amount, alias.unit)})`;
  }

  return "";
}

function getShoppingNeedSummary(parsed) {
  const stocked = getActiveItems().find((currentItem) => {
    return normalize(currentItem.name) === normalize(parsed.name)
      && currentItem.unit === parsed.unit;
  });
  const currentAmount = stocked ? stocked.amount : 0;
  const totalWanted = shoppingItems
    .filter((item) => !item.done && isShoppingItemForActiveList(item))
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
    showMessage("Vyplň název kombinace a aspoň jednu položku z číselníku.", true);
    return;
  }

  const existing = combos.find((combo) => isComboForActiveList(combo) && normalize(combo.name) === normalize(name));
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
      listId: activeListId,
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
    <button class="ghost-button combo-remove-button" type="button" data-combo-builder-action="remove">Odebrat</button>
  `;

  row.querySelector(".combo-product").value = item.name || "";
  row.querySelector(".combo-amount").value = item.amount ? String(item.amount) : "";
  row.querySelector(".combo-unit").value = item.unit || "ks";
  row.querySelector(".combo-unit").disabled = true;
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

  input.value = item.name;
  row.querySelector(".combo-unit").value = item.unit;
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
      const typedName = formatProductName(row.querySelector(".combo-product").value);
      const amount = Number(row.querySelector(".combo-amount").value);
      const sourceItem = findCatalogItemByName(typedName);
      const name = sourceItem?.name || "";
      const unit = sourceItem?.unit || "ks";
      const category = sourceItem?.category || inferCategoryFromName(name) || "Ostatní";

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
  const combo = combos.find((currentCombo) => isComboForActiveList(currentCombo) && currentCombo.id === comboSelect.value);

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
  const activeCombos = combos.filter(isComboForActiveList);

  if (!activeCombos.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Zatím žádná kombinace";
    comboChangeSelect.append(option);
  } else {
    activeCombos.forEach((combo) => {
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

  const combo = combos.find((currentCombo) => isComboForActiveList(currentCombo) && currentCombo.id === comboChangeSelect.value);
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
  const combo = combos.find((currentCombo) => isComboForActiveList(currentCombo) && currentCombo.id === comboChangeSelect?.value);
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

    if (result === "missing" || result === "too-much") {
      missing += 1;
    } else {
      changed += 1;
    }
  });

  recordHistory(
    `${getActionLabel(action)} kombinace ${combo.name}: ${changed} položek${missing ? `, ${missing} chybělo` : ""}.`,
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

  const combo = combos.find((currentCombo) => isComboForActiveList(currentCombo) && currentCombo.id === button.dataset.id);

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
  showMessage("");
}

function renderCombos() {
  comboList.replaceChildren();
  comboSelect.replaceChildren();
  renderProductOptions();
  const activeCombos = combos.filter(isComboForActiveList);

  if (!activeCombos.length) {
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

  activeCombos.forEach((combo) => {
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
      ? (pantrySearchInput?.value ? "Žádná položka neodpovídá hledání." : "Žádná položka neodpovídá vybraným kategoriím.")
      : "Lednice je zatím prázdná.";
  }

  visibleItems
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "cs"))
    .forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <div class="product-cell-content">
            <span class="product-card-copy">
              <span class="product-name"></span>
              <small class="product-card-category"></small>
            </span>
            <button class="icon-inline-button" type="button" data-action="edit" data-id="${item.id}" aria-label="Upravit položku">${icons.edit}</button>
          </div>
        </td>
        <td class="category-cell"></td>
        <td class="number-cell">${formatAmountWithUnit(item.amount, item.unit)}</td>
      `;

      row.querySelector(".product-name").textContent = item.name;
      row.querySelector(".category-cell").textContent = formatCategoryLabel(item.category);
      row.querySelector(".product-card-category").textContent = formatCategoryLabel(item.category);
      itemsBody.append(row);
    });

  renderShoppingList();
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

  const query = normalize(pantrySearchInput?.value || "");

  return items.filter((item) => {
    if (!selectedPantryCategories.has(tidyName(item.category) || "Ostatní")) {
      return false;
    }

    if (!query) {
      return true;
    }

    return normalize([
      item.name,
      item.category,
      item.unit,
      formatAmount(item.amount)
    ].join(" ")).includes(query);
  });
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
  document.querySelector(".catalog-alias-editor")?.removeAttribute("open");
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
    const existing = catalogItems.find((currentItem) => {
      return normalize(currentItem.name) === normalize(item.name)
        && (!currentItem.listId || currentItem.listId === activeListId);
    });
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
    catalogItems = catalogItems.filter((currentItem) => {
      return normalize(currentItem.name) !== normalize(item.name)
        || (currentItem.listId && currentItem.listId !== activeListId);
    });
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

  const aiAvailable = hasReceiptAiIntegration();

  if (!aiAvailable && !window.Tesseract) {
    receiptMessage.textContent = "OCR knihovna se nenačetla. Účtenku můžeš zatím přepsat přes hromadný import.";
    return;
  }

  receiptMessage.textContent = aiAvailable
    ? "Posílám účtenku na AI rozpoznání..."
    : "Rozpoznávám účtenku: zkouším víc úprav fotky a skládám položky...";

  try {
    let parsed = null;
    let sourceInfo = "";

    if (aiAvailable) {
      try {
        parsed = await recognizeReceiptWithExternalAi(file, (progress) => {
          receiptMessage.textContent = progress;
        });
        sourceInfo = `AI endpoint: ${parsed.provider || "externí AI"}.`;
      } catch (error) {
        if (!shouldFallbackToLocalReceiptOcr()) {
          receiptMessage.textContent = `AI rozpoznání selhalo: ${getErrorMessage(error)}. Lokální OCR teď kvůli přesnosti nemíchám do výsledku.`;
          return;
        }

        receiptMessage.textContent = "AI endpoint teď není dostupný, zkouším lokální OCR...";
      }
    }

    if (!parsed || !parsed.items.length) {
      if (aiAvailable && !shouldFallbackToLocalReceiptOcr()) {
        receiptMessage.textContent = "AI nenašla žádné jisté položky. Výsledek nebudu doplňovat lokálním OCR, aby se nepřidaly adresy, obchod nebo duplicitní řádky.";
        return;
      }

      if (!window.Tesseract) {
        receiptMessage.textContent = "AI nic použitelného nevrátila a lokální OCR se nenačetlo.";
        return;
      }

      const result = await recognizeReceiptText(file, (progress) => {
        receiptMessage.textContent = progress;
      });
      parsed = parseReceiptOcrAttempts(result.attempts);
      sourceInfo = `Lokální OCR pokusů: ${result.attempts.length}.`;
    }

    const text = formatReceiptItemsForImport(parsed.items);

    if (!text) {
      receiptMessage.textContent = "Z účtenky jsem nevyčetl žádné použitelné položky.";
      return;
    }

    openImportModal("Import z účtenky", "Rozpoznané položky uprav a potvrď.");
    importText.value = text;
    importError.textContent = parsed.skipped.length
      ? `Zkontroluj množství, jednotky a cenu. ${sourceInfo} Řádků k ruční kontrole: ${parsed.skipped.length}.`
      : `Zkontroluj množství, jednotky a cenu. ${sourceInfo}`;
    receiptMessage.textContent = `Hotovo. Našel jsem ${parsed.items.length} položek k importu. Cena za řádkem se uloží do statistik.`;
  } catch (error) {
    receiptMessage.textContent = "OCR se nepovedlo. Zkus ostřejší fotku nebo ruční hromadný import.";
  } finally {
    receiptFileInput.value = "";
  }
}

function hasReceiptAiIntegration() {
  const config = window.SUPABASE_CONFIG || {};

  if (config.receiptAiEnabled === false) {
    return false;
  }

  return Boolean(config.receiptAiFunction || config.receiptAiEndpoint);
}

function shouldFallbackToLocalReceiptOcr() {
  const config = window.SUPABASE_CONFIG || {};
  return config.receiptAiFallbackToOcr === true;
}

async function recognizeReceiptWithExternalAi(file, onProgress = () => {}) {
  const config = window.SUPABASE_CONFIG || {};
  const payload = {
    image: await createReceiptAiImageDataUrl(file),
    fileName: file.name || "receipt.jpg",
    mimeType: file.type || "image/jpeg",
    language: "cs",
    categories: DEFAULT_CATEGORIES,
    catalog: getReceiptAiCatalogContext()
  };

  onProgress("AI čte fotku účtenky a vrací jen reálné položky...");

  const data = config.receiptAiFunction && supabaseClient?.functions?.invoke
    ? await invokeReceiptAiFunction(config.receiptAiFunction, payload)
    : await invokeReceiptAiEndpoint(config.receiptAiEndpoint, payload);

  const parsed = normalizeReceiptAiResult(data);

  if (!parsed.items.length) {
    throw new Error("Receipt AI returned no usable items.");
  }

  return parsed;
}

async function invokeReceiptAiFunction(functionName, payload) {
  const result = await withTimeout(
    supabaseClient.functions.invoke(functionName, { body: payload }),
    RECEIPT_AI_TIMEOUT_MS,
    "AI rozpoznání trvá moc dlouho."
  );

  if (result.error) {
    throw new Error(await getSupabaseFunctionErrorMessage(result.error));
  }

  return result.data;
}

async function getSupabaseFunctionErrorMessage(error) {
  try {
    const context = error.context;

    if (context?.json) {
      const body = await context.json();
      return body.detail || body.error || error.message || "AI endpoint selhal.";
    }

    if (context?.text) {
      const text = await context.text();
      return text || error.message || "AI endpoint selhal.";
    }
  } catch (parseError) {
    return error.message || "AI endpoint selhal.";
  }

  return error.message || "AI endpoint selhal.";
}

function getErrorMessage(error) {
  return error instanceof Error && error.message
    ? error.message
    : String(error || "neznámá chyba");
}

async function invokeReceiptAiEndpoint(endpoint, payload) {
  if (!endpoint) {
    throw new Error("AI endpoint není nastavený.");
  }

  const headers = { "Content-Type": "application/json" };

  if (supabaseClient?.auth) {
    const { data } = await supabaseClient.auth.getSession();

    if (data?.session?.access_token) {
      headers.Authorization = `Bearer ${data.session.access_token}`;
    }
  }

  const response = await withTimeout(fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  }), RECEIPT_AI_TIMEOUT_MS, "AI rozpoznání trvá moc dlouho.");

  if (!response.ok) {
    throw new Error(`AI endpoint vrátil ${response.status}.`);
  }

  return response.json();
}

async function createReceiptAiImageDataUrl(file) {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, RECEIPT_AI_IMAGE_MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext("2d");

    if (!context) {
      bitmap.close?.();
      return fileToDataUrl(file);
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();

    const blob = await new Promise((resolve) => {
      canvas.toBlob((result) => resolve(result), "image/jpeg", 0.88);
    });

    return fileToDataUrl(blob || file);
  } catch (error) {
    return fileToDataUrl(file);
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function getReceiptAiCatalogContext() {
  return getCatalogItems()
    .slice(0, 160)
    .map((item) => ({
      name: item.name,
      category: item.category || "Ostatní",
      unit: item.unit || "ks",
      aliases: normalizeEanAliases(item.eanAliases)
        .map((alias) => alias.name)
        .filter(Boolean)
        .slice(0, 8)
    }));
}

function normalizeReceiptAiResult(data) {
  const rawItems = Array.isArray(data?.items)
    ? data.items
    : Array.isArray(data?.receipt?.items)
      ? data.receipt.items
      : [];
  const items = [];

  rawItems
    .map(normalizeReceiptAiItem)
    .filter(Boolean)
    .forEach((item) => mergeReceiptAiItem(items, item));

  return {
    items: items.slice(0, 80),
    skipped: Array.isArray(data?.skipped) ? data.skipped.map(tidyName).filter(Boolean) : [],
    provider: data?.provider || data?.model || "externí AI"
  };
}

function mergeReceiptAiItem(items, item) {
  const duplicate = items.find((currentItem) => {
    const sameProduct = normalize(currentItem.name) === normalize(item.name)
      && currentItem.unit === item.unit;
    const sameAmount = Math.abs((Number(currentItem.amount) || 0) - (Number(item.amount) || 0)) < 0.01;
    const samePrice = Math.abs((Number(currentItem.price) || 0) - (Number(item.price) || 0)) < 0.01;
    const sameLine = currentItem.sourceLine && item.sourceLine && normalize(currentItem.sourceLine) === normalize(item.sourceLine);

    return sameProduct && (sameLine || (sameAmount && samePrice));
  });

  if (duplicate) {
    duplicate.score = Math.max(duplicate.score || 0, item.score || 0);
    return;
  }

  mergeReceiptItem(items, item);
}

function normalizeReceiptAiItem(item) {
  const rawName = item?.name || item?.product || item?.title || "";
  const sourceLine = item?.sourceLine || item?.raw || rawName;
  const name = cleanReceiptProductName(rawName);
  const rawAmount = item?.amount ?? item?.quantity ?? item?.count ?? 1;
  const rawUnit = item?.unit || item?.measure || "ks";
  const normalized = normalizeImportAmountAndUnit(parseImportAmount(rawAmount) || 1, rawUnit);
  const price = parseOptionalPrice(item?.price ?? item?.totalPrice ?? item?.total ?? item?.amountPaid);
  const catalogItem = findCatalogItemByName(name);
  const finalName = catalogItem?.name || name;

  if (!finalName || normalize(finalName).length < 3) {
    return null;
  }

  if (isLikelyReceiptNonProductName(finalName, sourceLine)) {
    return null;
  }

  if (!Number.isFinite(price) && normalized.unit === "ks" && normalized.amount === 1 && !catalogItem) {
    return null;
  }

  return {
    name: finalName,
    amount: normalized.amount,
    unit: normalized.unit,
    category: catalogItem?.category || normalizeReceiptAiCategory(item?.category, finalName),
    price,
    score: 120,
    sourceName: "externí AI",
    sourceLine,
    strategy: "external-ai"
  };
}

function normalizeReceiptAiCategory(category, productName) {
  const cleanCategory = tidyName(category);
  const matchedCategory = DEFAULT_CATEGORIES.find((item) => normalize(item) === normalize(cleanCategory));

  return matchedCategory || inferCategoryFromName(productName);
}

function withTimeout(promise, timeoutMs, message) {
  let timeoutId = null;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(message)), timeoutMs);
  });

  return Promise.race([promise, timeout]).finally(() => {
    window.clearTimeout(timeoutId);
  });
}

async function recognizeReceiptText(file, onProgress = () => {}) {
  const variants = await createReceiptImageVariants(file);
  const variantsByKey = new Map(variants.map((variant) => [variant.key, variant]));
  const attempts = [];
  const plannedAttempts = RECEIPT_OCR_ATTEMPTS.slice(0, RECEIPT_MAX_OCR_ATTEMPTS);

  for (let index = 0; index < plannedAttempts.length; index += 1) {
    const plan = plannedAttempts[index];
    const variant = variantsByKey.get(plan.key) || variants[0] || { key: "original", label: "originál", blob: file };
    onProgress(`Rozpoznávám účtenku (${index + 1}/${plannedAttempts.length}): ${plan.label}...`);

    try {
      const { data } = await Tesseract.recognize(variant.blob || file, plan.language, {
        tessedit_pageseg_mode: plan.pageSegMode,
        preserve_interword_spaces: "1",
        user_defined_dpi: "300"
      });
      const text = data?.text || "";
      const preview = parseReceiptText(text, plan.label);
      attempts.push({
        key: plan.key,
        label: plan.label,
        text,
        confidence: Number(data?.confidence) || 0,
        parsedCount: preview.items.length,
        skippedCount: preview.skipped.length
      });
    } catch (error) {
      attempts.push({
        key: plan.key,
        label: plan.label,
        text: "",
        confidence: 0,
        parsedCount: 0,
        skippedCount: 0,
        error: true
      });
    }
  }

  if (!attempts.some((attempt) => tidyName(attempt.text))) {
    throw new Error("Receipt OCR did not return text.");
  }

  return {
    text: attempts.map((attempt) => attempt.text).filter(Boolean).join("\n"),
    attempts
  };
}

async function prepareReceiptImage(file) {
  try {
    const variants = await createReceiptImageVariants(file);
    return variants.find((variant) => variant.key === "threshold-hard")?.blob
      || variants.find((variant) => variant.key === "contrast")?.blob
      || file;
  } catch (error) {
    return file;
  }
}

async function createReceiptImageVariants(file) {
  const variants = [{ key: "original", label: "originál", blob: file }];

  try {
    const bitmap = await createImageBitmap(file);
    const baseCanvas = drawReceiptBaseCanvas(bitmap);
    const trimmedCanvas = cropReceiptCanvas(baseCanvas);
    const variantConfigs = [
      { key: "gray", label: "šedá verze", canvas: baseCanvas, options: { mode: "gray", contrast: 1.18, brightness: 8 } },
      { key: "contrast", label: "vyšší kontrast", canvas: baseCanvas, options: { mode: "gray", contrast: 1.62, brightness: 10 } },
      { key: "threshold-soft", label: "jemný práh", canvas: baseCanvas, options: { mode: "threshold", contrast: 1.28, brightness: 10, threshold: 146 } },
      { key: "threshold-hard", label: "ostrý práh", canvas: baseCanvas, options: { mode: "threshold", contrast: 1.72, brightness: 8, threshold: 172 } },
      { key: "trimmed", label: "oříznuté okraje", canvas: trimmedCanvas, options: { mode: "threshold", contrast: 1.55, brightness: 10, threshold: 160 } },
      { key: "inverted", label: "obrácené barvy", canvas: baseCanvas, options: { mode: "invert-threshold", contrast: 1.45, brightness: 0, threshold: 126 } }
    ];

    for (const config of variantConfigs) {
      const blob = await createReceiptVariantBlob(config.canvas, config.options);

      if (blob) {
        variants.push({ key: config.key, label: config.label, blob });
      }
    }

    bitmap.close?.();
  } catch (error) {
    return variants;
  }

  return variants;
}

function drawReceiptBaseCanvas(bitmap) {
  const maxSide = 2600;
  const minWidth = 1100;
  const scale = Math.min(
    maxSide / Math.max(bitmap.width, bitmap.height),
    Math.max(1, minWidth / Math.max(bitmap.width, 1))
  );
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return canvas;
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

  return canvas;
}

function cropReceiptCanvas(sourceCanvas) {
  if (sourceCanvas.width < 320 || sourceCanvas.height < 320) {
    return sourceCanvas;
  }

  const marginX = Math.round(sourceCanvas.width * 0.045);
  const marginY = Math.round(sourceCanvas.height * 0.015);
  const width = Math.max(1, sourceCanvas.width - (marginX * 2));
  const height = Math.max(1, sourceCanvas.height - (marginY * 2));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return sourceCanvas;
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(sourceCanvas, marginX, marginY, width, height, 0, 0, width, height);

  return canvas;
}

async function createReceiptVariantBlob(sourceCanvas, options = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = sourceCanvas.width;
  canvas.height = sourceCanvas.height;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return null;
  }

  context.drawImage(sourceCanvas, 0, 0);
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const threshold = options.threshold || getReceiptAverageThreshold(image.data);

  for (let index = 0; index < image.data.length; index += 4) {
    const red = image.data[index];
    const green = image.data[index + 1];
    const blue = image.data[index + 2];
    const gray = (red * 0.299) + (green * 0.587) + (blue * 0.114);
    const adjusted = clampReceiptPixel(((gray - 128) * (options.contrast || 1)) + 128 + (options.brightness || 0));
    let value = adjusted;

    if (options.mode === "threshold") {
      value = adjusted > threshold ? 255 : 0;
    }

    if (options.mode === "invert-threshold") {
      value = adjusted > threshold ? 0 : 255;
    }

    image.data[index] = value;
    image.data[index + 1] = value;
    image.data[index + 2] = value;
  }

  context.putImageData(image, 0, 0);
  return canvasToBlob(canvas);
}

function getReceiptAverageThreshold(data) {
  let total = 0;
  let count = 0;

  for (let index = 0; index < data.length; index += 16) {
    total += (data[index] * 0.299) + (data[index + 1] * 0.587) + (data[index + 2] * 0.114);
    count += 1;
  }

  return clampReceiptPixel((total / Math.max(count, 1)) - 12);
}

function clampReceiptPixel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function parseReceiptOcrAttempts(attempts) {
  const items = [];
  const skipped = new Map();
  let nextOrder = 0;

  attempts.forEach((attempt) => {
    const parsed = parseReceiptText(attempt.text, attempt.label);
    attempt.parsedCount = parsed.items.length;
    attempt.skippedCount = parsed.skipped.length;

    parsed.items.forEach((item) => {
      nextOrder = mergeReceiptAttemptItem(items, {
        ...item,
        sourceName: attempt.label,
        confidence: attempt.confidence
      }, nextOrder);
    });

    parsed.skipped.forEach((line) => {
      const key = normalize(line);

      if (key && !skipped.has(key)) {
        skipped.set(key, line);
      }
    });
  });

  return {
    items: items
      .filter((item) => (item.score || 0) >= 48)
      .sort((first, second) => (first.firstSeen || 0) - (second.firstSeen || 0))
      .slice(0, 80),
    skipped: [...skipped.values()].slice(0, 120)
  };
}

function parseReceiptText(text, sourceName = "OCR") {
  const items = [];
  const skipped = [];
  let lastItem = null;
  let nextOrder = 0;

  String(text || "")
    .split(/\r?\n/)
    .map(normalizeReceiptLine)
    .filter(Boolean)
    .forEach((line) => {
      const discount = parseReceiptDiscountLine(line);

      if (discount && lastItem) {
        applyReceiptDiscountToItem(lastItem, discount.amount);
        skipped.push(`${line} -> sleva odečtena od ${lastItem.name}`);
        return;
      }

      const parsed = parseReceiptProductLine(line, sourceName);

      if (parsed) {
        parsed.firstSeen = nextOrder;
        nextOrder += 1;
        lastItem = mergeReceiptItem(items, parsed);
      } else {
        skipped.push(line);
      }
    });

  return { items: items.slice(0, 80), skipped };
}

function formatReceiptItemsForImport(items) {
  return items
    .map((item) => {
      const base = `${item.name} ${formatAmount(item.amount)} ${item.unit}`;
      return Number.isFinite(Number(item.price)) && Number(item.price) > 0
        ? `${base} | ${formatPrice(item.price)}`
        : base;
    })
    .join("\n");
}

function parseReceiptDiscountLine(line) {
  const text = tidyName(line);

  if (!/\b(sleva|kupon|kup[oó]n|card|karta|clubcard|plus|věrnost|vernost|bonus|kaufland|lidl|tesco|billa)\b/iu.test(text)) {
    return null;
  }

  const match = text.match(/(-\s*\d[\d\s\u00a0]*(?:[,.]\d{1,2})?)\s*(?:kč|kc|czk)?\s*$/iu);

  if (!match) {
    return null;
  }

  const amount = parseReceiptSignedPrice(match[1]);

  if (!Number.isFinite(amount) || amount >= 0) {
    return null;
  }

  return {
    amount: Math.abs(amount)
  };
}

function parseReceiptSignedPrice(value) {
  const compact = String(value || "")
    .replace(/[\s\u00a0]/g, "")
    .replace(/[^\d,.-]/g, "")
    .trim();
  const commaIndex = compact.lastIndexOf(",");
  const dotIndex = compact.lastIndexOf(".");
  let normalized = compact;

  if (commaIndex > -1 && dotIndex > -1) {
    normalized = commaIndex > dotIndex
      ? compact.replace(/\./g, "").replace(",", ".")
      : compact.replace(/,/g, "");
  } else if (commaIndex > -1) {
    normalized = compact.replace(",", ".");
  }

  const price = Number(normalized);
  return Number.isFinite(price) ? roundAmount(price) : null;
}

function applyReceiptDiscountToItem(item, discount) {
  const price = Number(item.price);

  if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(discount) || discount <= 0) {
    return;
  }

  item.price = roundAmount(Math.max(0, price - discount));
  item.score = (item.score || 0) + 8;
  item.sourceLine = [item.sourceLine, `sleva -${formatPrice(discount)}`].filter(Boolean).join(" | ");
}

function parseReceiptProductLine(line, sourceName = "OCR") {
  if (isReceiptNoiseLine(line)) {
    return null;
  }

  const candidates = getReceiptLineCandidates(line, sourceName);

  return candidates[0] || null;
}

function getReceiptLineCandidates(line, sourceName = "OCR") {
  const parsers = [
    parseReceiptMultiplierLine,
    parseReceiptAmountFirstPriceLine,
    parseReceiptAmountPriceLine,
    parseReceiptPriceLine,
    parseReceiptImportLikeLine
  ];
  const candidates = parsers
    .flatMap((parser) => parser(line))
    .map((candidate) => normalizeReceiptCandidate(candidate, line, sourceName))
    .filter(Boolean)
    .sort((first, second) => second.score - first.score);
  const seen = new Set();

  return candidates.filter((candidate) => {
    const key = `${normalize(candidate.name)}|${candidate.amount}|${candidate.unit}|${candidate.price || ""}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function parseReceiptAmountPriceLine(line) {
  const priceInfo = extractReceiptTrailingPrice(line);

  if (!priceInfo) {
    return [];
  }

  const workLine = stripReceiptLineCodes(priceInfo.text);
  const withUnit = workLine.match(new RegExp(`^(.+?)\\s+(\\d[\\d\\s\\u00a0]*(?:[,.]\\d+)?)\\s*(${RECEIPT_UNIT_PATTERN})\\b(?:\\s|$)`, "iu"));

  if (withUnit) {
    return [{
      name: withUnit[1],
      amount: withUnit[2],
      unit: withUnit[3],
      price: priceInfo.price,
      strategy: "amount-price"
    }];
  }

  const withoutUnit = workLine.match(/^(.+?)\s+(\d{1,3}(?:[,.]\d+)?)$/u);

  if (withoutUnit) {
    return [{
      name: withoutUnit[1],
      amount: withoutUnit[2],
      unit: "ks",
      price: priceInfo.price,
      strategy: "amount-price"
    }];
  }

  return [{
    name: workLine,
    amount: 1,
    unit: "ks",
    price: priceInfo.price,
    strategy: "price-only"
  }];
}

function parseReceiptAmountFirstPriceLine(line) {
  const priceInfo = extractReceiptTrailingPrice(line);

  if (!priceInfo) {
    return [];
  }

  const workLine = stripReceiptLineCodes(priceInfo.text);
  const match = workLine.match(new RegExp(`^(\\d[\\d\\s\\u00a0]*(?:[,.]\\d+)?)\\s*(${RECEIPT_UNIT_PATTERN})?\\s+(.+)$`, "iu"));

  if (!match) {
    return [];
  }

  return [{
    name: match[3],
    amount: match[1],
    unit: match[2] || "ks",
    price: priceInfo.price,
    strategy: "amount-first"
  }];
}

function parseReceiptMultiplierLine(line) {
  const priceInfo = extractReceiptTrailingPrice(line);
  const workLine = stripReceiptLineCodes(priceInfo?.text || line);
  const match = workLine.match(/^(.+?)\s+(\d+(?:[,.]\d+)?)\s*[x×]\s*(?:\d+(?:[,.]\d{1,2})\s*(?:kč|kc|czk)?)?$/iu);

  if (!match) {
    return [];
  }

  return [{
    name: match[1],
    amount: match[2],
    unit: "ks",
    price: priceInfo?.price || null,
    strategy: "multiplier"
  }];
}

function parseReceiptPriceLine(line) {
  const priceInfo = extractReceiptTrailingPrice(line);

  if (!priceInfo) {
    return [];
  }

  const quantity = inferReceiptQuantity(line);

  return [{
    name: stripReceiptLineCodes(priceInfo.text),
    amount: quantity.amount,
    unit: quantity.unit,
    price: priceInfo.price,
    strategy: "price-line"
  }];
}

function parseReceiptImportLikeLine(line) {
  const priceInfo = extractReceiptTrailingPrice(line);
  const normalizedLine = line
    .replace(/\b(\d+(?:[,.]\d+)?)\s*[x×]\s*(\d+(?:[,.]\d{1,2})\s*(?:kč|kc|czk)?)\b/iu, "$1 ks | $2")
    .replace(/\s+\d+(?:[,.]\d{1,2})\s*(?:kč|kc|czk)?\s*$/iu, "");
  const parsed = parseImportLine(priceInfo?.price ? `${normalizedLine} | ${formatPrice(priceInfo.price)}` : normalizedLine);

  if (!parsed) {
    return [];
  }

  return [{
    name: parsed.name,
    amount: parsed.amount,
    unit: parsed.unit,
    price: parsed.price || priceInfo?.price || null,
    strategy: "import-like"
  }];
}

function normalizeReceiptCandidate(candidate, line, sourceName) {
  if (!candidate) {
    return null;
  }

  const normalized = normalizeImportAmountAndUnit(parseImportAmount(candidate.amount) || 1, candidate.unit || "ks");
  const name = cleanReceiptProductName(candidate.name);
  const price = Number.isFinite(Number(candidate.price)) ? roundAmount(Number(candidate.price)) : null;
  const hasPrice = Number.isFinite(price) && price > 0;
  const catalogItem = findCatalogItemByName(name);

  if (!name || normalize(name).length < 3) {
    return null;
  }

  if (!hasPrice && !hasReceiptItemSignal(line) && !catalogItem) {
    return null;
  }

  if (isLikelyReceiptNonProductName(name, line)) {
    return null;
  }

  const finalName = catalogItem?.name || name;
  const score = scoreReceiptCandidate({
    name: finalName,
    amount: normalized.amount,
    unit: normalized.unit,
    price,
    strategy: candidate.strategy,
    catalogItem
  }, line);

  return {
    name: finalName,
    amount: normalized.amount,
    unit: normalized.unit,
    category: catalogItem?.category || inferCategoryFromName(finalName),
    price,
    score,
    sourceName,
    sourceLine: line,
    strategy: candidate.strategy
  };
}

function scoreReceiptCandidate(candidate, line) {
  const normalizedName = normalize(candidate.name);
  let score = Math.min(30, normalizedName.length * 2);

  if (candidate.catalogItem) {
    score += 18;
  }

  if (Number.isFinite(candidate.amount) && candidate.amount > 0) {
    score += 12;
  }

  if (candidate.unit) {
    score += 8;
  }

  if (Number.isFinite(candidate.price) && candidate.price > 0) {
    score += 30;
  }

  if (["amount-price", "amount-first"].includes(candidate.strategy)) {
    score += 12;
  }

  if (candidate.strategy === "multiplier") {
    score += 24;
  }

  if (normalizedName.split(" ").length > 1) {
    score += 4;
  }

  if (candidate.amount > 10000 || candidate.price > 100000) {
    score -= 18;
  }

  if (/\b(ean|plu|dph|total|celkem|suma|sleva)\b/iu.test(line)) {
    score -= 20;
  }

  return score;
}

function inferReceiptQuantity(line) {
  const quantityMatch = line.match(new RegExp(`\\b(\\d+(?:[,.]\\d+)?)\\s*(${RECEIPT_UNIT_PATTERN})\\b`, "iu"));

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

function extractReceiptTrailingPrice(line) {
  const text = tidyName(line);
  const match = text.match(/^(.*?)\s+(-?\d[\d\s\u00a0]*(?:[,.]\d{1,2})?)\s*(kč|kc|czk)?\s*(?:[a-z])?$/iu);

  if (!match) {
    return null;
  }

  const rawPrice = match[2].replace(/[\s\u00a0]/g, "");
  const hasCurrency = Boolean(match[3]);
  const hasDecimal = /[,.]\d{1,2}$/.test(rawPrice);

  if (!hasCurrency && !hasDecimal) {
    return null;
  }

  const price = parseOptionalPrice(rawPrice);

  if (!Number.isFinite(price) || price <= 0 || price > 100000) {
    return null;
  }

  return {
    text: tidyName(match[1]),
    price
  };
}

function stripReceiptLineCodes(value) {
  return tidyName(String(value || "")
    .replace(/^\s*(?:[a-z]?\d{3,}\s+)+/iu, " ")
    .replace(/\b(plu|ean)\s*\d+\b/iu, " "));
}

function cleanReceiptProductName(value) {
  const text = tidyName(String(value || "")
    .replace(new RegExp(`\\b\\d+(?:[,.]\\d+)?\\s*${RECEIPT_UNIT_PATTERN}\\b`, "igu"), " ")
    .replace(/\b\d+(?:[,.]\d+)?\s*[x×]\s*\d+(?:[,.]\d+)?\b/igu, " ")
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
    existing.price = mergeReceiptPrices(existing.price, item.price);
    existing.score = Math.max(existing.score || 0, item.score || 0) + 4;
    existing.sourceLine = [existing.sourceLine, item.sourceLine].filter(Boolean).join(" | ");
    return existing;
  }

  items.push(item);
  return item;
}

function mergeReceiptAttemptItem(items, item, nextOrder) {
  const existing = items.find((currentItem) => {
    return normalize(currentItem.name) === normalize(item.name)
      && currentItem.unit === item.unit;
  });

  if (!existing) {
    items.push({
      ...item,
      firstSeen: nextOrder,
      sources: item.sourceName ? [item.sourceName] : [],
      support: 1,
      bestScore: item.score || 0
    });
    return nextOrder + 1;
  }

  const sources = new Set([...(existing.sources || []), item.sourceName].filter(Boolean));
  const itemHasPrice = Number.isFinite(Number(item.price)) && Number(item.price) > 0;
  const existingHasPrice = Number.isFinite(Number(existing.price)) && Number(existing.price) > 0;
  const bestScore = Math.max(existing.bestScore || 0, item.score || 0);
  const shouldReplace = (item.score || 0) > (existing.bestScore || existing.score || 0) + 4
    || (itemHasPrice && !existingHasPrice)
    || (item.amount > existing.amount && (item.score || 0) >= (existing.bestScore || 0) - 5);

  if (shouldReplace) {
    existing.name = item.name;
    existing.amount = item.amount;
    existing.unit = item.unit;
    existing.category = item.category;
    existing.price = item.price;
    existing.sourceLine = item.sourceLine;
    existing.strategy = item.strategy;
  }

  existing.sources = [...sources];
  existing.support = (existing.support || 1) + 1;
  existing.bestScore = bestScore;
  existing.score = bestScore + Math.min(18, existing.support * 3);
  existing.confidence = Math.max(existing.confidence || 0, item.confidence || 0);

  return nextOrder;
}

function mergeReceiptPrices(firstPrice, secondPrice) {
  const first = Number(firstPrice);
  const second = Number(secondPrice);

  if (Number.isFinite(first) && first > 0 && Number.isFinite(second) && second > 0) {
    return roundAmount(first + second);
  }

  if (Number.isFinite(first) && first > 0) {
    return roundAmount(first);
  }

  if (Number.isFinite(second) && second > 0) {
    return roundAmount(second);
  }

  return null;
}

function isReceiptNoiseLine(line) {
  const normalizedLine = tidyName(line);

  if (normalizedLine.length < 3) {
    return true;
  }

  if (RECEIPT_SKIP_PATTERNS.some((pattern) => pattern.test(normalizedLine))) {
    return true;
  }

  return isReceiptHeaderOrAddressLine(normalizedLine) && !hasReceiptItemSignal(normalizedLine);
}

function isLikelyReceiptNonProductName(name, line = "") {
  const normalizedName = tidyName(name);
  const normalizedLine = tidyName(line);
  const category = inferCategoryFromName(normalizedName);

  if (RECEIPT_SKIP_PATTERNS.some((pattern) => pattern.test(normalizedName))) {
    return true;
  }

  if (isReceiptHeaderOrAddressLine(normalizedName) && category === "Ostatní") {
    return true;
  }

  if (isReceiptHeaderOrAddressLine(normalizedLine) && !hasReceiptItemSignal(normalizedLine)) {
    return true;
  }

  return isLikelyReceiptGibberishName(normalizedName);
}

function isReceiptHeaderOrAddressLine(line) {
  const normalizedLine = tidyName(line);
  return RECEIPT_HEADER_PATTERNS.some((pattern) => pattern.test(normalizedLine));
}

function hasReceiptItemSignal(line) {
  const text = tidyName(line);
  const unitPattern = new RegExp(`\\b\\d+(?:[,.]\\d+)?\\s*${RECEIPT_UNIT_PATTERN}\\b`, "iu");

  return Boolean(
    extractReceiptTrailingPrice(text)
    || unitPattern.test(text)
    || /\b\d+(?:[,.]\d+)?\s*[x×]\s*\d+(?:[,.]\d+)?/iu.test(text)
  );
}

function isLikelyReceiptGibberishName(name) {
  const normalizedName = normalize(name);

  if (!normalizedName) {
    return true;
  }

  const letters = (normalizedName.match(/\p{L}/gu) || []).length;
  const digits = (normalizedName.match(/\d/g) || []).length;
  const words = normalizedName.split(/\s+/).filter(Boolean);

  if (letters < 3) {
    return true;
  }

  if (digits > letters && digits > 3) {
    return true;
  }

  if (words.length > 8 && inferCategoryFromName(name) === "Ostatní") {
    return true;
  }

  return false;
}

function normalizeReceiptLine(line) {
  return tidyName(String(line || "")
    .replace(/[|*_~[\]{}]/g, " ")
    .replace(/[€$]/g, " Kč")
    .replace(/[×]/g, "x")
    .replace(/\bO(?=\d)/g, "0")
    .replace(/(?<=\d)[Oo](?=\d)/g, "0")
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
  const targetListId = item.listId || activeListId || "";
  const nextEans = normalizeEanList(item.eans || item.ean);
  const nextAliases = normalizeEanAliases(item.eanAliases);
  const nextName = normalize(item.name);
  const nextAliasNames = nextAliases.map((alias) => normalize(alias.name)).filter(Boolean);

  if (nextEans.length || nextAliasNames.length) {
    catalogItems.forEach((currentItem) => {
      const currentListId = currentItem.listId || "";
      const sameItem = (item.id && currentItem.id === item.id)
        || (normalize(currentItem.name) === nextName && currentListId === targetListId);

      if (sameItem || currentListId !== targetListId) {
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
    const currentListId = currentItem.listId || "";
    return (item.id && currentItem.id === item.id)
      || (normalize(currentItem.name) === nextName && currentListId === targetListId);
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
    existing.listId = targetListId;
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
    listId: targetListId,
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

  catalogItems
    .filter((item) => !item.listId || item.listId === activeListId)
    .forEach((item) => {
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

  combos.filter(isComboForActiveList).forEach((combo) => {
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
    listId: list?.id || activeListId || "",
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
  const filteredSettingsHistory = getFilteredSettingsHistory();
  const filteredSettingsLog = getFilteredSettingsLogHistory();
  const visibleHistory = filteredHistory.filter(isInventoryHistoryEntry);
  renderPriceStats(filteredSettingsHistory);
  renderStatsDashboard(filteredSettingsHistory);
  renderSettingsLog(filteredSettingsLog);

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
    cards.push(createInsightCard(
      "Pohyby podle akce",
      "Rychle ukáže, jestli zásoby spíš přibývají, mizí, nebo se jen ručně dorovnávají.",
      createActionMix(stats),
      "teal"
    ));
  }

  if (metrics.includes("spend")) {
    cards.push(createInsightCard(
      "Útrata v čase",
      "Dny s nákupní cenou. Hodí se na hledání dražších nákupních špiček.",
      createBarList(stats.spendByDay, { formatter: formatPrice, tone: "green" }),
      "green",
      true
    ));
  }

  if (metrics.includes("consumed")) {
    cards.push(createInsightCard(
      "Přidané položky",
      "Co se nejčastěji navyšovalo v lednici.",
      createBarList(stats.addedByProduct, { formatter: formatAmount, tone: "blue" }),
      "blue"
    ));
    cards.push(createInsightCard(
      "Odečteno / projezeno",
      "Co ze zásob mizí nejvíc podle zapsaného množství.",
      createBarList(stats.consumedByProduct, { formatter: formatAmount, tone: "red" }),
      "red"
    ));
  }

  if (metrics.includes("topProducts")) {
    cards.push(createInsightCard(
      "Top produkty podle změn",
      "Nejaktivnější položky bez ohledu na typ akce.",
      createBarList(stats.topProducts, { formatter: (value) => `${formatAmount(value)}x`, tone: "violet" }),
      "violet"
    ));
  }

  if (metrics.includes("avgPrice")) {
    cards.push(createInsightCard(
      "Průměrná cena za produkt",
      "Jen položky, u kterých byla vyplněná cena.",
      createBarList(stats.avgPriceByProduct, { formatter: formatPrice, tone: "amber" }),
      "amber"
    ));
  }

  if (metrics.includes("categories")) {
    const categoryContent = document.createElement("div");
    categoryContent.className = "stats-compact-visual";
    categoryContent.append(
      createPieChart(stats.categoryActivity, { formatter: (value) => `${formatAmount(value)} změn` }),
      createBarList(stats.categoryActivity, { formatter: (value) => `${formatAmount(value)} změn`, tone: "cyan" })
    );
    cards.push(createInsightCard(
      "Kategorie podle aktivity",
      "Souhrn změn podle kategorií.",
      categoryContent,
      "cyan"
    ));
  }

  if (!cards.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "Vyber aspoň jednu metriku.";
    statsGrid.append(empty);
    return;
  }

  cards.forEach((card) => statsGrid.append(card));
}

function buildStatsModel(entries) {
  const countByDay = new Map();
  const spendByDay = new Map();
  const actionCounts = new Map();
  const productCounts = new Map();
  const productPriceTotals = new Map();
  const productPriceCounts = new Map();
  const addedByProduct = new Map();
  const consumedByProduct = new Map();
  const categoryActivity = new Map();
  let totalSpend = 0;
  let purchaseCount = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  let neutralCount = 0;

  entries.forEach((entry) => {
    const day = getHistoryEventDate(entry);
    const product = entry.product || getProductNameFromHistoryText(entry.text) || "Ostatní";
    const category = getStatsCategory(entry, product);
    const actionLabel = getStatsActionLabel(entry);
    const price = Number(entry.price);
    const amount = Number(entry.amount);

    incrementMap(countByDay, day, 1);
    incrementMap(actionCounts, actionLabel, 1);
    incrementMap(productCounts, product, 1);
    incrementMap(categoryActivity, category, 1);

    if (Number.isFinite(price) && price > 0) {
      incrementMap(spendByDay, day, price);
      incrementMap(productPriceTotals, product, price);
      incrementMap(productPriceCounts, product, 1);
      totalSpend += price;
      purchaseCount += 1;
    }

    if (isPositiveInventoryAction(entry.action)) {
      positiveCount += 1;

      if (Number.isFinite(amount) && amount > 0) {
        incrementMap(addedByProduct, getStatsProductUnitLabel(product, entry.unit), amount);
      }
    } else if (isNegativeInventoryAction(entry.action)) {
      negativeCount += 1;

      if (Number.isFinite(amount) && amount > 0) {
        incrementMap(consumedByProduct, getStatsProductUnitLabel(product, entry.unit), amount);
      }
    } else {
      neutralCount += 1;
    }
  });

  return {
    summary: {
      totalEntries: entries.length,
      totalSpend: roundAmount(totalSpend),
      purchaseCount,
      averagePurchase: purchaseCount ? roundAmount(totalSpend / purchaseCount) : 0,
      positiveCount,
      negativeCount,
      neutralCount
    },
    countByDay: mapToDateRows(countByDay, 12),
    spendByDay: mapToDateRows(spendByDay, 12),
    actionMix: mapActionRows(actionCounts),
    addedByProduct: mapToChartRows(addedByProduct, 8),
    avgPriceByProduct: [...productPriceTotals.entries()]
      .map(([product, total]) => [product, roundAmount(total / (productPriceCounts.get(product) || 1))])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8),
    consumedByProduct: mapToChartRows(consumedByProduct, 8),
    topProducts: mapToChartRows(productCounts, 8),
    categoryActivity: mapToChartRows(categoryActivity, 8)
  };
}

function isPositiveInventoryAction(action) {
  return ["purchase", "gift", "adjustPlus", "add"].includes(action);
}

function isNegativeInventoryAction(action) {
  return ["eaten", "discarded", "adjustMinus", "subtract"].includes(action);
}

function getStatsActionLabel(entry) {
  if (entry.action) {
    return getActionLabel(entry.action);
  }

  const labels = {
    shopping: "Nákupní list",
    catalog: "Číselník",
    combo: "Kombinace",
    list: "Seznam"
  };

  return labels[entry.type] || "Ostatní";
}

function getStatsProductUnitLabel(product, unit) {
  return `${product}${unit ? ` (${unit})` : ""}`;
}

function getStatsCategory(entry, product) {
  const catalogItem = findCatalogItemByName(product);
  const pantryItem = findItemByName(product);
  return catalogItem?.category || pantryItem?.category || inferCategoryFromName(product) || "Ostatní";
}

function incrementMap(map, key, amount) {
  map.set(key, roundAmount((map.get(key) || 0) + amount));
}

function mapToDateRows(map, limit) {
  return [...map.entries()]
    .filter(([, value]) => Number(value) > 0)
    .sort((a, b) => String(a[0]).localeCompare(String(b[0]), "cs"))
    .slice(-limit);
}

function mapToChartRows(map, limit) {
  return [...map.entries()]
    .filter(([, value]) => Number(value) > 0)
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "cs"))
    .slice(0, limit);
}

function mapActionRows(map) {
  const order = ["Snězeno", "Nákup", "Korekce +", "Korekce -", "Dar", "Vyhozeno", "Nastavit", "Nákupní list", "Číselník", "Kombinace", "Seznam", "Ostatní"];
  const used = new Set(order);
  const orderedRows = order
    .map((label) => [label, map.get(label) || 0])
    .filter(([, value]) => value > 0);
  const extraRows = [...map.entries()]
    .filter(([label, value]) => !used.has(label) && value > 0)
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "cs"));

  return [...orderedRows, ...extraRows];
}

function getProductNameFromHistoryText(text) {
  const match = String(text || "").match(/:\s*([^,+.-]+?)(?:\s+[+-]?\d|,|\.|$)/u);
  return match ? tidyName(match[1]) : "";
}

function createInsightCard(title, subtitle, content, tone = "teal", wide = false) {
  const card = document.createElement("article");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");

  card.className = `stats-card stats-card-${tone}${wide ? " stats-card-wide" : ""}`;
  heading.textContent = title;
  copy.textContent = subtitle;
  card.append(heading, copy, content);
  return card;
}

function createActionMix(stats) {
  const wrapper = document.createElement("div");
  const pills = document.createElement("div");
  const summary = document.createElement("div");
  const total = Math.max(1, stats.summary.totalEntries);

  wrapper.className = "stats-action-mix";
  pills.className = "stats-action-pills";
  summary.className = "stats-action-summary";

  [
    ["Přibylo", stats.summary.positiveCount, "positive"],
    ["Ubylo", stats.summary.negativeCount, "negative"],
    ["Neutrální", stats.summary.neutralCount, "neutral"]
  ].forEach(([label, value, tone]) => {
    const pill = document.createElement("div");
    pill.className = `stats-action-pill is-${tone}`;
    pill.innerHTML = `<span>${label}</span><strong>${formatAmount(value)}</strong><small>${formatAmount(roundAmount((value / total) * 100))} %</small>`;
    pills.append(pill);
  });

  summary.append(createPieChart(stats.actionMix, { formatter: (value) => `${formatAmount(value)}x` }));
  summary.append(createBarList(stats.actionMix, { formatter: (value) => `${formatAmount(value)}x`, tone: "teal" }));
  wrapper.append(pills, summary);
  return wrapper;
}

function createPieChart(rows, options = {}) {
  const formatter = options.formatter || formatAmount;
  const wrapper = document.createElement("div");
  const pie = document.createElement("div");
  const legend = document.createElement("div");
  const colors = ["#14a36f", "#2f80ed", "#f59e0b", "#ef4444", "#7c3aed", "#0891b2"];
  const total = rows.reduce((sum, [, value]) => sum + Number(value || 0), 0);
  let cursor = 0;

  wrapper.className = "stat-pie-wrap";
  pie.className = "stat-pie";
  legend.className = "stat-pie-legend";

  if (!rows.length || total <= 0) {
    pie.style.background = "var(--soft-line)";
    legend.textContent = "Bez dat";
    wrapper.append(pie, legend);
    return wrapper;
  }

  const gradient = rows.map(([label, value], index) => {
    const start = cursor;
    const end = cursor + (Number(value) / total) * 100;
    cursor = end;
    return `${colors[index % colors.length]} ${start}% ${end}%`;
  }).join(", ");

  pie.style.background = `conic-gradient(${gradient})`;
  rows.slice(0, 5).forEach(([label, value], index) => {
    const item = document.createElement("span");
    const dot = document.createElement("i");
    dot.style.background = colors[index % colors.length];
    item.append(dot, document.createTextNode(`${label}: ${formatter(value)}`));
    legend.append(item);
  });

  wrapper.append(pie, legend);
  return wrapper;
}

function createBarList(rows, options = {}) {
  const formatter = options.formatter || formatAmount;
  const tone = options.tone || "teal";
  const wrapper = document.createElement("div");
  const max = Math.max(1, ...rows.map(([, value]) => Number(value)));

  wrapper.className = `stat-bars stat-bars-${tone}`;

  if (!rows.length) {
    const empty = document.createElement("p");
    empty.className = "stat-empty";
    empty.textContent = "Bez dat pro vybrané období.";
    wrapper.append(empty);
    return wrapper;
  }

  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    const top = document.createElement("div");
    const name = document.createElement("span");
    const number = document.createElement("strong");
    const track = document.createElement("div");
    const fill = document.createElement("span");

    row.className = "stat-bar-row";
    top.className = "stat-bar-top";
    track.className = "stat-bar-track";
    fill.className = "stat-bar-fill";
    fill.style.width = `${Math.max(4, Math.round((Number(value) / max) * 100))}%`;
    name.textContent = label;
    number.textContent = formatter(value);
    top.append(name, number);
    track.append(fill);
    row.append(top, track);
    wrapper.append(row);
  });

  return wrapper;
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
  const entries = getFilteredSettingsHistory();
  const metrics = getSelectedStatsMetrics();
  const stats = buildStatsModel(entries);
  const sections = [];

  if (metrics.includes("count")) {
    sections.push(getExportSection("Pohyby podle akce", createBarChart("Pohyby podle akce", stats.actionMix, "x"), ["Akce", "Počet"], stats.actionMix));
  }

  if (metrics.includes("spend")) {
    sections.push(getExportSection("Celková útrata", createBarChart("Útrata podle dne", stats.spendByDay, "Kč"), ["Den", "Útrata"], stats.spendByDay, formatPrice));
  }

  if (metrics.includes("consumed")) {
    sections.push(getExportSection("Přidané položky", createBarChart("Přidané položky", stats.addedByProduct, "jedn."), ["Produkt", "Množství"], stats.addedByProduct));
    sections.push(getExportSection("Projezeno / odečteno", createBarChart("Odečtené množství", stats.consumedByProduct, "jedn."), ["Produkt", "Množství"], stats.consumedByProduct));
  }

  if (metrics.includes("topProducts")) {
    sections.push(getExportSection("Top produkty podle změn", createBarChart("Top produkty", stats.topProducts, "ks"), ["Produkt", "Počet"], stats.topProducts));
  }

  if (metrics.includes("avgPrice")) {
    sections.push(getExportSection("Průměrná cena za produkt", createBarChart("Průměrná cena", stats.avgPriceByProduct, "Kč"), ["Produkt", "Průměr"], stats.avgPriceByProduct, formatPrice));
  }

  if (metrics.includes("categories")) {
    sections.push(getExportSection("Kategorie podle aktivity", createBarChart("Kategorie", stats.categoryActivity, "změn"), ["Kategorie", "Změny"], stats.categoryActivity));
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

function handleSettingsHistoryFilterChange() {
  settingsDateFrom.value = "";
  settingsDateTo.value = "";
  renderHistory();
}

function handleSettingsLogFilterChange() {
  settingsLogDateFrom.value = "";
  settingsLogDateTo.value = "";
  renderHistory();
}

function getFilteredHistory() {
  return getHistoryEntriesForRange(getHistoryFilterRange());
}

function getFilteredSettingsHistory() {
  return getHistoryEntriesForRange(getSettingsHistoryFilterRange());
}

function getFilteredSettingsLogHistory() {
  return getHistoryEntriesForRange(getSettingsLogHistoryFilterRange());
}

function getHistoryEntriesForRange(range) {
  return history.filter((entry) => {
    const eventDate = getHistoryEventDate(entry);

    if (!isHistoryEntryForActiveList(entry)) {
      return false;
    }

    if (!range.from && !range.to) {
      return true;
    }

    return (!range.from || eventDate >= range.from) && (!range.to || eventDate <= range.to);
  });
}

function isHistoryEntryForActiveList(entry) {
  if (entry.listId) {
    return entry.listId === activeListId;
  }

  if (entry.listName) {
    return normalize(entry.listName) === normalize(getDisplayListName(getActiveList()));
  }

  return true;
}

function getHistoryFilterRange() {
  return getHistoryFilterRangeFromControls(historyPeriodFilter, historyDateFrom, historyDateTo);
}

function getSettingsHistoryFilterRange() {
  return getHistoryFilterRangeFromControls(settingsPeriodFilter, settingsDateFrom, settingsDateTo);
}

function getSettingsLogHistoryFilterRange() {
  return getHistoryFilterRangeFromControls(settingsLogPeriodFilter, settingsLogDateFrom, settingsLogDateTo);
}

function getHistoryFilterRangeFromControls(periodInput, fromInput, toInput) {
  const today = getLocalDateValue(new Date());
  const period = periodInput?.value || "";

  if (fromInput?.value || toInput?.value) {
    return {
      from: fromInput?.value || "",
      to: toInput?.value || ""
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

  const stats = buildStatsModel(entries);
  const items = [
    ["Utraceno", formatPrice(stats.summary.totalSpend), "Součet zadaných nákupních cen", "spend"],
    ["Záznamů", formatAmount(stats.summary.totalEntries), "Počet změn ve vybraném období", "count"],
    ["Nákupů s cenou", formatAmount(stats.summary.purchaseCount), "Kolikrát byla vyplněná cena", "purchase"],
    ["Průměr za nákup", formatPrice(stats.summary.averagePurchase), "Průměr jen z nákupů s cenou", "average"],
    ["Přidáno", formatAmount(stats.summary.positiveCount), "Nákup, dar a korekce +", "positive"],
    ["Odebráno", formatAmount(stats.summary.negativeCount), "Snězeno, vyhozeno a korekce -", "negative"]
  ];

  priceStats.replaceChildren();

  items.forEach(([label, value, detail, tone]) => {
    const card = document.createElement("div");
    card.className = `stats-kpi stats-kpi-${tone}`;
    card.innerHTML = `<span>${label}</span><strong>${value}</strong><small>${detail}</small>`;
    priceStats.append(card);
  });
}

function resetForm() {
  editingId = null;
  form.reset();
  setDefaultEventDate();
  unlockEntryProductMeta();
  setActionState("eaten");
  setActionButtonsDisabled(false);
  updateSubmitButtonText();
  syncEntryProductInfo();
  updateEntryTabOrder();
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
    updateEntryTabOrder();
    return;
  }

  categoryInput.value = item.category || "Ostatní";
  unitSelect.value = item.unit || "ks";
  categoryInput.readOnly = true;
  unitSelect.disabled = true;
  categoryInput.closest(".field")?.classList.add("is-locked");
  unitSelect.closest(".field")?.classList.add("is-locked");
  updateEntryTabOrder();
}

function unlockEntryProductMeta() {
  categoryInput.readOnly = false;
  unitSelect.disabled = false;
  categoryInput.closest(".field")?.classList.remove("is-locked");
  unitSelect.closest(".field")?.classList.remove("is-locked");
}

function syncEntryProductInfo() {
  const name = productInput.value;
  const combo = findComboByName(name);
  const stockedItem = findItemByName(name);
  const catalogItem = findCatalogItemByName(name);
  let info = "";

  if (combo) {
    info = `kombinace ${combo.items.length} položek`;
  } else if (stockedItem) {
    info = `v lednici ${formatAmountWithUnit(stockedItem.amount, stockedItem.unit)}`;
  } else if (catalogItem) {
    info = `v číselníku ${catalogItem.unit || "ks"}`;
  } else if (name) {
    info = "nová položka";
  }

  if (productFieldLabel) {
    productFieldLabel.textContent = info ? `Potravina · ${info}` : "Potravina";
  }

  if (entryStockInfo) {
    entryStockInfo.textContent = info;
    entryStockInfo.hidden = true;
  }

  updateActionAvailability();
}

function updateEntryTabOrder() {
  const hasCatalogItem = Boolean(findCatalogItemByName(productInput.value) || findItemByName(productInput.value) || findComboByName(productInput.value));
  const priceVisible = !priceInput.disabled;
  const order = hasCatalogItem
    ? [productInput, actionComboInput, amountInput, priceVisible ? priceInput : null, eventDateInput, submitButton]
    : [productInput, categoryInput, actionComboInput, amountInput, unitSelect, priceVisible ? priceInput : null, eventDateInput, submitButton];

  [productInput, categoryInput, actionComboInput, amountInput, unitSelect, priceInput, eventDateInput, submitButton]
    .forEach((element) => {
      if (element) {
        element.tabIndex = -1;
      }
    });

  order.filter(Boolean).forEach((element, index) => {
    element.tabIndex = index + 1;
  });
}

function isNegativeEntryAction(action = actionSelect.value) {
  return NEGATIVE_ENTRY_ACTIONS.has(action);
}

function isEntryActionAvailable(action) {
  return !isNegativeEntryAction(action) || Boolean(findItemByName(productInput.value));
}

function updateActionAvailability() {
  const currentAvailable = isEntryActionAvailable(actionSelect.value);

  [...actionSelect.options].forEach((option) => {
    option.disabled = !isEntryActionAvailable(option.value);
  });

  if (!currentAvailable) {
    setActionState("purchase");
  }
}

function getMaxAmountForNegativeAction(name, unit, action = actionSelect.value) {
  if (!isNegativeEntryAction(action)) {
    return Number.NaN;
  }

  const item = findItemByName(name);

  if (!item || item.unit !== unit) {
    return Number.NaN;
  }

  return roundAmount(item.amount);
}

function clampAmountToAvailableStock() {
  const name = formatProductName(productInput.value);
  const unit = findItemByName(name)?.unit || unitSelect.value;
  const maxAmount = getMaxAmountForNegativeAction(name, unit);
  const amount = Number(amountInput.value);

  if (Number.isFinite(maxAmount)) {
    amountInput.max = String(maxAmount);
  } else {
    amountInput.removeAttribute("max");
  }

  if (Number.isFinite(maxAmount) && Number.isFinite(amount) && amount > maxAmount) {
    amountInput.value = formatFormNumber(maxAmount);
    showMessage(`V lednici je jen ${formatAmountWithUnit(maxAmount, unit)}.`, true);
  }
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("is-error", isError);
}

function setActionState(action) {
  if (isNegativeEntryAction(action) && !findItemByName(productInput.value)) {
    action = "purchase";
  }

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
  updateAmountInputBounds();
  updateSubmitButtonText();
  syncEntryProductInfo();
  updateEntryTabOrder();
}

function updateAmountInputBounds() {
  amountInput.min = actionSelect.value === "set" ? "0" : "0.01";
}

function updatePriceInputLock() {
  if (!priceInput) {
    return;
  }

  const visible = actionSelect.value === "purchase";

  priceInput.disabled = !visible;
  priceInput.closest(".field")?.toggleAttribute("hidden", !visible);
  form.classList.toggle("is-price-hidden", !visible);

  if (!visible) {
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
  const min = actionSelect.value === "set" ? 0 : 1;
  const base = direction > 0 ? Math.floor(currentValue) : Math.ceil(currentValue);
  const next = Number.isFinite(currentValue) && currentValue >= min
    ? Math.max(min, base + direction)
    : min || 1;

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

  return combos.find((combo) => isComboForActiveList(combo) && normalize(combo.name) === normalizedName) || null;
}

function isComboForActiveList(combo) {
  return !combo.listId || combo.listId === activeListId;
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

function ensureCatalogItemFromEntry({ name, category, unit }) {
  const cleanName = formatProductName(name);

  if (!cleanName || findCatalogItemByName(cleanName)) {
    return;
  }

  catalogItems.unshift({
    id: createId(),
    name: cleanName,
    category: tidyName(category) || inferCategoryFromName(cleanName) || "Ostatní",
    unit: normalizeImportUnit(unit || "ks"),
    listId: activeListId,
    ean: "",
    eans: [],
    eanAliases: []
  });
  renderProductOptions();
  renderCategoryOptions();
  renderCatalog();
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
