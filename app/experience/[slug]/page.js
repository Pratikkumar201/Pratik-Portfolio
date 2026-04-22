// app/experience/[slug]/page.js
import experiences from '@/data/experiences';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Calendar, CheckCircle2, Cpu } from 'lucide-react';

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-gradient mb-4">Experience not found</h1>
        <Link href="/#experience" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft size={20} /> Back to About
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      {/* Decorative background blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent-blue/5 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <Link href="/#experience" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Experience
        </Link>

        <div className="space-y-12">
          <header className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter">{experience.title}</h1>
                <p className="text-2xl text-accent-cyan font-medium">{experience.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-mono text-sm bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                <Calendar size={18} /> {experience.period}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.skills?.map(skill => (
                <span key={skill} className="text-[10px] font-bold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                  {skill}
                </span>
              ))}
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-12 pt-12 border-t border-white/5">
            <div className="lg:col-span-2 space-y-12">
              {experience.projects ? (
                experience.projects.map((project, pIdx) => (
                  <section key={pIdx} className="space-y-6">
                    <h3 className="text-2xl font-bold text-accent-cyan flex items-center gap-3">
                      <CheckCircle2 className="text-accent-cyan" size={24} /> {project.name}
                    </h3>
                    <ul className="space-y-4 ml-2">
                      {project.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-4 group">
                          <div className="mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full group-hover:scale-150 transition-transform" />
                          </div>
                          <p className="text-gray-300 leading-relaxed text-lg italic">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tools?.map(tool => (
                        <span key={tool} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/10">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                <section>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Briefcase className="text-accent-cyan" size={24} /> Key Responsibilities & Work
                  </h3>
                  <ul className="space-y-6">
                    {experience.workDetails?.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <div className="mt-1.5">
                          <CheckCircle2 size={18} className="text-accent-cyan group-hover:scale-125 transition-transform" />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="space-y-8">
              <div className="glass p-8 rounded-3xl cyber-border space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Cpu size={20} className="text-accent-cyan" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills?.map(skill => (
                    <span key={skill} className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl cyber-border">
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  "{experience.description}"
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}
