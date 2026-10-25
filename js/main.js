/**
 * ====================================================================
 * MAIN APPLICATION LOGIC
 * Reads config from data.js and dynamically populates the portfolio DOM.
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData is not defined. Ensure js/data.js is loaded first.");
    return;
  }

  initPersonalData(portfolioData.personal, portfolioData.assets);
  initSocialLinks(portfolioData.socialLinks);
  initAbout(portfolioData.about);
  initSkills(portfolioData.skills);
  initProjects(portfolioData.projects);
  initEducationAndCredentials(portfolioData.education, portfolioData.certifications, portfolioData.achievements);
  initContact(portfolioData.contact);
  initNavigation();
  initVisualAsset(portfolioData.assets);
  initFooter(portfolioData.personal);
});

/* Personal & Hero Section */
function initPersonalData(personal, assets) {
  if (!personal) return;

  // Title and Brand
  document.title = `${personal.name} | ${personal.role}`;
  const brandLogo = document.getElementById("brand-logo");
  if (brandLogo) brandLogo.textContent = personal.name;

  // Hero details
  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = personal.name;

  const heroRole = document.getElementById("hero-role");
  if (heroRole) heroRole.textContent = personal.role;

  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = personal.tagline || personal.bio;

  const availabilityText = document.getElementById("availability-text");
  if (availabilityText && personal.availability) {
    availabilityText.textContent = personal.availability;
  }

  // Resume button
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn && personal.resumeUrl) {
    resumeBtn.href = personal.resumeUrl;
    resumeBtn.setAttribute("target", "_blank");
  }
}

/* 3D Model / Image visualizer */
function initVisualAsset(assets) {
  const container = document.getElementById("visual-container");
  if (!container || !assets) return;

  container.innerHTML = "";

  if (assets.enable3D && assets.model3d) {
    const modelViewer = document.createElement("model-viewer");
    modelViewer.setAttribute("src", assets.model3d);
    modelViewer.setAttribute("alt", "3D Avatar");
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("camera-controls", "");
    modelViewer.setAttribute("shadow-intensity", "1");
    modelViewer.setAttribute("loading", "lazy");
    modelViewer.className = "avatar-viewer";

    // Graceful fallback to cutout image if 3D model fails or has no mesh
    modelViewer.addEventListener("error", () => {
      console.warn("3D model failed to render, falling back to 2D cutout image.");
      renderFallbackImage(container, assets);
    });

    container.appendChild(modelViewer);
  } else {
    renderFallbackImage(container, assets);
  }
}

function renderFallbackImage(container, assets) {
  container.innerHTML = "";
  const img = document.createElement("img");
  img.src = assets.cutoutImage || assets.heroImage;
  img.alt = "Portrait";
  img.className = "avatar-cutout";
  img.onerror = () => {
    img.src = assets.heroImage;
  };
  container.appendChild(img);
}

/* Social Links */
function initSocialLinks(links) {
  const container = document.getElementById("social-links");
  if (!container || !Array.isArray(links)) return;

  container.innerHTML = links
    .map(
      (link) => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${link.platform}">
          <i class="${link.icon}"></i>
        </a>
      `
    )
    .join("");
}

/* About Section */
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

/* Skills Section */
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
            <i class="fas ${icon}" style="color: var(--accent-primary);"></i>
            ${grp.category}
          </h3>
          <div class="skill-badges">
            ${grp.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

/* Projects Section */
function initProjects(projects) {
  const container = document.getElementById("projects-container");
  if (!container || !Array.isArray(projects)) return;

  container.innerHTML = projects
    .map(
      (proj) => `
        <div class="project-card">
          <div>
            ${proj.type ? `<span class="project-badge">${proj.type}</span>` : ""}
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            ${
              Array.isArray(proj.points) && proj.points.length > 0
                ? `<ul class="project-bullets">
                    ${proj.points.map((pt) => `<li>${pt}</li>`).join("")}
                  </ul>`
                : ""
            }
            <div class="project-tags">
              ${(proj.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
          <div class="project-links">
            ${proj.liveUrl ? `<a href="${proj.liveUrl}" class="project-link" target="_blank" rel="noopener">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ""}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" class="project-link" target="_blank" rel="noopener">GitHub <i class="fab fa-github"></i></a>` : ""}
          </div>
        </div>
      `
    )
    .join("");
}

/* Education, Certifications & Achievements */
function initEducationAndCredentials(education, certs, achievements) {
  // Render Education
  const eduContainer = document.getElementById("education-timeline");
  if (eduContainer && Array.isArray(education)) {
    eduContainer.innerHTML = education
      .map(
        (edu) => `
          <div class="education-item">
            <h3 class="edu-degree">${edu.degree}</h3>
            <div class="edu-school">${edu.institution}</div>
            <div class="edu-period"><i class="far fa-calendar-alt"></i> ${edu.period}</div>
            ${edu.details ? `<p class="edu-details">${edu.details}</p>` : ""}
          </div>
        `
      )
      .join("");
  }

  // Render Certifications & Achievements
  const credsContainer = document.getElementById("credentials-list");
  if (credsContainer) {
    let html = "";

    if (Array.isArray(certs) && certs.length > 0) {
      certs.forEach((cert) => {
        html += `
          <div class="cred-card">
            <i class="${cert.icon || 'fas fa-certificate'} cred-icon"></i>
            <div class="cred-info">
              <h4>${cert.name}</h4>
              <p>${cert.issuer}</p>
              ${cert.date ? `<div class="cred-date">${cert.date}</div>` : ""}
            </div>
          </div>
        `;
      });
    }

    if (Array.isArray(achievements) && achievements.length > 0) {
      achievements.forEach((ach) => {
        html += `
          <div class="cred-card">
            <i class="${ach.icon || 'fas fa-trophy'} cred-icon" style="color: #f59e0b;"></i>
            <div class="cred-info">
              <h4>${ach.title}</h4>
              <p>${ach.description}</p>
            </div>
          </div>
        `;
      });
    }

    credsContainer.innerHTML = html;
  }
}

/* Contact Section */
function initContact(contact) {
  if (!contact) return;

  const headingEl = document.getElementById("contact-heading");
  if (headingEl && contact.heading) headingEl.textContent = contact.heading;

  const subEl = document.getElementById("contact-subheading");
  if (subEl && contact.subheading) subEl.textContent = contact.subheading;

  const gridEl = document.getElementById("contact-grid");
  if (gridEl) {
    gridEl.innerHTML = `
      <a href="mailto:${contact.email}" class="contact-card-item">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <div class="contact-label">Email</div>
        <div class="contact-val">${contact.email}</div>
      </a>
      <a href="tel:${contact.phone}" class="contact-card-item">
        <div class="contact-icon"><i class="fas fa-phone"></i></div>
        <div class="contact-label">Phone</div>
        <div class="contact-val">${contact.phone}</div>
      </a>
      <div class="contact-card-item">
        <div class="contact-icon"><i class="fas fa-location-dot"></i></div>
        <div class="contact-label">Location</div>
        <div class="contact-val">${contact.location}</div>
      </div>
      <a href="https://github.com/RANJITH08" target="_blank" rel="noopener" class="contact-card-item">
        <div class="contact-icon"><i class="fab fa-github"></i></div>
        <div class="contact-label">GitHub</div>
        <div class="contact-val">@RANJITH08</div>
      </a>
    `;
  }
}

/* Navigation & Mobile Drawer */
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

/* Footer Section */
function initFooter(personal) {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nameEl = document.getElementById("footer-name");
  if (nameEl && personal) nameEl.textContent = personal.name;
}
