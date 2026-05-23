import { profile } from "../../data/profile.js";

export function applyPhotoCrop() {
  const { x, y } = profile.photoFrame;
  const root = document.documentElement;
  root.style.setProperty("--photo-x", `${x}%`);
  root.style.setProperty("--photo-y", `${y}%`);
}

export function profilePhotoHtml(className = "profile-photo", alt) {
  const altText = alt ?? `${profile.name} profile photo`;
  return `
    <div class="${className}-wrap photo-frame">
      <img
        class="${className} profile-photo"
        src="${profile.photo}"
        alt="${altText}"
        loading="eager"
        onerror="this.onerror=null;this.src='${profile.photoFallback}'"
      />
    </div>
  `;
}
