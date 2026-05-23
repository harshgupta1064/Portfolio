export function renderContact() {
  const el = document.getElementById("contact");
  el.innerHTML = `
    <header class="section-header">
      <span class="section-label">07</span>
      <h2>Get in Touch</h2>
    </header>
    <div class="contact-cta">
      <p>Interested in robotics, perception, or ML work? I'd love to hear from you.</p>
      <a href="contact.html" class="btn btn-primary btn-lg">Contact</a>
    </div>
  `;
}
