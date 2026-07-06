// =========================
// TYPING ANIMATION
// =========================

const roles = [
  "Java Developer",
  "Web Developer",
  "Problem Solver",
  "Open To Opportunities"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText =
document.getElementById("typing-text");

function typeEffect() {

  let currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect,
    isDeleting ? 50 : 100);
}

typeEffect();


// =========================
// ACTIVE NAVBAR
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
      &&
      pageYOffset <
      sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === "#" + current
    ) {
      link.classList.add("active");
    }
  });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".skill-box, .card, .project-card, .education-card"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      el.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop <
      windowHeight - revealPoint) {

      el.classList.add("show");

    }

  });

}

window.addEventListener(
"scroll",
reveal
);

reveal();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header =
document.querySelector("header");

window.addEventListener(
"scroll",
() => {

  if (window.scrollY > 50) {

    header.style.background =
    "rgba(7,11,23,0.98)";

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.4)";

  }
  else {

    header.style.background =
    "rgba(7,11,23,0.85)";

    header.style.boxShadow =
    "none";
  }
});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener(
  "click",
  function(e) {

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});
