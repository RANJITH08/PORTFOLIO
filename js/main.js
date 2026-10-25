/**
 * ====================================================================
 * MAIN APPLICATION LOGIC
 * Reads config from data.js and populates the portfolio DOM dynamically.
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
  initExperience(portfolioData.experience);
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

    // Graceful fallback to cutout image if 3D model fails or placeholder has no mesh
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

  container.innerHTML = skills
    .map(
      (grp) => `
        <div class="skill-card">
          <h3 class="skill-category">${grp.category}</h3>
          <div class="skill-badges">
            ${grp.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
          </div>
        </div>
      `
    )
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
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            <div class="project-tags">
              ${(proj.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
          <div class="project-links">
            ${proj.liveUrl ? `<a href="${proj.liveUrl}" class="project-link" target="_blank" rel="noopener">Live Demo <i class="fas fa-external-link-alt"></i></a>` : ""}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" class="project-link" target="_blank" rel="noopener">Code <i class="fab fa-github"></i></a>` : ""}
          </div>
        </div>
      `
    )
    .join("");
}

/* Experience Section */
function initExperience(experience) {
  const container = document.getElementById("experience-timeline");
  if (!container || !Array.isArray(experience)) return;

  container.innerHTML = experience
    .map(
      (exp) => `
        <div class="timeline-item">
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company">${exp.company}</div>
          <div class="timeline-period">${exp.period}</div>
          <p class="timeline-desc">${exp.description}</p>
        </div>
      `
    )
    .join("");
}

/* Contact Section */
function initContact(contact) {
  if (!contact) return;

  const headingEl = document.getElementById("contact-heading");
  if (headingEl && contact.heading) headingEl.textContent = contact.heading;

  const subEl = document.getElementById("contact-subheading");
  if (subEl && contact.subheading) subEl.textContent = contact.subheading;

  const emailBtn = document.getElementById("contact-email-btn");
  if (emailBtn && contact.email) {
    emailBtn.href = `mailto:${contact.email}`;
    emailBtn.textContent = `Get in Touch (${contact.email})`;
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
