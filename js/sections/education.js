import { education } from "../../data/education.js";

export function renderEducation() {
  const el = document.getElementById("education");
  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">02</span>
      <h2>Education</h2>
    </header>
    <div class="timeline">
      ${education
        .map(
          (item) => `
        <article class="timeline-card">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-body">
            <h3>${item.institution}</h3>
            <p class="timeline-role">${item.degree}</p>
            <p class="timeline-location">${item.location}</p>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;
}
