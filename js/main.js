/**
 * ====================================================================
 * MAIN APPLICATION ENTRY POINT (ES Module)
 * Phase 1: Skeleton loader & dynamic rendering from data.js.
 * ====================================================================
 */

import { portfolioData } from "./data.js";
import { initUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderIntro(portfolioData.intro);
  renderHero(portfolioData.personal, portfolioData.assets);
  renderAbout(portfolioData.about, portfolioData.assets);
  renderWork(portfolioData.projects);
  renderSkills(portfolioData.skills);
  renderCredits(portfolioData.credits);
  renderContact(portfolioData.contact);
  renderFooter(portfolioData.footer, portfolioData.personal);

  initUI();
  initCopyEmail(portfolioData.contact.email);
});

/* 1. INTRO SECTION SKELETON */
function renderIntro(intro) {
  const labelEl = document.getElementById("intro-label");
  const titleEl = document.getElementById("intro-title");
  const timecodeEl = document.getElementById("intro-timecode");
  const hintEl = document.getElementById("intro-skip-hint");

  if (labelEl && intro.label) labelEl.textContent = intro.label;
  if (titleEl && intro.title) titleEl.textContent = intro.title;
  if (timecodeEl && intro.timecode) timecodeEl.textContent = intro.timecode;
  if (hintEl && intro.skipHint) hintEl.textContent = intro.skipHint;
}

/* 2. HERO SECTION */
function renderHero(personal, assets) {
  if (!personal) return;

  document.title = `${personal.name} · Portfolio 2026`;

  const brandEl = document.getElementById("brand-logo");
  if (brandEl) brandEl.innerHTML = `${personal.name}<span>.</span>`;

  const heroNameEl = document.getElementById("hero-name");
  if (heroNameEl) heroNameEl.textContent = personal.name;

  const roleTextEl = document.getElementById("hero-role-text");
  if (roleTextEl && Array.isArray(personal.roles)) {
    roleTextEl.textContent = personal.roles.join(" · ");
  }

  const taglineEl = document.getElementById("hero-tagline");
  if (taglineEl) taglineEl.textContent = personal.tagline;

  const statusEl = document.getElementById("hero-status");
  if (statusEl && personal.status) statusEl.textContent = personal.status;
}

/* 3. ABOUT SECTION */
function renderAbout(about, assets) {
  if (!about) return;

  const tagEl = document.getElementById("about-tag");
  if (tagEl && about.sectionTag) tagEl.textContent = about.sectionTag;

  const titleEl = document.getElementById("about-title");
  if (titleEl && about.title) titleEl.textContent = about.title;

  const bioEl = document.getElementById("about-bio");
  if (bioEl && about.bio) bioEl.textContent = about.bio;

  const statsContainer = document.getElementById("about-stats");
  if (statsContainer && Array.isArray(about.stats)) {
    statsContainer.innerHTML = about.stats
      .map(
        (stat) => `
          <div class="stat-card">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `
      )
      .join("");
  }
}

/* 4. WORK SECTION (Contact-Sheet Grid) */
function renderWork(projects) {
  const container = document.getElementById("work-grid");
  if (!container || !Array.isArray(projects)) return;

  container.innerHTML = projects
    .map(
      (proj) => `
        <article class="work-frame" id="${proj.id}">
          <div class="work-frame-header">
            <span class="frame-number">${proj.number}</span>
            <span class="frame-tag-film">TAKE ${proj.number}</span>
          </div>
          <div class="work-image-wrap">
            <img src="${proj.image}" alt="${proj.title} preview" class="work-thumb" loading="lazy">
          </div>
          <div class="work-frame-body">
            <h3 class="work-title">${proj.title}</h3>
            <p class="work-summary">${proj.summary}</p>
            <div class="work-tags">
              ${(proj.tags || []).map((t) => `<span class="work-tag">${t}</span>`).join("")}
            </div>
            <div class="work-links">
              <span class="work-link-disabled">Live: ${proj.liveUrl}</span>
              <span class="work-link-disabled">GitHub: ${proj.githubUrl}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

/* 5. SKILLS SECTION */
function renderSkills(skills) {
  const track = document.getElementById("skills-marquee-track");
  if (!track || !Array.isArray(skills)) return;

  // Render items twice for infinite marquee track readiness
  const itemsHtml = skills
    .map((skill) => `<div class="skill-marquee-item">${skill}</div>`)
    .join("");

  track.innerHTML = itemsHtml + itemsHtml;
}

/* 6. CREDITS SECTION (Rolling End Credits Structure) */
function renderCredits(credits) {
  if (!credits) return;

  const tagEl = document.getElementById("credits-tag");
  if (tagEl && credits.sectionTag) tagEl.textContent = credits.sectionTag;

  const titleEl = document.getElementById("credits-title");
  if (titleEl && credits.title) titleEl.textContent = credits.title;

  const achievementsContainer = document.getElementById("credits-achievements");
  if (achievementsContainer && Array.isArray(credits.achievements)) {
    achievementsContainer.innerHTML = credits.achievements
      .map(
        (ach) => `
          <div class="credit-row">
            <span class="credit-category">${ach.category}</span>
            <div class="credit-details">
              <strong class="credit-name">${ach.title}</strong>
              <p class="credit-desc">${ach.description}</p>
            </div>
          </div>
        `
      )
      .join("");
  }

  const certsContainer = document.getElementById("credits-certifications");
  if (certsContainer && Array.isArray(credits.certifications)) {
    certsContainer.innerHTML = credits.certifications
      .map(
        (cert) => `
          <div class="credit-row">
            <span class="credit-category">${cert.issuer}</span>
            <div class="credit-details">
              <strong class="credit-name">${cert.title}</strong>
              <span class="credit-date">${cert.date}</span>
            </div>
          </div>
        `
      )
      .join("");
  }
}

/* 7. CONTACT SECTION ("ON AIR") */
function renderContact(contact) {
  if (!contact) return;

  const tagEl = document.getElementById("contact-tag");
  if (tagEl && contact.sectionTag) tagEl.textContent = contact.sectionTag;

  const titleEl = document.getElementById("contact-title");
  if (titleEl && contact.title) titleEl.textContent = contact.title;

  const badgeEl = document.getElementById("contact-badge-text");
  if (badgeEl && contact.badge) badgeEl.textContent = contact.badge;

  const headlineEl = document.getElementById("contact-headline");
  if (headlineEl && contact.headline) headlineEl.textContent = contact.headline;

  const emailEl = document.getElementById("contact-email-text");
  if (emailEl && contact.email) emailEl.textContent = contact.email;

  const locationEl = document.getElementById("contact-location");
  if (locationEl && contact.location) locationEl.textContent = contact.location;
}

/* Copy Email to Clipboard */
function initCopyEmail(email) {
  const btn = document.getElementById("copy-email-btn");
  const feedback = document.getElementById("copy-feedback");
  if (!btn || !email) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (feedback) {
        feedback.textContent = "COPIED TO CLIPBOARD!";
        feedback.classList.add("visible");
        setTimeout(() => {
          feedback.textContent = "";
          feedback.classList.remove("visible");
        }, 2500);
      }
    } catch (err) {
      console.warn("Clipboard access failed:", err);
    }
  });
}

/* FOOTER SECTION ("That's a wrap") */
function renderFooter(footer, personal) {
  const wrapEl = document.getElementById("footer-wrap-text");
  if (wrapEl && footer && footer.wrapText) wrapEl.textContent = footer.wrapText;

  const copyEl = document.getElementById("footer-copyright");
  if (copyEl && footer && footer.copyright) copyEl.textContent = footer.copyright;

  const locEl = document.getElementById("footer-location-note");
  if (locEl && footer && footer.locationNote) locEl.textContent = footer.locationNote;
}
