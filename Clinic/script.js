const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const backToTop = document.querySelector(".back-to-top");
const bookingForm = document.querySelector("#booking-form");
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let testimonialIndex = 0;
let countersStarted = false;

menuToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
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
reveals.forEach((item) => revealObserver.observe(item));

function animateCounters() {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const duration = 1400;
    const start = performance.now();
    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    if (entries.some((entry) => entry.isIntersecting) && !countersStarted) {
      countersStarted = true;
      animateCounters();
    }
  },
  { threshold: 0.3 }
);
const stats = document.querySelector(".stats");
if (stats) statsObserver.observe(stats);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

function showTestimonial(index) {
  testimonials.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });
}

function moveTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => moveTestimonial(-1));
  nextBtn.addEventListener("click", () => moveTestimonial(1));
  setInterval(() => moveTestimonial(1), 5200);
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.toggle("open");
    button.classList.toggle("active", isOpen);
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = bookingForm.querySelector(".form-message");
  const fields = bookingForm.querySelectorAll("[required]");
  let valid = true;

  fields.forEach((field) => {
    const isEmail = field.type === "email";
    const emailValid = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    const fieldValid = field.value.trim() !== "" && emailValid;
    field.classList.toggle("field-error", !fieldValid);
    if (!fieldValid) valid = false;
  });

  if (!valid) {
    message.textContent = "Please complete all required fields with a valid email address.";
    message.style.color = "#dc2626";
    return;
  }

  message.textContent = "Thank you. Your appointment request has been received.";
  message.style.color = "#0e7490";
  bookingForm.reset();
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
  backToTop.classList.toggle("show", window.scrollY > 700);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
