const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const cursor = document.querySelector(".cursor");
const heroVideo = document.querySelector(".hero-video");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const floorTooltip = document.querySelector(".floor-tooltip");
const floorPreview = document.querySelector(".floor-preview img");
const selectorButtons = document.querySelectorAll(".selector-list button");
const selectorVisual = document.querySelector(".selector-visual");
const transformButtons = document.querySelectorAll(".transform-tabs button");
const transformStage = document.querySelector(".transform-stage");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox?.querySelector("img");
const calendarGrid = document.querySelector(".calendar-grid");
const calendarTitle = document.querySelector(".calendar-head h3");
const bookingModal = document.querySelector(".booking-modal");
const selectedDate = document.querySelector(".selected-date");

let galleryIndex = 0;
let currentDate = new Date();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateNav() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle("scrolled", scrolled);

  if (heroVideo && !prefersReducedMotion) {
    const heroProgress = Math.min(window.scrollY / window.innerHeight, 1);
    const scale = 1.12 - heroProgress * 0.12;
    heroVideo.style.setProperty("--hero-scale", scale.toFixed(3));
  }
}

window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  nav.classList.toggle("menu-open", open);
  document.body.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    nav.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

function animateCounter(counter) {
  const target = Number(counter.dataset.count);
  const isDecimal = !Number.isInteger(target);
  const duration = 1500;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    counter.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      counter.textContent = target === 4.9 ? "4.9 stars" : `${target.toLocaleString()}+`;
    }
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.55 });

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".zone").forEach((zone) => {
  const showTip = () => {
    floorTooltip.textContent = zone.dataset.tip;
    floorTooltip.classList.add("show");
    if (floorPreview && zone.dataset.img) {
      floorPreview.style.opacity = "0.35";
      floorPreview.style.transform = "scale(1.04)";
      setTimeout(() => {
        floorPreview.src = zone.dataset.img;
        floorPreview.alt = `${zone.textContent.trim()} preview`;
        floorPreview.style.opacity = "1";
        floorPreview.style.transform = "scale(1)";
      }, 120);
    }
  };
  const hideTip = () => floorTooltip.classList.remove("show");

  zone.addEventListener("mouseenter", showTip);
  zone.addEventListener("focus", showTip);
  zone.addEventListener("mouseleave", hideTip);
  zone.addEventListener("blur", hideTip);
});

function updateSelector(button) {
  const image = selectorVisual?.querySelector("img");
  const title = selectorVisual?.querySelector("h3");
  const copy = selectorVisual?.querySelector("p:not(.eyebrow)");
  const cta = selectorVisual?.querySelector("a");

  selectorButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  if (!image || !title || !copy || !cta) return;

  image.style.opacity = "0.35";
  setTimeout(() => {
    image.src = button.dataset.img;
    image.alt = `${button.dataset.title} celebration preview`;
    title.textContent = button.dataset.title;
    copy.textContent = button.dataset.copy;
    cta.textContent = button.dataset.cta;
    image.style.opacity = "1";
  }, 180);
}

selectorButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => updateSelector(button));
  button.addEventListener("focus", () => updateSelector(button));
  button.addEventListener("click", () => updateSelector(button));
});

function updateTransformation(button) {
  const image = transformStage?.querySelector("img");
  const title = transformStage?.querySelector("h3");
  const copy = transformStage?.querySelector("p:not(.eyebrow)");
  const decoration = transformStage?.querySelector("dd:nth-of-type(1)");
  const bestFor = transformStage?.querySelector("dd:nth-of-type(2)");

  transformButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  if (!image || !title || !copy || !decoration || !bestFor) return;

  image.style.opacity = "0.28";
  image.style.transform = "scale(1.035)";
  setTimeout(() => {
    image.src = button.dataset.img;
    image.alt = `${button.dataset.mode} transformation preview`;
    title.textContent = button.dataset.mode;
    copy.textContent = button.dataset.desc;
    decoration.textContent = button.dataset.style;
    bestFor.textContent = button.dataset.best;
    image.style.opacity = "1";
    image.style.transform = "scale(1)";
  }, 180);
}

transformButtons.forEach((button) => {
  button.addEventListener("click", () => updateTransformation(button));
});

function openLightbox(index) {
  galleryIndex = index;
  const img = galleryItems[galleryIndex].querySelector("img");
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function moveGallery(direction) {
  galleryIndex = (galleryIndex + direction + galleryItems.length) % galleryItems.length;
  openLightbox(galleryIndex);
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

document.querySelector(".close-lightbox")?.addEventListener("click", closeLightbox);
document.querySelector(".light-prev")?.addEventListener("click", () => moveGallery(-1));
document.querySelector(".light-next")?.addEventListener("click", () => moveGallery(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});

function renderCalendar(date) {
  if (!calendarGrid || !calendarTitle) return;

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const formatter = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" });

  calendarTitle.textContent = formatter.format(date);
  calendarGrid.innerHTML = "";

  for (let i = 0; i < firstDay; i += 1) {
    calendarGrid.appendChild(document.createElement("span"));
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const button = document.createElement("button");
    const status = day % 9 === 0 ? "booked" : day % 5 === 0 || day > 24 ? "peak" : "available";
    const isoDate = new Date(year, month, day).toLocaleDateString("en", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    button.type = "button";
    button.textContent = day;
    button.className = status;
    button.setAttribute("aria-label", `${isoDate}, ${status}`);
    button.addEventListener("click", () => {
      selectedDate.textContent = `${isoDate} is marked ${status}. Share your details and our planning team will confirm availability.`;
      bookingModal.classList.add("open");
      bookingModal.setAttribute("aria-hidden", "false");
    });
    calendarGrid.appendChild(button);
  }
}

document.querySelector(".prev-month")?.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendar(currentDate);
});

document.querySelector(".next-month")?.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendar(currentDate);
});

document.querySelector(".close-modal")?.addEventListener("click", () => {
  bookingModal.classList.remove("open");
  bookingModal.setAttribute("aria-hidden", "true");
});

bookingModal?.addEventListener("click", (event) => {
  if (event.target === bookingModal) {
    bookingModal.classList.remove("open");
    bookingModal.setAttribute("aria-hidden", "true");
  }
});

renderCalendar(currentDate);

const testimonials = [...document.querySelectorAll(".testimonial")];
let testimonialIndex = 0;

if (testimonials.length > 1 && !prefersReducedMotion && document.querySelector(".testimonial-slider")?.dataset.slider === "true") {
  setInterval(() => {
    testimonials[testimonialIndex].classList.remove("active");
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
  }, 4300);
}

document.querySelectorAll(".ripple").forEach((button) => {
  button.addEventListener("click", (event) => {
    const rect = button.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "ripple-dot";
    dot.style.left = `${event.clientX - rect.left}px`;
    dot.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(dot);
    dot.addEventListener("animationend", () => dot.remove());
  });
});

if (cursor) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.querySelectorAll("a, button, input, select, textarea, .magnetic").forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("active"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
}

if (!prefersReducedMotion) {
  document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.13}px, ${y * 0.13}px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });
  });

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".event-card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * -0.025;
      card.style.setProperty("--parallax", `${offset}px`);
    });
  }, { passive: true });
}

document.querySelector(".booking-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button[type='submit']");
  const original = button.textContent;
  button.textContent = "Request Sent";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
    event.currentTarget.reset();
  }, 2200);
});

(() => {
  const wizard = document.querySelector("[data-wizard]");
  if (!wizard) return;

  const storageKey = "maisonAureliaBookingWizard";
  const stepButtons = [...wizard.querySelectorAll("[data-step-jump]")];
  const steps = [...wizard.querySelectorAll(".wizard-step")];
  const nextButton = wizard.querySelector("[data-next-step]");
  const prevButton = wizard.querySelector("[data-prev-step]");
  const hallGrid = wizard.querySelector("[data-hall-grid]");
  const packageGrid = wizard.querySelector("[data-package-grid]");
  const accordionList = wizard.querySelector("[data-accordion-list]");
  const menuSearch = wizard.querySelector("[data-menu-search]");
  const reviewPanel = wizard.querySelector("[data-review-panel]");
  const designer = wizard.querySelector("[data-menu-designer]");
  const summaryEls = Object.fromEntries([...wizard.querySelectorAll("[data-summary]")].map((el) => [el.dataset.summary, el]));
  const summaryMeter = wizard.querySelector("[data-summary-meter]");

  const halls = [
    { id: "grand", name: "Grand Ballroom", image: "banquetimages/hall3.webp", capacity: 700, type: "Indoor", ac: true, stage: true, parking: true, price: 180000, features: ["Crystal chandeliers", "VIP entry", "LED wall", "Bridal room"] },
    { id: "royal", name: "Royal Reception Hall", image: "banquetimages/reception.webp", capacity: 520, type: "Indoor", ac: true, stage: true, parking: true, price: 145000, features: ["Reception stage", "Gold lighting", "Premium seating", "Dining flow"] },
    { id: "garden", name: "Garden & Entry Court", image: "banquetimages/lux%20entry.webp", capacity: 350, type: "Indoor / Outdoor", ac: false, stage: true, parking: true, price: 110000, features: ["Photo entry", "Ceremony setup", "Welcome lounge", "Open flow"] },
    { id: "private", name: "Private Celebration Suite", image: "banquetimages/hall1.webp", capacity: 180, type: "Indoor", ac: true, stage: false, parking: true, price: 75000, features: ["Family dining", "Private lounge", "Soft lighting", "Planner support"] }
  ];

  const packages = [
    { id: "silver", name: "Silver Menu", icon: "Silver", image: "banquetimages/food1.webp", plate: 1450, dishes: 22, live: 1, desserts: 3, beverages: 2, badges: ["Chef Recommendation"], included: ["Hot beverages", "Veg soup", "Veg starters", "Main course", "Desserts"] },
    { id: "gold", name: "Gold Menu", icon: "Gold", image: "banquetimages/food2.webp", plate: 1850, dishes: 32, live: 2, desserts: 5, beverages: 3, badges: ["Most Popular", "Chef Recommendation"], included: ["Expanded starters", "Chicken main course", "Live counter", "Premium desserts", "Beverages"] },
    { id: "platinum", name: "Platinum Menu", icon: "Platinum", image: "banquetimages/serving.webp", plate: 2350, dishes: 42, live: 3, desserts: 6, beverages: 4, badges: ["Premium Choice"], included: ["Non-veg starters", "Mutton or fish", "Multiple salads", "Live sweets", "Mocktail support"] },
    { id: "royal", name: "Royal Signature Menu", icon: "Royal", image: "banquetimages/table%20(2).webp", plate: 2950, dishes: 52, live: 5, desserts: 8, beverages: 5, badges: ["Signature Experience"], included: ["Royal starters", "BBQ add-ons", "Chef-curated mains", "Luxury desserts", "Dedicated coordinator"] }
  ];

  const categories = [
    { id: "hot-beverages", name: "Hot Beverages", desc: "Warm welcome drinks for arriving guests.", limit: 2, items: ["Tea", "Hot Water", "Hot Milk", "Coffee", "Black Coffee", "Milk Coffee", "Beans Coffee"] },
    { id: "veg-soup", name: "Veg Soup", desc: "Elegant vegetarian soup service.", limit: 2, items: ["Veg Clear", "Tom Yum", "Hot & Sour Soup", "Mushroom Soup", "Cream of Mushroom", "Green Peas Soup", "Mulligatawny (Lentil)", "Broccoli Soup", "Almond Soup"] },
    { id: "veg-starters", name: "Veg Starters", desc: "A generous selection of vegetarian bites and live counters.", limit: 6, groups: {
      Potato: ["French Fries", "Wedges Potato", "Mustangi Aloo", "Crispy Potato", "Honey Potato", "Aloo Stick", "Aloo Tikka", "Aloo Jeera", "Chips Chilli", "Veg Manchurian Dry"],
      Mushroom: ["Crunchy Mushroom", "Mushroom Choila", "Mushroom Sandheko", "Mushroom Tempura"],
      Paneer: ["Paneer Butter Pepper", "Paneer Szechuan Fry", "Paneer Chilly", "Paneer Pakoda", "Sesame Tofu"],
      Corn: ["Whole Corn Fry", "Boiled Corn", "Corn Sandheko", "Corn Fritter"],
      Cheese: ["Cheese & Cherry", "Cheese Potato", "Cheese Butter Pepper", "Cheese Ball"],
      "Mixed Veg Snacks": ["Veg Pakoda", "Brinjal Pakoda", "Veg Tempura", "Hara Bhara Kebab", "Spicy Veg Ball", "Onion Pakoda"],
      "Live Counter": ["Paneer BBQ", "Pani Puri (Live)", "Chat Counter (Live)"]
    } },
    { id: "non-veg-starters", name: "Non-Veg Starters", desc: "Premium meat and seafood starter selections.", limit: 4, groups: {
      "Pork / Buff": ["Pork Tawa", "Pork Chilly", "Pork Timmure", "Bandel Tawa", "Bandel Chilly", "Buff Chilly"],
      Chicken: ["Chicken Sekuwa", "Tiger Chicken", "Chicken Chilly", "Golden Chicken", "Malai Chicken Tikka", "Chicken Hot Wings", "Chicken Choila", "Chicken Nuggets", "Crunchy Chicken", "Chicken Sausage", "Chicken Tawa", "Chicken Momo (Live)", "Chicken BBQ (Live)"],
      Fish: ["Fish Finger", "Fish Kabab", "Dragon Fish", "Fish Fry", "Fish Tempura", "Fish Nuggets", "Fish Amritsari", "Grilled Basa Fish"]
    } },
    { id: "rice", name: "Rice / Pulao / Biryani", desc: "Choose the base rice service.", limit: 2, items: ["Plain Rice", "Brown Rice", "Jeera Rice", "Green Rice", "Masala Pulao", "Navratan Pulao", "Veg Biryani"] },
    { id: "roti", name: "Roti / Naan", desc: "Fresh breads for the main course.", limit: 2, items: ["Butter Naan", "Plain Naan", "Rumali Roti", "Paratha", "Tandoori Roti", "Kulcha", "Baby Naan"] },
    { id: "pasta", name: "Pasta", desc: "Continental comfort counter.", limit: 1, items: ["White Sauce Pasta", "Red Sauce Pasta", "Veg Lasagna", "Spaghetti"] },
    { id: "dal", name: "Dal", desc: "Classic lentil options.", limit: 1, items: ["Dal Makhani", "Dal Tadka", "Mustangi Dal", "Thakali Dal", "Gahat Dal"] },
    { id: "veg-curry", name: "Veg Curry", desc: "Rich vegetarian curry service.", limit: 3, items: ["Paneer Butter Masala", "Kadai Paneer", "Mutter Paneer", "Paneer Makhani", "Malai Kofta", "Mix Veg Jalfrezi", "Seasonal Mix Veg", "Grilled Veg", "Mushroom Do Pyaza"] },
    { id: "chicken", name: "Chicken", desc: "Select one chicken main course.", limit: 1, items: ["Chicken Roast", "Chicken Kadai", "Chicken Tandoori", "Cashew Chicken", "Chicken Sesame"] },
    { id: "mutton", name: "Mutton", desc: "Signature mutton curry options.", limit: 1, items: ["Nepali Mutton Curry", "Mutton Rogan Josh", "Mutton Rara", "Mutton Bhuna"] },
    { id: "fish", name: "Fish", desc: "Premium fish main course.", limit: 1, items: ["Fish Masala", "Fish Szechuan", "Nepali Fish", "Mongolian Fish Sauce"] },
    { id: "pickles", name: "Pickles", desc: "Traditional achar and sharp side flavors.", limit: 5, items: ["Tomato Achar", "Mixed Achar", "Lapsi Achar", "Mula Thakali Achar", "Mango Achar", "Pumpkin Seed Achar", "Aloo Gundruk Bhatmas", "Methi Achar", "Aloo Tama Achar"] },
    { id: "salads", name: "Salads", desc: "Fresh salad selection.", limit: 4, items: ["Green Salad", "Greek Salad", "Russian Salad", "Fruit Salad", "Apple Celery", "Potato Garlic", "Thai Cucumber", "Beetroot Salad", "Lettuce Salad"] },
    { id: "desserts", name: "Desserts", desc: "Hot and cold dessert finale.", limit: 6, groups: {
      Hot: ["Jalebi (Live)", "Lalmohan", "Rasbari", "Gajar Halwa", "Moong Halwa", "Beetroot Halwa"],
      Cold: ["Juju Dhau", "Fruit Bar", "Ice Cream", "Assorted Pastries", "Swiss Roll"]
    } },
    { id: "extra-live", name: "Extra Live Counters", desc: "Additional premium counters with extra cost.", limit: 3, items: ["Chicken BBQ + NPR 250", "Mutton BBQ + NPR 420", "Whole Bandel BBQ + NPR 550", "Seafood Combination + NPR 650", "Mongolian BBQ + NPR 350"] }
  ];

  const defaults = {
    step: 0,
    eventType: "Wedding",
    date: "",
    shift: "Morning",
    guests: 300,
    hallId: "royal",
    packageId: "gold",
    customize: "now",
    selections: {},
    notes: ""
  };

  let state = { ...defaults, ...readSaved() };

  function readSaved() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  }

  function save() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    const saveEl = wizard.querySelector(".wizard-save");
    saveEl.textContent = "Progress auto-saved";
  }

  function saveSubmission() {
    const submissionsKey = "maisonAureliaBookingSubmissions";
    const hall = currentHall();
    const pkg = currentPackage();
    let submissions = [];
    try {
      submissions = JSON.parse(localStorage.getItem(submissionsKey)) || [];
    } catch {
      submissions = [];
    }
    submissions.push({
      sentAt: new Date().toISOString(),
      booking: {
        eventType: state.eventType,
        date: state.date,
        shift: state.shift,
        guests: state.guests,
        hall: hall.name,
        package: pkg.name,
        plate: estimatedPlate(),
        total: estimatedPlate() * Number(state.guests || 0),
        customize: state.customize,
        selections: state.selections,
        notes: state.notes
      }
    });
    localStorage.setItem(submissionsKey, JSON.stringify(submissions));
  }

  function resetWizard() {
    state = { ...defaults, selections: {} };
    localStorage.removeItem(storageKey);
    menuSearch.value = "";
    renderAll();
    setStep(0);
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function money(value) {
    return `NPR ${Math.round(value).toLocaleString()}`;
  }

  function currentHall() {
    return halls.find((hall) => hall.id === state.hallId) || halls[0];
  }

  function currentPackage() {
    return packages.find((pkg) => pkg.id === state.packageId) || packages[0];
  }

  function selectedCount(categoryId) {
    return (state.selections[categoryId] || []).length;
  }

  function totalSelectedItems() {
    return Object.values(state.selections).reduce((sum, items) => sum + items.length, 0);
  }

  function completionPercent() {
    const completed = categories.filter((cat) => selectedCount(cat.id) >= cat.limit).length;
    return Math.round((completed / categories.length) * 100);
  }

  function estimatedPlate() {
    const pkg = currentPackage();
    const extra = (state.selections["extra-live"] || []).length * 250;
    return pkg.plate + extra;
  }

  function renderHalls() {
    const guests = Number(state.guests) || 0;
    hallGrid.innerHTML = halls.map((hall) => {
      const over = guests > hall.capacity;
      const selected = hall.id === state.hallId ? " selected" : "";
      return `
        <article class="hall-card${selected}" data-hall-id="${hall.id}">
          <img src="${hall.image}" alt="${hall.name}">
          <div>
            <h4>${hall.name}</h4>
            <p>${hall.type} - Capacity ${hall.capacity} guests - Starting ${money(hall.price)}</p>
            <div class="feature-list">
              <span>${hall.ac ? "Air Conditioned" : "Open Air"}</span>
              <span>${hall.stage ? "Stage" : "Flexible Stage"}</span>
              <span>${hall.parking ? "Parking" : "Limited Parking"}</span>
              ${over ? `<span class="warning-pill">Guest count exceeds capacity</span>` : `<span class="badge">Recommended</span>`}
            </div>
            <div class="feature-list">${hall.features.map((item) => `<span>${item}</span>`).join("")}</div>
            <button type="button">View Hall Gallery</button>
            <button type="button">360 Tour</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderPackages() {
    packageGrid.innerHTML = packages.map((pkg) => {
      const selected = pkg.id === state.packageId ? " selected" : "";
      return `
        <article class="menu-tier${selected}" data-package-id="${pkg.id}">
          <img src="${pkg.image}" alt="${pkg.name}">
          <div>
            <div class="feature-list">${pkg.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
            <h4>${pkg.icon} ${pkg.name}</h4>
            <p>${money(pkg.plate)} per plate - ${pkg.dishes} dishes included</p>
            <div class="package-facts">
              <span>${pkg.live} live counters</span>
              <span>${pkg.desserts} desserts</span>
              <span>${pkg.beverages} beverages</span>
            </div>
            <button type="button" data-toggle-included>View What's Included</button>
            <div class="included">${pkg.included.map((item) => `<p>${item}</p>`).join("")}</div>
          </div>
        </article>
      `;
    }).join("");
  }

  function flattenItems(category) {
    if (category.items) return category.items.map((item) => ({ group: "", item }));
    return Object.entries(category.groups).flatMap(([group, items]) => items.map((item) => ({ group, item })));
  }

  function renderAccordion(filter = "") {
    const query = filter.trim().toLowerCase();
    accordionList.innerHTML = categories.map((category, index) => {
      const selected = state.selections[category.id] || [];
      const allItems = flattenItems(category);
      const visible = query ? allItems.filter(({ item, group }) => `${group} ${item}`.toLowerCase().includes(query)) : allItems;
      if (!visible.length) return "";
      const complete = selected.length >= category.limit;
      const grouped = visible.reduce((acc, entry) => {
        const group = entry.group || "Items";
        acc[group] = acc[group] || [];
        acc[group].push(entry.item);
        return acc;
      }, {});

      return `
        <article class="accordion-section ${index === 0 || !complete ? "open" : ""}" data-category-id="${category.id}">
          <button class="accordion-head" type="button">
            <span>
              <h4>${category.name}</h4>
              <p>${category.desc} Choose Any: ${category.limit}</p>
            </span>
            <span class="accordion-progress">${selected.length}/${category.limit}</span>
          </button>
          <div class="accordion-body">
            <div class="chip-grid">
              ${Object.entries(grouped).map(([group, items]) => `
                ${group !== "Items" ? `<div class="menu-subtitle">${group}</div>` : ""}
                ${items.map((item) => {
                  const isSelected = selected.includes(item);
                  const disabled = !isSelected && selected.length >= category.limit;
                  return `<button class="menu-chip${isSelected ? " selected" : ""}" type="button" ${disabled ? "disabled" : ""} data-menu-item="${item}">${item}</button>`;
                }).join("")}
              `).join("")}
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderReview() {
    const hall = currentHall();
    const pkg = currentPackage();
    const selectedItems = Object.entries(state.selections)
      .filter(([, items]) => items.length)
      .map(([id, items]) => {
        const category = categories.find((cat) => cat.id === id);
        return `<p><strong>${category?.name || id}:</strong> ${items.join(", ")}</p>`;
      }).join("") || "<p>Menu customization will be finalized later with our planner.</p>";

    reviewPanel.innerHTML = `
      <article class="review-card"><h4>Booking Details</h4><p>${state.eventType} - ${state.date || "Date not selected"} - ${state.shift}</p><p>${state.guests} guests</p></article>
      <article class="review-card"><h4>Selected Hall</h4><p>${hall.name}</p><p>Capacity ${hall.capacity} - ${hall.type}</p></article>
      <article class="review-card"><h4>Menu Package</h4><p>${pkg.name}</p><p>${money(pkg.plate)} starting per plate</p></article>
      <article class="review-card"><h4>Estimated Cost</h4><p>${money(estimatedPlate())} per plate</p><p>${money(estimatedPlate() * Number(state.guests || 0))} estimated total</p></article>
      <article class="review-card" style="grid-column:1/-1"><h4>Customized Menu</h4>${selectedItems}</article>
    `;
  }

  function updateSummary() {
    const hall = currentHall();
    const pkg = currentPackage();
    const guests = Number(state.guests) || 0;
    const completion = completionPercent();
    summaryEls.hall.textContent = hall.name;
    summaryEls.package.textContent = pkg.name;
    summaryEls.guests.textContent = `${guests} guests`;
    summaryEls.items.textContent = `${totalSelectedItems()} items`;
    summaryEls.completion.textContent = state.customize === "later" ? "Planner assisted" : `${completion}%`;
    summaryEls.plate.textContent = money(estimatedPlate());
    summaryEls.total.textContent = money(estimatedPlate() * guests);
    summaryMeter.style.width = state.customize === "later" ? "100%" : `${completion}%`;
  }

  function setStep(step) {
    state.step = Math.max(0, Math.min(step, steps.length - 1));
    steps.forEach((el, index) => el.classList.toggle("active", index === state.step));
    stepButtons.forEach((button, index) => {
      button.classList.toggle("active", index === state.step);
      button.classList.toggle("complete", index < state.step);
    });
    prevButton.style.visibility = state.step === 0 ? "hidden" : "visible";
    nextButton.textContent = state.step === steps.length - 1 ? "Finish" : "Continue";
    renderReview();
    updateSummary();
    save();
  }

  function renderAll() {
    wizard.querySelectorAll("[data-booking-field]").forEach((field) => {
      if (field.type !== "textarea") field.value = state[field.dataset.bookingField] || field.value;
      if (field.type === "textarea") field.value = state[field.dataset.bookingField] || "";
    });
    designer.classList.toggle("hidden", state.customize === "later");
    wizard.querySelectorAll("[data-custom-choice]").forEach((button) => button.classList.toggle("active", button.dataset.customChoice === state.customize));
    renderHalls();
    renderPackages();
    renderAccordion(menuSearch.value);
    renderReview();
    updateSummary();
  }

  wizard.addEventListener("input", (event) => {
    const field = event.target.closest("[data-booking-field]");
    if (!field) return;
    state[field.dataset.bookingField] = field.type === "number" ? Number(field.value) : field.value;
    renderHalls();
    renderReview();
    updateSummary();
    save();
  });

  wizard.addEventListener("click", (event) => {
    const hallCard = event.target.closest("[data-hall-id]");
    const packageCard = event.target.closest("[data-package-id]");
    const includedToggle = event.target.closest("[data-toggle-included]");
    const stepJump = event.target.closest("[data-step-jump]");
    const choice = event.target.closest("[data-custom-choice]");
    const accordionHead = event.target.closest(".accordion-head");
    const chip = event.target.closest("[data-menu-item]");

    if (stepJump) setStep(Number(stepJump.dataset.stepJump));
    if (hallCard) { state.hallId = hallCard.dataset.hallId; renderHalls(); updateSummary(); save(); }
    if (packageCard && !includedToggle) { state.packageId = packageCard.dataset.packageId; renderPackages(); updateSummary(); save(); }
    if (includedToggle) includedToggle.closest(".menu-tier").classList.toggle("open");
    if (choice) {
      state.customize = choice.dataset.customChoice;
      if (state.customize === "later") setStep(4);
      renderAll();
      save();
    }
    if (accordionHead) accordionHead.closest(".accordion-section").classList.toggle("open");
    if (chip) {
      const section = chip.closest("[data-category-id]");
      const categoryId = section.dataset.categoryId;
      const category = categories.find((cat) => cat.id === categoryId);
      const item = chip.dataset.menuItem;
      const selected = state.selections[categoryId] || [];
      state.selections[categoryId] = selected.includes(item)
        ? selected.filter((entry) => entry !== item)
        : selected.length < category.limit ? [...selected, item] : selected;
      renderAccordion(menuSearch.value);
      updateSummary();
      save();
    }
  });

  menuSearch?.addEventListener("input", () => renderAccordion(menuSearch.value));

  nextButton.addEventListener("click", () => {
    if (state.step === 3 && state.customize === "later") setStep(4);
    else if (state.step < steps.length - 1) setStep(state.step + 1);
    else wizard.querySelector("[data-confirm-booking]").click();
  });

  prevButton.addEventListener("click", () => setStep(state.step - 1));
  wizard.querySelector("[data-edit-booking]").addEventListener("click", () => setStep(0));
  wizard.querySelector("[data-download-summary]").addEventListener("click", () => {
    setStep(4);
    document.body.classList.add("print-booking-summary");
    setTimeout(() => window.print(), 100);
  });
  window.addEventListener("afterprint", () => document.body.classList.remove("print-booking-summary"));
  wizard.querySelector("[data-confirm-booking]").addEventListener("click", () => {
    saveSubmission();
    alert("Booking request sent. Your selection has been saved, and the wizard will reset for a new booking.");
    resetWizard();
  });
  wizard.querySelector("[data-pay-advance]").addEventListener("click", () => {
    saveSubmission();
    alert("Advance payment request sent. Connect your payment provider here. The wizard will reset for a new booking.");
    resetWizard();
  });

  renderAll();
  setStep(Number(state.step) || 0);
})();
