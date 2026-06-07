const AUTH_STORAGE_KEY = "trade-tools:unlocked";
const AUTH_LABEL_KEY = "trade-tools:unlocked-label";
const AUTH_EMAIL_KEY = "trade-tools:unlocked-email";
const AUTH_ROLE_KEY = "trade-tools:unlocked-role";
const AUTH_HASH_KEY = "trade-tools:unlocked-passcode-hash";
const AUTH_TRIAL_ENABLED_KEY = "trade-tools:unlocked-trial-enabled";
const AUTH_TRIAL_ENDS_KEY = "trade-tools:unlocked-trial-ends";
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
const sessionField = document.querySelector("#sessionField");
const lotsField = document.querySelector("#lotsField");
const contractsField = document.querySelector("#contractsField");
const notesDisclosure = document.querySelector("#notesDisclosure");
const priceDetailsDisclosure = document.querySelector("#priceDetailsDisclosure");
const pricePointsPreview = document.querySelector("#pricePointsPreview");
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
const hubNewsButton = document.querySelector("#hubNewsButton");
const hubReviewButton = document.querySelector("#hubReviewButton");
const reviewWeekRange = document.querySelector("#reviewWeekRange");
const reviewPrevWeek = document.querySelector("#reviewPrevWeek");
const reviewNextWeek = document.querySelector("#reviewNextWeek");
const reviewSummaryGrid = document.querySelector("#reviewSummaryGrid");
const reviewInsights = document.querySelector("#reviewInsights");
const reviewTradesList = document.querySelector("#reviewTradesList");
const weeklyReviewForm = document.querySelector("#weeklyReviewForm");
const saveWeeklyReviewButton = document.querySelector("#saveWeeklyReviewButton");
const reviewTabStatus = document.querySelector("#reviewTabStatus");
const trainingProgressBar = document.querySelector("#trainingProgressBar");
const trainingHome = document.querySelector("#trainingHome");
const trainingLessonWorkspace = document.querySelector("#trainingLessonWorkspace");
const trainingChapterGrid = document.querySelector("#trainingChapterGrid");
const trainingCourseProgress = document.querySelector("#trainingCourseProgress");
const trainingCourseProgressBar = document.querySelector("#trainingCourseProgressBar");
const continueTrainingButton = document.querySelector("#continueTrainingButton");
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
  symbolsByMarket: {
    CFD: [],
    Futures: [],
  },
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

function getSessionLocalDate(timeZone, hour) {
  const now = new Date();
  const zoneDate = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now).filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  const estimate = new Date(Date.UTC(Number(zoneDate.year), Number(zoneDate.month) - 1, Number(zoneDate.day), hour));
  return new Date(estimate.getTime() - getTimeZoneOffset(estimate, timeZone));
}

function getSessionDisplayLabel(session) {
  const definition = SESSION_DEFINITIONS[session];
  if (!definition) return session;
  const formatter = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
  return `${session} (${formatter.format(getSessionLocalDate(definition.timeZone, definition.start))}–${formatter.format(getSessionLocalDate(definition.timeZone, definition.end))} local)`;
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
    description: "Add the markets you want available when recording a trade, such as XAUUSD, NAS100, or ES.",
    placeholder: "Example: XAUUSD, NAS100",
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
const TRAINING_STEP_MAP = {
  [TRAINING_MODULE_ID]: TRAINING_STEPS,
  "candlestick-anatomy": CANDLESTICK_ANATOMY_STEPS,
  "single-candle-patterns": SINGLE_CANDLE_PATTERN_STEPS,
  "price-movement": PRICE_MOVEMENT_STEPS,
  "multi-candle-patterns": MULTI_CANDLE_PATTERN_STEPS,
  "context-application": CONTEXT_APPLICATION_STEPS,
  "candlestick-assessment": FINAL_ASSESSMENT_STEPS,
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
let reviewWeekOffset = 0;
let trainingStepIndex = 0;
let trainingWorkspaceOpen = false;
let activeTrainingChapterId = TRAINING_MODULE_ID;
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
        <h2>No events found</h2>
        <p>${newsFilter === "today" ? "No economic events found for today." : "No economic events found for the next week."}</p>
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
) {
  document.body.classList.add("app-checking");
  passcodeGate.setAttribute("hidden", "");
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
  document.body.classList.remove("auth-locked", "app-checking");
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
    const marketTypes = normalizeMarketTypes(remoteData.config?.marketTypes);
    const symbolsByMarket = normalizeSymbolsByMarket(remoteData.config?.symbolsByMarket, remoteData.config?.symbols);
    appConfig = {
      symbols: flattenSymbolsByMarket(symbolsByMarket),
      symbolsByMarket,
      sessions: Boolean(remoteData.config?.trackSessions) ? normalizeSessions(remoteData.config?.sessions, DEFAULT_CONFIG.sessions) : [],
      trackSessions: Boolean(remoteData.config?.trackSessions),
      accounts: normalizeOptions(remoteData.config?.accounts, DEFAULT_CONFIG.accounts),
      strategies: normalizeStrategies(remoteData.config?.strategies, DEFAULT_CONFIG.strategies),
      marketTypes,
      accountBalances: normalizeAccountBalances(remoteData.config?.accountBalances, remoteData.config?.accounts),
      accountSettings: normalizeAccountSettings(remoteData.config?.accountSettings, remoteData.config?.accounts, remoteData.config?.accountBalances),
      checklistRules: normalizeOptions(remoteData.config?.checklistRules ?? remoteData.config?.tradingRules, DEFAULT_CONFIG.checklistRules),
      automatedRules: Array.isArray(remoteData.config?.automatedRules) ? remoteData.config.automatedRules : [],
      blockedTradingDays: normalizeOptions(remoteData.config?.blockedTradingDays, []),
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

function normalizeOptions(options, fallback) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter(Boolean)
    : [];
  const uniqueOptions = [...new Set(cleaned)];
  return uniqueOptions.length ? uniqueOptions : [...fallback];
}

function normalizeStrategies(options, fallback = []) {
  return normalizeOptions(options, fallback).filter((option) => option.toUpperCase() !== "N/A");
}

function normalizeMarketTypes(options) {
  const cleaned = Array.isArray(options)
    ? options.map((option) => String(option).trim()).filter((option) => MARKET_TYPE_OPTIONS.includes(option))
    : [];
  return [...new Set(cleaned)];
}

function normalizeSymbolsByMarket(symbolsByMarket = {}, fallbackSymbols = []) {
  const fallback = normalizeOptions(fallbackSymbols, []);
  return MARKET_TYPE_OPTIONS.reduce((normalized, marketType) => {
    normalized[marketType] = normalizeOptions(symbolsByMarket?.[marketType], marketType === "CFD" ? fallback : []);
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

function hasTradePriceDetails(trade) {
  return trade.entryPrice !== undefined && trade.entryPrice !== "" && trade.exitPrice !== undefined && trade.exitPrice !== "";
}

function getTradePoints(trade) {
  if (!hasTradePriceDetails(trade)) {
    return null;
  }

  const entry = parseNumber(trade.entryPrice);
  const exit = parseNumber(trade.exitPrice);
  const direction = trade.direction === "Sell" ? "Sell" : "Buy";
  const points = direction === "Sell" ? entry - exit : exit - entry;
  return Number.isFinite(points) ? points : null;
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
  });

  pricePointsPreview.classList.toggle("positive", points > 0);
  pricePointsPreview.classList.toggle("negative", points < 0);
  pricePointsPreview.classList.toggle("flat", points === null || points === 0);

  if (valueEl) {
    valueEl.textContent = formatPoints(points);
  }
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
      const points = getTradePoints(trade);
      const note = trade.notes || "";
      const hasNote = Boolean(note.trim());
      const isTruncated = note.trim().length > 56;
      const row = document.createElement("tr");
      row.dataset.tradeId = trade.id;
      row.className = `trade-row ${getOutcomeClass(trade.outcome)}`;
      row.innerHTML = `
        <td data-label="Date">${trade.tradeDate}</td>
        <td data-label="Symbol" class="symbol-cell">${escapeHtml(trade.symbol)}</td>
        <td data-label="Market">${escapeHtml(getTradeMarketType(trade))}</td>
        <td data-label="Session" data-session-column>${escapeHtml(trade.session || getDefaultOption("sessions"))}</td>
        <td data-label="Account">${escapeHtml(trade.account || getDefaultOption("accounts"))}</td>
        <td data-label="Strategy">${escapeHtml(trade.strategy || "-")}</td>
        <td data-label="Size Type">${getTradeSizeType(trade)}</td>
        <td data-label="Size">${formatTradeSize(trade)}</td>
        <td data-label="Points" class="${getPointsClass(points)}">${formatPoints(points)}</td>
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
  emptyState.querySelector("h2").textContent = trades.length ? "No trades match" : "No trades yet";
  emptyState.querySelector("p").textContent = trades.length
    ? "Adjust your filters to bring trades back into view."
    : "Configure your inputs, then add your first trade to start building your journal.";
  tablePagination.classList.toggle("hidden", visibleTrades.length === 0);
  paginationStatus.textContent = visibleTrades.length
    ? `Showing ${pageStart + 1}-${Math.min(pageEnd, visibleTrades.length)} of ${visibleTrades.length} trades`
    : "Showing 0 trades";
  prevPageButton.disabled = currentTablePage <= 1;
  nextPageButton.disabled = currentTablePage >= totalPages;
  syncSessionVisibility();
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
  return [...limitBreaches, ...getPlanRestrictionBreaches(trade)];
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
  syncSessionVisibility();
  renderSummary();
  renderEquityCurve();
  renderAnalytics();
  renderPerformanceCalendar();
  renderStrategyBreakdown();
  renderAccountBalances();
  renderTable();
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

function renderTraining() {
  if (!trainingContent) return;
  const progress = getTrainingProgress();
  const completedChapters = TRAINING_CHAPTERS.filter((chapter) => getTrainingProgress(chapter.id).completed).length;
  const coursePercent = Math.round((completedChapters / TRAINING_CHAPTERS.length) * 100);
  trainingCourseProgress.textContent = `${coursePercent}%`;
  trainingCourseProgressBar.style.width = `${coursePercent}%`;
  continueTrainingButton.textContent = progress.completed ? "Review chapter" : progress.step ? "Continue learning" : "Start learning";
  trainingChapterGrid.innerHTML = TRAINING_CHAPTERS.map((chapter) => {
    const chapterIndex = TRAINING_CHAPTERS.findIndex((item) => item.id === chapter.id);
    const available = Boolean(TRAINING_STEP_MAP[chapter.id]) && (chapterIndex === 0 || getTrainingProgress(TRAINING_CHAPTERS[chapterIndex - 1].id).completed);
    const chapterProgress = getTrainingProgress(chapter.id);
    const chapterSteps = TRAINING_STEP_MAP[chapter.id] || [];
    const chapterPercent = chapterProgress.completed ? 100 : Math.round(((chapterProgress.step || 0) / Math.max(1, chapterSteps.length)) * 100);
    return `<article class="training-chapter-card ${available ? "" : "locked"}">
      <div class="training-chapter-visual">${trainingCandleSvg(chapter.id === TRAINING_MODULE_ID ? "patterns" : chapter.id === "single-candle-patterns" ? "doji" : chapter.id === "multi-candle-patterns" ? "patterns" : "context")}</div>
      <div class="training-chapter-content">
        <div class="training-chapter-heading"><span>Chapter ${chapter.number}</span><small>${available ? `${chapterPercent}% complete` : "Coming next"}</small></div>
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
    railEyebrow.textContent = `Chapter ${activeChapter.number}`;
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

function renderWeeklyReview() {
  if (!reviewSummaryGrid) return;
  const { weekdays, startKey, end, weekTrades } = getWeeklyReviewContext();
  const wins = weekTrades.filter((trade) => trade.outcome === "Win").length;
  const losses = weekTrades.filter((trade) => trade.outcome === "Loss").length;
  const amount = weekTrades.reduce((total, trade) => total + getTradeAmount(trade), 0);
  const points = weekTrades.reduce((total, trade) => total + (getTradePoints(trade) || 0), 0);
  const breaches = weekTrades.reduce((total, trade) => total + (trade.ruleBreaches?.length || 0), 0);
  const bestStrategy = getTopReviewValue(weekTrades, "strategy");
  const bestSymbol = getTopReviewValue(weekTrades, "symbol");
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
    <div><span>Best strategy</span><strong>${escapeHtml(bestStrategy?.[0] || "-")}</strong><small>${bestStrategy ? formatSummaryAmount(bestStrategy[1].amount) : "No data"}</small></div>
    <div><span>Best symbol</span><strong>${escapeHtml(bestSymbol?.[0] || "-")}</strong><small>${bestSymbol ? formatSummaryAmount(bestSymbol[1].amount) : "No data"}</small></div>
    <div><span>Most common mistake</span><strong>${escapeHtml(mistakes[0]?.count ? mistakes[0].label : "-")}</strong><small>${mistakes[0]?.count || 0} recorded</small></div>
    <div><span>Continued after warning</span><strong>${weekTrades.filter((trade) => trade.continuedAfterRuleWarnings?.length).length}</strong><small>trades</small></div>
  `;
  reviewTradesList.innerHTML = weekTrades.length
    ? weekTrades.slice().sort((a, b) => b.tradeDate.localeCompare(a.tradeDate)).map((trade) => `<button type="button" data-review-trade="${trade.id}"><span>${escapeHtml(trade.tradeDate)} · ${escapeHtml(trade.symbol)}</span><strong class="${getTradeAmount(trade) > 0 ? "amount-win" : getTradeAmount(trade) < 0 ? "amount-loss" : ""}">${formatSummaryAmount(getTradeAmount(trade))}</strong></button>`).join("")
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
    section.innerHTML = `
      <div class="config-section-heading">
        <h3>${escapeHtml(marketType)} Symbol(s)</h3>
        <div class="config-add-row">
          <input type="text" placeholder="Add ${escapeHtml(marketType.toLowerCase())} symbol" aria-label="Add ${escapeHtml(marketType)} symbol" />
          <button class="ghost-button" type="button" data-config-action="add" data-config-key="symbolsByMarket" data-market-type="${escapeHtml(marketType)}">Add</button>
        </div>
      </div>
      <div class="config-list">
        ${
          symbols.length
            ? symbols
                .map(
                  (option) => `
                    <span class="config-pill">
                      ${escapeHtml(option)}
                      <button type="button" aria-label="Remove ${escapeHtml(option)}" data-config-action="remove" data-config-key="symbolsByMarket" data-market-type="${escapeHtml(marketType)}" data-config-value="${escapeHtml(option)}">x</button>
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
    const section = document.createElement("section");
    section.className = "config-section";
    section.dataset.configPanel = field.key === "accounts" ? "accounts" : "strategies";
    section.dataset.configKey = field.key;
    section.innerHTML = `
      <div class="config-section-heading">
        <h3>${escapeHtml(field.label)}(s)</h3>
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
  balanceSection.innerHTML = `
    <div class="config-section-heading">
      <h3>Account Detail(s)</h3>
    </div>
    <div class="account-settings-list">
      ${
        appConfig.accounts.length
          ? appConfig.accounts
              .map(
                (account) => `
                  <article class="account-settings-card">
                    <div class="account-settings-head">
                      <strong>${escapeHtml(account)}</strong>
                      <label class="compact-check"><input type="checkbox" data-account-setting="isProp" data-account="${escapeHtml(account)}" ${appConfig.accountSettings?.[account]?.isProp ? "checked" : ""} /><span>Prop account</span></label>
                    </div>
                    <div class="account-settings-fields ${appConfig.accountSettings?.[account]?.isProp ? "" : "regular"}">
                      <label><span>Starting balance</span><input type="number" min="0" step="0.01" value="${escapeHtml(appConfig.accountSettings?.[account]?.startingBalance || appConfig.accountBalances?.[account] || "")}" placeholder="0.00" data-account-setting="startingBalance" data-account="${escapeHtml(account)}" /></label>
                      <label class="prop-only"><span>Daily drawdown</span><input type="number" min="0" step="0.01" value="${escapeHtml(appConfig.accountSettings?.[account]?.dailyDrawdown || "")}" placeholder="Optional" data-account-setting="dailyDrawdown" data-account="${escapeHtml(account)}" /></label>
                      <label class="prop-only"><span>Maximum drawdown</span><input type="number" min="0" step="0.01" value="${escapeHtml(appConfig.accountSettings?.[account]?.maxDrawdown || "")}" placeholder="Optional" data-account-setting="maxDrawdown" data-account="${escapeHtml(account)}" /></label>
                      <label class="prop-only"><span>Timeframe to complete</span><div class="input-with-suffix"><input type="number" min="1" step="1" value="${escapeHtml(appConfig.accountSettings?.[account]?.timeframeDays || "")}" placeholder="Optional" data-account-setting="timeframeDays" data-account="${escapeHtml(account)}" /><span>days</span></div></label>
                    </div>
                  </article>
                `,
              )
              .join("")
          : '<span class="muted">Add accounts first.</span>'
      }
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
  if (!userHasStartedConfig() && !configModal.open && !onboardingModal.open && !onboardingWizardModal.open) {
    openDialog(onboardingModal);
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
        <div>
          <input type="text" placeholder="${escapeHtml(placeholder)}" data-wizard-add-input />
          <button class="ghost-button" type="button" data-wizard-add-value>Add</button>
        </div>
      </label>
      <div class="wizard-chip-list">
        ${
          values.length
            ? values
                .map(
                  (value) => `
                    <span class="config-pill">
                      ${escapeHtml(value)}
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
        <div>
          <input type="text" placeholder="Example: Vantage" data-wizard-add-input />
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
                      <strong>${escapeHtml(account)}</strong>
                      <label>
                        <span>Starting balance</span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          value="${escapeHtml(onboardingDraft.accountBalances?.[account] || "")}"
                          data-wizard-account-balance="${escapeHtml(account)}"
                        />
                      </label>
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
  wizardProgress.textContent = `Step ${onboardingStepIndex + 1} of ${steps.length}`;
  wizardBackButton.disabled = onboardingStepIndex === 0;
  wizardNextButton.textContent = isSummary ? "Save setup" : "Next";
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
          (marketType) => `
            ${renderWizardValueBuilder({
              key: "symbols",
              label: `${marketType} Symbols`,
              placeholder: marketType === "Futures" ? "Example: MNQ" : "Example: XAUUSD",
              values: onboardingDraft.symbolsByMarket?.[marketType] || [],
              marketType,
            })}
          `,
        ).join("")}
      </div>
      <p class="wizard-hint">Add one symbol at a time. Use Configure inputs later if you need to make changes.</p>
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
  onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, onboardingDraft.symbols);
  onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
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
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, onboardingDraft.symbols);
    return true;
  }

  if (step.key === "symbols") {
    const missingMarket = onboardingDraft.marketTypes.find((marketType) => !(onboardingDraft.symbolsByMarket?.[marketType] || []).length);
    if (missingMarket) {
      showToast(`Add at least one ${missingMarket} symbol`, "warning");
      wizardContent.querySelector(`[data-wizard-market-type-value="${missingMarket}"] [data-wizard-add-input]`)?.focus();
      return false;
    }
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, []);
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
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
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, onboardingDraft.symbols);
    return;
  }

  if (step.key === "symbols") {
    onboardingDraft.symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, []);
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
  if (key === "strategies" && values.some((value) => value.toUpperCase() === "N/A")) {
    showToast("N/A is only available for sessions.", "warning");
    input.focus();
    return;
  }

  if (key === "symbols") {
    const current = onboardingDraft.symbolsByMarket?.[marketType] || [];
    onboardingDraft.symbolsByMarket = {
      ...onboardingDraft.symbolsByMarket,
      [marketType]: normalizeOptions([...current, ...values], []),
    };
    onboardingDraft.symbols = flattenSymbolsByMarket(onboardingDraft.symbolsByMarket);
  } else {
    onboardingDraft[key] = normalizeOptions([...(onboardingDraft[key] || []), ...values], []);
    if (key === "accounts") {
      onboardingDraft.accountBalances = onboardingDraft[key].reduce(
        (balances, account) => ({ ...balances, [account]: onboardingDraft.accountBalances?.[account] || "" }),
        {},
      );
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
  } else {
    onboardingDraft[key] = (onboardingDraft[key] || []).filter((item) => item !== value);
    if (key === "accounts") {
      onboardingDraft.accountBalances = onboardingDraft[key].reduce(
        (balances, account) => ({ ...balances, [account]: onboardingDraft.accountBalances?.[account] || "" }),
        {},
      );
    }
  }

  renderOnboardingWizard();
}

function saveOnboardingWizard() {
  const symbolsByMarket = normalizeSymbolsByMarket(onboardingDraft.symbolsByMarket, onboardingDraft.symbols);
  appConfig = {
    symbols: flattenSymbolsByMarket(symbolsByMarket),
    symbolsByMarket,
    sessions: onboardingDraft.trackSessions ? normalizeSessions(onboardingDraft.sessions, []) : [],
    trackSessions: Boolean(onboardingDraft.trackSessions),
    accounts: normalizeOptions(onboardingDraft.accounts, []),
    strategies: normalizeStrategies(onboardingDraft.strategies, []),
    marketTypes: normalizeMarketTypes(onboardingDraft.marketTypes),
    accountBalances: normalizeAccountBalances(onboardingDraft.accountBalances, onboardingDraft.accounts),
    accountSettings: normalizeAccountSettings(onboardingDraft.accountSettings, onboardingDraft.accounts, onboardingDraft.accountBalances),
    checklistRules: normalizeOptions(appConfig.checklistRules, DEFAULT_CONFIG.checklistRules),
    automatedRules: Array.isArray(appConfig.automatedRules) ? appConfig.automatedRules : [],
    blockedTradingDays: normalizeOptions(appConfig.blockedTradingDays, []),
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

function addConfigValue(key, value, marketType = "") {
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
      [marketType]: [...currentSymbols, nextValue],
    };
    appConfig.symbols = getAllSymbols();
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

  appConfig[key] = [...appConfig[key], nextValue];
  if (key === "accounts") {
    appConfig.accountBalances = { ...appConfig.accountBalances, [nextValue]: "" };
    appConfig.accountSettings = { ...appConfig.accountSettings, [nextValue]: { isProp: false, startingBalance: "", dailyDrawdown: "", maxDrawdown: "", timeframeDays: "" } };
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

  ["enteredEarly", "movedSl", "overtraded", "exitedEarly", "heldTooLong"].forEach((key) => {
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

  return {
    id: existingId || crypto.randomUUID(),
    tradeDate: form.tradeDate.value,
    symbol: form.symbol.value,
    session: appConfig.trackSessions ? form.session.value : "",
    account: form.account.value,
    strategy: form.strategy.value,
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

  if ((trade.entryPrice && !trade.exitPrice) || (!trade.entryPrice && trade.exitPrice)) {
    return "Add both entry and exit prices to calculate points.";
  }

  return "";
}

function resetForm() {
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
  syncMarketTypeField();
  form.lots.value = "0.01";
  form.contracts.value = "1";
  syncSizeFields();
  form.outcome.value = "Pending";
  form.amount.value = "";
  form.direction.value = "Buy";
  form.entryPrice.value = "";
  form.exitPrice.value = "";
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
}

function startEdit(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) {
    return;
  }

  acknowledgedPreTradeRules = [];
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
  syncMarketTypeField();
  form.lots.value = formatLots(getTradeLots(trade));
  form.contracts.value = trade.contracts || "1";
  syncSizeFields();
  form.outcome.value = trade.outcome || "Pending";
  form.amount.value = trade.amount || "";
  form.direction.value = trade.direction === "Sell" ? "Sell" : "Buy";
  form.entryPrice.value = trade.entryPrice || "";
  form.exitPrice.value = trade.exitPrice || "";
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
    showToast(validationMessage, "warning");
    return;
  }

  trade.ruleBreaches = getAutomatedRuleBreaches(trade);
  const unacknowledgedBreaches = trade.ruleBreaches.filter((rule) => !trade.continuedAfterRuleWarnings.includes(rule.type));
  if (unacknowledgedBreaches.length) {
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
["direction", "entryPrice", "exitPrice"].forEach((name) => {
  form[name].addEventListener("input", updatePricePointsPreview);
  form[name].addEventListener("change", updatePricePointsPreview);
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
closeOnboardingButton.addEventListener("click", () => closeDialog(onboardingModal));
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
    const input = button.closest(".config-section").querySelector("input");
    addConfigValue(key, input.value, button.dataset.marketType || "");
    input.value = "";
  }

  if (button.dataset.configAction === "remove") {
    removeConfigValue(key, button.dataset.configValue, button.dataset.marketType || "");
  }
});

configGrid.addEventListener("change", (event) => {
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
  appConfig.symbolsByMarket = normalizeSymbolsByMarket(appConfig.symbolsByMarket, appConfig.symbols);
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
  addConfigValue(section.dataset.configKey, event.target.value, section.dataset.marketType || "");
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
    );
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

reviewPrevWeek.addEventListener("click", () => {
  reviewWeekOffset -= 1;
  renderWeeklyReview();
});
openWeeklyReviewButton.addEventListener("click", openWeeklyReview);
closeWeeklyReviewButton.addEventListener("click", closeWeeklyReview);
weeklyReviewBackdrop.addEventListener("click", closeWeeklyReview);
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
  showToast("Weekly review saved");
});
reviewTradesList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-trade]");
  if (button) openTradeDrawer(button.dataset.reviewTrade);
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
continueTrainingButton.addEventListener("click", openTrainingWorkspace);
backToTrainingHome.addEventListener("click", showTrainingHome);
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

closeWizardButton.addEventListener("click", () => closeDialog(onboardingWizardModal));

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
  const account = event.target.dataset.wizardAccountBalance;
  if (!account) {
    return;
  }

  onboardingDraft.accountBalances = {
    ...onboardingDraft.accountBalances,
    [account]: event.target.value.trim(),
  };
});
wizardContent.addEventListener("change", updateWizardNextState);

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

async function initialiseApp() {
  const pageParams = new URLSearchParams(window.location.search);
  const requestedView = pageParams.get("view");
  const standalone = pageParams.get("standalone");
  const activeRoute = standalone || "dashboard";
  document.querySelectorAll(".header-route-nav a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const route = href.includes("journal") ? "journal" : href.includes("calculator") ? "calculator" : href.includes("training") ? "training" : "dashboard";
    link.classList.toggle("active", route === activeRoute);
    if (route === activeRoute) link.setAttribute("aria-current", "page");
  });
  if (standalone) {
    document.body.classList.add("training-standalone");
  }
  syncConfiguredInputs();
  resetForm();
  resetCalculator();
  render();
  await initialisePasscodeGate();
  if (sessionStorage.getItem(AUTH_STORAGE_KEY)) {
    maybeOpenConfigForNewUser();
  }
  if (requestedView === "training") showView("trainingView");
  else if (requestedView === "tracker") showView("trackerView");
  else if (requestedView === "calculator") showView("calculatorView");
  else showView("dashboardView");
}

initialiseApp();
