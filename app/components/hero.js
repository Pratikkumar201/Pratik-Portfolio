'use client';
import Image from 'next/image';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setToastText(`${text} copied!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-28 pb-20 gap-16 overflow-hidden relative">
      {/* Background Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px] -z-10"
      />

      {showToast && (
        <motion.div
          initial={{ y: -50, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: -50, opacity: 0, x: '-50%' }}
          className="fixed top-24 left-1/2 glass px-6 py-3 rounded-2xl shadow-2xl z-[100] border-accent-cyan/30"
        >
          <p className="text-accent-cyan font-medium">{toastText}</p>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-8 text-center md:text-left"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            PRATIK <span className="text-gradient block md:inline">KUMAR</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-gray-300 max-w-2xl mx-auto md:mx-0 leading-tight">
            Full Stack <span className="text-white">AI Engineer</span> specializing in
            <span className="text-accent-cyan active-text transition-colors duration-500"> GenAI</span>,
            <span className="text-accent-blue"> LangChain</span> &
            <span className="text-white"> RAG Pipelines</span>.
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0 text-lg">
          Building production-grade LLM systems and agentic workflows at NeGD, MeitY (Govt. of India).
          Expert in processing high-scale data with semantic search and constraint optimization.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-accent-cyan text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-accent-cyan/20 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1lNgtMAv7GwAtUEJ9yQx04B7SmOVxgAqM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all active:scale-95"
          >
            Resume <ExternalLink size={18} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6 text-gray-400">
          <a href="https://github.com/Pratikkumar201" target="_blank" className="hover:text-accent-cyan transition-colors hover:scale-110 active:scale-90">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pratik-kumar-ba467425b/" target="_blank" className="hover:text-accent-cyan transition-colors hover:scale-110 active:scale-90">
            <Linkedin size={24} />
          </a>
          <div className="h-6 w-px bg-gray-800" />
          <div className="flex items-center gap-4 text-sm font-mono">
            <button onClick={() => handleCopy('pratikkumar.bhumca22@gmail.com')} className="hover:text-white transition-colors uppercase tracking-widest">
              EMAIL
            </button>
            <button onClick={() => handleCopy('+919199081805')} className="hover:text-white transition-colors uppercase tracking-widest">
              PHONE
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-2 border-white/10 glass shadow-2xl">
          <Image
            src="/pratik image.jpg"
            fill
            alt="Pratik Kumar"
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}



