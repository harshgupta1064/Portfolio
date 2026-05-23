import { profile } from "../data/profile.js";
import { renderNav } from "./shared/nav.js";
import { renderHero } from "./sections/hero.js";
import { renderAbout } from "./sections/about.js";
import { renderEducation } from "./sections/education.js";
import { renderExperience } from "./sections/experience.js";
import { renderProjects } from "./sections/projects.js";
import { renderLeadership } from "./sections/leadership.js";
import { renderSkills } from "./sections/skills.js";
import { renderContact } from "./sections/contact.js";
import { initMotion } from "./utils/motion.js";

const sections = [
  { id: "about", render: renderAbout },
  { id: "education", render: renderEducation },
  { id: "experience", render: renderExperience },
  { id: "projects", render: renderProjects },
  { id: "leadership", render: renderLeadership },
  { id: "skills", render: renderSkills },
  { id: "contact", render: renderContact },
];

function initScrollSpy() {
  const links = document.querySelectorAll(".nav-link[href^='#']");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  ["hero", ...sections.map((s) => s.id)].forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

function initFooter() {
  document.getElementById("footer-name").textContent = profile.name;
  document.getElementById("footer-year").textContent =
    new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  sections.forEach(({ render }) => render());
  renderNav("home");
  initScrollSpy();
  initMobileNav();
  initFooter();
  initMotion();
});
