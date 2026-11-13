import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import type { Certificate } from "@/data/certificates";

export function AchievementCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="glass-card achievement-card group overflow-hidden rounded-2xl">
      <a
        className="certificate-preview relative block aspect-[1.4] overflow-hidden bg-slate-950 focus-visible:outline"
        href={certificate.image}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${certificate.title} certificate image in a new tab`}
      >
        <Image
          src={certificate.image}
          alt={certificate.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition group-hover:border-electric/40 group-hover:text-electric">
          View certificate <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </a>
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{certificate.credential}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-electric/15 bg-electric/[0.07] text-electric">
            <Award size={19} aria-hidden="true" />
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-400">{certificate.description}</p>
        <p className="mt-4 text-xs leading-5 text-slate-500">{certificate.issuer}</p>
        <p className="mt-2 font-mono text-xs text-slate-400">{certificate.date}</p>
      </div>
    </article>
  );
}
