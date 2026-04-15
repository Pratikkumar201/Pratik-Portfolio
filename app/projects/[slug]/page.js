// ✅ correct this path if needed
import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen p-10 bg-black text-white">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/#projects" className="text-cyan-400 underline mt-4 block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6" />
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>
        <div className="flex gap-4">
          {project.liveLink && (
            <a href={project.liveLink} className="bg-cyan-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-cyan-400" target="_blank">
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} className="bg-cyan-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-cyan-400" target="_blank">
              View Code
            </a>
          )}
        </div>
        <Link href="/#projects" className="mt-8 inline-block text-cyan-300 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
