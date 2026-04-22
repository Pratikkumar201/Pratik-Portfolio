// app/projects/[slug]/page.js
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-gradient mb-4">Project not found</h1>
        <p className="text-gray-400 mb-8">The project you are looking for does not exist or has been moved.</p>
        <Link href="/#projects" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      {/* Decorative background blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent-cyan/5 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags?.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                {project.title}
              </h1>
            </div>

            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass cyber-border">
              <Image 
                src={project.image || "/placeholder.jpg"} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-white/5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-500 uppercase">Role</span>
                <p className="font-medium">Lead Developer / AI Engineer</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-500 uppercase">Category</span>
                <p className="font-medium">{project.tags?.[0] || 'AI Solution'}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-gray-500 uppercase">Links</span>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="text-gray-400 hover:text-accent-cyan transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" className="text-gray-400 hover:text-accent-cyan transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Tag className="text-accent-cyan" size={24} /> Project Overview
              </h3>
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line space-y-4">
                {project.description}
              </div>
            </div>

            <div className="pt-12">
              <div className="flex gap-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" className="bg-accent-cyan text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-accent-cyan/20">
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" className="glass border-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all">
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
