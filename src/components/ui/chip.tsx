import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface-2 px-2 py-1 font-mono text-[13px] leading-5 text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
