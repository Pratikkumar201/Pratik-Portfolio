'use client';
import { Bot, Code, Database, Globe, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = [
    {
      title: "GenAI & LLM",
      icon: <Bot size={20} className="text-accent-cyan" />,
      skills: ["LangChain", "LangGraph", "RAG Pipelines", "Agentic AI", "Claude/OpenAI API", "HuggingFace", "MCP"]
    },
    {
      title: "AI/ML Frameworks",
      icon: <Layers size={20} className="text-accent-blue" />,
      skills: ["Sentence-BERT", "FAISS", "pgVector", "Scikit-Learn", "spaCy", "Pandas", "Text Clustering"]
    },
    {
      title: "Backend & APIs",
      icon: <Code size={20} className="text-accent-cyan" />,
      skills: ["Python", "FastAPI", "NestJS", "Node.js", "Django", "Async Patterns", "REST APIs"]
    },
    {
      title: "Cloud & Databases",
      icon: <Database size={20} className="text-accent-blue" />,
      skills: ["AWS (EC2/S3/Bedrock)", "PostgreSQL", "Redis", "MySQL", "Supabase", "Docker", "CI/CD"]
    },
    {
      title: "Frontend & Design",
      icon: <Globe size={20} className="text-accent-cyan" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion", "Responsive Design"]
    },
    {
      title: "Tools & Security",
      icon: <ShieldCheck size={20} className="text-accent-blue" />,
      skills: ["JWT", "OWASP API Security", "Git", "Interakt (WhatsApp Bot)", "Jira", "Power BI"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-cyan font-mono tracking-widest text-sm uppercase mb-3 text-center"
          >
            Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Technical <span className="text-gradient">Toolkit</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            A comprehensive set of tools and technologies I use to build robust, intelligent applications.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-3xl cyber-border hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent-cyan/10 transition-colors">
                  {group.icon}
                </div>
                <h4 className="text-xl font-bold group-hover:text-accent-cyan transition-colors">{group.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

