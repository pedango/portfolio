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
  "Programming Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Testing & Security",
  "PDF & Annotation",
  "Tools & Platforms",
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Skills() {
  const reduceMotion = useReducedMotion();
  const technical = categoryOrder
    .map((title) => skillCategories.find((c) => c.title === title))
    .filter(Boolean);
  const professional = skillCategories.find(
    (c) => c.title === "Professional Skills"
  );

  return (
    <AnimatedSection id="skills" aria-labelledby="skills-heading">
      <SectionHeader
        index="02 / SKILLS"
        title="Technical Skills"
        subtitle="Technologies and competencies across the full development lifecycle"
        id="skills-heading"
      />

      <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              className="h-full"
            >
              <Card className="group h-full transition-colors duration-150 hover:border-border-strong">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-5 w-5 text-fg-muted transition-colors duration-150 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg">
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

      {professional ? (
        <p className="mt-8 border-t border-border pt-6 text-sm leading-7 text-fg-muted">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
            Professional Skills
          </span>
          <span className="mt-2 block text-fg">
            {professional.skills.join(" · ")}
          </span>
        </p>
      ) : null}
    </AnimatedSection>
  );
}
