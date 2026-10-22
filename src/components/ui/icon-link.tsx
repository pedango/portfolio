import Link from "next/link";
import { cn } from "@/lib/utils";

interface IconLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function IconLink({
  href,
  label,
  children,
  className,
  external = true,
}: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex h-10 w-10 min-h-10 min-w-10 items-center justify-center rounded-[8px] border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:text-accent",
        className
      )}
    >
      {children}
    </Link>
  );
}
