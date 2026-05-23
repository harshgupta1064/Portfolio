import { profile } from "../../data/profile.js";
import { profilePhotoHtml } from "../utils/photo.js";

export function renderHero() {
  const el = document.getElementById("hero");
  el.innerHTML = `
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">
        <span class="status-dot"></span>
        Robotics · Perception · Autonomous Systems
      </p>
      <h1 class="hero-name">${profile.name}</h1>
      <p class="hero-title">${profile.title}</p>
      <p class="hero-tagline">${profile.tagline}</p>
      <div class="hero-meta">
        <span>${profile.location}</span>
      </div>
      <div class="hero-actions">
        <a href="${profile.resume}" class="btn btn-primary" download="${profile.resumeFileName}">Download Resume</a>
        <a href="${profile.links.linkedin}" class="btn btn-icon" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="${profile.icons.linkedin}" alt="" width="20" height="20" />
        </a>
        <a href="${profile.links.github}" class="btn btn-icon" target="_blank" rel="noopener" aria-label="GitHub">
          <img src="${profile.icons.github}" alt="" width="20" height="20" />
        </a>
        <a href="contact.html" class="btn btn-ghost">Contact Me</a>
      </div>
    </div>
    <div class="hero-visual">
      ${profilePhotoHtml("hero-photo")}
      <div class="hero-photo-ring" aria-hidden="true"></div>
    </div>
  `;
}
