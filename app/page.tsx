import { ArrowUpRight, BookOpen, Check, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ContactForm } from "@/components/ContactForm";
import { AchievementCard } from "@/components/AchievementCard";
import { certificates } from "@/data/certificates";
import { currentlyLearning, education } from "@/data/education";
import { skills } from "@/data/skills";

const strengths = [
  {
    title: "Fast Learner",
    description: "I enjoy picking up new tools and turning what I learn into something practical.",
    icon: "↗",
  },
  {
    title: "Team Player",
    description: "I value clear communication, shared ideas, and making progress together.",
    icon: "◎",
  },
  {
    title: "Challenge Seeker",
    description: "New problems are a chance to think differently and discover a better approach.",
    icon: "✳",
  },
  {
    title: "Growth Mindset",
    description: "Every project and every mistake is another opportunity to improve.",
    icon: "⌁",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="A LITTLE INTRODUCTION"
          title="More than just code."
          description="I’m a first-year Computer Science student who’s curious about how technology can turn good ideas into useful things."
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-200">
                <Sparkles size={21} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-white">Curious by nature.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I’m Anto Jeries A, a first-year B.Tech CSE student at Joy University. I’m a fast
                learner who enjoys exploring new ideas, adapting to challenges, and communicating
                openly. Right now, I’m building my fundamentals one project at a time—and staying
                curious about what I can create next.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <article key={strength.title} className="glass-card rounded-2xl p-5">
                  <span className="font-mono text-2xl text-electric" aria-hidden="true">
                    {strength.icon}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="TOOLS IN PROGRESS"
          title="Learning by building."
          description="A growing toolkit—grounded in fundamentals, strengthened through practice."
          className="section-tint"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="SELECTED WORK"
          title="Small steps. Real projects."
          description="A couple of things I’ve built while learning. The list is open-ended—more ideas are on the way."
        >
          <ProjectsGrid />
        </Section>

        <Section
          id="achievements"
          eyebrow="CERTIFICATES & MILESTONES"
          title="Learning, put into practice."
          description="Verified participation and hands-on experience from recent learning opportunities."
          className="section-tint"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {certificates.map((certificate) => (
              <AchievementCard key={certificate.title} certificate={certificate} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="THE LEARNING JOURNEY"
          title="Curiosity, in progress."
          description="Building the foundations for a future in computer science—one class and one idea at a time."
          className="section-tint"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <article className="glass-panel flex items-start gap-5 rounded-2xl p-6 sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-electric/20 bg-electric/[0.07] text-electric">
                <BookOpen size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">CURRENTLY STUDYING</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {education.year} <span className="px-1 text-slate-600">·</span>{" "}
                  {education.institution}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  In progress
                </span>
              </div>
            </article>
            <article className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Currently learning</h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {currentlyLearning.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <Check size={16} className="mt-1 shrink-0 text-electric" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="HAVE SOMETHING IN MIND?"
          title="Let’s make a connection."
          description="Have an idea, an opportunity, or just want to say hello? I’d love to hear from you."
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <aside className="flex flex-col gap-5">
              <a href="mailto:jeriesanto@gmail.com" className="contact-link-card">
                <span className="contact-icon">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Email me</span>
                  <span className="mt-1 block text-sm font-medium text-white">
                    jeriesanto@gmail.com
                  </span>
                </span>
                <ArrowUpRight size={16} className="ml-auto text-slate-500" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/jeriesanto-prog"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <span className="contact-icon">
                  <Github size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Find me on GitHub</span>
                  <span className="mt-1 block text-sm font-medium text-white">jeriesanto-prog</span>
                </span>
                <ArrowUpRight size={16} className="ml-auto text-slate-500" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/anto-jeries-90593941b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <span className="contact-icon">
                  <Linkedin size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Connect on LinkedIn</span>
                  <span className="mt-1 block text-sm font-medium text-white">Anto Jeries A</span>
                </span>
                <ArrowUpRight size={16} className="ml-auto text-slate-500" aria-hidden="true" />
              </a>
            </aside>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="border-t border-white/[0.07] px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            <span className="font-medium text-slate-300">Anto Jeries A</span>{" "}
            <span className="px-1 text-slate-700">|</span> Designed with curiosity. Built with
            passion.
          </p>
          <a href="#home" className="back-top">
            Back to top <ArrowUpRight size={14} className="-rotate-45" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
