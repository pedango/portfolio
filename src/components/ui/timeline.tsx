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
    <ol className={cn("relative space-y-6 border-l border-border pl-5 sm:space-y-8 sm:pl-6", className)}>
      {entries.map((entry, index) => (
        <li key={`${entry.title}-${entry.organization}`} className="relative">
          <span
            className={cn(
              "absolute top-1.5 left-[-1.41rem] h-2 w-2 rounded-full border border-border-strong bg-surface sm:left-[-1.66rem]",
              (entry.accent ?? index === 0) && "border-accent bg-accent"
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6",
              compact && "sm:items-center"
            )}
          >
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-fg">
                {entry.title}
              </h3>
              <p className="mt-0.5 text-sm leading-5 text-fg-muted">
                {entry.organization}
              </p>
            </div>
            {entry.period ? (
              <p className="shrink-0 font-mono text-[11px] uppercase leading-4 tracking-[0.08em] text-fg-subtle sm:text-right sm:text-[12px]">
                {entry.period}
              </p>
            ) : null}
          </div>
          {entry.bullets && entry.bullets.length > 0 ? (
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-fg-muted marker:text-fg-subtle sm:mt-3 sm:space-y-2">
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
