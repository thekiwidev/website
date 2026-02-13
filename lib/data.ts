export const SITE_METADATA = {
  name: "Adedotun Gabriel",
  title: "Architecting High-Performance Web & Mobile Systems",
  tagline: "Systems-oriented full-stack engineer specializing in type-safe architecture, real-time systems, and AI-augmented development workflows.",
  description: "Full-stack engineer focused on scalable frontend architectures, backend orchestration, and measurable engineering impact.",
  primaryCTA: {
    label: "View Engineering Case Studies",
    href: "/projects",
  },
  secondaryCTA: {
    label: "Read Technical Journal",
    href: "/blog",
  },
};

export interface Project {
  slug: string;
  title: string;
  role: string;
  period?: string;
  problem: string;
  architecture: Record<string, string | string[]>;
  impact: Record<string, string>;
  tradeoffs?: string[];
  deepDiveSnippets?: { title: string; description: string }[];
  aiIntegration?: string;
  optimization?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "seamlessvisa-validation-engine",
    title: "SeamlessVisa — Dynamic Immigration Form Architecture",
    role: "Front-End Engineer",
    period: "Jul 2023 – Dec 2025",
    problem: "Complex U.S. immigration forms contained deeply nested conditional validation logic causing high submission errors and brittle maintenance.",
    architecture: {
      frontend: ["Next.js", "TypeScript", "React Hook Form"],
      validation: "Custom onlyWhen utility replacing nested Yup conditions",
      state: "TanStack Query + Context",
      realTime: "WebSockets (voice-to-voice streaming agent)",
      designSystem: "Tailwind CSS component library",
    },
    impact: {
      codeComplexityReduction: "60%",
      formErrorReduction: "45%",
      performance: "Consistent 60fps across multi-step forms",
    },
    tradeoffs: [
      "Custom validation utility required extensive edge-case testing",
      "WebSocket streaming introduced infra complexity compared to polling",
    ],
    deepDiveSnippets: [
      {
        title: "Custom onlyWhen Utility",
        description: "Abstracted conditional logic into reusable validation primitives to reduce duplication and improve clarity.",
      },
      {
        title: "Bidirectional Voice Streaming",
        description: "Streamed audio chunks over WebSockets to eliminate latency present in legacy request-response flows.",
      },
    ],
  },
  {
    slug: "migranx-mobile-architecture",
    title: "MigranX — Mobile Logistics Platform",
    role: "Front-End Engineer",
    period: "Oct 2022 – Present",
    problem: "Needed a scalable, cost-efficient mobile architecture supporting real-time tracking and secure API orchestration.",
    architecture: {
      mobile: ["React Native", "Expo"],
      dataLayer: "TanStack Query with Axios Interceptors",
      backendIntegration: "Token injection (Guest-ID + Bearer)",
      cachingStrategy: "Refetch only on server payload mutation",
    },
    impact: {
      apiCostReduction: "Significant reduction via intelligent caching",
      security: "Global request interception for consistent auth handling",
      scalability: "Modular data-fetching layer",
    },
    tradeoffs: [
      "Aggressive caching required careful invalidation design",
      "Interceptor abstraction increased onboarding complexity",
    ],
  },
  {
    slug: "momentum-logistics-platform",
    title: "Momentum Logistics Service — Full-Stack Freight Platform",
    role: "Full-Stack Engineer",
    problem: "Manual freight estimation and fragmented logistics workflows limited operational efficiency.",
    architecture: {
      frontend: ["Next.js", "TypeScript", "Tailwind"],
      backend: "Node.js + Third-party freight APIs",
      database: "PostgreSQL",
      designSystem: "Unified marketing + internal dashboard UI",
    },
    impact: {
      contractValueIncrease: "Expanded client scope due to superior UI/UX quality",
      automation: "Freight estimates & tracking fully automated",
    },
    tradeoffs: [
      "Third-party API inconsistencies required normalization layer",
      "Unified design system required cross-team coordination",
    ],
  },
  {
    slug: "plantsnap-ai-mobile",
    title: "PlantSnap — AI Plant Recognition App",
    role: "Mobile Engineer",
    problem: "Users needed fast, accurate plant identification under low-bandwidth conditions.",
    architecture: {
      mobile: ["React Native", "Expo"],
      aiIntegration: "Third-party plant classification API",
      optimization: "Image compression before upload",
    },
    impact: {
      accuracy: "95% recognition accuracy on test dataset",
      bandwidthOptimization: "Reduced upload payload size significantly",
    },
  },
];

export const EXPERIENCE_DATA = {
  timeline: [
    {
      company: "MigranX (ProServants)",
      role: "Front-End Engineer",
      period: "Oct 2022 – Present",
      focus: "Mobile-first logistics architecture and API orchestration",
      growth: "Transitioned from UI implementation to designing scalable async data systems.",
    },
    {
      company: "SeamlessVisa",
      role: "Front-End Engineer",
      period: "Jul 2023 – Dec 2025",
      focus: "Complex validation systems and real-time voice streaming",
      growth: "Deepened systems-level thinking and performance optimization expertise.",
    },
  ],
  education: [
    {
      institution: "University of the People",
      degree: "B.Sc. Computer Science",
      status: "Ongoing",
      startYear: 2023,
    },
  ],
  certifications: [
    {
      name: "Product Experimentation Micro-Certification",
      issuer: "Product School",
      year: 2025,
    },
  ],
  coreStrengths: [
    "Type-safe front-end architecture",
    "Async data orchestration",
    "Real-time systems design",
    "API contract modeling",
    "AI-assisted development workflows",
  ],
  techStack: {
    languages: ["TypeScript", "JavaScript", "Python", "Java"],
    frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    cloud: ["Supabase", "Convex", "Firebase", "Vercel", "Netlify"],
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  category: string;
  readingTime: number;
  published: boolean;
  publishedAt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "refactoring-nested-yup-logic",
    title: "Refactoring Nested Yup Logic for Scalable Validation",
    excerpt: "How abstracting conditional validation logic reduced complexity by 60% in a production immigration system.",
    tags: ["TypeScript", "Architecture", "Validation"],
    category: "Architecture Deep Dive",
    readingTime: 8,
    published: true,
    publishedAt: "2026-01-10",
  },
  {
    slug: "designing-cache-aware-mobile-architecture",
    title: "Designing a Cache-Aware Mobile Architecture with TanStack Query",
    excerpt: "Reducing API costs while maintaining real-time UX in a logistics platform.",
    tags: ["React Native", "TanStack Query", "Performance"],
    category: "Performance Engineering",
    readingTime: 10,
    published: true,
    publishedAt: "2026-01-20",
  },
];

export interface LabExperiment {
  date: string;
  title: string;
  summary: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    date: "2026-02-01",
    title: "Exploring C# Async/Await vs JavaScript Promises",
    summary: "Analyzed thread scheduling differences and memory implications between CLR and V8 event loop.",
  },
  {
    date: "2026-02-05",
    title: "AI-Assisted Refactor Workflow",
    summary: "Experimented with structured prompting patterns to validate AI-generated refactors before integration.",
  },
  {
    date: "2026-02-10",
    title: "Java Concurrency — ExecutorService Deep Dive",
    "summary": "Studied thread pooling strategies and compared to Node's single-threaded event loop model.",
  },
];

export const PHILOSOPHY = {
  philosophy: "Engineering is the discipline of building systems that scale not only technically, but cognitively. My focus is reducing complexity, increasing type safety, and aligning architecture with product velocity.",
  aiApproach: {
    headline: "AI as a Force Multiplier, Not a Crutch",
    principles: [
      "AI generates drafts, not final truth",
      "Architectural decisions remain human-led",
      "Every AI-generated solution is benchmarked and validated",
      "Workflow structured to achieve 10x velocity without sacrificing rigor",
    ],
  },
  careerGoal: "To design distributed, scalable systems that merge performance engineering with intelligent automation.",
};

export const HOME_DATA = {
  hero: {
    headline: "Architecting High-Performance Web & Mobile Systems with Engineering Rigor",
    subtext: "Full-stack engineer building type-safe architectures, real-time systems, and AI-augmented workflows.",
    primaryCTA: "/projects",
    secondaryCTA: "/blog",
  },
  systemBlueprintSnippet: {
    title: "Custom Validation Engine",
    description: "Reusable conditional validation abstraction reducing nested logic complexity by 60%.",
  },
  featuredProjects: [
    "seamlessvisa-validation-engine",
    "migranx-mobile-architecture",
    "momentum-logistics-platform",
  ],
};
