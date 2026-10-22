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
    <header className={cn("mb-10 md:mb-12", className)}>
      <p className="font-mono text-[12px] font-medium uppercase leading-4 tracking-[0.08em] text-accent">
        {index}
      </p>
      <h2
        id={headingId}
        className="mt-3 text-left text-[32px] font-semibold leading-[38px] tracking-[-0.02em] text-fg"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-[64ch] text-base leading-7 text-fg-muted">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
