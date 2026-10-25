/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * All editable content for the 7 sections lives in this file!
 * (Hero, About, Work, Skills, Credits, Contact, Footer)
 * ====================================================================
 */

const portfolioData = {
  // 1. Hero & Personal Details
  personal: {
    name: "RANJITH N",
    roles: [
      "AI & Multi-Agent Systems Engineer",
      "Agentic RAG Specialist",
      "LangGraph & LLM Orchestrator",
      "Full-Stack AI Developer"
    ],
    tagline: "Building agentic, multi-agent AI systems with LangGraph, Retrieval-Augmented Generation (RAG), vector embeddings, and human-in-the-loop LLM orchestration.",
    bio: "Computer Science graduate (B.Sc, Data Analytics) skilled in prompt engineering, structured output validation, REST API design, and full-stack delivery.",
    location: "Tirupur, Tamil Nadu, India",
    phone: "+91 7604960261",
    email: "ranjith.n.work@gmail.com",
    availability: "Open to AI / LLM Engineering roles",
    resumeUrl: "assets/Ranjith_N_Resume.pdf"
  },

  // Hero & Media Assets
  assets: {
    heroCutout: "assets/me-sunglasses-cutout.png",
    heroMobile: "assets/hero-mobile-4x5.png",
    resumePdf: "assets/Ranjith_N_Resume.pdf"
  },

  // Social Links
  socialLinks: [
    { platform: "GitHub", icon: "fab fa-github", url: "https://github.com/RANJITH08" },
    { platform: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
    { platform: "Email", icon: "fas fa-envelope", url: "mailto:ranjith.n.work@gmail.com" },
    { platform: "Phone", icon: "fas fa-phone", url: "tel:+917604960261" }
  ],

  // 2. About Section
  about: {
    title: "About",
    headline: "Architecting Agentic Systems & Production RAG Pipelines",
    paragraphs: [
      "I am a Computer Science graduate (B.Sc, Data Analytics) specialized in designing and building production-ready agentic AI systems using LangGraph, LangChain, and advanced RAG workflows.",
      "My work focuses on multi-step agent reasoning, human-in-the-loop validation, vector embeddings (FAISS, Sentence-Transformers), and high-performance REST APIs (FastAPI) to deliver scalable, reliable full-stack AI applications."
    ],
    stats: [
      { label: "Featured AI Projects", value: "5" },
      { label: "AI & LLM Skills", value: "15+" },
      { label: "B.Sc Data Analytics", value: "2023-26" }
    ]
  },

  // 3. Work Section (Featured Projects)
  work: [
    {
      title: "AI Recruiting Pipeline Assistant",
      type: "Personal Project",
      description: "Agentic, multi-agent recruiting pipeline on LangGraph's StateGraph with typed Pydantic schemas, RAG-grounded scoring, and a hard human-in-the-loop approval gate.",
      points: [
        "Built an agentic, multi-agent recruiting pipeline (Resume Parser, JD-Match, Bias Checker, Interview Question Generator, Ranking) on LangGraph's StateGraph with typed Pydantic schemas, RAG-grounded scoring (FAISS + sentence-transformers), and a hard human-in-the-loop approval gate.",
        "Shipped a FastAPI backend (Groq LLM, pdfplumber PDF ingestion) + React/TypeScript dashboard end-to-end."
      ],
      tags: ["Python", "LangGraph", "LangChain", "FAISS", "Sentence-Transformers", "Groq API", "FastAPI", "Pydantic", "React", "TypeScript"],
      githubUrl: "https://github.com/RANJITH08",
      liveUrl: ""
    },
    {
      title: "Agentic RAG — Multi-Step Reasoning Document Q&A System",
      type: "Personal Project",
      description: "Self-evaluating agentic retrieval architecture with automated query reformulation to prevent hallucinations.",
      points: [
        "Built an agentic RAG system where an LLM-driven agent decides when retrieval is needed, self-checks retrieved chunks for relevance, and reformulates the query on failure (up to 3 attempts) before answering — reducing hallucination by declining out-of-scope questions instead of guessing.",
        "Shipped a full-stack app: FastAPI backend (/chat, /upload, /health) with dynamic PDF ingestion (incremental FAISS updates), paired with a React + Vite UI showing a live, expandable reasoning trace per response."
      ],
      tags: ["Python", "LangChain", "Tool-Calling Agents", "Groq API (gpt-oss-120b)", "FAISS", "Sentence-Transformers", "FastAPI", "React", "Vite"],
      githubUrl: "https://github.com/RANJITH08",
      liveUrl: ""
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
      githubUrl: "https://github.com/RANJITH08",
      liveUrl: ""
    },
    {
      title: "Autonomous AI Research Agent",
      type: "Personal Project",
      description: "Autonomous reasoning agent utilizing tool calling to generate comprehensive academic-style research reports.",
      points: [
        "Built a LangChain ReAct agent that reasons over a query, dynamically selects tools (Wikipedia API, DuckDuckGo), and auto-generates structured academic-style research reports end-to-end."
      ],
      tags: ["Python", "LangChain (ReAct)", "Groq LLM", "Agentic AI", "Tool Use", "Prompt Engineering"],
      githubUrl: "https://github.com/RANJITH08",
      liveUrl: ""
    },
    {
      title: "Conversational AI Assistant — Gemini API",
      type: "Personal Project",
      description: "Context-aware conversational interface with prompt engineering for consistent multi-turn dialogues.",
      points: [
        "Built a context-aware conversational app using Gemini 1.5 Flash API with prompt engineering for consistent multi-turn responses."
      ],
      tags: ["Python", "Gemini 1.5 Flash", "LLM APIs", "Prompt Engineering", "Conversational AI"],
      githubUrl: "https://github.com/RANJITH08",
      liveUrl: ""
    }
  ],

  // 4. Skills Section
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
      items: ["Game Development", "Animation", "Autonomous Agents", "Interactive 3D"]
    }
  ],

  // 5. Credits Section (Education, Certifications, Achievements)
  credits: {
    education: [
      {
        degree: "Bachelor of Science, Computer Science with Data Analytics",
        institution: "KPR College of Arts, Science and Research",
        period: "2023 – 2026",
        details: "Focus on Data Analytics, Machine Learning fundamentals, data structures, and vector architectures."
      },
      {
        degree: "HSC — Computer Application & Accounting",
        institution: "Saradha Vidhyalaya Mat. Hr. Sec. School",
        period: "2022 – 2023",
        details: "Higher secondary education focusing on computer applications, programming concepts, and computational foundations."
      }
    ],
    certifications: [
      {
        name: "Prompt Engineering for Developers",
        issuer: "DeepLearning.AI",
        date: "Certified",
        icon: "fas fa-certificate"
      },
      {
        name: "Data Analytics Job Simulation",
        issuer: "Deloitte (via Forage)",
        date: "April 2026",
        icon: "fas fa-chart-line"
      }
    ],
    achievements: [
      {
        title: "Asian Book of Records",
        description: "Official record holder documented in the prestigious Asian Book of Records.",
        icon: "fas fa-trophy"
      },
      {
        title: "District ThrowBall Winner (Captain)",
        description: "Led the district team as Captain to championship victory.",
        icon: "fas fa-medal"
      }
    ]
  },

  // 6. Contact Section
  contact: {
    heading: "Let's Connect",
    subheading: "Interested in collaborating on AI agents, RAG systems, or full-stack software? Reach out directly.",
    email: "ranjith.n.work@gmail.com",
    phone: "+91 7604960261",
    location: "Tirupur, Tamil Nadu, India",
    githubUrl: "https://github.com/RANJITH08"
  },

  // 7. Footer
  footer: {
    brand: "RANJITH N",
    tagline: "AI & Multi-Agent Systems Engineer",
    copyright: "2026 RANJITH N. All rights reserved."
  }
};

// Export for module or standard script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
