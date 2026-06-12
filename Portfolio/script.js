const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");
const typingText = document.getElementById("typingText");
const counters = document.querySelectorAll("[data-counter]");
const skills = document.querySelectorAll(".skill");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const typingWords = [
  "IT Professional",
  "Web Developer",
  "Technology Enthusiast",
  "Problem Solver",
];

let typingWordIndex = 0;
let typingCharIndex = 0;
let typingDeleting = false;

function typeHeroText() {
  const currentWord = typingWords[typingWordIndex];

  if (typingDeleting) {
    typingCharIndex -= 1;
  } else {
    typingCharIndex += 1;
  }

  typingText.textContent = currentWord.slice(0, typingCharIndex);

  if (!typingDeleting && typingCharIndex === currentWord.length) {
    typingDeleting = true;
    setTimeout(typeHeroText, 1400);
    return;
  }

  if (typingDeleting && typingCharIndex === 0) {
    typingDeleting = false;
    typingWordIndex = (typingWordIndex + 1) % typingWords.length;
  }

  setTimeout(typeHeroText, typingDeleting ? 45 : 82);
}

function setHeaderState() {
  const scrolled = window.scrollY > 24;
  header.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 600);
}

function closeMenu() {
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.counter);
      const duration = 1300;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.floor(eased * target)}+`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = `${target}+`;
        }
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.7 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const skill = entry.target;
      const level = skill.dataset.level || "0";
      const label = skill.querySelector("span");
      const bar = skill.querySelector("i");

      label.dataset.level = `${level}%`;
      label.innerHTML = `${label.textContent}<strong>${level}%</strong>`;
      bar.style.width = `${level}%`;
      skillObserver.unobserve(skill);
    });
  },
  { threshold: 0.65 }
);

skills.forEach((skill) => skillObserver.observe(skill));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.01,
  }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const testimonials = [
  {
    initials: "AK",
    name: "Aarav K.",
    role: "Startup Founder",
    text: '"Sobisha delivered a professional website with excellent attention to detail and outstanding communication."',
  },
  {
    initials: "RM",
    name: "Ritika M.",
    role: "Operations Manager",
    text: '"Her work made our service pages clearer, faster, and much easier for customers to use on mobile."',
  },
  {
    initials: "SP",
    name: "Sanjay P.",
    role: "Small Business Owner",
    text: '"Sobisha understood the business need quickly and turned it into a polished digital presence."',
  },
];

let testimonialIndex = 0;
const testimonialName = document.getElementById("testimonialName");
const testimonialRole = document.getElementById("testimonialRole");
const testimonialText = document.getElementById("testimonialText");
const testimonialAvatar = document.querySelector(".testimonial-person .avatar");
const testimonialDots = document.getElementById("testimonialDots");

function renderTestimonial(index) {
  const testimonial = testimonials[index];
  testimonialAvatar.textContent = testimonial.initials;
  testimonialName.textContent = testimonial.name;
  testimonialRole.textContent = testimonial.role;
  testimonialText.textContent = testimonial.text;

  testimonialDots.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
    button.setAttribute("aria-current", buttonIndex === index ? "true" : "false");
  });
}

testimonials.forEach((testimonial, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-label", `Show testimonial from ${testimonial.name}`);
  button.addEventListener("click", () => {
    testimonialIndex = index;
    renderTestimonial(testimonialIndex);
  });
  testimonialDots.appendChild(button);
});

renderTestimonial(testimonialIndex);

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  renderTestimonial(testimonialIndex);
}, 5200);

function setError(field, message) {
  const error = field.parentElement.querySelector("small");
  error.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  const fields = Array.from(contactForm.querySelectorAll("input, textarea"));
  let isValid = true;

  fields.forEach((field) => {
    const value = field.value.trim();

    if (!value) {
      setError(field, "This field is required.");
      isValid = false;
      return;
    }

    if (field.type === "email" && !validateEmail(value)) {
      setError(field, "Enter a valid email address.");
      isValid = false;
      return;
    }

    setError(field, "");
  });

  if (!isValid) return;

  contactForm.reset();
  formStatus.textContent = "Thank you. Your message has been prepared successfully.";
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});

setHeaderState();
typeHeroText();
