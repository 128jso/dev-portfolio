export const DEVELOPER_PROFILE = {
  name: "John So",
  username: "128jso",
  title: "Software Engineer II",
  location: "Seattle, WA",
  phone: "(702) 245-3161",
  email: "johnhyunso@gmail.com",
  linkedinUrl: "https://linkedin.com/in/johnhyunso",
  githubUrl: "https://github.com/128jso",
  bio: "Software Engineer with 4+ years building scalable data platforms at Nordstrom, including the award-winning Marketplace delivery that generated $115M+ in demand. Known for technical leadership, AI-assisted development, and zero-incident production launches.",
  publicRepos: 4,
  primaryLanguages: ["Java", "Go", "Python", "SQL", "JavaScript", "TypeScript"],
  cloudPlatforms: ["AWS (EC2, Lambda, S3, DynamoDB)", "Google Cloud Vertex AI", "Terraform", "Docker", "Kubernetes", "Apache Kafka"]
};

export const EDUCATION_DATA = {
  institution: "University of Washington",
  location: "Seattle, WA",
  degree: "B.A., Mathematics",
  period: "Sep 2017 – Jun 2021"
};

export const EXPERIENCE_TIMELINE = [
  {
    id: "nordstrom-se2",
    role: "Software Engineer II",
    company: "Nordstrom",
    period: "Sep 2024 – Present",
    location: "Seattle, WA",
    description: "Leading architectural design, data platform scalability, and AI-assisted development for core enterprise retail data systems.",
    bullets: [
      "Architected Nordstrom's PIM foundational platform (PostgreSQL, Docker), authoring ADRs and data models that eliminated system downtime and became the standard adopted team-wide.",
      "Built and validated a foundational data management service using AI-assisted development, delivering a 40-case QA matrix with 100% pass rate.",
      "Led discovery spikes and authored ADRs for a large-scale data migration, resolving legacy dependencies and delivering on schedule with zero data loss.",
      "Owned end-to-end SIT for the PIM platform — designed automated test scripts, surfaced critical edge cases, and coordinated cross-team validation for a zero-incident launch."
    ],
    skills: ["PostgreSQL", "Docker", "Data Modeling", "AI-Assisted Dev", "ADRs", "System Design"]
  },
  {
    id: "nordstrom-se1",
    role: "Software Engineer I",
    company: "Nordstrom",
    period: "Jul 2022 – Sep 2024",
    location: "Seattle, WA",
    description: "Directed technical delivery of key marketplace integrations, legacy cache optimizations, and multi-record parity analytics.",
    bullets: [
      "Directed technical delivery of the Mirakl Marketplace initiative, applying OOP design across cross-functional teams — earning Nordstrom's Delivery of the Year award and driving $115M+ in demand.",
      "Decoupled ID mapping from a legacy cache, reducing egress costs by $50K+ annually and improving system scalability.",
      "Built the core BCA infrastructure — mappers and processors in PostgreSQL and Docker — enabling zero-incident integration between new and legacy systems.",
      "Drove parity testing for Marketplace and NAP rollouts, analyzing 100K+ discrepancies across millions of records and delivering prioritized bug-fix roadmaps that maintained system reliability."
    ],
    skills: ["Java", "OOP Design", "PostgreSQL", "Docker", "Parity Testing", "Cache Optimization"]
  },
  {
    id: "uw-brunton-lab",
    role: "Neuroscience / Computer Science Research Assistant",
    company: "University of Washington, Brunton Lab",
    period: "May 2018 – May 2020",
    location: "Seattle, WA",
    description: "Automated large-scale dataset retrieval and pose estimation data analysis for computational neuroscience models.",
    bullets: [
      "Automated data retrieval from large neuroscience datasets using Python (pandas, NumPy), accelerating the analysis pipeline by 70%.",
      "Collected and analyzed 8,000+ data points for pose estimation models, contributing to 4 published academic papers."
    ],
    skills: ["Python", "Pandas", "NumPy", "Data Pipelines", "Pose Estimation", "Academic Research"]
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
    category: "Languages & Core",
    skills: ["Java", "Go", "Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "React.js", "Node.js / Express", "Pandas", "NumPy", "Maven"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3, DynamoDB)", "Terraform", "Docker", "Kubernetes", "Apache Kafka", "CI/CD / GitLab"]
  },
  {
    category: "Databases & System Design",
    skills: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Database Schema Design", "Scalability & Caching", "OOP & API Design"]
  }
];
