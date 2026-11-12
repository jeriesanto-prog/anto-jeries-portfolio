import { ArrowUpRight, Github, Radio } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div
        className={`project-art project-art-${project.accent} relative flex min-h-48 items-center justify-center overflow-hidden`}
        aria-label={`${project.title} project thumbnail`}
        role="img"
      >
        <div className="project-art-grid absolute inset-0" aria-hidden="true" />
        <div className="project-art-orb" aria-hidden="true" />
        <span className="relative z-10 font-mono text-5xl font-bold tracking-[-0.08em] text-white/90">
          {project.initials}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/45 px-2.5 py-1 font-mono text-[10px] text-slate-200 backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <Radio size={16} className="mt-1 shrink-0 text-electric/70" aria-hidden="true" />
        </div>
        <p className="text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="tech-badge">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label={`Open ${project.title} live demo`}
            >
              Live Demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {!project.githubUrl && !project.demoUrl && (
            <p className="text-xs text-slate-500">Project links coming soon</p>
          )}
        </div>
      </div>
    </article>
  );
}
