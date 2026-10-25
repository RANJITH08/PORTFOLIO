/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * All editable content lives here. Factual and accurate.
 * ====================================================================
 */

export const portfolioData = {
  // Personal Info
  personal: {
    name: "Ranjith N",
    location: "Tamil Nadu, India",
    email: "ranjith.n.work@gmail.com",
    linkedin: "[TODO]",
    github: "[TODO]",
    roles: ["AI Engineer", "Data Analyst", "Builder"],
    tagline: "Engineering intelligent agent systems, real-time RAG pipelines, and high-performance digital tools.",
    status: "Available for AI Engineering & Product Roles"
  },

  // Assets Reference (Strictly Relative Paths)
  assets: {
    heroCutout: "assets/me-sunglasses-cutout.png",
    heroThemed: "assets/me-cutout-themed.png",
    heroWideThemed: "assets/hero-wide-themed.png",
    heroMobile: "assets/hero-mobile-4x5.png",
    model3d: "assets/me.glb",
    resumePdf: "assets/Ranjith_N_Resume.pdf"
  },

  // Intro Screen (Studio / Film-Set Metaphor: "Rolling")
  intro: {
    label: "ROLLING",
    title: "RANJITH N · PORTFOLIO 2026",
    timecode: "00:00:02:18",
    skipHint: "Click or press any key to skip"
  },

  // About Section (Darkroom Develop Theme)
  about: {
    sectionTag: "ACT I · THE PROFILE",
    title: "About",
    bio: "B.Sc Computer Science with Data Analytics, KPR College of Arts, Science and Research (2023-2026). Learns by building real projects; goal is AI product engineering.",
    stats: [
      { label: "Degree Path", value: "2023–2026" },
      { label: "Specialization", value: "B.Sc Data Analytics" },
      { label: "Primary Objective", value: "AI Product Engineering" }
    ]
  },

  // Work Section (Contact-Sheet Grid of 3 Projects)
  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Jarvis-style AI Assistant",
      summary: "Multi-provider LLM router with fallback, tool-calling, RAG, verifier and voice.",
      description: "An autonomous desktop AI assistant featuring an intelligent LLM routing mechanism across OpenAI and Groq with automatic fallback, multi-step tool execution, retrieval-augmented generation (RAG) over local context, output verification, and bidirectional voice interaction.",
      tags: ["Python", "LLM Router", "Tool-Calling", "RAG", "Voice"],
      liveUrl: "[TODO]",
      githubUrl: "[TODO]",
      image: "assets/hero-wide-themed.png"
    },
    {
      id: "project-2",
      number: "02",
      title: "PromptShield",
      summary: "Local-first floating prompt optimizer desktop app (Tauri, Rust, React).",
      description: "A lightweight, privacy-focused floating desktop overlay designed to refine, analyze, and enhance system prompts in real time with low latency before submission to LLMs.",
      tags: ["Tauri", "Rust", "React", "Desktop", "Prompt Engineering"],
      liveUrl: "[TODO]",
      githubUrl: "[TODO]",
      image: "assets/hero-wide-themed.png"
    },
    {
      id: "project-3",
      number: "03",
      title: "Client Portal",
      summary: "Login, unique user IDs and secure folder redirects for a client.",
      description: "A production client management portal implementing robust authentication, unique customer ID hashing, and dynamic secure folder redirects for file deliveries.",
      tags: ["Authentication", "Security", "Folder Redirects", "Full-Stack"],
      liveUrl: "[TODO]",
      githubUrl: "[TODO]",
      image: "assets/hero-wide-themed.png"
    }
  ],

  // Skills Section (Infinite Marquee of Tools)
  skills: [
    "Python",
    "SQL",
    "Data Analytics",
    "Prompt Engineering",
    "LLM apps",
    "RAG",
    "React",
    "Rust",
    "Tauri",
    "Git"
  ],

  // Credits Section (Rolling End Credits)
  credits: {
    sectionTag: "ACT IV · CREDITS",
    title: "Credits",
    achievements: [
      {
        title: "Asian Book of Records",
        category: "Record Holder",
        description: "Officially documented record in the Asian Book of Records."
      },
      {
        title: "District ThrowBall Winner (Captain)",
        category: "Leadership & Athletics",
        description: "Captained the district sports team to championship victory."
      }
    ],
    certifications: [
      {
        title: "Prompt Engineering for Developers",
        issuer: "DeepLearning.AI",
        date: "Certified"
      },
      {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte (via Forage)",
        date: "April 2026"
      }
    ]
  },

  // Contact Section ("ON AIR" Studio Metaphor)
  contact: {
    sectionTag: "FINAL ACT · TRANSMISSION",
    title: "Contact",
    badge: "ON AIR",
    headline: "Let's build something remarkable.",
    email: "ranjith.n.work@gmail.com",
    linkedin: "[TODO]",
    github: "[TODO]",
    location: "Tamil Nadu, India"
  },

  // Footer ("That's a wrap")
  footer: {
    wrapText: "THAT'S A WRAP",
    copyright: "2026 RANJITH N. ALL RIGHTS RESERVED.",
    locationNote: "TAMIL NADU, INDIA"
  }
};

// Also attach to window for global script accessibility if needed
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

export default portfolioData;
