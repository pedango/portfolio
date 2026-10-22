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
      className={cn("mb-[var(--space-header-mb)]", className)}
    >
      <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-accent sm:text-[12px]">
        {index}
      </p>
      <h2
        id={headingId}
        className="mt-2 text-left text-[28px] font-semibold leading-9 tracking-[-0.02em] text-fg sm:mt-3 sm:text-[32px] sm:leading-[38px]"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-[60ch] text-[15px] leading-6 text-fg-muted sm:mt-3 sm:text-base sm:leading-7">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
