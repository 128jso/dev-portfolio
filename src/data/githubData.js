export const DEVELOPER_PROFILE = {
  name: "128jso",
  title: "Full-Stack & AI Systems Engineer",
  bio: "Specializing in Agentic AI Systems, Full-Stack Web Development, Multi-Agent Orchestration, and Cloud Native Architectures.",
  githubUrl: "https://github.com/128jso",
  publicRepos: 4,
  primaryLanguages: ["Python", "TypeScript", "JavaScript", "Java", "React"],
  cloudPlatforms: ["Google Cloud Vertex AI", "Cloud Firestore", "Cloud Storage", "Cloud Run"]
};

export const EXPERIENCE_TIMELINE = [
  {
    id: "exp-1",
    role: "Full-Stack & AI Systems Engineer",
    company: "Agentic Systems & Independent Engineering",
    period: "2024 - Present",
    location: "Remote",
    description: "Architecting agentic AI systems, multi-agent workflows, and cloud-native web applications utilizing Google ADK, Vertex AI, and modern React stacks.",
    bullets: [
      "Engineered AURA Fitness AI utilizing Google ADK, Vertex AI Memory Bank, Cloud Firestore, GCS, and A2UI schema v0.8.",
      "Developed high-speed TypeScript web applications (Bible Memory) using spaced-repetition active recall algorithms.",
      "Implemented Agent Engine Sandbox Code Execution for secure model-generated Python computation."
    ],
    skills: ["Google ADK", "Vertex AI", "Python", "React", "TypeScript", "Firestore"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Software Engineer",
    company: "Web Systems & Cloud Applications",
    period: "2022 - 2024",
    location: "Remote",
    description: "Built scalable web platforms, RESTful backend microservices, and interactive frontend interfaces.",
    bullets: [
      "Built Emaily full-stack survey campaign system using Node.js, Express, MongoDB, SendGrid, and Stripe integration.",
      "Engineered Praise Workspace team recognition application with real-time UI state management.",
      "Designed responsive client-side component design systems and state flows in React."
    ],
    skills: ["Node.js", "Express", "MongoDB", "React", "JavaScript", "Stripe API"]
  },
  {
    id: "exp-3",
    role: "Software Developer (Java / OOP Systems)",
    company: "Software Systems & Game Engine Development",
    period: "2020 - 2022",
    location: "Remote",
    description: "Focused on core object-oriented software engineering, transaction state loops, and interactive Java engines.",
    bullets: [
      "Developed Family Business, a Java & Spring Boot strategic management game with custom entity and turn-based loops.",
      "Applied Command, Factory, and Observer OOP design patterns for transactional game state processing.",
      "Integrated Maven build automation and Spring Boot dependency injection logic."
    ],
    skills: ["Java", "Spring Boot", "OOP", "Maven", "Game Engine Logic"]
  }
];

export const PROJECTS_DATABASE = [
  {
    id: "aura-fitness-agent",
    title: "AURA Fitness AI",
    repoName: "aura-fitness-agent",
    tagline: "Agentic Multi-Location & Equipment Fitness Coach",
    description: "An AI-powered agentic fitness workspace built with Google ADK, Vertex AI Memory Bank, Cloud Firestore, GCS, A2UI, and Agent Engine Sandbox Code Execution. Synthesizes location-matched daily routines, interactive exercise hover video previews, and caloric/macro targets.",
    language: "Python",
    githubUrl: "https://github.com/128jso/aura-fitness-agent",
    demoGif: "https://raw.githubusercontent.com/128jso/aura-fitness-agent/main/demo.gif",
    stars: 1,
    topics: ["Google ADK", "Vertex AI", "Memory Bank", "A2UI", "Firestore", "Python"],
    featured: true,
    highlights: [
      "Persistent Memory Bank for multi-session user fact tracking",
      "Interactive 0ms hover video previews with biomechanical form cues",
      "Agent Engine Sandbox Code Execution for Python fitness computations",
      "A2UI v0.8 structured UI surface rendering"
    ]
  },
  {
    id: "bible-memory",
    title: "Bible Memory",
    repoName: "bible-memory",
    tagline: "TypeScript Spaced-Repetition Scripture Learning Application",
    description: "Interactive Web application engineered in TypeScript to assist users in memorizing scriptures utilizing spaced-repetition algorithms, active recall quizzes, and verse recitation progress tracking.",
    language: "TypeScript",
    githubUrl: "https://github.com/128jso/bible-memory",
    stars: 0,
    topics: ["TypeScript", "React", "Spaced Repetition", "Learning Tool"],
    featured: true,
    highlights: [
      "Spaced-repetition memorization algorithm implementation",
      "Interactive flashcards and verse recitation active recall UI",
      "TypeScript type-safe state architecture"
    ]
  },
  {
    id: "emaily",
    title: "Emaily",
    repoName: "Emaily",
    tagline: "Full-Stack Web Application for Feedback & Surveys",
    description: "Full-stack web application designed for streamlined user feedback collection, campaign analytics, and automated email survey workflows.",
    language: "JavaScript",
    githubUrl: "https://github.com/128jso/Emaily",
    stars: 0,
    topics: ["JavaScript", "Node.js", "Express", "Full-Stack", "Web App"],
    featured: true,
    highlights: [
      "Automated email campaign delivery system",
      "Express/Node.js backend with REST API integrations",
      "Responsive React client interface"
    ]
  },
  {
    id: "family-business",
    title: "Family Business",
    repoName: "FamilyBusiness",
    tagline: "Java-Based Strategy & Management Game",
    description: "An interactive strategy game developed in Java featuring player resource management, transactional game loops, and custom object-oriented game mechanics.",
    language: "Java",
    githubUrl: "https://github.com/128jso/FamilyBusiness",
    stars: 0,
    topics: ["Java", "Game Development", "OOP", "Strategy Game"],
    featured: false,
    highlights: [
      "Custom Java game engine and state loop architecture",
      "Interactive resource and strategy game mechanics",
      "Object-oriented entity and transaction modeling"
    ]
  }
];

export const SKILLS_MATRIX = [
  {
    category: "AI & Agentic Systems",
    skills: ["Google ADK (Python)", "Vertex AI Agent Runtime", "Memory Bank", "A2UI v0.8 Schema", "GenAI Tools & Callbacks", "RAG & Knowledge Retrieval"]
  },
  {
    category: "Frontend & UI Systems",
    skills: ["React.js", "Vite", "TypeScript", "JavaScript (ES6+)", "Vanilla CSS / Glassmorphism", "Lucide React"]
  },
  {
    category: "Backend & Cloud Infrastructure",
    skills: ["Python", "Node.js / Express", "Java (OOP / Game Dev)", "Cloud Firestore", "Google Cloud Storage (GCS)", "REST APIs & FastAPIs"]
  }
];
