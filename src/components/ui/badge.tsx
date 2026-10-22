import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[6px] border px-2 py-0.5 font-mono text-[12px] font-medium leading-4 transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-2 text-fg-muted",
        secondary: "border-transparent bg-surface-2 text-fg-muted",
        outline: "border-border text-fg-muted",
        tech: "border-border bg-surface-2 text-fg-muted",
        accent: "border-transparent bg-accent-soft text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
