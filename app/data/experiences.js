// // app/data/experiences.js
// const experiences = [
//   {
//     slug: "negd-meity-intern",
//     title: "AI/ML Engineer (Intern)",
//     company: "National e-Governance Division (NeGD), MeitY",
//     period: "Feb 2026 – Present",
//     description: "Pioneering AI automation for senior government leadership, focusing on task intelligence and semantic search systems.",
//     projects: [
//       {
//         name: "Project 1: AI-Powered Expert Selection System",
//         details: [
//           "Slashed panel generation time from hours to <5 minutes — built end-to-end RAG pipeline with BERT expertise extraction and FAISS vector search.",
//           "Implemented multi-stage pipeline: SQL Filtering -> BERT Embedding -> Semantic Retrieval -> Random Forest Ranking -> Linear Programming.",
//           "Optimized panel formation over 17,000+ records, ensuring 100% compliance with complex institutional diversity constraints."
//         ],
//         tools: ["BERT", "FAISS", "Python", "SQL", "Linear Programming"]
//       },
//       {
//         name: "Project 2: Founder’s Office OS (Ministry of Youth Affairs & Sports)",
//         details: [
//           "Engineered a WhatsApp-first 'Zero Browser' OS for senior leadership using Claude-4 (Sonnet) and Interakt API for natural language task management.",
//           "Developed an Active Reminder Engine with a 7-level escalation cascade via Supabase pg_cron, auto-drafting follow-up letters for non-responsive external bodies.",
//           "Implemented 'People Intelligence' modules: Real-time workload scoring and RACI-based bottleneck detection across personnel.",
//           "Built a Document Drafting Engine for 12 official types (OM, DO Letters, PQs) with automated .docx export and institutional memory integration.",
//           "Achieved 95% task capture rate and 0 task leakage in high-stakes government operations."
//         ],
//         tools: ["Claude-Sonnet 4", "Supabase (Realtime/Edge Functions)", "Interakt API", "LangGraph", "Docker", "Vercel"]
//       }
//     ],
//     skills: ["GenAI", "LangChain", "LangGraph", "RAG", "BERT", "FAISS", "NestJS", "AWS", "Docker"]
//   },
//   {
//     slug: "bhu-software-developer",
//     title: "Software Developer",
//     company: "Information & PR Office, BHU",
//     period: "Mar 2025 – Jan 2026",
//     description: "Optimized institutional websites using Next.js & Strapi. Built NLP sentiment pipelines for public opinion tracking.",
//     workDetails: [
//       "Cut average page load time by ~40% — built and maintained institutional websites using Next.js, Strapi, and PostgreSQL with SSR and Redis caching.",
//       "Engineered NLP-based sentiment analysis pipeline (Python, Pandas, spaCy) tracking public opinion trends.",
//       "Delivered Power BI dashboards replacing entirely manual reporting — saving ~70% effort.",
//       "Managed deployment and scaling of institutional portals for high availability."
//     ],
//     skills: ["Next.js", "Strapi", "NLP", "Python", "PostgreSQL", "Redis", "Power BI"]
//   },
//   {
//     slug: "turing-data-annotator",
//     title: "Data Annotator (LLM)",
//     company: "Turing",
//     period: "Jun 2025 – Aug 2025",
//     description: "Annotated large-scale multimodal datasets for LLM training and fine-tuning at production scale.",
//     workDetails: [
//       "Annotated and curated large-scale multimodal datasets (code, text, image) for LLM training and fine-tuning at production scale.",
//       "Improved annotation workflow efficiency by ~30% through QA process optimization.",
//       "Collaborated with machine learning teams to refine reward models for RLHF pipelines.",
//       "Evaluated model outputs for accuracy, bias, and adherence to safety guidelines."
//     ],
//     skills: ["LLM", "Data Annotation", "RLHF", "Multimodal AI"]
//   },
//   {
//     slug: "revtrance-software-developer",
//     title: "Software Developer",
//     company: "Revtrance Softwares LLP",
//     period: "Sep 2024 – Dec 2024",
//     description: "Developed full-stack features for SaaS products, optimizing APIs and database performance.",
//     workDetails: [
//       "Developed full-stack features for SaaS product 1Management: RESTful APIs, responsive dashboards, and database optimization.",
//       "Improved overall system stability and performance through code reviews and query tuning.",
//       "Engineered core backend features using Node.js and Express.",
//       "Implemented secure authentication and authorization systems."
//     ],
//     skills: ["Node.js", "React", "SQL", "API Optimization", "SaaS"]
//   }
// ];

// export default experiences;


const experiences = [
  {
    slug: "negd-meity-intern",
    title: "AI/ML Engineer (Intern)",
    company: "National e-Governance Division (NeGD), MeitY",
    period: "Feb 2026 – Present",
    description: "Building AI-powered decision systems for senior government leadership, focusing on task intelligence, semantic retrieval, and workflow automation.",
    projects: [
      {
        name: "Expert Intelligence AI",
        details: [
          "Reduced expert panel generation time from hours to under 5 minutes by building an end-to-end AI pipeline for automated shortlisting.",
          "Designed multi-stage system: SQL filtering → BERT embeddings → FAISS semantic retrieval → Random Forest ranking → Linear Programming optimization.",
          "Processed and optimized 17,000+ expert profiles with 100% compliance to complex diversity and institutional constraints."
        ],
        tools: ["BERT", "FAISS", "Python", "SQL", "Linear Programming"]
      },
      {
        name: "AI Governance OS",
        details: [
          "Engineered a WhatsApp-first 'Zero Browser' operating system for senior officials using Claude Sonnet and Interakt API for natural language task management.",
          "Built Active Reminder Engine with 7-level escalation cascade (Supabase pg_cron), auto-generating follow-up communications for pending tasks.",
          "Developed People Intelligence layer with RACI-based workload scoring and bottleneck detection across personnel.",
          "Automated drafting of 12+ official document types (OMs, DO letters, PQs) with structured .docx output.",
          "Achieved 95% task capture rate, eliminating task leakage in high-stakes administrative workflows."
        ],
        tools: ["Claude Sonnet", "Supabase", "Interakt API", "LangGraph", "Docker", "Vercel"]
      }
    ],
    skills: ["GenAI", "LangChain", "LangGraph", "RAG", "BERT", "FAISS", "NestJS", "AWS", "Docker"]
  },
  {
    slug: "bhu-software-developer",
    title: "Software Developer",
    company: "Information & Public Relations Office, Banaras Hindu University",
    period: "Mar 2025 – Jan 2026",
    description: "Led development of institutional web platforms and analytics systems for Banaras Hindu University.",
    workDetails: [
      "Independently built and deployed a production-grade institutional web portal from scratch using Next.js, Strapi, and PostgreSQL.",
      "Improved performance and scalability with SSR architecture and Redis caching, reducing page load time by ~40%.",
      "Built NLP-based sentiment analysis pipeline (Python, Pandas, spaCy) to track public opinion trends.",
      "Replaced manual reporting workflows with Power BI dashboards, reducing effort by ~70%.",
      "Managed deployment, scaling, and maintenance of production-grade university systems."
    ],
    skills: ["Next.js", "Strapi", "NLP", "Python", "PostgreSQL", "Redis", "Power BI"]
  },
  {
    slug: "turing-data-annotator",
    title: "Data Annotator (LLM)",
    company: "Turing",
    period: "Jun 2025 – Aug 2025",
    description: "Worked on large-scale data annotation and evaluation pipelines for LLM training and alignment.",
    workDetails: [
      "Annotated multimodal datasets (text, code, images) for large-scale LLM training and fine-tuning.",
      "Improved annotation workflow efficiency by ~30% through QA optimization.",
      "Collaborated on RLHF pipelines, refining reward models and evaluation strategies.",
      "Evaluated model outputs for accuracy, bias, and safety compliance."
    ],
    skills: ["LLM", "Data Annotation", "RLHF", "Multimodal AI"]
  },
  {
    slug: "revtrance-software-developer",
    title: "Software Developer",
    company: "Revtrance Softwares LLP",
    period: "Sep 2024 – Dec 2024",
    description: "Built scalable backend systems and optimized APIs for SaaS applications.",
    workDetails: [
      "Developed REST APIs and dashboards for SaaS platform, improving system performance and usability.",
      "Optimized database queries and backend logic to enhance stability and response times.",
      "Implemented secure authentication and authorization mechanisms.",
      "Contributed to full-stack development using Node.js, Express, and React."
    ],
    skills: ["Node.js", "React", "SQL", "API Optimization", "SaaS"]
  }
];

export default experiences;