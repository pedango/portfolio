import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function ProjectMedia({
  src,
  alt,
  width = 1600,
  height = 1000,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 720px",
  className,
}: ProjectMediaProps) {
  if (!src) return null;

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-2 sm:p-3",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/10"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
