import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  organization: string;
  period?: string;
  bullets?: string[];
  accent?: boolean;
}

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
  compact?: boolean;
}

export function Timeline({ entries, className, compact = false }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-8 border-l border-border pl-6", className)}>
      {entries.map((entry, index) => (
        <li key={`${entry.title}-${entry.organization}`} className="relative">
          <span
            className={cn(
              "absolute -left-[31px] top-1.5 h-2 w-2 rounded-full border border-border-strong bg-surface",
              (entry.accent ?? index === 0) && "border-accent bg-accent"
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6",
              compact && "md:items-center"
            )}
          >
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-fg">
                {entry.title}
              </h3>
              <p className="mt-0.5 text-sm text-fg-muted">{entry.organization}</p>
            </div>
            {entry.period ? (
              <p className="shrink-0 font-mono text-[12px] uppercase leading-4 tracking-[0.08em] text-fg-subtle md:text-right">
                {entry.period}
              </p>
            ) : null}
          </div>
          {entry.bullets && entry.bullets.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-6 text-fg-muted marker:text-fg-subtle">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
