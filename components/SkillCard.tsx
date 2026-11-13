import {
  BrainCircuit,
  Braces,
  Camera,
  Code2,
  Globe2,
  Palette,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Skill, SkillIcon } from "@/data/skills";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  braces: Braces,
  terminal: Terminal,
  globe: Globe2,
  workflow: Workflow,
  brain: BrainCircuit,
  palette: Palette,
  camera: Camera,
};

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = icons[skill.icon];

  return (
    <article className="glass-card skill-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/25">
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-electric/15 bg-electric/[0.07] text-electric transition group-hover:bg-electric/10">
          <Icon size={20} aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
          {skill.category}
        </span>
      </div>
      <h3 className="text-base font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
    </article>
  );
}
