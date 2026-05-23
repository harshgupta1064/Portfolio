import { experience } from "../../data/experience.js";

export function renderExperience() {
  const el = document.getElementById("experience");
  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">03</span>
      <h2>Experience</h2>
    </header>
    <div class="timeline">
      ${experience
        .map(
          (item) => `
        <article class="timeline-card">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-body">
            <h3>${item.role}</h3>
            <p class="timeline-role">${item.company} · ${item.location}</p>
            <ul class="bullet-list">
              ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
            <div class="tag-row">
              ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;
}
