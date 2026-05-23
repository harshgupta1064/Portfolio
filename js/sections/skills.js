import { skills, coursework } from "../../data/skills.js";
import { getIcon } from "../utils/icons.js";

export function renderSkills() {
  const el = document.getElementById("skills");

  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">06</span>
      <h2>Skills</h2>
    </header>

    <div class="skills-snapshot">
      ${skills
        .map(
          (group) => `
        <article class="skill-snap">
          <div class="skill-snap-head">
            <span class="skill-snap-icon" aria-hidden="true">${getIcon(group.icon)}</span>
            <h3>${group.category}</h3>
          </div>
          <p class="skill-snap-list">${group.highlights.join(" · ")}</p>
        </article>
      `
        )
        .join("")}
    </div>

    <p class="coursework-line">
      <span class="coursework-label">Coursework</span>
      ${coursework.join(" · ")}
    </p>
  `;
}
