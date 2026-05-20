const STORAGE_KEY_PREFIX = "trade-tracker:simple-v2";
const CONFIG_STORAGE_KEY_PREFIX = "trade-tools:user-config-v2";
const AUTH_STORAGE_KEY = "trade-tools:unlocked";
const AUTH_LABEL_KEY = "trade-tools:unlocked-label";
const TABLE_PAGE_SIZE = 10;
const PASSCODE_SALT = "trade-tools-v1";
const PASSCODES = [];
let remoteConfigError = "";

const passcodeGate = document.querySelector("#passcodeGate");
const passcodeForm = document.querySelector("#passcodeForm");
const passcodeInput = document.querySelector("#passcodeInput");
const passcodeError = document.querySelector("#passcodeError");

const form = document.querySelector("#tradeForm");
const tradeModal = document.querySelector("#tradeModal");
const formTitle = document.querySelector("#formTitle");
const tradeIdInput = document.querySelector("#tradeId");
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const openTradeModalButton = document.querySelector("#openTradeModalButton");
const closeTradeModalButton = document.querySelector("#closeTradeModalButton");
const configModal = document.querySelector("#configModal");
const configGrid = document.querySelector("#configGrid");
const openConfigButton = document.querySelector("#openConfigButton");
const closeConfigButton = document.querySelector("#closeConfigButton");
const noteModal = document.querySelector("#noteModal");
const noteModalText = document.querySelector("#noteModalText");
const closeNoteButton = document.querySelector("#closeNoteButton");
const tableBody = document.querySelector("#tradeTableBody");
const emptyState = document.querySelector("#emptyState");
const tablePagination = document.querySelector("#tablePagination");
const paginationStatus = document.querySelector("#paginationStatus");
const prevPageButton = document.querySelector("#prevPageButton");
const nextPageButton = document.querySelector("#nextPageButton");
const symbolFilter = document.querySelector("#symbolFilter");
const accountFilter = document.querySelector("#accountFilter");
const clearButton = document.querySelector("#clearButton");
const exportButton = document.querySelector("#exportButton");
const backupButton = document.querySelector("#backupButton");
const importButton = document.querySelector("#importButton");
const importFileInput = document.querySelector("#importFileInput");
const navButtons = document.querySelectorAll("[data-view-target]");
const appViews = document.querySelectorAll(".app-view");
const logoutButton = document.querySelector("#logoutButton");

const totalTradesEl = document.querySelector("#totalTrades");
const summarySymbolSplit = document.querySelector("#summarySymbolSplit");
const totalLotsEl = document.querySelector("#totalLots");
const winsTotalEl = document.querySelector("#winsTotal");
const lossesTotalEl = document.querySelector("#lossesTotal");
const amountTotalEl = document.querySelector("#amountTotal");
const weeklyGrid = document.querySelector("#weeklyGrid");
const weeklyTitle = document.querySelector("#weeklyTitle");
const weeklyRange = document.querySelector("#weeklyRange");
const weeklyTotalCard = document.querySelector("#weeklyTotalCard");
const weeklyTotalAmount = document.querySelector("#weeklyTotalAmount");
const weeklyTotalTrades = document.querySelector("#weeklyTotalTrades");
const weeklyTotalWinLoss = document.querySelector("#weeklyTotalWinLoss");
const weekRangeFilter = document.querySelector("#weekRangeFilter");
const strategyGrid = document.querySelector("#strategyGrid");

const DEFAULT_CONFIG = {
  symbols: [],
  sessions: [],
  accounts: [],
  strategies: [],
};

const CONFIG_FIELDS = [
  { key: "symbols", label: "Symbol", selectIds: ["symbol"], filterIds: ["symbolFilter"] },
  { key: "sessions", label: "Session", selectIds: ["session"], filterIds: [] },
  { key: "accounts", label: "Account", selectIds: ["account"], filterIds: ["accountFilter"] },
  { key: "strategies", label: "Strategy", selectIds: ["strategy"], filterIds: [] },
];

let currentUserId = "";
let currentUserLabel = "";
let trades = [];
let appConfig = structuredClone(DEFAULT_CONFIG);
let editingTradeId = "";
let calculatorMode = "pct";
let calculatorTouched = {};
let failedPasscodeAttempts = 0;
let currentTablePage = 1;

function setAppUnlocked(userId = sessionStorage.getItem(AUTH_STORAGE_KEY), userLabel = sessionStorage.getItem(AUTH_LABEL_KEY)) {
  document.body.classList.remove("auth-locked");
  passcodeGate.setAttribute("hidden", "");
  if (userId) {
    sessionStorage.setItem(AUTH_STORAGE_KEY, userId);
    sessionStorage.setItem(AUTH_LABEL_KEY, userLabel || userId);
    loadUserState(userId, userLabel || userId);
  }
}

function setAppLocked() {
  document.body.classList.add("auth-locked");
  passcodeGate.removeAttribute("hidden");
  passcodeInput.focus();
}

function logout() {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_LABEL_KEY);
  currentUserId = "";
  currentUserLabel = "";
  passcodeInput.value = "";
  passcodeError.textContent = "";
  setAppLocked();
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function getMatchingPasscode(input) {
  const inputHash = await sha256(`${PASSCODE_SALT}:${input}`);
  return PASSCODES.find((passcode) => passcode.hash === inputHash);
}

function initialisePasscodeGate() {
  const unlockedUser = sessionStorage.getItem(AUTH_STORAGE_KEY);
  const unlockedLabel = sessionStorage.getItem(AUTH_LABEL_KEY);

  if (unlockedUser) {
    setAppUnlocked(unlockedUser, unlockedLabel);
    return;
  }

  setAppLocked();
}

function getUserStorageKey(prefix) {
  return `${prefix}:${encodeURIComponent(currentUserId)}`;
}

function loadTrades() {
  if (!currentUserId) {
    return [];
  }

  try {
    return JSON.parse(localStorage.getItem(getUserStorageKey(STORAGE_KEY_PREFIX))) || [];
  } catch {
    return [];
  }
}

function saveTrades() {
  if (!currentUserId) {
    return;
  }

  localStorage.setItem(getUserStorageKey(STORAGE_KEY_PREFIX), JSON.stringify(trades));
}

function loadConfig() {
  if (!currentUserId) {
    return structuredClone(DEFAULT_CONFIG);
  }

  try {
    const savedConfig = JSON.parse(localStorage.getItem(getUserStorageKey(CONFIG_STORAGE_KEY_PREFIX))) || {};
    return {
      symbols: normalizeOptions(savedConfig.symbols, DEFAULT_CONFIG.symbols),
      sessions: normalizeOptions(savedConfig.sessions, DEFAULT_CONFIG.sessions),
      accounts: normalizeOptions(savedConfig.accounts, DEFAULT_CONFIG.accounts),
      strategies: normalizeOptions(savedConfig.strategies, DEFAULT_CONFIG.strategies),
    };
  } catch {
    return structuredClone(DEFAULT_CONFIG);
  }
}

function saveConfig() {
  if (!currentUserId) {
    return;
  }

  localStorage.setItem(getUserStorageKey(CONFIG_STORAGE_KEY_PREFIX), JSON.stringify(appConfig));
}

function loadUserState(userId, userLabel) {
  currentUserId = userId;
  currentUserLabel = userLabel;
  trades = loadTrades();
  appConfig = loadConfig();
  currentTablePage = 1;
  syncConfiguredInputs();
  resetForm();
  render();
}

function userConfigComplete() {
  return CONFIG_FIELDS.every((field) => appConfig[field.key].length > 0);
}

function normalizeOptions(options, fallback) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter(Boolean)
    : [];
  const uniqueOptions = [...new Set(cleaned)];
  return uniqueOptions.length ? uniqueOptions : [...fallback];
}

async function loadRemoteAdminConfig() {
  try {
    remoteConfigError = "";
    const response = await fetch(`./config.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      remoteConfigError = "Could not load config.json. Check that it exists in the app root.";
      return;
    }

    const remoteConfig = await response.json();
    if (Array.isArray(remoteConfig.passcodes) && remoteConfig.passcodes.length) {
      PASSCODES.length = 0;
      remoteConfig.passcodes.forEach((passcode) => {
        if (passcode.label && passcode.hash) {
          PASSCODES.push({ label: String(passcode.label), hash: String(passcode.hash) });
        }
      });
    }
  } catch {
    remoteConfigError =
      window.location.protocol === "file:"
        ? "config.json cannot be loaded from file preview. Open the app from a hosted URL or local server."
        : "Could not load config.json. Check that it exists in the app root.";
  }
}

function getDefaultOption(key) {
  return appConfig[key][0] || DEFAULT_CONFIG[key][0] || "";
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
  return parseNumber(trade.lots) * parseNumber(trade.lotMultiplier);
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

function getFilteredTrades() {
  const selectedSymbol = symbolFilter.value;
  const selectedAccount = accountFilter.value;

  return trades.filter((trade) => {
    const matchesSymbol = selectedSymbol === "All" || trade.symbol === selectedSymbol;
    const matchesAccount = selectedAccount === "All" || (trade.account || getDefaultOption("accounts")) === selectedAccount;
    return matchesSymbol && matchesAccount;
  });
}

function renderSummary() {
  const totalLots = trades.reduce((sum, trade) => sum + getTradeLots(trade), 0);
  const wins = trades.filter((trade) => trade.outcome === "Win").length;
  const losses = trades.filter((trade) => trade.outcome === "Loss").length;
  const amount = trades.reduce((sum, trade) => {
    if (trade.outcome === "Win") {
      return sum + parseNumber(trade.amount);
    }

    if (trade.outcome === "Loss") {
      return sum - parseNumber(trade.amount);
    }

    return sum;
  }, 0);

  totalTradesEl.textContent = String(trades.length);
  summarySymbolSplit.innerHTML = "";
  appConfig.symbols.forEach((symbol) => {
    const count = trades.filter((trade) => trade.symbol === symbol).length;
    const item = document.createElement("b");
    item.innerHTML = `${escapeHtml(symbol)} <em>${count}</em>`;
    summarySymbolSplit.appendChild(item);
  });
  totalLotsEl.textContent = formatLots(totalLots);
  winsTotalEl.textContent = String(wins);
  lossesTotalEl.textContent = String(losses);
  amountTotalEl.textContent = formatSummaryAmount(amount);
  amountTotalEl.className = amount > 0 ? "amount-win" : amount < 0 ? "amount-loss" : "";
}

function renderWeeklySummary() {
  const isLastWeek = weekRangeFilter.value === "last";
  const weekdays = getWeekdays(new Date(), isLastWeek ? -1 : 0);
  const weekdayKeys = new Set(weekdays.map((day) => day.key));
  const weeklyTrades = trades.filter((trade) => weekdayKeys.has(trade.tradeDate));
  const weeklyWins = weeklyTrades.filter((trade) => trade.outcome === "Win").length;
  const weeklyLosses = weeklyTrades.filter((trade) => trade.outcome === "Loss").length;
  const weeklyAmount = weeklyTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
  const weeklyResultClass = weeklyAmount > 0 ? "profit" : weeklyAmount < 0 ? "loss" : "flat";

  weeklyTitle.textContent = isLastWeek ? "Last Week" : "This Week";
  weeklyRange.textContent = `${formatShortDate(weekdays[0].date)} - ${formatShortDate(weekdays[4].date)}`;
  weeklyTotalCard.className = `weekly-total-card ${weeklyResultClass}`;
  weeklyTotalAmount.textContent = formatSummaryAmount(weeklyAmount);
  weeklyTotalTrades.textContent = String(weeklyTrades.length);
  weeklyTotalWinLoss.textContent = `${weeklyWins}/${weeklyLosses}`;
  weeklyGrid.innerHTML = "";

  weekdays.forEach((day) => {
    const dayTrades = trades.filter((trade) => trade.tradeDate === day.key);
    const wins = dayTrades.filter((trade) => trade.outcome === "Win").length;
    const losses = dayTrades.filter((trade) => trade.outcome === "Loss").length;
    const amount = dayTrades.reduce((sum, trade) => sum + getTradeAmount(trade), 0);
    const resultClass = amount > 0 ? "profit" : amount < 0 ? "loss" : "flat";

    const card = document.createElement("article");
    card.className = `weekly-card ${resultClass}`;
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
    weeklyGrid.appendChild(card);
  });
}

function renderStrategyBreakdown() {
  strategyGrid.innerHTML = "";

  appConfig.strategies.forEach((strategy) => {
    const strategyTrades = trades.filter((trade) => trade.strategy === strategy);
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

function renderTable() {
  const visibleTrades = getFilteredTrades().slice().sort((a, b) => b.tradeDate.localeCompare(a.tradeDate));
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
      row.innerHTML = `
        <td>${trade.tradeDate}</td>
        <td class="symbol-cell">${escapeHtml(trade.symbol)}</td>
        <td>${escapeHtml(trade.session || getDefaultOption("sessions"))}</td>
        <td>${escapeHtml(trade.account || getDefaultOption("accounts"))}</td>
        <td>${escapeHtml(trade.strategy || "-")}</td>
        <td>${formatLots(parseNumber(trade.lots))}</td>
        <td>${escapeHtml(trade.lotMultiplier)}</td>
        <td><span class="badge ${getOutcomeClass(trade.outcome)}">${escapeHtml(trade.outcome || "Pending")}</span></td>
        <td class="${trade.outcome === "Win" ? "amount-win" : trade.outcome === "Loss" ? "amount-loss" : "muted"}">
          ${formatAmount(trade.amount)}
        </td>
        <td class="notes-cell">
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
        <td>
          <div class="actions">
            <button class="icon-button" type="button" data-action="edit" data-id="${trade.id}">Edit</button>
            <button class="icon-button delete" type="button" data-action="delete" data-id="${trade.id}">Delete</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });

  emptyState.classList.toggle("hidden", visibleTrades.length > 0);
  tablePagination.classList.toggle("hidden", visibleTrades.length === 0);
  paginationStatus.textContent = visibleTrades.length
    ? `Showing ${pageStart + 1}-${Math.min(pageEnd, visibleTrades.length)} of ${visibleTrades.length} trades`
    : "Showing 0 trades";
  prevPageButton.disabled = currentTablePage <= 1;
  nextPageButton.disabled = currentTablePage >= totalPages;
}

function render() {
  renderSummary();
  renderWeeklySummary();
  renderStrategyBreakdown();
  renderTable();
}

function renderConfig() {
  configGrid.innerHTML = "";

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
}

function openConfigModal() {
  renderConfig();
  if (typeof configModal.showModal === "function") {
    configModal.showModal();
  } else {
    configModal.setAttribute("open", "");
  }
}

function closeConfigModal() {
  configModal.close();
}

function maybeOpenConfigForNewUser() {
  if (!userConfigComplete() && !configModal.open) {
    openConfigModal();
  }
}

function addConfigValue(key, value) {
  const nextValue = value.trim();
  if (!nextValue || appConfig[key].includes(nextValue)) {
    return;
  }

  appConfig[key] = [...appConfig[key], nextValue];
  saveConfig();
  syncConfiguredInputs();
  renderConfig();
  resetForm();
  render();
}

function removeConfigValue(key, value) {
  if (appConfig[key].length <= 1) {
    window.alert("Keep at least one value in each list.");
    return;
  }

  appConfig[key] = appConfig[key].filter((option) => option !== value);
  saveConfig();
  syncConfiguredInputs();
  renderConfig();
  resetForm();
  render();
}

function showView(viewId) {
  appViews.forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === viewId);
  });
}

function getOutcomeClass(outcome) {
  return (outcome || "Pending").toLowerCase();
}

function openTradeModal() {
  if (typeof tradeModal.showModal === "function") {
    tradeModal.showModal();
  } else {
    tradeModal.setAttribute("open", "");
  }

  form.tradeDate.focus();
}

function closeTradeModal() {
  tradeModal.close();
  resetForm();
}

function openNoteModal(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade || !trade.notes) {
    return;
  }

  noteModalText.textContent = trade.notes;
  if (typeof noteModal.showModal === "function") {
    noteModal.showModal();
  } else {
    noteModal.setAttribute("open", "");
  }
}

function closeNoteModal() {
  noteModal.close();
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
    lots: form.lots.value,
    lotMultiplier: form.lotMultiplier.value,
    outcome: form.outcome.value,
    amount: form.amount.value,
    notes: form.notes.value.trim(),
    createdAt: existingId
      ? trades.find((trade) => trade.id === existingId)?.createdAt
      : new Date().toISOString(),
  };
}

function validateTrade(trade) {
  if (!trade.tradeDate || !trade.symbol || !trade.session || !trade.account || !trade.lots || !trade.lotMultiplier) {
    return "Date, symbol, session, account, lots, and lot multiplier are required.";
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
  form.lots.value = "0.01";
  form.lotMultiplier.value = "1";
  form.outcome.value = "Pending";
  form.amount.value = "";
  form.notes.value = "";
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
  form.lots.value = trade.lots;
  form.lotMultiplier.value = trade.lotMultiplier;
  form.outcome.value = trade.outcome || "Pending";
  form.amount.value = trade.amount || "";
  form.notes.value = trade.notes;
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

  const confirmed = window.confirm(`Delete ${trade.symbol} trade?`);
  if (!confirmed) {
    return;
  }

  trades = trades.filter((item) => item.id !== id);
  saveTrades();
  render();
}

function exportCsv() {
  const rows = [
    [
      "Date",
      "Symbol",
      "Session",
      "Account",
      "Strategy",
      "Lots",
      "Lot Multiplier",
      "Total Lots",
      "Win / Loss",
      "Amount",
      "Notes",
    ],
    ...trades.map((trade) => [
      trade.tradeDate,
      trade.symbol,
      trade.session || getDefaultOption("sessions"),
      trade.account || getDefaultOption("accounts"),
      trade.strategy,
      trade.lots,
      trade.lotMultiplier,
      formatLots(getTradeLots(trade)),
      trade.outcome || "Pending",
      trade.amount || "",
      trade.notes,
    ]),
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
}

function downloadFile(contents, filename, type) {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportJsonBackup() {
  const backup = {
    app: "Trade Tracker",
    version: 1,
    exportedAt: new Date().toISOString(),
    config: appConfig,
    trades,
  };

  downloadFile(
    JSON.stringify(backup, null, 2),
    `trade-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`,
    "application/json;charset=utf-8",
  );
}

function normalizeImportedTrade(trade) {
  return {
    id: trade.id || crypto.randomUUID(),
    tradeDate: trade.tradeDate || new Date().toISOString().slice(0, 10),
    symbol: trade.symbol || getDefaultOption("symbols"),
    session: trade.session || getDefaultOption("sessions"),
    account: trade.account || getDefaultOption("accounts"),
    strategy: trade.strategy || getDefaultOption("strategies"),
    lots: trade.lots || "0.01",
    lotMultiplier: trade.lotMultiplier || "1",
    outcome: trade.outcome || "Pending",
    amount: trade.amount || "",
    notes: trade.notes || "",
    createdAt: trade.createdAt || new Date().toISOString(),
  };
}

function getTradesFromBackup(backup) {
  if (Array.isArray(backup)) {
    return backup;
  }

  if (backup && Array.isArray(backup.trades)) {
    return backup.trades;
  }

  return null;
}

function importJsonBackup(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const importedTrades = getTradesFromBackup(parsed);

      if (!importedTrades) {
        window.alert("That file does not look like a Trade Tracker backup.");
        return;
      }

      const confirmed = window.confirm(
        `Import ${importedTrades.length} trades? This will replace the trades currently saved in this browser.`,
      );

      if (!confirmed) {
        return;
      }

      trades = importedTrades.map(normalizeImportedTrade);
      if (parsed && parsed.config) {
        appConfig = {
          symbols: normalizeOptions(parsed.config.symbols, DEFAULT_CONFIG.symbols),
          sessions: normalizeOptions(parsed.config.sessions, DEFAULT_CONFIG.sessions),
          accounts: normalizeOptions(parsed.config.accounts, DEFAULT_CONFIG.accounts),
          strategies: normalizeOptions(parsed.config.strategies, DEFAULT_CONFIG.strategies),
        };
        saveConfig();
        syncConfiguredInputs();
      }
      saveTrades();
      resetForm();
      currentTablePage = 1;
      render();
      window.alert("Backup imported successfully.");
    } catch {
      window.alert("Could not import that backup. Please choose a valid JSON file.");
    } finally {
      importFileInput.value = "";
    }
  });

  reader.readAsText(file);
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
  } else {
    trades.push(trade);
  }

  saveTrades();
  resetForm();
  currentTablePage = 1;
  render();
  tradeModal.close();
});

tableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
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
accountFilter.addEventListener("change", () => {
  currentTablePage = 1;
  renderTable();
});
weekRangeFilter.addEventListener("change", renderWeeklySummary);
cancelEditButton.addEventListener("click", resetForm);
openTradeModalButton.addEventListener("click", () => {
  resetForm();
  openTradeModal();
});
closeTradeModalButton.addEventListener("click", closeTradeModal);
openConfigButton.addEventListener("click", openConfigModal);
closeConfigButton.addEventListener("click", closeConfigModal);
closeNoteButton.addEventListener("click", closeNoteModal);
logoutButton.addEventListener("click", logout);
prevPageButton.addEventListener("click", () => {
  currentTablePage = Math.max(1, currentTablePage - 1);
  renderTable();
});
nextPageButton.addEventListener("click", () => {
  currentTablePage += 1;
  renderTable();
});
exportButton.addEventListener("click", exportCsv);
backupButton.addEventListener("click", exportJsonBackup);
importButton.addEventListener("click", () => importFileInput.click());
importFileInput.addEventListener("change", () => {
  const [file] = importFileInput.files;
  if (file) {
    importJsonBackup(file);
  }
});

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

configGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.target.tagName !== "INPUT") {
    return;
  }

  event.preventDefault();
  const section = event.target.closest(".config-section");
  addConfigValue(section.dataset.configKey, event.target.value);
  event.target.value = "";
});

configModal.addEventListener("click", (event) => {
  if (event.target === configModal) {
    closeConfigModal();
  }
});

passcodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const enteredPasscode = passcodeInput.value.trim();
  passcodeError.textContent = "";

  if (!enteredPasscode) {
    passcodeError.textContent = "Enter your passcode.";
    return;
  }

  if (!PASSCODES.length) {
    passcodeError.textContent = "Invalid passcode.";
    return;
  }

  if (failedPasscodeAttempts > 0) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, Math.min(failedPasscodeAttempts * 350, 1400));
    });
  }

  const matchedPasscode = await getMatchingPasscode(enteredPasscode);

  if (!matchedPasscode) {
    failedPasscodeAttempts += 1;
    passcodeInput.value = "";
    passcodeError.textContent = "Invalid passcode.";
    passcodeInput.focus();
    return;
  }

  failedPasscodeAttempts = 0;
  passcodeInput.value = "";
  setAppUnlocked(matchedPasscode.hash, matchedPasscode.label);
  maybeOpenConfigForNewUser();
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

clearButton.addEventListener("click", () => {
  if (!trades.length) {
    return;
  }

  const confirmed = window.confirm("Clear every saved trade?");
  if (!confirmed) {
    return;
  }

  trades = [];
  saveTrades();
  resetForm();
  currentTablePage = 1;
  render();
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
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
  const rounded = Math.floor(raw * 100) / 100;
  const actual = rounded * stopLoss * valuePerPoint;
  const valueAtSize = rounded * valuePerPoint;
  const actualPct = Number.isFinite(account) && account > 0 ? (actual / account) * 100 : NaN;

  calcEl("calcHeroNum").textContent = calcFormat(rounded, 2);
  calcEl("calcHeroNum").classList.add("active");
  calcEl("calcHeroUnit").classList.add("active");
  calcEl("calcRawVal").textContent = `${calcFormat(raw, 3)} lots`;
  calcEl("calcMRiskAmt").textContent = `${currency}${calcFormat(riskAmount)}`;
  calcEl("calcMRiskSub").textContent = Number.isFinite(actualPct) ? `${calcFormat(actualPct, 2)}% of account` : "target";
  calcEl("calcMActual").textContent = `${currency}${calcFormat(actual)}`;
  calcEl("calcMVpp").textContent = `${currency}${calcFormat(valueAtSize, 2)}`;
  calcEl("calcMPct").textContent = Number.isFinite(actualPct) ? `${calcFormat(actualPct, 2)}%` : "-";

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
calcEl("calcBtnPct").addEventListener("click", () => setCalculatorMode("pct"));
calcEl("calcBtnAmt").addEventListener("click", () => setCalculatorMode("amt"));
calcEl("calcCalculateButton").addEventListener("click", calculatePositionSize);
calcEl("calcResetButton").addEventListener("click", resetCalculator);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && calcEl("calculatorView").classList.contains("active")) {
    calculatePositionSize();
  }
});

async function initialiseApp() {
  await loadRemoteAdminConfig();
  syncConfiguredInputs();
  resetForm();
  resetCalculator();
  render();
  initialisePasscodeGate();
  if (sessionStorage.getItem(AUTH_STORAGE_KEY)) {
    maybeOpenConfigForNewUser();
  }
}

initialiseApp();
