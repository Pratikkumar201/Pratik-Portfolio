'use client';
import Link from 'next/link';
import Image from 'next/image';
import projectsData from '../data/projects';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-accent-cyan font-mono tracking-widest text-sm uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              A selection of high-impact AI systems, RAG pipelines, and full-stack applications 
              delivering measurable efficiency gains and robust performance.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://github.com/Pratikkumar201" 
              target="_blank"
              className="flex items-center gap-2 text-sm font-bold text-accent-cyan hover:underline group"
            >
              VIEW ALL ON GITHUB <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.slug} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-3xl overflow-hidden cyber-border transition-all duration-500 bg-white/[0.02] flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                {/* Status Badge */}
                {index < 2 && (
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border-accent-cyan/20 text-accent-cyan shadow-xl">
                    Production
                  </div>
                )}
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/10 group-hover:border-accent-cyan/30 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description.split('\n')[0]}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="text-sm font-bold flex items-center gap-2 hover:text-accent-cyan transition-colors"
                  >
                    Details <ArrowUpRight size={14} />
                  </Link>
                  
                  <div className="flex items-center gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" className="text-gray-400 hover:text-accent-cyan transition-colors hover:scale-110">
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" className="text-gray-400 hover:text-accent-cyan transition-colors hover:scale-110">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


