import { applyPhotoCrop } from "./photo.js";

export function initMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  applyPhotoCrop();

  if (reduced) return;

  initHeaderScroll();
  initHeroEntrance();
  initScrollReveal();
  initHoverRipple();
}

function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initHeroEntrance() {
  document.querySelectorAll(".hero-content > *").forEach((el, i) => {
    el.classList.add("animate-in");
    el.style.animationDelay = `${0.07 * i + 0.05}s`;
  });

  const visual = document.querySelector(".hero-visual");
  if (visual) {
    visual.classList.add("animate-in");
    visual.style.animationDelay = "0.4s";
  }
}

function initScrollReveal() {
  const selectors = [
    ".section-header",
    ".about-content p",
    ".contact-strip",
    ".timeline-card",
    ".project-showcase",
    ".project-card",
    ".skill-snap",
    ".coursework-line",
    ".contact-cta",
    ".contact-profile-card",
    ".contact-page-header",
    ".contact-method-card",
    ".contact-form",
  ];

  const elements = document.querySelectorAll(selectors.join(", "));
  elements.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 5) * 0.06}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initHoverRipple() {
  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty("--ripple-x", `${x}%`);
      btn.style.setProperty("--ripple-y", `${y}%`);
    });
  });
}
