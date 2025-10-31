// script.js

// --- 1. Page Fade-In Effect ---
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

// --- 2. Typewriter Effect for Hero Heading ---
const heroHeading = document.querySelector(".hero-content h1");
if (heroHeading) {
  const text = heroHeading.textContent;
  heroHeading.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      heroHeading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }
  typeWriter();
}

// --- 3. Scroll Reveal Animation ---
const revealElements = document.querySelectorAll("section, .project-item, .education-item, .job-item");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// --- 4. Contact Form Interaction ---
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.textContent = "Sending...";
    status.style.display = "block";
    status.style.color = "#3498db";

    setTimeout(() => {
      status.textContent = "✅ Message Sent Successfully!";
      status.style.color = "#2ecc71";
    }, 1500);

    setTimeout(() => {
      form.reset();
      status.style.display = "none";
    }, 3500);
  });
}
