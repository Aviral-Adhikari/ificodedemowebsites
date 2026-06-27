const spaceImage = document.querySelector("[data-space-image]");
const spaceLabel = document.querySelector("[data-space-label]");
const spaceTitle = document.querySelector("[data-space-title]");
const spaceCopy = document.querySelector("[data-space-copy]");
const spaceFacts = document.querySelector("[data-space-facts]");

document.querySelectorAll("[data-space]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-space]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const title = button.dataset.space;
    spaceImage.src = button.dataset.image;
    spaceImage.alt = title;
    spaceLabel.textContent = title;
    spaceTitle.textContent = title;
    spaceCopy.textContent = button.dataset.copy;
    spaceFacts.innerHTML = button.dataset.facts
      .split("|")
      .map((fact) => `<span>${fact}</span>`)
      .join("");
  });
});

const eventImage = document.querySelector("[data-event-image]");
const eventName = document.querySelector("[data-event-name]");
const eventHall = document.querySelector("[data-event-hall]");
const eventPalette = document.querySelector("[data-event-palette]");
const eventGuests = document.querySelector("[data-event-guests]");

document.querySelectorAll("[data-event]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-event]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    eventImage.src = button.dataset.image;
    eventImage.alt = `${button.dataset.event} celebration mood`;
    eventName.textContent = button.dataset.event;
    eventHall.textContent = button.dataset.hall;
    eventPalette.textContent = button.dataset.palette;
    eventGuests.textContent = button.dataset.guests;
  });
});

const guestInput = document.querySelector("[data-guests]");
const guestOutput = document.querySelector("[data-guest-output]");
const selectedCourses = document.querySelector("[data-selected-courses]");
const totalOutput = document.querySelector("[data-total]");

const updateFeast = () => {
  const guests = Number(guestInput.value);
  const activeCourses = [...document.querySelectorAll("[data-course].active")];
  const perGuest = activeCourses.reduce((sum, course) => sum + Number(course.dataset.price), 0);
  const total = guests * perGuest;

  guestOutput.textContent = guests.toLocaleString("en-US");
  selectedCourses.innerHTML = activeCourses.map((course) => `<li>${course.dataset.course}</li>`).join("");
  totalOutput.textContent = `NPR ${total.toLocaleString("en-US")}`;

  const min = Number(guestInput.min);
  const max = Number(guestInput.max);
  const progress = ((guests - min) / (max - min)) * 100;
  guestInput.style.setProperty("--progress", `${progress}%`);
};

document.querySelectorAll("[data-course]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    if (!document.querySelector("[data-course].active")) {
      button.classList.add("active");
    }

    updateFeast();
  });
});

guestInput.addEventListener("input", updateFeast);
updateFeast();
