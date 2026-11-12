"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

type Filter = "All" | string;

export function ProjectsGrid() {
  const technologies = useMemo(
    () => [...new Set(projects.flatMap((project) => project.tech))],
    [],
  );
  const filters = ["All", "Developed", "Completed", ...technologies];
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.status === activeFilter || project.tech.includes(activeFilter);
  });

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by status or technology"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`filter-chip ${activeFilter === filter ? "filter-chip-active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
