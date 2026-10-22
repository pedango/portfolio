"use client";

import {
  Code2,
  Layout,
  Server,
  Database,
  Shield,
  Wrench,
  FileText,
  LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Chip } from "@/components/ui/chip";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Shield,
  Wrench,
  FileText,
};

const categoryOrder = [
  "Languages",
  "Frontend",
  "Backend",
  "Data",
  "Testing & Security",
  "PDF & Annotation",
  "Platforms",
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Skills() {
  const reduceMotion = useReducedMotion();
  const technical = categoryOrder
    .map((title) => skillCategories.find((c) => c.title === title))
    .filter(Boolean);

  return (
    <AnimatedSection id="skills" aria-labelledby="skills-heading">
      <SectionHeader
        index="02 / STACK"
        title="Stack"
        subtitle="Technologies used across shipped products"
        id="skills-heading"
      />

      <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {technical.map((category, index) => {
          if (!category) return null;
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="h-full min-w-0"
            >
              <Card className="group h-full transition-colors duration-150 hover:border-border-strong">
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-5 w-5 shrink-0 text-fg-muted transition-colors duration-150 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-fg sm:text-[12px]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
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
    </AnimatedSection>
  );
}
