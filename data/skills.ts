export type SkillIcon =
  | "code"
  | "braces"
  | "terminal"
  | "globe"
  | "workflow"
  | "brain";

export interface Skill {
  name: string;
  description: string;
  icon: SkillIcon;
  category: "Language" | "Web" | "Core";
}

export const skills: Skill[] = [
  {
    name: "C++",
    description: "Building a strong foundation in programming and computational thinking.",
    icon: "code",
    category: "Language",
  },
  {
    name: "C#",
    description: "Exploring a versatile language for practical application development.",
    icon: "braces",
    category: "Language",
  },
  {
    name: "Python",
    description: "Writing approachable scripts and experimenting with AI concepts.",
    icon: "terminal",
    category: "Language",
  },
  {
    name: "HTML",
    description: "Structuring accessible, meaningful content for the web.",
    icon: "globe",
    category: "Web",
  },
  {
    name: "JavaScript",
    description: "Bringing responsive, interactive experiences to life.",
    icon: "workflow",
    category: "Web",
  },
  {
    name: "Problem solving",
    description: "Breaking challenges down and finding thoughtful ways forward.",
    icon: "brain",
    category: "Core",
  },
];
