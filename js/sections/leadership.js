import { leadership } from "../../data/leadership.js";

export function renderLeadership() {
  const el = document.getElementById("leadership");
  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">05</span>
      <h2>Robotics & Leadership</h2>
    </header>
    <div class="timeline">
      ${leadership
        .map(
          (item) => `
        <article class="timeline-card highlight">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-body">
            <h3>${item.role}</h3>
            <p class="timeline-role">${item.organization} · ${item.institution}</p>
            <ul class="bullet-list">
              ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
            <div class="tag-row">
              ${item.tags.map((t) => `<span class="tag accent">${t}</span>`).join("")}
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;
}
