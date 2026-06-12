const categories = [
  "All",
  "Business",
  "Portfolio",
  "School",
  "Restaurant",
  "E-commerce",
  "NGO",
  "Travel",
  "Clinic"
];

const demoProjects = [
  {
    name: "Himalayan Durbar",
    category: "Restaurant",
    description: "A fine dining restaurant website with polished menu, reservation, and premium hospitality sections.",
    features: ["Hero dining experience", "Menu showcase", "Reservation call-to-action", "Responsive restaurant layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "restaurant.html",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Avi's Artisan Cafe",
    category: "Restaurant",
    description: "Warm cafe landing page for coffee, bakery items, and local cafe storytelling.",
    features: ["Cafe brand hero", "Menu highlights", "Location-focused content", "Mobile-friendly sections"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "cafesample.html",
    thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Veloura Cafe",
    category: "Restaurant",
    description: "Modern crafted-coffee website with elegant visuals and conversion-focused content.",
    features: ["Premium cafe positioning", "Product storytelling", "Smooth page sections", "Contact-ready layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "cafesample2.html",
    thumbnail: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Ifico Heritage Banquet",
    category: "Business",
    description: "Event venue and banquet hall website designed for weddings, parties, and corporate bookings.",
    features: ["Venue presentation", "Event package sections", "Booking prompts", "Large visual gallery feel"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "banquet.html",
    thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Legal Heart",
    category: "Business",
    description: "Professional law firm website with trust-building service pages and consultation messaging.",
    features: ["Practice area sections", "Attorney-focused content", "Consultation CTA", "Professional service design"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "lawfirmsample.html",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "EverCare Medical Clinic",
    category: "Clinic",
    description: "Healthcare clinic website for appointments, services, doctors, and patient trust.",
    features: ["Clinic hero", "Healthcare services", "Appointment CTA", "Accessible responsive layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "Clinic/index.html",
    thumbnail: "Clinic/assets/clinic-hero.png"
  },
  {
    name: "PawCare Veterinary Clinic",
    category: "Clinic",
    description: "Friendly veterinary website for pet care services, clinic trust, and appointment inquiries.",
    features: ["Veterinary services", "Pet care messaging", "CTA sections", "Local clinic presentation"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "trial.html",
    thumbnail: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Harmony Veterinary Clinic",
    category: "Clinic",
    description: "Expert pet care website with calm clinic branding and clear service pathways.",
    features: ["Service overview", "Trust-focused sections", "Contact prompts", "Responsive pet clinic layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "vetsample.html",
    thumbnail: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Localify Travel",
    category: "Business",
    description: "Premium travel agency website for Nepal tours, local experiences, and adventure packages.",
    features: ["Travel hero", "Destination cards", "Package highlights", "Lead-generation sections"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "TravelAgency/index.html",
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Localify Multi-page Travel",
    category: "Business",
    description: "A complete multi-page travel agency demo with destinations, packages, blog, FAQs, and contact pages.",
    features: ["Multi-page navigation", "Package detail pages", "Blog and gallery", "Contact and map page"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "TravelAgency2/index.html",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Discover Nepal Local Eyes",
    category: "Business",
    description: "Single-page travel and adventure concept with destination-led storytelling.",
    features: ["Tourism landing page", "Adventure sections", "Visual destination layout", "Mobile-ready design"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "t1.html",
    thumbnail: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Premium Travel Agency",
    category: "Business",
    description: "Enhanced travel agency concept with polished tour presentation and premium positioning.",
    features: ["Premium travel hero", "Experience cards", "Inquiry sections", "Responsive layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "t2.html",
    thumbnail: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Sobisha Agrawal Portfolio",
    category: "Portfolio",
    description: "Personal portfolio website for an IT professional and web developer.",
    features: ["Personal brand hero", "Skills sections", "Project showcase", "Resume link"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "Portfolio/index.html",
    thumbnail: "Portfolio/assets/images/project-showcase.png"
  },
  {
    name: "Cybersecurity Portfolio",
    category: "Portfolio",
    description: "Portfolio concept for a cybersecurity learner and UI/UX designer.",
    features: ["Tech-focused profile", "Project sections", "Professional summary", "Contact CTA"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "p1.html",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "Tech Professional Portfolio",
    category: "Portfolio",
    description: "Alternative personal portfolio layout for cybersecurity, technology, and professional work.",
    features: ["Modern profile layout", "Skill highlights", "Work sections", "Responsive portfolio UI"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "p2.html",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=82"
  },
  {
    name: "BScIT Student Portfolio",
    category: "Portfolio",
    description: "Student and cybersecurity learner portfolio with clean presentation and career-oriented content.",
    features: ["Student profile", "Learning journey sections", "Project highlights", "Contact pathway"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    previewUrl: "t3.html",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=82"
  }
];

const grid = document.querySelector("[data-demo-grid]");
const filters = document.querySelector("[data-filters]");
const emptyState = document.querySelector("[data-empty-state]");
const demoCount = document.querySelector("[data-demo-count]");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalCategory = document.querySelector("[data-modal-category]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalFeatures = document.querySelector("[data-modal-features]");
const modalTech = document.querySelector("[data-modal-tech]");
const modalLink = document.querySelector("[data-modal-link]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

let activeCategory = "All";

function renderFilters() {
  filters.innerHTML = categories.map((category) => (
    `<button class="filter-btn${category === activeCategory ? " active" : ""}" type="button" data-category="${category}">${category}</button>`
  )).join("");
}

function renderProjects() {
  const visibleProjects = activeCategory === "All"
    ? demoProjects
    : demoProjects.filter((project) => project.category === activeCategory);

  grid.innerHTML = visibleProjects.map((project, index) => `
    <article class="demo-card" style="animation-delay: ${Math.min(index * 45, 360)}ms">
      <div class="demo-thumb">
        <img src="${project.thumbnail}" alt="${project.name} website preview" loading="lazy">
        <span class="category-badge">${project.category}${project.isPlaceholder ? " - ready slot" : ""}</span>
      </div>
      <div class="demo-content">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="demo-actions">
          <a class="btn btn-primary" href="${project.previewUrl}" target="_blank" rel="noopener">Live Preview</a>
          <button class="btn btn-outline" type="button" data-details="${project.name}">Details</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleProjects.length > 0;
}

function openModal(projectName) {
  const project = demoProjects.find((item) => item.name === projectName);
  if (!project) return;

  modalImage.src = project.thumbnail;
  modalImage.alt = `${project.name} website preview`;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.name;
  modalDescription.textContent = project.description;
  modalFeatures.innerHTML = project.features.map((feature) => `<li>${feature}</li>`).join("");
  modalTech.innerHTML = project.technologies.map((tech) => `<span>${tech}</span>`).join("");
  modalLink.href = project.previewUrl;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (!button) return;
  openModal(button.dataset.details);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const projectType = formData.get("projectType");
  const message = formData.get("message");
  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`);

  window.location.href = `mailto:helloificode@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app with the message prepared.";
  contactForm.reset();
});

demoCount.textContent = demoProjects.length;
renderFilters();
renderProjects();
