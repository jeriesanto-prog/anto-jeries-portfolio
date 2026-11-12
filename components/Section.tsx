import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-shell scroll-mt-24 ${className}`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </section>
  );
}
