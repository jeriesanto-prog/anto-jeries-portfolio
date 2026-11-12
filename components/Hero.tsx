"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const phrases = [
  "Building Ideas Into Reality.",
  "Learning Today, Innovating Tomorrow.",
  "Adapting Fast. Thinking Different. Building Better.",
  "Always Ready for the Next Challenge.",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let position = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        position += 1;
        setTypedText(phrase.slice(0, position));
        if (position === phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1900);
          return;
        }
        timeout = setTimeout(tick, 48);
        return;
      }

      position -= 1;
      setTypedText(phrase.slice(0, position));
      if (position === 0) {
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }
      timeout = setTimeout(tick, 22);
    };

    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, [phraseIndex]);

  return (
    <section id="home" className="hero-wrap">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
      <div className="hero-orb hero-orb-purple" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:min-h-[760px] md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.06] px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-electric">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
            HELLO, WORLD! I&apos;M
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Anto Jeries <span className="gradient-text">A</span>
          </h1>
          <p className="mt-5 text-base font-medium text-slate-400 sm:text-lg">
            First-Year B.Tech CSE Student <span className="text-electric/70">·</span>{" "}
            Aspiring Software Developer <span className="text-electric/70">·</span>{" "}
            Lifelong Learner
          </p>
          <div className="mt-8 min-h-16 font-mono text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
            <span>{typedText}</span>
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
            <span className="sr-only" aria-live="polite">
              {phrases[phraseIndex]}
            </span>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs text-slate-500">
            <span className="h-px w-9 bg-slate-700" />
            Scroll to explore
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
          className="terminal-float relative z-10 mx-auto w-full max-w-[500px]"
        >
          <div className="terminal-glow" aria-hidden="true" />
          <div className="glass-panel terminal-window overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2" aria-label="Terminal window">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                <Terminal size={13} /> anto@portfolio
              </div>
            </div>
            <div className="space-y-4 p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
              <p className="text-slate-500">{"// a little about me"}</p>
              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-electric">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                name: <span className="text-emerald-300">&quot;Anto Jeries A&quot;</span>,
              </p>
              <p className="pl-5">
                role: <span className="text-emerald-300">&quot;Student &amp; Builder&quot;</span>,
              </p>
              <p className="pl-5">
                mindset: <span className="text-emerald-300">&quot;Always curious&quot;</span>,
              </p>
              <p className="pl-5">
                learning: [<span className="text-amber-200">&quot;code&quot;</span>,{" "}
                <span className="text-amber-200">&quot;create&quot;</span>,{" "}
                <span className="text-amber-200">&quot;repeat&quot;</span>],
              </p>
              <p>{"};"}</p>
              <p className="pt-2 text-slate-500">
                <span className="text-electric">$</span> npm run build-future
              </p>
              <p className="text-emerald-300">
                <span className="mr-2">✓</span> Ready to build something great.
                <span className="typing-cursor ml-1 text-electric" aria-hidden="true">
                  ▋
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-5 py-3 font-mono text-[10px] text-slate-500">
              <span>UTF-8</span>
              <span>python · javascript · cpp</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
