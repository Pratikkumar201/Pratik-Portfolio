// app/data/projects.js
const projects = [
  {
    slug: "ai-expert-selection-system",
    title: "Expert Intelligence AI",
    image: "/ai-expert.png",
    description: `
An AI-driven expert selection platform developed for NeGD (Ministry of Electronics & IT, Government of India) to automate and optimize panel formation for high-stakes government evaluations.

⚡ Key Impact
- Reduced panel generation time from hours to under 5 minutes
- Cut manual shortlisting effort by 80%
- Processed and analyzed 17,000+ expert profiles with high accuracy

🧠 Core System
- **Intelligent Filtering Layer**: SQL-based pre-filtering to narrow candidate pool
- **Semantic Matching Engine**: BERT + Sentence-BERT embeddings with FAISS for precise expertise alignment
- **Ranking Model**: Random Forest-based scoring for relevance and suitability
- **Optimization Engine**: Linear Programming (PuLP) to enforce diversity, domain coverage, and panel constraints

🛠️ Tech Stack
Python · BERT · Sentence-BERT · FAISS · Scikit-learn · PuLP · SQL

💡 Outcome
Replaced a fully manual, time-intensive selection workflow with a fast, explainable, and mathematically optimized AI system, enabling data-driven decision-making at a national scale.
`.trim(),
    githubLink: "",
    tags: ["GenAI", "BERT", "FAISS", "Optimization", "Python"]
  },
  {
    slug: "ai-governance-os",
    title: "AI Governance OS",
    image: "",
    description: `
An AI-powered operating system designed for the Joint Secretary’s Office (Ministry of Youth Affairs & Sports, Government of India) to transform fragmented, manual workflows into a structured, intelligent, and audit-ready system.

⚡ Key Impact
- Achieved 95% task capture from previously unstructured WhatsApp/verbal workflows
- Enabled "Zero Browser" experience via automated WhatsApp briefings for senior leadership
- Reduced task leakage through intelligent reminders and escalation pipelines

🧠 Core Systems
- **AI Task Capture Agent**: WhatsApp-based interface for real-time task logging, updates, and queries
- **Active Reminder Engine**: Multi-level escalation system with automated follow-ups and DO letter drafting
- **People Intelligence Layer**: RACI-based workload tracking and heatmaps to prevent bottlenecks
- **Document Automation**: Generation of official documents (OMs, DO letters, PQ replies) with .docx export
- **Institutional Memory Engine**: Vector-powered policy Q&A for instant retrieval of departmental knowledge

🛠️ Tech Stack
Claude Sonnet · Supabase (pg_cron, Edge Functions) · LangGraph · Node.js · WhatsApp API

💡 Outcome
Transformed a manual administrative environment into an AI-assisted governance system with real-time visibility, accountability, and decision support.
`.trim(),
    githubLink: "",
    tags: ["Claude-Sonnet", "Supabase", "LangGraph", "WhatsApp-Bot", "Node.js"]
  },
  {
    slug: "advanced-agentic-ai",
    title: "Advanced Multi-Agent System",
    image: "",
    description: `
A sophisticated multi-agent orchestration system building complex reasoning capabilities into autonomous agents.

🛠️ Technologies & Methodology
- LangGraph DAG-based pipelines with tool-calling agents.
- Memory management and state machines for multi-step reasoning tasks.
- Implemented agent-to-agent handoffs and conditional routing.
- Human-in-the-loop checkpoints for critical reasoning steps.
- Exposed as a high-performance REST API via FastAPI.

💡 Key Impact
- Demonstrates advanced mastery of agentic AI patterns and orchestration.
- Robust state management for long-running reasoning tasks.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["LangGraph", "Multi-Agent", "FastAPI", "Python"]
  },
  {
    slug: "langchain-rag-assistant",
    title: "Enterprise RAG Assistant",
    image: "",
    description: `
An enterprise-grade RAG pipeline designed for context-aware, multi-turn institutional knowledge retrieval.

🛠️ Technologies & Methodology
- Full pipeline: Document ingestion -> Chunking -> Embedding (Sentence-BERT) -> pgVector storage.
- Semantic retrieval and LLM response generation with conversation memory chains.
- Integration of web search tools and prompt engineering for factual accuracy.
- Evaluated using LLM evaluation metrics to control hallucinations.

💡 Key Impact
- Achieves high accuracy in multi-turn Q&A scenarios.
- Demonstrates a production-ready approach to RAG evaluation and monitoring.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["RAG", "LLM", "FAISS", "Python", "LangChain"]
  },
  {
    slug: "bhu-digital-media-platform",
    title: "BHU News Platform",
    image: "/News_website.png",
    description: `
A live, centralized platform built for Banaras Hindu University, powering the official news, achievements, initiatives, and institutional updates in one place.

⚡ Key Impact
- Independently built and deployed a live production platform serving thousands of users
- Consolidated scattered university updates into a single, structured, and accessible system
- Reduced page load time by ~40% using SSR and Redis caching

🧠 Core System
- **Frontend Architecture**: High-performance UI built with Next.js, React, and Tailwind CSS
- **Content Management Layer**: Strapi headless CMS with PostgreSQL for structured, dynamic content
- **Performance Optimization**: Server-Side Rendering (SSR) and Redis caching for speed and SEO
- **Scalable Deployment**: Designed to support multiple institutional portals under a unified system

🛠️ Tech Stack
Next.js · React · Tailwind CSS · Strapi · PostgreSQL · Redis

💡 Outcome
Created a single source of truth for university-wide communication, improving accessibility, transparency, and digital outreach.
`.trim(),
    liveLink: "https://news.bhu.ac.in",
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["Next.js", "Strapi", "Redis", "FullStack"]
  },
  {
    slug: "hindi-speech-sentiment",
    title: "Hindi Speech Sentiment Analyzer",
    image: "/politics-speech-analyzer.png",
    description: `
Advanced NLP tool designed to process and analyze political speeches in Hindi, extracting sentiment and topic clusters.

🛠️ Technologies & Methodology
- TF-IDF vectorization and text clustering for topic discovery.
- Sentiment analysis using Python, Pandas, and spaCy.
- Interactive dashboard built with Streamlit for data visualization.

💡 Key Impact
- 70% reduction in manual speech analysis time.
- Delivers actionable insights into public opinion trends via automated sentiment tracking.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["NLP", "Python", "SentimentAnalysis", "Streamlit"]
  },
  {
    slug: "personal-portfolio",
    title: "AI Engineer Portfolio",
    image: "/portfolio.png",
    description: `
A high-end, interactive, and visually striking portfolio website designed to showcase professional AI and software engineering expertise.

⚡ Key Impact
- Built a premium, state-of-the-art interface with dynamic animations and responsive design
- Integrated real-time visitor tracking and an automated contact system
- Optimized for performance and SEO, achieving fast load times and high visibility

🧠 Core Features
- **Dynamic Project Showcase**: Interactive grid with detailed project views and tech stack tags
- **Visitor Analytics**: Custom tracking system using MongoDB and Redis for real-time insights
- **Modern Tech Stack**: Leveraging Next.js 14, React, and Tailwind CSS for a seamless UX
- **Robust Communication**: Contact form integrated with Resend API for reliable email delivery

🛠️ Tech Stack
Next.js · React · Tailwind CSS · MongoDB · Redis · Resend · Framer Motion

💡 Outcome
Successfully created a professional digital identity that effectively communicates technical proficiency and creative design capabilities.
`.trim(),
    githubLink: "https://github.com/Pratikkumar201/portfolio",
    tags: ["Next.js", "React", "MongoDB", "Redis", "Tailwind"]
  },
  {
    slug: "chaukhat-blog",
    title: "Chaukhat - Hindi Blog",
    image: "/chaukhat1.png",
    description: `
A professional Hindi blog platform developed for a client, focusing on politics, commentary, travel, and personal reflections.

⚡ Key Features
- **Rich Content Management**: Built to handle diverse categories like Indian Politics, Travel Stories, and Life Insights
- **Bilingual Interface**: Optimized for Hindi (Devanagari) script with modern typography
- **Interactive Gallery**: Dedicated photo gallery section to showcase travel and event photography
- **Responsive Design**: Seamless reading experience across mobile, tablet, and desktop devices

🛠️ Tech Stack
Next.js · React · Tailwind CSS · Strapi · PostgreSQL

💡 Outcome
Provided the client with a sophisticated, easy-to-manage digital space to share their voice and reach a wider Hindi-speaking audience.
`.trim(),
    liveLink: "https://www.chaukhat.co.in/",
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["Next.js", "Strapi", "Hindi-Blog", "FullStack"]
  }
];

export default projects;
