const AUTH_STORAGE_KEY = "trade-tools:unlocked";
const AUTH_ROLE_KEY = "trade-tools:unlocked-role";
const AUTH_HASH_KEY = "trade-tools:unlocked-passcode-hash";
const USER_PASSCODE_SALT = "trade-tools-v1";
const PASSCODE_CHARACTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ2346789";

const adminGate = document.querySelector("#adminGate");
const adminAccessMessage = document.querySelector("#adminAccessMessage");
const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const emailInput = document.querySelector("#emailInput");
const roleInput = document.querySelector("#roleInput");
const statusInput = document.querySelector("#statusInput");
const trialDurationField = document.querySelector("#trialDurationField");
const trialWeeksInput = document.querySelector("#trialWeeksInput");
const newUserFeatureInputs = document.querySelectorAll("[data-new-user-feature]");
const FEATURE_KEYS = ["journal", "backtesting", "calculator", "training", "challenges"];

function normalizeFeatureAccess(access = {}, role = "user") {
  if (role === "admin") return Object.fromEntries(FEATURE_KEYS.map((key) => [key, true]));
  return Object.fromEntries(FEATURE_KEYS.map((key) => [key, access?.[key] === true]));
}

function getNewUserFeatureAccess(role = roleInput.value) {
  return normalizeFeatureAccess(Object.fromEntries([...newUserFeatureInputs].map((input) => [input.value, input.checked])), role);
}

function getEditedUserFeatureAccess(passcode, role = "user") {
  const featureInputs = [...document.querySelectorAll(`[data-user-feature][data-passcode-index="${passcode.index}"]`)];
  if (!featureInputs.length) {
    return normalizeFeatureAccess(passcode.featureAccess, role);
  }

  return normalizeFeatureAccess(Object.fromEntries(featureInputs.map((input) => [input.dataset.userFeature, input.checked])), role);
}
const generateUserCodeButton = document.querySelector("#generateUserCodeButton");
const openAddUserModalButton = document.querySelector("#openAddUserModalButton");
const addUserModal = document.querySelector("#addUserModal");
const closeAddUserModalButton = document.querySelector("#closeAddUserModalButton");
const addUserFormStep = document.querySelector("#addUserFormStep");
const addUserResultStep = document.querySelector("#addUserResultStep");
const generatedUserCodeDisplay = document.querySelector("#generatedUserCodeDisplay");
const finishAddUserButton = document.querySelector("#finishAddUserButton");
const adminUserSearch = document.querySelector("#adminUserSearch");
const adminRoleFilter = document.querySelector("#adminRoleFilter");
const adminStatusFilter = document.querySelector("#adminStatusFilter");
const adminSortSelect = document.querySelector("#adminSortSelect");
const adminPasscodeList = document.querySelector("#adminPasscodeList");
const adminEmptyPasscodes = document.querySelector("#adminEmptyPasscodes");
const adminLogoutButton = document.querySelector("#adminLogoutButton");
const activityTotalUsers = document.querySelector("#activityTotalUsers");
const activityActiveUsers = document.querySelector("#activityActiveUsers");
const activityAdminUsers = document.querySelector("#activityAdminUsers");
const activityTotalTrades = document.querySelector("#activityTotalTrades");
const openAddNewsModalButton = document.querySelector("#openAddNewsModalButton");
const addNewsModal = document.querySelector("#addNewsModal");
const closeAddNewsModalButton = document.querySelector("#closeAddNewsModalButton");
const cancelAddNewsButton = document.querySelector("#cancelAddNewsButton");
const saveNewsEventButton = document.querySelector("#saveNewsEventButton");
const newsTitleInput = document.querySelector("#newsTitleInput");
const newsCustomTitleInput = document.querySelector("#newsCustomTitleInput");
const newsDateInput = document.querySelector("#newsDateInput");
const newsTimezoneHelper = document.querySelector("#newsTimezoneHelper");
const newsCurrencyInput = document.querySelector("#newsCurrencyInput");
const newsImpactInput = document.querySelector("#newsImpactInput");
const newsSourceInput = document.querySelector("#newsSourceInput");
const newsNotesInput = document.querySelector("#newsNotesInput");
const adminNewsSearch = document.querySelector("#adminNewsSearch");
const adminNewsImpactFilter = document.querySelector("#adminNewsImpactFilter");
const adminNewsStatusFilter = document.querySelector("#adminNewsStatusFilter");
const adminNewsSortSelect = document.querySelector("#adminNewsSortSelect");
const adminNewsList = document.querySelector("#adminNewsList");
const adminEmptyNewsEvents = document.querySelector("#adminEmptyNewsEvents");
const adminToastStack = document.querySelector("#adminToastStack");
const adminConfirmModal = document.querySelector("#adminConfirmModal");
const adminConfirmModalEyebrow = document.querySelector("#adminConfirmModalEyebrow");
const adminConfirmModalTitle = document.querySelector("#adminConfirmModalTitle");
const adminConfirmModalMessage = document.querySelector("#adminConfirmModalMessage");
const adminConfirmCancelButton = document.querySelector("#adminConfirmCancelButton");
const adminConfirmActionButton = document.querySelector("#adminConfirmActionButton");

const DEFAULT_NEWS_EVENT_TITLES = [
  "Non-Farm Payrolls",
  "FOMC Rate Decision",
  "CPI Inflation",
  "GDP",
  "Unemployment Claims",
  "Retail Sales",
  "Fed Chair Speaks",
  "ECB Rate Decision",
  "BOE Rate Decision",
  "PMI Data",
  "Consumer Confidence",
  "Trade Balance",
];

const adminConfig = {
  passcodes: [],
  newsEvents: [],
};

let adminConfigLoaded = false;
let adminNewsLoaded = false;
let currentAdminHash = sessionStorage.getItem(AUTH_HASH_KEY) || "";
let editingNewsEventId = "";
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

function showToast(message, tone = "saved") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  adminToastStack.appendChild(toast);
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
  adminConfirmModalEyebrow.textContent = eyebrow;
  adminConfirmModalTitle.textContent = title;
  adminConfirmModalMessage.textContent = message;
  adminConfirmActionButton.textContent = confirmText;
  adminConfirmActionButton.classList.toggle("danger-confirm", tone === "danger");
  adminConfirmActionButton.classList.toggle("warning-confirm", tone === "warning");
  adminConfirmModal.classList.remove("is-closing");
  adminConfirmModal.showModal();
  document.body.classList.add("modal-open");

  return new Promise((resolve) => {
    pendingConfirmResolve = resolve;
  });
}

function resolveConfirmation(value) {
  if (pendingConfirmResolve) {
    pendingConfirmResolve(value);
    pendingConfirmResolve = null;
  }
  closeAdminDialog(adminConfirmModal);
}

function setNewUserFormLoading(isLoading) {
  firstNameInput.disabled = isLoading;
  lastNameInput.disabled = isLoading;
  emailInput.disabled = isLoading;
  roleInput.disabled = isLoading;
  statusInput.disabled = isLoading;
  setButtonLoading(generateUserCodeButton, isLoading, "Generating...");
  if (!isLoading) {
    updateGenerateUserButtonState();
  }
}

function renderTableMessage(message) {
  adminPasscodeList.innerHTML = `
    <tr>
      <td class="table-message" colspan="7">
        <div class="skeleton-row"></div>
        ${escapeHtml(message)}
      </td>
    </tr>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function toDateTimeLocalValue(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16);
}

function fromDateTimeLocalValue(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function getLocalTimezoneLabel() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "your local timezone";
  const shortZone = new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
    .formatToParts(new Date())
    .find((part) => part.type === "timeZoneName")?.value;
  return shortZone ? `${zone} (${shortZone})` : zone;
}

function updateNewsTimezoneHelper() {
  if (!newsTimezoneHelper) {
    return;
  }

  newsTimezoneHelper.textContent = `Enter the event time in ${getLocalTimezoneLabel()}. Users will see it converted to their own local timezone.`;
}

function getNewsTitleValue() {
  return newsTitleInput.value === "__other__" ? newsCustomTitleInput.value.trim() : newsTitleInput.value.trim();
}

function getStoredNewsTitles() {
  return [
    ...new Set(
      [
        ...DEFAULT_NEWS_EVENT_TITLES,
        ...adminConfig.newsEvents.map((event) => event.title).filter(Boolean),
      ].map((title) => String(title).trim()).filter(Boolean),
    ),
  ].sort((a, b) => a.localeCompare(b));
}

function renderNewsTitleOptions(selectedTitle = "") {
  const titles = getStoredNewsTitles();
  const selectedIsKnown = !selectedTitle || titles.includes(selectedTitle);
  newsTitleInput.innerHTML = [
    `<option value="">Select event</option>`,
    ...titles.map((title) => `<option value="${escapeHtml(title)}" ${title === selectedTitle ? "selected" : ""}>${escapeHtml(title)}</option>`),
    `<option value="__other__" ${selectedTitle && !selectedIsKnown ? "selected" : ""}>Other</option>`,
  ].join("");
}

function syncCustomNewsTitleInput(selectedTitle = "") {
  const isOther = newsTitleInput.value === "__other__";
  newsCustomTitleInput.classList.toggle("hidden", !isOther);
  if (isOther && selectedTitle && !getStoredNewsTitles().includes(selectedTitle)) {
    newsCustomTitleInput.value = selectedTitle;
  }
  if (!isOther) {
    newsCustomTitleInput.value = "";
  }
}

function getStatusSelectValue(user) {
  return getUserStatus(user);
}

function parseStatusValue(value) {
  if (value === "trial") {
    return {
      status: "trial",
      active: true,
      trialEnabled: true,
      trialWeeks: Number(trialWeeksInput?.value || 2),
    };
  }

  return {
    status: value === "inactive" ? "inactive" : "active",
    active: value !== "inactive",
    trialEnabled: false,
    trialWeeks: null,
  };
}

function isTrialExpired(user) {
  return Boolean(user.trialEnabled && user.trialEndsAt && new Date(user.trialEndsAt).getTime() <= Date.now());
}

function getUserStatus(user) {
  if (!user.active || isTrialExpired(user)) {
    return "inactive";
  }

  return user.trialEnabled ? "trial" : "active";
}

function renderTrialLabel(user) {
  return getUserStatus(user) === "trial" ? "Trial" : getUserStatus(user) === "inactive" ? "Inactive" : "Active";
}

function setAdminUnlocked(adminHash) {
  document.body.classList.remove("admin-checking");
  adminGate.setAttribute("hidden", "");
  adminGate.classList.add("hidden");
  currentAdminHash = adminHash || currentAdminHash;
}

async function callAdminUsers(action, user = {}) {
  return callSupabaseFunction(
    "admin-users",
    { action, user },
    { "x-admin-passcode-hash": currentAdminHash },
  );
}

async function callNewsEvents(action, event = {}) {
  return callSupabaseFunction(
    "news-events",
    { action, event },
    { "x-admin-passcode-hash": currentAdminHash },
  );
}

async function loadExistingConfig() {
  if (adminConfigLoaded && adminConfig.passcodes.length) {
    return;
  }

  renderTableMessage("Loading users...");
  try {
    const result = await callAdminUsers("list");
    adminConfig.passcodes = (result.users || []).map((user) => ({
      id: user.id,
      label: String(user.label),
      firstName: user.first_name ? String(user.first_name) : "",
      lastName: user.last_name ? String(user.last_name) : "",
      email: user.email ? String(user.email) : "",
      role: user.role === "admin" ? "admin" : "user",
      code: user.passcode_code ? String(user.passcode_code) : "",
      active: Boolean(user.active),
      trialEnabled: Boolean(user.trial_enabled),
      trialWeeks: Number(user.trial_weeks || 0),
      trialStartedAt: user.trial_started_at || "",
      trialEndsAt: user.trial_ends_at || "",
      featureAccess: normalizeFeatureAccess(user.feature_access, user.role),
      disabledReason: user.disabled_reason || "",
      createdAt: user.created_at || "",
      lastLoginAt: user.last_login_at || "",
      lastSavedAt: user.last_saved_at || "",
      tradeCount: Number(user.trade_count || 0),
    }));
  } catch {
    adminAccessMessage.textContent = "Could not load admin users.";
  } finally {
    adminConfigLoaded = true;
    renderPasscodes();
    renderActivity();
  }
}

async function loadNewsEvents() {
  if (adminNewsLoaded && adminConfig.newsEvents.length) {
    return;
  }

  renderNewsTableMessage("Loading events...");
  try {
    const result = await callNewsEvents("admin-list");
    adminConfig.newsEvents = (result.events || []).map((event) => ({
      id: event.id,
      title: event.title || "",
      eventTime: event.event_time || "",
      currency: event.currency || "USD",
      impact: event.impact || "High",
      notes: event.notes || "",
      sourceUrl: event.source_url || "",
      active: event.active !== false,
      createdAt: event.created_at || "",
      updatedAt: event.updated_at || "",
    }));
  } catch {
    renderNewsTableMessage("Could not load news events.");
  } finally {
    adminNewsLoaded = true;
    renderNewsEvents();
  }
}

async function initialiseAdminGate() {
  const savedUser = sessionStorage.getItem(AUTH_STORAGE_KEY);
  const savedRole = sessionStorage.getItem(AUTH_ROLE_KEY);
  const savedAdminHash = sessionStorage.getItem(AUTH_HASH_KEY);

  if (savedUser && savedRole === "admin" && savedAdminHash && /^[a-f0-9]{64}$/i.test(savedAdminHash)) {
    try {
      const result = await callSupabaseFunction("login", { passcodeHash: savedAdminHash, role: "admin" });
      if (!result.user) {
        throw new Error("Invalid passcode");
      }
      setAdminUnlocked(savedAdminHash);
      loadExistingConfig();
      loadNewsEvents();
      return;
    } catch {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem(AUTH_ROLE_KEY);
      sessionStorage.removeItem(AUTH_HASH_KEY);
    }
  }

  document.body.classList.remove("admin-checking");
  adminGate.removeAttribute("hidden");
  adminGate.classList.remove("hidden");
  adminAccessMessage.textContent = savedUser
    ? "This account does not have admin access."
    : "Log in from the main app with an admin account to access this page.";
}

function logoutAdmin() {
  setButtonLoading(adminLogoutButton, true, "Logging out...");
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_ROLE_KEY);
  sessionStorage.removeItem(AUTH_HASH_KEY);
  currentAdminHash = "";
  adminConfigLoaded = false;
  adminNewsLoaded = false;
  adminConfig.passcodes = [];
  adminConfig.newsEvents = [];
  window.location.href = "../index.html";
}

function generatePasscode(length = 8) {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return [...bytes].map((byte) => PASSCODE_CHARACTERS[byte % PASSCODE_CHARACTERS.length]).join("");
}

function hasRequiredNewUserDetails() {
  return Boolean(firstNameInput.value.trim() && lastNameInput.value.trim() && emailInput.value.trim());
}

function updateGenerateUserButtonState() {
  generateUserCodeButton.disabled = !hasRequiredNewUserDetails();
}

function resetAddUserModal() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  roleInput.value = "user";
  statusInput.value = "active";
  trialWeeksInput.value = "2";
  trialDurationField.classList.add("hidden");
  newUserFeatureInputs.forEach((input) => { input.checked = ["journal", "calculator"].includes(input.value); });
  generatedUserCodeDisplay.textContent = "";
  addUserFormStep.classList.remove("hidden");
  addUserResultStep.classList.add("hidden");
  updateGenerateUserButtonState();
}

function openAddUserModal() {
  resetAddUserModal();
  addUserModal.classList.remove("is-closing");
  addUserModal.showModal();
  document.body.classList.add("modal-open");
  window.setTimeout(() => firstNameInput.focus(), 0);
}

function closeAdminDialog(modal) {
  if (!modal.open || modal.classList.contains("is-closing")) {
    return;
  }

  modal.classList.add("is-closing");
  window.setTimeout(() => {
    modal.close();
    modal.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
  }, MOTION_DURATION_MS);
}

function closeAddUserModal() {
  closeAdminDialog(addUserModal);
}

function renderActivity() {
  const users = adminConfig.passcodes;
  const activeUsers = users.filter((user) => ["active", "trial"].includes(getUserStatus(user)));
  const admins = users.filter((user) => user.role === "admin");
  const totalTrades = users.reduce((sum, user) => sum + Number(user.tradeCount || 0), 0);

  activityTotalUsers.textContent = String(users.length);
  activityActiveUsers.textContent = String(activeUsers.length);
  activityAdminUsers.textContent = String(admins.length);
  activityTotalTrades.textContent = String(totalTrades);
}

function getVisiblePasscodes() {
  const query = adminUserSearch.value.trim().toLowerCase();
  const role = adminRoleFilter.value;
  const status = adminStatusFilter.value;
  const sort = adminSortSelect.value;

  return adminConfig.passcodes
    .map((passcode, index) => ({ ...passcode, index }))
    .filter((passcode) => {
      const matchesQuery = !query
        || [passcode.firstName, passcode.lastName, passcode.email, passcode.code, passcode.role]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesRole = role === "all" || passcode.role === role;
      const userStatus = getUserStatus(passcode);
      const matchesStatus = status === "all" || userStatus === status;
      return matchesQuery && matchesRole && matchesStatus;
    })
    .sort((a, b) => {
      if (sort === "created-asc") {
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      }

      if (sort === "last-login-desc") {
        return new Date(b.lastLoginAt || 0) - new Date(a.lastLoginAt || 0);
      }

      if (sort === "name-asc") {
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      }

      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });
}

function renderPasscodes() {
  const visiblePasscodes = getVisiblePasscodes();
  adminEmptyPasscodes.classList.toggle("hidden", adminConfig.passcodes.length > 0);
  if (adminConfig.passcodes.length && !visiblePasscodes.length) {
    renderTableMessage("No users match those filters.");
    return;
  }

  adminPasscodeList.innerHTML = visiblePasscodes
    .map(
      (passcode) => `
        <tr class="admin-user-row" data-passcode-action="toggle-details" data-passcode-index="${passcode.index}">
          <td data-label="First Name">
            <input
              class="admin-table-input"
              type="text"
              value="${escapeHtml(passcode.firstName || "")}"
              data-original-value="${escapeHtml(passcode.firstName || "")}"
              aria-label="Edit first name"
              data-passcode-action="first-name"
              data-passcode-index="${passcode.index}"
            />
          </td>
          <td data-label="Last Name">
            <input
              class="admin-table-input"
              type="text"
              value="${escapeHtml(passcode.lastName || "")}"
              data-original-value="${escapeHtml(passcode.lastName || "")}"
              aria-label="Edit last name"
              data-passcode-action="last-name"
              data-passcode-index="${passcode.index}"
            />
          </td>
          <td data-label="Email">
            <input
              class="admin-table-input"
              type="email"
              value="${escapeHtml(passcode.email || "")}"
              data-original-value="${escapeHtml(passcode.email || "")}"
              aria-label="Edit email"
              data-passcode-action="email"
              data-passcode-index="${passcode.index}"
            />
          </td>
          <td data-label="Role">
            <select class="admin-table-input" data-original-value="${escapeHtml(passcode.role || "user")}" data-passcode-action="role" data-passcode-index="${passcode.index}">
              <option value="user" ${passcode.role !== "admin" ? "selected" : ""}>User</option>
              <option value="admin" ${passcode.role === "admin" ? "selected" : ""}>Admin</option>
            </select>
          </td>
          <td data-label="Status">
            <select class="admin-table-input" data-original-value="${getStatusSelectValue(passcode)}" data-passcode-action="status" data-passcode-index="${passcode.index}">
              <option value="active" ${getStatusSelectValue(passcode) === "active" ? "selected" : ""}>Active</option>
              <option value="trial" ${getStatusSelectValue(passcode) === "trial" ? "selected" : ""}>Trial</option>
              <option value="inactive" ${getStatusSelectValue(passcode) === "inactive" ? "selected" : ""}>Inactive</option>
            </select>
          </td>
          <td data-label="Code" class="admin-code-cell">
            <div class="admin-code-value">
              <span>${escapeHtml(passcode.code || "")}</span>
              ${
                passcode.code
                  ? `<button class="icon-button admin-copy-button" type="button" title="Copy code" aria-label="Copy code" data-passcode-action="copy" data-passcode-index="${passcode.index}">⧉</button>`
                  : ""
              }
            </div>
          </td>
          <td data-label="Actions">
            <div class="admin-inline-actions">
              <button class="icon-button admin-action-button" type="button" title="Save" aria-label="Save user" data-passcode-action="save" data-passcode-index="${passcode.index}" disabled>✓</button>
              <button class="icon-button admin-action-button" type="button" title="Reset code" aria-label="Reset user code" data-passcode-action="reset-code" data-passcode-index="${passcode.index}">↻</button>
              <button class="icon-button admin-action-button" type="button" title="${passcode.active ? "Disable" : "Enable"}" aria-label="${passcode.active ? "Disable user" : "Enable user"}" data-passcode-action="toggle-active" data-passcode-index="${passcode.index}">
                ${passcode.active ? "⏸" : "▶"}
              </button>
              <button class="icon-button admin-action-button delete" type="button" title="Remove" aria-label="Remove user" data-passcode-action="remove" data-passcode-index="${passcode.index}">×</button>
            </div>
          </td>
        </tr>
        <tr class="admin-user-detail-row hidden" data-detail-index="${passcode.index}">
          <td colspan="7">
            <div class="admin-user-details">
              <div><dt>Created</dt><dd>${escapeHtml(formatDateTime(passcode.createdAt))}</dd></div>
              <div><dt>Last Login</dt><dd>${escapeHtml(formatDateTime(passcode.lastLoginAt))}</dd></div>
              <div><dt>Trades</dt><dd>${Number(passcode.tradeCount || 0)}</dd></div>
              <div><dt>Last Saved</dt><dd>${escapeHtml(formatDateTime(passcode.lastSavedAt))}</dd></div>
              <div><dt>Status</dt><dd>${escapeHtml(renderTrialLabel(passcode))}</dd></div>
              <div><dt>Trial Ends</dt><dd>${getUserStatus(passcode) === "trial" ? escapeHtml(formatDateTime(passcode.trialEndsAt)) : "-"}</dd></div>
              <div><dt>Reason</dt><dd>${escapeHtml(passcode.disabledReason || "-")}</dd></div>
              <div class="admin-user-feature-access"><dt>Feature Access</dt><dd>${FEATURE_KEYS.map((feature) => `<label><input type="checkbox" data-user-feature="${feature}" data-passcode-index="${passcode.index}" ${passcode.featureAccess?.[feature] ? "checked" : ""}><span>${feature}</span></label>`).join("")}</dd></div>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

function renderNewsTableMessage(message) {
  adminNewsList.innerHTML = `
    <tr>
      <td class="table-message" colspan="6">
        <div class="skeleton-row"></div>
        ${escapeHtml(message)}
      </td>
    </tr>
  `;
}

function getVisibleNewsEvents() {
  const query = adminNewsSearch.value.trim().toLowerCase();
  const impact = adminNewsImpactFilter.value;
  const status = adminNewsStatusFilter.value;
  const sort = adminNewsSortSelect.value;

  return adminConfig.newsEvents
    .map((event, index) => ({ ...event, index }))
    .filter((event) => {
      const matchesQuery = !query
        || [event.title, event.currency, event.impact, event.notes]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesImpact = impact === "all" || event.impact === impact;
      const matchesStatus = status === "all" || (status === "active" ? event.active : !event.active);
      return matchesQuery && matchesImpact && matchesStatus;
    })
    .sort((a, b) => {
      if (sort === "date-desc") {
        return new Date(b.eventTime || 0) - new Date(a.eventTime || 0);
      }

      if (sort === "title-asc") {
        return String(a.title).localeCompare(String(b.title));
      }

      return new Date(a.eventTime || 0) - new Date(b.eventTime || 0);
    });
}

function renderNewsEvents() {
  const visibleEvents = getVisibleNewsEvents();
  adminEmptyNewsEvents.classList.toggle("hidden", adminConfig.newsEvents.length > 0);

  if (adminConfig.newsEvents.length && !visibleEvents.length) {
    renderNewsTableMessage("No events match those filters.");
    return;
  }

  if (!adminConfig.newsEvents.length) {
    adminNewsList.innerHTML = "";
    return;
  }

  adminNewsList.innerHTML = visibleEvents
    .map(
      (event) => `
        <tr class="admin-user-row">
          <td data-label="Event">
            <strong>${escapeHtml(event.title)}</strong>
            ${event.notes ? `<small>${escapeHtml(event.notes)}</small>` : ""}
          </td>
          <td data-label="Date & Time">${escapeHtml(formatDateTime(event.eventTime))}</td>
          <td data-label="Currency">${escapeHtml(event.currency)}</td>
          <td data-label="Impact"><span class="news-impact ${String(event.impact).toLowerCase()}">${escapeHtml(event.impact)}</span></td>
          <td data-label="Status">${event.active ? "Active" : "Inactive"}</td>
          <td data-label="Actions">
            <div class="admin-inline-actions">
              <button class="icon-button admin-action-button" type="button" title="Edit" aria-label="Edit event" data-news-action="edit" data-news-index="${event.index}">✎</button>
              <button class="icon-button admin-action-button" type="button" title="${event.active ? "Disable" : "Enable"}" aria-label="${event.active ? "Disable event" : "Enable event"}" data-news-action="toggle-active" data-news-index="${event.index}">
                ${event.active ? "⏸" : "▶"}
              </button>
              <button class="icon-button admin-action-button delete" type="button" title="Remove" aria-label="Remove event" data-news-action="remove" data-news-index="${event.index}">×</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

function updateSaveNewsButtonState() {
  saveNewsEventButton.disabled = !(getNewsTitleValue() && newsDateInput.value.trim() && newsCurrencyInput.value.trim());
}

function resetNewsModal() {
  editingNewsEventId = "";
  renderNewsTitleOptions();
  newsTitleInput.value = "";
  syncCustomNewsTitleInput();
  newsDateInput.value = "";
  newsCurrencyInput.value = "USD";
  newsImpactInput.value = "High";
  newsSourceInput.value = "";
  newsNotesInput.value = "";
  document.querySelector("#addNewsModalTitle").textContent = "Add Event";
  saveNewsEventButton.textContent = "Save event";
  updateSaveNewsButtonState();
}

function openNewsModal(event = null) {
  resetNewsModal();
  if (event) {
    editingNewsEventId = event.id;
    renderNewsTitleOptions(event.title);
    syncCustomNewsTitleInput(event.title);
    newsDateInput.value = toDateTimeLocalValue(event.eventTime);
    newsCurrencyInput.value = event.currency;
    newsImpactInput.value = event.impact;
    newsSourceInput.value = event.sourceUrl || "";
    newsNotesInput.value = event.notes || "";
    document.querySelector("#addNewsModalTitle").textContent = "Edit Event";
    saveNewsEventButton.textContent = "Save changes";
    updateSaveNewsButtonState();
  }

  addNewsModal.classList.remove("is-closing");
  addNewsModal.showModal();
  document.body.classList.add("modal-open");
  window.setTimeout(() => (newsTitleInput.value === "__other__" ? newsCustomTitleInput : newsTitleInput).focus(), 0);
}

function closeNewsModal() {
  closeAdminDialog(addNewsModal);
}

function syncNewsEventFromResult(target, savedEvent) {
  target.id = savedEvent.id;
  target.title = savedEvent.title || "";
  target.eventTime = savedEvent.event_time || "";
  target.currency = savedEvent.currency || "USD";
  target.impact = savedEvent.impact || "High";
  target.notes = savedEvent.notes || "";
  target.sourceUrl = savedEvent.source_url || "";
  target.active = savedEvent.active !== false;
  target.createdAt = savedEvent.created_at || "";
  target.updatedAt = savedEvent.updated_at || "";
}

generateUserCodeButton.addEventListener("click", async () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  if (!firstName || !lastName || !email) {
    updateGenerateUserButtonState();
    return;
  }

  const role = roleInput.value === "admin" ? "admin" : "user";
  const newUserStatus = statusInput.value;
  const trialWeeks = newUserStatus === "trial" ? Number(trialWeeksInput.value || 2) : null;
  const label = [firstName, lastName].filter(Boolean).join(" ") || `User ${adminConfig.passcodes.length + 1}`;
  const passcode = generatePasscode();
  const hash = await sha256(`${USER_PASSCODE_SALT}:${passcode}`);

  setNewUserFormLoading(true);
  try {
    const result = await callAdminUsers("create", {
      firstName,
      lastName,
      email,
      role,
      label,
      passcodeHash: hash,
      passcodeCode: passcode,
      trialEnabled: Boolean(trialWeeks),
      trialWeeks,
      active: newUserStatus !== "inactive",
      featureAccess: getNewUserFeatureAccess(role),
    });
    adminConfig.passcodes.unshift({
      id: result.user.id,
      label: result.user.label,
      firstName: result.user.first_name || firstName,
      lastName: result.user.last_name || lastName,
      email: result.user.email || email,
      role: result.user.role || role,
      code: result.user.passcode_code || passcode,
      active: Boolean(result.user.active),
      trialEnabled: Boolean(result.user.trial_enabled),
      trialWeeks: Number(result.user.trial_weeks || 0),
      trialStartedAt: result.user.trial_started_at || "",
      trialEndsAt: result.user.trial_ends_at || "",
      disabledReason: result.user.disabled_reason || "",
      featureAccess: normalizeFeatureAccess(result.user.feature_access, result.user.role),
      createdAt: result.user.created_at || "",
      lastLoginAt: result.user.last_login_at || "",
      lastSavedAt: result.user.last_saved_at || "",
      tradeCount: Number(result.user.trade_count || 0),
    });
    generatedUserCodeDisplay.textContent = result.user.passcode_code || passcode;
    addUserFormStep.classList.add("hidden");
    addUserResultStep.classList.remove("hidden");
    renderPasscodes();
    renderActivity();
    showToast("User created");
  } catch {
    showToast("Could not create that user. Try generating another code.", "warning");
  } finally {
    setNewUserFormLoading(false);
  }
});

[firstNameInput, lastNameInput, emailInput].forEach((input) => {
  input.addEventListener("input", updateGenerateUserButtonState);
});

statusInput.addEventListener("change", () => {
  trialDurationField.classList.toggle("hidden", statusInput.value !== "trial");
});

openAddUserModalButton.addEventListener("click", openAddUserModal);
closeAddUserModalButton.addEventListener("click", closeAddUserModal);
finishAddUserButton.addEventListener("click", closeAddUserModal);

addUserModal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  resetAddUserModal();
});

addUserModal.addEventListener("click", (event) => {
  if (event.target === addUserModal) {
    closeAddUserModal();
  }
});

adminPasscodeList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-passcode-action]");
  if (!button) {
    if (event.target.closest("input, select, button")) {
      return;
    }

    const row = event.target.closest("[data-passcode-action='toggle-details']");
    if (!row) {
      return;
    }

    const detailRow = adminPasscodeList.querySelector(`[data-detail-index="${row.dataset.passcodeIndex}"]`);
    detailRow?.classList.toggle("hidden");
    row.classList.toggle("details-open", !detailRow?.classList.contains("hidden"));
    return;
  }

  const index = Number(button.dataset.passcodeIndex);
  const passcode = adminConfig.passcodes[index];
  if (!passcode) {
    return;
  }

  if (button.dataset.passcodeAction === "copy" && passcode.code) {
    await copyText(passcode.code);
    button.textContent = "✓";
    window.setTimeout(() => {
      button.textContent = "⧉";
    }, 1100);
  }

  if (button.dataset.passcodeAction === "save") {
    const row = button.closest("tr");
    const firstNameInput = row.querySelector("[data-passcode-action='first-name']");
    const lastNameInput = row.querySelector("[data-passcode-action='last-name']");
    const emailInput = row.querySelector("[data-passcode-action='email']");
    const roleSelect = row.querySelector("[data-passcode-action='role']");
    const statusSelect = row.querySelector("[data-passcode-action='status']");
    const nextFirstName = firstNameInput.value.trim();
    const nextLastName = lastNameInput.value.trim();
    const nextEmail = emailInput.value.trim();
    const nextRole = roleSelect.value === "admin" ? "admin" : "user";
    const nextStatus = parseStatusValue(statusSelect.value);
    const nextLabel = [nextFirstName, nextLastName].filter(Boolean).join(" ") || "Untitled user";
    setButtonLoading(button, true, "Saving...");
    try {
      const result = await callAdminUsers("update", {
        id: passcode.id,
        firstName: nextFirstName,
        lastName: nextLastName,
        email: nextEmail,
        role: nextRole,
        label: nextLabel,
        active: nextStatus.active,
        trialEnabled: nextStatus.trialEnabled,
        trialWeeks: nextStatus.trialWeeks,
        resetTrial: statusSelect.value !== statusSelect.dataset.originalValue,
        featureAccess: getEditedUserFeatureAccess(passcode, nextRole),
      });
      const savedUser = result.user || {};
      passcode.label = savedUser.label || nextLabel;
      passcode.firstName = savedUser.first_name || nextFirstName;
      passcode.lastName = savedUser.last_name || nextLastName;
      passcode.email = savedUser.email || "";
      passcode.role = savedUser.role || nextRole;
      passcode.active = Boolean(savedUser.active);
      passcode.trialEnabled = Boolean(savedUser.trial_enabled);
      passcode.trialWeeks = Number(savedUser.trial_weeks || 0);
      passcode.trialStartedAt = savedUser.trial_started_at || "";
      passcode.trialEndsAt = savedUser.trial_ends_at || "";
      passcode.disabledReason = savedUser.disabled_reason || "";
      passcode.featureAccess = normalizeFeatureAccess(savedUser.feature_access, savedUser.role);
      passcode.createdAt = savedUser.created_at || passcode.createdAt;
      passcode.lastLoginAt = savedUser.last_login_at || passcode.lastLoginAt;
      renderActivity();
      firstNameInput.value = passcode.firstName;
      firstNameInput.dataset.originalValue = passcode.firstName;
      lastNameInput.value = passcode.lastName;
      lastNameInput.dataset.originalValue = passcode.lastName;
      emailInput.value = passcode.email;
      emailInput.dataset.originalValue = passcode.email;
      roleSelect.value = passcode.role;
      roleSelect.dataset.originalValue = passcode.role;
      statusSelect.value = getStatusSelectValue(passcode);
      statusSelect.dataset.originalValue = statusSelect.value;
      setButtonLoading(button, false);
      button.disabled = true;
      showToast("User saved");
    } catch {
      showToast("Could not save that user.", "warning");
      setButtonLoading(button, false);
      updateRowSaveState(row);
    }
  }

  if (button.dataset.passcodeAction === "reset-code") {
    const confirmed = await askForConfirmation({
      eyebrow: "Reset code",
      title: `Reset ${passcode.label}'s code?`,
      message: "Their current code will stop working immediately.",
      confirmText: "Reset code",
      tone: "warning",
    });
    if (!confirmed) {
      return;
    }

    const nextCode = generatePasscode();
    const nextHash = await sha256(`${USER_PASSCODE_SALT}:${nextCode}`);
    setButtonLoading(button, true, "Resetting...");
    try {
      const result = await callAdminUsers("update", {
        id: passcode.id,
        firstName: passcode.firstName,
        lastName: passcode.lastName,
        email: passcode.email,
        role: passcode.role,
        label: passcode.label,
        active: passcode.active,
        passcodeHash: nextHash,
        passcodeCode: nextCode,
      });
      const savedUser = result.user || {};
      passcode.code = savedUser.passcode_code || nextCode;
      renderPasscodes();
      renderActivity();
      showToast("User code reset");
    } catch {
      showToast("Could not reset that user's code.", "warning");
      setButtonLoading(button, false);
    }
  }

  if (button.dataset.passcodeAction === "toggle-active") {
    const row = button.closest("tr");
    const firstNameInput = row.querySelector("[data-passcode-action='first-name']");
    const lastNameInput = row.querySelector("[data-passcode-action='last-name']");
    const emailInput = row.querySelector("[data-passcode-action='email']");
    const roleSelect = row.querySelector("[data-passcode-action='role']");
    const statusSelect = row.querySelector("[data-passcode-action='status']");
    const nextActive = getUserStatus(passcode) === "inactive";
    const nextFirstName = firstNameInput.value.trim();
    const nextLastName = lastNameInput.value.trim();
    const nextEmail = emailInput.value.trim();
    const nextRole = roleSelect.value === "admin" ? "admin" : "user";
    const nextTrialWeeks = nextActive && statusSelect.value === "trial" ? 2 : null;
    const nextLabel = [nextFirstName, nextLastName].filter(Boolean).join(" ") || "Untitled user";

    setButtonLoading(button, true, nextActive ? "Enabling..." : "Disabling...");
    try {
      const result = await callAdminUsers("update", {
        id: passcode.id,
        firstName: nextFirstName,
        lastName: nextLastName,
        email: nextEmail,
        role: nextRole,
        label: nextLabel,
        active: nextActive,
        trialEnabled: Boolean(nextTrialWeeks),
        trialWeeks: nextTrialWeeks,
        resetTrial: statusSelect.value !== statusSelect.dataset.originalValue,
      });
      const savedUser = result.user || {};
      passcode.label = savedUser.label || nextLabel;
      passcode.firstName = savedUser.first_name || nextFirstName;
      passcode.lastName = savedUser.last_name || nextLastName;
      passcode.email = savedUser.email || "";
      passcode.role = savedUser.role || nextRole;
      passcode.active = Boolean(savedUser.active);
      passcode.trialEnabled = Boolean(savedUser.trial_enabled);
      passcode.trialWeeks = Number(savedUser.trial_weeks || 0);
      passcode.trialStartedAt = savedUser.trial_started_at || "";
      passcode.trialEndsAt = savedUser.trial_ends_at || "";
      passcode.disabledReason = savedUser.disabled_reason || "";
      passcode.createdAt = savedUser.created_at || passcode.createdAt;
      passcode.lastLoginAt = savedUser.last_login_at || passcode.lastLoginAt;
      renderPasscodes();
      renderActivity();
      showToast(nextActive ? "User enabled" : "User disabled");
    } catch {
      showToast(`Could not ${nextActive ? "enable" : "disable"} that user.`, "warning");
      setButtonLoading(button, false);
    }
  }

  if (button.dataset.passcodeAction === "remove") {
    const confirmed = await askForConfirmation({
      eyebrow: "Remove user",
      title: `Remove ${passcode.label}?`,
      message: "Usually it is safer to set the user to Inactive instead. This cannot be undone.",
      confirmText: "Remove user",
      tone: "danger",
    });
    if (!confirmed) {
      return;
    }

    setButtonLoading(button, true, "Removing...");
    try {
      await callAdminUsers("delete", { id: passcode.id });
      adminConfig.passcodes.splice(index, 1);
      renderPasscodes();
      renderActivity();
      showToast("User removed", "warning");
    } catch {
      showToast("Could not remove that user.", "warning");
      setButtonLoading(button, false);
    }
  }
});

function updateRowSaveState(row) {
  const saveButton = row.querySelector("[data-passcode-action='save']");
  const inputs = row.querySelectorAll(
    "[data-passcode-action='first-name'], [data-passcode-action='last-name'], [data-passcode-action='email'], [data-passcode-action='role'], [data-passcode-action='status']",
  );
  const detailRow = document.querySelector(`[data-detail-index="${row.dataset.passcodeIndex}"]`);
  const accessChanged = [...(detailRow?.querySelectorAll("[data-user-feature]") || [])].some((input) => input.checked !== Boolean(adminConfig.passcodes[Number(row.dataset.passcodeIndex)]?.featureAccess?.[input.dataset.userFeature]));
  saveButton.disabled = [...inputs].every((input) => input.value.trim() === input.dataset.originalValue) && !accessChanged;
}

adminPasscodeList.addEventListener("input", (event) => {
  if (!["first-name", "last-name", "email"].includes(event.target.dataset.passcodeAction)) {
    return;
  }

  updateRowSaveState(event.target.closest("tr"));
});

adminPasscodeList.addEventListener("change", (event) => {
  if (event.target.matches("[data-user-feature]")) {
    const index = Number(event.target.dataset.passcodeIndex);
    const row = adminPasscodeList.querySelector(`tr[data-passcode-index="${index}"]`);
    if (row) updateRowSaveState(row);
    return;
  }
  if (!["role", "status"].includes(event.target.dataset.passcodeAction)) {
    return;
  }

  updateRowSaveState(event.target.closest("tr"));
});

[adminUserSearch, adminRoleFilter, adminStatusFilter, adminSortSelect].forEach((control) => {
  control.addEventListener("input", renderPasscodes);
  control.addEventListener("change", renderPasscodes);
});

openAddNewsModalButton.addEventListener("click", () => openNewsModal());
closeAddNewsModalButton.addEventListener("click", closeNewsModal);
cancelAddNewsButton.addEventListener("click", closeNewsModal);

addNewsModal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  resetNewsModal();
});

addNewsModal.addEventListener("click", (event) => {
  if (event.target === addNewsModal) {
    closeNewsModal();
  }
});

[newsTitleInput, newsCustomTitleInput, newsDateInput, newsCurrencyInput].forEach((input) => {
  input.addEventListener("input", updateSaveNewsButtonState);
  input.addEventListener("change", updateSaveNewsButtonState);
});

newsTitleInput.addEventListener("change", () => {
  syncCustomNewsTitleInput();
  updateSaveNewsButtonState();
  if (newsTitleInput.value === "__other__") {
    window.setTimeout(() => newsCustomTitleInput.focus(), 0);
  }
});

saveNewsEventButton.addEventListener("click", async () => {
  const payload = {
    id: editingNewsEventId || undefined,
    title: getNewsTitleValue(),
    eventTime: fromDateTimeLocalValue(newsDateInput.value),
    currency: newsCurrencyInput.value.trim(),
    impact: newsImpactInput.value,
    sourceUrl: newsSourceInput.value.trim(),
    notes: newsNotesInput.value.trim(),
    active: true,
  };

  if (!payload.title || !payload.eventTime || !payload.currency) {
    updateSaveNewsButtonState();
    return;
  }

  setButtonLoading(saveNewsEventButton, true, "Saving...");
  try {
    const result = await callNewsEvents(editingNewsEventId ? "update" : "create", payload);
    if (editingNewsEventId) {
      const existing = adminConfig.newsEvents.find((event) => event.id === editingNewsEventId);
      if (existing) {
        syncNewsEventFromResult(existing, result.event);
      }
    } else {
      const nextEvent = {};
      syncNewsEventFromResult(nextEvent, result.event);
      adminConfig.newsEvents.unshift(nextEvent);
    }
    renderNewsEvents();
    closeNewsModal();
    showToast(editingNewsEventId ? "Event saved" : "Event added");
  } catch {
    showToast("Could not save that news event.", "warning");
  } finally {
    setButtonLoading(saveNewsEventButton, false);
    updateSaveNewsButtonState();
  }
});

adminNewsList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-news-action]");
  if (!button) {
    return;
  }

  const index = Number(button.dataset.newsIndex);
  const newsEvent = adminConfig.newsEvents[index];
  if (!newsEvent) {
    return;
  }

  if (button.dataset.newsAction === "edit") {
    openNewsModal(newsEvent);
  }

  if (button.dataset.newsAction === "toggle-active") {
    setButtonLoading(button, true, newsEvent.active ? "Disabling..." : "Enabling...");
    try {
      const result = await callNewsEvents("update", {
        ...newsEvent,
        active: !newsEvent.active,
      });
      syncNewsEventFromResult(newsEvent, result.event);
      renderNewsEvents();
      showToast(newsEvent.active ? "Event enabled" : "Event disabled");
    } catch {
      showToast("Could not update that event.", "warning");
      setButtonLoading(button, false);
    }
  }

  if (button.dataset.newsAction === "remove") {
    const confirmed = await askForConfirmation({
      eyebrow: "Remove event",
      title: `Remove ${newsEvent.title}?`,
      message: "This event will no longer appear in News & Alerts. This cannot be undone.",
      confirmText: "Remove event",
      tone: "danger",
    });
    if (!confirmed) {
      return;
    }

    setButtonLoading(button, true, "Removing...");
    try {
      await callNewsEvents("delete", { id: newsEvent.id });
      adminConfig.newsEvents.splice(index, 1);
      renderNewsEvents();
      showToast("Event removed", "warning");
    } catch {
      showToast("Could not remove that event.", "warning");
      setButtonLoading(button, false);
    }
  }
});

[adminNewsSearch, adminNewsImpactFilter, adminNewsStatusFilter, adminNewsSortSelect].forEach((control) => {
  control.addEventListener("input", renderNewsEvents);
  control.addEventListener("change", renderNewsEvents);
});

adminConfirmCancelButton.addEventListener("click", () => resolveConfirmation(false));
adminConfirmActionButton.addEventListener("click", () => resolveConfirmation(true));
adminConfirmModal.addEventListener("cancel", (event) => {
  event.preventDefault();
  resolveConfirmation(false);
});
adminConfirmModal.addEventListener("click", (event) => {
  if (event.target === adminConfirmModal) {
    resolveConfirmation(false);
  }
});

adminLogoutButton.addEventListener("click", logoutAdmin);

updateGenerateUserButtonState();
updateSaveNewsButtonState();
updateNewsTimezoneHelper();
initialiseAdminGate();
