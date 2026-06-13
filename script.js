const categories = [
  "All",
  "Business",
  "Travel",
  "Restaurant",
  "Cafe",
  "Clinic",
  "Lawyer",
  "Portfolio",
  "Fitness"
];

const eyeIcon = `
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
  </svg>
`;

const demoProjects = [
  
  {
    title: "Travel Agency Sample",
    category: "Travel Agency Website",
    filter: "Travel",
    description: "A folder-based premium Nepal travel agency demo with refined sections and destination-focused browsing.",
    tags: ["Travel", "Nepal", "Agency"],
    features: ["Travel landing page", "Destination-led layout", "Inquiry sections", "Responsive presentation"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "TravelAgency/index.html",
    thumbnail: "images/projects/travelagencysample.webp"
  },
  {
    title: "Travel Agency Sample 2",
    category: "Travel Agency Website",
    filter: "Travel",
    description: "A complete multi-page travel agency demo with destinations, packages, blog, FAQs, gallery, and contact pages.",
    tags: ["Multi-page", "Travel", "Packages"],
    features: ["Multi-page navigation", "Package detail pages", "Blog and gallery", "Contact and map page"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "TravelAgency2/index.html",
    thumbnail: "images/projects/travelagencysample3.png"
  },

  {
    title: "Banquet Palace Sample",
    category: "Event Venue Website",
    filter: "Business",
    description: "A banquet and party palace website for events, weddings, venue presentation, and booking-focused visitors.",
    tags: ["Events", "Venue", "Booking"],
    features: ["Venue presentation", "Event package sections", "Booking call-to-action", "Large visual showcase"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "banquet.html",
    thumbnail: "images/projects/banquet.webp"
  },
  {
    title: "Cafe Sample",
    category: "Cafe Website",
    filter: "Cafe",
    description: "A warm cafe website for coffee menus, local storytelling, product highlights, and contact-driven visits.",
    tags: ["Cafe", "Menu", "Local Brand"],
    features: ["Cafe hero section", "Menu preview", "Brand story content", "Location call-to-action"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "cafesample.html",
    thumbnail: "images/projects/cafesample.webp"
  },
  {
    title: "Cafe Sample 2",
    category: "Cafe Website",
    filter: "Cafe",
    description: "A premium cafe website with crafted coffee positioning, elegant content sections, and polished visual flow.",
    tags: ["Coffee", "Cafe", "Premium"],
    features: ["Premium cafe hero", "Product storytelling", "Gallery-style sections", "Responsive contact flow"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "cafesample2.html",
    thumbnail: "images/projects/cafesample2.png"
  },
  {
    title: "Legal Heart",
    category: "Law Firm Website",
    filter: "Lawyer",
    description: "A polished law firm website with professional practice areas, consultation messaging, and credibility-focused design.",
    tags: ["Legal", "Services", "Consultation"],
    features: ["Practice area sections", "Attorney-style content", "Consultation CTA", "Professional service layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "lawfirmsample.html",
    thumbnail: "images/projects/lawfirmsample.png"
  },
  {
    title: "Cybersecurity Professional Portfolio",
    category: "Portfolio Website",
    filter: "Portfolio",
    description: "A personal portfolio for a cybersecurity learner and UI/UX designer with a tech-forward presentation.",
    tags: ["Portfolio", "Cybersecurity", "UI UX"],
    features: ["Tech-focused hero", "Skills and projects", "Professional summary", "Contact pathway"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "p1.html",
    thumbnail: "images/projects/portfoliosample1.png"
  },
  {
    title: "Tech Professional Portfolio",
    category: "Portfolio Website",
    filter: "Portfolio",
    description: "A clean professional portfolio layout for cybersecurity, technology skills, and personal brand presentation.",
    tags: ["Portfolio", "Tech", "Resume"],
    features: ["Profile sections", "Skill highlights", "Project blocks", "Responsive portfolio layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "p2.html",
    thumbnail: "images/projects/portfoliosample2.png"
  },
  {
    title: "Himalayan Durbar",
    category: "Restaurant Website",
    filter: "Restaurant",
    description: "A refined restaurant demo with large food imagery, menu highlights, reservation prompts, and hospitality-focused sections.",
    tags: ["Menu", "Booking", "Hospitality"],
    features: ["Premium dining hero", "Menu and offer sections", "Reservation call-to-action", "Responsive restaurant layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "restaurant.html",
    thumbnail: "images/projects/restrosample.webp"
  },

  {
    title: "Localify Discover Nepal",
    category: "Travel Website",
    filter: "Travel",
    description: "A Nepal travel landing page with local experiences, destination sections, and adventure-focused storytelling.",
    tags: ["Travel", "Nepal", "Landing Page"],
    features: ["Tourism hero", "Destination sections", "Experience highlights", "Responsive travel layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "t1.html",
    thumbnail: "images/projects/localify.webp"
  },
  {
    title: "Premium Travel Agency",
    category: "Travel Website",
    filter: "Travel",
    description: "A premium travel agency demo with polished destination sections, tour packages, and travel inquiry flow.",
    tags: ["Travel", "Packages", "Premium"],
    features: ["Destination hero", "Package highlights", "Inquiry structure", "Gallery and service flow"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "t2.html",
    thumbnail: "images/projects/travelsample2.png"
  },
  {
    title: "BScIT Student Portfolio",
    category: "Portfolio Website",
    filter: "Portfolio",
    description: "A student portfolio for a BScIT learner with cybersecurity interests, career sections, and contact prompts.",
    tags: ["Student", "Portfolio", "Cybersecurity"],
    features: ["Student profile", "Learning journey sections", "Project highlights", "Contact pathway"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "t3.html",
    thumbnail: "images/projects/portfoliosample3.png"
  },
  {
    title: "PawCare Veterinary Clinic",
    category: "Clinic Website",
    filter: "Clinic",
    description: "A friendly veterinary clinic website for pet care services, appointments, and trust-building local content.",
    tags: ["Veterinary", "Clinic", "Pet Care"],
    features: ["Pet care hero", "Veterinary services", "Appointment CTA", "Responsive clinic layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "trial.html",
    thumbnail: "images/projects/vetsample1.png"
  },
  {
    title: "Harmony Veterinary Clinic",
    category: "Clinic Website",
    filter: "Clinic",
    description: "A calm veterinary website with pet care services, local clinic trust, and clear appointment messaging.",
    tags: ["Veterinary", "Services", "Local Clinic"],
    features: ["Service overview", "Trust-focused sections", "Contact prompts", "Responsive pet clinic layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "vetsample.html",
    thumbnail: "images/projects/vetsample2.png"
  },
  {
    title: "EverCare Medical Clinic",
    category: "Clinic Website",
    filter: "Clinic",
    description: "A healthcare clinic website for appointments, services, doctors, and patient trust.",
    tags: ["Healthcare", "Clinic", "Patient UI"],
    features: ["Clinic hero", "Healthcare services", "Appointment CTA", "Accessible responsive layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "Clinic/index.html",
    thumbnail: "images/projects/clinicsample.webp"
  },
  {
    title: "Madhyapur VR Fitness",
    category: "Fitness Website",
    filter: "Fitness",
    description: "A local fitness website for gym branding, programs, schedules, and membership-focused calls to action.",
    tags: ["Gym", "Fitness", "Membership"],
    features: ["Fitness hero", "Program sections", "Membership CTA", "Responsive gym layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "Gym/index.html",
    thumbnail: "images/projects/gym.png"
  },
  {
    title: "Sobisha Agrawal Portfolio",
    category: "Portfolio Website",
    filter: "Portfolio",
    description: "A complete personal portfolio folder project with profile sections, work samples, and resume access.",
    tags: ["Portfolio", "Resume", "Projects"],
    features: ["Personal brand hero", "Skills sections", "Project showcase", "Resume link"],
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "Portfolio/index.html",
    thumbnail: "Portfolio/assets/images/project-showcase.png"
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
const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector(".main-nav");

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

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

demoCount.textContent = `${demoProjects.length}+`;
renderFilters();
renderProjects();
