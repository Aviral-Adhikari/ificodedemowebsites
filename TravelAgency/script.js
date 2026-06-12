const header = document.getElementById("siteHeader");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const backToTop = document.getElementById("backToTop");

function updateHeader() {
  const scrolled = window.scrollY > 24;
  header.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 700);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main .section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));

const counters = document.querySelectorAll("[data-counter]");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.counter);
      const duration = 1400;
      const started = performance.now();

      function tick(now) {
        const progress = Math.min((now - started) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = target === 98 ? `${value}%` : `${value.toLocaleString()}+`;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const testimonials = [
  {
    name: "Sofia Martin",
    country: "Spain",
    text: "Localify gave us the most authentic and memorable experience of Nepal.",
    photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Daniel Wright",
    country: "Australia",
    text: "The Everest itinerary was paced perfectly, and our guide made every village feel personal.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Aiko Tanaka",
    country: "Japan",
    text: "We wanted culture, food, and mountains. Localify delivered a thoughtful journey with zero stress.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  }
];

let testimonialIndex = 0;
const testimonialPhoto = document.getElementById("testimonialPhoto");
const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialCountry = document.getElementById("testimonialCountry");

function renderTestimonial(index) {
  const testimonial = testimonials[index];
  testimonialPhoto.src = testimonial.photo;
  testimonialPhoto.alt = `${testimonial.name} traveler portrait`;
  testimonialText.textContent = testimonial.text;
  testimonialName.textContent = testimonial.name;
  testimonialCountry.textContent = testimonial.country;
}

function nextTestimonial(direction = 1) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial(testimonialIndex);
}

document.getElementById("nextTestimonial").addEventListener("click", () => nextTestimonial(1));
document.getElementById("prevTestimonial").addEventListener("click", () => nextTestimonial(-1));
setInterval(() => nextTestimonial(1), 5200);

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("active");
    closeLightbox.focus();
  });
});

function hideLightbox() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
}

closeLightbox.addEventListener("click", hideLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) hideLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("active")) hideLightbox();
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector("span").textContent = "+";
    });
    if (!isActive) {
      item.classList.add("active");
      button.querySelector("span").textContent = "-";
    }
  });
});

const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...bookingForm.querySelectorAll("input, select, textarea")];
  let isValid = true;

  fields.forEach((field) => {
    const invalid = !field.checkValidity();
    field.classList.toggle("field-error", invalid);
    if (invalid) isValid = false;
  });

  if (!isValid) {
    formStatus.textContent = "Please complete all required fields with valid information.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent = "Thank you. Localify will contact you shortly with a tailored Nepal trip plan.";
  formStatus.className = "form-status success";
  bookingForm.reset();
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
