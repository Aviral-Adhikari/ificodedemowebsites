const categories = [
  "All",
  "Business",
  "Mobile",
  "Portfolio",
  "School",
  "Restaurant",
  "Hospital",
  "Lawyer",
  "E-commerce"
];

const eyeIcon = `
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
  </svg>
`;

const demoProjects = [
  {
    title: "Consultifi",
    category: "Business Platform",
    filter: "Business",
    description: "A professional consultancy interface with clear service presentation, lead flow, and a focused business-first content structure.",
    tags: ["Business UX", "Dashboard", "Lead Flow"],
    features: ["Consultancy-focused homepage", "Strong hero conversion area", "Service sections", "Contact-ready structure"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "lawfirmsample.html",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "Localify",
    category: "Mobile Platform",
    filter: "Mobile",
    description: "A mobile platform concept made for explorers, built to help users discover local places, routes, and experiences.",
    tags: ["React Native", "Firebase", "Mobile UX"],
    features: ["Mobile-first presentation", "Travel discovery sections", "Destination browsing", "Clean platform showcase"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "TravelAgency2/index.html",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "Restaurant Website",
    category: "Restaurant Website",
    filter: "Restaurant",
    description: "A refined restaurant demo with large food imagery, menu highlights, reservation prompts, and hospitality-focused sections.",
    tags: ["Menu", "Booking", "Hospitality"],
    features: ["Premium dining hero", "Menu and offer sections", "Reservation call-to-action", "Responsive restaurant layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "restaurant.html",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "School Website",
    category: "School Website",
    filter: "School",
    description: "An education website concept for schools, admissions, academic programs, notices, and parent-friendly information.",
    tags: ["Admissions", "Programs", "Academic"],
    features: ["School homepage structure", "Admissions-focused sections", "Program cards", "Notice-ready layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "t1.html",
    thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "Hospital Website",
    category: "Hospital Website",
    filter: "Hospital",
    description: "A healthcare clinic website built for service clarity, patient trust, appointment calls, and responsive medical content.",
    tags: ["Healthcare", "Clinic", "Patient UI"],
    features: ["Healthcare hero", "Service overview", "Appointment pathway", "Trust-focused content"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "Clinic/index.html",
    thumbnail: "Clinic/assets/clinic-hero.png"
  },
  {
    title: "Lawyer Website",
    category: "Law Firm Website",
    filter: "Lawyer",
    description: "A polished law firm website with professional practice areas, consultation messaging, and credibility-focused design.",
    tags: ["Legal", "Services", "Consultation"],
    features: ["Practice area sections", "Attorney-style content", "Consultation CTA", "Professional service layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "lawfirmsample.html",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "E-commerce Website",
    category: "E-commerce Website",
    filter: "E-commerce",
    description: "A storefront-style demo structure for product highlights, offers, category browsing, and conversion-focused pages.",
    tags: ["Products", "Offers", "Storefront"],
    features: ["Product showcase sections", "Offer-focused layout", "Category browsing concept", "Mobile-ready storefront"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "cafesample2.html",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "Personal Portfolio Website",
    category: "Portfolio Website",
    filter: "Portfolio",
    description: "A personal portfolio website for presenting skills, projects, resume links, and a clear professional profile.",
    tags: ["Portfolio", "Resume", "Projects"],
    features: ["Personal hero section", "Skills and project blocks", "Resume pathway", "Contact-ready layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "Portfolio/index.html",
    thumbnail: "Portfolio/assets/images/project-showcase.png"
  },
  {
    title: "Premium Travel Agency",
    category: "Business Website",
    filter: "Business",
    description: "A travel agency demo with destination-led storytelling, package browsing, and high-converting inquiry sections.",
    tags: ["Travel", "Packages", "Leads"],
    features: ["Destination hero", "Package highlights", "Inquiry structure", "Gallery and service flow"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "TravelAgency/index.html",
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=84"
  },
  {
    title: "Cafe Website",
    category: "Restaurant Website",
    filter: "Restaurant",
    description: "A warm cafe website demo for coffee menus, local storytelling, product highlights, and contact-driven visits.",
    tags: ["Cafe", "Menu", "Local Brand"],
    features: ["Cafe hero section", "Menu preview", "Brand story content", "Location call-to-action"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "cafesample.html",
    thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=84"
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
const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterNote = document.querySelector("[data-newsletter-note]");

let activeCategory = "All";

function renderFilters() {
  filters.innerHTML = categories.map((category) => `
    <button class="filter-btn${category === activeCategory ? " active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderProjects() {
  const visibleProjects = activeCategory === "All"
    ? demoProjects
    : demoProjects.filter((project) => project.filter === activeCategory);

  grid.innerHTML = visibleProjects.map((project, index) => `
    <article class="project-card" style="animation-delay: ${Math.min(index * 45, 360)}ms">
      <div class="project-thumb">
        <img src="${project.thumbnail}" alt="${project.title} website preview" loading="lazy">
      </div>
      <div class="project-content">
        <button class="view-button" type="button" data-details="${project.title}" aria-label="View ${project.title} details">
          ${eyeIcon}
        </button>
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a class="btn btn-primary" href="${project.previewUrl}" target="_blank" rel="noopener">Live Preview</a>
          <button class="btn btn-secondary" type="button" data-details="${project.title}">Details</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleProjects.length > 0;
}

function openModal(projectTitle) {
  const project = demoProjects.find((item) => item.title === projectTitle);
  if (!project) return;

  modalImage.src = project.thumbnail;
  modalImage.alt = `${project.title} website preview`;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
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

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterNote.textContent = "Thanks. iFiCode will keep you updated.";
  newsletterForm.reset();
});

demoCount.textContent = `${demoProjects.length}+`;
renderFilters();
renderProjects();
