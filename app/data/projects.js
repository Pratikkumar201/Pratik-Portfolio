// // app/data/projects.js
// const projects = [
//   {
//     slug: "ai-expert-selection-system",
//     title: "Expert Intelligence AI",
//     image: "/ai-expert.png",
//     description: `
// An AI-driven expert selection platform developed for NeGD (Ministry of Electronics & IT, Government of India) to automate and optimize panel formation for high-stakes government evaluations.

// ⚡ Key Impact
// - Reduced panel generation time from hours to under 5 minutes
// - Cut manual shortlisting effort by 80%
// - Processed and analyzed 17,000+ expert profiles with high accuracy

// 🧠 Core System
// - **Intelligent Filtering Layer**: SQL-based pre-filtering to narrow candidate pool
// - **Semantic Matching Engine**: BERT + Sentence-BERT embeddings with FAISS for precise expertise alignment
// - **Ranking Model**: Random Forest-based scoring for relevance and suitability
// - **Optimization Engine**: Linear Programming (PuLP) to enforce diversity, domain coverage, and panel constraints

// 🛠️ Tech Stack
// Python · BERT · Sentence-BERT · FAISS · Scikit-learn · PuLP · SQL

// 💡 Outcome
// Replaced a fully manual, time-intensive selection workflow with a fast, explainable, and mathematically optimized AI system, enabling data-driven decision-making at a national scale.
// `.trim(),
//     githubLink: "",
//     tags: ["GenAI", "BERT", "FAISS", "Optimization", "Python"]
//   },
//   {
//     slug: "ai-governance-os",
//     title: "AI Governance OS",
//     image: "",
//     description: `
// An AI-powered operating system designed for the Joint Secretary’s Office (Ministry of Youth Affairs & Sports, Government of India) to transform fragmented, manual workflows into a structured, intelligent, and audit-ready system.

// ⚡ Key Impact
// - Achieved 95% task capture from previously unstructured WhatsApp/verbal workflows
// - Enabled "Zero Browser" experience via automated WhatsApp briefings for senior leadership
// - Reduced task leakage through intelligent reminders and escalation pipelines

// 🧠 Core Systems
// - **AI Task Capture Agent**: WhatsApp-based interface for real-time task logging, updates, and queries
// - **Active Reminder Engine**: Multi-level escalation system with automated follow-ups and DO letter drafting
// - **People Intelligence Layer**: RACI-based workload tracking and heatmaps to prevent bottlenecks
// - **Document Automation**: Generation of official documents (OMs, DO letters, PQ replies) with .docx export
// - **Institutional Memory Engine**: Vector-powered policy Q&A for instant retrieval of departmental knowledge

// 🛠️ Tech Stack
// Claude Sonnet · Supabase (pg_cron, Edge Functions) · LangGraph · Node.js · WhatsApp API

// 💡 Outcome
// Transformed a manual administrative environment into an AI-assisted governance system with real-time visibility, accountability, and decision support.
// `.trim(),
//     githubLink: "",
//     tags: ["Claude-Sonnet", "Supabase", "LangGraph", "WhatsApp-Bot", "Node.js"]
//   },
//   {
//     slug: "advanced-agentic-ai",
//     title: "Advanced Multi-Agent System",
//     image: "",
//     description: `
// A sophisticated multi-agent orchestration system building complex reasoning capabilities into autonomous agents.

// 🛠️ Technologies & Methodology
// - LangGraph DAG-based pipelines with tool-calling agents.
// - Memory management and state machines for multi-step reasoning tasks.
// - Implemented agent-to-agent handoffs and conditional routing.
// - Human-in-the-loop checkpoints for critical reasoning steps.
// - Exposed as a high-performance REST API via FastAPI.

// 💡 Key Impact
// - Demonstrates advanced mastery of agentic AI patterns and orchestration.
// - Robust state management for long-running reasoning tasks.
//     `.trim(),
//     githubLink: "https://github.com/Pratikkumar201",
//     tags: ["LangGraph", "Multi-Agent", "FastAPI", "Python"]
//   },
//   {
//     slug: "langchain-rag-assistant",
//     title: "Enterprise RAG Assistant",
//     image: "",
//     description: `
// An enterprise-grade RAG pipeline designed for context-aware, multi-turn institutional knowledge retrieval.

// 🛠️ Technologies & Methodology
// - Full pipeline: Document ingestion -> Chunking -> Embedding (Sentence-BERT) -> pgVector storage.
// - Semantic retrieval and LLM response generation with conversation memory chains.
// - Integration of web search tools and prompt engineering for factual accuracy.
// - Evaluated using LLM evaluation metrics to control hallucinations.

// 💡 Key Impact
// - Achieves high accuracy in multi-turn Q&A scenarios.
// - Demonstrates a production-ready approach to RAG evaluation and monitoring.
//     `.trim(),
//     githubLink: "https://github.com/Pratikkumar201",
//     tags: ["RAG", "LLM", "FAISS", "Python", "LangChain"]
//   },
//   {
//     slug: "bhu-digital-media-platform",
//     title: "BHU News Platform",
//     image: "/News_website.png",
//     description: `
// A live, centralized platform built for Banaras Hindu University, powering the official news, achievements, initiatives, and institutional updates in one place.

// ⚡ Key Impact
// - Independently built and deployed a live production platform serving thousands of users
// - Consolidated scattered university updates into a single, structured, and accessible system
// - Reduced page load time by ~40% using SSR and Redis caching

// 🧠 Core System
// - **Frontend Architecture**: High-performance UI built with Next.js, React, and Tailwind CSS
// - **Content Management Layer**: Strapi headless CMS with PostgreSQL for structured, dynamic content
// - **Performance Optimization**: Server-Side Rendering (SSR) and Redis caching for speed and SEO
// - **Scalable Deployment**: Designed to support multiple institutional portals under a unified system

// 🛠️ Tech Stack
// Next.js · React · Tailwind CSS · Strapi · PostgreSQL · Redis

// 💡 Outcome
// Created a single source of truth for university-wide communication, improving accessibility, transparency, and digital outreach.
// `.trim(),
//     liveLink: "https://news.bhu.ac.in",
//     githubLink: "https://github.com/Pratikkumar201",
//     tags: ["Next.js", "Strapi", "Redis", "FullStack"]
//   },
//   {
//     slug: "hindi-speech-sentiment",
//     title: "Hindi Speech Sentiment Analyzer",
//     image: "/politics-speech-analyzer.png",
//     description: `
// Advanced NLP tool designed to process and analyze political speeches in Hindi, extracting sentiment and topic clusters.

// 🛠️ Technologies & Methodology
// - TF-IDF vectorization and text clustering for topic discovery.
// - Sentiment analysis using Python, Pandas, and spaCy.
// - Interactive dashboard built with Streamlit for data visualization.

// 💡 Key Impact
// - 70% reduction in manual speech analysis time.
// - Delivers actionable insights into public opinion trends via automated sentiment tracking.
//     `.trim(),
//     githubLink: "https://github.com/Pratikkumar201",
//     tags: ["NLP", "Python", "SentimentAnalysis", "Streamlit"]
//   },
//   {
//     slug: "personal-portfolio",
//     title: "AI Engineer Portfolio",
//     image: "/portfolio.png",
//     description: `
// A high-end, interactive, and visually striking portfolio website designed to showcase professional AI and software engineering expertise.

// ⚡ Key Impact
// - Built a premium, state-of-the-art interface with dynamic animations and responsive design
// - Integrated real-time visitor tracking and an automated contact system
// - Optimized for performance and SEO, achieving fast load times and high visibility

// 🧠 Core Features
// - **Dynamic Project Showcase**: Interactive grid with detailed project views and tech stack tags
// - **Visitor Analytics**: Custom tracking system using MongoDB and Redis for real-time insights
// - **Modern Tech Stack**: Leveraging Next.js 14, React, and Tailwind CSS for a seamless UX
// - **Robust Communication**: Contact form integrated with Resend API for reliable email delivery

// 🛠️ Tech Stack
// Next.js · React · Tailwind CSS · MongoDB · Redis · Resend · Framer Motion

// 💡 Outcome
// Successfully created a professional digital identity that effectively communicates technical proficiency and creative design capabilities.
// `.trim(),
//     githubLink: "https://github.com/Pratikkumar201/portfolio",
//     tags: ["Next.js", "React", "MongoDB", "Redis", "Tailwind"]
//   },
//   {
//     slug: "chaukhat-blog",
//     title: "Chaukhat - Hindi Blog",
//     image: "/chaukhat1.png",
//     description: `
// A professional Hindi blog platform developed for a client, focusing on politics, commentary, travel, and personal reflections.

// ⚡ Key Features
// - **Rich Content Management**: Built to handle diverse categories like Indian Politics, Travel Stories, and Life Insights
// - **Bilingual Interface**: Optimized for Hindi (Devanagari) script with modern typography
// - **Interactive Gallery**: Dedicated photo gallery section to showcase travel and event photography
// - **Responsive Design**: Seamless reading experience across mobile, tablet, and desktop devices

// 🛠️ Tech Stack
// Next.js · React · Tailwind CSS · Strapi · PostgreSQL

// 💡 Outcome
// Provided the client with a sophisticated, easy-to-manage digital space to share their voice and reach a wider Hindi-speaking audience.
// `.trim(),
//     liveLink: "https://www.chaukhat.co.in/",
//     githubLink: "https://github.com/Pratikkumar201",
//     tags: ["Next.js", "Strapi", "Hindi-Blog", "FullStack"]
//   }
// ];

// export default projects;




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
An AI-powered operating system designed for the Joint Secretary's Office (Ministry of Youth Affairs & Sports, Government of India) to transform fragmented, manual workflows into a structured, intelligent, and audit-ready system.

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
    slug: "agentiq-advanced-agentic-ai",
    title: "AgentIQ — Advanced Agentic AI System",
    image: "/AgentIQ.png",
    description: `
A production-grade multi-agent orchestration system with complex autonomous reasoning capabilities, built with LangGraph and tool-calling agents.

⚡ Key Impact
- Engineered 6 specialized agents (Researcher, Coder, Analyzer, Writer, Critic, Supervisor) enabling autonomous decomposition and execution of complex multi-step reasoning tasks
- Built hybrid retrieval pipeline (FAISS semantic + BM25 keyword fusion) with confidence thresholding for hallucination mitigation
- Deployed FastAPI REST API with SSE streaming and full pipeline observability

🧠 Core System
- **LangGraph DAG Pipelines**: State machines with conditional routing and agent-to-agent handoffs
- **Human-in-the-Loop**: Interrupt mechanism for critical reasoning checkpoints
- **Tool-Calling Agents**: Web search, Wikipedia, and Python execution via LangChain AgentExecutor
- **Hybrid Retrieval**: FAISS semantic + BM25 keyword fusion with confidence thresholding
- **Observability**: Structured execution logs and LangGraph MemorySaver checkpointing

🛠️ Tech Stack
Python · LangGraph · LangChain · FAISS · BM25 · FastAPI · SSE

💡 Outcome
Demonstrates advanced mastery of agentic AI patterns and orchestration with robust state management for long-running reasoning tasks.
`.trim(),
    githubLink: "https://github.com/Pratikkumar201/AgentIQ",
    tags: ["LangGraph", "Multi-Agent", "FastAPI", "Python"]
  },
  {
    slug: "christianity-ai",
    title: "ChristianityAI — Scripture Assistant",
    image: "/ChristianityAI.png",
    description: `
A production-grade multi-agent AI assistant for scripture-grounded Q&A, theology discussions, content generation, and conversational memory — built with safety and accuracy at its core.

⚡ Key Impact
- Designed agentic architecture with Safety, Router, Retrieval, and Citation Validator agents
- Implemented robust hallucination prevention including fake verse detection and citation verification
- Enabled reliable AI-assisted theological interactions through confidence-based retrieval thresholds

🧠 Core System
- **Multi-Agent Architecture**: Safety, Router, Retrieval, and Citation Validator agents with intelligent task routing
- **Hybrid Retrieval**: FAISS semantic + BM25 keyword search with Sentence Transformers
- **Hallucination Prevention**: Confidence-based thresholds, fake verse detection, and citation verification
- **Safety & Moderation**: Prompt-injection defense and safety moderation pipeline
- **Conversational Memory**: Multi-turn dialogue with source-grounded response generation

🛠️ Tech Stack
FastAPI · Next.js · Groq LLMs · FAISS · BM25 · Sentence Transformers · Python

💡 Outcome
A trustworthy, source-grounded AI assistant that handles sensitive theological content with accuracy, safety, and explainable citations.
`.trim(),
    githubLink: "https://github.com/Pratikkumar201/Christianity-AI",
    tags: ["Multi-Agent", "RAG", "FAISS", "FastAPI", "Groq"]
  },
  {
    slug: "docmind-enterprise-rag",
    title: "DocMind — Enterprise RAG Assistant",
    image: "/DocMind.png",
    description: `
An enterprise-grade RAG pipeline designed for context-aware, multi-turn institutional knowledge retrieval with hallucination mitigation and full observability.

⚡ Key Impact
- Implemented hybrid retrieval (FAISS semantic + BM25 keyword) for high accuracy across multi-turn Q&A scenarios
- Built confidence thresholding and citation-based responses to control hallucinations
- Deployed production-ready FastAPI inference server with session management and pipeline observability

🧠 Core System
- **Full RAG Pipeline**: Document ingestion → Chunking → Embedding (Sentence-BERT) → FAISS/BM25 storage
- **Hybrid Retrieval**: Semantic + keyword fusion for robust document search
- **Conversational Memory**: Multi-turn dialogue with accurate context retention
- **Hallucination Mitigation**: Confidence thresholding, citation verification, and LLM evaluation metrics
- **Production Deployment**: FastAPI server with session management and observability

🛠️ Tech Stack
LangChain · FastAPI · FAISS · BM25 · Groq LLMs · Sentence-BERT · Python

💡 Outcome
A production-ready RAG system demonstrating enterprise-grade document retrieval with robust evaluation and monitoring.
`.trim(),
    githubLink: "https://github.com/Pratikkumar201/DocMind-Enterprise-RAG-Assistant",
    tags: ["RAG", "LLM", "FAISS", "Python", "LangChain"]
  },
  {
    slug: "llm-finetuning-evaluation",
    title: "LLM Fine-Tuning & Evaluation Platform",
    image: "",
    description: `
An end-to-end platform for fine-tuning open-source LLMs with parameter-efficient techniques and rigorous evaluation pipelines to benchmark domain-specific performance.

⚡ Key Impact
- Fine-tuned open-source LLMs (TinyLlama, Phi, Qwen) using LoRA and PEFT on instruction tuning datasets
- Built comprehensive evaluation pipelines using ROUGE, BLEU, and BERTScore to benchmark against baseline models
- Applied 4-bit/8-bit quantization to optimize deployment efficiency and reduce inference latency

🧠 Core System
- **Fine-Tuning Pipeline**: LoRA/QLoRA + PEFT with Hugging Face Transformers for parameter-efficient training
- **Evaluation Framework**: ROUGE, BLEU, and BERTScore benchmarking against baseline models
- **Quantization**: 4-bit/8-bit techniques for memory and latency optimization
- **Inference Service**: FastAPI-based deployment with optimized model serving
- **Training Infrastructure**: PyTorch-based end-to-end training and evaluation workflows

🛠️ Tech Stack
Python · PyTorch · Hugging Face Transformers · LoRA · PEFT · FastAPI · ROUGE · BERTScore

💡 Outcome
Demonstrates hands-on mastery of the full LLM lifecycle — from efficient fine-tuning to rigorous evaluation and production-ready quantized deployment.
`.trim(),
    githubLink: "https://github.com/Pratikkumar201",
    tags: ["LLM", "Fine-Tuning", "LoRA", "PEFT", "PyTorch"]
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