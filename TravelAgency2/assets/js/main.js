const site = {
  phone: "9844550537",
  whatsapp: "9779844550537",
  email: "hello@ificode.com",
  address: "iFiCode Inclusive, Nayabazar, Balaju, Kathmandu",
};

const packages = [
  { id: "everest-view", title: "Everest View Luxury Trek", category: "Adventure", destination: "Everest Region", country: "Nepal", price: 1840, duration: 11, rating: 4.9, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80", inclusions: "Guide, lodges, permits, transfers", exclusions: "International flights, insurance", url: "package-detail.html" },
  { id: "kathmandu-heritage", title: "Kathmandu Heritage Luxe", category: "Luxury", destination: "Kathmandu Valley", country: "Nepal", price: 760, duration: 5, rating: 4.8, image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80", inclusions: "Private guide, boutique hotel, transfers", exclusions: "Meals not listed", url: "package-detail.html" },
  { id: "family-nepal", title: "Nepal Family Highlights", category: "Family", destination: "Kathmandu, Pokhara, Chitwan", country: "Nepal", price: 1280, duration: 9, rating: 4.9, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", inclusions: "Hotels, safari, guide, transport", exclusions: "Personal expenses", url: "package-detail.html" },
  { id: "bhutan-honeymoon", title: "Bhutan Honeymoon Escape", category: "Honeymoon", destination: "Paro and Thimphu", country: "Bhutan", price: 2380, duration: 7, rating: 4.9, image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80", inclusions: "Hotels, guide, permits, meals", exclusions: "Flights, tips", url: "package-detail.html" },
  { id: "bali-wellness", title: "Bali Wellness Retreat", category: "Luxury", destination: "Ubud and Nusa Dua", country: "Indonesia", price: 1460, duration: 8, rating: 4.7, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80", inclusions: "Villa stays, spa, transfers", exclusions: "International flights", url: "package-detail.html" },
  { id: "budget-thailand", title: "Thailand Smart Escape", category: "Budget", destination: "Bangkok and Phuket", country: "Thailand", price: 690, duration: 6, rating: 4.6, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", inclusions: "Hotels, city tour, transfers", exclusions: "Visa, optional tours", url: "package-detail.html" }
];

const destinations = [
  { title: "Kathmandu Valley", country: "Nepal", region: "South Asia", popularity: 98, price: 420, duration: 4, rating: 4.9, image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80" },
  { title: "Everest Region", country: "Nepal", region: "Himalaya", popularity: 96, price: 1140, duration: 10, rating: 4.9, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80" },
  { title: "Pokhara", country: "Nepal", region: "South Asia", popularity: 92, price: 380, duration: 3, rating: 4.8, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Paro", country: "Bhutan", region: "Himalaya", popularity: 88, price: 1620, duration: 6, rating: 4.9, image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { title: "Bali", country: "Indonesia", region: "Southeast Asia", popularity: 91, price: 940, duration: 7, rating: 4.7, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80" },
  { title: "Phuket", country: "Thailand", region: "Southeast Asia", popularity: 86, price: 620, duration: 5, rating: 4.6, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" }
];

const blogs = [
  { title: "First Time in Nepal: How to Plan Well", category: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80", excerpt: "A practical premium route for culture, comfort and mountain views.", url: "blog-detail.html" },
  { title: "Luxury Travel Without Wasted Spend", category: "Luxury", image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=900&q=80", excerpt: "Where to upgrade, where to simplify and how to keep value high.", url: "blog-detail.html" },
  { title: "Trekking Safety Tips for New Hikers", category: "Tips", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=900&q=80", excerpt: "Pacing, altitude, packing and guide selection essentials.", url: "blog-detail.html" },
  { title: "Kathmandu Heritage Walk Guide", category: "Guides", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80", excerpt: "How to experience the valley slowly, respectfully and beautifully.", url: "blog-detail.html" }
];

const gallery = [
  ["mountain", "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80", "Everest region"],
  ["culture", "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80", "Kathmandu temple"],
  ["luxury", "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=900&q=80", "Luxury stay"],
  ["beach", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", "Beach escape"],
  ["mountain", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", "Mountain road"],
  ["culture", "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80", "Travel planning"],
  ["beach", "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80", "Bali retreat"],
  ["luxury", "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80", "Resort pool"]
];

const currencies = {
  USD: { symbol: "$", rate: 1 },
  NPR: { symbol: "Rs ", rate: 133 },
  EUR: { symbol: "EUR ", rate: 0.92 }
};

function activeCurrency() {
  return localStorage.getItem("localify-currency") || "USD";
}

function formatPrice(amount) {
  const currency = currencies[activeCurrency()] || currencies.USD;
  return `${currency.symbol}${Math.round(amount * currency.rate).toLocaleString()}`;
}

const faqs = [
  ["Can Localify customize tours?", "Yes. Every tour can be adjusted by travel dates, hotel level, pace, budget, guide style and special interests."],
  ["Do you provide visa assistance?", "We provide document guidance, appointment preparation and destination-specific visa support."],
  ["Is travel insurance required?", "Insurance is strongly recommended for all trips and required for trekking or adventure routes."],
  ["How do I pay for a package?", "After itinerary confirmation, our team shares payment instructions and a clear invoice."],
  ["Can you book flights and hotels only?", "Yes. Localify also handles standalone flight, hotel, insurance and corporate travel requests."],
  ["Do you support travelers during the trip?", "Yes. Guests receive WhatsApp-based support and local operations assistance throughout the journey."]
];

function headerMarkup() {
  return `
    <a class="brand" href="index.html" aria-label="Localify home"><span>Localify</span><small>Premium Travel</small></a>
    <button class="nav-toggle" data-nav-toggle aria-label="Open navigation"><span></span><span></span><span></span></button>
    <nav class="main-nav" data-nav>
      <a href="index.html">Home</a><a href="about.html">About</a><a href="destinations.html">Destinations</a><a href="packages.html">Packages</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a><a href="blog.html">Blog</a><a href="contact.html">Contact</a>
    </nav>
    <div class="header-actions"><button class="icon-btn" data-theme-toggle aria-label="Toggle dark mode">DM</button><select class="currency-select" data-currency aria-label="Select currency"><option value="USD">USD</option><option value="NPR">NPR</option><option value="EUR">EUR</option></select><a class="btn btn-gold" href="packages.html">Book Now</a></div>`;
}

function footerMarkup() {
  return `
    <div><strong class="brand-text">Localify</strong><p>Explore the best with localify. Premium custom travel from Kathmandu with trusted local insight.</p><p>${site.address}</p></div>
    <div><h3>Explore</h3><a href="destinations.html">Destinations</a><a href="packages.html">Packages</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a></div>
    <div><h3>Company</h3><a href="about.html">About</a><a href="testimonials.html">Testimonials</a><a href="faq.html">FAQ</a><a href="blog.html">Blog</a></div>
    <div><h3>Contact</h3><a href="tel:+977${site.phone}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a><a href="https://wa.me/${site.whatsapp}">WhatsApp</a><a href="https://www.ificode.com">www.ificode.com</a></div>`;
}

function initChrome() {
  document.querySelectorAll(".site-header").forEach((header) => {
    if (!header.children.length) header.innerHTML = headerMarkup();
  });
  document.querySelectorAll(".site-footer").forEach((footer) => {
    footer.innerHTML = footerMarkup();
  });
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
  document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
    button.addEventListener("click", () => document.querySelector("[data-nav]")?.classList.toggle("open"));
  });
  const savedTheme = localStorage.getItem("localify-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("localify-theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
  });
  document.querySelectorAll("[data-currency]").forEach((select) => {
    select.value = activeCurrency();
    select.addEventListener("input", () => {
      localStorage.setItem("localify-currency", select.value);
      initPackages();
      initDestinations();
      renderWishlist();
      initCalculator();
    });
  });
}

function packageCard(pkg) {
  const saved = getWishlist().includes(pkg.id) ? "saved" : "";
  return `<article class="package-card reveal"><img src="${pkg.image}" alt="${pkg.title}" loading="lazy"><div class="card-body"><span class="category">${pkg.category}</span><h3>${pkg.title}</h3><p>${pkg.destination}</p><div class="package-meta"><span>${pkg.duration} days</span><span>Rating ${pkg.rating}</span><span>${pkg.inclusions}</span></div><div class="card-actions"><strong class="price">${formatPrice(pkg.price)}</strong><button class="wishlist ${saved}" data-wishlist="${pkg.id}" aria-label="Save ${pkg.title}">+</button><a class="btn btn-blue" href="${pkg.url}">Details</a></div></div></article>`;
}

function destinationCard(item) {
  return `<article class="feature-card reveal"><img src="${item.image}" alt="${item.title}" loading="lazy"><div><span>${item.country} - ${item.region}</span><h3>${item.title}</h3><p>From ${formatPrice(item.price)} - ${item.duration} days - Rating ${item.rating}</p><a class="btn btn-blue" href="destination-detail.html">Explore</a></div></article>`;
}

function blogCard(post) {
  return `<article class="blog-card reveal"><img src="${post.image}" alt="${post.title}" loading="lazy"><div><span>${post.category}</span><h3>${post.title}</h3><p>${post.excerpt}</p><a class="btn btn-blue" href="${post.url}">Read Guide</a></div></article>`;
}

function getWishlist() {
  try { return JSON.parse(localStorage.getItem("localify-wishlist")) || []; } catch { return []; }
}

function setWishlist(ids) {
  localStorage.setItem("localify-wishlist", JSON.stringify(ids));
  renderWishlist();
}

function initPackages() {
  const featured = document.querySelector("[data-featured-packages]");
  if (featured) featured.innerHTML = packages.slice(0, 3).map(packageCard).join("");
  const grid = document.querySelector("[data-packages]");
  if (!grid) return;
  const render = () => {
    const query = document.querySelector("[data-package-search]").value.toLowerCase();
    const category = document.querySelector("[data-package-category]").value;
    const budget = Number(document.querySelector("[data-package-budget]").value || Infinity);
    const filtered = packages.filter((pkg) => {
      const text = `${pkg.title} ${pkg.destination} ${pkg.country}`.toLowerCase();
      return text.includes(query) && (!category || pkg.category === category) && pkg.price <= budget;
    });
    grid.innerHTML = filtered.map(packageCard).join("") || "<p>No packages match your filters.</p>";
    bindWishlist();
    revealNow();
  };
  document.querySelectorAll("[data-package-search], [data-package-category], [data-package-budget], [data-package-date]").forEach((el) => el.addEventListener("input", render));
  render();
}

function bindWishlist() {
  document.querySelectorAll("[data-wishlist]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.wishlist;
      const ids = getWishlist();
      const next = ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id];
      setWishlist(next);
      button.classList.toggle("saved");
      toast(next.includes(id) ? "Saved to trips" : "Removed from saved trips");
    });
  });
}

function renderWishlist() {
  const panel = document.querySelector("[data-wishlist-panel]");
  if (!panel) return;
  const saved = packages.filter((pkg) => getWishlist().includes(pkg.id));
  panel.innerHTML = saved.length ? saved.map((pkg) => `<p><strong>${pkg.title}</strong><br>${pkg.duration} days - ${formatPrice(pkg.price)} - ${pkg.category}</p>`).join("") : "<p>No saved trips yet. Tap the heart on any package to compare later.</p>";
}

function initCalculator() {
  const form = document.querySelector("[data-calculator]");
  if (!form) return;
  const output = form.querySelector("[data-calculator-total]");
  const render = () => {
    const travelers = Number(form.travelers.value || 1);
    const days = Number(form.days.value || 1);
    const daily = Number(form.daily.value || 0);
    const flights = Number(form.flights.value || 0);
    output.textContent = formatPrice((travelers * days * daily) + (travelers * flights));
  };
  form.querySelectorAll("input").forEach((input) => input.addEventListener("input", render));
  render();
}

function initDestinations() {
  const grid = document.querySelector("[data-destinations]");
  if (!grid) return;
  const render = () => {
    const query = document.querySelector("[data-destination-search]").value.toLowerCase();
    const country = document.querySelector("[data-country-filter]").value;
    const region = document.querySelector("[data-region-filter]").value;
    const sort = document.querySelector("[data-sort-filter]").value;
    const filtered = destinations.filter((item) => {
      const text = `${item.title} ${item.country} ${item.region}`.toLowerCase();
      return text.includes(query) && (!country || item.country === country) && (!region || item.region === region);
    }).sort((a, b) => sort === "price" ? a.price - b.price : sort === "rating" ? b.rating - a.rating : b.popularity - a.popularity);
    grid.innerHTML = filtered.map(destinationCard).join("") || "<p>No destinations match your filters.</p>";
    revealNow();
  };
  document.querySelectorAll("[data-destination-search], [data-country-filter], [data-region-filter], [data-sort-filter]").forEach((el) => el.addEventListener("input", render));
  render();
}

function initBlogs() {
  const featured = document.querySelector("[data-featured-blogs]");
  if (featured) featured.innerHTML = blogs.slice(0, 3).map(blogCard).join("");
  const grid = document.querySelector("[data-blogs]");
  if (!grid) return;
  const render = () => {
    const query = document.querySelector("[data-blog-search]").value.toLowerCase();
    const category = document.querySelector("[data-blog-category]").value;
    const filtered = blogs.filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(query) && (!category || post.category === category));
    grid.innerHTML = filtered.map(blogCard).join("") || "<p>No articles match your filters.</p>";
    revealNow();
  };
  document.querySelectorAll("[data-blog-search], [data-blog-category]").forEach((el) => el.addEventListener("input", render));
  render();
}

function initGallery() {
  const grid = document.querySelector("[data-gallery]");
  if (!grid) return;
  const render = (category = "all") => {
    grid.innerHTML = gallery.filter((item) => category === "all" || item[0] === category).map((item) => `<img src="${item[1]}" alt="${item[2]}" loading="lazy" data-lightbox-image>`).join("");
    bindLightbox();
  };
  document.querySelectorAll("[data-gallery-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-gallery-filter]").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      render(button.dataset.galleryFilter);
    });
  });
  render();
}

function bindLightbox() {
  const box = document.querySelector("[data-lightbox]");
  if (!box) return;
  const img = box.querySelector("img");
  document.querySelectorAll("[data-lightbox-image]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      img.src = thumb.src;
      img.alt = thumb.alt;
      box.classList.add("open");
    });
  });
  box.querySelector("button").addEventListener("click", () => box.classList.remove("open"));
  box.addEventListener("click", (event) => { if (event.target === box) box.classList.remove("open"); });
}

function initFaqs() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;
  const render = () => {
    const query = document.querySelector("[data-faq-search]").value.toLowerCase();
    const filtered = faqs.filter(([q, a]) => `${q} ${a}`.toLowerCase().includes(query));
    list.innerHTML = filtered.map(([q, a]) => `<button>${q}</button><div>${a}</div>`).join("");
    bindAccordion(list);
  };
  document.querySelector("[data-faq-search]").addEventListener("input", render);
  render();
}

function bindAccordion(scope = document) {
  scope.querySelectorAll(".accordion button").forEach((button) => {
    button.addEventListener("click", () => button.classList.toggle("open"));
  });
}

function initForms() {
  document.querySelectorAll("form").forEach((form) => {
    if (form.matches("[data-calculator]")) return;
    if (form.dataset.bound) return;
    form.dataset.bound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      console.info("Localify form submission", data);
      form.reset();
      toast("Thank you. Localify will contact you shortly.");
    });
  });
  document.querySelector("[data-chat]")?.addEventListener("click", () => toast("Live chat placeholder: connect your preferred chat widget here."));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.counter);
      let current = 0;
      const steps = 45;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = target % 1 ? current.toFixed(1) : Math.round(current).toLocaleString();
      }, 24);
      observer.unobserve(el);
    });
  }, { threshold: 0.35 });
  counters.forEach((counter) => observer.observe(counter));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function revealNow() {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}

function toast(message) {
  document.querySelector(".toast")?.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  initPackages();
  initDestinations();
  initBlogs();
  initGallery();
  initFaqs();
  bindAccordion();
  bindWishlist();
  renderWishlist();
  initForms();
  initCalculator();
  initCounters();
  initReveal();
});
