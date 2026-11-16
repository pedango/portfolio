"use client";

import {
  Database,
  KeyRound,
  Layout,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Chip } from "@/components/ui/chip";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  KeyRound,
  Shield,
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => {
        const Icon = iconMap[category.icon] ?? Layout;
        return (
          <motion.div
            key={category.title}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06, ease }}
            className="h-full min-w-0"
          >
            <Card className="h-full transition-colors duration-150 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-fg-muted" aria-hidden="true" />
                  <h3 className="font-mono text-[13px] font-medium uppercase tracking-widest text-fg-muted">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
