"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3"
      >
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-tight text-white focus-visible:outline"
          aria-label="Anto Jeries A home"
        >
          <span className="text-electric">&lt;</span>AJ<span className="text-electric"> /&gt;</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="button-small hidden md:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 transition hover:bg-white/10 focus-visible:outline md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
