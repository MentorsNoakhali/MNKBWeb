/* ============================================================
   Shared Components Injection
   ============================================================ */

/**
 * Navbar HTML
 */
const NAVBAR_HTML = `
<div class="container navbar-container">
  <a href="index.html" class="nav-logo">
    <img src="Media/Mentors-Noakhali-Branch-Logo.png" alt="Mentors' Noakhali Branch" class="nav-logo-img" />
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="team.html">Team</a></li>
    <li><a href="instructors.html">Instructors</a></li>
    <li><a href="study-abroad.html">Study Abroad</a></li>
    <li><a href="mock-tests.html">Mock Tests</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="theme-toggle" id="theme-toggle" aria-label="Switch Theme">
    <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    <div class="toggle-track">
      <div class="toggle-thumb"></div>
    </div>
    <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  </div>
  <button class="hamburger" aria-label="Toggle Navigation">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </button>
</div>
`;

/**
 * Footer HTML
 */
const FOOTER_HTML = `
<div class="container">
  <div class="footer-top">
    <div class="footer-logo">Mentors' <span>Noakhali Branch</span></div>
    <div class="social-icons">
      <a class="facebook" href="https://www.facebook.com/mentorsnoakhali/" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a class="instagram" href="https://www.instagram.com/mentorsnoakhali" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a class="tiktok" href="https://www.tiktok.com/@mentorsnoakhali" target="_blank" rel="noopener" aria-label="TikTok">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"></path></svg>
      </a>
      <a class="youtube" href="https://www.youtube.com/@mentors.noakhali" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
      </a>
      <a class="gmail" href="mailto:mentors.noakhali.branch@gmail.com" aria-label="Gmail">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="branch-note">
      Noakhali Branch &mdash; A part of
      <a href="https://www.mentors.com.bd" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; font-weight: 600;">Mentors'</a>
    </div>
    <p>&copy; 1996&ndash;2026 Mentors'. All rights reserved.</p>
  </div>
</div>
`;

/**
 * Floating Actions HTML
 */
const FLOATING_HTML = `
<a href="tel:+8801321207486" class="action-float phone-float" aria-label="Call Reception">
  <span class="action-tooltip">Call Reception</span>
  <div class="action-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  </div>
</a>
<a href="https://wa.me/8801321207486" class="action-float whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <span class="action-tooltip">Chat with us</span>
  <div class="action-btn">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
  </div>
</a>
`;

function openAssessment() {
  window.open("https://forms.gle/kUEHTQW5c7j5K121A", "_blank");
  window.location.href = "english-assessment.html";
}

function injectComponents() {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.innerHTML = NAVBAR_HTML;

  const footer = document.querySelector(".footer");
  if (footer) footer.innerHTML = FOOTER_HTML;

  const floating = document.querySelector(".floating-action-group");
  if (floating) floating.innerHTML = FLOATING_HTML;

  // Re-initialize navigation logic (hamburger and active links)
  if (window.refreshNav) {
    window.refreshNav();
  }
}

// Ensure injection happens as soon as possible, but after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectComponents);
} else {
  injectComponents();
}
