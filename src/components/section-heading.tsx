import Reveal from "./reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p
        className={`section-label ${
          light ? "!text-[var(--sun)]" : ""
        }`}
      >
        {label}
      </p>
      <h2
        className={`section-title mt-4 max-w-2xl ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-8 ${
            light ? "text-white/80" : "text-[var(--ink-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
