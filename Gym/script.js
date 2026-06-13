const header = document.getElementById("siteHeader");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main .section[id]");
const revealItems = document.querySelectorAll(".reveal");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.querySelector(".lightbox-close");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const backToTop = document.getElementById("backToTop");

document.getElementById("year").textContent = new Date().getFullYear();

const closeMenu = () => {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
};

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const updateHeader = () => {
  const scrolled = window.scrollY > 40;
  header.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("show", window.scrollY > 700);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-42% 0px -52% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const openLightbox = (imageSrc, imageAlt) => {
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt || "Expanded gym gallery image";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    openLightbox(item.dataset.image, image.alt);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("open")) closeLightbox();
    if (navMenu.classList.contains("open")) closeMenu();
  }
});

const setFieldState = (field, valid) => {
  field.classList.toggle("invalid", !valid);
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, email, phone, message } = contactForm.elements;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+\-\s()]{7,}$/;

  const validations = [
    [name, name.value.trim().length >= 2],
    [email, emailPattern.test(email.value.trim())],
    [phone, phonePattern.test(phone.value.trim())],
    [message, message.value.trim().length >= 10],
  ];

  validations.forEach(([field, valid]) => setFieldState(field, valid));

  const hasError = validations.some(([, valid]) => !valid);

  if (hasError) {
    formMessage.textContent = "Please fill all fields with valid contact details and a clear message.";
    formMessage.className = "form-message error";
    return;
  }

  formMessage.textContent = "Thanks! Your message is ready. Please contact us on Facebook for the fastest response.";
  formMessage.className = "form-message success";
  contactForm.reset();
});

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.classList.remove("invalid");
    if (formMessage.textContent) {
      formMessage.textContent = "";
      formMessage.className = "form-message";
    }
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
