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
}

export function Timeline({ entries, className }: TimelineProps) {
  return (
    <ol className={cn("space-y-8", className)}>
      {entries.map((entry, index) => {
        const accent = entry.accent ?? index === 0;
        return (
          <li
            key={`${entry.title}-${entry.organization}`}
            className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-baseline gap-x-6 sm:grid-cols-[14rem_minmax(0,1fr)]"
          >
            <p className="relative font-mono text-[13px] leading-7 text-fg-muted">
              <span
                className={cn(
                  "absolute top-[0.55rem] -left-4 h-2 w-2 rounded-full",
                  accent ? "bg-accent" : "bg-fg-muted"
                )}
                aria-hidden="true"
              />
              {entry.period}
            </p>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-7 text-fg">
                {entry.title}
              </h3>
              <p className="text-base leading-7 text-fg-muted">{entry.organization}</p>
              {entry.bullets && entry.bullets.length > 0 ? (
                <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-7 text-fg-muted marker:text-fg-muted">
                  {entry.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
