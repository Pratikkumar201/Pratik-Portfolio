'use client';
import { Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      title: "AI/ML Engineer (Intern)",
      company: "National e-Governance Division (NeGD), MeitY",
      period: "Feb 2026 – Present",
      description: "Building production-grade GenAI apps and RAG pipelines for senior government leadership. Processing 17,000+ records with BERT & FAISS.",
      icon: <Briefcase className="text-accent-cyan" size={20} />
    },
    {
      title: "Software Developer",
      company: "Information & PR Office, BHU",
      period: "Mar 2025 – Jan 2026",
      description: "Optimized institutional websites using Next.js & Strapi. Built NLP sentiment pipelines for public opinion tracking.",
      icon: <Briefcase className="text-accent-blue" size={20} />
    },
    {
      title: "Data Annotator (LLM)",
      company: "Turing",
      period: "Jun 2025 – Aug 2025",
      description: "Annotated large-scale multimodal datasets for LLM training and fine-tuning at production scale.",
      icon: <Award className="text-accent-cyan" size={20} />
    },
    {
      title: "Software Developer",
      company: "Revtrance Softwares LLP",
      period: "Sep 2024 – Dec 2024",
      description: "Developed full-stack features for SaaS products, optimizing APIs and database performance.",
      icon: <Briefcase className="text-accent-blue" size={20} />
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Banaras Hindu University",
      period: "2022 – 2024",
      score: "CGPA: 8.03 / 10",
      icon: <GraduationCap className="text-accent-cyan" size={20} />
    },
    {
      degree: "B.Sc. Mathematics",
      school: "Lalit Narayan Mithila University",
      period: "2018 – 2022",
      score: "75.10%",
      icon: <GraduationCap className="text-accent-blue" size={20} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          
          {/* Bio & Education */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-accent-cyan font-mono tracking-widest text-sm uppercase mb-3 text-center md:text-left">The Journey</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-center md:text-left">
                About <span className="text-gradient">Me</span>
              </h3>
              <p className="mt-8 text-gray-400 leading-relaxed text-lg text-center md:text-left">
                I am a Full Stack AI Engineer with a passion for building cognitive systems that solve real-world problems. 
                My expertise lies at the intersection of modern web architectures and advanced LLM orchestrations. 
                Currently, I'm pioneering AI automation for the Government of India, delivering measurable efficiency gains in high-stakes environments.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center gap-3">
                <GraduationCap className="text-accent-cyan" /> Education
              </motion.h4>
              <div className="space-y-4">
                {education.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl cyber-border group transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-lg group-hover:text-accent-cyan transition-colors">{item.degree}</h5>
                      <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-md">{item.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.school}</p>
                    <p className="text-accent-blue text-sm font-bold mt-2">{item.score}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div id="experience" className="space-y-12">
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center gap-3">
              <Briefcase className="text-accent-cyan" /> Experience
            </motion.h4>
            
            <div className="relative border-l-2 border-white/5 ml-4 pl-8 space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-0 glass w-6 h-6 rounded-full border-2 border-accent-cyan flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-glow" />
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="glass p-8 rounded-3xl cyber-border hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                      <h5 className="text-xl font-bold text-white tracking-tight">{exp.title}</h5>
                      <span className="flex items-center gap-1 text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                        <Calendar size={12} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-accent-cyan font-medium text-sm mb-4">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}


