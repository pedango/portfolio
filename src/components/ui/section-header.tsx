import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function SectionHeader({
  index,
  title,
  subtitle,
  className,
  id,
}: SectionHeaderProps) {
  const headingId = id ?? `section-${index.replace(/\s|\//g, "").toLowerCase()}`;

  return (
    <header
      className={cn("mb-12", className)}
    >
      <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-accent">
        {index}
      </p>
      <h2
        id={headingId}
        className="mt-4 text-left text-3xl font-semibold tracking-tight text-fg md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-prose text-base leading-7 text-fg-muted">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
