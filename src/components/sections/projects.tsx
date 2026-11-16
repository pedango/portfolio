"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function highlightLine(project: Project) {
  if (project.metrics && project.metrics.length > 0) {
    return project.metrics
      .map((metric) => `${metric.value} ${metric.label}`)
      .join(" | ");
  }
  return project.shortDescription;
}

const selectedCover: Record<string, string> = {
  "gps-police-management": "/assets/projects/gps-police/login.png",
  "mwc-member-registry": "/assets/projects/mwc-member-registry/login.jpg",
  healtrac: "/assets/projects/healtrac/login.png",
  aer: "/assets/projects/aer/home.png",
  "plusbuy-trustpay": "/assets/projects/plusbuy/home.png",
};

function ProductStage({ project }: { project: Project }) {
  const src = selectedCover[project.slug] ?? project.image;

  return (
    <div className="relative h-full min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-full">
      <Image
        src={src}
        alt=""
        fill
        className={cn(
          "object-cover",
          project.slug === "aer" ? "object-top" : "object-center"
        )}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function WorkBanner({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.05, ease }}
      className="overflow-hidden rounded-[28px] bg-surface shadow-[0_12px_40px_-16px_rgba(15,18,22,0.18)]"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Learn more about ${project.title}`}
        className={cn(
          "group grid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          reverse
            ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
            : "lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-14 xl:px-16",
            reverse && "lg:order-2"
          )}
        >
          <h3 className="max-w-[12em] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-fg sm:text-[34px]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[28ch] text-[16px] font-medium leading-snug text-fg sm:mt-5 sm:text-[18px] sm:leading-[1.45]">
            {highlightLine(project)}
          </p>
          <span className="mt-8 inline-flex items-center gap-0.5 text-[14px] text-fg sm:mt-10">
            Learn More
            <ChevronRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
        <div className={cn("h-full", reverse && "lg:order-1")}>
          <ProductStage project={project} />
        </div>
      </Link>
    </motion.article>
  );
}

function MoreCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Learn more about ${project.title}`}
        className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-border bg-surface transition-colors duration-150 hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative aspect-[16/10] border-b border-border bg-surface-2">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle">
            {[project.role, project.year].filter(Boolean).join(" · ")}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-7 tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-fg-muted">
            {project.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-0.5 text-[14px] text-fg">
            Learn More
            <ChevronRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

const moreProjectSlugs = ["aer", "fhm-meet", "digi-receipt", "lambda-lms"];

export function Projects() {
  const selected = projects.filter((project) => project.featured);
  const more = moreProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <AnimatedSection id="projects" aria-labelledby="projects-heading">
      <SectionHeader
        index="03 / WORK"
        title="Selected work"
        subtitle="Real-world applications built for education, community, and public service"
        id="projects-heading"
      />

      <div className="space-y-4 sm:space-y-5">
        {selected.map((project, index) => (
          <WorkBanner key={project.slug} project={project} index={index} />
        ))}
      </div>

      {more.length > 0 ? (
        <div className="mt-14 sm:mt-16">
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-subtle">
            More projects
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {more.map((project, index) => (
              <MoreCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
