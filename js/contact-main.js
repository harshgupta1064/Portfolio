import { profile } from "../data/profile.js";
import { contactPage } from "../data/contact.js";
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

function showFormStatus(message, type) {
  const status = document.getElementById("form-status");
  if (!status) return;
  status.hidden = false;
  status.textContent = message;
  status.className = `form-status form-status--${type}`;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit-btn");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("sender-name")?.value.trim();
    const email = document.getElementById("sender-email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const honey = form.querySelector('[name="_honey"]')?.value;

    if (honey) return;

    if (!name || !email || !message) {
      showFormStatus("Please fill in all fields.", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    showFormStatus("Sending your message…", "loading");

    try {
      const response = await fetch(
        `${contactPage.formEndpoint}/${encodeURIComponent(profile.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio contact from ${name}`,
            _replyto: email,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        showFormStatus(
          "Message sent! I'll get back to you soon.",
          "success"
        );
      } else {
        throw new Error(data.message || "Unable to send message.");
      }
    } catch {
      showFormStatus(
        "Something went wrong. Please email me directly at " +
          profile.email,
        "error"
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
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
