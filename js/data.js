/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * All your editable content lives in this file!
 * Update the fields below to customize your portfolio.
 * ====================================================================
 */

const portfolioData = {
  // Personal & Hero Section
  personal: {
    name: "Ranjith N",
    role: "AI Engineer & Full-Stack Developer",
    tagline: "Building autonomous agents, intelligent systems, and scalable digital experiences.",
    bio: "Passionate engineer specializing in Artificial Intelligence, Multi-Agent Systems, RAG architectures, and modern web applications.",
    location: "Bengaluru, India",
    email: "ranjith@example.com",
    availability: "Open to opportunities",
    resumeUrl: "#",
  },

  // Media & 3D Assets
  assets: {
    heroImage: "assets/me-hero.png",
    cutoutImage: "assets/me-cutout.png",
    model3d: "assets/me.glb", // 3D GLB Model (loaded via model-viewer)
    enable3D: true,           // Set to false to use cutoutImage fallback directly
  },

  // Social & Professional Links
  socialLinks: [
    { platform: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
    { platform: "GitHub", icon: "fab fa-github", url: "https://github.com" },
    { platform: "Email", icon: "fas fa-envelope", url: "mailto:ranjith@example.com" },
    { platform: "Twitter / X", icon: "fab fa-x-twitter", url: "https://twitter.com" }
  ],

  // About Section Details
  about: {
    headline: "Transforming complex challenges into intelligent, production-ready software.",
    paragraphs: [
      "I am an engineer focused on cutting-edge AI technologies, autonomous agents, and end-to-end web applications.",
      "With hands-on expertise in developing Agentic RAG pipelines, LLM-powered assistants, and full-stack platforms, I craft solutions that bridge advanced machine learning models with intuitive user experiences."
    ],
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Completed Projects", value: "15+" },
      { label: "AI Models & Agents", value: "10+" }
    ]
  },

  // Skills Categories
  skills: [
    {
      category: "Artificial Intelligence",
      items: ["Agentic RAG", "LangChain / LangGraph", "Multi-Agent Systems", "Vector Databases", "Prompt Engineering", "OpenAI / Gemini APIs"]
    },
    {
      category: "Backend & Systems",
      items: ["Python", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "Docker"]
    },
    {
      category: "Frontend & UI",
      items: ["HTML5 / CSS3", "JavaScript (ES6+)", "Three.js / WebGL", "Responsive Design", "Tailwind CSS"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "Linux", "VS Code", "CI/CD", "Cloud Deployments"]
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "Agentic RAG Knowledge Base",
      description: "Advanced retrieval-augmented generation system with multi-step reasoning, dynamic query routing, and automated self-correction.",
      tags: ["Python", "LangChain", "ChromaDB", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "JARVIS AI Assistant",
      description: "Interactive voice and multimodal desktop agent with contextual memory, workflow automation, and tool execution capabilities.",
      tags: ["Python", "OpenAI", "Tool Calling", "Memory Architecture"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Client Portal & Dashboard",
      description: "Secure, modern web portal featuring role-based authentication, real-time analytics, and client management workflows.",
      tags: ["JavaScript", "FastAPI", "CSS Grid", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],

  // Experience / Timeline
  experience: [
    {
      role: "AI Solutions Engineer",
      company: "Innovate Tech",
      period: "2024 - Present",
      description: "Architected multi-agent pipelines and deployed production-grade LLM applications with high reliability and low latency."
    },
    {
      role: "Software Developer",
      company: "Digital Systems",
      period: "2022 - 2024",
      description: "Developed scalable web applications, REST APIs, and automated data processing workflows."
    }
  ],

  // Contact Information
  contact: {
    heading: "Let's Connect",
    subheading: "Have a project idea, question, or opportunity? Feel free to reach out anytime.",
    email: "ranjith@example.com",
    location: "Bengaluru, India"
  }
};

// Export for module or standard script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
