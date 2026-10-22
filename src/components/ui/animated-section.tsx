"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  bare?: boolean;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function AnimatedSection({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
  bare = false,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledBy}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className={cn(
        "py-[var(--space-section-y)]",
        className
      )}
    >
      {bare ? children : <Container>{children}</Container>}
    </motion.section>
  );
}
