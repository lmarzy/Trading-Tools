const AUTH_STORAGE_KEY = "trade-tools:unlocked";
const AUTH_LABEL_KEY = "trade-tools:unlocked-label";
const AUTH_EMAIL_KEY = "trade-tools:unlocked-email";
const AUTH_ROLE_KEY = "trade-tools:unlocked-role";
const AUTH_HASH_KEY = "trade-tools:unlocked-passcode-hash";
const TABLE_PAGE_SIZE = 10;
const PASSCODE_SALT = "trade-tools-v1";
const PASSCODE_CHARACTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ2346789";

const passcodeGate = document.querySelector("#passcodeGate");
const passcodeForm = document.querySelector("#passcodeForm");
const passcodeInput = document.querySelector("#passcodeInput");
const passcodeError = document.querySelector("#passcodeError");
const passcodeSubmitButton = passcodeForm.querySelector("button[type='submit']");

const form = document.querySelector("#tradeForm");
const tradeModal = document.querySelector("#tradeModal");
const formTitle = document.querySelector("#formTitle");
const tradeIdInput = document.querySelector("#tradeId");
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const openTradeModalButton = document.querySelector("#openTradeModalButton");
const closeTradeModalButton = document.querySelector("#closeTradeModalButton");
const marketTypeInput = document.querySelector("#marketType");
const marketTypeField = document.querySelector("#marketTypeField");
const lotsField = document.querySelector("#lotsField");
const contractsField = document.querySelector("#contractsField");
const notesDisclosure = document.querySelector("#notesDisclosure");
const configModal = document.querySelector("#configModal");
const configGrid = document.querySelector("#configGrid");
const openConfigButton = document.querySelector("#openConfigButton");
const closeConfigButton = document.querySelector("#closeConfigButton");
const noteModal = document.querySelector("#noteModal");
const noteModalText = document.querySelector("#noteModalText");
const closeNoteButton = document.querySelector("#closeNoteButton");
const resetPasscodeModal = document.querySelector("#resetPasscodeModal");
const resetPasscodeForm = document.querySelector("#resetPasscodeForm");
const closeResetPasscodeButton = document.querySelector("#closeResetPasscodeButton");
const currentPasscodeInput = document.querySelector("#currentPasscodeInput");
const resetPasscodeError = document.querySelector("#resetPasscodeError");
const resetPasscodeButton = document.querySelector("#resetPasscodeButton");
const resetPasscodeVerifyStep = document.querySelector("#resetPasscodeVerifyStep");
const resetPasscodeResultStep = document.querySelector("#resetPasscodeResultStep");
const newPasscodeDisplay = document.querySelector("#newPasscodeDisplay");
const confirmResetPasscodeButton = document.querySelector("#confirmResetPasscodeButton");
const tableBody = document.querySelector("#tradeTableBody");
const emptyState = document.querySelector("#emptyState");
const tablePagination = document.querySelector("#tablePagination");
const paginationStatus = document.querySelector("#paginationStatus");
const prevPageButton = document.querySelector("#prevPageButton");
const nextPageButton = document.querySelector("#nextPageButton");
const symbolFilter = document.querySelector("#symbolFilter");
const sessionFilter = document.querySelector("#sessionFilter");
const accountFilter = document.querySelector("#accountFilter");
const strategyFilter = document.querySelector("#strategyFilter");
const marketTypeFilter = document.querySelector("#marketTypeFilter");
const clearButton = document.querySelector("#clearButton");
const exportButton = document.querySelector("#exportButton");
const reviewModeButton = document.querySelector("#reviewModeButton");
const densityToggleButton = document.querySelector("#densityToggleButton");
const navButtons = document.querySelectorAll("[data-view-target]");
const appViews = document.querySelectorAll(".app-view");
const analyticsTabButtons = document.querySelectorAll("[data-analytics-tab]");
const analyticsTabPanels = {
  overview: document.querySelector("#analyticsOverviewPanel"),
  breakdowns: document.querySelector("#analyticsBreakdownPanel"),
  discipline: document.querySelector("#analyticsDisciplinePanel"),
};
const logoutButton = document.querySelector("#logoutButton");
const adminNavLink = document.querySelector("#adminNavLink");
const openResetPasscodeButton = document.querySelector("#openResetPasscodeButton");
const userMenuButton = document.querySelector("#userMenuButton");
const userPopover = document.querySelector("#userPopover");
const userMenuName = document.querySelector("#userMenuName");
const userMenuEmail = document.querySelector("#userMenuEmail");
const userMenuRole = document.querySelector("#userMenuRole");
const saveStatus = document.querySelector("#saveStatus");
const toastStack = document.querySelector("#toastStack");
const onboardingModal = document.querySelector("#onboardingModal");
const onboardingConfigButton = document.querySelector("#onboardingConfigButton");
const tradeDetailDrawer = document.querySelector("#tradeDetailDrawer");
const tradeDrawerTitle = document.querySelector("#tradeDrawerTitle");
const tradeDrawerContent = document.querySelector("#tradeDrawerContent");
const closeTradeDrawerButton = document.querySelector("#closeTradeDrawerButton");
const drawerPrevButton = document.querySelector("#drawerPrevButton");
const drawerNextButton = document.querySelector("#drawerNextButton");
const drawerEditButton = document.querySelector("#drawerEditButton");

const totalTradesEl = document.querySelector("#totalTrades");
const summarySymbolSplit = document.querySelector("#summarySymbolSplit");
const summarySizeTiles = document.querySelector("#summarySizeTiles");
const winsTotalEl = document.querySelector("#winsTotal");
const lossesTotalEl = document.querySelector("#lossesTotal");
const amountTotalEl = document.querySelector("#amountTotal");
const dashboardAccountFilter = document.querySelector("#dashboardAccountFilter");
const equityChart = document.querySelector("#equityChart");
const equityCurrent = document.querySelector("#equityCurrent");
const equityHigh = document.querySelector("#equityHigh");
const equityLow = document.querySelector("#equityLow");
const equityTrades = document.querySelector("#equityTrades");
const analyticsGrid = document.querySelector("#analyticsGrid");
const analyticsBreakdowns = document.querySelector("#analyticsBreakdowns");
const analyticsDisciplineBreakdowns = document.querySelector("#analyticsDisciplineBreakdowns");
const performanceTitle = document.querySelector("#performanceTitle");
const performanceWeekMode = document.querySelector("#performanceWeekMode");
const performanceMonthMode = document.querySelector("#performanceMonthMode");
const performancePeriodSelect = document.querySelector("#performancePeriodSelect");
const performanceRange = document.querySelector("#performanceRange");
const performanceTotalCard = document.querySelector("#performanceTotalCard");
const performanceTotalLabel = document.querySelector("#performanceTotalLabel");
const performanceTotalAmount = document.querySelector("#performanceTotalAmount");
const performanceTotalTrades = document.querySelector("#performanceTotalTrades");
const performanceTotalWinLoss = document.querySelector("#performanceTotalWinLoss");
const performanceWeekdays = document.querySelector("#performanceWeekdays");
const performanceGrid = document.querySelector("#performanceGrid");
const strategyGrid = document.querySelector("#strategyGrid");
const accountBalanceGrid = document.querySelector("#accountBalanceGrid");
const marketSummaryGrid = document.querySelector("#marketSummaryGrid");
const emptyAddTradeButton = document.querySelector("#emptyAddTradeButton");
const emptyConfigButton = document.querySelector("#emptyConfigButton");

const DEFAULT_CONFIG = {
  symbols: [],
  sessions: [],
  accounts: [],
  strategies: [],
  marketTypes: [],
  accountBalances: {},
};

const CONFIG_FIELDS = [
  { key: "symbols", label: "Symbol", selectIds: ["symbol"], filterIds: ["symbolFilter"] },
  { key: "sessions", label: "Session", selectIds: ["session"], filterIds: ["sessionFilter"] },
  { key: "accounts", label: "Account", selectIds: ["account"], filterIds: ["accountFilter"] },
  { key: "strategies", label: "Strategy", selectIds: ["strategy"], filterIds: ["strategyFilter"] },
];

const MARKET_TYPE_OPTIONS = ["CFD", "Futures"];
const DISCIPLINE_MAX_SCORE = 5;
const DISCIPLINE_RULES = [
  { key: "followedPlan", label: "Plan followed", positive: true },
  { key: "enteredEarly", label: "Early entry" },
  { key: "movedSl", label: "Stop moved" },
  { key: "overtraded", label: "Overtraded" },
  { key: "exitedEarly", label: "Early exit" },
];

let currentUserId = "";
let currentUserLabel = "";
let trades = [];
let appConfig = structuredClone(DEFAULT_CONFIG);
let editingTradeId = "";
let calculatorMode = "pct";
let calculatorMarketType = "CFD";
let calculatorTouched = {};
let failedPasscodeAttempts = 0;
let currentTablePage = 1;
let isHydratingUserState = false;
let remoteSaveTimer = null;
let saveStatusTimer = null;
let performanceMode = "week";
let reviewMode = false;
let tableDensity = "comfortable";
let selectedTradeId = "";

function setButtonLoading(button, isLoading, loadingText = "Loading...") {
  if (!button) {
    return;
  }

  if (isLoading) {
    button.dataset.defaultText = button.textContent;
    button.textContent = loadingText;
    button.disabled = true;
    button.classList.add("is-loading");
    return;
  }

  button.textContent = button.dataset.defaultText || button.textContent;
  button.disabled = false;
  button.classList.remove("is-loading");
  delete button.dataset.defaultText;
}

function setSaveStatus(status, message) {
  if (!saveStatus) {
    return;
  }

  window.clearTimeout(saveStatusTimer);
  saveStatus.textContent = message;
  saveStatus.className = `save-status ${status}`;

  if (status === "saved") {
    saveStatusTimer = window.setTimeout(() => {
      saveStatus.textContent = "Saved";
    }, 1600);
  }
}

function showToast(message, tone = "saved") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("leaving");
    window.setTimeout(() => toast.remove(), 220);
  }, 2600);
}

async function setAppUnlocked(
  userId = sessionStorage.getItem(AUTH_STORAGE_KEY),
  userLabel = sessionStorage.getItem(AUTH_LABEL_KEY),
  userEmail = sessionStorage.getItem(AUTH_EMAIL_KEY),
  userRole = sessionStorage.getItem(AUTH_ROLE_KEY),
  passcodeHash = sessionStorage.getItem(AUTH_HASH_KEY),
  refreshUser = true,
) {
  document.body.classList.remove("auth-locked");
  passcodeGate.setAttribute("hidden", "");
  if (userId) {
    if (refreshUser && passcodeHash && /^[a-f0-9]{64}$/i.test(passcodeHash)) {
      try {
        const result = await callSupabaseFunction("login", { passcodeHash });
        if (result.user?.id === userId) {
          userLabel = result.user.label || userLabel;
          userEmail = result.user.email || "";
          userRole = result.user.role || userRole;
        }
      } catch {
        // Keep the local session usable if the profile refresh cannot complete.
      }
    }

    sessionStorage.setItem(AUTH_STORAGE_KEY, userId);
    sessionStorage.setItem(AUTH_LABEL_KEY, userLabel || userId);
    sessionStorage.setItem(AUTH_EMAIL_KEY, userEmail || "");
    sessionStorage.setItem(AUTH_ROLE_KEY, userRole || "user");
    if (passcodeHash) {
      sessionStorage.setItem(AUTH_HASH_KEY, passcodeHash);
    }
    currentUserLabel = userLabel || userId;
    userMenuName.textContent = currentUserLabel;
    userMenuEmail.textContent = userEmail || "";
    userMenuRole.textContent = userRole === "admin" ? "Admin" : "User";
    userMenuButton.textContent = getUserInitials(currentUserLabel);
    adminNavLink.classList.toggle("hidden", userRole !== "admin");
    await loadUserState(userId, userLabel || userId);
  }
}

function setAppLocked() {
  document.body.classList.add("auth-locked");
  passcodeGate.removeAttribute("hidden");
  passcodeInput.focus();
}

async function logout() {
  window.clearTimeout(remoteSaveTimer);
  setButtonLoading(logoutButton, true, "Logging out...");
  try {
    await syncUserDataToSupabase();
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_LABEL_KEY);
    sessionStorage.removeItem(AUTH_EMAIL_KEY);
    sessionStorage.removeItem(AUTH_ROLE_KEY);
    sessionStorage.removeItem(AUTH_HASH_KEY);
    currentUserId = "";
    currentUserLabel = "";
    adminNavLink.classList.add("hidden");
    userPopover.classList.add("hidden");
    userMenuButton.setAttribute("aria-expanded", "false");
    passcodeInput.value = "";
    passcodeError.textContent = "";
    setAppLocked();
  } finally {
    setButtonLoading(logoutButton, false);
  }
}

function getUserInitials(name) {
  const parts = String(name || "User")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return (parts[0]?.[0] || "U").toUpperCase();
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function initialisePasscodeGate() {
  const unlockedUser = sessionStorage.getItem(AUTH_STORAGE_KEY);
  const unlockedLabel = sessionStorage.getItem(AUTH_LABEL_KEY);
  const unlockedEmail = sessionStorage.getItem(AUTH_EMAIL_KEY);
  const unlockedRole = sessionStorage.getItem(AUTH_ROLE_KEY);
  const unlockedHash = sessionStorage.getItem(AUTH_HASH_KEY);

  if (unlockedUser) {
    await setAppUnlocked(unlockedUser, unlockedLabel, unlockedEmail, unlockedRole, unlockedHash);
    return;
  }

  setAppLocked();
}

function loadTrades() {
  return [];
}

function saveTrades() {
  if (!currentUserId) {
    return;
  }

  scheduleSupabaseSave();
}

function loadConfig() {
  return structuredClone(DEFAULT_CONFIG);
}

function saveConfig() {
  if (!currentUserId) {
    return;
  }

  scheduleSupabaseSave();
}

async function loadUserState(userId, userLabel) {
  currentUserId = userId;
  currentUserLabel = userLabel;
  trades = loadTrades();
  appConfig = loadConfig();
  await hydrateUserStateFromSupabase();
  currentTablePage = 1;
  syncConfiguredInputs();
  resetForm();
  render();
}

async function hydrateUserStateFromSupabase() {
  if (!window.callSupabaseFunction || !currentUserId) {
    return;
  }

  try {
    isHydratingUserState = true;
    const remoteData = await callSupabaseFunction("get-user-data", { userId: currentUserId });
    trades = Array.isArray(remoteData.trades) ? remoteData.trades : [];
    appConfig = {
      symbols: normalizeOptions(remoteData.config?.symbols, DEFAULT_CONFIG.symbols),
      sessions: normalizeOptions(remoteData.config?.sessions, DEFAULT_CONFIG.sessions),
      accounts: normalizeOptions(remoteData.config?.accounts, DEFAULT_CONFIG.accounts),
      strategies: normalizeOptions(remoteData.config?.strategies, DEFAULT_CONFIG.strategies),
      marketTypes: normalizeMarketTypes(remoteData.config?.marketTypes),
      accountBalances: normalizeAccountBalances(remoteData.config?.accountBalances, remoteData.config?.accounts),
    };
  } catch {
    setSaveStatus("pending", "Could not load saved data");
  } finally {
    isHydratingUserState = false;
  }
}

function scheduleSupabaseSave() {
  if (isHydratingUserState || !window.callSupabaseFunction || !currentUserId) {
    return;
  }

  window.clearTimeout(remoteSaveTimer);
  setSaveStatus("saving", "Saving...");
  remoteSaveTimer = window.setTimeout(syncUserDataToSupabase, 450);
}

async function syncUserDataToSupabase() {
  if (!currentUserId || !window.callSupabaseFunction) {
    return;
  }

  try {
    await callSupabaseFunction("save-user-data", {
      userId: currentUserId,
      config: appConfig,
      trades,
    });
    setSaveStatus("saved", "Saved");
  } catch {
    setSaveStatus("pending", "Offline changes pending");
  }
}

function userConfigComplete() {
  return CONFIG_FIELDS.every((field) => appConfig[field.key].length > 0) && appConfig.marketTypes.length > 0;
}

function updateAddTradeAvailability() {
  const isComplete = userConfigComplete();
  openTradeModalButton.disabled = !isComplete;
  emptyAddTradeButton.disabled = !isComplete;
  openTradeModalButton.title = isComplete ? "Add trade" : "Complete your trade config before adding trades";
  emptyAddTradeButton.title = openTradeModalButton.title;
  openTradeModalButton.setAttribute("aria-disabled", String(!isComplete));
  emptyAddTradeButton.setAttribute("aria-disabled", String(!isComplete));
}

function normalizeOptions(options, fallback) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter(Boolean)
    : [];
  const uniqueOptions = [...new Set(cleaned)];
  return uniqueOptions.length ? uniqueOptions : [...fallback];
}

function normalizeMarketTypes(options) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter((option) => MARKET_TYPE_OPTIONS.includes(option))
    : [];
  return [...new Set(cleaned)];
}

function normalizeAccountBalances(balances = {}, accounts = []) {
  const normalized = {};
  normalizeOptions(accounts, DEFAULT_CONFIG.accounts).forEach((account) => {
    const value = parseNumber(balances?.[account]);
    normalized[account] = value > 0 ? String(value) : "";
  });
  return normalized;
}

function getDefaultOption(key) {
  return appConfig[key][0] || DEFAULT_CONFIG[key][0] || "";
}

function getDefaultMarketType() {
  return appConfig.marketTypes[0] || "";
}

function createOption(value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

function populateSelect(select, options, includeAll = false) {
  const currentValue = select.value;
  select.innerHTML = "";

  if (includeAll) {
    select.appendChild(createOption("All"));
  }

  options.forEach((option) => {
    select.appendChild(createOption(option));
  });

  if ([...select.options].some((option) => option.value === currentValue)) {
    select.value = currentValue;
  }
}

function preserveOption(select, value) {
  if (![...select.options].some((option) => option.value === value)) {
    select.appendChild(createOption(value));
  }

  select.value = value;
}

function syncConfiguredInputs() {
  CONFIG_FIELDS.forEach((field) => {
    field.selectIds.forEach((id) => {
      populateSelect(document.querySelector(`#${id}`), appConfig[field.key]);
    });

    field.filterIds.forEach((id) => {
      populateSelect(document.querySelector(`#${id}`), appConfig[field.key], true);
    });
  });
  populateSelect(dashboardAccountFilter, appConfig.accounts, true);
  populateSelect(marketTypeInput, appConfig.marketTypes);
  populateSelect(marketTypeFilter, appConfig.marketTypes, true);
  syncMarketTypeField();
  updateAddTradeAvailability();
}

function parseNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function formatLots(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatAmount(value) {
  if (!value) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseNumber(value));
}

function formatSummaryAmount(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function truncateText(value, maxLength = 56) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

function getTradeLots(trade) {
  if (getTradeSizeType(trade) === "Contracts") {
    return 0;
  }

  return parseNumber(trade.lots) * parseNumber(trade.lotMultiplier || "1");
}

function getTradeContracts(trade) {
  return getTradeSizeType(trade) === "Contracts" ? parseNumber(trade.contracts) : 0;
}

function getTradeSizeType(trade) {
  if (trade.sizeType) {
    return trade.sizeType === "contracts" ? "Contracts" : "Lots";
  }

  return getTradeMarketType(trade) === "Futures" ? "Contracts" : "Lots";
}

function getTradeMarketType(trade) {
  return trade.marketType || getDefaultMarketType() || "CFD";
}

function formatTradeSize(trade) {
  if (getTradeSizeType(trade) === "Contracts") {
    return String(getTradeContracts(trade));
  }

  return formatLots(getTradeLots(trade));
}

function getTradeAmount(trade) {
  if (trade.outcome === "Win") {
    return parseNumber(trade.amount);
  }

  if (trade.outcome === "Loss") {
    return -parseNumber(trade.amount);
  }

  return 0;
}

function parseTradeDate(dateString) {
  if (!dateString) {
    return null;
  }

  const [year, month, day] = dateString.split("-").map(Number);
  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getWeekdays(date = new Date(), offsetWeeks = 0) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = monday.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  monday.setDate(monday.getDate() + mondayOffset);
  monday.setDate(monday.getDate() + offsetWeeks * 7);

  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((name, index) => {
    const weekday = new Date(monday);
    weekday.setDate(monday.getDate() + index);
    return {
      name,
      date: weekday,
      key: toDateKey(weekday),
    };
  });
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatMonthLabel(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function getMonthDays(date = new Date(), offsetMonths = 0) {
  const target = new Date(date.getFullYear(), date.getMonth() + offsetMonths, 1);
  const year = target.getFullYear();
  const month = target.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const days = [];

  for (let index = 0; index < mondayOffset; index += 1) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dayDate = new Date(year, month, day);
    days.push({
      date: dayDate,
      day,
      key: toDateKey(dayDate),
    });
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return {
    date: target,
    label: formatMonthLabel(target),
    days,
    keys: new Set(days.filter(Boolean).map((day) => day.key)),
  };
}

function getMonthDaysFromValue(value) {
  const [year, month] = String(value || "").split("-").map(Number);
  if (!year || !month) {
    return getMonthDays();
  }

  return getMonthDays(new Date(year, month - 1, 1), 0);
}

function monthValueFromDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getAvailableMonthOptions() {
  const monthValues = new Set([monthValueFromDate(new Date())]);
  trades.forEach((trade) => {
    const date = parseTradeDate(trade.tradeDate);
    if (date) {
      monthValues.add(monthValueFromDate(date));
    }
  });

  return [...monthValues]
    .sort((a, b) => b.localeCompare(a))
    .map((value) => {
      const [year, month] = value.split("-").map(Number);
      return {
        value,
        label: formatMonthLabel(new Date(year, month - 1, 1)),
      };
    });
}

function getFilteredTrades() {
  const selectedSymbol = symbolFilter.value;
  const selectedSession = sessionFilter.value;
  const selectedAccount = accountFilter.value;
  const selectedStrategy = strategyFilter.value;
  const selectedMarket = marketTypeFilter.value;

  return trades.filter((trade) => {
    const matchesSymbol = selectedSymbol === "All" || trade.symbol === selectedSymbol;
    const matchesSession = selectedSession === "All" || (trade.session || getDefaultOption("sessions")) === selectedSession;
    const matchesAccount = selectedAccount === "All" || (trade.account || getDefaultOption("accounts")) === selectedAccount;
    const matchesStrategy = selectedStrategy === "All" || (trade.strategy || getDefaultOption("strategies")) === selectedStrategy;
    const matchesMarket = selectedMarket === "All" || getTradeMarketType(trade) === selectedMarket;
    const matchesReview = !reviewMode || trade.outcome === "Win" || trade.outcome === "Loss";
    return matchesSymbol && matchesSession && matchesAccount && matchesStrategy && matchesMarket && matchesReview;
  });
}

function getDashboardTrades() {
  const selectedAccount = dashboardAccountFilter.value;
  if (selectedAccount === "All") {
    return trades;
  }

  return trades.filter((trade) => (trade.account || getDefaultOption("accounts")) === selectedAccount);
}

function renderSummary() {
  const dashboardTrades = getDashboardTrades();
  const totalLots = dashboardTrades.reduce((sum, trade) => sum + getTradeLots(trade), 0);
  const totalContracts = dashboardTrades.reduce((sum, trade) => sum + getTradeContracts(trade), 0);
  const wins = dashboardTrades.filter((trade) => trade.outcome === "Win").length;
  const losses = dashboardTrades.filter((trade) => trade.outcome === "Loss").length;
  const amount = dashboardTrades.reduce((sum, trade) => {
    if (trade.outcome === "Win") {
      return sum + parseNumber(trade.amount);
    }

    if (trade.outcome === "Loss") {
      return sum - parseNumber(trade.amount);
    }

    return sum;
  }, 0);

  totalTradesEl.textContent = String(dashboardTrades.length);
  summarySymbolSplit.innerHTML = "";
  appConfig.symbols.forEach((symbol) => {
    const count = dashboardTrades.filter((trade) => trade.symbol === symbol).length;
    const item = document.createElement("b");
    item.innerHTML = `${escapeHtml(symbol)} <em>${count}</em>`;
    summarySymbolSplit.appendChild(item);
  });
  renderSizeSummaryTiles(totalLots, totalContracts);
  winsTotalEl.textContent = String(wins);
  lossesTotalEl.textContent = String(losses);
  amountTotalEl.textContent = formatSummaryAmount(amount);
  amountTotalEl.className = amount > 0 ? "amount-win" : amount < 0 ? "amount-loss" : "amount-flat";
  renderMarketSummaries();
}

function renderSizeSummaryTiles(totalLots, totalContracts) {
  const enabledSizeTypes = new Set(
    appConfig.marketTypes.map((marketType) => (marketType === "Futures" ? "contracts" : "lots")),
  );

  if (!enabledSizeTypes.size) {
    enabledSizeTypes.add("lots");
  }

  summarySizeTiles.innerHTML = "";
  if (appConfig.marketTypes.length > 1) {
    return;
  }

  if (enabledSizeTypes.has("lots")) {
    summarySizeTiles.insertAdjacentHTML(
      "beforeend",
      `<article class="summary-tile"><span>Total Size (lots)</span><strong>${formatLots(totalLots)}</strong></article>`,
    );
  }

  if (enabledSizeTypes.has("contracts")) {
    summarySizeTiles.insertAdjacentHTML(
      "beforeend",
      `<article class="summary-tile"><span>Total Size (contracts)</span><strong>${totalContracts}</strong></article>`,
    );
  }
}

function renderMarketSummaries() {
  marketSummaryGrid.classList.toggle("hidden", appConfig.marketTypes.length < 2);
  marketSummaryGrid.innerHTML = "";

  if (appConfig.marketTypes.length < 2) {
    return;
  }

  appConfig.marketTypes.forEach((marketType) => {
    const marketTrades = getDashboardTrades().filter((trade) => getTradeMarketType(trade) === marketType);
    const wins = marketTrades.filter((trade) => trade.outcome === "Win").length;
    const losses = marketTrades.filter((trade) => trade.outcome === "Loss").length;
    const lots = marketTrades.reduce((sum, trade) => sum + getTradeLots(trade), 0);
    const contracts = marketTrades.reduce((sum, trade) => sum + getTradeContracts(trade), 0);
    const amount = marketTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const sizeLabel = marketType === "Futures" ? "Contracts" : "Lots";
    const sizeValue = marketType === "Futures" ? String(contracts) : formatLots(lots);
    const card = document.createElement("article");
    card.className = `market-summary-card ${amount > 0 ? "profit" : amount < 0 ? "loss" : "flat"}`;
    card.innerHTML = `
      <div>
        <span>${escapeHtml(marketType)}</span>
        <strong>${marketTrades.length}</strong>
      </div>
      <dl>
        <div><dt>${sizeLabel}</dt><dd>${sizeValue}</dd></div>
        <div><dt>W/L</dt><dd>${wins}/${losses}</dd></div>
        <div><dt>Amount</dt><dd>${formatSummaryAmount(amount)}</dd></div>
      </dl>
    `;
    marketSummaryGrid.appendChild(card);
  });
}

function renderEquityCurve() {
  const closedTrades = getDashboardTrades()
    .filter((trade) => trade.outcome === "Win" || trade.outcome === "Loss")
    .slice()
    .sort((a, b) => {
      const dateSort = (a.tradeDate || "").localeCompare(b.tradeDate || "");
      return dateSort || (a.createdAt || "").localeCompare(b.createdAt || "");
    });

  let runningTotal = 0;
  const points = closedTrades.map((trade, index) => {
    runningTotal += getTradeAmount(trade);
    return {
      index,
      date: trade.tradeDate,
      value: runningTotal,
    };
  });

  const values = [0, ...points.map((point) => point.value)];
  const current = points.length ? points[points.length - 1].value : 0;
  const high = Math.max(...values);
  const low = Math.min(...values);

  equityCurrent.textContent = formatSummaryAmount(current);
  equityCurrent.className = current > 0 ? "amount-win" : current < 0 ? "amount-loss" : "";
  equityHigh.textContent = formatSummaryAmount(high);
  equityLow.textContent = formatSummaryAmount(low);
  equityTrades.textContent = String(closedTrades.length);

  if (!points.length) {
    equityChart.innerHTML = `
      <div class="equity-empty">
        <strong>No closed trades yet</strong>
        <span>Mark trades as Win or Loss to build your curve.</span>
      </div>
    `;
    return;
  }

  const width = 960;
  const height = 280;
  const padding = 28;
  const range = high - low || 1;
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;
  const chartPoints = [{ index: -1, date: "", value: 0 }, ...points];
  const maxIndex = Math.max(1, chartPoints.length - 1);
  const coordinates = chartPoints.map((point, index) => {
    const x = padding + (index / maxIndex) * plotWidth;
    const y = padding + ((high - point.value) / range) * plotHeight;
    return { ...point, x, y };
  });
  const linePath = coordinates.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const areaPath = `${linePath} L ${coordinates[coordinates.length - 1].x.toFixed(2)} ${height - padding} L ${padding} ${height - padding} Z`;
  const zeroY = padding + ((high - 0) / range) * plotHeight;
  const finalPoint = coordinates[coordinates.length - 1];
  const resultClass = current > 0 ? "profit" : current < 0 ? "loss" : "flat";

  equityChart.innerHTML = `
    <svg class="equity-svg ${resultClass}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Cumulative profit and loss equity curve">
      <defs>
        <linearGradient id="equityFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0.24" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
        </linearGradient>
      </defs>
      <line class="equity-grid-line" x1="${padding}" x2="${width - padding}" y1="${padding}" y2="${padding}" />
      <line class="equity-grid-line" x1="${padding}" x2="${width - padding}" y1="${height / 2}" y2="${height / 2}" />
      <line class="equity-grid-line" x1="${padding}" x2="${width - padding}" y1="${height - padding}" y2="${height - padding}" />
      <line class="equity-zero-line" x1="${padding}" x2="${width - padding}" y1="${zeroY.toFixed(2)}" y2="${zeroY.toFixed(2)}" />
      <path class="equity-area" d="${areaPath}" />
      <path class="equity-line" d="${linePath}" />
      ${coordinates.slice(1).map((point) => `
        <circle class="equity-hover-point" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="10">
          <title>${escapeHtml(point.date || "Trade")} · ${formatSummaryAmount(point.value)}</title>
        </circle>
      `).join("")}
      <circle class="equity-point" cx="${finalPoint.x.toFixed(2)}" cy="${finalPoint.y.toFixed(2)}" r="6" />
    </svg>
    <div class="equity-axis">
      <span>${escapeHtml(points[0].date || "Start")}</span>
      <span>${escapeHtml(points[points.length - 1].date || "Latest")}</span>
    </div>
  `;
}

function getClosedTrades() {
  return getDashboardTrades().filter((trade) => trade.outcome === "Win" || trade.outcome === "Loss");
}

function summarizeTradeSet(tradeSet) {
  const wins = tradeSet.filter((trade) => trade.outcome === "Win");
  const losses = tradeSet.filter((trade) => trade.outcome === "Loss");
  const grossProfit = wins.reduce((sum, trade) => sum + parseNumber(trade.amount), 0);
  const grossLoss = losses.reduce((sum, trade) => sum + parseNumber(trade.amount), 0);
  const net = grossProfit - grossLoss;

  return {
    total: tradeSet.length,
    wins: wins.length,
    losses: losses.length,
    grossProfit,
    grossLoss,
    net,
    winRate: tradeSet.length ? (wins.length / tradeSet.length) * 100 : 0,
    averageWin: wins.length ? grossProfit / wins.length : 0,
    averageLoss: losses.length ? grossLoss / losses.length : 0,
    profitFactor: grossLoss > 0 ? grossProfit / grossLoss : grossProfit > 0 ? Infinity : 0,
  };
}

function formatPercent(value) {
  return `${formatLots(value)}%`;
}

function formatProfitFactor(value) {
  if (value === Infinity) {
    return "∞";
  }

  return formatLots(value);
}

function getDailyClosedSummaries(closedTrades) {
  const daily = new Map();
  closedTrades.forEach((trade) => {
    if (!trade.tradeDate) {
      return;
    }

    daily.set(trade.tradeDate, (daily.get(trade.tradeDate) || 0) + getTradeAmount(trade));
  });

  return [...daily.entries()].map(([date, amount]) => ({ date, amount }));
}

function renderAnalyticsBreakdown(title, items) {
  const rows = items
    .map(
      (item) => `
        <div class="analytics-row ${item.net > 0 ? "profit" : item.net < 0 ? "loss" : "flat"}">
          <span>${escapeHtml(item.label)}</span>
          <b>${formatSummaryAmount(item.net)}</b>
          <small>${item.total} trades · ${formatPercent(item.winRate)}</small>
        </div>
      `,
    )
    .join("");

  return `
    <article class="analytics-breakdown-card">
      <h3>${escapeHtml(title)}</h3>
      ${rows || '<p class="analytics-empty">No closed trades yet.</p>'}
    </article>
  `;
}

function renderDisciplineSummaryBreakdown(title, items) {
  const rows = items
    .map(
      (item) => `
        <div class="analytics-row ${item.net > 0 ? "profit" : item.net < 0 ? "loss" : "flat"}">
          <span>${escapeHtml(item.label)}</span>
          <b>${formatSummaryAmount(item.net)}</b>
          <small>${item.total} trades · ${formatPercent(item.winRate)} win rate · ${item.detail}</small>
        </div>
      `,
    )
    .join("");

  return `
    <article class="analytics-breakdown-card">
      <h3>${escapeHtml(title)}</h3>
      ${rows || '<p class="analytics-empty">No discipline data yet.</p>'}
    </article>
  `;
}

function getBreakdownItems(closedTrades, key, options = []) {
  const labels = options.length ? options : [...new Set(closedTrades.map((trade) => trade[key]).filter(Boolean))];
  return labels
    .map((label) => {
      const summary = summarizeTradeSet(closedTrades.filter((trade) => (trade[key] || "") === label));
      return { label, ...summary };
    })
    .filter((item) => item.total > 0)
    .sort((a, b) => b.net - a.net);
}

function renderAnalytics() {
  const closedTrades = getClosedTrades();
  const summary = summarizeTradeSet(closedTrades);
  const daily = getDailyClosedSummaries(closedTrades);
  const bestDay = daily.length ? daily.reduce((best, day) => (day.amount > best.amount ? day : best), daily[0]) : null;
  const worstDay = daily.length ? daily.reduce((worst, day) => (day.amount < worst.amount ? day : worst), daily[0]) : null;
  const dashboardTrades = getDashboardTrades();
  const disciplineTrades = dashboardTrades.filter(hasTradeDiscipline);
  const allDisciplineScores = disciplineTrades.map((trade) => getDisciplineScore(trade));
  const averageDiscipline = allDisciplineScores.length
    ? allDisciplineScores.reduce((sum, score) => sum + score, 0) / allDisciplineScores.length
    : 0;
  const cleanTrades = allDisciplineScores.filter((score) => score === DISCIPLINE_MAX_SCORE).length;
  const cleanTradeRate = allDisciplineScores.length ? (cleanTrades / allDisciplineScores.length) * 100 : 0;

  const metricCards = [
    { label: "Win Rate", value: formatPercent(summary.winRate), tone: summary.winRate >= 50 ? "profit" : summary.total ? "loss" : "flat" },
    { label: "Average Win", value: formatSummaryAmount(summary.averageWin), tone: summary.averageWin > 0 ? "profit" : "flat" },
    { label: "Average Loss", value: formatSummaryAmount(summary.averageLoss), tone: summary.averageLoss > 0 ? "loss" : "flat" },
    { label: "Profit Factor", value: formatProfitFactor(summary.profitFactor), tone: summary.profitFactor >= 1 ? "profit" : summary.total ? "loss" : "flat" },
    { label: "Best Day", value: bestDay ? formatSummaryAmount(bestDay.amount) : "0.00", detail: bestDay?.date || "-", tone: bestDay?.amount > 0 ? "profit" : "flat" },
    { label: "Worst Day", value: worstDay ? formatSummaryAmount(worstDay.amount) : "0.00", detail: worstDay?.date || "-", tone: worstDay?.amount < 0 ? "loss" : "flat" },
    { label: "Discipline", value: `${formatLots(averageDiscipline)}/${DISCIPLINE_MAX_SCORE}`, detail: `${disciplineTrades.length} tracked`, tone: averageDiscipline >= 4 ? "profit" : averageDiscipline >= 3 ? "flat" : disciplineTrades.length ? "loss" : "flat" },
    { label: "Clean Trades", value: formatPercent(cleanTradeRate), detail: `${cleanTrades}/${disciplineTrades.length || 0} perfect`, tone: cleanTradeRate >= 70 ? "profit" : cleanTradeRate >= 40 ? "flat" : disciplineTrades.length ? "loss" : "flat" },
  ];

  analyticsGrid.innerHTML = metricCards
    .map(
      (metric) => `
        <article class="analytics-card ${metric.tone}">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          ${metric.detail ? `<small>${escapeHtml(metric.detail)}</small>` : ""}
        </article>
      `,
    )
    .join("");

  analyticsBreakdowns.innerHTML = [
    renderAnalyticsBreakdown("By Symbol", getBreakdownItems(closedTrades, "symbol", appConfig.symbols)),
    renderAnalyticsBreakdown("By Session", getBreakdownItems(closedTrades, "session", appConfig.sessions)),
    renderAnalyticsBreakdown("By Account", getBreakdownItems(closedTrades, "account", appConfig.accounts)),
    renderAnalyticsBreakdown("By Strategy", getBreakdownItems(closedTrades, "strategy", appConfig.strategies)),
  ].join("");

  analyticsDisciplineBreakdowns.innerHTML = [
    renderDisciplinePerformanceAnalytics(),
    renderDisciplineMistakeAnalytics(),
    renderDisciplineAnalytics(),
  ].join("");
}

function renderDisciplinePerformanceAnalytics() {
  const closedDisciplineTrades = getClosedTrades().filter(hasTradeDiscipline);
  const highDiscipline = closedDisciplineTrades.filter((trade) => getDisciplineScore(trade) >= 4);
  const lowDiscipline = closedDisciplineTrades.filter((trade) => getDisciplineScore(trade) <= 3);
  const clean = closedDisciplineTrades.filter((trade) => getDisciplineScore(trade) === DISCIPLINE_MAX_SCORE);

  return renderDisciplineSummaryBreakdown("Discipline vs P&L", [
    { label: "High discipline", detail: "score 4-5", ...summarizeTradeSet(highDiscipline) },
    { label: "Low discipline", detail: "score 0-3", ...summarizeTradeSet(lowDiscipline) },
    { label: "Clean trades", detail: `score ${DISCIPLINE_MAX_SCORE}/${DISCIPLINE_MAX_SCORE}`, ...summarizeTradeSet(clean) },
  ].filter((item) => item.total > 0));
}

function renderDisciplineMistakeAnalytics() {
  const closedDisciplineTrades = getClosedTrades().filter(hasTradeDiscipline);
  const rows = DISCIPLINE_RULES
    .filter((rule) => !rule.positive)
    .map((rule) => {
      const matchingTrades = closedDisciplineTrades.filter((trade) => Boolean(getTradeDiscipline(trade)[rule.key]));
      return {
        label: rule.label,
        detail: "when marked",
        ...summarizeTradeSet(matchingTrades),
      };
    })
    .filter((item) => item.total > 0)
    .sort((a, b) => a.net - b.net);

  return renderDisciplineSummaryBreakdown("Mistake Impact", rows);
}

function renderDisciplineAnalytics() {
  const disciplineTrades = getDashboardTrades().filter(hasTradeDiscipline);
  const totalTrades = disciplineTrades.length;
  const rows = DISCIPLINE_RULES.map((rule) => {
    const count = disciplineTrades.filter((trade) => Boolean(getTradeDiscipline(trade)[rule.key])).length;
    const percentage = totalTrades ? (count / totalTrades) * 100 : 0;
    const rowClass = rule.positive ? "profit" : count ? "loss" : "flat";
    const detail = rule.positive ? "of trades" : "marked as mistake";
    return `
      <div class="analytics-row ${rowClass}">
        <span>${escapeHtml(rule.label)}</span>
        <b>${count}</b>
        <small>${formatPercent(percentage)} ${detail}</small>
      </div>
    `;
  }).join("");

  return `
    <article class="analytics-breakdown-card">
      <h3>Discipline</h3>
      ${totalTrades ? rows : '<p class="analytics-empty">No trades tracked yet.</p>'}
    </article>
  `;
}

function syncPerformanceControls() {
  performanceWeekMode.classList.toggle("active", performanceMode === "week");
  performanceMonthMode.classList.toggle("active", performanceMode === "month");
  performanceWeekdays.classList.toggle("hidden", performanceMode !== "month");
  performanceGrid.className = performanceMode === "month" ? "monthly-grid" : "weekly-grid";

  const currentValue = performancePeriodSelect.value;
  performancePeriodSelect.innerHTML = "";

  if (performanceMode === "week") {
    [
      ["this", "This Week"],
      ["last", "Last Week"],
    ].forEach(([value, label]) => {
      performancePeriodSelect.appendChild(createOption(label));
      performancePeriodSelect.lastElementChild.value = value;
    });
    performancePeriodSelect.value = currentValue === "last" ? "last" : "this";
    return;
  }

  getAvailableMonthOptions().forEach((option) => {
    const element = createOption(option.label);
    element.value = option.value;
    performancePeriodSelect.appendChild(element);
  });

  if ([...performancePeriodSelect.options].some((option) => option.value === currentValue)) {
    performancePeriodSelect.value = currentValue;
  }
}

function renderPerformanceCalendar() {
  syncPerformanceControls();
  if (performanceMode === "month") {
    renderMonthlyView();
    return;
  }

  renderWeeklySummary();
}

function renderWeeklySummary() {
  const isLastWeek = performancePeriodSelect.value === "last";
  const weekdays = getWeekdays(new Date(), isLastWeek ? -1 : 0);
  const weekdayKeys = new Set(weekdays.map((day) => day.key));
  const dashboardTrades = getDashboardTrades();
  const weeklyTrades = dashboardTrades.filter((trade) => weekdayKeys.has(trade.tradeDate));
  const weeklyWins = weeklyTrades.filter((trade) => trade.outcome === "Win").length;
  const weeklyLosses = weeklyTrades.filter((trade) => trade.outcome === "Loss").length;
  const weeklyAmount = weeklyTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
  const weeklyResultClass = weeklyAmount > 0 ? "profit" : weeklyAmount < 0 ? "loss" : "flat";

  performanceTitle.textContent = isLastWeek ? "Last Week" : "This Week";
  performanceRange.textContent = `${formatShortDate(weekdays[0].date)} - ${formatShortDate(weekdays[4].date)}`;
  performanceTotalLabel.textContent = "Week Total";
  performanceTotalCard.className = `weekly-total-card ${weeklyResultClass}`;
  performanceTotalAmount.textContent = formatSummaryAmount(weeklyAmount);
  performanceTotalTrades.textContent = String(weeklyTrades.length);
  performanceTotalWinLoss.textContent = `${weeklyWins}/${weeklyLosses}`;
  performanceGrid.innerHTML = "";

  weekdays.forEach((day) => {
    const dayTrades = dashboardTrades.filter((trade) => trade.tradeDate === day.key);
    const wins = dayTrades.filter((trade) => trade.outcome === "Win").length;
    const losses = dayTrades.filter((trade) => trade.outcome === "Loss").length;
    const amount = dayTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const resultClass = amount > 0 ? "profit" : amount < 0 ? "loss" : "flat";

    const card = document.createElement("article");
    card.className = `weekly-card ${resultClass}`;
    card.title = `${day.name}: ${formatSummaryAmount(amount)} · ${dayTrades.length} trades · ${wins}/${losses}`;
    card.innerHTML = `
      <div>
        <span>${day.name}</span>
        <small>${formatShortDate(day.date)}</small>
      </div>
      <strong>${formatSummaryAmount(amount)}</strong>
      <dl>
        <div><dt>Trades</dt><dd>${dayTrades.length}</dd></div>
        <div><dt>W/L</dt><dd>${wins}/${losses}</dd></div>
      </dl>
    `;
    performanceGrid.appendChild(card);
  });
}

function renderMonthlyView() {
  const month = getMonthDaysFromValue(performancePeriodSelect.value);
  const dashboardTrades = getDashboardTrades();
  const monthTrades = dashboardTrades.filter((trade) => month.keys.has(trade.tradeDate));
  const monthWins = monthTrades.filter((trade) => trade.outcome === "Win").length;
  const monthLosses = monthTrades.filter((trade) => trade.outcome === "Loss").length;
  const monthAmount = monthTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
  const resultClass = monthAmount > 0 ? "profit" : monthAmount < 0 ? "loss" : "flat";

  performanceTitle.textContent = "Monthly View";
  performanceRange.textContent = month.label;
  performanceTotalLabel.textContent = "Month Total";
  performanceTotalCard.className = `weekly-total-card ${resultClass}`;
  performanceTotalAmount.textContent = formatSummaryAmount(monthAmount);
  performanceTotalTrades.textContent = String(monthTrades.length);
  performanceTotalWinLoss.textContent = `${monthWins}/${monthLosses}`;
  performanceGrid.innerHTML = "";

  for (let index = 0; index < month.days.length; index += 7) {
    const weekDays = month.days.slice(index, index + 7);
    const weekKeys = new Set(weekDays.filter(Boolean).map((day) => day.key));
    const weekTrades = dashboardTrades.filter((trade) => weekKeys.has(trade.tradeDate));
    const weekWins = weekTrades.filter((trade) => trade.outcome === "Win").length;
    const weekLosses = weekTrades.filter((trade) => trade.outcome === "Loss").length;
    const weekAmount = weekTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const weekClass = weekAmount > 0 ? "profit" : weekAmount < 0 ? "loss" : "flat";

    weekDays.forEach((day) => {
      const cell = document.createElement("article");
      if (!day) {
        cell.className = "monthly-day empty";
        performanceGrid.appendChild(cell);
        return;
      }

      const dayTrades = dashboardTrades.filter((trade) => trade.tradeDate === day.key);
      const wins = dayTrades.filter((trade) => trade.outcome === "Win").length;
      const losses = dayTrades.filter((trade) => trade.outcome === "Loss").length;
      const amount = dayTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
      const dayClass = amount > 0 ? "profit" : amount < 0 ? "loss" : "flat";
      const hasTrades = dayTrades.length > 0;

      cell.className = `monthly-day ${dayClass} ${hasTrades ? "has-trades" : ""}`;
      cell.title = `${day.label}: ${formatSummaryAmount(amount)} · ${dayTrades.length} trades · ${wins}/${losses}`;
      cell.innerHTML = `
        <div>
          <span>${day.day}</span>
          <strong>${formatSummaryAmount(amount)}</strong>
        </div>
        <dl>
          <div><dt>Trades</dt><dd>${dayTrades.length}</dd></div>
          <div><dt>W/L</dt><dd>${wins}/${losses}</dd></div>
        </dl>
      `;
      performanceGrid.appendChild(cell);
    });

    const totalCell = document.createElement("article");
    totalCell.className = `monthly-week-total ${weekClass}`;
    totalCell.innerHTML = `
      <span>Week Total</span>
      <strong>${formatSummaryAmount(weekAmount)}</strong>
      <dl>
        <div><dt>Trades</dt><dd>${weekTrades.length}</dd></div>
        <div><dt>W/L</dt><dd>${weekWins}/${weekLosses}</dd></div>
      </dl>
    `;
    performanceGrid.appendChild(totalCell);
  }
}

function renderStrategyBreakdown() {
  strategyGrid.innerHTML = "";
  const dashboardTrades = getDashboardTrades();

  appConfig.strategies.forEach((strategy) => {
    const strategyTrades = dashboardTrades.filter((trade) => trade.strategy === strategy);
    const wins = strategyTrades.filter((trade) => trade.outcome === "Win").length;
    const losses = strategyTrades.filter((trade) => trade.outcome === "Loss").length;
    const amount = strategyTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const resultClass = amount > 0 ? "profit" : amount < 0 ? "loss" : "flat";

    const card = document.createElement("article");
    card.className = `strategy-card ${resultClass}`;
    card.innerHTML = `
      <div>
        <span>${escapeHtml(strategy)}</span>
        <strong>${formatSummaryAmount(amount)}</strong>
      </div>
      <dl>
        <div><dt>Trades</dt><dd>${strategyTrades.length}</dd></div>
        <div><dt>W/L</dt><dd>${wins}/${losses}</dd></div>
      </dl>
    `;
    strategyGrid.appendChild(card);
  });
}

function renderAccountBalances() {
  accountBalanceGrid.innerHTML = "";
  const selectedAccount = dashboardAccountFilter.value;
  const accounts = selectedAccount === "All" ? appConfig.accounts : appConfig.accounts.filter((account) => account === selectedAccount);

  accounts.forEach((account) => {
    const startingBalance = parseNumber(appConfig.accountBalances?.[account]);
    const accountTrades = getDashboardTrades().filter((trade) => (trade.account || getDefaultOption("accounts")) === account);
    const accountSummary = summarizeTradeSet(accountTrades.filter((trade) => trade.outcome === "Win" || trade.outcome === "Loss"));
    const pnl = accountTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const hasBalance = startingBalance > 0;
    const pnlPercent = hasBalance ? Math.max(-100, Math.min(100, (pnl / startingBalance) * 100)) : 0;
    const card = document.createElement("article");
    card.className = `account-balance-card ${pnl > 0 ? "profit" : pnl < 0 ? "loss" : "flat"}`;
    card.innerHTML = `
      <div class="account-balance-head">
        <span>${escapeHtml(account)}</span>
        <strong>${hasBalance ? formatSummaryAmount(startingBalance + pnl) : "Not set"}</strong>
      </div>
      <dl>
        <div><dt>Starting</dt><dd>${hasBalance ? formatSummaryAmount(startingBalance) : "0.00"}</dd></div>
        <div><dt>P/L</dt><dd>${formatSummaryAmount(pnl)}</dd></div>
        <div><dt>Trades</dt><dd>${accountTrades.length}</dd></div>
        <div><dt>Win</dt><dd>${formatPercent(accountSummary.winRate)}</dd></div>
      </dl>
      <div class="account-progress" aria-label="Account performance">
        <span style="width: ${Math.abs(pnlPercent).toFixed(2)}%"></span>
      </div>
    `;
    accountBalanceGrid.appendChild(card);
  });
}

function renderTable() {
  const visibleTrades = getVisibleTradesSorted();
  const totalPages = Math.max(1, Math.ceil(visibleTrades.length / TABLE_PAGE_SIZE));
  currentTablePage = Math.min(currentTablePage, totalPages);
  const pageStart = (currentTablePage - 1) * TABLE_PAGE_SIZE;
  const pageEnd = pageStart + TABLE_PAGE_SIZE;
  const pageTrades = visibleTrades.slice(pageStart, pageEnd);
  tableBody.innerHTML = "";

  pageTrades.forEach((trade) => {
      const note = trade.notes || "";
      const hasNote = Boolean(note.trim());
      const isTruncated = note.trim().length > 56;
      const row = document.createElement("tr");
      row.dataset.tradeId = trade.id;
      row.innerHTML = `
        <td data-label="Date">${trade.tradeDate}</td>
        <td data-label="Symbol" class="symbol-cell">${escapeHtml(trade.symbol)}</td>
        <td data-label="Market">${escapeHtml(getTradeMarketType(trade))}</td>
        <td data-label="Session">${escapeHtml(trade.session || getDefaultOption("sessions"))}</td>
        <td data-label="Account">${escapeHtml(trade.account || getDefaultOption("accounts"))}</td>
        <td data-label="Strategy">${escapeHtml(trade.strategy || "-")}</td>
        <td data-label="Size Type">${getTradeSizeType(trade)}</td>
        <td data-label="Size">${formatTradeSize(trade)}</td>
        <td data-label="Win / Loss"><span class="badge ${getOutcomeClass(trade.outcome)}">${escapeHtml(trade.outcome || "Pending")}</span></td>
        <td data-label="Amount" class="${trade.outcome === "Win" ? "amount-win" : trade.outcome === "Loss" ? "amount-loss" : "muted"}">
          ${formatAmount(trade.amount)}
        </td>
        <td data-label="Discipline">${renderDisciplineBadge(trade)}</td>
        <td data-label="Notes" class="notes-cell">
          ${
            hasNote
              ? `<span>${escapeHtml(truncateText(note))}</span>
                ${
                  isTruncated
                    ? `<button class="note-view-button" type="button" data-action="view-note" data-id="${trade.id}" aria-label="View full note">View</button>`
                    : ""
                }`
              : "-"
          }
        </td>
        <td data-label="Actions">
          <div class="actions">
            <button class="icon-button compact-icon" type="button" data-action="edit" data-id="${trade.id}" aria-label="Edit trade" title="Edit trade">✎</button>
            <button class="icon-button compact-icon delete" type="button" data-action="delete" data-id="${trade.id}" aria-label="Delete trade" title="Delete trade">×</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });

  emptyState.classList.toggle("hidden", visibleTrades.length > 0);
  emptyState.querySelector("h2").textContent = trades.length ? (reviewMode ? "No closed trades" : "No trades match") : "No trades yet";
  emptyState.querySelector("p").textContent = trades.length
    ? (reviewMode ? "Turn off review mode or mark trades as Win or Loss." : "Adjust your filters to bring trades back into view.")
    : "Configure your inputs, then add your first trade to start building your journal.";
  tablePagination.classList.toggle("hidden", visibleTrades.length === 0);
  paginationStatus.textContent = visibleTrades.length
    ? `Showing ${pageStart + 1}-${Math.min(pageEnd, visibleTrades.length)} of ${visibleTrades.length} trades`
    : "Showing 0 trades";
  prevPageButton.disabled = currentTablePage <= 1;
  nextPageButton.disabled = currentTablePage >= totalPages;
}

function getVisibleTradesSorted() {
  return getFilteredTrades().slice().sort((a, b) => b.tradeDate.localeCompare(a.tradeDate));
}

function openTradeDrawer(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  selectedTradeId = id;
  const amount = getTradeAmount(trade);
  const discipline = getTradeDiscipline(trade);
  tradeDrawerTitle.textContent = `${trade.symbol || "Trade"} · ${trade.tradeDate || "-"}`;
  tradeDrawerContent.innerHTML = `
    <div class="drawer-metrics">
      <div><span>Outcome</span><strong><span class="badge ${getOutcomeClass(trade.outcome)}">${escapeHtml(trade.outcome || "Pending")}</span></strong></div>
      <div><span>Amount</span><strong class="${amount > 0 ? "amount-win" : amount < 0 ? "amount-loss" : "amount-flat"}">${formatSummaryAmount(amount)}</strong></div>
      <div><span>Size</span><strong>${formatTradeSize(trade)}</strong></div>
      <div><span>Discipline</span><strong>${renderDisciplineBadge(trade)}</strong></div>
    </div>
    <dl class="drawer-details">
      <div><dt>Market</dt><dd>${escapeHtml(getTradeMarketType(trade))}</dd></div>
      <div><dt>Session</dt><dd>${escapeHtml(trade.session || "-")}</dd></div>
      <div><dt>Account</dt><dd>${escapeHtml(trade.account || "-")}</dd></div>
      <div><dt>Strategy</dt><dd>${escapeHtml(trade.strategy || "-")}</dd></div>
    </dl>
    <div class="drawer-discipline">
      ${DISCIPLINE_RULES.map((rule) => {
        const checked = Boolean(discipline[rule.key]);
        const isGood = rule.positive ? checked : !checked;
        return `<span class="${isGood ? "good" : "bad"}">${isGood ? "✓" : "×"} ${escapeHtml(rule.label)}</span>`;
      }).join("")}
    </div>
    <article class="drawer-notes">
      <span>Notes</span>
      <p>${trade.notes ? escapeHtml(trade.notes) : "No notes added."}</p>
    </article>
  `;
  syncDrawerButtons();
  openDialog(tradeDetailDrawer);
}

function closeTradeDrawer() {
  closeDialog(tradeDetailDrawer);
}

function getSelectedTradeIndex() {
  return getVisibleTradesSorted().findIndex((trade) => trade.id === selectedTradeId);
}

function syncDrawerButtons() {
  const visibleTrades = getVisibleTradesSorted();
  const index = getSelectedTradeIndex();
  drawerPrevButton.disabled = index <= 0;
  drawerNextButton.disabled = index < 0 || index >= visibleTrades.length - 1;
}

function stepTradeDrawer(direction) {
  const visibleTrades = getVisibleTradesSorted();
  const index = getSelectedTradeIndex();
  const nextTrade = visibleTrades[index + direction];
  if (nextTrade) {
    openTradeDrawer(nextTrade.id);
  }
}

function render() {
  updateAddTradeAvailability();
  renderSummary();
  renderEquityCurve();
  renderAnalytics();
  renderPerformanceCalendar();
  renderStrategyBreakdown();
  renderAccountBalances();
  renderTable();
}

function renderConfig() {
  configGrid.innerHTML = "";

  const marketSection = document.createElement("section");
  marketSection.className = "config-section";
  marketSection.innerHTML = `
    <div class="config-section-heading">
      <h3>Market Types</h3>
    </div>
    <div class="market-type-config">
      ${MARKET_TYPE_OPTIONS.map(
        (marketType) => `
          <label class="toggle-option">
            <input type="checkbox" value="${marketType}" data-market-type-toggle ${appConfig.marketTypes.includes(marketType) ? "checked" : ""} />
            <span>${marketType}</span>
          </label>
        `,
      ).join("")}
    </div>
  `;
  configGrid.appendChild(marketSection);

  CONFIG_FIELDS.forEach((field) => {
    const section = document.createElement("section");
    section.className = "config-section";
    section.dataset.configKey = field.key;
    section.innerHTML = `
      <div class="config-section-heading">
        <h3>${escapeHtml(field.label)}</h3>
        <div class="config-add-row">
          <input type="text" placeholder="Add ${escapeHtml(field.label.toLowerCase())}" aria-label="Add ${escapeHtml(field.label)}" />
          <button class="ghost-button" type="button" data-config-action="add" data-config-key="${field.key}">Add</button>
        </div>
      </div>
      <div class="config-list">
        ${
          appConfig[field.key].length
            ? appConfig[field.key]
                .map(
                  (option) => `
                    <span class="config-pill">
                      ${escapeHtml(option)}
                      <button type="button" aria-label="Remove ${escapeHtml(option)}" data-config-action="remove" data-config-key="${field.key}" data-config-value="${escapeHtml(option)}">x</button>
                    </span>
                  `,
                )
                .join("")
            : '<span class="muted">No values yet.</span>'
        }
      </div>
    `;
    configGrid.appendChild(section);
  });

  const balanceSection = document.createElement("section");
  balanceSection.className = "config-section";
  balanceSection.innerHTML = `
    <div class="config-section-heading">
      <h3>Starting Balances</h3>
    </div>
    <div class="balance-config-list">
      ${
        appConfig.accounts.length
          ? appConfig.accounts
              .map(
                (account) => `
                  <label>
                    <span>${escapeHtml(account)}</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value="${escapeHtml(appConfig.accountBalances?.[account] || "")}"
                      placeholder="0.00"
                      data-balance-account="${escapeHtml(account)}"
                    />
                  </label>
                `,
              )
              .join("")
          : '<span class="muted">Add accounts first.</span>'
      }
    </div>
  `;
  configGrid.appendChild(balanceSection);
}

function openConfigModal() {
  renderConfig();
  openDialog(configModal);
}

function closeConfigModal() {
  closeDialog(configModal);
}

function maybeOpenConfigForNewUser() {
  if (!userConfigComplete() && !configModal.open && !onboardingModal.open) {
    openDialog(onboardingModal);
  }
}

function addConfigValue(key, value) {
  const nextValue = value.trim();
  if (!nextValue || appConfig[key].includes(nextValue)) {
    return;
  }

  appConfig[key] = [...appConfig[key], nextValue];
  if (key === "accounts") {
    appConfig.accountBalances = { ...appConfig.accountBalances, [nextValue]: "" };
  }
  saveConfig();
  syncConfiguredInputs();
  renderConfig();
  resetForm();
  render();
  showToast("Config value added");
}

function removeConfigValue(key, value) {
  if (appConfig[key].length <= 1) {
    window.alert("Keep at least one value in each list.");
    return;
  }

  const confirmed = window.confirm(`Remove "${value}" from your ${key} list?\n\nExisting trades will keep their saved value.`);
  if (!confirmed) {
    return;
  }

  appConfig[key] = appConfig[key].filter((option) => option !== value);
  if (key === "accounts") {
    const { [value]: _removed, ...remainingBalances } = appConfig.accountBalances;
    appConfig.accountBalances = remainingBalances;
  }
  if (key === "symbols") {
  }
  saveConfig();
  syncConfiguredInputs();
  renderConfig();
  resetForm();
  render();
  showToast("Config value removed");
}

function showView(viewId) {
  appViews.forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === viewId);
  });
}

function showAnalyticsTab(tabName) {
  analyticsTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.analyticsTab === tabName);
  });

  Object.entries(analyticsTabPanels).forEach(([name, panel]) => {
    panel.classList.toggle("active", name === tabName);
  });
}

function getOutcomeClass(outcome) {
  return (outcome || "Pending").toLowerCase();
}

function getTradeDiscipline(trade) {
  return trade.discipline && typeof trade.discipline === "object" ? trade.discipline : {};
}

function hasTradeDiscipline(trade) {
  return Boolean(trade.discipline && typeof trade.discipline === "object");
}

function getDisciplineScore(trade) {
  if (!hasTradeDiscipline(trade)) {
    return null;
  }

  const discipline = getTradeDiscipline(trade);
  let score = 0;

  if (discipline.followedPlan) {
    score += 1;
  }

  ["enteredEarly", "movedSl", "overtraded", "exitedEarly"].forEach((key) => {
    if (!discipline[key]) {
      score += 1;
    }
  });

  return score;
}

function renderDisciplineBadge(trade) {
  const score = getDisciplineScore(trade);
  if (score === null) {
    return '<span class="badge pending">-</span>';
  }

  const className = score >= DISCIPLINE_MAX_SCORE ? "win" : score >= 3 ? "open" : "loss";
  return `<span class="badge ${className}">${score}/${DISCIPLINE_MAX_SCORE}</span>`;
}

function updateModalScrollLock() {
  const hasOpenModal = [tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal].some((modal) => modal.open);
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function openDialog(modal) {
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }

  updateModalScrollLock();
}

function closeDialog(modal) {
  modal.close();
  updateModalScrollLock();
}

function openTradeModal() {
  openDialog(tradeModal);
  form.tradeDate.focus();
}

function startAddTradeFlow() {
  if (!userConfigComplete()) {
    maybeOpenConfigForNewUser();
    return;
  }

  resetForm();
  openTradeModal();
}

function closeTradeModal() {
  closeDialog(tradeModal);
  resetForm();
}

function openNoteModal(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade || !trade.notes) {
    return;
  }

  noteModalText.textContent = trade.notes;
  openDialog(noteModal);
}

function closeNoteModal() {
  closeDialog(noteModal);
}

function resetPasscodeFlow() {
  currentPasscodeInput.value = "";
  resetPasscodeError.textContent = "";
  newPasscodeDisplay.textContent = "";
  resetPasscodeVerifyStep.classList.remove("hidden");
  resetPasscodeResultStep.classList.add("hidden");
}

function openResetPasscodeModal() {
  userPopover.classList.add("hidden");
  userMenuButton.setAttribute("aria-expanded", "false");
  resetPasscodeFlow();
  openDialog(resetPasscodeModal);
  currentPasscodeInput.focus();
}

function closeResetPasscodeModal() {
  closeDialog(resetPasscodeModal);
  resetPasscodeFlow();
}

function generatePasscode(length = 8) {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return [...bytes].map((byte) => PASSCODE_CHARACTERS[byte % PASSCODE_CHARACTERS.length]).join("");
}

async function resetCurrentUserPasscode() {
  const currentPasscode = currentPasscodeInput.value.trim().toUpperCase();
  resetPasscodeError.textContent = "";

  if (!currentPasscode) {
    resetPasscodeError.textContent = "Enter your current passcode.";
    return;
  }

  if (!window.callSupabaseFunction || !currentUserId) {
    resetPasscodeError.textContent = "Could not reset passcode. Try again.";
    return;
  }

  setButtonLoading(resetPasscodeButton, true, "Generating...");
  currentPasscodeInput.disabled = true;

  try {
    const currentPasscodeHash = await sha256(`${PASSCODE_SALT}:${currentPasscode}`);
    const sessionHash = sessionStorage.getItem(AUTH_HASH_KEY);
    if (sessionHash && currentPasscodeHash !== sessionHash) {
      resetPasscodeError.textContent = "Current passcode is incorrect.";
      return;
    }

    const nextPasscode = generatePasscode();
    const nextPasscodeHash = await sha256(`${PASSCODE_SALT}:${nextPasscode}`);
    await callSupabaseFunction("reset-own-passcode", {
      userId: currentUserId,
      currentPasscodeHash,
      nextPasscodeHash,
      nextPasscodeCode: nextPasscode,
    });

    sessionStorage.setItem(AUTH_HASH_KEY, nextPasscodeHash);
    currentPasscodeInput.value = "";
    newPasscodeDisplay.textContent = nextPasscode;
    resetPasscodeVerifyStep.classList.add("hidden");
    resetPasscodeResultStep.classList.remove("hidden");
  } catch {
    resetPasscodeError.textContent = "Could not reset passcode. Check your current code and try again.";
  } finally {
    setButtonLoading(resetPasscodeButton, false);
    currentPasscodeInput.disabled = false;
  }
}

function syncSizeFields() {
  const isContracts = marketTypeInput.value === "Futures";
  lotsField.classList.toggle("hidden", isContracts);
  contractsField.classList.toggle("hidden", !isContracts);
}

function syncMarketTypeField() {
  const hasMultipleMarkets = appConfig.marketTypes.length > 1;
  marketTypeField.classList.toggle("hidden", !hasMultipleMarkets);
  if (!hasMultipleMarkets) {
    marketTypeInput.value = getDefaultMarketType();
  }
}

function syncSizeFromMarket() {
  syncSizeFields();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readForm() {
  const existingId = tradeIdInput.value || editingTradeId;

  return {
    id: existingId || crypto.randomUUID(),
    tradeDate: form.tradeDate.value,
    symbol: form.symbol.value,
    session: form.session.value,
    account: form.account.value,
    strategy: form.strategy.value,
    marketType: form.marketType.value || getDefaultMarketType(),
    sizeType: (form.marketType.value || getDefaultMarketType()) === "Futures" ? "contracts" : "lots",
    lots: form.lots.value,
    lotMultiplier: "1",
    contracts: form.contracts.value,
    outcome: form.outcome.value,
    amount: form.amount.value,
    discipline: {
      followedPlan: form.followedPlan.checked,
      enteredEarly: form.enteredEarly.checked,
      movedSl: form.movedSl.checked,
      overtraded: form.overtraded.checked,
      exitedEarly: form.exitedEarly.checked,
    },
    notes: form.notes.value.trim(),
    createdAt: existingId
      ? trades.find((trade) => trade.id === existingId)?.createdAt
      : new Date().toISOString(),
  };
}

function validateTrade(trade) {
  if (!trade.tradeDate || !trade.symbol || !trade.session || !trade.account || !trade.marketType) {
    return "Date, symbol, session, account, and market type are required.";
  }

  if (trade.sizeType === "contracts" && !trade.contracts) {
    return "Contracts are required.";
  }

  if ((trade.sizeType || "lots") === "lots" && !trade.lots) {
    return "Lots are required.";
  }

  if ((trade.outcome === "Win" || trade.outcome === "Loss") && !trade.amount) {
    return "Add an amount when marking a trade as Win or Loss.";
  }

  return "";
}

function resetForm() {
  editingTradeId = "";
  tradeIdInput.value = "";
  form.tradeDate.value = new Date().toISOString().slice(0, 10);
  form.symbol.value = getDefaultOption("symbols");
  form.session.value = getDefaultOption("sessions");
  form.account.value = getDefaultOption("accounts");
  form.strategy.value = getDefaultOption("strategies");
  form.marketType.value = getDefaultMarketType();
  syncMarketTypeField();
  form.lots.value = "0.01";
  form.contracts.value = "1";
  syncSizeFields();
  form.outcome.value = "Pending";
  form.amount.value = "";
  DISCIPLINE_RULES.forEach((rule) => {
    form[rule.key].checked = false;
  });
  form.notes.value = "";
  notesDisclosure.open = false;
  formTitle.textContent = "Add trade";
  submitButton.textContent = "Add trade";
  cancelEditButton.classList.add("hidden");
}

function startEdit(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  tradeIdInput.value = trade.id;
  editingTradeId = trade.id;
  form.tradeDate.value = trade.tradeDate;
  preserveOption(form.symbol, trade.symbol || getDefaultOption("symbols"));
  preserveOption(form.session, trade.session || getDefaultOption("sessions"));
  preserveOption(form.account, trade.account || getDefaultOption("accounts"));
  preserveOption(form.strategy, trade.strategy || getDefaultOption("strategies"));
  preserveOption(form.marketType, getTradeMarketType(trade));
  syncMarketTypeField();
  form.lots.value = formatLots(getTradeLots(trade));
  form.contracts.value = trade.contracts || "1";
  syncSizeFields();
  form.outcome.value = trade.outcome || "Pending";
  form.amount.value = trade.amount || "";
  const discipline = getTradeDiscipline(trade);
  DISCIPLINE_RULES.forEach((rule) => {
    form[rule.key].checked = Boolean(discipline[rule.key]);
  });
  form.notes.value = trade.notes;
  notesDisclosure.open = Boolean(trade.notes);
  formTitle.textContent = "Edit trade";
  submitButton.textContent = "Save changes";
  cancelEditButton.classList.remove("hidden");
  openTradeModal();
}

function deleteTrade(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  const confirmed = window.confirm(
    `Delete this ${trade.symbol} trade from ${trade.tradeDate}?\n\nThis cannot be undone.`,
  );
  if (!confirmed) {
    return;
  }

  trades = trades.filter((item) => item.id !== id);
  saveTrades();
  render();
  showToast("Trade deleted", "warning");
}

function exportCsv() {
  const rows = [
    [
      "Date",
      "Symbol",
      "Market",
      "Session",
      "Account",
      "Strategy",
      "Size Type",
      "Lots",
      "Contracts",
      "Total Lots",
      "Win / Loss",
      "Amount",
      "Discipline Score",
      "Plan Followed",
      "Early Entry",
      "Stop Moved",
      "Overtraded",
      "Early Exit",
      "Notes",
    ],
    ...trades.map((trade) => {
      const discipline = getTradeDiscipline(trade);
      return [
        trade.tradeDate,
        trade.symbol,
        getTradeMarketType(trade),
        trade.session || getDefaultOption("sessions"),
        trade.account || getDefaultOption("accounts"),
        trade.strategy,
        getTradeSizeType(trade),
        trade.lots,
        trade.contracts || "",
        formatLots(getTradeLots(trade)),
        trade.outcome || "Pending",
        trade.amount || "",
        getDisciplineScore(trade) === null ? "" : `${getDisciplineScore(trade)}/${DISCIPLINE_MAX_SCORE}`,
        discipline.followedPlan ? "Yes" : "No",
        discipline.enteredEarly ? "Yes" : "No",
        discipline.movedSl ? "Yes" : "No",
        discipline.overtraded ? "Yes" : "No",
        discipline.exitedEarly ? "Yes" : "No",
        trade.notes,
      ];
    }),
  ];

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `trades-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("CSV exported");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const trade = readForm();
  const validationMessage = validateTrade(trade);
  if (validationMessage) {
    window.alert(validationMessage);
    return;
  }

  const existingIndex = trades.findIndex((item) => item.id === trade.id);
  if (existingIndex >= 0) {
    trades[existingIndex] = trade;
    showToast("Trade updated");
  } else {
    trades.push(trade);
    showToast("Trade added");
  }

  saveTrades();
  resetForm();
  currentTablePage = 1;
  render();
  closeDialog(tradeModal);
});

tableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    const row = event.target.closest("tr[data-trade-id]");
    if (row) {
      openTradeDrawer(row.dataset.tradeId);
    }
    return;
  }

  if (button.dataset.action === "edit") {
    startEdit(button.dataset.id);
  }

  if (button.dataset.action === "delete") {
    deleteTrade(button.dataset.id);
  }

  if (button.dataset.action === "view-note") {
    openNoteModal(button.dataset.id);
  }
});

symbolFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
sessionFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
accountFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
strategyFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
marketTypeFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
dashboardAccountFilter.addEventListener("change", render);
marketTypeInput.addEventListener("change", syncSizeFromMarket);
reviewModeButton.addEventListener("click", () => {
  reviewMode = !reviewMode;
  reviewModeButton.classList.toggle("active", reviewMode);
  currentTablePage = 1;
  renderTable();
  showToast(reviewMode ? "Review mode on" : "Review mode off");
});
densityToggleButton.addEventListener("click", () => {
  tableDensity = tableDensity === "comfortable" ? "compact" : "comfortable";
  document.body.classList.toggle("compact-table", tableDensity === "compact");
  densityToggleButton.classList.toggle("active", tableDensity === "compact");
  densityToggleButton.textContent = tableDensity === "compact" ? "Comfort Rows" : "Compact Rows";
});
performanceWeekMode.addEventListener("click", () => {
  performanceMode = "week";
  renderPerformanceCalendar();
});
performanceMonthMode.addEventListener("click", () => {
  performanceMode = "month";
  renderPerformanceCalendar();
});
performancePeriodSelect.addEventListener("change", renderPerformanceCalendar);
cancelEditButton.addEventListener("click", resetForm);
openTradeModalButton.addEventListener("click", startAddTradeFlow);
emptyAddTradeButton.addEventListener("click", startAddTradeFlow);
emptyConfigButton.addEventListener("click", openConfigModal);
closeTradeModalButton.addEventListener("click", closeTradeModal);
openConfigButton.addEventListener("click", openConfigModal);
closeConfigButton.addEventListener("click", closeConfigModal);
closeNoteButton.addEventListener("click", closeNoteModal);
openResetPasscodeButton.addEventListener("click", openResetPasscodeModal);
closeResetPasscodeButton.addEventListener("click", closeResetPasscodeModal);
closeTradeDrawerButton.addEventListener("click", closeTradeDrawer);
drawerPrevButton.addEventListener("click", () => stepTradeDrawer(-1));
drawerNextButton.addEventListener("click", () => stepTradeDrawer(1));
drawerEditButton.addEventListener("click", () => {
  const id = selectedTradeId;
  closeTradeDrawer();
  startEdit(id);
});
logoutButton.addEventListener("click", logout);
userMenuButton.addEventListener("click", () => {
  const isOpen = !userPopover.classList.contains("hidden");
  userPopover.classList.toggle("hidden", isOpen);
  userMenuButton.setAttribute("aria-expanded", String(!isOpen));
});
prevPageButton.addEventListener("click", () => {
  currentTablePage = Math.max(1, currentTablePage - 1);
  renderTable();
});
nextPageButton.addEventListener("click", () => {
  currentTablePage += 1;
  renderTable();
});
exportButton.addEventListener("click", exportCsv);

configGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-config-action]");
  if (!button) {
    return;
  }

  const key = button.dataset.configKey;
  if (button.dataset.configAction === "add") {
    const input = button.closest(".config-section").querySelector("input");
    addConfigValue(key, input.value);
    input.value = "";
  }

  if (button.dataset.configAction === "remove") {
    removeConfigValue(key, button.dataset.configValue);
  }
});

configGrid.addEventListener("change", (event) => {
  if (!event.target.matches("[data-market-type-toggle]")) {
    return;
  }

  const selected = [...configGrid.querySelectorAll("[data-market-type-toggle]:checked")].map((input) => input.value);
  appConfig.marketTypes = normalizeMarketTypes(selected);
  saveConfig();
  syncConfiguredInputs();
  resetForm();
  render();
});

configGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.target.tagName !== "INPUT" || event.target.dataset.balanceAccount) {
    return;
  }

  event.preventDefault();
  const section = event.target.closest(".config-section");
  if (!section?.dataset.configKey) {
    return;
  }
  addConfigValue(section.dataset.configKey, event.target.value);
  event.target.value = "";
});

configGrid.addEventListener("input", (event) => {
  const account = event.target.dataset.balanceAccount;
  if (!account) {
    return;
  }

  appConfig.accountBalances = {
    ...appConfig.accountBalances,
    [account]: event.target.value.trim(),
  };
  saveConfig();
  renderAccountBalances();
});

configModal.addEventListener("click", (event) => {
  if (event.target === configModal) {
    closeConfigModal();
  }
});

passcodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const enteredPasscode = passcodeInput.value.trim().toUpperCase();
  passcodeError.textContent = "";

  if (!enteredPasscode) {
    passcodeError.textContent = "Enter your passcode.";
    return;
  }

  if (!window.callSupabaseFunction) {
    passcodeError.textContent = "Invalid passcode.";
    return;
  }

  setButtonLoading(passcodeSubmitButton, true, "Unlocking...");
  passcodeInput.disabled = true;

  try {
    if (failedPasscodeAttempts > 0) {
      await new Promise((resolve) => {
        window.setTimeout(resolve, Math.min(failedPasscodeAttempts * 350, 1400));
      });
    }

    const inputHash = await sha256(`${PASSCODE_SALT}:${enteredPasscode}`);
    let matchedUser = null;

    if (window.callSupabaseFunction) {
      try {
        const result = await callSupabaseFunction("login", { passcodeHash: inputHash });
        matchedUser = result.user;
      } catch {
        matchedUser = null;
      }
    }

    if (!matchedUser) {
      failedPasscodeAttempts += 1;
      passcodeInput.value = "";
      passcodeError.textContent = "Invalid passcode.";
      passcodeInput.focus();
      return;
    }

    failedPasscodeAttempts = 0;
    passcodeInput.value = "";
    await setAppUnlocked(matchedUser.id, matchedUser.label, matchedUser.email, matchedUser.role, inputHash, false);
    maybeOpenConfigForNewUser();
  } finally {
    setButtonLoading(passcodeSubmitButton, false);
    passcodeInput.disabled = false;
  }
});

tradeModal.addEventListener("click", (event) => {
  if (event.target === tradeModal) {
    closeTradeModal();
  }
});

tradeModal.addEventListener("cancel", () => {
  resetForm();
});

noteModal.addEventListener("click", (event) => {
  if (event.target === noteModal) {
    closeNoteModal();
  }
});

tradeDetailDrawer.addEventListener("click", (event) => {
  if (event.target === tradeDetailDrawer) {
    closeTradeDrawer();
  }
});

resetPasscodeModal.addEventListener("click", (event) => {
  if (event.target === resetPasscodeModal) {
    closeResetPasscodeModal();
  }
});

resetPasscodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await resetCurrentUserPasscode();
});

confirmResetPasscodeButton.addEventListener("click", async () => {
  setButtonLoading(confirmResetPasscodeButton, true, "Logging out...");
  try {
    closeResetPasscodeModal();
    await logout();
  } finally {
    setButtonLoading(confirmResetPasscodeButton, false);
  }
});

[tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal].forEach((modal) => {
  modal.addEventListener("close", updateModalScrollLock);
});

clearButton.addEventListener("click", () => {
  if (!trades.length) {
    return;
  }

  const confirmed = window.confirm(
    `Clear all ${trades.length} trades for this user?\n\nThis cannot be undone.`,
  );
  if (!confirmed) {
    return;
  }

  trades = [];
  saveTrades();
  resetForm();
  currentTablePage = 1;
  render();
  showToast("Trades cleared", "warning");
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

onboardingConfigButton.addEventListener("click", () => {
  closeDialog(onboardingModal);
  openConfigModal();
});

analyticsTabButtons.forEach((button) => {
  button.addEventListener("click", () => showAnalyticsTab(button.dataset.analyticsTab));
});

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName);
  if (event.key === "Escape") {
    [tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal].forEach((modal) => {
      if (modal.open) {
        closeDialog(modal);
      }
    });
  }

  if (isTyping || document.body.classList.contains("auth-locked") || document.body.classList.contains("modal-open")) {
    return;
  }

  if (event.key.toLowerCase() === "a") {
    event.preventDefault();
    startAddTradeFlow();
  }

  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    showView(document.querySelector("#trackerView").classList.contains("active") ? "calculatorView" : "trackerView");
  }
});

function calcEl(id) {
  return document.querySelector(`#${id}`);
}

function calcNumber(value) {
  const number = parseFloat(value);
  return Number.isFinite(number) ? number : NaN;
}

function calcFormat(value, decimals = 2) {
  return Number.isFinite(value)
    ? value.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : "-";
}

function calcSymbol() {
  return calcEl("calcCurrency").value.split(" ")[0];
}

function getCalculatorUnit() {
  return calculatorMarketType === "Futures" ? "Contracts" : "Lots";
}

function getCalculatorUnitSingular() {
  return calculatorMarketType === "Futures" ? "contract" : "lot";
}

function getCalculatorRoundingLabel() {
  return calculatorMarketType === "Futures" ? "1 contract" : "0.01 lot";
}

function roundCalculatorSize(raw) {
  return calculatorMarketType === "Futures" ? Math.floor(raw) : Math.floor(raw * 100) / 100;
}

function formatCalculatorSize(value) {
  return calcFormat(value, calculatorMarketType === "Futures" ? 0 : 2);
}

function syncCalculatorMarketType() {
  calculatorMarketType = calcEl("calcMarketType").value === "Futures" ? "Futures" : "CFD";
  const unit = getCalculatorUnit();
  const singular = getCalculatorUnitSingular();
  calcEl("calcTypePill").textContent = calculatorMarketType;
  calcEl("calcRoundingPill").textContent = getCalculatorRoundingLabel();
  calcEl("calcVppLabel").textContent = `Value / pt (1 ${singular})`;
  calcEl("calcHeroUnit").textContent = unit;
  calcEl("calcHeroSub").textContent = `rounded down · nearest ${getCalculatorRoundingLabel()}`;
  calcEl("calcVppTooltip").textContent =
    calculatorMarketType === "Futures"
      ? "This is the money gained or lost when 1 contract moves by 1 point. To find it, check the futures contract specification for the tick or point value, or confirm it in your trading platform's contract details."
      : "This is the money gained or lost when a 1.00 lot trade moves by 1 point. To find it, open your broker or trading platform, check the contract/specification details for the symbol, or use a tiny test calculation: note the P/L change for a 1 point move at 1.00 lot.";
  calcEl("calcVpp").disabled = false;
}

function setCalculatorHint(id, type, message) {
  const element = calcEl(id);
  if (!element) {
    return;
  }

  element.className = `field-hint ${type || ""}`.trim();
  element.textContent = message || "";
}

function setCalculatorInputState(id, state) {
  const element = calcEl(id);
  if (!element) {
    return;
  }

  element.classList.remove("input-error", "input-warning", "input-ok");
  if (state) {
    element.classList.add(`input-${state}`);
  }
}

function validateCalculatorInputs() {
  const account = calcNumber(calcEl("calcAccount").value);
  const riskValue = calcNumber(calcEl("calcRiskVal").value);
  const stopLoss = calcNumber(calcEl("calcSl").value);
  const valuePerPoint = calcNumber(calcEl("calcVpp").value);
  let valid = true;

  if (calculatorTouched.calcAccount) {
    if (!calcEl("calcAccount").value) {
      setCalculatorInputState("calcAccount", "error");
      setCalculatorHint("hintCalcAccount", "error", "Required");
      valid = false;
    } else if (account <= 0) {
      setCalculatorInputState("calcAccount", "error");
      setCalculatorHint("hintCalcAccount", "error", "Must be greater than 0");
      valid = false;
    } else {
      setCalculatorInputState("calcAccount", "ok");
      setCalculatorHint("hintCalcAccount", "", "");
    }
  }

  if (calculatorTouched.calcRiskVal) {
    if (!calcEl("calcRiskVal").value) {
      setCalculatorInputState("calcRiskVal", "error");
      setCalculatorHint("hintCalcRisk", "error", "Required");
      valid = false;
    } else if (riskValue <= 0) {
      setCalculatorInputState("calcRiskVal", "error");
      setCalculatorHint("hintCalcRisk", "error", "Must be greater than 0");
      valid = false;
    } else if (calculatorMode === "pct" && riskValue > 10) {
      setCalculatorInputState("calcRiskVal", "error");
      setCalculatorHint("hintCalcRisk", "error", "Risk over 10% is extremely high");
      valid = false;
    } else if (calculatorMode === "pct" && riskValue > 5) {
      setCalculatorInputState("calcRiskVal", "warning");
      setCalculatorHint("hintCalcRisk", "warning", "High risk - consider reducing");
    } else if (calculatorMode === "pct" && riskValue > 2) {
      setCalculatorInputState("calcRiskVal", "warning");
      setCalculatorHint("hintCalcRisk", "warning", "Above recommended 1-2%");
    } else {
      setCalculatorInputState("calcRiskVal", "ok");
      setCalculatorHint("hintCalcRisk", "", "");
    }
  }

  if (calculatorTouched.calcSl) {
    if (!calcEl("calcSl").value) {
      setCalculatorInputState("calcSl", "error");
      setCalculatorHint("hintCalcSl", "error", "Required");
      valid = false;
    } else if (stopLoss <= 0) {
      setCalculatorInputState("calcSl", "error");
      setCalculatorHint("hintCalcSl", "error", "Must be greater than 0");
      valid = false;
    } else {
      setCalculatorInputState("calcSl", "ok");
      setCalculatorHint("hintCalcSl", "", "");
    }
  }

  if (calculatorTouched.calcVpp) {
    if (!calcEl("calcVpp").value) {
      setCalculatorInputState("calcVpp", "error");
      setCalculatorHint("hintCalcVpp", "error", "Required");
      valid = false;
    } else if (valuePerPoint <= 0) {
      setCalculatorInputState("calcVpp", "error");
      setCalculatorHint("hintCalcVpp", "error", "Must be greater than 0");
      valid = false;
    } else {
      setCalculatorInputState("calcVpp", "ok");
      setCalculatorHint("hintCalcVpp", "", "");
    }
  }

  return valid;
}

function touchCalculatorInputs() {
  ["calcAccount", "calcRiskVal", "calcSl", "calcVpp"].forEach((id) => {
    calculatorTouched[id] = true;
  });
}

function setCalculatorMode(mode) {
  calculatorMode = mode;
  calcEl("calcBtnPct").classList.toggle("active", mode === "pct");
  calcEl("calcBtnAmt").classList.toggle("active", mode === "amt");
  calcEl("calcRiskLabel").textContent = mode === "pct" ? "Risk %" : "Risk amount";
  calcEl("calcRiskVal").placeholder = mode === "pct" ? "e.g. 1" : "e.g. 100";

  if (calculatorTouched.calcRiskVal) {
    validateCalculatorInputs();
  }

  calculatePositionSize();
}

function clearCalculatorResults() {
  calcEl("calcHeroNum").textContent = "-";
  calcEl("calcHeroNum").classList.remove("active");
  calcEl("calcHeroUnit").classList.remove("active");
  calcEl("calcRawVal").textContent = "enter values above";
  calcEl("calcMRiskAmt").textContent = "-";
  calcEl("calcMRiskSub").textContent = "target";
  calcEl("calcMActual").textContent = "-";
  calcEl("calcMVpp").textContent = "-";
  calcEl("calcMPct").textContent = "-";
  calcEl("calcBadge").innerHTML = '<span class="badge pending">awaiting input</span>';
}

function calculatePositionSize() {
  syncCalculatorMarketType();
  validateCalculatorInputs();

  const account = calcNumber(calcEl("calcAccount").value);
  const riskValue = calcNumber(calcEl("calcRiskVal").value);
  const stopLoss = calcNumber(calcEl("calcSl").value);
  const valuePerPoint = calcNumber(calcEl("calcVpp").value);
  const currency = calcSymbol();

  let riskAmount = NaN;
  if (calculatorMode === "pct") {
    if (Number.isFinite(account) && account > 0 && Number.isFinite(riskValue) && riskValue > 0) {
      riskAmount = account * (riskValue / 100);
    }
  } else if (Number.isFinite(riskValue) && riskValue > 0) {
    riskAmount = riskValue;
  }

  if (
    !Number.isFinite(account) ||
    account <= 0 ||
    !Number.isFinite(riskAmount) ||
    riskAmount <= 0 ||
    !Number.isFinite(stopLoss) ||
    stopLoss <= 0 ||
    !Number.isFinite(valuePerPoint) ||
    valuePerPoint <= 0
  ) {
    clearCalculatorResults();
    return;
  }

  const raw = riskAmount / (stopLoss * valuePerPoint);
  const rounded = roundCalculatorSize(raw);
  const actual = rounded * stopLoss * valuePerPoint;
  const valueAtSize = rounded * valuePerPoint;
  const actualPct = Number.isFinite(account) && account > 0 ? (actual / account) * 100 : NaN;
  const minimumContractRisk = stopLoss * valuePerPoint;
  const minimumContractPct =
    calculatorMarketType === "Futures" && Number.isFinite(account) && account > 0
      ? (minimumContractRisk / account) * 100
      : NaN;

  calcEl("calcHeroNum").textContent = formatCalculatorSize(rounded);
  calcEl("calcHeroNum").classList.add("active");
  calcEl("calcHeroUnit").classList.add("active");
  calcEl("calcRawVal").textContent = `${calcFormat(raw, 3)} ${getCalculatorUnit().toLowerCase()}`;
  calcEl("calcMRiskAmt").textContent = `${currency}${calcFormat(riskAmount)}`;
  calcEl("calcMRiskSub").textContent = Number.isFinite(actualPct) ? `${calcFormat(actualPct, 2)}% of account` : "target";
  calcEl("calcMActual").textContent = `${currency}${calcFormat(actual)}`;
  calcEl("calcMVpp").textContent = `${currency}${calcFormat(valueAtSize, 2)}`;
  calcEl("calcMPct").textContent = Number.isFinite(actualPct) ? `${calcFormat(actualPct, 2)}%` : "-";

  if (calculatorMarketType === "Futures" && rounded === 0 && raw > 0) {
    calcEl("calcMRiskSub").textContent = "target is below 1 contract";
    calcEl("calcBadge").innerHTML = `<span class="badge open">Below 1 contract · 1 risks ${currency}${calcFormat(minimumContractRisk)}${
      Number.isFinite(minimumContractPct) ? ` (${calcFormat(minimumContractPct, 2)}%)` : ""
    }</span>`;
    return;
  }

  if (Number.isFinite(actualPct)) {
    const outcomeClass = actualPct <= 2 ? "win" : actualPct <= 5 ? "open" : "loss";
    const label =
      actualPct <= 1
        ? "Conservative"
        : actualPct <= 2
          ? "Moderate"
          : actualPct <= 5
            ? "Elevated"
            : "High risk";
    calcEl("calcBadge").innerHTML = `<span class="badge ${outcomeClass}">${label} · ${calcFormat(actualPct, 2)}%</span>`;
  }
}

function resetCalculator() {
  ["calcAccount", "calcRiskVal", "calcSl", "calcVpp"].forEach((id) => {
    calcEl(id).value = "";
    setCalculatorInputState(id, null);
  });
  calculatorTouched = {};
  setCalculatorHint("hintCalcAccount", "", "");
  setCalculatorHint("hintCalcRisk", "", "");
  setCalculatorHint("hintCalcSl", "", "");
  setCalculatorHint("hintCalcVpp", "", "");
  calcEl("calcCurrency").value = "£";
  calcEl("calcMarketType").value = "CFD";
  syncCalculatorMarketType();
  setCalculatorMode("pct");
  clearCalculatorResults();
}

["calcAccount", "calcRiskVal", "calcSl", "calcVpp"].forEach((id) => {
  calcEl(id).addEventListener("input", () => {
    calculatorTouched[id] = true;
    calculatePositionSize();
  });
  calcEl(id).addEventListener("blur", () => {
    calculatorTouched[id] = true;
    validateCalculatorInputs();
  });
});

calcEl("calcCurrency").addEventListener("change", calculatePositionSize);
calcEl("calcMarketType").addEventListener("change", calculatePositionSize);
calcEl("calcBtnPct").addEventListener("click", () => setCalculatorMode("pct"));
calcEl("calcBtnAmt").addEventListener("click", () => setCalculatorMode("amt"));
calcEl("calcCalculateButton").addEventListener("click", () => {
  touchCalculatorInputs();
  calculatePositionSize();
});
calcEl("calcResetButton").addEventListener("click", resetCalculator);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    userPopover.classList.add("hidden");
    userMenuButton.setAttribute("aria-expanded", "false");
  }

  if (event.key === "Enter" && calcEl("calculatorView").classList.contains("active")) {
    touchCalculatorInputs();
    calculatePositionSize();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".user-menu")) {
    userPopover.classList.add("hidden");
    userMenuButton.setAttribute("aria-expanded", "false");
  }
});

async function initialiseApp() {
  syncConfiguredInputs();
  resetForm();
  resetCalculator();
  render();
  await initialisePasscodeGate();
  if (sessionStorage.getItem(AUTH_STORAGE_KEY)) {
    maybeOpenConfigForNewUser();
  }
}

initialiseApp();
