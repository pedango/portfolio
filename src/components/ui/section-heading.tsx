import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
