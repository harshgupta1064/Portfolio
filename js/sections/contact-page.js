import { profile } from "../../data/profile.js";
import { contactPage } from "../../data/contact.js";
import { profilePhotoHtml } from "../utils/photo.js";
import { getIcon } from "../utils/icons.js";

export function renderContactPage() {
  const el = document.getElementById("contact-page");
  el.innerHTML = `
    <div class="contact-page-layout">
      <aside class="contact-profile-card">
        ${profilePhotoHtml("contact-photo")}
        <h1>${profile.name}</h1>
        <p class="contact-profile-title">${profile.title}</p>
        <span class="availability-badge">${contactPage.availability}</span>
        <p class="contact-profile-location">${profile.location}</p>
      </aside>

      <div class="contact-main">
        <header class="contact-page-header">
          <h2>${contactPage.headline}</h2>
          <p>${contactPage.subheadline}</p>
        </header>

        <div class="contact-methods">
          <a href="${profile.links.email}" class="contact-method-card">
            <span class="contact-method-icon">${getIcon("mail")}</span>
            <span class="contact-method-label">Email</span>
            <span class="contact-method-value">${profile.email}</span>
          </a>
          <a href="tel:${profile.phone.replace(/\s/g, "")}" class="contact-method-card">
            <span class="contact-method-icon">${getIcon("phone")}</span>
            <span class="contact-method-label">Phone</span>
            <span class="contact-method-value">${profile.phone}</span>
          </a>
          <div class="contact-method-card static">
            <span class="contact-method-icon">${getIcon("map")}</span>
            <span class="contact-method-label">Location</span>
            <span class="contact-method-value">${profile.location}</span>
          </div>
          <a href="${profile.links.linkedin}" class="contact-method-card" target="_blank" rel="noopener">
            <span class="contact-method-icon">${getIcon("linkedin")}</span>
            <span class="contact-method-label">LinkedIn</span>
            <span class="contact-method-value">harshgupta1064</span>
          </a>
          <a href="${profile.links.github}" class="contact-method-card" target="_blank" rel="noopener">
            <span class="contact-method-icon">${getIcon("github")}</span>
            <span class="contact-method-label">GitHub</span>
            <span class="contact-method-value">harshgupta1064</span>
          </a>
        </div>

        <form class="contact-form" id="contact-form">
          <h3>Send a message</h3>
          <p class="form-note">${contactPage.formNote}</p>
          <div class="form-row">
            <label for="sender-name">Name</label>
            <input type="text" id="sender-name" placeholder="Your name" required />
          </div>
          <div class="form-row">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">Send Email</button>
        </form>
      </div>
    </div>
  `;
}
