import Reveal from "./reveal";

interface CatalogCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function CatalogCard({
  icon,
  title,
  description,
  index,
}: CatalogCardProps) {
  return (
    <Reveal delay={index * 0.08} className="min-w-[280px] sm:min-w-[300px] lg:min-w-0 lg:w-full">
      <article className="glass-card flex h-full flex-col p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(11,52,132,0.08)] text-2xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--blue)]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--ink-muted)]">
          {description}
        </p>
        <div className="mt-4 h-1 w-10 rounded-full bg-[var(--sun)]" />
      </article>
    </Reveal>
  );
}
