const nav = document.querySelector(".site-nav");
const cursor = document.querySelector(".cursor-light");
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.18 });

reveals.forEach((item) => observer.observe(item));

window.addEventListener("scroll", () => {
  nav.classList.toggle("visible", window.scrollY > window.innerHeight * 0.55);

  const scrollY = window.scrollY;
  document.querySelectorAll(".story-still-main, .builder-photo, .memory-print").forEach((layer, index) => {
    const rect = layer.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const depth = (index % 3) + 1;
      layer.style.setProperty("--float", `${(rect.top - window.innerHeight / 2) * -0.018 * depth}px`);
    }
  });
});

window.addEventListener("pointermove", (event) => {
  cursor.style.setProperty("--x", `${event.clientX}px`);
  cursor.style.setProperty("--y", `${event.clientY}px`);
});

const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
  document.body.classList.add("night");
}

const occasionData = {
  wedding: {
    kicker: "Wedding Premiere",
    title: "A candlelit entrance, floral stage, and dinner designed like a film set.",
    copy: "Includes ceremony flow, reception dinner, bridal suite support, photography corners, and late-night celebration styling.",
    price: "From $8,500",
    detail: "Best for 250-500 guests",
    color: "#d8a84e"
  },
  reception: {
    kicker: "Reception Afterglow",
    title: "Grand arrival, formal dinner, speeches, and a dance floor that slowly becomes the night.",
    copy: "Built for family entrances, couple spotlight moments, luxury dining, and a warm post-ceremony celebration.",
    price: "From $6,900",
    detail: "Best for 200-450 guests",
    color: "#c9a15f"
  },
  birthday: {
    kicker: "Birthday Feature",
    title: "A glowing stage, dramatic reveal, dessert moment, and music-forward celebration.",
    copy: "Includes themed decor, cake spotlight, kid-friendly or adult lounge plans, and high-energy lighting.",
    price: "From $3,200",
    detail: "Best for 80-250 guests",
    color: "#c78058"
  },
  corporate: {
    kicker: "Corporate Gala",
    title: "Sharp staging, premium dining, presentation-ready lighting, and a confident guest flow.",
    copy: "Ideal for awards, launches, annual dinners, conferences, and brand celebrations with polished service.",
    price: "From $5,400",
    detail: "Best for 120-600 guests",
    color: "#9dafa8"
  },
  anniversary: {
    kicker: "Anniversary Chapter",
    title: "Romantic tables, memory walls, family speeches, and a room that honors years together.",
    copy: "Designed around intimate storytelling, elegant dinner service, portraits, and a soft golden atmosphere.",
    price: "From $4,100",
    detail: "Best for 80-300 guests",
    color: "#d6b07a"
  },
  engagement: {
    kicker: "Engagement Reveal",
    title: "A proposal glow, intimate stage, family dinner, and the first public celebration of yes.",
    copy: "Includes floral moments, ring ceremony setup, photography corners, and graceful family hosting.",
    price: "From $3,800",
    detail: "Best for 70-250 guests",
    color: "#e1b96f"
  }
};

const occasionCards = document.querySelectorAll(".occasion-card");
const kicker = document.querySelector("#occasion-kicker");
const title = document.querySelector("#occasion-title");
const copy = document.querySelector("#occasion-copy");
const price = document.querySelector("#occasion-price");
const detail = document.querySelector("#occasion-detail");

occasionCards.forEach((card) => {
  card.addEventListener("click", () => {
    const data = occasionData[card.dataset.occasion];
    occasionCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    kicker.textContent = data.kicker;
    title.textContent = data.title;
    copy.textContent = data.copy;
    price.textContent = data.price;
    detail.textContent = data.detail;
    document.documentElement.style.setProperty("--gold", data.color);
  });
});

const tooltip = document.querySelector(".hotspot-tooltip");
document.querySelectorAll(".hotspot").forEach((spot) => {
  spot.addEventListener("click", () => {
    tooltip.textContent = spot.dataset.label;
  });
});

const transformRange = document.querySelector("#transform-range");
const transformOverlay = document.querySelector("#transform-overlay");
const transformLabel = document.querySelector("#transform-label");
const transforms = [
  ["Empty Hall", "rgba(30, 38, 46, 0.42)"],
  ["Luxury Wedding", "rgba(216, 168, 78, 0.12)"],
  ["Corporate", "rgba(116, 140, 146, 0.22)"],
  ["Birthday", "rgba(196, 89, 75, 0.2)"],
  ["Reception", "rgba(241, 210, 139, 0.26)"]
];

transformRange.addEventListener("input", () => {
  const [label, color] = transforms[Number(transformRange.value)];
  transformLabel.textContent = label;
  transformOverlay.style.background = color;
});

const guests = document.querySelector("#guests");
const decor = document.querySelector("#decor");
const food = document.querySelector("#food");
const estimate = document.querySelector("#estimate");

function updateEstimate() {
  const guestCost = Number(guests.value || 0) * 42;
  const decorCost = Number(decor.value) * 1800;
  const foodCost = Number(food.value) * 1300;
  estimate.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(guestCost + decorCost + foodCost);
}

[guests, decor, food].forEach((control) => control.addEventListener("input", updateEstimate));
updateEstimate();

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 128);
document.querySelector("#days-left").textContent = Math.ceil((targetDate - new Date()) / 86400000);

const nameOne = document.querySelector("#name-one");
const nameTwo = document.querySelector("#name-two");
const previewOne = document.querySelector("#preview-one");
const previewTwo = document.querySelector("#preview-two");

function updateInvite() {
  previewOne.textContent = nameOne.value || "Your Name";
  previewTwo.textContent = nameTwo.value || "Partner";
}

[nameOne, nameTwo].forEach((input) => input.addEventListener("input", updateInvite));

const dotField = document.querySelector("#dot-field");
for (let index = 0; index < 120; index += 1) {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.animationDelay = `${index * 14}ms`;
  dotField.append(dot);
}

document.querySelector("#review-toggle").addEventListener("click", (event) => {
  event.currentTarget.closest(".review-card").classList.toggle("open");
});

document.querySelector(".booking-card form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector("button").textContent = "Your Story Request Was Sent";
});

document.querySelectorAll("button, .begin-link").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});
