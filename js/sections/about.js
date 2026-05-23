import { profile } from "../../data/profile.js";

export function renderAbout() {
  const el = document.getElementById("about");
  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">01</span>
      <h2>About</h2>
    </header>
    <div class="about-content">
      ${profile.about.map((p) => `<p>${p}</p>`).join("")}
      <div class="about-actions">
        <a href="${profile.resume}" class="btn btn-primary" download="${profile.resumeFileName}">Download Resume</a>
        <a href="${profile.links.linkedin}" class="btn btn-icon" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="${profile.icons.linkedin}" alt="" width="20" height="20" />
        </a>
        <a href="${profile.links.github}" class="btn btn-icon" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="${profile.icons.github}" alt="" width="20" height="20" />
        </a>
      </div>
      <div class="contact-strip">
        <a href="${profile.links.email}">${profile.email}</a>
        <span class="sep">·</span>
        <a href="tel:${profile.phone.replace(/\s/g, "")}">${profile.phone}</a>
      </div>
    </div>
  `;
}
