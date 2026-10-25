/**
 * ====================================================================
 * UI CONTROLLER (Cursor, Intro, Lightbox, Navbar, etc.)
 * Skeleton handling for Phase 1.
 * ====================================================================
 */

export function initUI() {
  // Intro screen dismiss (skippable)
  const introScreen = document.getElementById("intro-screen");
  if (introScreen) {
    const dismissIntro = () => {
      introScreen.classList.add("hidden");
    };
    introScreen.addEventListener("click", dismissIntro);
    window.addEventListener("keydown", dismissIntro, { once: true });
  }
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll progress bar
  const progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }, { passive: true });
  }
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
