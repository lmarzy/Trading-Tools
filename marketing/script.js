const SKOOL_URL = "https://www.skool.com/the-traders-hub-3376/about";

document.querySelectorAll("[data-skool-link]").forEach((link) => {
  link.href = SKOOL_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const tourData = {
  dashboard: {
    eyebrow: "Your command centre",
    title: "Start each session with the full picture.",
    description: "See this week's performance, today's economic events, training progress, and weekly review status before deciding what needs your attention.",
    benefits: ["Immediate weekly performance snapshot", "Upcoming events in your local timezone", "Clear next actions across the hub"],
    image: "images/dashboard-original.png",
    alt: "Traders Hub dashboard",
  },
  journal: {
    eyebrow: "Your trading evidence",
    title: "Record more than the final result.",
    description: "Keep the trade, its context, execution, notes, discipline, and personal-rule results together so every row becomes useful evidence.",
    benefits: ["CFD lots and futures contracts", "Filters across your complete setup", "Detailed records and reflection"],
    image: "images/real-journal.png",
    alt: "Traders Hub journal",
  },
  analytics: {
    eyebrow: "Patterns made visible",
    title: "Understand what is driving your results.",
    description: "Review performance alongside behaviour, account data, discipline, strategy outcomes, and your equity curve.",
    benefits: ["Account-level performance", "Discipline and clean-trade insights", "Weekly, monthly, and strategy views"],
    image: "images/real-analytics.png",
    alt: "Traders Hub analytics",
  },
  calculator: {
    eyebrow: "Risk before entry",
    title: "Size the trade before taking the risk.",
    description: "Translate a planned risk amount into CFD lots or futures contracts and see the actual exposure after rounding.",
    benefits: ["Fixed or percentage-based risk", "Lots and contracts", "Clear actual-risk breakdown"],
    image: "images/real-calculator.png",
    alt: "Traders Hub position size calculator",
  },
  training: {
    eyebrow: "Learn inside the hub",
    title: "Build knowledge one clear concept at a time.",
    description: "Progress through beginner-friendly learning paths with diagrams, questions, explanations, and saved progress.",
    benefits: ["Candlestick foundations", "FVG and inverse FVG modules", "Interactive questions and diagrams"],
    image: "images/real-training.png",
    alt: "Traders Hub training academy",
  },
};

const tourImage = document.querySelector("#tourImage");
const tourEyebrow = document.querySelector("#tourEyebrow");
const tourTitle = document.querySelector("#tourTitle");
const tourDescription = document.querySelector("#tourDescription");
const tourBenefits = document.querySelector("#tourBenefits");

document.querySelectorAll("[data-tour-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = tourData[button.dataset.tourTab];
    if (!item) return;

    document.querySelectorAll("[data-tour-tab]").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    tourEyebrow.textContent = item.eyebrow;
    tourTitle.textContent = item.title;
    tourDescription.textContent = item.description;
    tourBenefits.innerHTML = item.benefits.map((benefit) => `<li>${benefit}</li>`).join("");
    tourImage.classList.add("changing");
    window.setTimeout(() => {
      tourImage.src = item.image;
      tourImage.alt = item.alt;
      tourImage.classList.remove("changing");
    }, 130);
  });
});

document.querySelectorAll(".faq details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq details").forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});
