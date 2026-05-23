import { profile } from "../data/profile.js";
import { renderNav } from "./shared/nav.js";
import { renderContactPage } from "./sections/contact-page.js";
import { initMotion } from "./utils/motion.js";

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

function initContactForm() {
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sender-name")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `${profile.links.email}?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderContactPage();
  renderNav("contact");
  initMobileNav();
  initFooter();
  initContactForm();
  initMotion();
});
