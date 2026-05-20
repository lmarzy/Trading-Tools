const ADMIN_AUTH_STORAGE_KEY = "trade-tools:admin-unlocked";
const ADMIN_PASSCODE_SALT = "trade-tools-admin-v1";
const ADMIN_PASSCODE_HASH = "878a37ef51145c058bd5260799abf1048d5bb34ebb520e7c1fc2f7827e032bd7";
const USER_PASSCODE_SALT = "trade-tools-v1";

const adminGate = document.querySelector("#adminGate");
const adminLoginForm = document.querySelector("#adminLoginForm");
const adminPasscodeInput = document.querySelector("#adminPasscodeInput");
const adminPasscodeError = document.querySelector("#adminPasscodeError");
const userLabelInput = document.querySelector("#userLabelInput");
const generateUserCodeButton = document.querySelector("#generateUserCodeButton");
const adminPasscodeList = document.querySelector("#adminPasscodeList");
const adminEmptyPasscodes = document.querySelector("#adminEmptyPasscodes");
const exportConfigButton = document.querySelector("#exportConfigButton");
const adminLogoutButton = document.querySelector("#adminLogoutButton");

const adminConfig = {
  passcodes: [],
};

let adminConfigLoaded = false;

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

function downloadFile(contents, filename, type) {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
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

function setAdminUnlocked() {
  document.body.classList.remove("auth-locked");
  adminGate.setAttribute("hidden", "");
  sessionStorage.setItem(ADMIN_AUTH_STORAGE_KEY, "true");
}

async function loadExistingConfig() {
  if (adminConfigLoaded) {
    return;
  }

  try {
    const response = await fetch(`../config.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      adminConfigLoaded = true;
      return;
    }

    const savedConfig = await response.json();
    if (Array.isArray(savedConfig.passcodes)) {
      adminConfig.passcodes = savedConfig.passcodes
        .filter((passcode) => passcode.label && passcode.hash)
        .map((passcode) => ({
          label: String(passcode.label),
          code: passcode.code ? String(passcode.code) : "",
          hash: String(passcode.hash),
        }));
    }
  } catch {
    // File previews may block config loading. Hosted/local-server admin pages can load ../config.json.
  } finally {
    adminConfigLoaded = true;
    renderPasscodes();
  }
}

function initialiseAdminGate() {
  if (sessionStorage.getItem(ADMIN_AUTH_STORAGE_KEY)) {
    setAdminUnlocked();
    loadExistingConfig();
    return;
  }

  document.body.classList.add("auth-locked");
  adminGate.removeAttribute("hidden");
  adminPasscodeInput.focus();
}

function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
  document.body.classList.add("auth-locked");
  adminGate.removeAttribute("hidden");
  adminPasscodeInput.value = "";
  adminPasscodeError.textContent = "";
  adminPasscodeInput.focus();
}

function generateNumericCode(length = 6) {
  const max = 10 ** length;
  return String(crypto.getRandomValues(new Uint32Array(1))[0] % max).padStart(length, "0");
}

function renderPasscodes() {
  adminEmptyPasscodes.classList.toggle("hidden", adminConfig.passcodes.length > 0);
  adminPasscodeList.innerHTML = adminConfig.passcodes
    .map(
      (passcode, index) => `
        <tr>
          <td>
            <input
              class="admin-table-input"
              type="text"
              value="${escapeHtml(passcode.label)}"
              data-original-value="${escapeHtml(passcode.label)}"
              aria-label="Edit passcode label"
              data-passcode-action="label"
              data-passcode-index="${index}"
            />
          </td>
          <td class="admin-code-cell">
            <span>${escapeHtml(passcode.code || "")}</span>
            ${
              passcode.code
                ? `<button class="icon-button admin-copy-button" type="button" title="Copy code" aria-label="Copy code" data-passcode-action="copy" data-passcode-index="${index}">⧉</button>`
                : ""
            }
          </td>
          <td class="admin-hash-cell">${escapeHtml(passcode.hash)}</td>
          <td>
            <div class="actions">
              <button class="icon-button" type="button" data-passcode-action="save" data-passcode-index="${index}" disabled>Save</button>
              <button class="icon-button delete" type="button" data-passcode-action="remove" data-passcode-index="${index}">Remove</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  adminPasscodeError.textContent = "";

  const inputHash = await sha256(`${ADMIN_PASSCODE_SALT}:${adminPasscodeInput.value.trim()}`);
  if (inputHash !== ADMIN_PASSCODE_HASH) {
    adminPasscodeInput.value = "";
    adminPasscodeError.textContent = "Admin passcode not recognised.";
    adminPasscodeInput.focus();
    return;
  }

  adminPasscodeInput.value = "";
  setAdminUnlocked();
  await loadExistingConfig();
});

generateUserCodeButton.addEventListener("click", async () => {
  const label = userLabelInput.value.trim() || `User ${adminConfig.passcodes.length + 1}`;
  const passcode = generateNumericCode();
  const hash = await sha256(`${USER_PASSCODE_SALT}:${passcode}`);

  adminConfig.passcodes.push({ label, code: passcode, hash });
  userLabelInput.value = "";
  renderPasscodes();
});

adminPasscodeList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-passcode-action]");
  if (!button) {
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
    const input = button.closest("tr").querySelector("[data-passcode-action='label']");
    passcode.label = input.value.trim() || "Untitled user";
    input.value = passcode.label;
    input.dataset.originalValue = passcode.label;
    button.disabled = true;
    button.textContent = "Saved";
    window.setTimeout(() => {
      button.textContent = "Save";
    }, 1100);
  }

  if (button.dataset.passcodeAction === "remove") {
    adminConfig.passcodes.splice(index, 1);
    renderPasscodes();
  }
});

adminPasscodeList.addEventListener("input", (event) => {
  if (event.target.dataset.passcodeAction !== "label") {
    return;
  }

  const row = event.target.closest("tr");
  const saveButton = row.querySelector("[data-passcode-action='save']");
  saveButton.disabled = event.target.value.trim() === event.target.dataset.originalValue;
});

exportConfigButton.addEventListener("click", () => {
  const exportConfig = {
    passcodes: adminConfig.passcodes.map(({ label, code, hash }) => ({ label, code, hash })),
  };

  downloadFile(JSON.stringify(exportConfig, null, 2), "config.json", "application/json;charset=utf-8");
});

adminLogoutButton.addEventListener("click", logoutAdmin);

initialiseAdminGate();
