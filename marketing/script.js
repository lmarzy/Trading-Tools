const SKOOL_URL = "https://www.skool.com/the-traders-hub-3376/about";

document.querySelectorAll("[data-skool-link]").forEach((link) => {
  link.href = SKOOL_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
