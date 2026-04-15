// app/data/projects.js
const projects = [
  {
    slug: "ai-powered-expert-selection",
    title: "AI Expert Selection System",
    image: "/project-meity-ai.jpg", // Placeholder or existing
    description: `
Built for NeGD, MeitY (Govt. of India). Slashed panel generation time from hours to <5 minutes.

🛠️ Technologies Used
BERT, Sentence-BERT, FAISS Vector Search, Linear Programming, Python, SQL.

💡 Key Impact
- 80% reduction in manual shortlisting effort for central recruitment.
- Multi-stage pipeline: SQL Filtering -> Semantic Retrieval -> Random Forest Ranking -> Diversity Constraint Optimization.
    `.trim(),
    githubLink: "",
    tags: ["GenAI", "BERT", "FAISS", "Python"]
  },
  {
    slug: "ai-office-management-system",
    title: "AI Office Digitization Platform",
    image: "/project-office-ai.jpg",
    description: `
LLM-powered automation for Ministry of Youth Affairs & Sports (Govt. of India). Boosted task capture to 95%.

🛠️ Technologies Used
LangChain, LangGraph, WhatsApp Bot API, Claude API, NestJS, pgVector, AWS (EC2/S3/RDS), Docker.

💡 Key Impact
- Agentic workflows for natural language task parsing.
- 7-level automated reminder cascade via Supabase Edge Functions.
- Secure API design following OWASP standards.
    `.trim(),
    githubLink: "",
    tags: ["LangChain", "LangGraph", "Claude", "NestJS"]
  },
  {
    slug: "advanced-agentic-ai",
    title: "Advanced Multi-Agent System",
    image: "/project-agentic.jpg",
    description: `
Personal project building a complex multi-agent orchestration system using LangGraph.

🛠️ Technologies Used
LangGraph, DAG-based pipelines, Tool-calling Agents, State Machines, FastAPI.

💡 Key Impact
- Implemented agent-to-agent handoffs and human-in-the-loop checkpoints.
- State-managed reasoning tasks exposed as REST API.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/agentic-ai",
    tags: ["LangGraph", "Multi-Agent", "FastAPI"]
  },
  {
    slug: "langchain-rag-assistant",
    title: "Enterprise RAG Assistant",
    image: "/project-rag.jpg",
    description: `
Designed an enterprise-grade RAG pipeline for context-aware multi-turn QA.

🛠️ Technologies Used
LangChain, Sentence-BERT, pgVector, Python, Prompt Engineering.

💡 Key Impact
- Integrated web search tools and conversation memory chains.
- Evaluated with LLM evaluation metrics for accuracy and hallucination control.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/rag-assistant",
    tags: ["RAG", "LLM", "FAISS", "Python"]
  },
  {
    slug: "bhu-news-portal",
    title: "BHU Public Relations Portal",
    image: "/BHU-news_site.png",
    description: `
Official digital media portal for Banaras Hindu University.

🛠️ Technologies Used
Next.js, React, Tailwind CSS, Strapi, PostgreSQL, Redis, GraphQL.

💡 Key Impact
- 40% improvement in page load time via SSR and Redis caching.
- Dynamic content management for institutional news and events.
    `.trim(),
    liveLink: "https://news.bhu.ac.in",
    githubLink: "https://github.com/Pratikkumar201/bhu-news",
    tags: ["Next.js", "Strapi", "Redis", "FullStack"]
  },
  {
    slug: "hindi-speech-sentiment",
    title: "Hindi Speech Sentiment Analyzer",
    image: "/politics-speech-analyzer.png",
    description: `
NLP tool to process political speeches and extract sentiment/topic insights.

🛠️ Technologies Used
Python, Scikit-learn, Pandas, Streamlit, TF-IDF.

💡 Key Impact
- 70% reduction in manual speech analysis time.
- Automated clustering of topics and speaker sentiment trends.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/speech-analyzer",
    tags: ["NLP", "Python", "SentimentAnalysis"]
  }
];

export default projects;

