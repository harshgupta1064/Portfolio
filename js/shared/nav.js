const homeSections = [
  { href: "index.html#about", label: "About" },
  { href: "index.html#education", label: "Education" },
  { href: "index.html#experience", label: "Experience" },
  { href: "index.html#projects", label: "Projects" },
  { href: "index.html#leadership", label: "Robotics" },
  { href: "index.html#skills", label: "Skills" },
];

export function renderNav(currentPage = "home") {
  const nav = document.getElementById("nav-links");
  if (!nav) return;

  const homeLink =
    currentPage === "home"
      ? `<a href="#hero" class="nav-link">Home</a>`
      : `<a href="index.html" class="nav-link">Home</a>`;

  const sectionLinks = homeSections
    .map(
      (s) =>
        `<a href="${s.href}" class="nav-link${currentPage === s.label.toLowerCase() ? " active" : ""}">${s.label}</a>`
    )
    .join("");

  const contactLink = `<a href="contact.html" class="nav-link nav-link-contact${currentPage === "contact" ? " active" : ""}">Contact</a>`;

  nav.innerHTML = homeLink + sectionLinks + contactLink;
}
