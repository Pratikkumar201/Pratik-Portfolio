'use client';
import { Cpu, Code2, Bot, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const expertises = [
    {
      title: "GenAI & LLM Systems",
      desc: "Architecting production-grade RAG pipelines, LangGraph agentic workflows, and high-scale semantic search systems.",
      icon: <Bot className="text-accent-cyan" size={32} />,
      tools: ["LangChain", "LangGraph", "pgVector", "LLM Eval"]
    },
    {
      title: "Full Stack Web Engineering",
      desc: "Building scalable microservices and responsive frontends using Next.js, FastAPI, and NestJS with high performance.",
      icon: <Code2 className="text-accent-blue" size={32} />,
      tools: ["Next.js", "FastAPI", "Strapi", "AWS"]
    },
    {
      title: "AI/ML Solutions",
      desc: "Custom NLP models, sentiment analysis pipelines, and text clustering for strategic data-driven insights.",
      icon: <Cpu className="text-accent-cyan" size={32} />,
      tools: ["BERT", "PyTorch", "Scikit-Learn", "NLP"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-cyan font-mono tracking-widest text-sm uppercase mb-3 text-center"
          >
            Specializations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            My <span className="text-gradient">Expertise</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            Bridging the gap between advanced artificial intelligence and production-ready software engineering.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {expertises.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group glass p-8 rounded-3xl cyber-border transition-all duration-500 flex flex-col items-start bg-white/[0.02]"
            >
              <div className="p-3 bg-white/5 rounded-2xl mb-6 group-hover:bg-accent-cyan/10 transition-colors">
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-accent-cyan transition-colors">
                {item.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-bold text-accent-blue bg-accent-blue/5 border border-accent-blue/20 px-2 py-1 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-2 font-bold text-sm tracking-widest">
            <Zap size={16} className="text-accent-cyan" /> PERFORMANCE DRIVEN
          </div>
          <div className="flex items-center gap-2 font-bold text-sm tracking-widest">
            <Bot size={16} className="text-accent-cyan" /> AI FIRST
          </div>
          <div className="flex items-center gap-2 font-bold text-sm tracking-widest">
            <Globe size={16} className="text-accent-cyan" /> GLOBAL SCALE
          </div>
        </motion.div>
      </div>
    </section>
  );
}


