export type ProjectStatus = "Developed" | "Completed";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  accent: "cyan" | "violet";
  initials: string;
}

export const projects: Project[] = [
  {
    title: "STARK AI Agent",
    description:
      "A Python-based personal AI assistant concept designed to make everyday interactions feel more natural. Built as a space to explore voice-driven workflows, helpful responses, and practical automation.",
    tech: ["Python"],
    status: "Developed",
    accent: "cyan",
    initials: "SA",
  },
  {
    title: "Student CGPA Calculator",
    description:
      "A student-friendly calculator for entering subject grades and credit values to work out GPA and CGPA. A straightforward way to make academic progress easier to understand.",
    tech: ["Python"],
    status: "Completed",
    accent: "violet",
    initials: "CG",
  },
];
