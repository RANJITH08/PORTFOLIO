/**
 * ====================================================================
 * PORTFOLIO APPLICATION LOGIC
 * Dynamic data rendering for all 7 sections from js/data.js:
 * 1. Hero (with rotating role text)
 * 2. About
 * 3. Work
 * 4. Skills
 * 5. Credits
 * 6. Contact
 * 7. Footer
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData is not defined. Ensure js/data.js is loaded first.");
    return;
  }

  // Initialize the 7 Sections
  initHero(portfolioData.personal, portfolioData.socialLinks);
  initAbout(portfolioData.about);
  initWork(portfolioData.work);
  initSkills(portfolioData.skills);
  initCredits(portfolioData.credits);
  initContact(portfolioData.contact);
  initFooter(portfolioData.footer, portfolioData.personal);
  initNavigation();
});

/* ====================================================================
   1. HERO SECTION (Prompt 2: Rotating Role Text & Dynamic Content)
   ==================================================================== */
function initHero(personal, socials) {
  if (!personal) return;

  // Title and Brand
  document.title = `${personal.name} | Portfolio`;
  const brandLogo = document.getElementById("brand-logo");
  if (brandLogo) brandLogo.innerHTML = `${personal.name}<span>.</span>`;

  // Hero Name
  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = personal.name;

  // Hero Tagline
  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = personal.tagline || personal.bio;

  // Availability Badge
  const availabilityText = document.getElementById("availability-text");
  if (availabilityText && personal.availability) {
    availabilityText.textContent = personal.availability;
  }

  // Resume Download Button
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn && personal.resumeUrl) {
    resumeBtn.href = personal.resumeUrl;
    resumeBtn.setAttribute("target", "_blank");
  }

  // Rotating Role Text
  initRotatingRole(personal.roles);

  // Social Links Bar
  const socialsContainer = document.getElementById("hero-socials");
  if (socialsContainer && Array.isArray(socials)) {
    socialsContainer.innerHTML = socials
      .map(
        (s) => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.platform}">
            <i class="${s.icon}"></i>
          </a>
        `
      )
      .join("");
  }
}

function initRotatingRole(roles) {
  const roleEl = document.getElementById("hero-role-text");
  if (!roleEl || !Array.isArray(roles) || roles.length === 0) return;

  let currentIndex = 0;
  roleEl.textContent = roles[0];

  // Rotate role text at a steady interval
  setInterval(() => {
    currentIndex = (currentIndex + 1) % roles.length;
    roleEl.textContent = roles[currentIndex];
  }, 2800);
}

/* ====================================================================
   2. ABOUT SECTION
   ==================================================================== */
function initAbout(about) {
  if (!about) return;

  const headlineEl = document.getElementById("about-headline");
  if (headlineEl && about.headline) headlineEl.textContent = about.headline;

  const bodyEl = document.getElementById("about-body");
  if (bodyEl && Array.isArray(about.paragraphs)) {
    bodyEl.innerHTML = about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  const statsContainer = document.getElementById("about-stats");
  if (statsContainer && Array.isArray(about.stats)) {
    statsContainer.innerHTML = about.stats
      .map(
        (stat) => `
          <div class="stat-item">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `
      )
      .join("");
  }
}

/* ====================================================================
   3. WORK SECTION
   ==================================================================== */
function initWork(work) {
  const container = document.getElementById("work-container");
  if (!container || !Array.isArray(work)) return;

  container.innerHTML = work
    .map(
      (item) => `
        <div class="work-card">
          <div>
            ${item.type ? `<div class="work-type">${item.type}</div>` : ""}
            <h3 class="work-title">${item.title}</h3>
            <p class="work-description">${item.description}</p>
            ${
              Array.isArray(item.points) && item.points.length > 0
                ? `<ul class="work-bullets">
                    ${item.points.map((pt) => `<li>${pt}</li>`).join("")}
                  </ul>`
                : ""
            }
            <div class="work-tags">
              ${(item.tags || []).map((tag) => `<span class="work-tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="work-links">
            ${item.liveUrl ? `<a href="${item.liveUrl}" class="work-link" target="_blank" rel="noopener">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ""}
            ${item.githubUrl ? `<a href="${item.githubUrl}" class="work-link" target="_blank" rel="noopener">GitHub <i class="fab fa-github"></i></a>` : ""}
          </div>
        </div>
      `
    )
    .join("");
}

/* ====================================================================
   4. SKILLS SECTION
   ==================================================================== */
function initSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container || !Array.isArray(skills)) return;

  const iconMap = {
    "AI & LLM Engineering": "fa-brain",
    "Languages": "fa-code",
    "Frameworks & Tools": "fa-layer-group",
    "Core Concepts": "fa-cubes",
    "Soft Skills": "fa-users",
    "Areas of Interest": "fa-gamepad"
  };

  container.innerHTML = skills
    .map((grp) => {
      const icon = iconMap[grp.category] || "fa-check";
      return `
        <div class="skill-card">
          <h3 class="skill-category">
            <i class="fas ${icon}"></i>
            ${grp.category}
          </h3>
          <div class="skill-items">
            ${grp.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

/* ====================================================================
   5. CREDITS SECTION (Education, Certifications & Achievements)
   ==================================================================== */
function initCredits(credits) {
  if (!credits) return;

  // Render Education
  const eduContainer = document.getElementById("education-timeline");
  if (eduContainer && Array.isArray(credits.education)) {
    eduContainer.innerHTML = credits.education
      .map(
        (edu) => `
          <div class="edu-item">
            <h4 class="edu-degree">${edu.degree}</h4>
            <div class="edu-school">${edu.institution}</div>
            <div class="edu-period"><i class="far fa-calendar-alt"></i> ${edu.period}</div>
            ${edu.details ? `<p class="edu-details">${edu.details}</p>` : ""}
          </div>
        `
      )
      .join("");
  }

  // Render Certifications & Achievements List
  const credsContainer = document.getElementById("credits-list");
  if (credsContainer) {
    let html = "";

    if (Array.isArray(credits.certifications)) {
      credits.certifications.forEach((c) => {
        html += `
          <div class="cred-card">
            <i class="${c.icon || 'fas fa-certificate'} cred-icon"></i>
            <div class="cred-info">
              <h4>${c.name}</h4>
              <p>${c.issuer}</p>
              ${c.date ? `<div class="cred-date">${c.date}</div>` : ""}
            </div>
          </div>
        `;
      });
    }

    if (Array.isArray(credits.achievements)) {
      credits.achievements.forEach((a) => {
        html += `
          <div class="cred-card">
            <i class="${a.icon || 'fas fa-trophy'} cred-icon" style="color: var(--crimson);"></i>
            <div class="cred-info">
              <h4>${a.title}</h4>
              <p>${a.description}</p>
            </div>
          </div>
        `;
      });
    }

    credsContainer.innerHTML = html;
  }
}

/* ====================================================================
   6. CONTACT SECTION
   ==================================================================== */
function initContact(contact) {
  if (!contact) return;

  const headingEl = document.getElementById("contact-heading");
  if (headingEl && contact.heading) headingEl.textContent = contact.heading;

  const subEl = document.getElementById("contact-subheading");
  if (subEl && contact.subheading) subEl.textContent = contact.subheading;

  const gridEl = document.getElementById("contact-grid");
  if (gridEl) {
    gridEl.innerHTML = `
      <a href="mailto:${contact.email}" class="contact-card">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <div class="contact-label">Email</div>
        <div class="contact-value">${contact.email}</div>
      </a>
      <a href="tel:${contact.phone}" class="contact-card">
        <div class="contact-icon"><i class="fas fa-phone"></i></div>
        <div class="contact-label">Phone</div>
        <div class="contact-value">${contact.phone}</div>
      </a>
      <div class="contact-card">
        <div class="contact-icon"><i class="fas fa-location-dot"></i></div>
        <div class="contact-label">Location</div>
        <div class="contact-value">${contact.location}</div>
      </div>
      <a href="${contact.githubUrl || 'https://github.com/RANJITH08'}" target="_blank" rel="noopener" class="contact-card">
        <div class="contact-icon"><i class="fab fa-github"></i></div>
        <div class="contact-label">GitHub</div>
        <div class="contact-value">@RANJITH08</div>
      </a>
    `;
  }
}

/* ====================================================================
   7. FOOTER SECTION
   ==================================================================== */
function initFooter(footer, personal) {
  const brandEl = document.getElementById("footer-brand");
  if (brandEl && personal) brandEl.innerHTML = `${personal.name}<span>.</span>`;

  const tagEl = document.getElementById("footer-tagline");
  if (tagEl && footer && footer.tagline) tagEl.textContent = footer.tagline;

  const copyEl = document.getElementById("footer-copyright");
  if (copyEl && footer && footer.copyright) {
    copyEl.textContent = `© ${new Date().getFullYear()} ${footer.copyright}`;
  }
}

/* Mobile Navigation Toggle */
function initNavigation() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}
