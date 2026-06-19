const AUTH_STORAGE_KEY = "trade-tools:unlocked";
const AUTH_LABEL_KEY = "trade-tools:unlocked-label";
const AUTH_EMAIL_KEY = "trade-tools:unlocked-email";
const AUTH_ROLE_KEY = "trade-tools:unlocked-role";
const AUTH_HASH_KEY = "trade-tools:unlocked-passcode-hash";
const AUTH_TRIAL_ENABLED_KEY = "trade-tools:unlocked-trial-enabled";
const AUTH_TRIAL_ENDS_KEY = "trade-tools:unlocked-trial-ends";
const AUTH_FEATURES_KEY = "trade-tools:unlocked-features";
const ONBOARDING_DISMISSED_KEY = "trade-tools:onboarding-dismissed-user";
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
const tradeFormError = document.querySelector("#tradeFormError");
const cancelEditButton = document.querySelector("#cancelEditButton");
const openTradeModalButton = document.querySelector("#openTradeModalButton");
const closeTradeModalButton = document.querySelector("#closeTradeModalButton");
const marketTypeInput = document.querySelector("#marketType");
const marketTypeField = document.querySelector("#marketTypeField");
const sessionField = document.querySelector("#sessionField");
const lotsField = document.querySelector("#lotsField");
const contractsField = document.querySelector("#contractsField");
const notesDisclosure = document.querySelector("#notesDisclosure");
const priceDetailsDisclosure = document.querySelector("#priceDetailsDisclosure");
const pricePointsPreview = document.querySelector("#pricePointsPreview");
const priceLegsList = document.querySelector("#priceLegsList");
const addPriceLegButton = document.querySelector("#addPriceLegButton");
const disciplineDisclosure = document.querySelector("#disciplineDisclosure");
const tradingRulesDisclosure = document.querySelector("#tradingRulesDisclosure");
const tradingRulesOptions = document.querySelector("#tradingRulesOptions");
const tradingRulesSummary = document.querySelector("#tradingRulesSummary");
const configModal = document.querySelector("#configModal");
const configGrid = document.querySelector("#configGrid");
const configTabs = document.querySelector("#configTabs");
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
const sessionFilterField = document.querySelector("#sessionFilterField");
const accountFilter = document.querySelector("#accountFilter");
const strategyFilter = document.querySelector("#strategyFilter");
const marketTypeFilter = document.querySelector("#marketTypeFilter");
const clearButton = document.querySelector("#clearButton");
const exportButton = document.querySelector("#exportButton");
const navButtons = document.querySelectorAll("[data-view-target]");
const appViews = document.querySelectorAll(".app-view");
const challengeGrid = document.querySelector("#challengeGrid");
const challengeSummaryGrid = document.querySelector("#challengeSummaryGrid");
const challengeModal = document.querySelector("#challengeModal");
const challengeForm = document.querySelector("#challengeForm");
const challengeFormTitle = document.querySelector("#challengeFormTitle");
const challengeFormEyebrow = document.querySelector("#challengeFormEyebrow");
const challengeFormHelp = document.querySelector("#challengeFormHelp");
const saveChallengeButton = document.querySelector("#saveChallengeButton");
const openCreateChallengeButton = document.querySelector("#openCreateChallengeButton");
const inviteChallengeModal = document.querySelector("#inviteChallengeModal");
const inviteChallengeForm = document.querySelector("#inviteChallengeForm");
const inviteChallengeTitle = document.querySelector("#inviteChallengeTitle");
const challengeTradeSection = document.querySelector("#challengeTradeSection");
const tradeChallengeInput = document.querySelector("#tradeChallenge");
const challengeRequirements = document.querySelector("#challengeRequirements");
const challengeLimitMessage = document.querySelector("#challengeLimitMessage");
const challengeSymbolSetup = document.querySelector("#challengeSymbolSetup");
const challengeSymbolSetupTitle = document.querySelector("#challengeSymbolSetupTitle");
const challengeSymbolSetupText = document.querySelector("#challengeSymbolSetupText");
const challengeExistingSymbol = document.querySelector("#challengeExistingSymbol");
const challengeNewSymbol = document.querySelector("#challengeNewSymbol");
const saveChallengeSymbolButton = document.querySelector("#saveChallengeSymbolButton");
const adminNavLink = document.querySelector("#adminNavLink");
const hubWeekAmount = document.querySelector("#hubWeekAmount");
const hubTrades = document.querySelector("#hubTrades");
const hubWins = document.querySelector("#hubWins");
const hubLosses = document.querySelector("#hubLosses");
const hubWinRate = document.querySelector("#hubWinRate");
const hubTrainingProgress = document.querySelector("#hubTrainingProgress");
const hubTrainingProgressBar = document.querySelector("#hubTrainingProgressBar");
const hubTrainingDetail = document.querySelector("#hubTrainingDetail");
const hubNewsList = document.querySelector("#hubNewsList");
const hubReviewStatus = document.querySelector("#hubReviewStatus");
const hubPlanStatus = document.querySelector("#hubPlanStatus");
const hubPlanDetail = document.querySelector("#hubPlanDetail");
const hubPlanButton = document.querySelector("#hubPlanButton");
const hubNewsButton = document.querySelector("#hubNewsButton");
const hubReviewButton = document.querySelector("#hubReviewButton");
const hubChallengesPanel = document.querySelector("#hubChallengesPanel");
const hubChallengesTitle = document.querySelector("#hubChallengesTitle");
const hubChallengeList = document.querySelector("#hubChallengeList");
const hubChallengesButton = document.querySelector("#hubChallengesButton");
const dashboardSetupAlert = document.querySelector("#dashboardSetupAlert");
const dashboardSetupDetail = document.querySelector("#dashboardSetupDetail");
const dashboardSetupProgress = document.querySelector("#dashboardSetupProgress");
const dashboardSetupButton = document.querySelector("#dashboardSetupButton");
const reviewWeekRange = document.querySelector("#reviewWeekRange");
const reviewPrevWeek = document.querySelector("#reviewPrevWeek");
const reviewNextWeek = document.querySelector("#reviewNextWeek");
const reviewSummaryGrid = document.querySelector("#reviewSummaryGrid");
const reviewInsights = document.querySelector("#reviewInsights");
const reviewTradesList = document.querySelector("#reviewTradesList");
const weeklyReviewForm = document.querySelector("#weeklyReviewForm");
const saveWeeklyReviewButton = document.querySelector("#saveWeeklyReviewButton");
const reviewTabStatus = document.querySelector("#reviewTabStatus");
const planTabStatus = document.querySelector("#planTabStatus");
const weeklyPlanDrawer = document.querySelector("#weeklyPlanDrawer");
const weeklyPlanBackdrop = document.querySelector("#weeklyPlanBackdrop");
const weeklyPlanForm = document.querySelector("#weeklyPlanForm");
const planWeekRange = document.querySelector("#planWeekRange");
const planProgressGrid = document.querySelector("#planProgressGrid");
const openWeeklyPlanButton = document.querySelector("#openWeeklyPlanButton");
const closeWeeklyPlanButton = document.querySelector("#closeWeeklyPlanButton");
const trainingProgressBar = document.querySelector("#trainingProgressBar");
const trainingHome = document.querySelector("#trainingHome");
const trainingLessonWorkspace = document.querySelector("#trainingLessonWorkspace");
const trainingChapterGrid = document.querySelector("#trainingChapterGrid");
const trainingCourseProgress = document.querySelector("#trainingCourseProgress");
const trainingCourseProgressBar = document.querySelector("#trainingCourseProgressBar");
const continueTrainingButton = document.querySelector("#continueTrainingButton");
const trainingPathNav = document.querySelector("#trainingPathNav");
const trainingPathTitle = document.querySelector("#trainingPathTitle");
const trainingPathDescription = document.querySelector("#trainingPathDescription");
const trainingPathMeta = document.querySelector("#trainingPathMeta");
const backToTrainingHome = document.querySelector("#backToTrainingHome");
const trainingStepList = document.querySelector("#trainingStepList");
const trainingScore = document.querySelector("#trainingScore");
const trainingStepLabel = document.querySelector("#trainingStepLabel");
const trainingTitle = document.querySelector("#trainingTitle");
const trainingContent = document.querySelector("#trainingContent");
const trainingFeedback = document.querySelector("#trainingFeedback");
const trainingBackButton = document.querySelector("#trainingBackButton");
const trainingNextButton = document.querySelector("#trainingNextButton");
const restartTrainingButton = document.querySelector("#restartTrainingButton");
const openWeeklyReviewButton = document.querySelector("#openWeeklyReviewButton");
const closeWeeklyReviewButton = document.querySelector("#closeWeeklyReviewButton");
const weeklyReviewDrawer = document.querySelector("#weeklyReviewDrawer");
const weeklyReviewBackdrop = document.querySelector("#weeklyReviewBackdrop");

// These drawers can be opened from Dashboard or Journal. Moving them outside
// the view containers prevents an inactive view from hiding the overlay.
[weeklyPlanDrawer, weeklyPlanBackdrop, weeklyReviewDrawer, weeklyReviewBackdrop].forEach((element) => {
  if (element) document.body.appendChild(element);
});

const dashboardSectionButtons = document.querySelectorAll("[data-dashboard-section]");
const dashboardSectionPanels = document.querySelectorAll("[data-dashboard-panel]");
const analyticsTabButtons = document.querySelectorAll("[data-analytics-tab]");
const analyticsTabPanels = {
  overview: document.querySelector("#analyticsOverviewPanel"),
  breakdowns: document.querySelector("#analyticsBreakdownPanel"),
  discipline: document.querySelector("#analyticsDisciplinePanel"),
};
const logoutButton = document.querySelector("#logoutButton");
const openResetPasscodeButton = document.querySelector("#openResetPasscodeButton");
const userMenuButton = document.querySelector("#userMenuButton");
const userPopover = document.querySelector("#userPopover");
const userMenuName = document.querySelector("#userMenuName");
const userMenuEmail = document.querySelector("#userMenuEmail");
const userMenuRole = document.querySelector("#userMenuRole");
const trialBanner = document.querySelector("#trialBanner");
const trialBannerText = document.querySelector("#trialBannerText");
const newsAlertButton = document.querySelector("#newsAlertButton");
const newsAlertBadge = document.querySelector("#newsAlertBadge");
const newsDrawer = document.querySelector("#newsDrawer");
const newsDrawerBackdrop = document.querySelector("#newsDrawerBackdrop");
const closeNewsDrawerButton = document.querySelector("#closeNewsDrawerButton");
const newsEventsList = document.querySelector("#newsEventsList");
const newsFilterButtons = document.querySelectorAll("[data-news-filter]");
const saveStatus = document.querySelector("#saveStatus");
const toastStack = document.querySelector("#toastStack");
const confirmModal = document.querySelector("#confirmModal");
const confirmModalEyebrow = document.querySelector("#confirmModalEyebrow");
const confirmModalTitle = document.querySelector("#confirmModalTitle");
const confirmModalMessage = document.querySelector("#confirmModalMessage");
const confirmCancelButton = document.querySelector("#confirmCancelButton");
const confirmActionButton = document.querySelector("#confirmActionButton");
const onboardingModal = document.querySelector("#onboardingModal");
const onboardingConfigButton = document.querySelector("#onboardingConfigButton");
const closeOnboardingButton = document.querySelector("#closeOnboardingButton");
const onboardingWizardModal = document.querySelector("#onboardingWizardModal");
const wizardProgress = document.querySelector("#wizardProgress");
const wizardContent = document.querySelector("#wizardContent");
const closeWizardButton = document.querySelector("#closeWizardButton");
const wizardBackButton = document.querySelector("#wizardBackButton");
const wizardNextButton = document.querySelector("#wizardNextButton");
const tradeDetailDrawer = document.querySelector("#tradeDetailDrawer");
const tradeDrawerTitle = document.querySelector("#tradeDrawerTitle");
const tradeDrawerContent = document.querySelector("#tradeDrawerContent");
const closeTradeDrawerButton = document.querySelector("#closeTradeDrawerButton");
const drawerPrevButton = document.querySelector("#drawerPrevButton");
const drawerNextButton = document.querySelector("#drawerNextButton");
const drawerEditButton = document.querySelector("#drawerEditButton");

// Dialogs must live outside hidden app views or their backdrop can block the
// page while the dialog itself remains invisible.
[tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal, onboardingWizardModal, confirmModal].forEach((modal) => {
  if (modal?.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
});

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
const analyticsInsights = document.querySelector("#analyticsInsights");
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
const backtestAdminPanel = document.querySelector("#backtestAdminPanel");
const backtestImportForm = document.querySelector("#backtestImportForm");
const backtestCsvFile = document.querySelector("#backtestCsvFile");
const backtestModel = document.querySelector("#backtestModel");
const backtestTargetField = document.querySelector("#backtestTargetField");
const backtestTargetPoints = document.querySelector("#backtestTargetPoints");
const backtestScenarioTabs = document.querySelector("#backtestScenarioTabs");
const backtestSummaryGrid = document.querySelector("#backtestSummaryGrid");
const backtestTableBody = document.querySelector("#backtestTableBody");
const backtestFilterModel = document.querySelector("#backtestFilterModel");
const backtestFilterSymbol = document.querySelector("#backtestFilterSymbol");
const backtestFilterRange = document.querySelector("#backtestFilterRange");
const backtestFilterBias = document.querySelector("#backtestFilterBias");
const backtestFilterResult = document.querySelector("#backtestFilterResult");
const backtestFilterFlip = document.querySelector("#backtestFilterFlip");
const clearBacktestsButton = document.querySelector("#clearBacktestsButton");

const DEFAULT_CONFIG = {
  symbols: [],
  symbolsByMarket: {
    CFD: [],
    Futures: [],
  },
  symbolMarketMap: {},
  sessions: [],
  trackSessions: false,
  accounts: [],
  strategies: [],
  marketTypes: [],
  accountBalances: {},
  accountSettings: {},
  checklistRules: [],
  automatedRules: [],
  blockedTradingDays: [],
  weeklyPlans: {},
  weeklyReviews: {},
  trainingProgress: {},
};

const AUTOMATED_RULE_TYPES = [
  { key: "maxTradesPerDay", label: "Maximum trades per day", unit: "trades", min: 1, step: 1 },
  { key: "maxLossesPerDay", label: "Maximum losing trades per day", unit: "losses", min: 1, step: 1 },
  { key: "maxDailyLoss", label: "Maximum daily loss", unit: "amount", min: 0.01, step: 0.01 },
  { key: "maxConsecutiveLosses", label: "Stop after consecutive losses", unit: "losses", min: 1, step: 1 },
];
const TRADING_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const PREDEFINED_STRATEGIES = [
  "Opening Range Breakout",
  "Support and Resistance",
  "Trendline",
  "Breakout and Retest",
  "Fair Value Gap",
  "Order Block",
  "Supply and Demand",
  "Reversal",
];
const ORB_STRATEGY = "Opening Range Breakout";
const PREDEFINED_SYMBOLS = {
  CFD: [
    { symbol: "NAS100", market: "Nasdaq" }, { symbol: "US30", market: "Dow Jones" },
    { symbol: "SPX500", market: "S&P 500" }, { symbol: "JAPAN225", market: "Japan 225" },
    { symbol: "XAUUSD", market: "Gold" }, { symbol: "XAGUSD", market: "Silver" },
    { symbol: "UK100", market: "FTSE 100" }, { symbol: "GER40", market: "DAX" },
    { symbol: "USOIL", market: "Oil" }, { symbol: "EURUSD", market: "EUR/USD" },
    { symbol: "GBPUSD", market: "GBP/USD" }, { symbol: "USDJPY", market: "USD/JPY" },
    { symbol: "BTCUSD", market: "Bitcoin" },
  ],
  Futures: [
    { symbol: "NQ", market: "Nasdaq", size: "Mini" }, { symbol: "MNQ", market: "Nasdaq", size: "Micro" },
    { symbol: "ES", market: "S&P 500", size: "Mini" }, { symbol: "MES", market: "S&P 500", size: "Micro" },
    { symbol: "YM", market: "Dow Jones", size: "Mini" }, { symbol: "MYM", market: "Dow Jones", size: "Micro" },
    { symbol: "NKD", market: "Japan 225", size: "Mini" }, { symbol: "MNK", market: "Japan 225", size: "Micro" },
    { symbol: "GC", market: "Gold", size: "Standard" }, { symbol: "MGC", market: "Gold", size: "Micro" },
    { symbol: "CL", market: "Oil", size: "Standard" }, { symbol: "MCL", market: "Oil", size: "Micro" },
    { symbol: "BTC", market: "Bitcoin", size: "Standard" }, { symbol: "MBT", market: "Bitcoin", size: "Micro" },
  ],
};
const STANDARD_MARKETS = [...new Set(Object.values(PREDEFINED_SYMBOLS).flat().map((item) => item.market))];
const SYMBOL_MARKET_MAP = Object.fromEntries(Object.values(PREDEFINED_SYMBOLS).flat().map((item) => [item.symbol, item.market]));

function suggestStandardMarket(symbol = "") {
  const value = String(symbol).trim().toUpperCase();
  return SYMBOL_MARKET_MAP[value] || "";
}

function normalizeSymbolMarketMap(map = {}, symbols = []) {
  return normalizeOptions(symbols, []).reduce((result, symbol) => ({
    ...result,
    [symbol]: SYMBOL_MARKET_MAP[symbol] || (STANDARD_MARKETS.includes(map?.[symbol]) ? map[symbol] : ""),
  }), {});
}

function getSymbolsForStandardMarket(market) {
  return getAllSymbols().filter((symbol) => appConfig.symbolMarketMap?.[symbol] === market);
}

const CONFIG_FIELDS = [
  { key: "accounts", label: "Account", selectIds: ["account"], filterIds: ["accountFilter"] },
  { key: "strategies", label: "Strategy", selectIds: ["strategy"], filterIds: ["strategyFilter"] },
];

const MARKET_TYPE_OPTIONS = ["CFD", "Futures"];
const MARKET_TYPE_DETAILS = {
  CFD: "Use lots in the trade tracker and position size calculator.",
  Futures: "Use contracts in the trade tracker and position size calculator.",
};
const SESSION_DEFINITIONS = {
  Sydney: { timeZone: "Australia/Sydney", start: 8, end: 17 },
  Tokyo: { timeZone: "Asia/Tokyo", start: 9, end: 18 },
  "Singapore/HK": { timeZone: "Asia/Singapore", start: 9, end: 17 },
  Frankfurt: { timeZone: "Europe/Berlin", start: 8, end: 17 },
  London: { timeZone: "Europe/London", start: 8, end: 17 },
  "London 8:30": { timeZone: "Europe/London", start: 8, startMinute: 30, end: 17 },
  "New York": { timeZone: "America/New_York", start: 8, end: 17 },
};
const DEFAULT_SESSION_OPTIONS = [...Object.keys(SESSION_DEFINITIONS), "N/A"];
const NO_SPECIFIC_SESSION = "N/A";

function normalizeSessions(options, fallback = []) {
  const sessions = normalizeOptions(options, fallback).filter((option) => option !== NO_SPECIFIC_SESSION);
  return [...sessions, NO_SPECIFIC_SESSION];
}

function getTimeZoneOffset(date, timeZone) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date).filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second)) - date.getTime();
}

function getSessionLocalDate(timeZone, hour, minute = 0) {
  const now = new Date();
  const zoneDate = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now).filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  const estimate = new Date(Date.UTC(Number(zoneDate.year), Number(zoneDate.month) - 1, Number(zoneDate.day), hour, minute));
  return new Date(estimate.getTime() - getTimeZoneOffset(estimate, timeZone));
}

function getSessionDisplayLabel(session) {
  const definition = SESSION_DEFINITIONS[session];
  if (!definition) return session;
  const formatter = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
  return `${session} (${formatter.format(getSessionLocalDate(definition.timeZone, definition.start, definition.startMinute || 0))}–${formatter.format(getSessionLocalDate(definition.timeZone, definition.end, definition.endMinute || 0))} local)`;
}

function getOrderedSessions() {
  return normalizeSessions(appConfig.sessions, []);
}
const ONBOARDING_STEPS = [
  {
    key: "marketTypes",
    label: "Market Types",
    title: "Do you trade CFDs, futures, or both?",
    description: "Choose how your position size should be tracked. This controls whether the app uses lots, contracts, or both.",
  },
  {
    key: "symbols",
    label: "Symbols",
    title: "Which symbols do you trade?",
    description: "Select the instruments you want available when recording a trade. Each symbol is already matched to its underlying market for analytics and challenges.",
  },
  {
    key: "sessionTracking",
    label: "Sessions",
    title: "Do you want to track trading sessions?",
    description: "Sessions are useful if you want to compare trades taken during periods such as Asia, London, or New York. You can also record trades that occur outside a specific session.",
  },
  {
    key: "sessions",
    label: "Sessions",
    title: "Which sessions should appear in the trade form?",
    description: "Select the session labels you want available on each trade. N/A is always available for trades that do not belong to a specific session.",
  },
  {
    key: "accounts",
    label: "Accounts",
    title: "Which accounts do you want to track?",
    description: "Accounts let you separate performance across brokers, prop accounts, copy trading, or personal accounts.",
    placeholder: "Example: Vantage, Prop",
  },
  {
    key: "strategies",
    label: "Strategies",
    title: "Which strategies do you trade?",
    description: "Strategies make your analytics more useful by showing which setups are actually working.",
    placeholder: "Example: Trendlines, ORB",
  },
  {
    key: "rules",
    label: "Rules",
    title: "Would you like to set some trading boundaries?",
    description: "Rules are optional. Add a simple limit or select days you do not trade, and the app will warn you before a rule is breached.",
  },
  {
    key: "summary",
    label: "Summary",
    title: "Review your setup",
    description: "Check everything looks right. You can still edit these later from the config button.",
  },
];
const DISCIPLINE_RULES = [
  { key: "followedPlan", label: "Plan followed", positive: true },
  { key: "enteredEarly", label: "Early entry" },
  { key: "movedSl", label: "Stop moved" },
  { key: "overtraded", label: "Overtraded" },
  { key: "exitedEarly", label: "Early exit" },
  { key: "heldTooLong", label: "Held too long" },
];
const DISCIPLINE_MAX_SCORE = DISCIPLINE_RULES.length;
const TRAINING_MODULE_ID = "candlestick-foundations";
const TRAINING_CHAPTERS = [
  { id: TRAINING_MODULE_ID, number: "01", title: "Understanding Price Charts", description: "Learn what a market price is and how a chart displays price changing over time.", lessons: 6, duration: "15 min", status: "available", topics: ["Price", "Time", "Charts"] },
  { id: "candlestick-anatomy", number: "02", title: "Understanding One Candlestick", description: "See exactly how one candlestick is formed and learn every part of it.", lessons: 8, duration: "20 min", status: "sequential", topics: ["Anatomy", "OHLC", "Timeframes"] },
  { id: "single-candle-patterns", number: "03", title: "Reading Candle Behaviour", description: "Describe what a candle shows using its body, wicks, size, and close.", lessons: 6, duration: "20 min", status: "sequential", topics: ["Bodies", "Wicks", "Strength"] },
  { id: "price-movement", number: "04", title: "Reading Price Movement", description: "Move beyond one candle and understand upward, downward, and sideways movement.", lessons: 6, duration: "20 min", status: "sequential", topics: ["Direction", "Swings", "Momentum"] },
  { id: "multi-candle-patterns", number: "05", title: "Common Candlestick Patterns", description: "Recognise useful candle patterns and understand what they do and do not show.", lessons: 7, duration: "25 min", status: "sequential", topics: ["Doji", "Rejection", "Engulfing"] },
  { id: "context-application", number: "06", title: "Using Candlesticks Properly", description: "Combine candles with direction, chart areas, confirmation, planning, and risk.", lessons: 6, duration: "25 min", status: "sequential", topics: ["Context", "Confirmation", "Planning"] },
  { id: "candlestick-assessment", number: "07", title: "Guided Chart Practice", description: "Apply the complete process to realistic chart scenarios and build confidence.", lessons: 4, duration: "15 min", status: "sequential", topics: ["Scenarios", "Mistakes", "Review"] },
  { id: "fvg-foundations", number: "08", title: "Fair Value Gaps", description: "Learn how to identify, assess, and responsibly use fair value gaps from first principles.", lessons: 14, duration: "40 min", status: "sequential", topics: ["Imbalance", "Mitigation", "Context"] },
  { id: "inverse-fvg", number: "09", title: "Inverse Fair Value Gaps", description: "Understand how a failed fair value gap can become an area to watch from the opposite direction.", lessons: 12, duration: "35 min", status: "sequential", topics: ["Invalidation", "Role Reversal", "Confirmation"] },
];
const TRAINING_PATHS = [
  {
    id: "candlesticks",
    title: "Price & Candlesticks",
    description: "Build a complete foundation in price charts, candles, patterns, context, and responsible application.",
    chapterIds: TRAINING_CHAPTERS.filter((chapter) => chapter.id !== "fvg-foundations").map((chapter) => chapter.id),
  },
  {
    id: "fvg",
    title: "Fair Value Gaps",
    description: "Learn imbalances and fair value gaps independently, from identification through mitigation and planning.",
    chapterIds: ["fvg-foundations", "inverse-fvg"],
  },
];
const TRAINING_STEPS = [
  { title: "What Is a Market Price?", type: "lesson", body: "A market price is the latest price at which buyers and sellers agree to trade. As new trades happen, that price can move higher or lower.", points: ["Price changes when new trades happen", "Buyers and sellers meet at a price", "Charts record those changes"], visual: "market-price" },
  { title: "Price Check", type: "question", prompt: "What does a market chart record?", options: ["How price changes over time", "A guaranteed future price", "Only profitable trades"], answer: 0, explanation: "A chart records how the market price has changed over time.", visual: "market-price" },
  { title: "Reading a Price Chart", type: "lesson", body: "A chart has two simple directions. Read from left to right to follow time. Look higher or lower to see the price level.", points: ["Left to right shows time passing", "Higher on the chart means a higher price", "Lower on the chart means a lower price"], visual: "chart-axes" },
  { title: "Chart Axes Check", type: "question", prompt: "What does moving from left to right across a chart show?", options: ["Price rising", "Time passing", "Trade size increasing"], answer: 1, explanation: "The horizontal direction shows time passing.", visual: "chart-axes" },
  { title: "Line Charts and Candlestick Charts", type: "lesson", body: "A line chart gives a simple view of price direction. A candlestick chart adds more detail by showing four prices for every period.", points: ["Line charts are simple", "Candlestick charts show more detail", "Both display the same market price"], visual: "line-v-candles" },
  { title: "Choose the Detailed Chart", type: "question", prompt: "Which chart shows the open, high, low, and close for each period?", options: ["A candlestick chart", "A line chart", "Neither chart"], answer: 0, explanation: "Candlestick charts show all four prices for each period.", visual: "line-v-candles" },
];
const CANDLESTICK_ANATOMY_STEPS = [
  {
    title: "What Is a Candlestick?",
    type: "lesson",
    body: "A candlestick is a simple picture of price movement during one period of time. It shows where price started, where it finished, and the highest and lowest prices reached.",
    points: ["One candle covers one period of time", "It summarises price movement", "It does not predict the next candle"],
    visual: "candlestick-intro",
  },
  {
    title: "Understand the Purpose",
    type: "question",
    prompt: "What is the main purpose of a candlestick?",
    options: ["To summarise price movement during a period", "To guarantee the next price move", "To show how many traders are watching"],
    answer: 0,
    explanation: "A candlestick summarises what price did during a set period. It describes the past; it does not guarantee the future.",
    visual: "candlestick-intro",
  },
  {
    title: "The Candle Body",
    type: "lesson",
    body: "The thick section is called the body. It connects the opening price and closing price. A green body closes above its open, while a red body closes below its open.",
    points: ["The body joins open and close", "Green closes higher than it opened", "Red closes lower than it opened"],
    visual: "candle-body",
  },
  {
    type: "question",
    title: "Read the Body",
    prompt: "A candle closes above its opening price. Which colour would it normally be?",
    options: ["Green", "Red", "The colour cannot be known"],
    answer: 0,
    explanation: "A candle that closes above its opening price is normally shown as green.",
    visual: "candle-body",
  },
  {
    title: "Wicks and the Four Prices",
    type: "lesson",
    body: "The thin lines above and below the body are called wicks. Together, the candle records four prices: open, high, low, and close. These are often shortened to OHLC.",
    points: ["Open is the starting price", "Close is the finishing price", "High and low are the furthest prices reached"],
    visual: "candle-anatomy",
  },
  {
    title: "Find the Closing Price",
    type: "question",
    prompt: "Which of the four prices tells you where the candle finished?",
    options: ["Open", "High", "Close"],
    answer: 2,
    explanation: "The close is the final price recorded when the candle period ends.",
    visual: "candle-anatomy",
  },
  {
    title: "Candles and Timeframes",
    type: "lesson",
    body: "The chart timeframe tells you how much time each candle represents. One candle on a five-minute chart covers five minutes. One candle on a one-hour chart covers one hour.",
    points: ["Every candle uses the selected timeframe", "Shorter timeframes show more detail", "Longer timeframes give a wider view"],
    visual: "timeframe",
  },
  {
    title: "Timeframe Check",
    type: "question",
    prompt: "What does one candle represent on a one-hour chart?",
    options: ["One minute", "One hour", "One day"],
    answer: 1,
    explanation: "Each candle on a one-hour chart summarises one hour of price movement.",
    visual: "timeframe",
  },
];
const SINGLE_CANDLE_PATTERN_STEPS = [
  { title: "Start With a Description", type: "lesson", body: "Before trying to predict anything, describe the candle in front of you. Notice its colour, body size, wick size, and where it closed.", points: ["Begin with facts", "Avoid guessing the next move", "Compare it with nearby candles"], visual: "proportions" },
  { title: "Large and Small Bodies", type: "lesson", body: "A large body shows price moved a greater distance from open to close. A small body shows less movement between the two prices.", points: ["Large bodies show a larger net move", "Small bodies show a smaller net move", "Size is clearer when compared with nearby candles"], visual: "momentum" },
  { title: "Reading Wicks", type: "lesson", body: "A wick shows that price reached an area but moved away before the candle closed. A long upper wick shows a move higher that was not fully kept. A long lower wick shows the same below.", points: ["Upper wick records movement above the body", "Lower wick records movement below the body", "A wick alone does not guarantee a reversal"], visual: "rejection" },
  { title: "Where the Candle Closes", type: "lesson", body: "The closing position helps complete the picture. A green candle closing near its high finished strongly. A green candle with a long upper wick gave back part of its move before closing.", points: ["Close near the high shows a strong finish", "Close near the low shows a weak finish", "Colour alone does not tell the full story"], visual: "closes" },
  { title: "Compare Nearby Candles", type: "lesson", body: "A candle is easier to understand when compared with the candles around it. A body that looks large on its own may be normal for that market.", points: ["Compare body sizes", "Compare wick sizes", "Notice whether movement is increasing or slowing"], visual: "patterns" },
  { title: "Reading Check", type: "question", prompt: "A green candle has a large body and closes near its high. What can you safely say?", options: ["It finished strongly during that period", "Price must rise next", "It can never reverse"], answer: 0, explanation: "The candle finished strongly during its period. It still cannot guarantee the next move.", visual: "question-control" },
];
const PRICE_MOVEMENT_STEPS = [
  { title: "Look Beyond One Candle", type: "lesson", body: "One candle only describes one period. To understand price movement, step back and look at the path created by several candles.", points: ["Use several candles", "Notice the overall path", "Do not let one candle dominate your view"], visual: "trend-overview" },
  { title: "Upward Movement", type: "lesson", body: "Price is moving upward when its swings generally reach higher highs and stop at higher lows. Red candles can still appear inside an upward move.", points: ["High points form higher", "Low points form higher", "Small pullbacks are normal"], visual: "uptrend" },
  { title: "Downward Movement", type: "lesson", body: "Price is moving downward when its swings generally reach lower lows and stop at lower highs. Green candles can still appear inside a downward move.", points: ["Low points form lower", "High points form lower", "Small rallies are normal"], visual: "downtrend" },
  { title: "Sideways Movement", type: "lesson", body: "Price is sideways when it repeatedly moves between a similar high area and low area without making clear progress.", points: ["Price remains between two areas", "Direction is unclear", "Avoid forcing a trend"], visual: "question-range" },
  { title: "Momentum and Pullbacks", type: "lesson", body: "Momentum is the strength of a move. A pullback is a temporary move against the wider direction. Neither tells you exactly where price will go next.", points: ["Large directional candles can show momentum", "Pullbacks move against the wider direction", "Watch whether the wider structure remains intact"], visual: "momentum" },
  { title: "Movement Check", type: "question", prompt: "Price keeps making higher highs and higher lows. How would you describe the wider movement?", options: ["Upward", "Downward", "Sideways"], answer: 0, explanation: "Higher highs and higher lows describe upward price movement.", visual: "uptrend" },
];
const MULTI_CANDLE_PATTERN_STEPS = [
  { title: "What Is a Pattern?", type: "lesson", body: "A candlestick pattern is a recognisable candle shape or group of candles. Patterns help describe recent price behaviour, but they do not guarantee what happens next.", points: ["Patterns are observations", "Patterns are not automatic trade signals", "Context makes patterns more useful"], visual: "patterns" },
  { title: "Doji: A Small Body", type: "lesson", body: "A doji has an open and close that are very close together. It shows that price moved during the period but finished near where it started.", points: ["Open and close are close together", "It can show hesitation", "It does not guarantee a reversal"], visual: "doji" },
  { title: "Rejection Candles", type: "lesson", body: "A candle with a long wick and a smaller body is often called a rejection candle. The wick shows price moved into an area and then moved away.", points: ["Long lower wick shows movement away from lower prices", "Long upper wick shows movement away from higher prices", "The chart location matters"], visual: "rejection" },
  { title: "Engulfing Pattern", type: "lesson", body: "An engulfing pattern uses two candles. The second candle has a body that covers the previous candle's body, showing a clear change in movement during those periods.", points: ["It uses two candles", "The second body covers the first", "It still needs context and confirmation"], visual: "patterns" },
  { title: "Inside Bar", type: "lesson", body: "An inside bar is smaller and sits within the previous candle's high and low. It shows that price movement has become quieter for that period.", points: ["The smaller candle remains inside the previous range", "It shows reduced movement", "It does not predict breakout direction"], visual: "question-inside" },
  { title: "Patterns Can Fail", type: "lesson", body: "Every pattern can fail. A pattern is most useful as one piece of information alongside the wider direction, chart area, and the next candles.", points: ["Never treat a pattern as a guarantee", "Look at the wider chart", "Wait to see what follows"], visual: "question-range" },
  { title: "Pattern Check", type: "question", prompt: "What should a trader assume after seeing an engulfing pattern?", options: ["The market must reverse", "It shows a change in recent movement, but needs context", "The next candle must match it"], answer: 1, explanation: "An engulfing pattern shows a change in recent movement. The wider chart and following candles still matter.", visual: "patterns" },
];
const CONTEXT_APPLICATION_STEPS = [
  { title: "Read the Wider Direction", type: "lesson", body: "Before focusing on one candle, look across the chart. Decide whether price is generally moving up, moving down, or moving sideways.", points: ["Start with the wider view", "One candle should not override the whole chart", "Direction provides useful context"], visual: "momentum" },
  { title: "Watch Clear Chart Areas", type: "lesson", body: "Previous highs and lows are places where price has changed direction before. Treat them as areas to watch, not exact prices or guaranteed turning points.", points: ["Mark obvious highs and lows", "Use an area rather than a perfect line", "Watch how price behaves when it returns"], visual: "context" },
  { title: "Wait for Confirmation", type: "lesson", body: "Confirmation means waiting for more evidence after a candle or pattern appears. This might be another candle continuing the move or price holding beyond an area.", points: ["Do not rush after one candle", "Let the next price action add information", "Confirmation reduces guessing, not risk"], visual: "question-context" },
  { title: "Build a Simple Chart Story", type: "lesson", body: "Combine the information in a clear order: wider direction, important area, candle behaviour, and what happened next. This creates a simple chart story.", points: ["Direction: where is price generally moving?", "Area: is price somewhere important?", "Reaction: what are the candles showing?"], visual: "context" },
  { title: "Plan Before Acting", type: "lesson", body: "A candle pattern should never replace a trade plan. Before taking a trade, know where the idea is wrong, how much you could lose, and where you may exit.", points: ["Know the invalidation point", "Control the amount at risk", "Never enter only because of a pattern"], visual: "question-range" },
  { title: "Context Check", type: "question", prompt: "A rejection candle appears at a previous low. What is the most sensible next step?", options: ["Buy immediately", "Check the wider direction and wait for confirmation", "Assume the low can never break"], answer: 1, explanation: "The location and candle are useful information, but the wider direction and confirmation help complete the idea.", visual: "question-context" },
];
const FINAL_ASSESSMENT_STEPS = [
  { title: "Read One Candle", type: "question", prompt: "A red candle has a long lower wick. What can you safely say?", options: ["Price moved below the body before closing", "Price must rise next", "The market has changed direction"], answer: 0, explanation: "The lower wick records movement below the body. It does not guarantee the next move.", visual: "rejection" },
  { title: "Read a Pattern", type: "question", prompt: "An inside bar appears after a large candle. What does it show most clearly?", options: ["The breakout direction", "Reduced price movement during that candle", "A guaranteed reversal"], answer: 1, explanation: "An inside bar shows reduced movement inside the previous candle's range. It does not predict direction.", visual: "question-inside" },
  { title: "Use Context", type: "question", prompt: "Which order creates the clearest chart story?", options: ["Pattern, prediction, larger position", "Direction, chart area, candle reaction, confirmation", "Colour, trade, then risk plan"], answer: 1, explanation: "Start with the wider direction and area, then use candle behaviour and confirmation to add detail.", visual: "context" },
  { title: "The Most Important Lesson", type: "question", prompt: "What is the safest way to use candlesticks?", options: ["As guaranteed signals", "As one part of a wider plan with risk control", "To predict every market move"], answer: 1, explanation: "Candlesticks are useful evidence, but they work best as part of a wider plan with controlled risk.", visual: "question-control" },
];
const FVG_FOUNDATION_STEPS = [
  { title: "What Is an Imbalance?", type: "lesson", body: "Price normally trades back and forth as buyers and sellers interact. An imbalance appears when price moves quickly in one direction, leaving an area with very little two-way trading.", points: ["It begins with a fast directional move", "The area received little two-way trading", "An imbalance is an observation, not a guaranteed signal"], visual: "fvg-imbalance" },
  { title: "Imbalance Check", type: "question", prompt: "What most clearly creates an imbalance?", options: ["A quick directional move with little opposing trade", "Any small candle", "A market moving sideways"], answer: 0, explanation: "An imbalance is created when price moves quickly through an area with limited two-way interaction.", visual: "fvg-imbalance" },
  { title: "The Three-Candle Structure", type: "lesson", body: "A fair value gap is identified using three candles. The strong middle candle creates displacement. A gap remains when the wick of candle one does not overlap the wick of candle three.", points: ["Always inspect three candles", "The middle candle should show clear displacement", "Compare the first candle's wick with the third candle's wick"], visual: "fvg-three-candle" },
  { title: "Find the Gap", type: "question", prompt: "Which candles define the edges of a fair value gap?", options: ["The bodies of candles one and two", "The wicks of candles one and three", "Only the middle candle"], answer: 1, explanation: "The gap is measured between the relevant wicks of the first and third candles.", visual: "fvg-three-candle" },
  { title: "Bullish Fair Value Gap", type: "lesson", body: "A bullish FVG forms during a strong move higher. The low of candle three remains above the high of candle one. The untraded space between those prices is the bullish gap.", points: ["Price displaced upward", "Candle three's low is above candle one's high", "The zone sits below current price"], visual: "fvg-bullish" },
  { title: "Bearish Fair Value Gap", type: "lesson", body: "A bearish FVG forms during a strong move lower. The high of candle three remains below the low of candle one. The space between those prices is the bearish gap.", points: ["Price displaced downward", "Candle three's high is below candle one's low", "The zone sits above current price"], visual: "fvg-bearish" },
  { title: "Direction Check", type: "question", prompt: "Candle three's low is above candle one's high after a strong move upward. What has formed?", options: ["A bullish FVG", "A bearish FVG", "No gap"], answer: 0, explanation: "That non-overlap after upward displacement creates a bullish fair value gap.", visual: "fvg-bullish" },
  { title: "Not Every Move Creates an FVG", type: "lesson", body: "A large candle alone is not enough. If candle one and candle three overlap, there is no fair value gap. Clear non-overlap is the feature that matters.", points: ["Do not label every large candle", "Check the outer candle wicks", "Overlap means no FVG remains"], visual: "fvg-valid-invalid" },
  { title: "What Is Mitigation?", type: "lesson", body: "Mitigation describes price returning into a fair value gap after it forms. Traders watch the return to see whether price reacts, trades through, or completely invalidates the idea.", points: ["A return into the zone is called mitigation", "Price may partially or fully fill the gap", "A return does not guarantee a reaction"], visual: "fvg-mitigation" },
  { title: "Mitigation Check", type: "question", prompt: "Price returns into a previously formed FVG. What has happened?", options: ["The gap is being mitigated", "A new trend is guaranteed", "The gap can never fail"], answer: 0, explanation: "A return into the zone is commonly described as mitigation. The eventual reaction remains uncertain.", visual: "fvg-mitigation" },
  { title: "Context Makes the Difference", type: "lesson", body: "An FVG is more meaningful when it supports a clear chart story. Consider the wider direction, nearby highs or lows, the strength of displacement, and whether the gap formed at a sensible location.", points: ["Start with wider market direction", "Prefer clear displacement over weak movement", "Use location and structure before the gap itself"], visual: "fvg-context" },
  { title: "Planning an Entry", type: "lesson", body: "Some traders wait for price to return into an FVG before considering an entry. A responsible plan still needs confirmation, a clear invalidation point, and controlled risk. The gap alone is not an entry instruction.", points: ["Wait for evidence rather than entering blindly", "Know where the trade idea becomes wrong", "Size risk before entering"], visual: "fvg-plan" },
  { title: "Avoid the Common Mistake", type: "question", prompt: "What is the safest response when you spot an FVG?", options: ["Enter immediately because every gap fills", "Use it as one piece of context and wait for a planned setup", "Increase risk because the zone is precise"], answer: 1, explanation: "An FVG is useful context, but it should be combined with confirmation, invalidation, and controlled risk.", visual: "fvg-plan" },
  { title: "Final FVG Scenario", type: "question", prompt: "Price is trending upward, forms a clear bullish FVG with strong displacement, then returns into the zone. What should you do next?", options: ["Assume price must rise", "Check for confirmation and only act if it fits your risk plan", "Move the zone until it creates a winning trade"], answer: 1, explanation: "The context is constructive, but confirmation and a defined risk plan are still required before acting.", visual: "fvg-context" },
];
const INVERSE_FVG_STEPS = [
  { title: "From FVG to Inverse FVG", type: "lesson", body: "An inverse fair value gap begins as a normal FVG. It becomes relevant only after price decisively trades through the original zone, invalidating its first directional idea.", points: ["Begin with a clearly identified FVG", "Price must trade through the original zone", "The failed gap may later be watched from the opposite side"], visual: "ifvg-transition" },
  { title: "Invalidation Check", type: "question", prompt: "What must happen before an FVG can be considered as a possible inverse FVG?", options: ["Price must decisively trade through it", "Price must touch its edge once", "The gap must remain completely untouched"], answer: 0, explanation: "An inverse FVG starts with invalidation: price trades through the original fair value gap.", visual: "ifvg-transition" },
  { title: "What Role Reversal Means", type: "lesson", body: "After invalidation, traders may watch the old FVG from the opposite side. A former bullish area may act as resistance, while a former bearish area may act as support. This is called role reversal.", points: ["Bullish FVG can become bearish IFVG", "Bearish FVG can become bullish IFVG", "The zone is watched, not assumed to hold"], visual: "ifvg-role-reversal" },
  { title: "Bearish Inverse FVG", type: "lesson", body: "A bearish IFVG begins with a bullish FVG that fails. Price closes through the zone, moves below it, then returns from underneath. Traders watch for a bearish reaction at the former gap.", points: ["Original zone was bullish", "Price invalidated it by trading lower", "The return approaches from below"], visual: "ifvg-bearish" },
  { title: "Bullish Inverse FVG", type: "lesson", body: "A bullish IFVG begins with a bearish FVG that fails. Price trades above the zone, then returns from above. Traders watch whether the former bearish area now supports price.", points: ["Original zone was bearish", "Price invalidated it by trading higher", "The return approaches from above"], visual: "ifvg-bullish" },
  { title: "Direction Check", type: "question", prompt: "A bullish FVG fails and price later returns to it from below. What is the zone now being watched as?", options: ["A possible bearish IFVG", "A guaranteed bullish FVG", "A new candlestick"], answer: 0, explanation: "The failed bullish FVG may be watched as a bearish inverse FVG when price returns from below.", visual: "ifvg-bearish" },
  { title: "Mitigation or Inversion?", type: "lesson", body: "A normal mitigation returns into a gap while its original directional idea remains valid. An inversion requires price to trade through the gap first, then approach it from the opposite side.", points: ["Mitigation approaches a still-valid FVG", "Inversion follows a decisive failure", "Always identify which side price approaches from"], visual: "ifvg-compare" },
  { title: "Read the Wider Context", type: "lesson", body: "An IFVG is more useful when the failure agrees with wider structure. Look for a clear change in direction, strong displacement through the zone, and a return that fits the new market story.", points: ["Look for decisive displacement through the gap", "Check whether structure supports the new direction", "Weak drifting movement gives weaker evidence"], visual: "ifvg-context" },
  { title: "Wait for Confirmation", type: "lesson", body: "The return to an IFVG is not automatically an entry. Watch how price behaves at the zone and require whatever confirmation your plan defines before considering a trade.", points: ["The zone can fail again", "Use a defined confirmation process", "Never increase risk because a label sounds advanced"], visual: "ifvg-confirmation" },
  { title: "Context Check", type: "question", prompt: "Which situation gives an inverse FVG the clearest context?", options: ["A decisive break through the gap followed by a structured return", "Price drifting randomly around the gap", "Entering before the original gap fails"], answer: 0, explanation: "A decisive invalidation and structured return provide clearer evidence of role reversal.", visual: "ifvg-context" },
  { title: "Plan Risk and Invalidation", type: "lesson", body: "Before acting, decide what would prove the inverse idea wrong. The invalidation point, entry trigger, target, and risk amount should all be defined before entering.", points: ["Define where the role-reversal idea fails", "Keep risk controlled", "Accept that an IFVG is still only one piece of evidence"], visual: "ifvg-confirmation" },
  { title: "Final IFVG Scenario", type: "question", prompt: "A bearish FVG is broken strongly to the upside. Price later returns from above and begins holding over the old zone. What is the responsible interpretation?", options: ["It may be a bullish IFVG, but confirmation and risk planning are still required", "The market must rise", "The original bearish FVG is still automatically valid"], answer: 0, explanation: "The failed bearish gap may now act as a bullish inverse FVG, but it remains a context tool rather than a guarantee.", visual: "ifvg-bullish" },
];
const TRAINING_STEP_MAP = {
  [TRAINING_MODULE_ID]: TRAINING_STEPS,
  "candlestick-anatomy": CANDLESTICK_ANATOMY_STEPS,
  "single-candle-patterns": SINGLE_CANDLE_PATTERN_STEPS,
  "price-movement": PRICE_MOVEMENT_STEPS,
  "multi-candle-patterns": MULTI_CANDLE_PATTERN_STEPS,
  "context-application": CONTEXT_APPLICATION_STEPS,
  "candlestick-assessment": FINAL_ASSESSMENT_STEPS,
  "fvg-foundations": FVG_FOUNDATION_STEPS,
  "inverse-fvg": INVERSE_FVG_STEPS,
};
const FUNDAMENTAL_LESSON_GUIDES = {
  "candlestick-intro": [
    ["From movement to candle", "The line shows the path price took during the period. The candle on the right turns that movement into one simple summary."],
    ["Four facts remain", "The completed candle keeps the open, high, low, and close. It does not show every small move in the order it happened."],
  ],
  "candle-body": [
    ["Focus on the body", "The body connects the opening and closing prices. Its colour tells you whether the candle finished above or below its open."],
    ["Colour describes the result", "Green means the candle finished higher. Red means it finished lower. Neither colour predicts the next candle."],
  ],
  "candle-anatomy": [
    ["Read the labels", "The high and low sit at the ends of the wicks. The open and close sit at the edges of the body."],
    ["Use a simple order", "Find the open, then the high and low, and finally the close. This gives you the complete story recorded by the candle."],
  ],
  "price-to-candle": [
    ["Think of a simple graph", "A chart is simply a picture of price over time. Read it from left to right, just like a timeline."],
    ["What to notice first", "Do not worry about patterns yet. Begin by noticing whether price is generally higher, lower, or around the same place."],
  ],
  "ohlc-story": [
    ["A simple memory aid", "Open means start. Close means finish. High means highest. Low means lowest."],
    ["Why four prices help", "These four prices give you a useful summary without showing every tiny price change."],
  ],
  timeframe: [
    ["Timeframes are just time", "The timeframe tells you how much time is included in each candle. A five-minute candle takes five minutes to complete."],
    ["Start with one timeframe", "Beginners do not need to keep switching. Choose one view while you practise reading candles."],
  ],
};

let currentUserId = "";
let currentUserLabel = "";
let challenges = [];
let challengesLoading = false;
let challengesLoaded = false;
let orbBacktests = [];
let orbBacktestsLoading = false;
let orbBacktestsLoaded = false;
let activeBacktestScenarioKey = "";
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
let selectedTradeId = "";
let onboardingStepIndex = 0;
let onboardingDraft = structuredClone(DEFAULT_CONFIG);
let activeConfigTab = "markets";
let accountCreateOpen = false;
let reviewWeekOffset = 0;
let trainingStepIndex = 0;
let trainingWorkspaceOpen = false;
let activeTrainingChapterId = TRAINING_MODULE_ID;
let activeTrainingPathId = "candlesticks";
let acknowledgedPreTradeRules = [];
let newsEvents = [];
let newsFilter = "today";
let newsLoaded = false;
const MOTION_DURATION_MS = 190;
let pendingConfirmResolve = null;

function setButtonLoading(button, isLoading, loadingText = "Loading...") {
  if (!button) {
    return;
  }

  if (isLoading) {
    button.dataset.defaultText = button.textContent;
    button.dataset.defaultAriaLabel = button.getAttribute("aria-label") || "";
    button.style.width = `${button.offsetWidth}px`;
    button.textContent = "";
    button.setAttribute("aria-label", loadingText);
    button.disabled = true;
    button.classList.add("is-loading");
    return;
  }

  button.textContent = button.dataset.defaultText || button.textContent;
  if (button.dataset.defaultAriaLabel) {
    button.setAttribute("aria-label", button.dataset.defaultAriaLabel);
  } else {
    button.removeAttribute("aria-label");
  }
  button.style.width = "";
  button.disabled = false;
  button.classList.remove("is-loading");
  delete button.dataset.defaultText;
  delete button.dataset.defaultAriaLabel;
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

function showToast(message, tone = "saved", action = null) {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  const messageEl = document.createElement("span");
  messageEl.textContent = message;
  toast.appendChild(messageEl);

  if (action?.label && typeof action.onClick === "function") {
    const actionButton = document.createElement("button");
    actionButton.type = "button";
    actionButton.textContent = action.label;
    actionButton.addEventListener("click", () => {
      action.onClick();
      toast.remove();
    });
    toast.appendChild(actionButton);
  }

  toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("leaving");
    window.setTimeout(() => toast.remove(), 220);
  }, action ? 5200 : 2600);
}

function showTradeFormError(message = "") {
  if (!tradeFormError) {
    return;
  }

  tradeFormError.textContent = message;
  tradeFormError.classList.toggle("hidden", !message);
  if (message) {
    tradeFormError.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function askForConfirmation({
  eyebrow = "Confirm action",
  title = "Are you sure?",
  message = "This action needs confirmation.",
  confirmText = "Confirm",
  tone = "warning",
} = {}) {
  confirmModalEyebrow.textContent = eyebrow;
  confirmModalTitle.textContent = title;
  confirmModalMessage.textContent = message;
  confirmActionButton.textContent = confirmText;
  confirmActionButton.classList.toggle("danger-confirm", tone === "danger");
  confirmActionButton.classList.toggle("warning-confirm", tone === "warning");
  openDialog(confirmModal);

  return new Promise((resolve) => {
    pendingConfirmResolve = resolve;
  });
}

function resolveConfirmation(value) {
  if (pendingConfirmResolve) {
    pendingConfirmResolve(value);
    pendingConfirmResolve = null;
  }
  closeDialog(confirmModal);
}

function formatTrialDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getTrialTimeRemaining(value) {
  if (!value) {
    return null;
  }

  const endDate = new Date(value);
  const remaining = endDate.getTime() - Date.now();
  if (Number.isNaN(remaining)) {
    return null;
  }

  const today = new Date();
  const expiresToday = endDate.toDateString() === today.toDateString();

  return {
    days: Math.max(0, Math.ceil(remaining / (24 * 60 * 60 * 1000))),
    hours: Math.max(0, Math.ceil(remaining / (60 * 60 * 1000))),
    expired: remaining <= 0,
    expiresToday,
  };
}

function formatTrialTimeRemaining(value) {
  const remaining = getTrialTimeRemaining(value);
  if (!remaining) {
    return "";
  }

  if (remaining.expired) {
    return "Expires today";
  }

  if (remaining.expiresToday) {
    return remaining.hours <= 1 ? "Expires in less than 1 hour" : `Expires today · ${remaining.hours} hours remaining`;
  }

  return `${remaining.days} day${remaining.days === 1 ? "" : "s"} remaining`;
}

function updateTrialBanner(trialEnabled = sessionStorage.getItem(AUTH_TRIAL_ENABLED_KEY) === "true", trialEndsAt = sessionStorage.getItem(AUTH_TRIAL_ENDS_KEY)) {
  if (!trialBanner || !trialBannerText) {
    return;
  }

  if (!trialEnabled || !trialEndsAt) {
    trialBanner.classList.add("hidden");
    trialBannerText.textContent = "";
    return;
  }

  const remaining = getTrialTimeRemaining(trialEndsAt);
  const formattedDate = formatTrialDate(trialEndsAt);
  const remainingText = formatTrialTimeRemaining(trialEndsAt);
  trialBannerText.textContent = formattedDate
    ? `Your trial ends on ${formattedDate}${remainingText ? ` · ${remainingText}` : ""}.`
    : "Your trial is active.";
  trialBanner.classList.toggle("trial-ending-soon", Boolean(remaining && remaining.days <= 3));
  trialBanner.classList.remove("hidden");
}

function toLocalDateKey(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatNewsEventTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Time TBC";
  }

  return date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

function formatNewsGroupDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Date TBC";
  }

  const eventKey = toLocalDateKey(date);
  const today = toLocalDateKey();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const prefix = eventKey === today ? "Today" : eventKey === toLocalDateKey(tomorrowDate) ? "Tomorrow" : "";
  const label = date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  return prefix ? `${prefix} · ${label}` : label;
}

function getImpactClass(impact = "") {
  const value = String(impact).toLowerCase();
  if (value.includes("high")) {
    return "high";
  }
  if (value.includes("medium")) {
    return "medium";
  }
  if (value.includes("low")) {
    return "low";
  }
  return "flat";
}

function getVisibleNewsEvents() {
  const today = toLocalDateKey();
  if (newsFilter === "today") {
    return newsEvents.filter((event) => toLocalDateKey(event.date) === today);
  }

  return newsEvents;
}

function groupNewsEventsByDate(events) {
  return events.reduce((groups, event) => {
    const key = toLocalDateKey(event.date) || "unknown";
    const existing = groups.find((group) => group.key === key);
    if (existing) {
      existing.events.push(event);
      return groups;
    }

    groups.push({ key, date: event.date, events: [event] });
    return groups;
  }, []);
}

function renderNewsEvents() {
  if (!newsEventsList) {
    return;
  }

  newsFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.newsFilter === newsFilter);
  });

  const visibleEvents = getVisibleNewsEvents();
  if (!visibleEvents.length) {
    newsEventsList.innerHTML = `
      <div class="empty-state compact-empty-state">
        <h2>${newsFilter === "today" ? "No events today" : "No events this week"}</h2>
        <p>${newsFilter === "today" ? "There are no saved economic events for today. You can still check your plan and trade normally." : "There are no saved events for the selected week. Check back before your next session."}</p>
        <ol class="empty-state-steps compact-steps" aria-label="News checklist">
          <li><span>1</span>Check the event time before trading.</li>
          <li><span>2</span>Watch USD events if you trade Gold, Nasdaq, or US futures.</li>
          <li><span>3</span>Add notes to trades if news affected the setup.</li>
        </ol>
      </div>
    `;
    return;
  }

  newsEventsList.innerHTML = groupNewsEventsByDate(visibleEvents)
    .map((group) => {
      return `
        <section class="news-day-group">
          <div class="news-day-heading">
            <h3>${escapeHtml(formatNewsGroupDate(group.date))}</h3>
            <span>${group.events.length} ${group.events.length === 1 ? "event" : "events"}</span>
          </div>
          <div class="news-day-events">
            ${group.events
              .map((event) => {
                const impactClass = getImpactClass(event.impact);
                return `
                  <article class="news-event-row ${impactClass}">
                    <time>${escapeHtml(formatNewsEventTime(event.date))}</time>
                    <div>
                      <h4>${escapeHtml(event.title || "Economic event")}</h4>
                      <p>${[event.currency, event.country].filter(Boolean).map(escapeHtml).join(" · ") || "Global"}</p>
                      ${event.notes ? `<p class="news-event-notes">${escapeHtml(event.notes)}</p>` : ""}
                    </div>
                    <span class="news-impact ${impactClass}">${escapeHtml(event.impact || "Impact TBC")}</span>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function updateNewsBadge() {
  if (!newsAlertBadge) {
    return;
  }

  const todayCount = newsEvents.filter((event) => toLocalDateKey(event.date) === toLocalDateKey()).length;
  newsAlertBadge.textContent = String(todayCount);
  newsAlertBadge.classList.toggle("hidden", todayCount === 0);
  newsAlertButton?.classList.toggle("has-news", todayCount > 0);
}

async function loadNewsEvents() {
  if (!window.callSupabaseFunction || newsLoaded) {
    return;
  }

  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 1);
  const from = toLocalDateKey(fromDate);
  const toDate = new Date();
  toDate.setDate(toDate.getDate() + 8);
  try {
    const result = await callSupabaseFunction("news-events", { action: "list", from, to: toLocalDateKey(toDate) });
    newsEvents = Array.isArray(result.events)
      ? result.events.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0))
      : [];
    newsLoaded = true;
    updateNewsBadge();
    renderNewsEvents();
  } catch (error) {
    newsEventsList.innerHTML = `
      <div class="empty-state compact-empty-state">
        <h2>News unavailable</h2>
        <p>${escapeHtml(error.message || "Could not load the economic calendar right now.")}</p>
      </div>
    `;
  }
}

function openNewsDrawer() {
  newsDrawer?.classList.remove("hidden");
  newsDrawer?.classList.remove("is-closing");
  newsDrawerBackdrop?.classList.remove("hidden");
  newsDrawerBackdrop?.classList.remove("is-closing");
  document.body.classList.add("modal-open");
  if (!newsLoaded) {
    loadNewsEvents();
  } else {
    renderNewsEvents();
  }
}

function closeNewsDrawer() {
  if (!newsDrawer || newsDrawer.classList.contains("hidden")) {
    return;
  }

  newsDrawer.classList.add("is-closing");
  newsDrawerBackdrop?.classList.add("is-closing");
  window.setTimeout(() => {
    newsDrawer.classList.add("hidden");
    newsDrawer.classList.remove("is-closing");
    newsDrawerBackdrop?.classList.add("hidden");
    newsDrawerBackdrop?.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
  }, MOTION_DURATION_MS);
}

async function setAppUnlocked(
  userId = sessionStorage.getItem(AUTH_STORAGE_KEY),
  userLabel = sessionStorage.getItem(AUTH_LABEL_KEY),
  userEmail = sessionStorage.getItem(AUTH_EMAIL_KEY),
  userRole = sessionStorage.getItem(AUTH_ROLE_KEY),
  passcodeHash = sessionStorage.getItem(AUTH_HASH_KEY),
  refreshUser = true,
  trialEnabled = sessionStorage.getItem(AUTH_TRIAL_ENABLED_KEY) === "true",
  trialEndsAt = sessionStorage.getItem(AUTH_TRIAL_ENDS_KEY) || "",
  featureAccess = JSON.parse(sessionStorage.getItem(AUTH_FEATURES_KEY) || "{}"),
) {
  document.body.classList.add("app-checking");
  passcodeGate.setAttribute("hidden", "");
  try {
    if (userId) {
      if (refreshUser && passcodeHash && /^[a-f0-9]{64}$/i.test(passcodeHash)) {
        try {
          const result = await callSupabaseFunction("login", { passcodeHash });
          if (!result.user) {
            setAppLocked();
            return;
          }
          if (result.user?.id === userId) {
            userLabel = result.user.label || userLabel;
            userEmail = result.user.email || "";
            userRole = result.user.role || userRole;
            trialEnabled = Boolean(result.user.trialEnabled);
            trialEndsAt = result.user.trialEndsAt || "";
            featureAccess = result.user.featureAccess || {};
          }
        } catch {
          // Keep the local session usable if the profile refresh cannot complete.
        }
      }

      sessionStorage.setItem(AUTH_STORAGE_KEY, userId);
      sessionStorage.setItem(AUTH_LABEL_KEY, userLabel || userId);
      sessionStorage.setItem(AUTH_EMAIL_KEY, userEmail || "");
      sessionStorage.setItem(AUTH_ROLE_KEY, userRole || "user");
      sessionStorage.setItem(AUTH_TRIAL_ENABLED_KEY, trialEnabled ? "true" : "false");
      sessionStorage.setItem(AUTH_TRIAL_ENDS_KEY, trialEndsAt || "");
      sessionStorage.setItem(AUTH_FEATURES_KEY, JSON.stringify(featureAccess || {}));
      applyFeatureAccess(featureAccess, userRole);
      if (passcodeHash) {
        sessionStorage.setItem(AUTH_HASH_KEY, passcodeHash);
      }
      currentUserLabel = userLabel || userId;
      userMenuName.textContent = currentUserLabel;
      userMenuEmail.textContent = userEmail || "";
      userMenuRole.textContent = userRole === "admin" ? "Admin" : "User";
      userMenuButton.textContent = getUserInitials(currentUserLabel);
      adminNavLink.classList.toggle("hidden", userRole !== "admin");
      updateTrialBanner(trialEnabled, trialEndsAt);
      await loadUserState(userId, userLabel || userId);
      loadNewsEvents();
    }
  } catch (error) {
    console.error("Unable to finish loading the user session", error);
    setSaveStatus("pending", "Could not finish loading saved data");
  } finally {
    document.body.classList.remove("auth-locked", "app-checking");
  }
}

function setAppLocked() {
  document.body.classList.remove("app-checking");
  document.body.classList.add("auth-locked");
  passcodeGate.removeAttribute("hidden");
  updateTrialBanner(false, "");
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
    sessionStorage.removeItem(AUTH_TRIAL_ENABLED_KEY);
    sessionStorage.removeItem(AUTH_TRIAL_ENDS_KEY);
    sessionStorage.removeItem(AUTH_FEATURES_KEY);
    sessionStorage.removeItem(ONBOARDING_DISMISSED_KEY);
    currentUserId = "";
    currentUserLabel = "";
    challenges = [];
    challengesLoaded = false;
    orbBacktests = [];
    orbBacktestsLoaded = false;
    adminNavLink.classList.add("hidden");
    userPopover.classList.add("hidden");
    userMenuButton.setAttribute("aria-expanded", "false");
    passcodeInput.value = "";
    passcodeError.textContent = "";
    navigateToRoute("dashboard", { replace: true });
    setAppLocked();
  } finally {
    setButtonLoading(logoutButton, false);
  }
}

function applyFeatureAccess(access = {}, role = "user") {
  const allowed = role === "admin"
    ? { journal: true, calculator: true, training: true, challenges: true }
    : access;
  document.querySelectorAll("[data-app-route]").forEach((link) => {
    const route = link.dataset.appRoute;
    const feature = route === "tracker" || route === "journal" || route === "backtesting" ? "journal" : route;
    if (["journal", "calculator", "training", "challenges"].includes(feature)) {
      link.classList.toggle("hidden", allowed?.[feature] !== true);
    }
  });
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
  await Promise.all([
    hydrateUserStateFromSupabase(),
    loadChallenges({ showLoading: false }),
    loadOrbBacktests({ showLoading: false }),
  ]);
  scheduleSupabaseSave();
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
    trades = Array.isArray(remoteData.trades)
      ? remoteData.trades.map((trade) => ({ ...trade, strategy: normalizeStrategyName(trade.strategy) }))
      : [];
    const marketTypes = normalizeMarketTypes(remoteData.config?.marketTypes);
    const symbolsByMarket = normalizeSymbolsByMarket(remoteData.config?.symbolsByMarket);
    appConfig = {
      symbols: flattenSymbolsByMarket(symbolsByMarket),
      symbolsByMarket,
      symbolMarketMap: normalizeSymbolMarketMap(remoteData.config?.symbolMarketMap, flattenSymbolsByMarket(symbolsByMarket)),
      sessions: Boolean(remoteData.config?.trackSessions) ? normalizeSessions(remoteData.config?.sessions, DEFAULT_CONFIG.sessions) : [],
      trackSessions: Boolean(remoteData.config?.trackSessions),
      accounts: normalizeOptions(remoteData.config?.accounts, DEFAULT_CONFIG.accounts),
      strategies: normalizeStrategies(remoteData.config?.strategies, DEFAULT_CONFIG.strategies),
      marketTypes,
      accountBalances: normalizeAccountBalances(remoteData.config?.accountBalances, remoteData.config?.accounts),
      accountSettings: normalizeAccountSettings(remoteData.config?.accountSettings, remoteData.config?.accounts, remoteData.config?.accountBalances),
      checklistRules: normalizeOptions(remoteData.config?.checklistRules, DEFAULT_CONFIG.checklistRules),
      automatedRules: Array.isArray(remoteData.config?.automatedRules) ? remoteData.config.automatedRules : [],
      blockedTradingDays: normalizeOptions(remoteData.config?.blockedTradingDays, []),
      weeklyPlans: remoteData.config?.weeklyPlans && typeof remoteData.config.weeklyPlans === "object" ? remoteData.config.weeklyPlans : {},
      weeklyReviews: remoteData.config?.weeklyReviews && typeof remoteData.config.weeklyReviews === "object" ? remoteData.config.weeklyReviews : {},
      trainingProgress: remoteData.config?.trainingProgress && typeof remoteData.config.trainingProgress === "object" ? remoteData.config.trainingProgress : {},
    };
    trainingStepIndex = Math.min(
      TRAINING_STEPS.length - 1,
      Math.max(0, Number(appConfig.trainingProgress[TRAINING_MODULE_ID]?.step) || 0),
    );
  } catch (error) {
    if (error.message === "Access denied") {
      showToast("Your access is no longer active.");
      setAppLocked();
      return;
    }
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
  } catch (error) {
    if (error.message === "Access denied") {
      showToast("Your access is no longer active.");
      setAppLocked();
      return;
    }
    setSaveStatus("pending", "Offline changes pending");
  }
}

function userConfigComplete() {
  return (
    CONFIG_FIELDS.every((field) => appConfig[field.key].length > 0) &&
    appConfig.marketTypes.length > 0 &&
    appConfig.marketTypes.every((marketType) => getSymbolsForMarket(marketType).length > 0) &&
    (!appConfig.trackSessions || appConfig.sessions.length > 0)
  );
}

function userHasStartedConfig() {
  const hasFieldValues = CONFIG_FIELDS.some((field) => appConfig[field.key].length > 0);
  const hasMarketTypes = appConfig.marketTypes.length > 0;
  const hasSymbols = getAllSymbols().length > 0;
  const hasSessions = appConfig.sessions.length > 0 || appConfig.trackSessions === true;
  return hasFieldValues || hasMarketTypes || hasSymbols || hasSessions;
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

function getConfigSetupStatus() {
  const checks = [
    { label: "market types", complete: appConfig.marketTypes.length > 0 },
    { label: "symbols", complete: appConfig.marketTypes.length > 0 && appConfig.marketTypes.every((marketType) => getSymbolsForMarket(marketType).length > 0) },
    { label: "sessions", complete: appConfig.trackSessions === false || appConfig.sessions.length > 0 },
    { label: "accounts", complete: appConfig.accounts.length > 0 },
    { label: "strategies", complete: appConfig.strategies.length > 0 },
  ];
  const completeCount = checks.filter((check) => check.complete).length;
  return {
    checks,
    missing: checks.filter((check) => !check.complete).map((check) => check.label),
    percent: Math.round((completeCount / checks.length) * 100),
  };
}

function renderDashboardSetupAlert() {
  if (!dashboardSetupAlert) return;
  const complete = userConfigComplete();
  dashboardSetupAlert.classList.toggle("hidden", complete);
  if (complete) return;
  const status = getConfigSetupStatus();
  dashboardSetupProgress.style.width = `${status.percent}%`;
  dashboardSetupDetail.textContent = status.missing.length
    ? `Still needed: ${status.missing.join(", ")}.`
    : "Review and save your setup to begin recording trades.";
}

function normalizeOptions(options, fallback) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter(Boolean)
    : [];
  const uniqueOptions = [...new Set(cleaned)];
  return uniqueOptions.length ? uniqueOptions : [...fallback];
}

function normalizeStrategies(options, fallback = []) {
  const normalized = normalizeOptions(options, fallback)
    .map(normalizeStrategyName)
    .filter((option) => option.toUpperCase() !== "N/A");
  return [...new Set(normalized)];
}

function normalizeStrategyName(strategy = "") {
  const value = String(strategy).trim();
  return ["orb", "opening range", "opening range breakout"].includes(value.toLowerCase()) ? ORB_STRATEGY : value;
}

function isOrbStrategy(strategy) {
  return strategy === ORB_STRATEGY;
}

function syncStrategyExecutionFields() {
  const disclosure = document.querySelector("#orbDetailsDisclosure");
  const isOrb = isOrbStrategy(form.strategy.value);
  disclosure.classList.toggle("hidden", !isOrb);
  if (!isOrb) disclosure.open = false;
}

function normalizeMarketTypes(options) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter((option) => MARKET_TYPE_OPTIONS.includes(option))
    : [];
  return [...new Set(cleaned)];
}

function normalizeSymbolsByMarket(symbolsByMarket = {}) {
  return MARKET_TYPE_OPTIONS.reduce((normalized, marketType) => {
    const allowed = (PREDEFINED_SYMBOLS[marketType] || []).map((item) => item.symbol);
    normalized[marketType] = normalizeOptions(symbolsByMarket?.[marketType], []).filter((symbol) => allowed.includes(symbol));
    return normalized;
  }, {});
}

function getSymbolsForMarket(marketType = getDefaultMarketType()) {
  return normalizeOptions(appConfig.symbolsByMarket?.[marketType], []);
}

function flattenSymbolsByMarket(symbolsByMarket = appConfig.symbolsByMarket) {
  return [...new Set(MARKET_TYPE_OPTIONS.flatMap((marketType) => normalizeOptions(symbolsByMarket?.[marketType], [])))];
}

function getAllSymbols() {
  return flattenSymbolsByMarket();
}

function normalizeAccountBalances(balances = {}, accounts = []) {
  const normalized = {};
  normalizeOptions(accounts, DEFAULT_CONFIG.accounts).forEach((account) => {
    const value = parseNumber(balances?.[account]);
    normalized[account] = value > 0 ? String(value) : "";
  });
  return normalized;
}

function normalizeAccountSettings(settings = {}, accounts = [], balances = {}) {
  return normalizeOptions(accounts, DEFAULT_CONFIG.accounts).reduce((normalized, account) => {
    const source = settings?.[account] || {};
    normalized[account] = {
      isProp: Boolean(source.isProp),
      startingBalance: String(source.startingBalance || balances?.[account] || ""),
      dailyDrawdown: String(source.dailyDrawdown || ""),
      maxDrawdown: String(source.maxDrawdown || ""),
      timeframeDays: String(source.timeframeDays || ""),
    };
    return normalized;
  }, {});
}

function renderDrawdownOptions(selected = "") {
  return `<option value="">Optional</option>${Array.from({ length: 20 }, (_, index) => {
    const number = (index + 1) * 0.5;
    const value = String(number);
    return `<option value="${value}" ${String(selected) === value ? "selected" : ""}>${value}%</option>`;
  }).join("")}`;
}

function getDefaultOption(key) {
  return appConfig[key][0] || DEFAULT_CONFIG[key][0] || "";
}

function getDefaultMarketType() {
  return appConfig.marketTypes[0] || "";
}

function getOnboardingSteps() {
  return ONBOARDING_STEPS.filter((step) => step.key !== "sessions" || onboardingDraft.trackSessions === true);
}

function createOption(value, label = value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
}

function populateSelect(select, options, includeAll = false) {
  const currentValue = select.value;
  select.innerHTML = "";

  if (includeAll) {
    select.appendChild(createOption("All"));
  }

  const isSessionSelect = select === form.session || select === sessionFilter;
  options.forEach((option) => {
    select.appendChild(createOption(option, isSessionSelect ? getSessionDisplayLabel(option) : option));
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
  populateSelect(symbolFilter, getAllSymbols(), true);
  populateSelect(dashboardAccountFilter, appConfig.accounts, true);
  populateSelect(marketTypeInput, appConfig.marketTypes);
  populateSelect(marketTypeFilter, appConfig.marketTypes, true);
  populateSelect(sessionFilter, getOrderedSessions(), true);
  populateSelect(form.session, getOrderedSessions());
  populateSelect(form.symbol, getSymbolsForMarket(marketTypeInput.value || getDefaultMarketType()));
  syncMarketTypeField();
  syncSymbolFromMarket();
  syncSessionVisibility();
  syncStrategyExecutionFields();
  updateAddTradeAvailability();
}

function syncSessionVisibility() {
  const isTracking = Boolean(appConfig.trackSessions);
  sessionField.classList.toggle("hidden", !isTracking);
  sessionFilterField.classList.toggle("hidden", !isTracking);
  document.querySelectorAll("[data-session-column]").forEach((element) => {
    element.classList.toggle("hidden", !isTracking);
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

function hasTradePriceDetails(trade) {
  return getTradePriceLegs(trade).length > 0;
}

function normalizePriceLegs(legs = []) {
  if (!Array.isArray(legs)) return [];
  return legs
    .map((leg) => ({
      entry: String(leg?.entry ?? "").trim(),
      exit: String(leg?.exit ?? "").trim(),
      size: String(leg?.size ?? "1").trim() || "1",
    }))
    .filter((leg) => leg.entry !== "" || leg.exit !== "");
}

function getTradePriceLegs(trade = {}) {
  const legs = normalizePriceLegs(trade.priceLegs);
  if (legs.length) return legs.filter((leg) => leg.entry !== "" && leg.exit !== "");
  if (trade.entryPrice !== undefined && trade.entryPrice !== "" && trade.exitPrice !== undefined && trade.exitPrice !== "") {
    return [{ entry: String(trade.entryPrice), exit: String(trade.exitPrice), size: "1" }];
  }
  return [];
}

function getTradePoints(trade) {
  const legs = getTradePriceLegs(trade);
  if (!legs.length) return null;
  const direction = trade.direction === "Sell" ? "Sell" : "Buy";
  const totals = legs.reduce((acc, leg) => {
    const entry = parseNumber(leg.entry);
    const exit = parseNumber(leg.exit);
    const size = Math.max(parseNumber(leg.size), 0);
    if (!Number.isFinite(entry) || !Number.isFinite(exit) || !Number.isFinite(size) || size <= 0) return acc;
    const points = direction === "Sell" ? entry - exit : exit - entry;
    return { weighted: acc.weighted + points * size, size: acc.size + size };
  }, { weighted: 0, size: 0 });
  if (!totals.size) return null;
  return totals.weighted / totals.size;
}

function formatPoints(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function updatePricePointsPreview() {
  if (!pricePointsPreview) {
    return;
  }

  const valueEl = pricePointsPreview.querySelector("strong");
  const points = getTradePoints({
    direction: form.direction.value,
    entryPrice: form.entryPrice.value,
    exitPrice: form.exitPrice.value,
    priceLegs: readPriceLegInputs(),
  });

  pricePointsPreview.classList.toggle("positive", points > 0);
  pricePointsPreview.classList.toggle("negative", points < 0);
  pricePointsPreview.classList.toggle("flat", points === null || points === 0);

  if (valueEl) {
    valueEl.textContent = formatPoints(points);
  }
  updateLegPointPreviews();
}

function getLegPoints(leg) {
  const entry = parseNumber(leg.entry);
  const exit = parseNumber(leg.exit);
  if (!Number.isFinite(entry) || !Number.isFinite(exit)) return null;
  return form.direction.value === "Sell" ? entry - exit : exit - entry;
}

function readPriceLegInputs() {
  const extraLegs = [...priceLegsList.querySelectorAll("[data-price-leg]")]
    .map((row) => ({
      entry: row.querySelector("[data-leg-entry]")?.value || "",
      exit: row.querySelector("[data-leg-exit]")?.value || "",
      size: "1",
    }));
  return normalizePriceLegs([
    { entry: form.entryPrice.value, exit: form.exitPrice.value, size: "1" },
    ...extraLegs,
  ]);
}

function readPriceLegDrafts() {
  return [
    { entry: form.entryPrice.value, exit: form.exitPrice.value, size: "1" },
    ...[...priceLegsList.querySelectorAll("[data-price-leg]")]
      .map((row) => ({
        entry: row.querySelector("[data-leg-entry]")?.value || "",
        exit: row.querySelector("[data-leg-exit]")?.value || "",
        size: "1",
      })),
  ];
}

function renderPriceLegs(legs = []) {
  const extraLegs = (Array.isArray(legs) ? legs : [])
    .map((leg) => ({
      entry: String(leg?.entry ?? "").trim(),
      exit: String(leg?.exit ?? "").trim(),
      size: String(leg?.size ?? "1").trim() || "1",
    }))
    .slice(1);
  priceLegsList.innerHTML = extraLegs.map((leg, index) => `
    <div class="price-details-grid price-leg-row" data-price-leg>
      <label><span>Direction</span><input type="text" value="${escapeHtml(form.direction.value || "Buy")}" data-leg-direction aria-label="Leg ${index + 2} direction" disabled></label>
      <label><span>Entry</span><input type="number" step="0.01" placeholder="0.00" value="${escapeHtml(leg.entry)}" data-leg-entry aria-label="Leg ${index + 2} entry"></label>
      <label><span>Exit</span><input type="number" step="0.01" placeholder="0.00" value="${escapeHtml(leg.exit)}" data-leg-exit aria-label="Leg ${index + 2} exit"></label>
      <div class="price-points-preview flat" data-leg-points aria-live="polite"><span>Points</span><strong>-</strong></div>
      <button class="icon-button price-leg-remove" type="button" data-remove-price-leg aria-label="Remove leg ${index + 2}">×</button>
    </div>
  `).join("");
  bindPriceLegInputs();
  updateLegPointPreviews();
}

function bindPriceLegInputs() {
  priceLegsList.querySelectorAll("[data-leg-entry], [data-leg-exit]").forEach((input) => {
    input.addEventListener("input", updatePricePointsPreview);
    input.addEventListener("change", updatePricePointsPreview);
    input.addEventListener("keyup", updatePricePointsPreview);
  });
}

function updateLegPointPreviews() {
  priceLegsList.querySelectorAll("[data-price-leg]").forEach((row) => {
    const directionInput = row.querySelector("[data-leg-direction]");
    if (directionInput) directionInput.value = form.direction.value || "Buy";
    const preview = row.querySelector("[data-leg-points]");
    const valueEl = preview?.querySelector("strong");
    if (!preview || !valueEl) return;
    const points = getLegPoints({
      entry: row.querySelector("[data-leg-entry]")?.value || "",
      exit: row.querySelector("[data-leg-exit]")?.value || "",
    });
    preview.classList.toggle("positive", points > 0);
    preview.classList.toggle("negative", points < 0);
    preview.classList.toggle("flat", points === null || points === 0);
    valueEl.textContent = formatPoints(points);
  });
}

function addPriceLeg() {
  const current = readPriceLegDrafts();
  renderPriceLegs([...current, { entry: "", exit: "", size: "1" }]);
  const rows = priceLegsList.querySelectorAll("[data-price-leg]");
  rows[rows.length - 1]?.querySelector("[data-leg-entry]")?.focus();
  updatePricePointsPreview();
}

function getPointsClass(value) {
  return value > 0 ? "amount-win" : value < 0 ? "amount-loss" : "amount-flat";
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
  const selectedSession = appConfig.trackSessions ? sessionFilter.value : "All";
  const selectedAccount = accountFilter.value;
  const selectedStrategy = strategyFilter.value;
  const selectedMarket = marketTypeFilter.value;

  return trades.filter((trade) => {
    const matchesSymbol = selectedSymbol === "All" || trade.symbol === selectedSymbol;
    const matchesSession = !appConfig.trackSessions || selectedSession === "All" || (trade.session || getDefaultOption("sessions")) === selectedSession;
    const matchesAccount = selectedAccount === "All" || (trade.account || getDefaultOption("accounts")) === selectedAccount;
    const matchesStrategy = selectedStrategy === "All" || (trade.strategy || getDefaultOption("strategies")) === selectedStrategy;
    const matchesMarket = selectedMarket === "All" || getTradeMarketType(trade) === selectedMarket;
    return matchesSymbol && matchesSession && matchesAccount && matchesStrategy && matchesMarket;
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

function getBestPerformingItem(items, minimumTrades = 2) {
  return items
    .filter((item) => item.total >= minimumTrades)
    .sort((a, b) => {
      if (b.net !== a.net) return b.net - a.net;
      if (b.winRate !== a.winRate) return b.winRate - a.winRate;
      return b.total - a.total;
    })[0] || null;
}

function renderAnalyticsInsights(closedTrades, summary) {
  if (!analyticsInsights) {
    return;
  }

  if (!closedTrades.length) {
    analyticsInsights.innerHTML = `
      <article class="analytics-insight-card">
        <span>Insight</span>
        <strong>Close a few trades to unlock written insights.</strong>
        <p>Once you have wins and losses recorded, this section will highlight patterns in your strategy, session, and discipline data.</p>
      </article>
    `;
    return;
  }

  const insights = [];
  const strategy = getBestPerformingItem(getBreakdownItems(closedTrades, "strategy", appConfig.strategies));
  if (strategy) {
    insights.push({
      tone: strategy.net > 0 ? "profit" : "flat",
      label: "Strategy",
      title: `${strategy.label} is your best-performing strategy.`,
      detail: `${strategy.total} closed trades · ${formatPercent(strategy.winRate)} win rate · ${formatSummaryAmount(strategy.net)} net.`,
    });
  }

  if (appConfig.trackSessions) {
    const session = getBestPerformingItem(getBreakdownItems(closedTrades, "session", appConfig.sessions));
    if (session) {
      insights.push({
        tone: session.net > 0 ? "profit" : "flat",
        label: "Session",
        title: `${session.label} currently has the strongest results.`,
        detail: `${session.total} closed trades · ${formatPercent(session.winRate)} win rate · ${formatSummaryAmount(session.net)} net.`,
      });
    }
  }

  const lossTrades = closedTrades.filter((trade) => trade.outcome === "Loss");
  const mistakeCounts = DISCIPLINE_RULES
    .filter((rule) => !rule.positive)
    .map((rule) => ({
      ...rule,
      count: lossTrades.filter((trade) => Boolean(getTradeDiscipline(trade)[rule.key])).length,
    }))
    .filter((rule) => rule.count > 0)
    .sort((a, b) => b.count - a.count);
  if (mistakeCounts[0]) {
    insights.push({
      tone: "loss",
      label: "Discipline",
      title: `Most tracked losses include ${mistakeCounts[0].label.toLowerCase()}.`,
      detail: `${mistakeCounts[0].count} ${mistakeCounts[0].count === 1 ? "loss" : "losses"} tagged from ${lossTrades.length} losing trades.`,
    });
  }

  insights.push({
    tone: summary.net > 0 ? "profit" : summary.net < 0 ? "loss" : "flat",
    label: "Overall",
    title: summary.net > 0 ? "Your closed trades are currently net positive." : summary.net < 0 ? "Your closed trades are currently net negative." : "Your closed trades are currently flat.",
    detail: `${summary.total} closed trades · ${formatPercent(summary.winRate)} win rate · ${formatSummaryAmount(summary.net)} net.`,
  });

  analyticsInsights.innerHTML = insights.slice(0, 4).map((insight) => `
    <article class="analytics-insight-card ${insight.tone}">
      <span>${escapeHtml(insight.label)}</span>
      <strong>${escapeHtml(insight.title)}</strong>
      <p>${escapeHtml(insight.detail)}</p>
    </article>
  `).join("");
}

function renderAnalytics() {
  const closedTrades = getClosedTrades();
  const summary = summarizeTradeSet(closedTrades);
  const daily = getDailyClosedSummaries(closedTrades);
  const bestDay = daily.length ? daily.reduce((best, day) => (day.amount > best.amount ? day : best), daily[0]) : null;
  const worstDay = daily.length ? daily.reduce((worst, day) => (day.amount < worst.amount ? day : worst), daily[0]) : null;
  const dashboardTrades = getDashboardTrades();
  const pointValues = dashboardTrades
    .map((trade) => getTradePoints(trade))
    .filter((points) => points !== null);
  const totalPoints = pointValues.reduce((sum, points) => sum + points, 0);
  const averagePoints = pointValues.length ? totalPoints / pointValues.length : null;
  const bestPoints = pointValues.length ? Math.max(...pointValues) : null;
  const disciplineTrades = dashboardTrades.filter(hasTradeDiscipline);
  const allDisciplineScores = disciplineTrades.map((trade) => getDisciplineScore(trade));
  const averageDiscipline = allDisciplineScores.length
    ? allDisciplineScores.reduce((sum, score) => sum + score, 0) / allDisciplineScores.length
    : 0;
  const cleanTrades = allDisciplineScores.filter((score) => score === DISCIPLINE_MAX_SCORE).length;
  const cleanTradeRate = allDisciplineScores.length ? (cleanTrades / allDisciplineScores.length) * 100 : 0;

  renderAnalyticsInsights(closedTrades, summary);

  const metricCards = [
    { label: "Win Rate", value: formatPercent(summary.winRate), tone: summary.winRate >= 50 ? "profit" : summary.total ? "loss" : "flat" },
    { label: "Average Win", value: formatSummaryAmount(summary.averageWin), tone: summary.averageWin > 0 ? "profit" : "flat" },
    { label: "Average Loss", value: formatSummaryAmount(summary.averageLoss), tone: summary.averageLoss > 0 ? "loss" : "flat" },
    { label: "Profit Factor", value: formatProfitFactor(summary.profitFactor), tone: summary.profitFactor >= 1 ? "profit" : summary.total ? "loss" : "flat" },
    { label: "Best Day", value: bestDay ? formatSummaryAmount(bestDay.amount) : "0.00", detail: bestDay?.date || "-", tone: bestDay?.amount > 0 ? "profit" : "flat" },
    { label: "Worst Day", value: worstDay ? formatSummaryAmount(worstDay.amount) : "0.00", detail: worstDay?.date || "-", tone: worstDay?.amount < 0 ? "loss" : "flat" },
    { label: "Average Points", value: formatPoints(averagePoints), detail: `${pointValues.length} tracked`, tone: averagePoints > 0 ? "profit" : averagePoints < 0 ? "loss" : "flat" },
    { label: "Best Points", value: formatPoints(bestPoints), detail: pointValues.length ? "best move" : "-", tone: bestPoints > 0 ? "profit" : bestPoints < 0 ? "loss" : "flat" },
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
    appConfig.trackSessions ? renderAnalyticsBreakdown("By Session", getBreakdownItems(closedTrades, "session", appConfig.sessions)) : "",
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
    const settings = appConfig.accountSettings?.[account] || {};
    const dailyLimit = settings.isProp && hasBalance ? startingBalance * (parseNumber(settings.dailyDrawdown) / 100) : 0;
    const maxLimit = settings.isProp && hasBalance ? startingBalance * (parseNumber(settings.maxDrawdown) / 100) : 0;
    const dailyUsed = Math.abs(accountTrades.filter((trade) => trade.tradeDate === toDateKey(new Date())).reduce((sum, trade) => sum + Math.min(0, getTradeAmount(trade)), 0));
    const maxUsed = Math.max(0, -pnl);
    const propMetrics = settings.isProp ? `
      <div class="prop-drawdown-summary">
        <div class="${dailyLimit && dailyUsed >= dailyLimit ? "breached" : ""}"><span>Daily drawdown</span><strong>${dailyLimit ? `${formatSummaryAmount(dailyUsed)} / ${formatSummaryAmount(dailyLimit)}` : "Not set"}</strong><small>${dailyLimit ? `${formatSummaryAmount(Math.max(0, dailyLimit - dailyUsed))} remaining` : "Set a percentage in account settings"}</small></div>
        <div class="${maxLimit && maxUsed >= maxLimit ? "breached" : ""}"><span>Maximum drawdown</span><strong>${maxLimit ? `${formatSummaryAmount(maxUsed)} / ${formatSummaryAmount(maxLimit)}` : "Not set"}</strong><small>${maxLimit ? `${formatSummaryAmount(Math.max(0, maxLimit - maxUsed))} remaining` : "Set a percentage in account settings"}</small></div>
      </div>` : "";
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
      ${propMetrics}
      <div class="account-progress" aria-label="Account performance">
        <span style="width: ${Math.abs(pnlPercent).toFixed(2)}%"></span>
      </div>
    `;
    accountBalanceGrid.appendChild(card);
  });
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function normalizeBacktestHeader(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getBacktestCell(row, headerMap, names) {
  const index = names
    .map(normalizeBacktestHeader)
    .map((name) => headerMap.get(name))
    .find((value) => value !== undefined);
  return index === undefined ? "" : row[index] || "";
}

function toBacktestNumber(value) {
  const number = Number(String(value || "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function createBacktestRows(csvText, meta) {
  const csvRows = parseCsvRows(csvText);
  const headers = csvRows.shift() || [];
  const headerMap = new Map(headers.map((header, index) => [normalizeBacktestHeader(header), index]));
  return csvRows.map((row) => ({
    id: crypto.randomUUID(),
    importedAt: new Date().toISOString(),
    importName: meta.importName || `${meta.model} · ${meta.rangeTimeframe} / ${meta.breakTimeframe}`,
    symbol: meta.symbol,
    session: meta.session,
    model: getBacktestCell(row, headerMap, ["Model"]) || meta.model,
    targetPoints: toBacktestNumber(meta.targetPoints),
    rangeTimeframe: getBacktestCell(row, headerMap, ["Range Timeframe"]) || meta.rangeTimeframe,
    breakTimeframe: getBacktestCell(row, headerMap, ["Break Timeframe"]) || meta.breakTimeframe,
    date: getBacktestCell(row, headerMap, ["Date"]),
    range: toBacktestNumber(getBacktestCell(row, headerMap, ["Range"])),
    firstCandleDirection: getBacktestCell(row, headerMap, ["First Candle Direction"]),
    overallBias: getBacktestCell(row, headerMap, ["Overall Bias"]),
    timeToBreak: getBacktestCell(row, headerMap, ["Time to Break"]),
    breakDirection: getBacktestCell(row, headerMap, ["Break Direction"]),
    breakAmount: toBacktestNumber(getBacktestCell(row, headerMap, ["Break Amount"])),
    nextCandleReaction: getBacktestCell(row, headerMap, ["Next Candle Reaction"]),
    nextCandlePullback: toBacktestNumber(getBacktestCell(row, headerMap, ["Next Candle Pullback"])),
    result: getBacktestCell(row, headerMap, ["Result"]),
    flip: getBacktestCell(row, headerMap, ["Flip"]),
    flipResult: getBacktestCell(row, headerMap, ["Flip Result"]),
  })).filter((row) => row.date || row.result || row.breakDirection);
}

function getBacktestRows() {
  return Array.isArray(orbBacktests) ? orbBacktests : [];
}

function getBacktestScenarioKey(row) {
  if (row.importId) return row.importId;
  return [
    row.symbol || "Unknown",
    row.importName || row.model || "Scenario",
    row.session || "Session",
    row.model || "Unknown",
    row.rangeTimeframe || "Range",
    row.breakTimeframe || "Break",
    row.targetPoints || "",
  ].join("|");
}

function getBacktestScenarioLabel(rows) {
  const row = rows[0] || {};
  const symbolPrefix = row.symbol ? `${row.symbol} · ` : "";
  const rawTitle = row.importName || `${row.model || "Scenario"} · ${row.rangeTimeframe || "-"} / ${row.breakTimeframe || "-"}`;
  const title = row.symbol && rawTitle.startsWith(symbolPrefix) ? rawTitle.slice(symbolPrefix.length) : rawTitle;
  const context = [row.symbol, row.session].filter(Boolean).join(" · ");
  return {
    title: `${context ? `${context} · ` : ""}${title}`,
    meta: `${row.model || "-"} · ${row.rangeTimeframe || "-"} range · ${row.breakTimeframe || "-"} break · ${rows.length} rows`,
  };
}

function getBacktestScenarios() {
  const grouped = new Map();
  getBacktestRows().forEach((row) => {
    const key = getBacktestScenarioKey(row);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  });
  return [...grouped.entries()].map(([key, rows]) => ({ key, rows, ...getBacktestScenarioLabel(rows) }));
}

function getActiveBacktestRows() {
  const scenarios = getBacktestScenarios();
  if (!scenarios.length) {
    activeBacktestScenarioKey = "";
    return [];
  }
  if (!scenarios.some((scenario) => scenario.key === activeBacktestScenarioKey)) {
    activeBacktestScenarioKey = scenarios[0].key;
  }
  return scenarios.find((scenario) => scenario.key === activeBacktestScenarioKey)?.rows || [];
}

function getFilteredBacktests() {
  return getActiveBacktestRows().filter((row) => {
    const matchesModel = !backtestFilterModel || backtestFilterModel.value === "All" || row.model === backtestFilterModel.value;
    const matchesSymbol = !backtestFilterSymbol || backtestFilterSymbol.value === "All" || row.symbol === backtestFilterSymbol.value;
    const matchesRange = !backtestFilterRange || backtestFilterRange.value === "All" || row.rangeTimeframe === backtestFilterRange.value;
    const matchesBias = !backtestFilterBias || backtestFilterBias.value === "All" || row.overallBias === backtestFilterBias.value;
    const matchesResult = !backtestFilterResult || backtestFilterResult.value === "All" || row.result === backtestFilterResult.value;
    const matchesFlip = !backtestFilterFlip || backtestFilterFlip.value === "All" || row.flip === backtestFilterFlip.value;
    return matchesModel && matchesSymbol && matchesRange && matchesBias && matchesResult && matchesFlip;
  });
}

function getBacktestTargetPoints(row) {
  const fixedTarget = Number(row.targetPoints || 0);
  if (row.model === "Fixed 1:1") {
    return Number.isFinite(fixedTarget) && fixedTarget > 0 ? fixedTarget : 0;
  }
  const range = Number(row.range || 0);
  if (!Number.isFinite(range) || range <= 0) return 0;
  if (row.model === "ORB Range") return range;
  return 0;
}

function getBacktestTargetLabel(row) {
  const target = getBacktestTargetPoints(row);
  if (!target) return "-";
  if (row.model === "Fixed 1:1") return `${formatPoints(target)} fixed`;
  if (row.model === "ORB Range") return `${formatPoints(target)} range`;
  return formatPoints(target);
}

function getBacktestTargetContext(row) {
  if (row.model === "Fixed 1:1") return "fixed from break";
  if (row.model === "ORB Range") return "range based";
  return "";
}

function updateBacktestTargetField() {
  if (!backtestTargetField || !backtestModel) return;
  const isFixedOneToOne = backtestModel.value === "Fixed 1:1";
  backtestTargetField.classList.toggle("hidden", !isFixedOneToOne);
  if (!isFixedOneToOne && backtestTargetPoints) backtestTargetPoints.value = "";
}

function syncBacktestFilter(select, values, label) {
  if (!select) return;
  const current = select.value || "All";
  select.innerHTML = `<option value="All">${label}</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
  select.value = values.includes(current) ? current : "All";
}

function renderBacktestScenarioTabs() {
  if (!backtestScenarioTabs) return;
  const scenarios = getBacktestScenarios();
  backtestScenarioTabs.classList.toggle("hidden", !scenarios.length);
  backtestScenarioTabs.innerHTML = scenarios.map((scenario) => `
    <button class="backtest-scenario-tab ${scenario.key === activeBacktestScenarioKey ? "active" : ""}" type="button" data-backtest-scenario="${escapeHtml(scenario.key)}">
      <strong>${escapeHtml(scenario.title)}</strong>
      <span>${escapeHtml(scenario.meta)}</span>
    </button>
  `).join("");
}

function renderBacktesting() {
  if (!backtestSummaryGrid || !backtestTableBody) return;
  const isAdmin = sessionStorage.getItem(AUTH_ROLE_KEY) === "admin";
  backtestAdminPanel?.classList.toggle("hidden", !isAdmin);
  const rows = getActiveBacktestRows();
  renderBacktestScenarioTabs();
  syncBacktestFilter(backtestFilterModel, [...new Set(rows.map((row) => row.model).filter(Boolean))], "All models");
  syncBacktestFilter(backtestFilterSymbol, [...new Set(rows.map((row) => row.symbol).filter(Boolean))], "All symbols");
  syncBacktestFilter(backtestFilterRange, [...new Set(rows.map((row) => row.rangeTimeframe).filter(Boolean))], "All ranges");
  syncBacktestFilter(backtestFilterBias, [...new Set(rows.map((row) => row.overallBias).filter(Boolean))], "All bias");
  syncBacktestFilter(backtestFilterResult, [...new Set(rows.map((row) => row.result).filter(Boolean))], "All results");
  syncBacktestFilter(backtestFilterFlip, [...new Set(rows.map((row) => row.flip).filter(Boolean))], "All flips");

  const filtered = getFilteredBacktests();
  const wins = filtered.filter((row) => row.result === "Win").length;
  const losses = filtered.filter((row) => row.result === "Loss").length;
  const flips = filtered.filter((row) => row.flip === "Yes").length;
  const flipWins = filtered.filter((row) => row.flip === "Yes" && row.flipResult === "Win").length;
  const averageRange = filtered.length ? filtered.reduce((sum, row) => sum + row.range, 0) / filtered.length : 0;
  backtestSummaryGrid.innerHTML = [
    ["Trades", filtered.length],
    ["Average Range", formatPoints(averageRange)],
    ["Wins", wins],
    ["Losses", losses],
    ["Win Rate", `${wins + losses ? Math.round((wins / (wins + losses)) * 100) : 0}%`],
    ["Flips", flips],
    ["Flip Wins", flipWins],
  ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
  backtestTableBody.innerHTML = filtered.length ? filtered.map((row) => `
    <tr>
      <td data-label="Date">${escapeHtml(row.date || "-")}</td>
      <td data-label="Range">${formatPoints(row.range)}</td>
      <td data-label="Bias">${escapeHtml(row.overallBias || "-")}<small>${escapeHtml(row.firstCandleDirection || "-")} first candle</small></td>
      <td data-label="Target">${getBacktestTargetLabel(row)}<small>${escapeHtml(getBacktestTargetContext(row))}</small></td>
      <td data-label="Break">${escapeHtml(row.breakDirection || "-")}<small>${formatPoints(row.breakAmount)} · ${escapeHtml(row.timeToBreak || "-")}</small></td>
      <td data-label="Reaction">${escapeHtml(row.nextCandleReaction || "-")}<small>${formatPoints(row.nextCandlePullback)} pullback</small></td>
      <td data-label="Result"><span class="badge ${row.result === "Win" ? "win" : row.result === "Loss" ? "loss" : "open"}">${escapeHtml(row.result || "-")}</span></td>
      <td data-label="Flip">${escapeHtml(row.flip || "-")}<small>${escapeHtml(row.flipResult || "-")}</small></td>
    </tr>
  `).join("") : `<tr><td colspan="8" class="table-message">${orbBacktestsLoading ? "Loading ORB backtest data..." : "No ORB backtest data available yet."}</td></tr>`;
}

async function orbBacktestRequest(body) {
  const passcodeHash = sessionStorage.getItem(AUTH_HASH_KEY);
  return callSupabaseFunction("orb-backtests", body, { "x-user-passcode-hash": passcodeHash || "" });
}

async function loadOrbBacktests({ showLoading = true } = {}) {
  if (!window.callSupabaseFunction || !currentUserId || orbBacktestsLoading) return;
  orbBacktestsLoading = true;
  if (showLoading) renderBacktesting();
  try {
    const result = await orbBacktestRequest({ action: "list" });
    orbBacktests = Array.isArray(result.rows) ? result.rows : [];
    orbBacktestsLoaded = true;
  } catch (error) {
    showToast(error.message || "Could not load ORB backtests", "warning");
  } finally {
    orbBacktestsLoading = false;
    renderBacktesting();
  }
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
      const points = getTradePoints(trade);
      const row = document.createElement("tr");
      row.dataset.tradeId = trade.id;
      row.className = `trade-row ${getOutcomeClass(trade.outcome)}`;
      row.innerHTML = `
        <td data-label="Date">${trade.tradeDate}</td>
        <td data-label="Symbol" class="symbol-cell">${escapeHtml(trade.symbol)}</td>
        <td data-label="Market">${escapeHtml(getTradeMarketType(trade))}</td>
        <td data-label="Session" data-session-column>${escapeHtml(trade.session || getDefaultOption("sessions"))}</td>
        <td data-label="Account">${escapeHtml(trade.account || getDefaultOption("accounts"))}</td>
        <td data-label="Strategy">${escapeHtml(trade.strategy || "-")}${trade.challengeName ? `<span class="trade-challenge-badge">${escapeHtml(trade.challengeName)}${trade.challengeTradeType ? ` · ${escapeHtml(trade.challengeTradeType)}` : ""}</span>` : ""}</td>
        <td data-label="Size Type">${getTradeSizeType(trade)}</td>
        <td data-label="Size">${formatTradeSize(trade)}</td>
        <td data-label="Points" class="${getPointsClass(points)}">${formatPoints(points)}</td>
        <td data-label="Win / Loss"><span class="badge ${getOutcomeClass(trade.outcome)}">${escapeHtml(trade.outcome || "Pending")}</span></td>
        <td data-label="Amount" class="${trade.outcome === "Win" ? "amount-win" : trade.outcome === "Loss" ? "amount-loss" : "muted"}">
          ${formatAmount(trade.amount)}
        </td>
        <td data-label="Discipline">${renderDisciplineBadge(trade)}</td>
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
  emptyState.querySelector("h2").textContent = trades.length ? "No trades match" : "No trades yet";
  emptyState.querySelector("p").textContent = trades.length
    ? "Your journal has trades, but none match the current filters. Clear or change the filters to bring them back."
    : "Configure your inputs, then add your first trade to start building your journal.";
  const emptySteps = document.querySelector("#emptyStateSteps");
  if (emptySteps) {
    emptySteps.classList.toggle("hidden", trades.length > 0);
  }
  tablePagination.classList.toggle("hidden", visibleTrades.length === 0);
  paginationStatus.textContent = visibleTrades.length
    ? `Showing ${pageStart + 1}-${Math.min(pageEnd, visibleTrades.length)} of ${visibleTrades.length} trades`
    : "Showing 0 trades";
  prevPageButton.disabled = currentTablePage <= 1;
  nextPageButton.disabled = currentTablePage >= totalPages;
  syncSessionVisibility();
}

function getVisibleTradesSorted() {
  return getFilteredTrades().slice().sort(compareTradesNewestFirst);
}

function compareTradesNewestFirst(a, b) {
  const dateOrder = String(b.tradeDate || "").localeCompare(String(a.tradeDate || ""));
  if (dateOrder) return dateOrder;
  return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
}

function openTradeDrawer(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  selectedTradeId = id;
  const amount = getTradeAmount(trade);
  const points = getTradePoints(trade);
  const discipline = getTradeDiscipline(trade);
  tradeDrawerTitle.textContent = `${trade.symbol || "Trade"} · ${trade.tradeDate || "-"}`;
  tradeDrawerContent.innerHTML = `
    <div class="drawer-metrics">
      <div><span>Outcome</span><strong><span class="badge ${getOutcomeClass(trade.outcome)}">${escapeHtml(trade.outcome || "Pending")}</span></strong></div>
      <div><span>Amount</span><strong class="${amount > 0 ? "amount-win" : amount < 0 ? "amount-loss" : "amount-flat"}">${formatSummaryAmount(amount)}</strong></div>
      <div><span>Size</span><strong>${formatTradeSize(trade)}</strong></div>
      <div><span>Points</span><strong class="${getPointsClass(points)}">${formatPoints(points)}</strong></div>
      <div><span>Discipline</span><strong>${renderDisciplineBadge(trade)}</strong></div>
    </div>
    <dl class="drawer-details">
      <div><dt>Market</dt><dd>${escapeHtml(getTradeMarketType(trade))}</dd></div>
      ${appConfig.trackSessions ? `<div><dt>Session</dt><dd>${escapeHtml(trade.session || "-")}</dd></div>` : ""}
      <div><dt>Account</dt><dd>${escapeHtml(trade.account || "-")}</dd></div>
      <div><dt>Strategy</dt><dd>${escapeHtml(trade.strategy || "-")}</dd></div>
      ${trade.challengeName ? `<div><dt>Challenge</dt><dd>${escapeHtml(trade.challengeName)}</dd></div>` : ""}
      ${trade.challengeTradeType ? `<div><dt>Challenge trade</dt><dd>${escapeHtml(trade.challengeTradeType)}</dd></div>` : ""}
      ${isOrbStrategy(trade.strategy) ? `<div><dt>Opening Range</dt><dd>${escapeHtml(trade.openingRange || "-")}</dd></div><div><dt>Entry Timeframe</dt><dd>${escapeHtml(trade.entryTimeframe || "-")}</dd></div><div><dt>Entry Model</dt><dd>${escapeHtml(trade.entryModel || "-")}</dd></div>` : ""}
      <div><dt>Direction</dt><dd>${hasTradePriceDetails(trade) ? escapeHtml(trade.direction || "Buy") : "-"}</dd></div>
      <div><dt>Entry / Exit</dt><dd>${hasTradePriceDetails(trade) ? `${escapeHtml(trade.entryPrice)} / ${escapeHtml(trade.exitPrice)}` : "-"}</dd></div>
    </dl>
    <div class="drawer-discipline">
      ${renderDisciplineDetails(discipline)}
    </div>
    <article class="drawer-rules">
      <span>Personal Checklist</span>
      <div class="drawer-discipline">${renderTradingRuleDetails(trade)}</div>
    </article>
    <article class="drawer-rules">
      <span>Automated Rule Checks</span>
      <div class="drawer-discipline">${
        Array.isArray(trade.ruleBreaches) && trade.ruleBreaches.length
          ? trade.ruleBreaches.map((rule) => `<span class="bad">× ${escapeHtml(rule.label)}</span>`).join("")
          : '<span class="good">✓ No limits breached</span>'
      }</div>
    </article>
    ${
      Array.isArray(trade.continuedAfterRuleWarnings) && trade.continuedAfterRuleWarnings.length
        ? `<article class="drawer-rules"><span>Pre-trade Warning</span><div class="drawer-discipline"><span class="bad">Continued after a stop rule warning</span></div></article>`
        : ""
    }
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

function renderDisciplineDetails(discipline) {
  const selectedRules = DISCIPLINE_RULES.filter((rule) => Boolean(discipline[rule.key]));

  if (!selectedRules.length) {
    return '<span class="neutral">No discipline items selected</span>';
  }

  return selectedRules
    .map((rule) => `<span class="${rule.positive ? "good" : "bad"}">✓ ${escapeHtml(rule.label)}</span>`)
    .join("");
}

function getTradeRules(trade) {
  return Array.isArray(trade.tradingRules) ? trade.tradingRules : [];
}

function renderTradingRuleDetails(trade) {
  const rules = getTradeRules(trade);
  if (!rules.length) {
    return '<span class="neutral">No trading rules recorded</span>';
  }

  return rules
    .map((item) => `<span class="${item.followed ? "good" : "bad"}">${item.followed ? "✓" : "×"} ${escapeHtml(item.rule)}</span>`)
    .join("");
}

function updateTradingRulesSummary() {
  const inputs = [...tradingRulesOptions.querySelectorAll("[data-trading-rule]")];
  const followed = inputs.filter((input) => input.checked).length;
  tradingRulesSummary.textContent = inputs.length ? `${followed}/${inputs.length} followed` : "";
}

function renderTradingRuleChecklist(selectedRules = []) {
  const selectedByRule = new Map(selectedRules.map((item) => [item.rule, Boolean(item.followed)]));
  tradingRulesOptions.innerHTML = appConfig.checklistRules.length
    ? appConfig.checklistRules
        .map(
          (rule) => `
            <label class="toggle-option trading-rule-option">
              <input type="checkbox" data-trading-rule="${escapeHtml(rule)}" ${selectedByRule.get(rule) ? "checked" : ""} />
              <span>${escapeHtml(rule)}</span>
            </label>
          `,
        )
        .join("")
    : "";
  tradingRulesDisclosure.classList.toggle("hidden", !appConfig.checklistRules.length);
  updateTradingRulesSummary();
}

function readTradingRules() {
  return [...tradingRulesOptions.querySelectorAll("[data-trading-rule]")].map((input) => ({
    rule: input.dataset.tradingRule,
    followed: input.checked,
  }));
}

function getTradeDayName(tradeDate) {
  const [year, month, day] = String(tradeDate || "").split("-").map(Number);
  if (!year || !month || !day) return "";
  return TRADING_DAYS[new Date(year, month - 1, day).getDay() === 0 ? 6 : new Date(year, month - 1, day).getDay() - 1];
}

function getPlanRestrictionBreaches(trade) {
  const breaches = [];
  const tradeDay = getTradeDayName(trade.tradeDate);
  if (appConfig.blockedTradingDays.includes(tradeDay)) {
    breaches.push({ type: "blockedTradingDays", label: `${tradeDay || "Selected day"} is marked as a day you do not trade` });
  }
  return breaches;
}

function getAutomatedRuleBreaches(trade) {
  const sameDayTrades = trades.filter((item) => item.tradeDate === trade.tradeDate && item.id !== trade.id);
  const dayTradesWithCandidate = [...sameDayTrades, trade];
  const ordered = dayTradesWithCandidate.slice().sort((a, b) => (a.createdAt || "").localeCompare(b.createdAt || ""));
  const lossesWithCandidate = dayTradesWithCandidate.filter((item) => item.outcome === "Loss");
  const dailyLossWithCandidate = Math.abs(dayTradesWithCandidate.reduce((total, item) => total + Math.min(0, getTradeAmount(item)), 0));
  let consecutiveLosses = 0;
  for (let index = ordered.length - 1; index >= 0 && ordered[index].outcome === "Loss"; index -= 1) {
    consecutiveLosses += 1;
  }

  const limitBreaches = appConfig.automatedRules.flatMap((rule) => {
    const definition = AUTOMATED_RULE_TYPES.find((item) => item.key === rule.type);
    const limit = Number(rule.value);
    let breached = false;
    if (rule.type === "maxTradesPerDay") breached = dayTradesWithCandidate.length > limit;
    if (rule.type === "maxLossesPerDay") breached = trade.outcome === "Loss" && lossesWithCandidate.length > limit;
    if (rule.type === "maxDailyLoss") breached = trade.outcome === "Loss" && dailyLossWithCandidate > limit;
    if (rule.type === "maxConsecutiveLosses") breached = trade.outcome === "Loss" && consecutiveLosses > limit;
    return breached ? [{ type: rule.type, label: definition?.label || rule.type, limit }] : [];
  });
  const accountSettings = appConfig.accountSettings?.[trade.account] || {};
  const startingBalance = parseNumber(accountSettings.startingBalance || appConfig.accountBalances?.[trade.account]);
  const accountTrades = trades.filter((item) => item.account === trade.account && item.id !== trade.id);
  const accountTradesWithCandidate = [...accountTrades, trade];
  const propBreaches = [];
  if (accountSettings.isProp && startingBalance > 0) {
    const dailyLimit = startingBalance * (parseNumber(accountSettings.dailyDrawdown) / 100);
    const maxLimit = startingBalance * (parseNumber(accountSettings.maxDrawdown) / 100);
    const dailyUsed = Math.abs(accountTradesWithCandidate.filter((item) => item.tradeDate === trade.tradeDate).reduce((total, item) => total + Math.min(0, getTradeAmount(item)), 0));
    const maxUsed = Math.max(0, -accountTradesWithCandidate.reduce((total, item) => total + getTradeAmount(item), 0));
    if (dailyLimit && dailyUsed >= dailyLimit) propBreaches.push({ type: `propDailyDrawdown:${trade.account}`, label: `${trade.account} daily drawdown limit reached`, limit: dailyLimit });
    if (maxLimit && maxUsed >= maxLimit) propBreaches.push({ type: `propMaxDrawdown:${trade.account}`, label: `${trade.account} maximum drawdown limit reached`, limit: maxLimit });
  }
  return [...limitBreaches, ...propBreaches, ...getPlanRestrictionBreaches(trade)];
}

function getReachedStopRules(tradeDate) {
  const dayTrades = trades.filter((trade) => trade.tradeDate === tradeDate);
  const ordered = dayTrades.slice().sort((a, b) => (a.createdAt || "").localeCompare(b.createdAt || ""));
  const losses = dayTrades.filter((trade) => trade.outcome === "Loss");
  const dailyLoss = Math.abs(dayTrades.reduce((total, trade) => total + Math.min(0, getTradeAmount(trade)), 0));
  let consecutiveLosses = 0;
  for (let index = ordered.length - 1; index >= 0 && ordered[index].outcome === "Loss"; index -= 1) {
    consecutiveLosses += 1;
  }

  return appConfig.automatedRules.flatMap((rule) => {
    const definition = AUTOMATED_RULE_TYPES.find((item) => item.key === rule.type);
    const limit = Number(rule.value);
    let reached = false;
    if (rule.type === "maxTradesPerDay") reached = dayTrades.length >= limit;
    if (rule.type === "maxLossesPerDay") reached = losses.length >= limit;
    if (rule.type === "maxDailyLoss") reached = dailyLoss >= limit;
    if (rule.type === "maxConsecutiveLosses") reached = consecutiveLosses >= limit;
    return reached ? [{ type: rule.type, label: definition?.label || rule.type, limit }] : [];
  });
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
  renderDashboardSetupAlert();
  syncSessionVisibility();
  renderSummary();
  renderEquityCurve();
  renderAnalytics();
  renderPerformanceCalendar();
  renderStrategyBreakdown();
  renderAccountBalances();
  renderBacktesting();
  renderTable();
  renderWeeklyPlan();
  renderWeeklyReview();
  renderTraining();
  renderHubDashboard();
}

function renderHubDashboard() {
  if (!hubWeekAmount) return;
  const weekKeys = new Set(getWeekdays().map((day) => day.key));
  const weekTrades = trades.filter((trade) => weekKeys.has(trade.tradeDate));
  const amount = weekTrades.reduce((total, trade) => total + getTradeAmount(trade), 0);
  const wins = weekTrades.filter((trade) => trade.outcome === "Win").length;
  const losses = weekTrades.filter((trade) => trade.outcome === "Loss").length;
  hubWeekAmount.textContent = formatSummaryAmount(amount);
  hubWeekAmount.className = amount > 0 ? "amount-win" : amount < 0 ? "amount-loss" : "";
  hubTrades.textContent = String(weekTrades.length);
  hubWins.textContent = String(wins);
  hubLosses.textContent = String(losses);
  hubWinRate.textContent = `${wins + losses ? Math.round((wins / (wins + losses)) * 100) : 0}%`;
  const completed = TRAINING_CHAPTERS.filter((chapter) => getTrainingProgress(chapter.id).completed).length;
  const trainingPercent = Math.round((completed / TRAINING_CHAPTERS.length) * 100);
  hubTrainingProgress.textContent = `${trainingPercent}%`;
  hubTrainingProgressBar.style.width = `${trainingPercent}%`;
  const nextChapter = TRAINING_CHAPTERS.find((chapter) => !getTrainingProgress(chapter.id).completed);
  hubTrainingDetail.textContent = nextChapter ? `Next: ${nextChapter.title}` : "Course complete.";
  const todayEvents = newsEvents.filter((event) => toLocalDateKey(event.date) === toLocalDateKey());
  hubNewsList.innerHTML = todayEvents.length
    ? todayEvents.slice(0, 6).map((event) => `<button type="button" data-hub-news><span>${escapeHtml(formatNewsEventTime(event.date))}</span><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.currency || "")} · ${escapeHtml(event.impact || "")}</small></button>`).join("")
    : '<div class="hub-news-empty">No economic events scheduled for today.</div>';
  hubReviewStatus.textContent = appConfig.weeklyReviews[getWeekdays()[0].key]?.completedAt ? "Complete" : "Incomplete";
  const weekKey = getWeekdays()[0].key;
  const plan = appConfig.weeklyPlans[weekKey];
  hubPlanStatus.textContent = plan?.savedAt ? "Ready" : "Not set";
  hubPlanDetail.textContent = plan?.savedAt
    ? `${weekTrades.length}${plan.maxTrades ? ` of ${plan.maxTrades}` : ""} trades · ${formatSummaryAmount(amount)} P/L`
    : "Set your boundaries and focus for the week.";
  renderHubChallenges();
}

function getChallengeTodayStatus(challenge) {
  if (challenge.challenge_type === "prop" || challenge.challenge_type === "custom") return "Open for trades";
  const today = toDateKey(new Date());
  const dayTrades = trades.filter((trade) => trade.challengeId === challenge.id && trade.tradeDate === today).sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  const initialTrade = dayTrades.find((trade) => (trade.challengeTradeType || "initial") === "initial") || dayTrades[0];
  const flipTrade = dayTrades.find((trade) => trade.challengeTradeType === "flip");
  if (!initialTrade) return "Trade available";
  if (initialTrade.outcome === "Pending" && challenge.rules_json?.tradeRule === "allow-flip") return "Initial trade pending";
  if (initialTrade.outcome === "Loss" && challenge.rules_json?.tradeRule === "allow-flip" && !flipTrade) return "Flip available";
  return "Completed today";
}

function renderHubChallenges() {
  if (!hubChallengesPanel) return;
  const accepted = challenges.filter((challenge) => challenge.invitationStatus === "accepted" && challenge.status === "active");
  const pending = challenges.filter((challenge) => challenge.invitationStatus === "pending").length;
  hubChallengesPanel.classList.toggle("hidden", !accepted.length && !pending);
  if (!accepted.length && !pending) return;
  hubChallengesTitle.textContent = pending ? `${accepted.length} active · ${pending} invitation${pending === 1 ? "" : "s"}` : `${accepted.length} active`;
  hubChallengeList.innerHTML = [
    ...accepted.slice(0, 3).map((challenge) => {
      const leaderboard = challenge.leaderboard || [];
      const position = leaderboard.findIndex((entry) => entry.userId === currentUserId);
      const own = position >= 0 ? leaderboard[position] : { wins: 0, points: 0 };
      const status = getChallengeTodayStatus(challenge);
      return `<article class="hub-challenge-item">
        <div><span>${escapeHtml(challenge.challenge_type === "custom" ? "Custom Challenge" : challenge.rules_json?.standardMarket || "ORB Challenge")}</span><strong>${escapeHtml(challenge.name)}</strong><small>${escapeHtml(status)}</small></div>
        <dl><div><dt>Position</dt><dd>${position >= 0 ? `#${position + 1}` : "-"}</dd></div><div><dt>Wins</dt><dd>${own.wins || 0}</dd></div><div><dt>Points</dt><dd class="${getPointsClass(own.points)}">${formatPoints(own.points || 0)}</dd></div></dl>
        <button class="ghost-button" type="button" data-hub-challenge-trade="${challenge.id}" ${status === "Completed today" || status === "Initial trade pending" ? "disabled" : ""}>${status === "Flip available" ? "Add flip" : "Add trade"}</button>
      </article>`;
    }),
    pending ? `<button class="hub-challenge-invitation" type="button" data-hub-view-challenges>${pending} challenge invitation${pending === 1 ? "" : "s"} waiting</button>` : "",
  ].join("");
}

async function challengeRequest(body) {
  const passcodeHash = sessionStorage.getItem(AUTH_HASH_KEY);
  return callSupabaseFunction("challenges", body, { "x-user-passcode-hash": passcodeHash || "" });
}

function renderChallengeLoadingState() {
  challengeSummaryGrid.innerHTML = Array.from({ length: 3 }, () => `
    <article class="challenge-summary-skeleton" aria-hidden="true">
      <span class="challenge-skeleton-line short"></span>
      <span class="challenge-skeleton-line value"></span>
    </article>
  `).join("");
  challengeGrid.innerHTML = Array.from({ length: 2 }, () => `
    <article class="challenge-card challenge-card-skeleton" aria-hidden="true">
      <span class="challenge-skeleton-line short"></span>
      <span class="challenge-skeleton-line heading"></span>
      <span class="challenge-skeleton-line"></span>
      <span class="challenge-skeleton-line medium"></span>
      <div class="challenge-skeleton-table"></div>
    </article>
  `).join("");
}

async function loadChallenges({ showLoading = true } = {}) {
  if (!currentUserId || !challengeGrid) return;
  if (challengesLoading) return;
  challengesLoading = true;
  if (showLoading) {
    renderChallengeLoadingState();
    openCreateChallengeButton.disabled = true;
    challengeGrid.setAttribute("aria-busy", "true");
  }
  try {
    const result = await challengeRequest({ action: "list" });
    challenges = result.challenges || [];
    challengesLoaded = true;
    renderHubChallenges();
    if (showLoading || document.querySelector("#challengesView")?.classList.contains("active")) renderChallenges();
  } catch (error) {
    if (showLoading) {
      challengeSummaryGrid.innerHTML = "";
      challengeGrid.innerHTML = `<div class="empty-state"><h2>Challenges unavailable</h2><p>${escapeHtml(error.message)}</p><button class="ghost-button" type="button" data-retry-challenges>Try again</button></div>`;
    }
  } finally {
    challengesLoading = false;
    if (showLoading) {
      openCreateChallengeButton.disabled = false;
      challengeGrid.removeAttribute("aria-busy");
    }
  }
}

function renderChallenges() {
  const pending = challenges.filter((challenge) => challenge.invitationStatus === "pending").length;
  const active = challenges.filter((challenge) => challenge.invitationStatus === "accepted").length;
  const created = challenges.filter((challenge) => challenge.isCreator).length;
  challengeSummaryGrid.innerHTML = [["Your challenges", active], ["Pending invitations", pending], ["Created by you", created]]
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
  challengeGrid.innerHTML = challenges.length ? challenges.map((challenge) => {
    const pendingInvite = challenge.invitationStatus === "pending";
    const members = challenge.members || [];
    const leaderboard = challenge.leaderboard || [];
    const isProp = challenge.challenge_type === "prop";
    const isCustom = challenge.challenge_type === "custom";
    const rules = challenge.rules_json || {};
    return `<article class="challenge-card">
      <div class="challenge-card-heading"><div><span>${isProp ? "Prop challenge" : isCustom ? "Custom challenge" : "ORB challenge"} · ${escapeHtml(challenge.status)}</span><h3>${escapeHtml(challenge.name)}</h3></div>${challenge.isCreator ? '<b>Creator</b>' : ""}</div>
      <p>${escapeHtml(challenge.description || "No description added.")}</p>
      ${isProp
        ? `<div class="challenge-rule-strip"><span>${formatAmount(rules.startingBalance)} start</span><span>${Number(rules.profitTargetPercent || 0)}% target</span><span>${Number(rules.dailyDrawdownPercent || 0)}% daily drawdown</span><span>${Number(rules.maxDrawdownPercent || 0)}% max drawdown</span></div>
          <div class="challenge-leaderboard prop-leaderboard"><div class="challenge-leaderboard-head"><span>Trader</span><span>Trades</span><span>Wins</span><span>P/L</span><span>Progress</span></div>${leaderboard.map((entry, index) => `<div><strong><i>${index + 1}</i>${escapeHtml(entry.name)}</strong><span>${entry.trades}</span><span>${entry.wins}</span><b class="${getPointsClass(entry.netAmount)}">${formatSummaryAmount(entry.netAmount)}</b><b class="${getPointsClass(entry.profitPercent)}">${entry.profitPercent >= 0 ? "+" : ""}${Number(entry.profitPercent || 0).toFixed(2)}%</b></div>`).join("") || '<p class="muted">No qualifying trades yet.</p>'}</div>`
        : isCustom
          ? `<div class="challenge-rule-strip"><span>Custom rules</span><span>Any linked journal trade</span><span>Points leaderboard</span></div>
          <div class="challenge-leaderboard"><div class="challenge-leaderboard-head"><span>Trader</span><span>Trades</span><span>Wins</span><span>Points</span></div>${leaderboard.map((entry, index) => `<div><strong><i>${index + 1}</i>${escapeHtml(entry.name)}</strong><span>${entry.trades}</span><span>${entry.wins}</span><b class="${getPointsClass(entry.points)}">${formatPoints(entry.points)}</b></div>`).join("") || '<p class="muted">No qualifying trades yet.</p>'}</div>`
        : `<div class="challenge-rule-strip"><span>${escapeHtml(rules.standardMarket || "Market not set")}</span><span>${escapeHtml(rules.session || "-")} session</span><span>ORB</span><span>${rules.tradeRule === "allow-flip" ? "Flip after loss enabled" : "Initial trade only"}</span></div>
          <div class="challenge-leaderboard"><div class="challenge-leaderboard-head"><span>Trader</span><span>Trades</span><span>Wins</span><span>Points</span></div>${leaderboard.map((entry, index) => `<div><strong><i>${index + 1}</i>${escapeHtml(entry.name)}</strong><span>${entry.trades}</span><span>${entry.wins}</span><b class="${getPointsClass(entry.points)}">${formatPoints(entry.points)}</b></div>`).join("") || '<p class="muted">No qualifying trades yet.</p>'}</div>`}
      <div class="challenge-members"><span>${members.filter((member) => member.status === "accepted").length} participants</span>${members.slice(0, 4).map((member) => `<i title="${escapeHtml(member.name)}">${escapeHtml(member.name.split(" ").map((part) => part[0]).join("").slice(0, 2))}</i>`).join("")}</div>
      ${challenge.isCreator ? `<div class="challenge-participant-list">${members.map((member) => `<div><span><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.email || "")}</small></span><b>${escapeHtml(member.status)}</b></div>`).join("")}</div>` : ""}
      <div class="challenge-card-actions">
        ${pendingInvite ? `<button class="ghost-button" type="button" data-challenge-response="declined" data-challenge-id="${challenge.id}">Decline</button><button class="primary-button" type="button" data-challenge-response="accepted" data-challenge-id="${challenge.id}">Accept invitation</button>` : ""}
        ${challenge.isCreator ? `<button class="icon-button challenge-manage-button" type="button" data-challenge-edit="${challenge.id}" aria-label="Edit ${escapeHtml(challenge.name)}" title="Edit challenge">✎</button><button class="icon-button challenge-manage-button danger" type="button" data-challenge-delete="${challenge.id}" aria-label="Delete ${escapeHtml(challenge.name)}" title="Delete challenge">×</button><button class="primary-button" type="button" data-challenge-invite="${challenge.id}">Invite user</button>` : ""}
      </div>
    </article>`;
  }).join("") : `<div class="challenge-empty-state">
    <div>
      <p class="eyebrow">Trade together</p>
      <h2>No challenges yet</h2>
      <p>Create an ORB, prop, or custom challenge for your group, or wait for another trader to send you an invitation.</p>
      <ol class="empty-state-steps compact-steps" aria-label="Challenge setup steps">
        <li><span>1</span>Create an ORB challenge for one-trade-per-day accountability.</li>
        <li><span>2</span>Create a prop challenge to track progress against a target.</li>
        <li><span>3</span>Use custom challenges for flexible group competitions.</li>
      </ol>
    </div>
    <button class="primary-button" type="button" data-create-first-challenge>Create challenge</button>
  </div>`;
}

function getAcceptedChallenges() {
  const today = toDateKey(new Date());
  return challenges.filter((challenge) => {
    const start = String(challenge.starts_at || "").slice(0, 10);
    const end = String(challenge.ends_at || "").slice(0, 10);
    return challenge.invitationStatus === "accepted" && ["orb", "prop", "custom"].includes(challenge.challenge_type) && challenge.status === "active" && (!start || today >= start) && (!end || today <= end);
  });
}

function syncTradeChallenge(preferredId = null) {
  const available = getAcceptedChallenges();
  const selectedId = preferredId !== null ? preferredId : tradeChallengeInput.value;
  if (!available.length) {
    tradeChallengeInput.innerHTML = '<option value="">Not part of a challenge</option>';
    tradeChallengeInput.value = "";
    challengeTradeSection.classList.add("hidden");
    challengeRequirements.classList.add("hidden");
    challengeRequirements.innerHTML = "";
    challengeLimitMessage.classList.add("hidden");
    challengeLimitMessage.innerHTML = "";
    challengeSymbolSetup.classList.add("hidden");
    form.classList.remove("challenge-selection-pending");
    form.session.disabled = false;
    form.strategy.disabled = false;
    form.symbol.disabled = false;
    form.openingRange.disabled = false;
    form.direction.disabled = false;
    syncConfiguredInputs();
    return;
  }
  tradeChallengeInput.innerHTML = '<option value="__choose__" disabled>Choose an option</option><option value="">Not part of a challenge</option>' + available.map((challenge) => `<option value="${challenge.id}">${escapeHtml(challenge.name)}</option>`).join("");
  if (selectedId === "__choose__" || selectedId === "" || available.some((challenge) => challenge.id === selectedId)) tradeChallengeInput.value = selectedId;
  challengeTradeSection.classList.remove("hidden");
  const selected = available.find((challenge) => challenge.id === tradeChallengeInput.value);
  const waitingForChoice = !editingTradeId && tradeChallengeInput.value === "__choose__";
  const tradeDate = form.tradeDate.value || toDateKey(new Date());
  const isProp = selected?.challenge_type === "prop";
  const isCustom = selected?.challenge_type === "custom";
  const dayTrades = selected ? trades.filter((trade) => trade.id !== editingTradeId && trade.challengeId === selected.id && trade.tradeDate === tradeDate).sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt))) : [];
  const initialTrade = dayTrades.find((trade) => (trade.challengeTradeType || "initial") === "initial") || dayTrades[0];
  const flipTrade = dayTrades.find((trade) => trade.challengeTradeType === "flip");
  const flipsAllowed = selected?.rules_json?.tradeRule === "allow-flip";
  const flipEligible = flipsAllowed && initialTrade?.outcome === "Loss" && !flipTrade;
  const challengeBlocked = Boolean(!isProp && !isCustom && initialTrade && !flipEligible);
  form.classList.toggle("challenge-selection-pending", waitingForChoice || challengeBlocked);
  challengeLimitMessage.classList.toggle("hidden", !challengeBlocked);
  challengeSymbolSetup.classList.add("hidden");
  challengeLimitMessage.innerHTML = challengeBlocked
    ? `<p class="eyebrow">Daily entry complete</p><h3>${initialTrade.outcome === "Pending" && flipsAllowed ? "Update the initial trade first" : "Today’s challenge trades are complete"}</h3><p>${initialTrade.outcome === "Pending" && flipsAllowed ? "A flip trade becomes available only after the initial trade is updated as a loss." : `${escapeHtml(selected.name)} has no further qualifying trades available today.`}</p>`
    : "";
  challengeRequirements.classList.toggle("hidden", !selected);
  if (!selected) {
    challengeRequirements.innerHTML = "";
    challengeSymbolSetup.classList.add("hidden");
    form.session.disabled = false;
    form.strategy.disabled = false;
    form.symbol.disabled = false;
    form.openingRange.disabled = false;
    form.direction.disabled = false;
    syncConfiguredInputs();
    return;
  }
  if (isProp || isCustom) {
    form.session.disabled = false;
    form.strategy.disabled = false;
    form.symbol.disabled = false;
    form.openingRange.disabled = false;
    form.direction.disabled = false;
    syncConfiguredInputs();
    if (isCustom) {
      challengeRequirements.innerHTML = `<strong>${escapeHtml(selected.name)} · Custom challenge</strong><span>Any linked trade counts · leaderboard ranks points, then wins</span>`;
      syncStrategyExecutionFields();
      return;
    }
    const target = Number(selected.rules_json?.profitTargetPercent || 0);
    const balance = Number(selected.rules_json?.startingBalance || 0);
    challengeRequirements.innerHTML = `<strong>${escapeHtml(selected.name)} · Prop challenge</strong><span>${formatAmount(balance)} starting balance · ${target}% profit target · all linked trades count</span>`;
    syncStrategyExecutionFields();
    return;
  }
  const session = selected.rules_json?.session || "";
  const standardMarket = selected.rules_json?.standardMarket || "";
  const eligibleSymbols = getSymbolsForStandardMarket(standardMarket);
  preserveOption(form.session, session);
  preserveOption(form.strategy, ORB_STRATEGY);
  populateSelect(form.symbol, eligibleSymbols);
  sessionField.classList.remove("hidden");
  form.session.disabled = true;
  form.strategy.disabled = true;
  const nextType = flipEligible ? "Flip trade" : "Initial trade";
  challengeRequirements.innerHTML = eligibleSymbols.length
    ? `<strong>${escapeHtml(selected.name)} · ${nextType}</strong><span>${escapeHtml(standardMarket)} · ${escapeHtml(session)} session · ${flipsAllowed ? "Flip allowed after initial loss" : "Initial trade only"}</span>`
    : `<strong>${escapeHtml(selected.name)}</strong><span>Select a ${escapeHtml(standardMarket)} instrument in Configure Inputs before adding this trade.</span>`;
  if (!eligibleSymbols.length) {
    form.classList.add("challenge-selection-pending");
  } else if (!form.symbol.value || !eligibleSymbols.includes(form.symbol.value)) {
    form.symbol.value = eligibleSymbols[0];
  }
  if (flipEligible) {
    preserveOption(form.marketType, getTradeMarketType(initialTrade));
    syncSymbolFromMarket(initialTrade.symbol);
    preserveOption(form.symbol, initialTrade.symbol);
    syncSizeFromMarket();
    form.openingRange.value = initialTrade.openingRange || "";
    form.direction.value = initialTrade.direction === "Sell" ? "Buy" : "Sell";
    form.symbol.disabled = true;
    form.openingRange.disabled = true;
    form.direction.disabled = true;
    challengeRequirements.innerHTML = `<strong>${escapeHtml(selected.name)} · Flip trade</strong><span>${escapeHtml(initialTrade.symbol)} · ${escapeHtml(initialTrade.openingRange || "ORB")} · ${escapeHtml(form.direction.value)}</span>`;
  } else {
    form.symbol.disabled = false;
    form.openingRange.disabled = false;
    form.direction.disabled = false;
  }
  syncStrategyExecutionFields();
}


function trainingCandleSvg(type) {
  const candle = (x, open, close, high, low, colour, label = "", width = 22) => {
    const top = Math.min(open, close);
    const height = Math.max(4, Math.abs(open - close));
    return `<g><line x1="${x}" y1="${high}" x2="${x}" y2="${low}" stroke="${colour}" stroke-width="2"/><rect x="${x - width / 2}" y="${top}" width="${width}" height="${height}" rx="2" fill="${colour}"/><text x="${x}" y="258" text-anchor="middle">${label}</text></g>`;
  };
  const sequence = (startX = 46, width = 22) => [
    [150, 132, 118, 166, "#ff7a7a"], [136, 112, 98, 150, "#b9ff57"], [116, 128, 105, 142, "#ff7a7a"],
    [132, 102, 88, 145, "#b9ff57"], [106, 84, 72, 119, "#b9ff57"], [88, 98, 76, 111, "#ff7a7a"],
    [102, 78, 67, 113, "#b9ff57"], [82, 64, 53, 94, "#b9ff57"], [68, 79, 57, 91, "#ff7a7a"],
    [82, 60, 48, 94, "#b9ff57"], [63, 72, 52, 84, "#ff7a7a"], [76, 55, 43, 87, "#b9ff57"],
  ].map((values, index) => candle(startX + index * 39, ...values, "", width)).join("");
  const axes = `<g class="chart-axis"><text x="485" y="54">109</text><text x="485" y="106">105</text><text x="485" y="158">100</text><text x="485" y="210">96</text><text x="34" y="258">09:00</text><text x="220" y="258">09:30</text><text x="410" y="258">10:00</text></g>`;
  let content = "";
  if (type === "market-price") content = `<text x="270" y="28" text-anchor="middle">Each completed trade can update the market price</text><rect x="40" y="62" width="130" height="92" rx="10" fill="#202220" stroke="#454945"/><text x="105" y="88" text-anchor="middle">Buyer offers</text><text x="105" y="126" text-anchor="middle" class="diagram-value">100.20</text><rect x="370" y="62" width="130" height="92" rx="10" fill="#202220" stroke="#454945"/><text x="435" y="88" text-anchor="middle">Seller accepts</text><text x="435" y="126" text-anchor="middle" class="diagram-value">100.20</text><path d="M178 108H240M300 108H362" stroke="#b9ff57" stroke-width="2"/><circle cx="270" cy="108" r="38" fill="rgba(185,255,87,.12)" stroke="#b9ff57"/><text x="270" y="104" text-anchor="middle">Trade</text><text x="270" y="122" text-anchor="middle">100.20</text><path d="M270 148V188" stroke="#858b85"/><text x="270" y="214" text-anchor="middle">The chart records the new price</text>`;
  if (type === "chart-axes") content = `<path d="M62 28V226H510" fill="none" stroke="#858b85" stroke-width="2"/><path class="price-path" d="M74 194L125 172L176 181L227 136L278 148L329 104L380 116L431 72L492 84" fill="none"/><text x="24" y="40">Higher</text><text x="24" y="218">Lower</text><text x="64" y="252">Earlier</text><text x="464" y="252">Later</text><path d="M82 236H482" stroke="#626862"/><path d="M474 230L484 236L474 242" fill="none" stroke="#626862"/><text x="270" y="252" text-anchor="middle">TIME</text><text x="18" y="132" transform="rotate(-90 18 132)" text-anchor="middle">PRICE</text>`;
  if (type === "line-v-candles") content = `<text x="135" y="28" text-anchor="middle">Line chart</text><path class="price-path" d="M30 190L72 164L114 176L156 128L198 142L240 88" fill="none"/><circle cx="30" cy="190" r="3" fill="#b9ff57"/><circle cx="72" cy="164" r="3" fill="#b9ff57"/><circle cx="114" cy="176" r="3" fill="#b9ff57"/><circle cx="156" cy="128" r="3" fill="#b9ff57"/><circle cx="198" cy="142" r="3" fill="#b9ff57"/><circle cx="240" cy="88" r="3" fill="#b9ff57"/><path d="M270 34V226" stroke="#626862" stroke-dasharray="5 6"/><text x="405" y="28" text-anchor="middle">Candlestick chart</text>${candle(310,190,164,150,204,"#b9ff57","",24)}${candle(350,164,176,148,190,"#ff7a7a","",24)}${candle(390,176,128,116,188,"#b9ff57","",24)}${candle(430,128,142,118,154,"#ff7a7a","",24)}${candle(470,142,88,76,152,"#b9ff57","",24)}<text x="135" y="236" text-anchor="middle">Shows direction simply</text><text x="405" y="236" text-anchor="middle">Shows OHLC for each period</text>`;
  if (type === "trend-overview") content = `${sequence(46,20)}<path d="M40 198L120 164L198 174L275 126L352 136L472 62" fill="none" stroke="#b9ff57" stroke-width="2" stroke-dasharray="5 5"/><text x="270" y="242" text-anchor="middle">Step back to see the overall path</text>`;
  if (type === "uptrend") content = `<path d="M40 204L120 132L190 176L280 88L350 132L470 48" fill="none" stroke="#b9ff57" stroke-width="3"/><circle cx="120" cy="132" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><circle cx="190" cy="176" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><circle cx="280" cy="88" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><circle cx="350" cy="132" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><text x="120" y="116" text-anchor="middle">High</text><text x="190" y="198" text-anchor="middle">Higher low</text><text x="280" y="72" text-anchor="middle">Higher high</text><text x="350" y="154" text-anchor="middle">Higher low</text>`;
  if (type === "downtrend") content = `<path d="M40 54L120 126L190 82L280 170L350 128L470 218" fill="none" stroke="#ff7a7a" stroke-width="3"/><circle cx="120" cy="126" r="6" fill="#151715" stroke="#ff7a7a" stroke-width="2"/><circle cx="190" cy="82" r="6" fill="#151715" stroke="#ff7a7a" stroke-width="2"/><circle cx="280" cy="170" r="6" fill="#151715" stroke="#ff7a7a" stroke-width="2"/><circle cx="350" cy="128" r="6" fill="#151715" stroke="#ff7a7a" stroke-width="2"/><text x="120" y="148" text-anchor="middle">Low</text><text x="190" y="66" text-anchor="middle">Lower high</text><text x="280" y="192" text-anchor="middle">Lower low</text><text x="350" y="112" text-anchor="middle">Lower high</text>`;
  if (type === "candlestick-intro") content = `
    <text x="122" y="30" text-anchor="middle">Price moves during the period</text>
    <path class="price-path" d="M34 166 C60 148 76 102 104 116 S142 196 172 202 S214 132 240 145 S270 72 302 84" fill="none"/>
    <circle cx="34" cy="166" r="5" fill="#151715" stroke="#b9ff57" stroke-width="2"/>
    <circle cx="172" cy="202" r="5" fill="#151715" stroke="#b9ff57" stroke-width="2"/>
    <circle cx="270" cy="72" r="5" fill="#151715" stroke="#b9ff57" stroke-width="2"/>
    <circle cx="302" cy="84" r="5" fill="#151715" stroke="#b9ff57" stroke-width="2"/>
    <text x="24" y="184">Open</text><text x="151" y="222">Low</text><text x="254" y="58">High</text><text x="308" y="87">Close</text>
    <path d="M330 138H365" stroke="#b9ff57" stroke-width="2"/><path d="M356 130L367 138L356 146" fill="none" stroke="#b9ff57" stroke-width="2"/>
    <text x="440" y="30" text-anchor="middle">Becomes one candlestick</text>
    ${candle(430, 166, 84, 72, 202, "#b9ff57", "", 48)}
    <path d="M456 72H486M456 84H486M456 166H486M456 202H486" stroke="#858b85"/>
    <text x="530" y="76" text-anchor="end">High</text><text x="530" y="90" text-anchor="end">Close</text><text x="530" y="170" text-anchor="end">Open</text><text x="530" y="206" text-anchor="end">Low</text>`;
  if (type === "candle-body") content = `
    <text x="140" y="28" text-anchor="middle">Green candle</text>
    ${candle(140, 184, 76, 52, 210, "#b9ff57", "", 58)}
    <path d="M82 76H105M82 184H105" stroke="#858b85"/>
    <text x="28" y="80">Close</text><text x="28" y="188">Open</text>
    <path d="M106 130H174" stroke="#ffffff" stroke-width="2"/>
    <text x="140" y="126" text-anchor="middle">Body</text>
    <text x="140" y="238" text-anchor="middle">Finished higher</text>
    <path d="M270 35V230" stroke="#626862" stroke-dasharray="5 6"/>
    <text x="400" y="28" text-anchor="middle">Red candle</text>
    ${candle(400, 76, 184, 52, 210, "#ff7a7a", "", 58)}
    <path d="M435 76H458M435 184H458" stroke="#858b85"/>
    <text x="464" y="80">Open</text><text x="464" y="188">Close</text>
    <path d="M366 130H434" stroke="#ffffff" stroke-width="2"/>
    <text x="400" y="126" text-anchor="middle">Body</text>
    <text x="400" y="238" text-anchor="middle">Finished lower</text>`;
  if (type === "candle-anatomy") content = `
    ${candle(270, 176, 88, 42, 224, "#b9ff57", "", 70)}
    <path d="M306 42H376M306 88H376M306 176H376M306 224H376" stroke="#858b85"/>
    <text x="528" y="47" text-anchor="end">HIGH · highest price</text>
    <text x="528" y="93" text-anchor="end">CLOSE · finishing price</text>
    <text x="528" y="181" text-anchor="end">OPEN · starting price</text>
    <text x="528" y="229" text-anchor="end">LOW · lowest price</text>
    <path d="M132 42H250M132 88H232M132 176H232M132 224H250" stroke="#626862" stroke-dasharray="4 4"/>
    <text x="22" y="47">Upper wick</text><text x="22" y="136">Candle body</text><text x="22" y="229">Lower wick</text>
    <path d="M112 132H230" stroke="#ffffff" stroke-width="2"/>`;
  if (type === "price-to-candle") content = `<path class="price-path" d="M38 158 C76 138 86 98 124 112 S170 190 212 202 S270 132 304 145 S355 72 410 84" fill="none"/><g class="price-points"><circle cx="38" cy="158" r="5"/><circle cx="212" cy="202" r="5"/><circle cx="355" cy="72" r="5"/><circle cx="410" cy="84" r="5"/></g><text x="25" y="145">Open</text><text x="184" y="224">Low</text><text x="338" y="58">High</text><text x="416" y="82">Close</text><path d="M430 55V215" stroke="#626862" stroke-dasharray="4 5"/>${candle(460, 158, 84, 72, 202, "#b9ff57", "Result", 30)}`;
  if (type === "ohlc-story") content = `${sequence(42, 20)}<rect x="368" y="32" width="72" height="196" rx="8" fill="none" stroke="#b9ff57" stroke-width="2"/><text x="334" y="28">Focus candle</text><path d="M442 48H468M442 84H468M442 158H468M442 208H468" stroke="#7d847d"/><text x="472" y="53">High</text><text x="472" y="89">Close</text><text x="472" y="163">Open</text><text x="472" y="213">Low</text>`;
  if (type === "timeframe") content = `${candle(48, 164, 146, 134, 180, "#b9ff57", "5m", 20)}${candle(92, 148, 118, 105, 159, "#b9ff57", "5m", 20)}${candle(136, 120, 136, 110, 151, "#ff7a7a", "5m", 20)}${candle(180, 138, 96, 82, 146, "#b9ff57", "5m", 20)}${candle(224, 98, 108, 88, 124, "#ff7a7a", "5m", 20)}${candle(268, 110, 72, 60, 119, "#b9ff57", "5m", 20)}<path d="M305 42V218" stroke="#626862" stroke-dasharray="5 6"/><path d="M322 136H354" stroke="#b9ff57" stroke-width="2"/><path d="M345 128L356 136L345 144" fill="none" stroke="#b9ff57" stroke-width="2"/>${candle(410, 164, 72, 60, 180, "#b9ff57", "30m", 48)}<text x="156" y="32">Six smaller candles</text><text x="410" y="32" text-anchor="middle">One combined candle</text>`;
  if (type === "proportions") content = `${candle(70, 188, 72, 60, 205, "#b9ff57", "Control", 34)}${candle(190, 142, 126, 55, 215, "#b9ff57", "Indecision", 34)}${candle(310, 188, 118, 48, 205, "#b9ff57", "Giveback", 34)}${candle(430, 88, 174, 60, 205, "#ff7a7a", "Seller control", 34)}<path d="M48 222H92M168 222H212M288 222H332M408 222H452" stroke="#626862"/>`;
  if (type === "anatomy") content = `${candle(210, 155, 75, 35, 215, "#b9ff57")}<text x="275" y="82">Close</text><line x1="235" y1="76" x2="265" y2="76"/><text x="275" y="162">Open</text><line x1="235" y1="156" x2="265" y2="156"/><text x="275" y="40">High</text><text x="275" y="220">Low</text><text x="95" y="118">Body</text><line x1="135" y1="115" x2="180" y2="115"/><text x="100" y="55">Upper wick</text><text x="100" y="205">Lower wick</text>`;
  if (type === "direction") content = `${candle(145, 175, 70, 40, 210, "#b9ff57", "Bullish")}${candle(355, 70, 175, 40, 210, "#ff7a7a", "Bearish")}`;
  if (type === "rejection") content = `${candle(250, 125, 85, 55, 225, "#b9ff57")}<path d="M330 205 L285 205" stroke="#b9ff57" stroke-width="3"/><text x="340" y="210">Buyers reject lower prices</text>`;
  if (type === "momentum") content = `${candle(80, 145, 125, 105, 165, "#b9ff57")}${candle(150, 130, 150, 110, 170, "#ff7a7a")}${candle(220, 145, 120, 100, 165, "#b9ff57")}${candle(310, 160, 65, 45, 180, "#b9ff57")}${candle(390, 70, 48, 35, 90, "#b9ff57")}<text x="145" y="230">Compression</text><text x="335" y="230">Expansion</text>`;
  if (type === "closes") content = `${candle(150, 180, 60, 45, 205, "#b9ff57", "Strong close")}${candle(365, 180, 115, 45, 205, "#b9ff57", "Weak close")}<path d="M390 50L390 105" stroke="#ff7a7a" stroke-width="3"/><text x="420" y="78">Giveback</text>`;
  if (type === "doji") content = `${candle(110, 170, 100, 75, 195, "#b9ff57")}${candle(200, 105, 102, 65, 145, "#eeeeee", "Doji")}${candle(290, 105, 160, 80, 185, "#ff7a7a")}<text x="200" y="225">Open ≈ close</text>`;
  if (type === "patterns") content = `${candle(95, 105, 145, 80, 165, "#ff7a7a")}${candle(165, 155, 65, 45, 175, "#b9ff57")}<text x="130" y="225">Engulfing</text>${candle(340, 70, 165, 45, 190, "#ff7a7a")}${candle(410, 110, 135, 90, 155, "#b9ff57")}<text x="375" y="225">Inside bar</text>`;
  if (type === "context" || type === "question-context") content = `<rect x="25" y="175" width="470" height="30" fill="rgba(185,255,87,.08)"/><line x1="25" y1="175" x2="495" y2="175" stroke="#b9ff57" stroke-dasharray="7 7"/><text x="35" y="195">Tested support</text>${candle(90, 90, 130, 70, 155, "#ff7a7a")}${candle(165, 125, 155, 105, 175, "#ff7a7a")}${candle(250, 150, 112, 90, 215, "#b9ff57")}${candle(335, 115, 75, 55, 135, "#b9ff57")}${candle(420, 80, 55, 40, 100, "#b9ff57")}`;
  if (type === "question-control") content = `${candle(110, 180, 110, 45, 205, "#b9ff57", "A")}${candle(250, 185, 55, 45, 205, "#b9ff57", "B")}${candle(390, 130, 115, 75, 170, "#b9ff57", "C")}`;
  if (type === "question-inside") content = `${candle(115, 70, 185, 45, 210, "#ff7a7a")}${candle(210, 135, 110, 95, 165, "#b9ff57")}${candle(290, 120, 140, 105, 155, "#ff7a7a")}${candle(365, 132, 122, 112, 148, "#b9ff57")}<path d="M170 45V210M170 45H405M170 210H405" stroke="#eeeeee" stroke-dasharray="5 6" fill="none"/><text x="270" y="235">Ranges contract inside the first candle</text>`;
  if (type === "question-range") content = `<rect x="25" y="65" width="470" height="125" fill="rgba(255,255,255,.025)" stroke="#777" stroke-dasharray="6 7"/><text x="35" y="55">Choppy range</text>${candle(80, 105, 140, 80, 165, "#ff7a7a")}${candle(145, 145, 95, 75, 170, "#b9ff57")}${candle(210, 100, 135, 80, 155, "#ff7a7a")}${candle(285, 140, 85, 70, 160, "#b9ff57")}${candle(360, 90, 130, 75, 150, "#ff7a7a")}${candle(430, 130, 100, 80, 155, "#b9ff57")}`;
  if (type === "fvg-imbalance") content = `${candle(70, 194, 178, 164, 210, "#b9ff57")}${candle(130, 180, 164, 150, 194, "#b9ff57")}${candle(210, 166, 72, 58, 180, "#b9ff57", "Displacement", 34)}${candle(290, 78, 66, 54, 92, "#b9ff57")}${candle(350, 68, 82, 58, 96, "#ff7a7a")}<path d="M165 144H255" stroke="#b9ff57" stroke-width="2"/><path d="M245 136L257 144L245 152" fill="none" stroke="#b9ff57" stroke-width="2"/><text x="210" y="130" text-anchor="middle">Price moves rapidly</text><rect x="390" y="70" width="112" height="120" rx="10" fill="rgba(185,255,87,.08)" stroke="#b9ff57" stroke-dasharray="5 5"/><text x="446" y="112" text-anchor="middle">Little</text><text x="446" y="132" text-anchor="middle">two-way</text><text x="446" y="152" text-anchor="middle">trading</text>`;
  if (type === "fvg-three-candle") content = `<rect x="82" y="112" width="376" height="34" rx="5" fill="rgba(185,255,87,.13)" stroke="#b9ff57" stroke-dasharray="5 5"/><text x="270" y="134" text-anchor="middle">FAIR VALUE GAP</text>${candle(130, 182, 158, 146, 204, "#b9ff57", "Candle 1", 32)}${candle(270, 160, 76, 62, 176, "#b9ff57", "Candle 2", 40)}${candle(410, 92, 76, 72, 112, "#b9ff57", "Candle 3", 32)}<path d="M94 146H166M374 112H446" stroke="#ffffff" stroke-width="2"/><text x="130" y="224" text-anchor="middle">High</text><text x="410" y="224" text-anchor="middle">Low</text>`;
  if (type === "fvg-bullish") content = `<rect x="72" y="118" width="400" height="32" rx="5" fill="rgba(185,255,87,.14)" stroke="#b9ff57"/><text x="270" y="139" text-anchor="middle">Bullish FVG · candle 1 high to candle 3 low</text>${candle(120, 188, 166, 150, 208, "#b9ff57", "1", 30)}${candle(270, 168, 78, 62, 182, "#b9ff57", "2", 42)}${candle(420, 94, 80, 70, 118, "#b9ff57", "3", 30)}<path d="M90 150H150M390 118H450" stroke="#ffffff" stroke-width="2"/>`;
  if (type === "fvg-bearish") content = `<rect x="72" y="116" width="400" height="34" rx="5" fill="rgba(255,122,122,.13)" stroke="#ff7a7a"/><text x="270" y="138" text-anchor="middle">Bearish FVG · candle 3 high to candle 1 low</text>${candle(120, 76, 92, 62, 116, "#ff7a7a", "1", 30)}${candle(270, 90, 184, 74, 202, "#ff7a7a", "2", 42)}${candle(420, 170, 188, 150, 208, "#ff7a7a", "3", 30)}<path d="M90 116H150M390 150H450" stroke="#ffffff" stroke-width="2"/>`;
  if (type === "fvg-valid-invalid") content = `<text x="135" y="30" text-anchor="middle">Valid · no overlap</text><rect x="38" y="112" width="196" height="30" rx="4" fill="rgba(185,255,87,.13)" stroke="#b9ff57"/>${candle(70, 180, 158, 142, 198, "#b9ff57", "1", 22)}${candle(136, 158, 82, 68, 174, "#b9ff57", "2", 28)}${candle(202, 94, 82, 72, 112, "#b9ff57", "3", 22)}<path d="M270 30V232" stroke="#626862" stroke-dasharray="5 6"/><text x="405" y="30" text-anchor="middle">Invalid · wicks overlap</text>${candle(336, 180, 154, 132, 198, "#b9ff57", "1", 22)}${candle(404, 156, 84, 68, 174, "#b9ff57", "2", 28)}${candle(472, 104, 92, 102, 126, "#b9ff57", "3", 22)}<rect x="320" y="102" width="168" height="30" rx="4" fill="rgba(255,122,122,.1)" stroke="#ff7a7a" stroke-dasharray="5 5"/><text x="404" y="122" text-anchor="middle">Overlap</text>`;
  if (type === "fvg-mitigation") content = `<rect x="172" y="124" width="310" height="34" rx="5" fill="rgba(185,255,87,.13)" stroke="#b9ff57"/><text x="410" y="145" text-anchor="middle">FVG zone</text>${candle(70, 192, 168, 152, 208, "#b9ff57")}${candle(130, 170, 82, 66, 184, "#b9ff57")}${candle(190, 96, 82, 72, 124, "#b9ff57")}${candle(250, 84, 104, 74, 116, "#ff7a7a")}${candle(310, 106, 132, 96, 146, "#ff7a7a")}${candle(370, 134, 116, 108, 154, "#b9ff57")}${candle(430, 118, 88, 78, 132, "#b9ff57")}<path d="M250 66C330 76 338 112 338 130" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="5 5"/><path d="M330 120L338 132L346 120" fill="none" stroke="#ffffff" stroke-width="2"/><text x="300" y="54" text-anchor="middle">Price returns into the gap</text>`;
  if (type === "fvg-context") content = `<path d="M36 210L110 174L176 188L248 126L318 146L390 82L486 52" fill="none" stroke="#b9ff57" stroke-width="3"/><rect x="240" y="132" width="154" height="28" rx="4" fill="rgba(185,255,87,.14)" stroke="#b9ff57"/><text x="317" y="151" text-anchor="middle">Bullish FVG</text><circle cx="176" cy="188" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><circle cx="318" cy="146" r="6" fill="#151715" stroke="#b9ff57" stroke-width="2"/><text x="176" y="212" text-anchor="middle">Higher low</text><text x="420" y="224" text-anchor="middle">Supports wider upward structure</text>`;
  if (type === "fvg-plan") content = `<rect x="120" y="116" width="300" height="36" rx="5" fill="rgba(185,255,87,.14)" stroke="#b9ff57"/><text x="270" y="139" text-anchor="middle">FVG · area to watch</text><path d="M72 202L142 174L210 190L280 92L344 74L438 48" fill="none" stroke="#b9ff57" stroke-width="3"/><path d="M280 92C260 110 246 126 238 142" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="5 5"/><circle cx="238" cy="142" r="6" fill="#151715" stroke="#ffffff" stroke-width="2"/><line x1="120" y1="176" x2="420" y2="176" stroke="#ff7a7a" stroke-dasharray="6 6"/><text x="426" y="180">Invalidation</text><text x="270" y="224" text-anchor="middle">Wait for confirmation · define risk · accept that the setup can fail</text>`;
  if (type === "ifvg-transition") content = `<rect x="80" y="112" width="380" height="34" rx="5" fill="rgba(185,255,87,.12)" stroke="#b9ff57"/><text x="270" y="134" text-anchor="middle">Original bullish FVG</text><path d="M42 198L112 174L178 82L242 72L306 98L366 162L430 190L496 154" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M330 92L390 182" stroke="#ff7a7a" stroke-width="3"/><text x="390" y="210" text-anchor="middle">Price trades through · original idea fails</text>`;
  if (type === "ifvg-role-reversal") content = `<rect x="86" y="112" width="368" height="34" rx="5" fill="rgba(255,122,122,.12)" stroke="#ff7a7a"/><text x="270" y="134" text-anchor="middle">Same zone · watched from the opposite side</text><path d="M42 194L112 164L178 78L246 70L314 170L382 194L446 140L496 166" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M446 140L446 112" stroke="#ff7a7a" stroke-width="2" stroke-dasharray="5 5"/><text x="442" y="96" text-anchor="middle">Return from below</text>`;
  if (type === "ifvg-bearish") content = `<rect x="92" y="108" width="356" height="36" rx="5" fill="rgba(255,122,122,.13)" stroke="#ff7a7a"/><text x="270" y="131" text-anchor="middle">Failed bullish FVG → possible bearish IFVG</text><path d="M40 196L108 164L172 72L236 84L300 174L362 202L424 140L494 176" fill="none" stroke="#ff7a7a" stroke-width="3"/><circle cx="424" cy="140" r="6" fill="#151715" stroke="#ffffff" stroke-width="2"/><text x="424" y="222" text-anchor="middle">Return from below · watch for bearish confirmation</text>`;
  if (type === "ifvg-bullish") content = `<rect x="92" y="116" width="356" height="36" rx="5" fill="rgba(185,255,87,.13)" stroke="#b9ff57"/><text x="270" y="139" text-anchor="middle">Failed bearish FVG → possible bullish IFVG</text><path d="M40 62L108 94L172 196L236 180L300 84L362 58L424 126L494 92" fill="none" stroke="#b9ff57" stroke-width="3"/><circle cx="424" cy="126" r="6" fill="#151715" stroke="#ffffff" stroke-width="2"/><text x="424" y="222" text-anchor="middle">Return from above · watch for bullish confirmation</text>`;
  if (type === "ifvg-compare") content = `<text x="135" y="28" text-anchor="middle">Mitigation</text><rect x="34" y="118" width="202" height="30" rx="4" fill="rgba(185,255,87,.12)" stroke="#b9ff57"/><path d="M34 202L90 164L144 76L198 94L224 132L238 96" fill="none" stroke="#b9ff57" stroke-width="3"/><text x="135" y="230" text-anchor="middle">Returns without trading through</text><path d="M270 30V232" stroke="#626862" stroke-dasharray="5 6"/><text x="405" y="28" text-anchor="middle">Inversion</text><rect x="304" y="118" width="202" height="30" rx="4" fill="rgba(255,122,122,.12)" stroke="#ff7a7a"/><path d="M304 202L350 164L400 76L446 174L482 198L506 138" fill="none" stroke="#ff7a7a" stroke-width="3"/><text x="405" y="230" text-anchor="middle">Trades through, then returns opposite-side</text>`;
  if (type === "ifvg-context") content = `<rect x="126" y="112" width="300" height="32" rx="4" fill="rgba(255,122,122,.12)" stroke="#ff7a7a"/><path d="M38 54L102 82L166 62L230 126L294 104L358 180L422 146L500 210" fill="none" stroke="#ff7a7a" stroke-width="3"/><text x="190" y="44">Lower high</text><text x="374" y="210">Lower low</text><circle cx="422" cy="146" r="6" fill="#151715" stroke="#ffffff" stroke-width="2"/><text x="270" y="134" text-anchor="middle">Bearish IFVG agrees with downward structure</text>`;
  if (type === "ifvg-confirmation") content = `<rect x="100" y="110" width="340" height="34" rx="4" fill="rgba(255,122,122,.12)" stroke="#ff7a7a"/><text x="270" y="132" text-anchor="middle">IFVG area to watch</text><path d="M44 194L110 164L176 76L242 180L306 202L372 136L438 170L500 210" fill="none" stroke="#ffffff" stroke-width="3"/><circle cx="372" cy="136" r="6" fill="#151715" stroke="#ff7a7a" stroke-width="2"/><line x1="100" y1="78" x2="440" y2="78" stroke="#ff7a7a" stroke-dasharray="6 6"/><text x="446" y="82">Invalidation</text><text x="270" y="230" text-anchor="middle">Observe reaction · require confirmation · define invalidation</text>`;
  const noGrid = ["market-price", "candlestick-intro", "candle-body", "candle-anatomy", "line-v-candles"].includes(type);
  return `<svg class="training-chart" viewBox="0 0 540 280" role="img" aria-label="Candlestick lesson diagram">${noGrid ? "" : `<g class="chart-grid"><path d="M20 50H520M20 100H520M20 150H520M20 200H520M50 24V238M150 24V238M250 24V238M350 24V238M450 24V238"/></g>`}${content}${["ohlc-story"].includes(type) ? axes : ""}</svg>`;
}

function getActiveTrainingSteps() {
  return TRAINING_STEP_MAP[activeTrainingChapterId] || [];
}

function getTrainingProgress(chapterId = activeTrainingChapterId) {
  return appConfig.trainingProgress[chapterId] || { answers: {}, completed: false, step: 0 };
}

function openTrainingWorkspace(chapterId = activeTrainingChapterId) {
  activeTrainingChapterId = chapterId;
  activeTrainingPathId = TRAINING_PATHS.find((path) => path.chapterIds.includes(chapterId))?.id || activeTrainingPathId;
  const steps = getActiveTrainingSteps();
  trainingStepIndex = Math.min(steps.length - 1, Math.max(0, Number(getTrainingProgress().step) || 0));
  trainingWorkspaceOpen = true;
  trainingHome.classList.add("hidden");
  trainingLessonWorkspace.classList.remove("hidden");
  renderTraining();
}

function showTrainingHome() {
  trainingWorkspaceOpen = false;
  trainingHome.classList.remove("hidden");
  trainingLessonWorkspace.classList.add("hidden");
  renderTraining();
}

function getActiveTrainingPath() {
  return TRAINING_PATHS.find((path) => path.id === activeTrainingPathId) || TRAINING_PATHS[0];
}

function getTrainingPathChapters(path = getActiveTrainingPath()) {
  return path.chapterIds.map((id) => TRAINING_CHAPTERS.find((chapter) => chapter.id === id)).filter(Boolean);
}

function renderTraining() {
  if (!trainingContent) return;
  const progress = getTrainingProgress();
  const activePath = getActiveTrainingPath();
  const pathChapters = getTrainingPathChapters(activePath);
  const completedChapters = pathChapters.filter((chapter) => getTrainingProgress(chapter.id).completed).length;
  const coursePercent = Math.round((completedChapters / pathChapters.length) * 100);
  const nextChapter = pathChapters.find((chapter) => !getTrainingProgress(chapter.id).completed) || pathChapters[0];
  const totalLessons = pathChapters.reduce((total, chapter) => total + chapter.lessons, 0);
  trainingPathTitle.textContent = activePath.title;
  trainingPathDescription.textContent = activePath.description;
  trainingPathMeta.innerHTML = `<span>${pathChapters.length} ${pathChapters.length === 1 ? "module" : "guided modules"}</span><span>${totalLessons} short lessons</span><span>Learn independently</span>`;
  trainingPathNav.innerHTML = TRAINING_PATHS.map((path) => {
    const chapters = getTrainingPathChapters(path);
    const complete = chapters.filter((chapter) => getTrainingProgress(chapter.id).completed).length;
    const percent = Math.round((complete / chapters.length) * 100);
    return `<button type="button" class="${path.id === activeTrainingPathId ? "active" : ""}" data-training-path="${path.id}"><span>${escapeHtml(path.title)}</span><small>${percent}% complete · ${chapters.length} ${chapters.length === 1 ? "module" : "modules"}</small></button>`;
  }).join("");
  trainingCourseProgress.textContent = `${coursePercent}%`;
  trainingCourseProgressBar.style.width = `${coursePercent}%`;
  continueTrainingButton.dataset.trainingChapter = nextChapter.id;
  const nextProgress = getTrainingProgress(nextChapter.id);
  continueTrainingButton.textContent = nextProgress.completed ? "Review path" : nextProgress.step ? "Continue learning" : "Start learning";
  trainingChapterGrid.innerHTML = pathChapters.map((chapter) => {
    const chapterIndex = pathChapters.findIndex((item) => item.id === chapter.id);
    const available = Boolean(TRAINING_STEP_MAP[chapter.id]) && (chapterIndex === 0 || getTrainingProgress(pathChapters[chapterIndex - 1].id).completed);
    const chapterProgress = getTrainingProgress(chapter.id);
    const chapterSteps = TRAINING_STEP_MAP[chapter.id] || [];
    const chapterPercent = chapterProgress.completed ? 100 : Math.round(((chapterProgress.step || 0) / Math.max(1, chapterSteps.length)) * 100);
    return `<article class="training-chapter-card ${available ? "" : "locked"}">
      <div class="training-chapter-visual">${trainingCandleSvg(chapter.id === "inverse-fvg" ? "ifvg-transition" : chapter.id === "fvg-foundations" ? "fvg-three-candle" : chapter.id === TRAINING_MODULE_ID ? "patterns" : chapter.id === "single-candle-patterns" ? "doji" : chapter.id === "multi-candle-patterns" ? "patterns" : "context")}</div>
      <div class="training-chapter-content">
        <div class="training-chapter-heading"><span>Module ${String(chapterIndex + 1).padStart(2, "0")}</span><small>${available ? `${chapterPercent}% complete` : "Coming next"}</small></div>
        <h3>${escapeHtml(chapter.title)}</h3><p>${escapeHtml(chapter.description)}</p>
        <div class="training-topic-list">${chapter.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</div>
        <div class="training-chapter-footer"><span>${chapter.lessons} lessons · ${chapter.duration}</span><button type="button" data-training-chapter="${chapter.id}" ${available ? "" : "disabled"}>${available ? (chapterProgress.completed ? "Review" : chapterProgress.step ? "Continue" : "Start chapter") : "Locked"}</button></div>
      </div>
    </article>`;
  }).join("");
  if (!trainingWorkspaceOpen) return;
  const steps = getActiveTrainingSteps();
  const step = steps[trainingStepIndex];
  const activeChapter = TRAINING_CHAPTERS.find((chapter) => chapter.id === activeTrainingChapterId);
  const railEyebrow = trainingLessonWorkspace.querySelector(".training-rail .eyebrow");
  const railTitle = trainingLessonWorkspace.querySelector(".training-rail h2");
  const railDescription = trainingLessonWorkspace.querySelector(".training-rail h2 + p");
  if (activeChapter && railEyebrow && railTitle && railDescription) {
    const path = TRAINING_PATHS.find((item) => item.chapterIds.includes(activeChapter.id)) || TRAINING_PATHS[0];
    railEyebrow.textContent = `${path.title} · Module ${String(path.chapterIds.indexOf(activeChapter.id) + 1).padStart(2, "0")}`;
    railTitle.textContent = activeChapter.title;
    railDescription.textContent = activeChapter.description;
  }
  const score = Object.entries(progress.answers || {}).filter(([index, answer]) => Number(answer) === steps[Number(index)]?.answer).length;
  trainingProgressBar.style.width = `${((trainingStepIndex + 1) / steps.length) * 100}%`;
  const questionCount = steps.filter((item) => item.type === "question").length;
  trainingScore.textContent = `${score} / ${questionCount}`;
  trainingStepLabel.textContent = `${step.type === "question" ? "Knowledge Check" : "Lesson"} ${trainingStepIndex + 1} of ${steps.length}`;
  trainingTitle.textContent = step.title;
  trainingStepList.innerHTML = steps.map((item, index) => `<li class="${index === trainingStepIndex ? "active" : ""} ${index < trainingStepIndex || progress.completed ? "complete" : ""}"><button type="button" data-training-step="${index}"><span>${index + 1}</span>${escapeHtml(item.title)}</button></li>`).join("");
  trainingContent.innerHTML = `${trainingCandleSvg(step.visual)}<div class="training-copy"><p>${escapeHtml(step.body || step.prompt)}</p>${
    step.type === "question"
      ? `<div class="training-options">${step.options.map((option, index) => `<button type="button" data-training-answer="${index}" class="${Number(progress.answers?.[trainingStepIndex]) === index ? "selected" : ""}">${escapeHtml(option)}</button>`).join("")}</div>`
      : `<div class="training-key-points">${step.points.map((point) => `<span>${escapeHtml(point)}</span>`).join("")}</div>
        ${
          activeTrainingChapterId === TRAINING_MODULE_ID && FUNDAMENTAL_LESSON_GUIDES[step.visual]
            ? `<div class="training-deep-dive">${FUNDAMENTAL_LESSON_GUIDES[step.visual].map(([title, text], index) => `<details ${index === 0 ? "open" : ""}><summary>${escapeHtml(title)}</summary><p>${escapeHtml(text)}</p></details>`).join("")}</div>`
            : ""
        }`
  }</div>`;
  const selectedAnswer = progress.answers?.[trainingStepIndex];
  trainingFeedback.classList.toggle("hidden", selectedAnswer === undefined);
  if (selectedAnswer !== undefined) {
    const correct = Number(selectedAnswer) === step.answer;
    trainingFeedback.className = `training-feedback ${correct ? "correct" : "incorrect"}`;
    trainingFeedback.innerHTML = `<strong>${correct ? "Correct" : "Not quite"}</strong><span>${escapeHtml(step.explanation)}</span>`;
  }
  trainingBackButton.disabled = trainingStepIndex === 0;
  trainingNextButton.disabled = step.type === "question" && selectedAnswer === undefined;
  trainingNextButton.textContent = trainingStepIndex === steps.length - 1 ? "Complete chapter" : "Continue";
}

function getWeeklyReviewContext() {
  const weekdays = getWeekdays(new Date(), reviewWeekOffset);
  const startKey = weekdays[0].key;
  const end = new Date(weekdays[0].date);
  end.setDate(end.getDate() + 6);
  const endKey = toDateKey(end);
  const weekTrades = trades.filter((trade) => trade.tradeDate >= startKey && trade.tradeDate <= endKey);
  return { weekdays, startKey, end, endKey, weekTrades };
}

function getTopReviewValue(weekTrades, key) {
  const totals = new Map();
  weekTrades.forEach((trade) => {
    const value = trade[key] || "-";
    const current = totals.get(value) || { amount: 0, trades: 0 };
    current.amount += getTradeAmount(trade);
    current.trades += 1;
    totals.set(value, current);
  });
  return [...totals.entries()].sort((a, b) => b[1].amount - a[1].amount)[0];
}

function getWeeklyGoalStatus(plan, weekTrades, amount) {
  const checks = [];
  const losses = Math.abs(Math.min(0, amount));
  if (plan.profitTarget) {
    const target = Number(plan.profitTarget);
    if (Number.isFinite(target) && target > 0) {
      checks.push({
        label: "profit target",
        met: amount >= target,
        detail: `${formatSummaryAmount(amount)} / ${formatSummaryAmount(target)}`,
      });
    }
  }

  if (plan.maxWeeklyLoss) {
    const maxLoss = Number(plan.maxWeeklyLoss);
    if (Number.isFinite(maxLoss) && maxLoss > 0) {
      checks.push({
        label: "loss limit",
        met: losses <= maxLoss,
        detail: `${formatSummaryAmount(losses)} used from ${formatSummaryAmount(maxLoss)}`,
      });
    }
  }

  if (plan.maxTrades) {
    const maxTrades = Number(plan.maxTrades);
    if (Number.isFinite(maxTrades) && maxTrades > 0) {
      checks.push({
        label: "trade limit",
        met: weekTrades.length <= maxTrades,
        detail: `${weekTrades.length} / ${maxTrades} trades`,
      });
    }
  }

  if (!checks.length) {
    return { title: "No weekly goals set", detail: "Open Weekly Plan to set measurable goals.", tone: "flat" };
  }

  const metCount = checks.filter((check) => check.met).length;
  const missed = checks.filter((check) => !check.met).map((check) => check.label);
  if (metCount === checks.length) {
    return { title: "Weekly goals were met", detail: checks.map((check) => check.detail).join(" · "), tone: "profit" };
  }

  return {
    title: `${metCount}/${checks.length} weekly goals met`,
    detail: missed.length ? `Review ${missed.join(", ")}. ${checks.map((check) => check.detail).join(" · ")}` : checks.map((check) => check.detail).join(" · "),
    tone: metCount ? "flat" : "loss",
  };
}

function renderWeeklyReview() {
  if (!reviewSummaryGrid) return;
  const { weekdays, startKey, end, weekTrades } = getWeeklyReviewContext();
  const plan = appConfig.weeklyPlans[startKey] || {};
  const wins = weekTrades.filter((trade) => trade.outcome === "Win").length;
  const losses = weekTrades.filter((trade) => trade.outcome === "Loss").length;
  const amount = weekTrades.reduce((total, trade) => total + getTradeAmount(trade), 0);
  const points = weekTrades.reduce((total, trade) => total + (getTradePoints(trade) || 0), 0);
  const breaches = weekTrades.reduce((total, trade) => total + (trade.ruleBreaches?.length || 0), 0);
  const closedWeekTrades = weekTrades.filter((trade) => trade.outcome === "Win" || trade.outcome === "Loss");
  const bestTrade = closedWeekTrades.length ? closedWeekTrades.reduce((best, trade) => (getTradeAmount(trade) > getTradeAmount(best) ? trade : best), closedWeekTrades[0]) : null;
  const worstTrade = closedWeekTrades.length ? closedWeekTrades.reduce((worst, trade) => (getTradeAmount(trade) < getTradeAmount(worst) ? trade : worst), closedWeekTrades[0]) : null;
  const bestStrategy = getTopReviewValue(weekTrades, "strategy");
  const goalStatus = getWeeklyGoalStatus(plan, weekTrades, amount);
  const mistakes = DISCIPLINE_RULES.filter((rule) => !rule.positive)
    .map((rule) => ({ label: rule.label, count: weekTrades.filter((trade) => getTradeDiscipline(trade)[rule.key]).length }))
    .sort((a, b) => b.count - a.count);
  reviewWeekRange.textContent = `${formatShortDate(weekdays[0].date)} - ${formatShortDate(end)}`;
  reviewSummaryGrid.innerHTML = [
    ["Trades", weekTrades.length],
    ["P/L", formatSummaryAmount(amount)],
    ["Win Rate", `${wins + losses ? Math.round((wins / (wins + losses)) * 100) : 0}%`],
    ["Points", formatPoints(points)],
    ["Rule Breaches", breaches],
  ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
  reviewInsights.innerHTML = `
    <div class="${bestTrade && getTradeAmount(bestTrade) > 0 ? "profit" : ""}"><span>Best trade</span><strong>${bestTrade ? `${escapeHtml(bestTrade.symbol)} · ${formatSummaryAmount(getTradeAmount(bestTrade))}` : "-"}</strong><small>${bestTrade ? `${escapeHtml(bestTrade.tradeDate || "")} · ${escapeHtml(bestTrade.strategy || "No strategy")}` : "No closed trades"}</small></div>
    <div class="${worstTrade && getTradeAmount(worstTrade) < 0 ? "loss" : ""}"><span>Worst trade</span><strong>${worstTrade ? `${escapeHtml(worstTrade.symbol)} · ${formatSummaryAmount(getTradeAmount(worstTrade))}` : "-"}</strong><small>${worstTrade ? `${escapeHtml(worstTrade.tradeDate || "")} · ${escapeHtml(worstTrade.strategy || "No strategy")}` : "No closed trades"}</small></div>
    <div class="${bestStrategy?.[1]?.amount > 0 ? "profit" : ""}"><span>Best strategy</span><strong>${escapeHtml(bestStrategy?.[0] || "-")}</strong><small>${bestStrategy ? `${formatSummaryAmount(bestStrategy[1].amount)} · ${bestStrategy[1].trades} trades` : "No data"}</small></div>
    <div class="${mistakes[0]?.count ? "loss" : ""}"><span>Biggest mistake</span><strong>${escapeHtml(mistakes[0]?.count ? mistakes[0].label : "-")}</strong><small>${mistakes[0]?.count || 0} recorded</small></div>
    <div class="${goalStatus.tone}"><span>Weekly goals</span><strong>${escapeHtml(goalStatus.title)}</strong><small>${escapeHtml(goalStatus.detail)}</small></div>
    <div><span>Continued after warning</span><strong>${weekTrades.filter((trade) => trade.continuedAfterRuleWarnings?.length).length}</strong><small>trades</small></div>
  `;
  reviewTradesList.innerHTML = weekTrades.length
    ? weekTrades.slice().sort(compareTradesNewestFirst).map((trade) => `<button type="button" data-review-trade="${trade.id}"><span>${escapeHtml(trade.tradeDate)} · ${escapeHtml(trade.symbol)}</span><strong class="${getTradeAmount(trade) > 0 ? "amount-win" : getTradeAmount(trade) < 0 ? "amount-loss" : ""}">${formatSummaryAmount(getTradeAmount(trade))}</strong></button>`).join("")
    : '<p class="muted">No trades recorded for this week.</p>';
  const review = appConfig.weeklyReviews[startKey] || {};
  ["wentWell", "improve", "lesson", "nextFocus", "rating"].forEach((name) => { weeklyReviewForm.elements[name].value = review[name] || ""; });
  saveWeeklyReviewButton.textContent = review.completedAt ? "Update review" : "Complete review";
  const currentWeekKey = getWeekdays()[0].key;
  reviewTabStatus.classList.toggle("hidden", Boolean(appConfig.weeklyReviews[currentWeekKey]?.completedAt));
}

function openWeeklyReview() {
  renderWeeklyReview();
  weeklyReviewDrawer.classList.remove("hidden", "is-closing");
  weeklyReviewBackdrop.classList.remove("hidden", "is-closing");
  document.body.classList.add("modal-open");
}

function renderWeeklyPlan() {
  if (!weeklyPlanForm) return;
  const { weekdays, startKey, end, weekTrades } = getWeeklyReviewContext();
  const plan = appConfig.weeklyPlans[startKey] || {};
  const amount = weekTrades.reduce((total, trade) => total + getTradeAmount(trade), 0);
  const losses = Math.abs(Math.min(0, amount));
  planWeekRange.textContent = `${formatShortDate(weekdays[0].date)} - ${formatShortDate(end)}`;
  ["profitTarget", "maxWeeklyLoss", "maxTrades", "maxRiskPerTrade", "disciplineFocus", "learningGoal", "intention"]
    .forEach((name) => { weeklyPlanForm.elements[name].value = plan[name] || ""; });
  planProgressGrid.innerHTML = [
    ["Current P/L", formatSummaryAmount(amount)],
    ["Profit target", plan.profitTarget ? formatSummaryAmount(Number(plan.profitTarget)) : "Not set"],
    ["Trades", `${weekTrades.length}${plan.maxTrades ? ` / ${plan.maxTrades}` : ""}`],
    ["Loss allowance", plan.maxWeeklyLoss ? `${formatSummaryAmount(Math.max(0, Number(plan.maxWeeklyLoss) - losses))} left` : "Not set"],
    ["Plan status", plan.savedAt ? "Ready" : "Not set"],
  ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
  planTabStatus.classList.toggle("hidden", Boolean(appConfig.weeklyPlans[getWeekdays()[0].key]?.savedAt));
}

function openWeeklyPlan() {
  reviewWeekOffset = 0;
  renderWeeklyPlan();
  weeklyPlanDrawer.classList.remove("hidden", "is-closing");
  weeklyPlanBackdrop.classList.remove("hidden", "is-closing");
  document.body.classList.add("modal-open");
}

function closeWeeklyPlan() {
  if (weeklyPlanDrawer.classList.contains("hidden")) return;
  weeklyPlanDrawer.classList.add("is-closing");
  weeklyPlanBackdrop.classList.add("is-closing");
  window.setTimeout(() => {
    weeklyPlanDrawer.classList.add("hidden");
    weeklyPlanDrawer.classList.remove("is-closing");
    weeklyPlanBackdrop.classList.add("hidden");
    weeklyPlanBackdrop.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
  }, MOTION_DURATION_MS);
}

function closeWeeklyReview() {
  if (weeklyReviewDrawer.classList.contains("hidden")) return;
  weeklyReviewDrawer.classList.add("is-closing");
  weeklyReviewBackdrop.classList.add("is-closing");
  window.setTimeout(() => {
    weeklyReviewDrawer.classList.add("hidden");
    weeklyReviewDrawer.classList.remove("is-closing");
    weeklyReviewBackdrop.classList.add("hidden");
    weeklyReviewBackdrop.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
  }, MOTION_DURATION_MS);
}

function renderConfig() {
  appConfig.accountSettings = normalizeAccountSettings(appConfig.accountSettings, appConfig.accounts, appConfig.accountBalances);
  configGrid.innerHTML = "";

  const marketSection = document.createElement("section");
  marketSection.className = "config-section";
  marketSection.dataset.configPanel = "markets";
  marketSection.innerHTML = `
    <div class="config-section-heading">
      <h3>Market Type(s)</h3>
    </div>
    <div class="market-type-config">
      ${MARKET_TYPE_OPTIONS.map(
        (marketType) => `
          <label class="wizard-option-card config-option-card">
            <input type="checkbox" value="${marketType}" data-market-type-toggle ${appConfig.marketTypes.includes(marketType) ? "checked" : ""} />
            <span>
              <strong>${marketType}</strong>
              <small>${MARKET_TYPE_DETAILS[marketType]}</small>
            </span>
          </label>
        `,
      ).join("")}
    </div>
  `;
  configGrid.appendChild(marketSection);

  const sessionTrackingSection = document.createElement("section");
  sessionTrackingSection.className = "config-section";
  sessionTrackingSection.dataset.configPanel = "sessions";
  sessionTrackingSection.innerHTML = `
    <div class="config-section-heading">
      <h3>Session(s)</h3>
    </div>
    <p class="config-note">Track sessions if you want to compare trades by time context. N/A is always available for setup-based trades outside a session.</p>
    <div class="market-type-config">
      <label class="toggle-option config-session-toggle">
        <input type="checkbox" data-track-sessions-toggle ${appConfig.trackSessions ? "checked" : ""} />
        <span>Track Sessions</span>
      </label>
    </div>
  `;
  configGrid.appendChild(sessionTrackingSection);

  appConfig.marketTypes.forEach((marketType) => {
    const section = document.createElement("section");
    section.className = "config-section";
    section.dataset.configPanel = "symbols";
    section.dataset.configKey = "symbolsByMarket";
    section.dataset.marketType = marketType;
    const symbols = getSymbolsForMarket(marketType);
    const options = PREDEFINED_SYMBOLS[marketType] || [];
    section.innerHTML = `
      <div class="config-section-heading">
        <h3>${escapeHtml(marketType)} Symbol(s)</h3>
        <p class="config-note">Select the ${escapeHtml(marketType.toLowerCase())} instruments you trade. Market mappings are handled automatically.</p>
      </div>
      <div class="symbol-choice-grid">
        ${options.map((option) => `<label class="symbol-choice"><input type="checkbox" data-config-symbol-choice data-market-type="${escapeHtml(marketType)}" value="${escapeHtml(option.symbol)}" ${symbols.includes(option.symbol) ? "checked" : ""}><span><strong>${escapeHtml(option.symbol)}</strong><small>${escapeHtml(option.market)}${option.size ? ` (${escapeHtml(option.size)})` : ""}</small></span></label>`).join("")}
      </div>
    `;
    configGrid.appendChild(section);
  });

  if (appConfig.trackSessions) {
    const sessionSection = document.createElement("section");
    sessionSection.className = "config-section";
    sessionSection.dataset.configPanel = "sessions";
    sessionSection.dataset.configKey = "sessions";
    sessionSection.innerHTML = `
      <div class="config-section-heading">
        <h3>Session Value(s)</h3>
        <div class="config-add-row">
          <input type="text" placeholder="Add session" aria-label="Add Session" />
          <button class="ghost-button" type="button" data-config-action="add" data-config-key="sessions">Add</button>
        </div>
      </div>
      <div class="config-list">
        ${
          appConfig.sessions.filter((option) => option !== NO_SPECIFIC_SESSION).length
            ? appConfig.sessions.filter((option) => option !== NO_SPECIFIC_SESSION)
                .map(
                  (option) => `
                    <span class="config-pill">
                      ${escapeHtml(getSessionDisplayLabel(option))}
                      <button type="button" aria-label="Remove ${escapeHtml(option)}" data-config-action="remove" data-config-key="sessions" data-config-value="${escapeHtml(option)}">x</button>
                    </span>
                  `,
                )
                .join("")
            : '<span class="muted">No values yet.</span>'
        }
      </div>
    `;
    configGrid.appendChild(sessionSection);
  }

  CONFIG_FIELDS.forEach((field) => {
    if (field.key === "accounts") return;
    const section = document.createElement("section");
    section.className = "config-section";
    section.dataset.configPanel = field.key === "accounts" ? "accounts" : "strategies";
    section.dataset.configKey = field.key;
    if (field.key === "strategies") {
      section.innerHTML = `
        <div class="config-section-heading"><div><h3>Strategy(s)</h3><p class="config-note">Choose common strategies or add your own custom setup.</p></div></div>
        <div class="predefined-strategy-grid">
          ${PREDEFINED_STRATEGIES.map((strategy) => `<label class="wizard-session-option"><input type="checkbox" data-predefined-strategy value="${escapeHtml(strategy)}" ${appConfig.strategies.includes(strategy) ? "checked" : ""}><span>${escapeHtml(strategy)}</span></label>`).join("")}
        </div>
        <div class="config-add-row strategy-custom-add"><input type="text" placeholder="Add custom strategy" aria-label="Add custom strategy"><button class="ghost-button" type="button" data-config-action="add" data-config-key="strategies">Add custom</button></div>
        <div class="config-list">${appConfig.strategies.filter((strategy) => !PREDEFINED_STRATEGIES.includes(strategy)).length ? appConfig.strategies.filter((strategy) => !PREDEFINED_STRATEGIES.includes(strategy)).map((strategy) => `<span class="config-pill">${escapeHtml(strategy)}<button type="button" aria-label="Remove ${escapeHtml(strategy)}" data-config-action="remove" data-config-key="strategies" data-config-value="${escapeHtml(strategy)}">x</button></span>`).join("") : '<span class="muted">No custom strategies added.</span>'}</div>
      `;
      configGrid.appendChild(section);
      return;
    }
    section.innerHTML = `
      <div class="config-section-heading">
        <h3>${escapeHtml(field.label)}(s)</h3>
        <div class="config-add-row ${field.key === "accounts" ? "account-create-row" : ""}">
          <input type="text" placeholder="Add ${escapeHtml(field.label.toLowerCase())}" aria-label="Add ${escapeHtml(field.label)}" />
          ${field.key === "accounts" ? `<select data-new-account-type aria-label="Account type"><option value="regular">Regular account</option><option value="prop">Prop account</option></select>` : ""}
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

  const rulesSection = document.createElement("section");
  rulesSection.className = "config-section";
  rulesSection.dataset.configPanel = "rules";
  rulesSection.dataset.configKey = "checklistRules";
  rulesSection.innerHTML = `
    <div class="config-section-heading">
      <div>
        <h3>Personal Checklist</h3>
        <p class="config-note">Add personal checks to confirm on each trade.</p>
      </div>
      <div class="config-add-row">
        <input type="text" placeholder="Add checklist item" aria-label="Add Checklist Item" />
        <button class="ghost-button" type="button" data-config-action="add" data-config-key="checklistRules">Add</button>
      </div>
    </div>
    <div class="config-list">
      ${
        appConfig.checklistRules.length
          ? appConfig.checklistRules
              .map(
                (rule) => `
                  <span class="config-pill">
                    ${escapeHtml(rule)}
                    <button type="button" aria-label="Remove ${escapeHtml(rule)}" data-config-action="remove" data-config-key="checklistRules" data-config-value="${escapeHtml(rule)}">x</button>
                  </span>
                `,
              )
              .join("")
          : '<span class="muted">No checklist items added yet.</span>'
      }
    </div>
  `;
  configGrid.appendChild(rulesSection);

  const automatedRulesSection = document.createElement("section");
  automatedRulesSection.className = "config-section";
  automatedRulesSection.dataset.configPanel = "rules";
  automatedRulesSection.innerHTML = `
    <div class="config-section-heading">
      <div>
        <h3>Automated Rules</h3>
        <p class="config-note">The app checks these limits whenever a trade is added.</p>
      </div>
      <div class="config-add-row automated-rule-add">
        <select aria-label="Automated rule type" data-automated-rule-type>
          ${AUTOMATED_RULE_TYPES.map((rule) => `<option value="${rule.key}">${rule.label}</option>`).join("")}
        </select>
        <input type="number" min="1" step="1" value="1" aria-label="Rule limit" data-automated-rule-value />
        <button class="ghost-button" type="button" data-automated-rule-add>Add</button>
      </div>
    </div>
    <div class="config-list">
      ${
        appConfig.automatedRules.length
          ? appConfig.automatedRules.map((rule) => {
              const definition = AUTOMATED_RULE_TYPES.find((item) => item.key === rule.type);
              return `<span class="config-pill">${escapeHtml(definition?.label || rule.type)}: ${escapeHtml(rule.value)}
                <button type="button" aria-label="Remove rule" data-automated-rule-remove="${escapeHtml(rule.type)}">x</button>
              </span>`;
            }).join("")
          : '<span class="muted">No automated limits added yet.</span>'
      }
    </div>
  `;
  configGrid.appendChild(automatedRulesSection);

  const planRestrictionsSection = document.createElement("section");
  planRestrictionsSection.className = "config-section";
  planRestrictionsSection.dataset.configPanel = "rules";
  planRestrictionsSection.classList.add("rule-restrictions-section");
  planRestrictionsSection.innerHTML = `
    <div class="config-section-heading">
      <div>
        <h3>Days I Do Not Trade</h3>
        <p class="config-note">Optional. The app will warn you before adding a trade on any selected day.</p>
      </div>
    </div>
    <div class="blocked-days-grid">
      ${TRADING_DAYS.map((day) => `<label class="blocked-day-option"><input type="checkbox" data-rule-restriction="blockedTradingDays" value="${day}" ${appConfig.blockedTradingDays.includes(day) ? "checked" : ""} /><span><strong>${day.slice(0, 3)}</strong><small>${day}</small></span></label>`).join("")}
    </div>
  `;
  configGrid.appendChild(planRestrictionsSection);

  const balanceSection = document.createElement("section");
  balanceSection.className = "config-section account-details-section";
  balanceSection.dataset.configPanel = "accounts";
  balanceSection.dataset.configKey = "accounts";
  balanceSection.innerHTML = `
    <div class="config-section-heading">
      <div><h3>Account(s)</h3><p class="config-note">Manage account balances and prop account limits.</p></div>
      <button class="ghost-button" type="button" data-account-create-toggle>${accountCreateOpen ? "Cancel" : "Add account"}</button>
    </div>
    <div class="account-create-panel ${accountCreateOpen ? "" : "hidden"}">
      <div class="config-add-row account-create-row">
        <input type="text" placeholder="Account name" aria-label="Add Account" />
        <select data-new-account-type aria-label="Account type"><option value="regular">Regular account</option><option value="prop">Prop account</option></select>
        <button class="primary-button" type="button" data-config-action="add" data-config-key="accounts">Add account</button>
      </div>
    </div>
    <div class="account-settings-groups">
      ${[
        { label: "Regular Accounts", accounts: appConfig.accounts.filter((account) => !appConfig.accountSettings?.[account]?.isProp) },
        { label: "Prop Accounts", accounts: appConfig.accounts.filter((account) => appConfig.accountSettings?.[account]?.isProp) },
      ].map((group) => `
        <section class="account-settings-group">
          <div class="account-settings-group-heading"><h4>${group.label}</h4><span>${group.accounts.length}</span></div>
          <div class="account-settings-list">
            ${group.accounts.length ? group.accounts.map((account) => `
                  <article class="account-settings-card">
                    <div class="account-settings-head">
                      <strong>${escapeHtml(account)}</strong>
                      <div class="account-settings-actions">
                        <label class="prop-account-toggle"><span>Prop account</span><input type="checkbox" data-account-setting="isProp" data-account="${escapeHtml(account)}" ${appConfig.accountSettings?.[account]?.isProp ? "checked" : ""} /><i></i></label>
                        <button class="account-remove-button" type="button" aria-label="Remove ${escapeHtml(account)}" title="Remove account" data-config-action="remove" data-config-key="accounts" data-config-value="${escapeHtml(account)}">×</button>
                      </div>
                    </div>
                    <div class="account-settings-fields ${appConfig.accountSettings?.[account]?.isProp ? "" : "regular"}">
                      <label><span>Starting balance</span><input type="number" min="0" step="0.01" value="${escapeHtml(appConfig.accountSettings?.[account]?.startingBalance || appConfig.accountBalances?.[account] || "")}" placeholder="0.00" data-account-setting="startingBalance" data-account="${escapeHtml(account)}" /></label>
                      <label class="prop-only"><span>Daily drawdown</span><select data-account-setting="dailyDrawdown" data-account="${escapeHtml(account)}">${renderDrawdownOptions(appConfig.accountSettings?.[account]?.dailyDrawdown)}</select></label>
                      <label class="prop-only"><span>Maximum drawdown</span><select data-account-setting="maxDrawdown" data-account="${escapeHtml(account)}">${renderDrawdownOptions(appConfig.accountSettings?.[account]?.maxDrawdown)}</select></label>
                      <label class="prop-only"><span>Timeframe to complete</span><div class="input-with-suffix"><input type="number" min="1" step="1" value="${escapeHtml(appConfig.accountSettings?.[account]?.timeframeDays || "")}" placeholder="Optional" data-account-setting="timeframeDays" data-account="${escapeHtml(account)}" /><span>days</span></div></label>
                    </div>
                  </article>
                `).join("") : `<span class="muted">No ${group.label.toLowerCase()} added.</span>`}
          </div>
        </section>
      `).join("")}
    </div>
  `;
  configGrid.appendChild(balanceSection);
  showConfigTab(activeConfigTab);
}

function showConfigTab(tabName) {
  activeConfigTab = tabName;
  configTabs.querySelectorAll("[data-config-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.configTab === tabName);
  });
  configGrid.querySelectorAll("[data-config-panel]").forEach((section) => {
    section.classList.toggle("hidden", section.dataset.configPanel !== tabName);
  });
}

function openConfigModal() {
  renderConfig();
  openDialog(configModal);
}

function openConfigFlow() {
  if (userHasStartedConfig()) {
    openConfigModal();
    return;
  }

  openDialog(onboardingModal);
}

function closeConfigModal() {
  closeDialog(configModal);
}

function maybeOpenConfigForNewUser() {
  const dismissedForUser = sessionStorage.getItem(ONBOARDING_DISMISSED_KEY) === currentUserId;
  if (currentUserId && !dismissedForUser && !userHasStartedConfig() && !configModal.open && !onboardingModal.open && !onboardingWizardModal.open) {
    openDialog(onboardingModal);
  }
}

function dismissOnboardingForSession() {
  if (currentUserId) {
    sessionStorage.setItem(ONBOARDING_DISMISSED_KEY, currentUserId);
  }
}

function parseWizardValues(value) {
  return [
    ...new Set(
      value
        .split(/[\n,]/)
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  ];
}

function getWizardStepValues(key) {
  return key === "marketTypes" ? onboardingDraft.marketTypes : onboardingDraft[key] || [];
}

function renderWizardValueBuilder({ key, label, placeholder, values, marketType = "" }) {
  const marketAttribute = marketType ? ` data-wizard-market-type-value="${escapeHtml(marketType)}"` : "";
  return `
    <div class="wizard-value-builder" data-wizard-builder="${escapeHtml(key)}"${marketAttribute}>
      <label class="wizard-add-row">
        <span>${escapeHtml(label)}</span>
        <div class="${key === "symbols" ? "wizard-symbol-add-row" : ""}">
          <input type="text" placeholder="${escapeHtml(placeholder)}" data-wizard-add-input />
          ${key === "symbols" ? `<select data-wizard-new-symbol-market aria-label="Standard market"><option value="">Please select</option>${STANDARD_MARKETS.map((market) => `<option value="${escapeHtml(market)}">${escapeHtml(market)}</option>`).join("")}</select>` : ""}
          <button class="ghost-button" type="button" data-wizard-add-value ${key === "symbols" ? "disabled" : ""}>Add</button>
        </div>
      </label>
      <div class="wizard-chip-list">
        ${
          values.length
            ? values
                .map(
                  (value) => `
                    <span class="config-pill ${key === "symbols" ? "wizard-symbol-pill" : ""}">
                      ${escapeHtml(value)}
                      ${key === "symbols" ? `<small>${escapeHtml(onboardingDraft.symbolMarketMap?.[value] || "Not mapped")}</small>` : ""}
                      <button type="button" aria-label="Remove ${escapeHtml(value)}" data-wizard-remove-value="${escapeHtml(value)}">x</button>
                    </span>
                  `,
                )
                .join("")
            : '<span class="muted">No values yet.</span>'
        }
      </div>
    </div>
  `;
}

function renderWizardAccountBuilder() {
  const accounts = onboardingDraft.accounts || [];
  return `
    <div class="wizard-value-builder" data-wizard-builder="accounts">
      <label class="wizard-add-row">
        <span>Account</span>
        <div class="account-create-row">
          <input type="text" placeholder="Example: Vantage" data-wizard-add-input />
          <select data-wizard-new-account-type aria-label="Account type">
            <option value="regular">Regular account</option>
            <option value="prop">Prop account</option>
          </select>
          <button class="ghost-button" type="button" data-wizard-add-value>Add</button>
        </div>
      </label>
      <div class="wizard-account-list">
        ${
          accounts.length
            ? accounts
                .map(
                  (account) => `
                    <div class="wizard-account-row">
                      <div class="wizard-account-head"><strong>${escapeHtml(account)}</strong><label class="prop-account-toggle"><span>Prop account</span><input type="checkbox" data-wizard-account-setting="isProp" data-account="${escapeHtml(account)}" ${onboardingDraft.accountSettings?.[account]?.isProp ? "checked" : ""} /><i></i></label></div>
                      <div class="wizard-account-fields ${onboardingDraft.accountSettings?.[account]?.isProp ? "" : "regular"}">
                        <label><span>Starting balance</span><input type="number" min="0" step="0.01" placeholder="0.00" value="${escapeHtml(onboardingDraft.accountSettings?.[account]?.startingBalance || onboardingDraft.accountBalances?.[account] || "")}" data-wizard-account-setting="startingBalance" data-account="${escapeHtml(account)}" /></label>
                        <label class="prop-only"><span>Daily drawdown</span><select data-wizard-account-setting="dailyDrawdown" data-account="${escapeHtml(account)}">${renderDrawdownOptions(onboardingDraft.accountSettings?.[account]?.dailyDrawdown)}</select></label>
                        <label class="prop-only"><span>Maximum drawdown</span><select data-wizard-account-setting="maxDrawdown" data-account="${escapeHtml(account)}">${renderDrawdownOptions(onboardingDraft.accountSettings?.[account]?.maxDrawdown)}</select></label>
                        <label class="prop-only"><span>Timeframe</span><input type="number" min="1" step="1" placeholder="Days (optional)" value="${escapeHtml(onboardingDraft.accountSettings?.[account]?.timeframeDays || "")}" data-wizard-account-setting="timeframeDays" data-account="${escapeHtml(account)}" /></label>
                      </div>
                      <button type="button" aria-label="Remove ${escapeHtml(account)}" data-wizard-remove-value="${escapeHtml(account)}">x</button>
                    </div>
                  `,
                )
                .join("")
            : '<span class="muted">No accounts yet.</span>'
        }
      </div>
    </div>
  `;
}

function wizardCurrentStepHasValue() {
  const step = getOnboardingSteps()[onboardingStepIndex];
  if (step.key === "rules") {
    return true;
  }

  if (step.key === "summary") {
    return (
      CONFIG_FIELDS.every((field) => (onboardingDraft[field.key] || []).length > 0) &&
      onboardingDraft.marketTypes.length > 0 &&
      onboardingDraft.marketTypes.every((marketType) => (onboardingDraft.symbolsByMarket?.[marketType] || []).length > 0) &&
      (!onboardingDraft.trackSessions || onboardingDraft.sessions.length > 0)
    );
  }

  if (step.key === "marketTypes") {
    return wizardContent.querySelectorAll("[data-wizard-market-type]:checked").length > 0;
  }

  if (step.key === "symbols") {
    return onboardingDraft.marketTypes.every((marketType) => (onboardingDraft.symbolsByMarket?.[marketType] || []).length > 0);
  }

  if (step.key === "sessionTracking") {
    return wizardContent.querySelectorAll("[data-wizard-session-tracking]:checked").length > 0;
  }

  if (step.key === "sessions") {
    return wizardContent.querySelectorAll("[data-wizard-session]:checked").length > 0;
  }

  return (onboardingDraft[step.key] || []).length > 0;
}

function updateWizardNextState() {
  wizardNextButton.disabled = !wizardCurrentStepHasValue();
}

function renderWizardRail() {
  const steps = getOnboardingSteps();
  return `
    <ol class="wizard-rail" aria-label="Setup steps">
      ${steps.map((step, index) => {
        const state = index < onboardingStepIndex ? "complete" : index === onboardingStepIndex ? "active" : "";
        return `
          <li class="${state}">
            <span>${index + 1}</span>
            <div>
              <strong>${escapeHtml(step.label)}</strong>
              <small>${index < onboardingStepIndex ? "Complete" : index === onboardingStepIndex ? "Current step" : "Up next"}</small>
            </div>
          </li>
        `;
      }).join("")}
    </ol>
  `;
}

function renderOnboardingWizard() {
  const steps = getOnboardingSteps();
  const step = steps[onboardingStepIndex];
  const isSummary = step.key === "summary";
  const isRules = step.key === "rules";
  wizardProgress.textContent = `Step ${onboardingStepIndex + 1} of ${steps.length}`;
  wizardBackButton.disabled = onboardingStepIndex === 0;
  wizardNextButton.textContent = isSummary ? "Save setup" : isRules && !onboardingDraft.automatedRules.length && !onboardingDraft.blockedTradingDays.length ? "Skip for now" : "Next";
  let stepContent = "";

  if (isSummary) {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="wizard-summary">
        <div>
          <span>Symbols</span>
          <strong>${escapeHtml(
            onboardingDraft.marketTypes
              .map((marketType) => `${marketType}: ${(onboardingDraft.symbolsByMarket?.[marketType] || []).join(", ") || "Not set"}`)
              .join(" | "),
          )}</strong>
        </div>
        <div>
          <span>Sessions</span>
          <strong>${onboardingDraft.trackSessions ? escapeHtml(onboardingDraft.sessions.join(", ") || "Not set") : "Skipped"}</strong>
        </div>
        ${CONFIG_FIELDS.map(
          (field) => `
            <div>
              <span>${escapeHtml(field.label)}</span>
              <strong>${escapeHtml(
                field.key === "accounts"
                  ? (onboardingDraft.accounts || [])
                      .map((account) => `${account}${onboardingDraft.accountBalances?.[account] ? ` (${onboardingDraft.accountBalances[account]})` : ""}`)
                      .join(", ") || "Not set"
                  : (onboardingDraft[field.key] || []).join(", ") || "Not set",
              )}</strong>
            </div>
          `,
        ).join("")}
        <div>
          <span>Market Types</span>
          <strong>${escapeHtml(onboardingDraft.marketTypes.join(", ") || "Not set")}</strong>
        </div>
        <div>
          <span>Rules</span>
          <strong>${escapeHtml(
            [
              ...onboardingDraft.automatedRules.map((rule) => AUTOMATED_RULE_TYPES.find((item) => item.key === rule.type)?.label || rule.type),
              ...(onboardingDraft.blockedTradingDays.length ? [`No trading: ${onboardingDraft.blockedTradingDays.join(", ")}`] : []),
            ].join(" | ") || "Skipped",
          )}</strong>
        </div>
      </div>
    `;
  } else if (step.key === "marketTypes") {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="market-type-config wizard-market-types">
        ${MARKET_TYPE_OPTIONS.map(
          (marketType) => `
            <label class="wizard-option-card">
              <input type="checkbox" value="${marketType}" data-wizard-market-type ${onboardingDraft.marketTypes.includes(marketType) ? "checked" : ""} />
              <span>
                <strong>${marketType}</strong>
                <small>${escapeHtml(MARKET_TYPE_DETAILS[marketType])}</small>
              </span>
            </label>
          `,
        ).join("")}
      </div>
      <p class="wizard-hint">Choose at least one. You can change this later from the config button.</p>
    `;
  } else if (step.key === "symbols") {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="wizard-symbol-groups">
        ${onboardingDraft.marketTypes.map(
          (marketType) => `<section class="wizard-symbol-selector"><h3>${escapeHtml(marketType)} symbols</h3><div class="symbol-choice-grid">${(PREDEFINED_SYMBOLS[marketType] || []).map((option) => `<label class="symbol-choice"><input type="checkbox" data-wizard-symbol-choice data-market-type="${escapeHtml(marketType)}" value="${escapeHtml(option.symbol)}" ${(onboardingDraft.symbolsByMarket?.[marketType] || []).includes(option.symbol) ? "checked" : ""}><span><strong>${escapeHtml(option.symbol)}</strong><small>${escapeHtml(option.market)}${option.size ? ` (${escapeHtml(option.size)})` : ""}</small></span></label>`).join("")}</div></section>`,
        ).join("")}
      </div>
      <p class="wizard-hint">Choose at least one symbol for each market type you selected. You can change these later.</p>
    `;
  } else if (step.key === "sessionTracking") {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="wizard-market-types">
        <label class="wizard-option-card">
          <input type="radio" name="wizardSessionTracking" value="yes" data-wizard-session-tracking ${onboardingDraft.trackSessions === true ? "checked" : ""} />
          <span>
            <strong>Track sessions</strong>
            <small>Show Session in trades, filters, table columns, and analytics. Setup-based trades can use N/A.</small>
          </span>
        </label>
        <label class="wizard-option-card">
          <input type="radio" name="wizardSessionTracking" value="no" data-wizard-session-tracking ${onboardingDraft.trackSessions === false ? "checked" : ""} />
          <span>
            <strong>Skip sessions</strong>
            <small>Hide Session from the app if your trades are setup-based or sessions are not part of your process.</small>
          </span>
        </label>
      </div>
      <p class="wizard-hint">You can change this later from Configure inputs.</p>
    `;
  } else if (step.key === "sessions") {
    const selectedSessions = onboardingDraft.sessions;
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="wizard-session-list">
        ${DEFAULT_SESSION_OPTIONS.filter((session) => session !== NO_SPECIFIC_SESSION).map(
          (session) => `
            <label class="wizard-session-option">
              <input type="checkbox" value="${escapeHtml(session)}" data-wizard-session ${selectedSessions.includes(session) ? "checked" : ""} />
              <span>${escapeHtml(getSessionDisplayLabel(session))}</span>
            </label>
          `,
        ).join("")}
      </div>
      <p class="wizard-hint">Select the session labels you want available. You can add custom labels later from Configure inputs.</p>
    `;
  } else if (step.key === "accounts") {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      ${renderWizardAccountBuilder()}
      <p class="wizard-hint">Add each account, then enter its starting balance so account-level P/L can be tracked correctly.</p>
    `;
  } else if (step.key === "strategies") {
    const customStrategies = onboardingDraft.strategies.filter((strategy) => !PREDEFINED_STRATEGIES.includes(strategy));
    stepContent = `
      <div class="wizard-copy"><span>${escapeHtml(step.label)}</span><h2>${escapeHtml(step.title)}</h2><p>${escapeHtml(step.description)}</p></div>
      <div class="predefined-strategy-grid">
        ${PREDEFINED_STRATEGIES.map((strategy) => `<label class="wizard-session-option"><input type="checkbox" data-wizard-predefined-strategy value="${escapeHtml(strategy)}" ${onboardingDraft.strategies.includes(strategy) ? "checked" : ""}><span>${escapeHtml(strategy)}</span></label>`).join("")}
      </div>
      ${renderWizardValueBuilder({ key: "strategies", label: "Custom strategies", placeholder: "Add custom strategy", values: customStrategies })}
      <p class="wizard-hint">Choose common strategies or add a custom setup. Opening Range Breakout enables extra execution fields when recording a trade.</p>
    `;
  } else if (step.key === "rules") {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)} · Optional</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      <div class="wizard-rules-grid">
        <section class="wizard-rule-panel">
          <div>
            <strong>Automated limit</strong>
            <p>Choose a limit the app should check before a new trade.</p>
          </div>
          <div class="wizard-rule-add">
            <select aria-label="Rule type" data-wizard-rule-type>
              ${AUTOMATED_RULE_TYPES.map((rule) => `<option value="${rule.key}">${rule.label}</option>`).join("")}
            </select>
            <input type="number" min="1" step="1" value="1" aria-label="Rule limit" data-wizard-rule-value />
            <button class="ghost-button" type="button" data-wizard-rule-add>Add</button>
          </div>
          <div class="config-list">
            ${onboardingDraft.automatedRules.length
              ? onboardingDraft.automatedRules.map((rule) => `<span class="config-pill">${escapeHtml(AUTOMATED_RULE_TYPES.find((item) => item.key === rule.type)?.label || rule.type)}: ${escapeHtml(rule.value)}<button type="button" data-wizard-rule-remove="${escapeHtml(rule.type)}" aria-label="Remove rule">x</button></span>`).join("")
              : '<span class="muted">No limits added.</span>'}
          </div>
        </section>
        <section class="wizard-rule-panel">
          <div>
            <strong>Days I do not trade</strong>
            <p>Select any days when you want the app to warn you before recording a trade.</p>
          </div>
          <div class="blocked-days-grid">
            ${TRADING_DAYS.map((day) => `<label class="blocked-day-option"><input type="checkbox" value="${day}" data-wizard-blocked-day ${onboardingDraft.blockedTradingDays.includes(day) ? "checked" : ""} /><span><strong>${day.slice(0, 3)}</strong><small>${day}</small></span></label>`).join("")}
          </div>
        </section>
      </div>
      <p class="wizard-hint">You can skip this step and configure more detailed rules later.</p>
    `;
  } else {
    stepContent = `
      <div class="wizard-copy">
        <span>${escapeHtml(step.label)}</span>
        <h2>${escapeHtml(step.title)}</h2>
        <p>${escapeHtml(step.description)}</p>
      </div>
      ${renderWizardValueBuilder({
        key: step.key,
        label: step.label,
        placeholder: step.placeholder || `Add ${step.label.toLowerCase()}`,
        values: getWizardStepValues(step.key),
      })}
      <p class="wizard-hint">Add one value at a time. You can remove anything before continuing.</p>
  `;
  }

  wizardContent.innerHTML = `
    <div class="wizard-layout">
      ${renderWizardRail()}
      <div class="wizard-main">${stepContent}</div>
    </div>
  `;
  updateWizardNextState();
}

function openOnboardingWizard() {
  onboardingStepIndex = 0;
  onboardingDraft = structuredClone(appConfig);
  onboardingDraft.trackSessions = null;
  onboardingDraft.sessions = [];
  onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
  onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
  onboardingDraft.symbolMarketMap = normalizeSymbolMarketMap(SYMBOL_MARKET_MAP, onboardingDraft.symbols);
  renderOnboardingWizard();
  openDialog(onboardingWizardModal);
}

function persistWizardStep() {
  const step = getOnboardingSteps()[onboardingStepIndex];
  if (step.key === "summary") {
    return true;
  }

  if (step.key === "marketTypes") {
    const selected = [...wizardContent.querySelectorAll("[data-wizard-market-type]:checked")].map((input) => input.value);
    if (!selected.length) {
      showToast("Choose at least one market type", "warning");
      return false;
    }
    onboardingDraft.marketTypes = normalizeMarketTypes(selected);
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
    return true;
  }

  if (step.key === "symbols") {
    const missingMarket = onboardingDraft.marketTypes.find((marketType) => !(onboardingDraft.symbolsByMarket?.[marketType] || []).length);
    if (missingMarket) {
      showToast(`Add at least one ${missingMarket} symbol`, "warning");
      wizardContent.querySelector(`[data-wizard-symbol-choice][data-market-type="${missingMarket}"]`)?.focus();
      return false;
    }
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
    const missingMapping = onboardingDraft.symbols.find((symbol) => !STANDARD_MARKETS.includes(onboardingDraft.symbolMarketMap?.[symbol]));
    if (missingMapping) {
      showToast(`Choose a market for ${missingMapping}`, "warning");
      return false;
    }
    return true;
  }

  if (step.key === "sessionTracking") {
    const selected = wizardContent.querySelector("[data-wizard-session-tracking]:checked")?.value;
    onboardingDraft.trackSessions = selected === "yes";
    if (!onboardingDraft.trackSessions) {
      onboardingDraft.sessions = [];
    }
    return true;
  }

  if (step.key === "sessions") {
    const selected = [...wizardContent.querySelectorAll("[data-wizard-session]:checked")].map((input) => input.value);
    if (!selected.length) {
      showToast("Choose at least one session", "warning");
      return false;
    }
    onboardingDraft.sessions = normalizeSessions(selected, []);
    return true;
  }

  if (step.key === "rules") {
    onboardingDraft.blockedTradingDays = normalizeOptions(
      [...wizardContent.querySelectorAll("[data-wizard-blocked-day]:checked")].map((input) => input.value),
      [],
    );
    return true;
  }

  const values = onboardingDraft[step.key] || [];
  if (!values.length) {
    showToast(`Add at least one ${step.label.toLowerCase()} value`, "warning");
    wizardContent.querySelector(`[data-wizard-builder="${step.key}"] [data-wizard-add-input]`)?.focus();
    return false;
  }
  if (step.key === "accounts") {
    onboardingDraft.accountBalances = normalizeAccountBalances(onboardingDraft.accountBalances, values);
  }
  return true;
}

function stashWizardStep() {
  const step = getOnboardingSteps()[onboardingStepIndex];
  if (step.key === "summary") {
    return;
  }

  if (step.key === "marketTypes") {
    onboardingDraft.marketTypes = normalizeMarketTypes(
      [...wizardContent.querySelectorAll("[data-wizard-market-type]:checked")].map((input) => input.value),
    );
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
    return;
  }

  if (step.key === "symbols") {
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
    return;
  }

  if (step.key === "sessionTracking") {
    const selected = wizardContent.querySelector("[data-wizard-session-tracking]:checked")?.value;
    onboardingDraft.trackSessions = selected === "yes";
    if (!onboardingDraft.trackSessions) {
      onboardingDraft.sessions = [];
    }
    return;
  }

  if (step.key === "sessions") {
    onboardingDraft.sessions = normalizeOptions(
      [...wizardContent.querySelectorAll("[data-wizard-session]:checked")].map((input) => input.value),
      [],
    );
    return;
  }

  if (step.key === "rules") {
    onboardingDraft.blockedTradingDays = normalizeOptions(
      [...wizardContent.querySelectorAll("[data-wizard-blocked-day]:checked")].map((input) => input.value),
      [],
    );
    return;
  }

  if (step.key !== "summary") {
    onboardingDraft[step.key] = normalizeOptions(onboardingDraft[step.key], []);
  }
}

function addWizardValue(builder, input) {
  const key = builder.dataset.wizardBuilder;
  const marketType = builder.dataset.wizardMarketTypeValue || "";
  const values = parseWizardValues(input.value);
  if (!values.length) {
    input.focus();
    return;
  }
  if (key === "symbols" && !builder.querySelector("[data-wizard-new-symbol-market]")?.value) {
    showToast("Choose a standard market before adding the symbol.", "warning");
    builder.querySelector("[data-wizard-new-symbol-market]")?.focus();
    return;
  }
  if (key === "strategies" && values.some((value) => value.toUpperCase() === "N/A")) {
    showToast("N/A is only available for sessions.", "warning");
    input.focus();
    return;
  }

  if (key === "symbols") {
    const current = onboardingDraft.symbolsByMarket?.[marketType] || [];
    onboardingDraft.symbolsByMarket = {
      ...onboardingDraft.symbolsByMarket,
      [marketType]: normalizeOptions([...values, ...current], []),
    };
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
    onboardingDraft.symbolMarketMap = {
      ...(onboardingDraft.symbolMarketMap || {}),
      ...Object.fromEntries(values.map((symbol) => [symbol, builder.querySelector("[data-wizard-new-symbol-market]")?.value || suggestStandardMarket(symbol)])),
    };
  } else {
    onboardingDraft[key] = normalizeOptions([...values, ...(onboardingDraft[key] || [])], []);
    if (key === "accounts") {
      onboardingDraft.accountBalances = onboardingDraft[key].reduce(
        (balances, account) => ({ ...balances, [account]: onboardingDraft.accountBalances?.[account] || "" }),
        {},
      );
      onboardingDraft.accountSettings = normalizeAccountSettings(onboardingDraft.accountSettings, onboardingDraft[key], onboardingDraft.accountBalances);
      const isProp = builder.querySelector("[data-wizard-new-account-type]")?.value === "prop";
      values.forEach((account) => {
        onboardingDraft.accountSettings[account] = { ...onboardingDraft.accountSettings[account], isProp };
      });
    }
  }

  input.value = "";
  renderOnboardingWizard();
  const selector = marketType
    ? `[data-wizard-builder="${key}"][data-wizard-market-type-value="${marketType}"] [data-wizard-add-input]`
    : `[data-wizard-builder="${key}"] [data-wizard-add-input]`;
  wizardContent.querySelector(selector)?.focus();
}

function removeWizardValue(builder, value) {
  const key = builder.dataset.wizardBuilder;
  const marketType = builder.dataset.wizardMarketTypeValue || "";

  if (key === "symbols") {
    onboardingDraft.symbolsByMarket = {
      ...onboardingDraft.symbolsByMarket,
      [marketType]: (onboardingDraft.symbolsByMarket?.[marketType] || []).filter((item) => item !== value),
    };
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
    if (onboardingDraft.symbolMarketMap) delete onboardingDraft.symbolMarketMap[value];
  } else {
    onboardingDraft[key] = (onboardingDraft[key] || []).filter((item) => item !== value);
    if (key === "accounts") {
      onboardingDraft.accountBalances = onboardingDraft[key].reduce(
        (balances, account) => ({ ...balances, [account]: onboardingDraft.accountBalances?.[account] || "" }),
        {},
      );
      onboardingDraft.accountSettings = normalizeAccountSettings(onboardingDraft.accountSettings, onboardingDraft[key], onboardingDraft.accountBalances);
    }
  }

  renderOnboardingWizard();
}

function saveOnboardingWizard() {
  const symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket);
  appConfig = {
    symbols: flattenSymbolsByMarket(symbolsByMarket),
    symbolsByMarket,
    symbolMarketMap: normalizeSymbolMarketMap(onboardingDraft.symbolMarketMap, flattenSymbolsByMarket(symbolsByMarket)),
    sessions: onboardingDraft.trackSessions ? normalizeSessions(onboardingDraft.sessions, []) : [],
    trackSessions: Boolean(onboardingDraft.trackSessions),
    accounts: normalizeOptions(onboardingDraft.accounts, []),
    strategies: normalizeStrategies(onboardingDraft.strategies, []),
    marketTypes: normalizeMarketTypes(onboardingDraft.marketTypes),
    accountBalances: normalizeAccountBalances(onboardingDraft.accountBalances, onboardingDraft.accounts),
    accountSettings: normalizeAccountSettings(onboardingDraft.accountSettings, onboardingDraft.accounts, onboardingDraft.accountBalances),
    checklistRules: normalizeOptions(appConfig.checklistRules, DEFAULT_CONFIG.checklistRules),
    automatedRules: Array.isArray(onboardingDraft.automatedRules) ? onboardingDraft.automatedRules : [],
    blockedTradingDays: normalizeOptions(onboardingDraft.blockedTradingDays, []),
    weeklyPlans: appConfig.weeklyPlans && typeof appConfig.weeklyPlans === "object" ? appConfig.weeklyPlans : {},
    weeklyReviews: appConfig.weeklyReviews && typeof appConfig.weeklyReviews === "object" ? appConfig.weeklyReviews : {},
    trainingProgress: appConfig.trainingProgress && typeof appConfig.trainingProgress === "object" ? appConfig.trainingProgress : {},
  };
  saveConfig();
  syncConfiguredInputs();
  resetForm();
  render();
  closeDialog(onboardingWizardModal);
  showToast("Setup saved");
}

function addConfigValue(key, value, marketType = "", options = {}) {
  const nextValue = value.trim();
  if (key === "sessions" && (nextValue === NO_SPECIFIC_SESSION || nextValue.toLowerCase() === "no specific session")) {
    showToast("N/A is added automatically.", "warning");
    return;
  }
  if (key === "strategies" && nextValue.toUpperCase() === "N/A") {
    showToast("N/A is only available for sessions.", "warning");
    return;
  }
  if (key === "symbolsByMarket") {
    const currentSymbols = getSymbolsForMarket(marketType);
    if (!nextValue || currentSymbols.includes(nextValue)) {
      return;
    }
    appConfig.symbolsByMarket = {
      ...appConfig.symbolsByMarket,
      [marketType]: [nextValue, ...currentSymbols],
    };
    appConfig.symbols = getAllSymbols();
    appConfig.symbolMarketMap = { ...appConfig.symbolMarketMap, [nextValue]: suggestStandardMarket(nextValue) };
    saveConfig();
    syncConfiguredInputs();
    renderConfig();
    resetForm();
    render();
    showToast("Config value added");
    return;
  }

  if (!nextValue || appConfig[key].includes(nextValue)) {
    return;
  }

  appConfig[key] = key === "sessions"
    ? normalizeSessions([nextValue, ...appConfig[key]], [])
    : [nextValue, ...appConfig[key]];
  if (key === "accounts") {
    appConfig.accountBalances = { ...appConfig.accountBalances, [nextValue]: "" };
    appConfig.accountSettings = { ...appConfig.accountSettings, [nextValue]: { isProp: Boolean(options.isProp), startingBalance: "", dailyDrawdown: "", maxDrawdown: "", timeframeDays: "" } };
    accountCreateOpen = false;
  }
  saveConfig();
  syncConfiguredInputs();
  renderConfig();
  resetForm();
  render();
  showToast("Config value added");
}

async function removeConfigValue(key, value, marketType = "") {
  if (key === "symbolsByMarket") {
    const currentSymbols = getSymbolsForMarket(marketType);
    if (currentSymbols.length <= 1) {
      showToast(`Keep at least one symbol for ${marketType}.`, "warning");
      return;
    }

    const confirmed = await askForConfirmation({
      title: `Remove ${value}?`,
      message: `Remove "${value}" from your ${marketType} symbols? Existing trades will keep their saved value.`,
      confirmText: "Remove",
      tone: "warning",
    });
    if (!confirmed) {
      return;
    }

    appConfig.symbolsByMarket = {
      ...appConfig.symbolsByMarket,
      [marketType]: currentSymbols.filter((option) => option !== value),
    };
    appConfig.symbols = getAllSymbols();
    delete appConfig.symbolMarketMap[value];
    saveConfig();
    syncConfiguredInputs();
    renderConfig();
    resetForm();
    render();
    showToast("Config value removed");
    return;
  }

  if (key !== "checklistRules" && appConfig[key].length <= 1) {
    showToast("Keep at least one value in each list.", "warning");
    return;
  }

  const confirmed = await askForConfirmation({
    title: `Remove ${value}?`,
    message: `Remove "${value}" from your ${key} list? Existing trades will keep their saved value.`,
    confirmText: "Remove",
    tone: "warning",
  });
  if (!confirmed) {
    return;
  }

  appConfig[key] = appConfig[key].filter((option) => option !== value);
  if (key === "accounts") {
    const { [value]: _removed, ...remainingBalances } = appConfig.accountBalances;
    appConfig.accountBalances = remainingBalances;
    const { [value]: _removedSettings, ...remainingSettings } = appConfig.accountSettings;
    appConfig.accountSettings = remainingSettings;
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

function getViewFromRoute(route) {
  if (route === "journal" || route === "tracker") return "trackerView";
  if (route === "challenges") return "challengesView";
  if (route === "backtesting") return "backtestingView";
  if (route === "calculator") return "calculatorView";
  if (route === "training") return "trainingView";
  return "dashboardView";
}

function getRouteFromView(viewId) {
  if (viewId === "trackerView") return "journal";
  if (viewId === "challengesView") return "challenges";
  if (viewId === "backtestingView") return "backtesting";
  if (viewId === "calculatorView") return "calculator";
  if (viewId === "trainingView") return "training";
  return "dashboard";
}

function updateActiveRoute(route) {
  document.querySelectorAll("[data-app-route]").forEach((link) => {
    const isActive = link.dataset.appRoute === route;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function navigateToRoute(route, { replace = false } = {}) {
  const access = JSON.parse(sessionStorage.getItem(AUTH_FEATURES_KEY) || "{}");
  const role = sessionStorage.getItem(AUTH_ROLE_KEY) || "user";
  const requestedFeature = route === "tracker" || route === "journal" || route === "backtesting" ? "journal" : route;
  if (role !== "admin" && ["journal", "calculator", "training", "challenges"].includes(requestedFeature) && access?.[requestedFeature] !== true) {
    route = "dashboard";
    showToast("That feature is not included in your access.", "warning");
  }
  const normalizedRoute = getRouteFromView(getViewFromRoute(route));
  [tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal, onboardingWizardModal, confirmModal, challengeModal, inviteChallengeModal].forEach((modal) => {
    if (modal.open) {
      modal.close();
      modal.classList.remove("is-closing");
    }
  });
  updateModalScrollLock();
  showView(getViewFromRoute(normalizedRoute));
  updateActiveRoute(normalizedRoute);
  const url = new URL(window.location.href);
  url.search = normalizedRoute === "dashboard" ? "" : `?view=${normalizedRoute === "journal" ? "tracker" : normalizedRoute}`;
  window.history[replace ? "replaceState" : "pushState"]({ route: normalizedRoute }, "", url);
  window.scrollTo({ top: 0, behavior: "instant" });
  if (normalizedRoute === "challenges") {
    if (challengesLoaded) renderChallenges();
    else loadChallenges();
  }
  if (normalizedRoute === "backtesting" && !orbBacktestsLoaded) {
    loadOrbBacktests();
  }
}

function showDashboardSection(sectionName) {
  dashboardSectionButtons.forEach((button) => {
    const isActive = button.dataset.dashboardSection === sectionName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  dashboardSectionPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.dashboardPanel === sectionName);
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
  if (!trade.discipline || typeof trade.discipline !== "object") {
    return false;
  }
  return DISCIPLINE_RULES.some((rule) => trade.discipline[rule.key] === true);
}

function getDisciplineScore(trade) {
  if (!hasTradeDiscipline(trade)) {
    return null;
  }

  const discipline = getTradeDiscipline(trade);
  const negativeCount = DISCIPLINE_RULES
    .filter((rule) => !rule.positive && discipline[rule.key])
    .length;
  return Math.max(0, DISCIPLINE_MAX_SCORE - negativeCount);
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
  const hasOpenModal = [tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal, onboardingWizardModal, confirmModal].some((modal) => modal.open);
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function openDialog(modal) {
  modal.classList.remove("is-closing");
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }

  updateModalScrollLock();
}

function closeDialog(modal) {
  if (!modal.open || modal.classList.contains("is-closing")) {
    return;
  }

  modal.classList.add("is-closing");
  window.setTimeout(() => {
    modal.close();
    modal.classList.remove("is-closing");
    updateModalScrollLock();
  }, MOTION_DURATION_MS);
}

function openTradeModal() {
  openDialog(tradeModal);
  form.tradeDate.focus();
}

async function startAddTradeFlow() {
  if (!userConfigComplete()) {
    maybeOpenConfigForNewUser();
    return;
  }

  const tradeDate = toDateKey(new Date());
  const reachedRules = getReachedStopRules(tradeDate);
  const dayRestrictions = getPlanRestrictionBreaches({ tradeDate });
  const preTradeWarnings = [...reachedRules, ...dayRestrictions];
  acknowledgedPreTradeRules = [];
  if (preTradeWarnings.length) {
    const confirmed = await askForConfirmation({
      eyebrow: "Trading plan warning",
      title: `${preTradeWarnings.length} trading ${preTradeWarnings.length === 1 ? "rule needs" : "rules need"} attention`,
      message: `${preTradeWarnings.map((rule) => rule.label).join(", ")}. Continue and add a trade anyway?`,
      confirmText: "Continue anyway",
      tone: "warning",
    });
    if (!confirmed) {
      return;
    }
    acknowledgedPreTradeRules = preTradeWarnings.map((rule) => rule.type);
  }

  resetForm();
  openTradeModal();
}

function closeTradeModal() {
  closeDialog(tradeModal);
  resetForm();
  acknowledgedPreTradeRules = [];
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

function syncSymbolFromMarket(preferredSymbol = "") {
  const symbols = getSymbolsForMarket(marketTypeInput.value || getDefaultMarketType());
  const nextSymbol = preferredSymbol || form.symbol.value;
  populateSelect(form.symbol, symbols);
  if (nextSymbol && symbols.includes(nextSymbol)) {
    form.symbol.value = nextSymbol;
  }
}

function syncSizeFromMarket() {
  syncSymbolFromMarket();
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
  const selectedChallenge = challenges.find((challenge) => challenge.id === tradeChallengeInput.value);
  const dayChallengeTrades = selectedChallenge ? trades.filter((trade) => trade.id !== existingId && trade.challengeId === selectedChallenge.id && trade.tradeDate === form.tradeDate.value) : [];
  const initialChallengeTrade = dayChallengeTrades.find((trade) => (trade.challengeTradeType || "initial") === "initial") || dayChallengeTrades[0];

  return {
    id: existingId || crypto.randomUUID(),
    tradeDate: form.tradeDate.value,
    symbol: form.symbol.value,
    session: selectedChallenge?.challenge_type === "orb" ? selectedChallenge.rules_json?.session || form.session.value : appConfig.trackSessions ? form.session.value : "",
    account: form.account.value,
    strategy: selectedChallenge?.challenge_type === "orb" ? ORB_STRATEGY : form.strategy.value,
    challengeId: selectedChallenge?.id || "",
    challengeName: selectedChallenge?.name || "",
    challengeMarket: selectedChallenge?.rules_json?.standardMarket || "",
    challengeTradeType: selectedChallenge?.challenge_type === "orb" && initialChallengeTrade ? "flip" : selectedChallenge?.challenge_type === "orb" ? "initial" : selectedChallenge?.challenge_type === "prop" ? "prop" : selectedChallenge?.challenge_type === "custom" ? "custom" : "",
    openingRange: isOrbStrategy(form.strategy.value) ? form.openingRange.value : "",
    entryTimeframe: isOrbStrategy(form.strategy.value) ? form.entryTimeframe.value : "",
    entryModel: isOrbStrategy(form.strategy.value) ? form.entryModel.value : "",
    marketType: form.marketType.value || getDefaultMarketType(),
    sizeType: (form.marketType.value || getDefaultMarketType()) === "Futures" ? "contracts" : "lots",
    lots: form.lots.value,
    lotMultiplier: "1",
    contracts: form.contracts.value,
    outcome: form.outcome.value,
    amount: form.amount.value,
    direction: form.direction.value,
    entryPrice: form.entryPrice.value,
    exitPrice: form.exitPrice.value,
    priceLegs: readPriceLegInputs(),
    discipline: {
      followedPlan: form.followedPlan.checked,
      enteredEarly: form.enteredEarly.checked,
      movedSl: form.movedSl.checked,
      overtraded: form.overtraded.checked,
      exitedEarly: form.exitedEarly.checked,
      heldTooLong: form.heldTooLong.checked,
    },
    tradingRules: readTradingRules(),
    ruleBreaches: [],
    continuedAfterRuleWarnings: existingId ? trades.find((trade) => trade.id === existingId)?.continuedAfterRuleWarnings || [] : [...acknowledgedPreTradeRules],
    notes: form.notes.value.trim(),
    createdAt: existingId
      ? trades.find((trade) => trade.id === existingId)?.createdAt
      : new Date().toISOString(),
  };
}

function validateTrade(trade) {
  if (!trade.tradeDate || !trade.symbol || !trade.account || !trade.marketType || (appConfig.trackSessions && !trade.session)) {
    return appConfig.trackSessions
      ? "Date, symbol, session, account, and market type are required."
      : "Date, symbol, account, and market type are required.";
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

  const incompletePriceLeg = normalizePriceLegs(trade.priceLegs).find((leg) => (leg.entry && !leg.exit) || (!leg.entry && leg.exit));
  if (incompletePriceLeg || (trade.entryPrice && !trade.exitPrice) || (!trade.entryPrice && trade.exitPrice)) {
    return "Add both entry and exit for each price leg.";
  }

  if (trade.challengeId) {
    const challenge = challenges.find((item) => item.id === trade.challengeId);
    const start = String(challenge?.starts_at || "").slice(0, 10);
    const end = String(challenge?.ends_at || "").slice(0, 10);
    if (!challenge || challenge.invitationStatus !== "accepted") return "This challenge is no longer available.";
    if (challenge.challenge_type === "orb" && !getSymbolsForStandardMarket(challenge.rules_json?.standardMarket || "").includes(trade.symbol)) return `Map and select a symbol for ${challenge.rules_json?.standardMarket || "this challenge market"}.`;
    if ((start && trade.tradeDate < start) || (end && trade.tradeDate > end)) return "The trade date must be within the challenge period.";
    if (challenge.challenge_type === "prop") {
      if ((trade.outcome === "Win" || trade.outcome === "Loss") && !trade.amount) return "Add the trade amount so prop challenge progress can be calculated.";
      return "";
    }
    if (challenge.challenge_type === "custom") {
      if (!hasTradePriceDetails(trade)) return "Add entry and exit prices so custom challenge points can be calculated.";
      return "";
    }
    const dayTrades = trades.filter((item) => item.id !== trade.id && item.challengeId === trade.challengeId && item.tradeDate === trade.tradeDate).sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
    const initialTrade = dayTrades.find((item) => (item.challengeTradeType || "initial") === "initial") || dayTrades[0];
    if (trade.challengeTradeType === "flip") {
      if (challenge.rules_json?.tradeRule !== "allow-flip") return "This challenge does not allow flip trades.";
      if (!initialTrade || initialTrade.outcome !== "Loss") return "The initial trade must be marked as a loss before adding a flip.";
      if (initialTrade.direction === trade.direction) return "The flip trade must use the opposite direction.";
      if (initialTrade.symbol !== trade.symbol) return "The flip trade must use the same symbol as the initial trade.";
      if ((initialTrade.openingRange || "") !== (trade.openingRange || "")) return "The flip trade must use the same opening range as the initial trade.";
      if (dayTrades.some((item) => item.challengeTradeType === "flip")) return "You have already submitted today’s flip trade.";
    } else if (initialTrade) {
      return "You have already submitted today’s initial trade.";
    }
    if (!hasTradePriceDetails(trade)) return "Add entry and exit prices so challenge points can be calculated.";
  }

  return "";
}

function resetForm() {
  showTradeFormError("");
  editingTradeId = "";
  tradeIdInput.value = "";
  form.tradeDate.value = new Date().toISOString().slice(0, 10);
  form.marketType.value = getDefaultMarketType();
  syncSymbolFromMarket();
  if (appConfig.trackSessions) {
    form.session.value = getDefaultOption("sessions");
  }
  form.account.value = getDefaultOption("accounts");
  form.strategy.value = getDefaultOption("strategies");
  form.session.disabled = false;
  form.strategy.disabled = false;
  form.symbol.disabled = false;
  form.openingRange.disabled = false;
  form.direction.disabled = false;
  tradeChallengeInput.value = getAcceptedChallenges().length ? "__choose__" : "";
  form.openingRange.value = "";
  form.entryTimeframe.value = "";
  form.entryModel.value = "";
  syncStrategyExecutionFields();
  syncMarketTypeField();
  form.lots.value = "0.01";
  form.contracts.value = "1";
  syncSizeFields();
  form.outcome.value = "Pending";
  form.amount.value = "";
  form.direction.value = "Buy";
  form.entryPrice.value = "";
  form.exitPrice.value = "";
  renderPriceLegs([]);
  priceDetailsDisclosure.open = false;
  updatePricePointsPreview();
  DISCIPLINE_RULES.forEach((rule) => {
    form[rule.key].checked = false;
  });
  disciplineDisclosure.open = false;
  renderTradingRuleChecklist([]);
  tradingRulesDisclosure.open = false;
  form.notes.value = "";
  notesDisclosure.open = false;
  formTitle.textContent = "Add trade";
  submitButton.textContent = "Add trade";
  cancelEditButton.classList.add("hidden");
  syncTradeChallenge();
}

function startEdit(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  acknowledgedPreTradeRules = [];
  showTradeFormError("");
  tradeIdInput.value = trade.id;
  editingTradeId = trade.id;
  form.tradeDate.value = trade.tradeDate;
  preserveOption(form.marketType, getTradeMarketType(trade));
  syncSymbolFromMarket(trade.symbol);
  preserveOption(form.symbol, trade.symbol || getSymbolsForMarket(getTradeMarketType(trade))[0] || "");
  if (appConfig.trackSessions) {
    preserveOption(form.session, trade.session || getDefaultOption("sessions"));
  }
  preserveOption(form.account, trade.account || getDefaultOption("accounts"));
  preserveOption(form.strategy, trade.strategy || getDefaultOption("strategies"));
  syncTradeChallenge(trade.challengeId || "");
  form.openingRange.value = trade.openingRange || "";
  form.entryTimeframe.value = trade.entryTimeframe || "";
  form.entryModel.value = trade.entryModel || "";
  syncStrategyExecutionFields();
  syncMarketTypeField();
  form.lots.value = formatLots(getTradeLots(trade));
  form.contracts.value = trade.contracts || "1";
  syncSizeFields();
  form.outcome.value = trade.outcome || "Pending";
  form.amount.value = trade.amount || "";
  form.direction.value = trade.direction === "Sell" ? "Sell" : "Buy";
  form.entryPrice.value = trade.entryPrice || "";
  form.exitPrice.value = trade.exitPrice || "";
  renderPriceLegs(trade.priceLegs || []);
  priceDetailsDisclosure.open = hasTradePriceDetails(trade);
  updatePricePointsPreview();
  const discipline = getTradeDiscipline(trade);
  DISCIPLINE_RULES.forEach((rule) => {
    form[rule.key].checked = Boolean(discipline[rule.key]);
  });
  disciplineDisclosure.open = DISCIPLINE_RULES.some((rule) => Boolean(discipline[rule.key]));
  renderTradingRuleChecklist(getTradeRules(trade));
  tradingRulesDisclosure.open = getTradeRules(trade).length > 0;
  form.notes.value = trade.notes;
  notesDisclosure.open = Boolean(trade.notes);
  formTitle.textContent = "Edit trade";
  submitButton.textContent = "Save changes";
  cancelEditButton.classList.remove("hidden");
  openTradeModal();
}

async function deleteTrade(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  const confirmed = await askForConfirmation({
    eyebrow: "Delete trade",
    title: `Delete ${trade.symbol} trade?`,
    message: `Delete this ${trade.symbol} trade from ${trade.tradeDate}? This cannot be undone.`,
    confirmText: "Delete trade",
    tone: "danger",
  });
  if (!confirmed) {
    return;
  }

  trades = trades.filter((item) => item.id !== id);
  saveTrades();
  render();
  showToast("Trade deleted", "warning");
}

function exportCsv() {
  const header = [
      "Date",
      "Symbol",
      "Market",
      "Account",
      "Strategy",
      "Opening Range",
      "Entry Timeframe",
      "Entry Model",
      "Size Type",
      "Lots",
      "Contracts",
      "Total Lots",
      "Direction",
      "Entry",
      "Exit",
      "Points",
      "Win / Loss",
      "Amount",
      "Discipline Score",
      "Plan Followed",
      "Early Entry",
      "Stop Moved",
      "Overtraded",
      "Early Exit",
      "Held Too Long",
      "Notes",
    ];
  if (appConfig.trackSessions) {
    header.splice(3, 0, "Session");
  }

  const rows = [
    header,
    ...trades.map((trade) => {
      const discipline = getTradeDiscipline(trade);
      const points = getTradePoints(trade);
      const row = [
        trade.tradeDate,
        trade.symbol,
        getTradeMarketType(trade),
        trade.account || getDefaultOption("accounts"),
        trade.strategy,
        trade.openingRange || "",
        trade.entryTimeframe || "",
        trade.entryModel || "",
        getTradeSizeType(trade),
        trade.lots,
        trade.contracts || "",
        formatLots(getTradeLots(trade)),
        trade.direction || "",
        trade.entryPrice || "",
        trade.exitPrice || "",
        points === null ? "" : formatPoints(points),
        trade.outcome || "Pending",
        trade.amount || "",
        getDisciplineScore(trade) === null ? "" : `${getDisciplineScore(trade)}/${DISCIPLINE_MAX_SCORE}`,
        discipline.followedPlan ? "Yes" : "No",
        discipline.enteredEarly ? "Yes" : "No",
        discipline.movedSl ? "Yes" : "No",
        discipline.overtraded ? "Yes" : "No",
        discipline.exitedEarly ? "Yes" : "No",
        discipline.heldTooLong ? "Yes" : "No",
        trade.notes,
      ];
      if (appConfig.trackSessions) {
        row.splice(3, 0, trade.session || getDefaultOption("sessions"));
      }
      return row;
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const trade = readForm();
  const validationMessage = validateTrade(trade);
  if (validationMessage) {
    showTradeFormError(validationMessage);
    showToast(validationMessage, "warning");
    return;
  }
  showTradeFormError("");

  const existingIndex = trades.findIndex((item) => item.id === trade.id);
  trade.ruleBreaches = getAutomatedRuleBreaches(trade);
  const unacknowledgedBreaches = trade.ruleBreaches.filter((rule) => !trade.continuedAfterRuleWarnings.includes(rule.type));
  if (existingIndex < 0 && unacknowledgedBreaches.length) {
    const confirmed = await askForConfirmation({
      eyebrow: "Trading rule warning",
      title: `${unacknowledgedBreaches.length} rule ${unacknowledgedBreaches.length === 1 ? "limit" : "limits"} reached`,
      message: `${unacknowledgedBreaches.map((rule) => rule.label).join(", ")}. Add this trade anyway?`,
      confirmText: "Add anyway",
      tone: "warning",
    });
    if (!confirmed) {
      return;
    }
    trade.continuedAfterRuleWarnings = [...new Set([...trade.continuedAfterRuleWarnings, ...unacknowledgedBreaches.map((rule) => rule.type)])];
  }

  if (existingIndex >= 0) {
    trades[existingIndex] = trade;
    showToast("Trade updated", "saved", {
      label: "View dashboard",
      onClick: () => navigateToRoute("dashboard"),
    });
  } else {
    trades.push(trade);
    showToast("Trade added", "saved", {
      label: "Weekly review",
      onClick: () => openWeeklyReview(),
    });
  }

  saveTrades();
  resetForm();
  currentTablePage = 1;
  render();
  closeDialog(tradeModal);
  acknowledgedPreTradeRules = [];
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
dashboardSectionButtons.forEach((button) => {
  button.addEventListener("click", () => showDashboardSection(button.dataset.dashboardSection));
});
newsAlertButton?.addEventListener("click", openNewsDrawer);
closeNewsDrawerButton?.addEventListener("click", closeNewsDrawer);
newsDrawerBackdrop?.addEventListener("click", closeNewsDrawer);
newsFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    newsFilter = button.dataset.newsFilter || "today";
    renderNewsEvents();
  });
});
confirmCancelButton.addEventListener("click", () => resolveConfirmation(false));
confirmActionButton.addEventListener("click", () => resolveConfirmation(true));
confirmModal.addEventListener("cancel", (event) => {
  event.preventDefault();
  resolveConfirmation(false);
});
confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) {
    resolveConfirmation(false);
  }
});
marketTypeInput.addEventListener("change", syncSizeFromMarket);
form.strategy.addEventListener("change", syncStrategyExecutionFields);
tradeChallengeInput.addEventListener("change", () => syncTradeChallenge());
form.tradeDate.addEventListener("change", () => syncTradeChallenge(tradeChallengeInput.value));
form.addEventListener("input", () => showTradeFormError(""));
form.addEventListener("change", () => showTradeFormError(""));
saveChallengeSymbolButton.addEventListener("click", () => {
  const standardMarket = saveChallengeSymbolButton.dataset.challengeMarket;
  const existingSymbol = challengeExistingSymbol.value;
  const newSymbol = challengeNewSymbol.value.trim();
  const symbol = newSymbol || existingSymbol;
  if (!symbol || !standardMarket) {
    showToast("Choose or enter a symbol first.", "warning");
    return;
  }
  if (newSymbol && !getAllSymbols().includes(newSymbol)) {
    const marketType = form.marketType.value || getDefaultMarketType();
    appConfig.symbolsByMarket = {
      ...appConfig.symbolsByMarket,
      [marketType]: [newSymbol, ...getSymbolsForMarket(marketType)],
    };
    appConfig.symbols = getAllSymbols();
  }
  appConfig.symbolMarketMap = { ...appConfig.symbolMarketMap, [symbol]: standardMarket };
  saveConfig();
  syncConfiguredInputs();
  challengeNewSymbol.value = "";
  syncTradeChallenge(tradeChallengeInput.value);
  showToast(`${symbol} mapped to ${standardMarket}`);
});
["direction", "entryPrice", "exitPrice"].forEach((name) => {
  form[name].addEventListener("input", updatePricePointsPreview);
  form[name].addEventListener("change", updatePricePointsPreview);
});
addPriceLegButton.addEventListener("click", addPriceLeg);
priceLegsList.addEventListener("input", updatePricePointsPreview);
priceLegsList.addEventListener("change", updatePricePointsPreview);
priceLegsList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-price-leg]");
  if (!removeButton) return;
  removeButton.closest("[data-price-leg]")?.remove();
  updatePricePointsPreview();
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
emptyConfigButton.addEventListener("click", openConfigFlow);
closeTradeModalButton.addEventListener("click", closeTradeModal);
openConfigButton.addEventListener("click", openConfigFlow);
closeConfigButton.addEventListener("click", closeConfigModal);
closeOnboardingButton.addEventListener("click", () => {
  dismissOnboardingForSession();
  closeDialog(onboardingModal);
});
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
hubNewsButton.addEventListener("click", openNewsDrawer);
hubReviewButton.addEventListener("click", openWeeklyReview);
hubChallengesButton.addEventListener("click", () => navigateToRoute("challenges"));
hubChallengeList.addEventListener("click", async (event) => {
  if (event.target.closest("[data-hub-view-challenges]")) {
    navigateToRoute("challenges");
    return;
  }
  const tradeButton = event.target.closest("[data-hub-challenge-trade]");
  if (!tradeButton) return;
  await startAddTradeFlow();
  if (tradeModal.open) syncTradeChallenge(tradeButton.dataset.hubChallengeTrade);
});
dashboardSetupButton.addEventListener("click", openOnboardingWizard);
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
  const accountCreateToggle = event.target.closest("[data-account-create-toggle]");
  if (accountCreateToggle) {
    accountCreateOpen = !accountCreateOpen;
    renderConfig();
    if (accountCreateOpen) configGrid.querySelector('.account-create-panel input')?.focus();
    return;
  }

  const automatedAddButton = event.target.closest("[data-automated-rule-add]");
  if (automatedAddButton) {
    const section = automatedAddButton.closest(".config-section");
    const type = section.querySelector("[data-automated-rule-type]").value;
    const definition = AUTOMATED_RULE_TYPES.find((item) => item.key === type);
    const value = Number(section.querySelector("[data-automated-rule-value]").value);
    if (!definition || !Number.isFinite(value) || value < definition.min) {
      showToast("Enter a valid rule limit.", "warning");
      return;
    }
    appConfig.automatedRules = [...appConfig.automatedRules.filter((rule) => rule.type !== type), { type, value }];
    saveConfig();
    renderConfig();
    showToast("Automated rule saved");
    return;
  }

  const automatedRemoveButton = event.target.closest("[data-automated-rule-remove]");
  if (automatedRemoveButton) {
    appConfig.automatedRules = appConfig.automatedRules.filter((rule) => rule.type !== automatedRemoveButton.dataset.automatedRuleRemove);
    saveConfig();
    renderConfig();
    showToast("Automated rule removed", "warning");
    return;
  }

  const button = event.target.closest("button[data-config-action]");
  if (!button) {
    return;
  }

  const key = button.dataset.configKey;
  if (button.dataset.configAction === "add") {
    const section = button.closest(".config-section");
    const input = section.querySelector("input");
    const isProp = section.querySelector("[data-new-account-type]")?.value === "prop";
    addConfigValue(key, input.value, button.dataset.marketType || "", { isProp });
    input.value = "";
  }

  if (button.dataset.configAction === "remove") {
    removeConfigValue(key, button.dataset.configValue, button.dataset.marketType || "");
  }
});

configGrid.addEventListener("change", (event) => {
  if (event.target.matches("[data-config-symbol-choice]")) {
    const marketType = event.target.dataset.marketType;
    const selected = [...configGrid.querySelectorAll(`[data-config-symbol-choice][data-market-type="${marketType}"]:checked`)].map((input) => input.value);
    appConfig.symbolsByMarket = { ...appConfig.symbolsByMarket, [marketType]: selected };
    appConfig.symbols = getAllSymbols();
    appConfig.symbolMarketMap = normalizeSymbolMarketMap(SYMBOL_MARKET_MAP, appConfig.symbols);
    saveConfig();
    syncConfiguredInputs();
    resetForm();
    render();
    return;
  }
  if (event.target.matches("[data-symbol-market]")) {
    appConfig.symbolMarketMap = { ...appConfig.symbolMarketMap, [event.target.dataset.symbolMarket]: event.target.value };
    saveConfig();
    showToast("Symbol market updated");
    return;
  }
  if (event.target.matches("[data-predefined-strategy]")) {
    const selected = [...configGrid.querySelectorAll("[data-predefined-strategy]:checked")].map((input) => input.value);
    const custom = appConfig.strategies.filter((strategy) => !PREDEFINED_STRATEGIES.includes(strategy));
    appConfig.strategies = normalizeStrategies([...selected, ...custom], []);
    saveConfig();
    syncConfiguredInputs();
    resetForm();
    render();
    showToast("Strategies updated");
    return;
  }
  const restriction = event.target.closest("[data-rule-restriction]");
  if (!restriction) return;
  const key = restriction.dataset.ruleRestriction;
  appConfig[key] = [...configGrid.querySelectorAll(`[data-rule-restriction="${key}"]:checked`)].map((input) => input.value);
  saveConfig();
  showToast("Trading restriction saved");
});

configGrid.addEventListener("change", (event) => {
  const select = event.target.closest("[data-automated-rule-type]");
  if (!select) {
    return;
  }
  const definition = AUTOMATED_RULE_TYPES.find((item) => item.key === select.value);
  const input = select.closest(".config-section").querySelector("[data-automated-rule-value]");
  input.min = String(definition.min);
  input.step = String(definition.step);
});

configGrid.addEventListener("change", (event) => {
  if (event.target.matches("[data-track-sessions-toggle]")) {
    appConfig.trackSessions = event.target.checked;
    if (appConfig.trackSessions) {
      appConfig.sessions = normalizeSessions(appConfig.sessions, DEFAULT_SESSION_OPTIONS);
    }
    if (!appConfig.trackSessions) {
      appConfig.sessions = [];
      sessionFilter.value = "All";
    }
    saveConfig();
    syncConfiguredInputs();
    resetForm();
    renderConfig();
    render();
    return;
  }

  if (!event.target.matches("[data-market-type-toggle]")) {
    return;
  }

  const selected = [...configGrid.querySelectorAll("[data-market-type-toggle]:checked")].map((input) => input.value);
  appConfig.marketTypes = normalizeMarketTypes(selected);
  appConfig.symbolsByMarket = normalizeSymbolsByMarket(appConfig.symbolsByMarket);
  appConfig.symbols = getAllSymbols();
  saveConfig();
  syncConfiguredInputs();
  resetForm();
  renderConfig();
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
  const isProp = section.querySelector("[data-new-account-type]")?.value === "prop";
  addConfigValue(section.dataset.configKey, event.target.value, section.dataset.marketType || "", { isProp });
  event.target.value = "";
});

configGrid.addEventListener("input", (event) => {
  const account = event.target.dataset.account;
  const setting = event.target.dataset.accountSetting;
  if (!account || !setting) {
    return;
  }

  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value.trim();
  appConfig.accountSettings = {
    ...appConfig.accountSettings,
    [account]: { ...(appConfig.accountSettings?.[account] || {}), [setting]: value },
  };
  if (setting === "startingBalance") appConfig.accountBalances = { ...appConfig.accountBalances, [account]: value };
  saveConfig();
  if (setting === "isProp") renderConfig();
  renderAccountBalances();
});
configGrid.addEventListener("change", (event) => {
  const account = event.target.dataset.account;
  const setting = event.target.dataset.accountSetting;
  if (!account || !setting || event.target.type === "checkbox") return;
  appConfig.accountSettings = {
    ...appConfig.accountSettings,
    [account]: { ...(appConfig.accountSettings?.[account] || {}), [setting]: event.target.value },
  };
  saveConfig();
});

tradingRulesOptions.addEventListener("change", updateTradingRulesSummary);

configTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-config-tab]");
  if (button) {
    showConfigTab(button.dataset.configTab);
  }
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
    await setAppUnlocked(
      matchedUser.id,
      matchedUser.label,
      matchedUser.email,
      matchedUser.role,
      inputHash,
      false,
      Boolean(matchedUser.trialEnabled),
      matchedUser.trialEndsAt || "",
      matchedUser.featureAccess || {},
    );
    window.requestAnimationFrame(maybeOpenConfigForNewUser);
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

[tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal, onboardingWizardModal].forEach((modal) => {
  modal.addEventListener("close", updateModalScrollLock);
});

clearButton.addEventListener("click", async () => {
  if (!trades.length) {
    return;
  }

  const confirmed = await askForConfirmation({
    eyebrow: "Clear trades",
    title: "Clear all trades?",
    message: `Clear all ${trades.length} trades for this user? This cannot be undone.`,
    confirmText: "Clear trades",
    tone: "danger",
  });
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

document.querySelectorAll("[data-app-route]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    navigateToRoute(link.dataset.appRoute);
  });
});

window.addEventListener("popstate", () => {
  const requestedView = new URLSearchParams(window.location.search).get("view") || "dashboard";
  navigateToRoute(requestedView, { replace: true });
});

reviewPrevWeek.addEventListener("click", () => {
  reviewWeekOffset -= 1;
  renderWeeklyReview();
});
openWeeklyReviewButton.addEventListener("click", openWeeklyReview);
openWeeklyPlanButton.addEventListener("click", openWeeklyPlan);
hubPlanButton.addEventListener("click", openWeeklyPlan);
closeWeeklyReviewButton.addEventListener("click", closeWeeklyReview);
closeWeeklyPlanButton.addEventListener("click", closeWeeklyPlan);
weeklyReviewBackdrop.addEventListener("click", closeWeeklyReview);
weeklyPlanBackdrop.addEventListener("click", closeWeeklyPlan);
reviewNextWeek.addEventListener("click", () => {
  reviewWeekOffset += 1;
  renderWeeklyReview();
});
weeklyReviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { startKey } = getWeeklyReviewContext();
  appConfig.weeklyReviews = {
    ...appConfig.weeklyReviews,
    [startKey]: {
      wentWell: weeklyReviewForm.elements.wentWell.value.trim(),
      improve: weeklyReviewForm.elements.improve.value.trim(),
      lesson: weeklyReviewForm.elements.lesson.value.trim(),
      nextFocus: weeklyReviewForm.elements.nextFocus.value.trim(),
      rating: weeklyReviewForm.elements.rating.value,
      completedAt: new Date().toISOString(),
    },
  };
  saveConfig();
  renderWeeklyReview();
  showToast("Weekly review saved", "saved", {
    label: "View dashboard",
    onClick: () => navigateToRoute("dashboard"),
  });
});
weeklyPlanForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { startKey } = getWeeklyReviewContext();
  const values = Object.fromEntries(new FormData(weeklyPlanForm));
  appConfig.weeklyPlans = {
    ...appConfig.weeklyPlans,
    [startKey]: {
      ...values,
      savedAt: new Date().toISOString(),
    },
  };
  saveConfig();
  renderWeeklyPlan();
  renderHubDashboard();
  showToast("Weekly plan saved", "saved", {
    label: "View dashboard",
    onClick: () => navigateToRoute("dashboard"),
  });
});
reviewTradesList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-trade]");
  if (button) openTradeDrawer(button.dataset.reviewTrade);
});

backtestImportForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = backtestCsvFile.files?.[0];
  if (!file) {
    showToast("Choose a CSV file to import.", "warning");
    return;
  }
  const meta = {
    symbol: document.querySelector("#backtestSymbol")?.value.trim() || "",
    session: document.querySelector("#backtestSession")?.value || "",
    model: document.querySelector("#backtestModel")?.value || "",
    targetPoints: document.querySelector("#backtestTargetPoints")?.value.trim() || "",
    rangeTimeframe: document.querySelector("#backtestRangeTimeframe")?.value || "",
    breakTimeframe: document.querySelector("#backtestBreakTimeframe")?.value || "",
    importName: "",
  };
  if (!meta.symbol || !meta.session || !meta.model || !meta.rangeTimeframe || !meta.breakTimeframe) {
    showToast("Choose the scenario before importing.", "warning");
    return;
  }
  if (meta.model === "Fixed 1:1" && (!Number(meta.targetPoints) || Number(meta.targetPoints) <= 0)) {
    showToast("Enter the Fixed 1:1 target points before importing.", "warning");
    return;
  }
  const rows = createBacktestRows(await file.text(), meta);
  if (!rows.length) {
    showToast("No usable rows found in that CSV.", "warning");
    return;
  }
  await orbBacktestRequest({ action: "import", rows });
  backtestImportForm.reset();
  activeBacktestScenarioKey = "";
  updateBacktestTargetField();
  await loadOrbBacktests({ showLoading: false });
  showToast(`${rows.length} backtest rows imported`);
});

[backtestFilterModel, backtestFilterSymbol, backtestFilterRange, backtestFilterBias, backtestFilterResult, backtestFilterFlip].forEach((select) => {
  select?.addEventListener("change", renderBacktesting);
});

backtestScenarioTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-backtest-scenario]");
  if (!button) return;
  activeBacktestScenarioKey = button.dataset.backtestScenario || "";
  [backtestFilterModel, backtestFilterSymbol, backtestFilterRange, backtestFilterBias, backtestFilterResult, backtestFilterFlip].forEach((select) => {
    if (select) select.value = "All";
  });
  renderBacktesting();
});

backtestModel?.addEventListener("change", updateBacktestTargetField);
updateBacktestTargetField();

clearBacktestsButton?.addEventListener("click", async () => {
  if (!getBacktestRows().length) {
    showToast("No backtest rows to clear.", "warning");
    return;
  }
  const confirmed = await askForConfirmation({
    eyebrow: "Clear backtests",
    title: "Clear all ORB backtest rows?",
    message: "This removes imported backtesting rows for this user. Journal trades are not affected.",
    confirmText: "Clear rows",
    tone: "warning",
  });
  if (!confirmed) return;
  await orbBacktestRequest({ action: "clear" });
  activeBacktestScenarioKey = "";
  await loadOrbBacktests({ showLoading: false });
  showToast("Backtest rows cleared", "warning");
});

trainingContent.addEventListener("click", (event) => {
  const answerButton = event.target.closest("[data-training-answer]");
  if (!answerButton) return;
  const progress = getTrainingProgress();
  appConfig.trainingProgress = {
    ...appConfig.trainingProgress,
    [activeTrainingChapterId]: {
      ...progress,
      step: trainingStepIndex,
      answers: { ...(progress.answers || {}), [trainingStepIndex]: Number(answerButton.dataset.trainingAnswer) },
    },
  };
  saveConfig();
  renderTraining();
});
continueTrainingButton.addEventListener("click", () => openTrainingWorkspace(continueTrainingButton.dataset.trainingChapter));
backToTrainingHome.addEventListener("click", showTrainingHome);
trainingPathNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-training-path]");
  if (!button) return;
  activeTrainingPathId = button.dataset.trainingPath;
  activeTrainingChapterId = getTrainingPathChapters()[0].id;
  renderTraining();
});
trainingChapterGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-training-chapter]");
  if (button && !button.disabled) openTrainingWorkspace(button.dataset.trainingChapter);
});
trainingStepList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-training-step]");
  if (!button) return;
  trainingStepIndex = Number(button.dataset.trainingStep);
  renderTraining();
});
trainingBackButton.addEventListener("click", () => {
  trainingStepIndex = Math.max(0, trainingStepIndex - 1);
  renderTraining();
});
trainingNextButton.addEventListener("click", () => {
  const progress = getTrainingProgress();
  const steps = getActiveTrainingSteps();
  if (trainingStepIndex < steps.length - 1) {
    trainingStepIndex += 1;
    appConfig.trainingProgress = { ...appConfig.trainingProgress, [activeTrainingChapterId]: { ...progress, step: trainingStepIndex } };
    saveConfig();
    renderTraining();
    return;
  }
  appConfig.trainingProgress = { ...appConfig.trainingProgress, [activeTrainingChapterId]: { ...progress, completed: true, completedAt: new Date().toISOString() } };
  saveConfig();
  showTrainingHome();
  showToast("Chapter completed");
});
restartTrainingButton.addEventListener("click", async () => {
  const confirmed = await askForConfirmation({ title: "Restart this module?", message: "Your answers and completion progress will be cleared.", confirmText: "Restart", tone: "warning" });
  if (!confirmed) return;
  trainingStepIndex = 0;
  appConfig.trainingProgress = { ...appConfig.trainingProgress, [activeTrainingChapterId]: { answers: {}, completed: false, step: 0 } };
  saveConfig();
  renderTraining();
});

onboardingConfigButton.addEventListener("click", () => {
  closeDialog(onboardingModal);
  openOnboardingWizard();
});

closeWizardButton.addEventListener("click", () => {
  dismissOnboardingForSession();
  closeDialog(onboardingWizardModal);
});

[onboardingModal, onboardingWizardModal].forEach((modal) => {
  modal.addEventListener("cancel", () => dismissOnboardingForSession());
});

wizardBackButton.addEventListener("click", () => {
  if (onboardingStepIndex === 0) {
    return;
  }
  stashWizardStep();
  onboardingStepIndex -= 1;
  renderOnboardingWizard();
});

wizardNextButton.addEventListener("click", () => {
  if (!persistWizardStep()) {
    return;
  }

  if (onboardingStepIndex === getOnboardingSteps().length - 1) {
    saveOnboardingWizard();
    return;
  }

  onboardingStepIndex += 1;
  renderOnboardingWizard();
});

wizardContent.addEventListener("click", (event) => {
  const ruleAddButton = event.target.closest("[data-wizard-rule-add]");
  if (ruleAddButton) {
    const type = wizardContent.querySelector("[data-wizard-rule-type]")?.value;
    const value = wizardContent.querySelector("[data-wizard-rule-value]")?.value;
    if (type && Number(value) > 0) {
      onboardingDraft.automatedRules = [...onboardingDraft.automatedRules.filter((rule) => rule.type !== type), { type, value }];
      renderOnboardingWizard();
    }
    return;
  }

  const ruleRemoveButton = event.target.closest("[data-wizard-rule-remove]");
  if (ruleRemoveButton) {
    onboardingDraft.automatedRules = onboardingDraft.automatedRules.filter((rule) => rule.type !== ruleRemoveButton.dataset.wizardRuleRemove);
    renderOnboardingWizard();
    return;
  }

  const addButton = event.target.closest("[data-wizard-add-value]");
  if (addButton) {
    const builder = addButton.closest("[data-wizard-builder]");
    const input = builder?.querySelector("[data-wizard-add-input]");
    if (builder && input) {
      addWizardValue(builder, input);
    }
    return;
  }

  const removeButton = event.target.closest("[data-wizard-remove-value]");
  if (removeButton) {
    const builder = removeButton.closest("[data-wizard-builder]");
    if (builder) {
      removeWizardValue(builder, removeButton.dataset.wizardRemoveValue);
    }
  }
});

wizardContent.addEventListener("change", (event) => {
  if (event.target.matches("[data-wizard-symbol-choice]")) {
    const marketType = event.target.dataset.marketType;
    const selected = [...wizardContent.querySelectorAll(`[data-wizard-symbol-choice][data-market-type="${marketType}"]:checked`)].map((input) => input.value);
    onboardingDraft.symbolsByMarket = { ...onboardingDraft.symbolsByMarket, [marketType]: selected };
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
    onboardingDraft.symbolMarketMap = normalizeSymbolMarketMap(SYMBOL_MARKET_MAP, onboardingDraft.symbols);
    updateWizardNextState();
    return;
  }
  if (event.target.matches("[data-wizard-new-symbol-market]")) {
    const builder = event.target.closest('[data-wizard-builder="symbols"]');
    const button = builder?.querySelector("[data-wizard-add-value]");
    if (button) button.disabled = !builder.querySelector("[data-wizard-add-input]")?.value.trim() || !event.target.value;
    return;
  }
  if (event.target.matches("[data-wizard-predefined-strategy]")) {
    const selected = [...wizardContent.querySelectorAll("[data-wizard-predefined-strategy]:checked")].map((input) => input.value);
    const custom = onboardingDraft.strategies.filter((strategy) => !PREDEFINED_STRATEGIES.includes(strategy));
    onboardingDraft.strategies = normalizeStrategies([...selected, ...custom], []);
    renderOnboardingWizard();
    return;
  }
  if (event.target.matches("[data-wizard-blocked-day]")) {
    onboardingDraft.blockedTradingDays = normalizeOptions(
      [...wizardContent.querySelectorAll("[data-wizard-blocked-day]:checked")].map((input) => input.value),
      [],
    );
    renderOnboardingWizard();
  }
});

wizardContent.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !event.target.matches("[data-wizard-add-input]")) {
    return;
  }

  event.preventDefault();
  const builder = event.target.closest("[data-wizard-builder]");
  if (builder) {
    addWizardValue(builder, event.target);
  }
});

wizardContent.addEventListener("input", updateWizardNextState);
wizardContent.addEventListener("input", (event) => {
  if (event.target.matches("[data-wizard-add-input]")) {
    const symbolBuilder = event.target.closest('[data-wizard-builder="symbols"]');
    const button = symbolBuilder?.querySelector("[data-wizard-add-value]");
    if (button) button.disabled = !event.target.value.trim() || !symbolBuilder.querySelector("[data-wizard-new-symbol-market]")?.value;
  }
  const account = event.target.dataset.account;
  const setting = event.target.dataset.wizardAccountSetting;
  if (!account || !setting) {
    return;
  }

  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value.trim();
  onboardingDraft.accountSettings = {
    ...onboardingDraft.accountSettings,
    [account]: { ...(onboardingDraft.accountSettings?.[account] || {}), [setting]: value },
  };
  if (setting === "startingBalance") onboardingDraft.accountBalances = { ...onboardingDraft.accountBalances, [account]: value };
  if (setting === "isProp") renderOnboardingWizard();
});
wizardContent.addEventListener("change", updateWizardNextState);
wizardContent.addEventListener("change", (event) => {
  const account = event.target.dataset.account;
  const setting = event.target.dataset.wizardAccountSetting;
  if (!account || !setting || event.target.type === "checkbox") return;
  onboardingDraft.accountSettings = {
    ...onboardingDraft.accountSettings,
    [account]: { ...(onboardingDraft.accountSettings?.[account] || {}), [setting]: event.target.value },
  };
});

analyticsTabButtons.forEach((button) => {
  button.addEventListener("click", () => showAnalyticsTab(button.dataset.analyticsTab));
});

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName);
  if (event.key === "Escape") {
    [tradeModal, configModal, noteModal, resetPasscodeModal, tradeDetailDrawer, onboardingModal, onboardingWizardModal].forEach((modal) => {
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

function syncChallengeFormType() {
  const type = challengeForm.elements.challengeType.value;
  const isProp = type === "prop";
  const isCustom = type === "custom";
  challengeForm.querySelectorAll("[data-challenge-fields]").forEach((section) => {
    section.classList.toggle("hidden", section.dataset.challengeFields !== type);
  });
  ["session", "standardMarket", "startDate", "endDate"].forEach((name) => {
    challengeForm.elements[name].required = type === "orb";
  });
  ["propStartDate", "propEndDate", "startingBalance", "profitTargetPercent", "dailyDrawdownPercent", "maxDrawdownPercent"].forEach((name) => {
    challengeForm.elements[name].required = isProp;
  });
  ["customStartDate", "customEndDate"].forEach((name) => {
    challengeForm.elements[name].required = isCustom;
  });
  challengeFormEyebrow.textContent = isProp ? "Prop challenge" : isCustom ? "Custom challenge" : "ORB challenge";
  challengeFormHelp.textContent = isProp
    ? "Every linked journal trade contributes to progress. The leaderboard ranks profit percentage against the shared virtual starting balance."
    : isCustom
      ? "Use a custom challenge for flexible group competitions. Any linked journal trade counts and the leaderboard ranks points, then wins."
    : "The leaderboard ranks total points gained, then wins. When flips are enabled, the second trade must use the opposite direction.";
  challengeForm.elements.name.placeholder = isProp ? "e.g. 50K Prop Challenge" : isCustom ? "e.g. June Consistency Challenge" : "e.g. London ORB Challenge";
}

challengeForm.elements.challengeType.addEventListener("change", syncChallengeFormType);

openCreateChallengeButton.addEventListener("click", () => {
  const today = new Date();
  const end = new Date(today);
  end.setDate(end.getDate() + 29);
  challengeForm.reset();
  challengeForm.elements.challengeType.value = "orb";
  challengeForm.elements.startDate.value = toDateKey(today);
  challengeForm.elements.endDate.value = toDateKey(end);
  challengeForm.elements.propStartDate.value = toDateKey(today);
  challengeForm.elements.propEndDate.value = toDateKey(end);
  challengeForm.elements.customStartDate.value = toDateKey(today);
  challengeForm.elements.customEndDate.value = toDateKey(end);
  challengeForm.elements.challengeId.value = "";
  challengeFormTitle.textContent = "Create a challenge";
  saveChallengeButton.textContent = "Create challenge";
  syncChallengeFormType();
  openDialog(challengeModal);
});
document.querySelector("#closeChallengeModalButton").addEventListener("click", () => closeDialog(challengeModal));
document.querySelector("#cancelChallengeButton").addEventListener("click", () => closeDialog(challengeModal));
document.querySelector("#closeInviteChallengeButton").addEventListener("click", () => closeDialog(inviteChallengeModal));
document.querySelector("#cancelInviteChallengeButton").addEventListener("click", () => closeDialog(inviteChallengeModal));

challengeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = challengeForm.querySelector('[type="submit"]');
  setButtonLoading(submitButton, true);
  try {
    const values = Object.fromEntries(new FormData(challengeForm));
    await challengeRequest({ action: values.challengeId ? "update" : "create", ...values });
    challengeForm.reset();
    closeDialog(challengeModal);
    await loadChallenges({ showLoading: false });
    showToast(values.challengeId ? "Challenge updated" : "Challenge created");
  } catch (error) {
    showToast(error.message, "warning");
  } finally {
    setButtonLoading(submitButton, false);
  }
});

inviteChallengeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = inviteChallengeForm.querySelector('[type="submit"]');
  setButtonLoading(submitButton, true);
  try {
    const values = Object.fromEntries(new FormData(inviteChallengeForm));
    await challengeRequest({ action: "invite", challengeId: values.challengeId, email: values.email });
    inviteChallengeForm.reset();
    closeDialog(inviteChallengeModal);
    await loadChallenges({ showLoading: false });
    showToast("Invitation sent");
  } catch (error) {
    showToast(error.message, "warning");
  } finally {
    setButtonLoading(submitButton, false);
  }
});

challengeGrid.addEventListener("click", async (event) => {
  if (event.target.closest("[data-create-first-challenge]")) {
    openCreateChallengeButton.click();
    return;
  }
  if (event.target.closest("[data-retry-challenges]")) {
    await loadChallenges({ showLoading: false });
    return;
  }
  const inviteButton = event.target.closest("[data-challenge-invite]");
  if (inviteButton) {
    const challenge = challenges.find((item) => item.id === inviteButton.dataset.challengeInvite);
    inviteChallengeForm.elements.challengeId.value = challenge.id;
    inviteChallengeTitle.textContent = `Invite to ${challenge.name}`;
    openDialog(inviteChallengeModal);
    return;
  }
  const editButton = event.target.closest("[data-challenge-edit]");
  if (editButton) {
    const challenge = challenges.find((item) => item.id === editButton.dataset.challengeEdit);
    if (!challenge) return;
    challengeForm.elements.challengeId.value = challenge.id;
    challengeForm.elements.challengeType.value = challenge.challenge_type || "orb";
    challengeForm.elements.name.value = challenge.name || "";
    challengeForm.elements.description.value = challenge.description || "";
    challengeForm.elements.session.value = challenge.rules_json?.session || "";
    challengeForm.elements.standardMarket.value = challenge.rules_json?.standardMarket || "";
    challengeForm.elements.startDate.value = String(challenge.starts_at || "").slice(0, 10);
    challengeForm.elements.endDate.value = String(challenge.ends_at || "").slice(0, 10);
    challengeForm.elements.tradeRule.value = challenge.rules_json?.tradeRule || "initial-only";
    challengeForm.elements.propStartDate.value = String(challenge.starts_at || "").slice(0, 10);
    challengeForm.elements.propEndDate.value = String(challenge.ends_at || "").slice(0, 10);
    challengeForm.elements.customStartDate.value = String(challenge.starts_at || "").slice(0, 10);
    challengeForm.elements.customEndDate.value = String(challenge.ends_at || "").slice(0, 10);
    challengeForm.elements.startingBalance.value = challenge.rules_json?.startingBalance || "";
    challengeForm.elements.profitTargetPercent.value = challenge.rules_json?.profitTargetPercent || "";
    challengeForm.elements.dailyDrawdownPercent.value = challenge.rules_json?.dailyDrawdownPercent || "";
    challengeForm.elements.maxDrawdownPercent.value = challenge.rules_json?.maxDrawdownPercent || "";
    challengeFormTitle.textContent = "Edit challenge";
    saveChallengeButton.textContent = "Save changes";
    syncChallengeFormType();
    openDialog(challengeModal);
    return;
  }
  const deleteButton = event.target.closest("[data-challenge-delete]");
  if (deleteButton) {
    const challenge = challenges.find((item) => item.id === deleteButton.dataset.challengeDelete);
    if (!challenge) return;
    const confirmed = await askForConfirmation({
      eyebrow: "Delete challenge",
      title: `Delete ${challenge.name}?`,
      message: "This removes the challenge and all invitations. Existing journal trades will remain, but will no longer contribute to a leaderboard.",
      confirmText: "Delete challenge",
      tone: "danger",
    });
    if (!confirmed) return;
    setButtonLoading(deleteButton, true);
    try {
      await challengeRequest({ action: "delete", challengeId: challenge.id });
      await loadChallenges({ showLoading: false });
      showToast("Challenge deleted", "warning");
    } catch (error) {
      showToast(error.message, "warning");
      setButtonLoading(deleteButton, false);
    }
    return;
  }
  const responseButton = event.target.closest("[data-challenge-response]");
  if (!responseButton) return;
  setButtonLoading(responseButton, true);
  try {
    await challengeRequest({ action: "respond", challengeId: responseButton.dataset.challengeId, response: responseButton.dataset.challengeResponse });
    await loadChallenges();
    showToast(responseButton.dataset.challengeResponse === "accepted" ? "Challenge accepted" : "Invitation declined");
  } catch (error) {
    showToast(error.message, "warning");
    setButtonLoading(responseButton, false);
  }
});

async function initialiseApp() {
  const pageParams = new URLSearchParams(window.location.search);
  const requestedView = pageParams.get("view");
  syncConfiguredInputs();
  resetForm();
  resetCalculator();
  render();
  await initialisePasscodeGate();
  navigateToRoute(requestedView || "dashboard", { replace: true });
  window.requestAnimationFrame(maybeOpenConfigForNewUser);
}

initialiseApp();
