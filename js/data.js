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
    name: "RANJITH N",
    role: "AI & Multi-Agent Systems Engineer",
    tagline: "Building agentic, multi-agent AI systems with LangGraph, Retrieval-Augmented Generation (RAG), vector embeddings, and human-in-the-loop LLM orchestration.",
    bio: "Computer Science graduate (B.Sc, Data Analytics) skilled in prompt engineering, structured output validation, REST API design, and full-stack delivery.",
    location: "Tirupur, Tamil Nadu, India",
    phone: "+91 7604960261",
    email: "ranjith.n.work@gmail.com",
    availability: "Available for AI / LLM Engineering roles",
    resumeUrl: "assets/Ranjith_N_Resume.pdf",
  },

  // Media & 3D Assets
  assets: {
    heroImage: "assets/hero-wide-themed_1.png",
    cutoutImage: "assets/me-cutout-themed_1.png",
    sunglassesCutout: "assets/me-sunglasses-cutout.png",
    heroMobile: "assets/hero-mobile-4x5.png",
    model3d: "assets/me.glb", // 3D GLB Model
    enable3D: false,          // Show your real cutout photo
  },

  // Social & Professional Links
  socialLinks: [
    { platform: "GitHub", icon: "fab fa-github", url: "https://github.com/RANJITH08" },
    { platform: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
    { platform: "Email", icon: "fas fa-envelope", url: "mailto:ranjith.n.work@gmail.com" },
    { platform: "Phone", icon: "fas fa-phone", url: "tel:+917604960261" }
  ],

  // About Section Details
  about: {
    headline: "Architecting Agentic Systems & Production RAG Pipelines",
    paragraphs: [
      "I am a Computer Science graduate (B.Sc, Data Analytics) focused on building autonomous agentic AI architectures with LangGraph, LangChain, and advanced Retrieval-Augmented Generation (RAG).",
      "Skilled in prompt engineering, structured output validation (Pydantic), human-in-the-loop (HITL) system design, vector embeddings (FAISS, Sentence-Transformers), and delivering end-to-end full-stack solutions with FastAPI and React."
    ],
    stats: [
      { label: "Featured AI Projects", value: "5" },
      { label: "AI & LLM Skills", value: "15+" },
      { label: "B.Sc Data Analytics", value: "2023-26" }
    ]
  },

  // Skills Categories
  skills: [
    {
      category: "AI & LLM Engineering",
      items: [
        "LangChain",
        "LangGraph",
        "Agentic AI",
        "Multi-Agent Systems",
        "AI Agents (ReAct)",
        "Retrieval-Augmented Generation (RAG)",
        "Vector Databases (FAISS)",
        "Vector Embeddings",
        "Semantic Search",
        "Sentence-Transformers",
        "Human-in-the-Loop (HITL) Design",
        "LLM Orchestration",
        "LLM APIs (Groq, Gemini)",
        "Prompt Engineering",
        "Structured Output Validation",
        "Model Evaluation"
      ]
    },
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "HTML/CSS"]
    },
    {
      category: "Frameworks & Tools",
      items: ["FastAPI", "React", "TypeScript", "Vite", "PostgreSQL", "MySQL", "Git", "GitHub", "Figma", "Render.com"]
    },
    {
      category: "Core Concepts",
      items: ["REST API Development", "Data Analytics", "Agentic Workflows", "System Design"]
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Team Collaboration", "Leadership", "Problem Solving", "Adaptability", "Quick Learner", "Enthusiasm"]
    },
    {
      category: "Areas of Interest",
      items: ["Game Development", "Animation", "Multi-Agent Automation", "Interactive 3D"]
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "AI Recruiting Pipeline Assistant",
      type: "Personal Project",
      description: "Agentic, multi-agent recruiting pipeline on LangGraph's StateGraph with typed Pydantic schemas, RAG-grounded scoring, and human approval.",
      points: [
        "Built an agentic, multi-agent recruiting pipeline (Resume Parser, JD-Match, Bias Checker, Interview Question Generator, Ranking) on LangGraph's StateGraph with typed Pydantic schemas, RAG-grounded scoring (FAISS + sentence-transformers), and a hard human-in-the-loop approval gate.",
        "Shipped a FastAPI backend (Groq LLM, pdfplumber PDF ingestion) + React/TypeScript dashboard end-to-end."
      ],
      tags: ["Python", "LangGraph", "LangChain", "FAISS", "Sentence-Transformers", "Groq API", "FastAPI", "Pydantic", "React", "TypeScript"],
      liveUrl: "",
      githubUrl: "https://github.com/RANJITH08"
    },
    {
      title: "Agentic RAG — Multi-Step Reasoning Document Q&A System",
      type: "Personal Project",
      description: "Self-checking agentic retrieval pipeline with dynamic query reformulation to reduce hallucinations.",
      points: [
        "Built an agentic RAG system where an LLM-driven agent decides when retrieval is needed, self-checks retrieved chunks for relevance, and reformulates the query on failure (up to 3 attempts) before answering — reducing hallucination by declining out-of-scope questions instead of guessing.",
        "Shipped a full-stack app: FastAPI backend (/chat, /upload, /health) with dynamic PDF ingestion (incremental FAISS updates), paired with a React + Vite UI showing a live, expandable reasoning trace per response."
      ],
      tags: ["Python", "LangChain", "Tool-Calling Agents", "Groq API (gpt-oss-120b)", "FAISS", "Sentence-Transformers", "FastAPI", "React", "Vite"],
      liveUrl: "",
      githubUrl: "https://github.com/RANJITH08"
    },
    {
      title: "LLM-Powered RAG System — PDF Document Q&A",
      type: "Personal Project",
      description: "Natural-language document interrogation pipeline leveraging FAISS semantic retrieval and Groq LLM grounded synthesis.",
      points: [
        "Built a RAG pipeline (PDF_RAG_FAISS_GROQ) for natural-language Q&A over PDFs using FAISS semantic retrieval + Groq LLM grounded generation.",
        "Documented architecture and published on GitHub and LinkedIn."
      ],
      tags: ["Python", "LangChain", "FAISS", "Vector Embeddings", "Semantic Search", "Groq API"],
      liveUrl: "",
      githubUrl: "https://github.com/RANJITH08"
    },
    {
      title: "Autonomous AI Research Agent",
      type: "Personal Project",
      description: "Autonomous reasoning agent utilizing tool calling to generate comprehensive academic-style research reports.",
      points: [
        "Built a LangChain ReAct agent that reasons over a query, dynamically selects tools (Wikipedia API, DuckDuckGo), and auto-generates structured academic-style research reports end-to-end."
      ],
      tags: ["Python", "LangChain (ReAct)", "Groq LLM", "Agentic AI", "Tool Use", "Prompt Engineering"],
      liveUrl: "",
      githubUrl: "https://github.com/RANJITH08"
    },
    {
      title: "Conversational AI Assistant — Gemini API",
      type: "Personal Project",
      description: "Context-aware conversational interface with prompt engineering for consistent multi-turn dialogues.",
      points: [
        "Built a context-aware conversational app using Gemini 1.5 Flash API with prompt engineering for consistent multi-turn responses."
      ],
      tags: ["Python", "Gemini 1.5 Flash", "LLM APIs", "Prompt Engineering", "Conversational AI"],
      liveUrl: "",
      githubUrl: "https://github.com/RANJITH08"
    }
  ],

  // Education Details
  education: [
    {
      degree: "Bachelor of Science, Computer Science with Data Analytics",
      institution: "KPR College of Arts, Science and Research",
      period: "2023 – 2026",
      details: "Coursework in Data Analytics, Algorithms, Machine Learning fundamentals, and Vector Databases."
    },
    {
      degree: "HSC — Computer Application & Accounting",
      institution: "Saradha Vidhyalaya Mat. Hr. Sec. School",
      period: "2022 – 2023",
      details: "Higher secondary education focusing on computer applications, programming concepts, and analytical foundations."
    }
  ],

  // Certifications
  certifications: [
    {
      name: "Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      date: "Completed",
      icon: "fas fa-certificate"
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      date: "April 2026",
      icon: "fas fa-chart-line"
    }
  ],

  // Achievements & Honors
  achievements: [
    {
      title: "Asian Book of Records",
      description: "Honored and recorded in the prestigious Asian Book of Records.",
      icon: "fas fa-trophy"
    },
    {
      title: "District ThrowBall Winner (Captain)",
      description: "Captained the district sports team to victory in championship competition.",
      icon: "fas fa-medal"
    }
  ],

  // Contact Information
  contact: {
    heading: "Let's Connect",
    subheading: "Open to opportunities in Agentic AI, RAG Systems, and Full-Stack Engineering. Feel free to reach out directly.",
    email: "ranjith.n.work@gmail.com",
    phone: "+91 7604960261",
    location: "Tirupur, Tamil Nadu, India"
  }
};

// Export for module or standard script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
