"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function typeLabel(type: Project["type"]) {
  return type === "Independent Project" ? "INDEPENDENT" : "TEAM";
}

function StackLine({ technologies }: { technologies: string[] }) {
  const shown = technologies.slice(0, 4);
  const overflow = technologies.length - shown.length;
  return (
    <p className="font-mono text-[12px] leading-5 text-fg-subtle">
      {shown.join(" · ")}
      {overflow > 0 ? ` · +${overflow}` : ""}
    </p>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  const bits = [
    project.role,
    project.year,
    typeLabel(project.type),
  ].filter(Boolean);

  if (bits.length === 0) return null;

  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
      {bits.join(" · ")}
    </p>
  );
}

function MetricsRow({
  metrics,
  compact = false,
}: {
  metrics: NonNullable<Project["metrics"]>;
  compact?: boolean;
}) {
  return (
    <dl
      className={cn(
        "grid gap-3 border-t border-border pt-4",
        compact ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"
      )}
    >
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle">
            {metric.label}
          </dt>
          <dd
            className={cn(
              "mt-1 font-mono font-semibold tracking-tight text-fg",
              compact ? "text-lg" : "text-[22px] leading-none"
            )}
          >
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-4">
      <Link
        href={`/projects/${project.slug}`}
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
      >
        View Details
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      {project.liveUrl ? (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          Live Site
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      ) : null}
      {project.githubUrl ? (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      ) : null}
    </div>
  );
}

function FeaturedCard({
  project,
  reverse,
  index,
}: {
  project: Project;
  reverse?: boolean;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="group overflow-hidden rounded-[12px] border border-border bg-surface transition-all duration-150 hover:-translate-y-0.5 hover:border-border-strong"
    >
      <div
        className={cn(
          "grid lg:grid-cols-[55%_45%]",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div className="relative aspect-video border-b border-border lg:aspect-auto lg:min-h-[320px] lg:border-b-0 lg:border-r lg:border-border">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <ProjectMeta project={project} />
            {project.featured ? (
              <span className="inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                <Star className="h-3 w-3" aria-hidden="true" />
                Featured
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-fg-muted">
            {project.shortDescription}
          </p>
          {project.metrics && project.metrics.length > 0 ? (
            <div className="mt-5">
              <MetricsRow metrics={project.metrics} />
            </div>
          ) : null}
          <div className="mt-4">
            <StackLine technologies={project.technologies} />
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function StandardCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-border bg-surface transition-all duration-150 hover:-translate-y-0.5 hover:border-border-strong"
    >
      <div className="relative aspect-video border-b border-border">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ProjectMeta project={project} />
        <h3 className="mt-2 text-xl font-semibold leading-7 tracking-tight text-fg">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-fg-muted">
          {project.shortDescription}
        </p>
        {project.metrics && project.metrics.length > 0 ? (
          <div className="mt-4">
            <MetricsRow metrics={project.metrics} compact />
          </div>
        ) : null}
        <div className="mt-4">
          <StackLine technologies={project.technologies} />
        </div>
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects" aria-labelledby="projects-heading">
      <SectionHeader
        index="03 / PROJECTS"
        title="Featured Projects"
        subtitle="Real-world applications built for education, community, and public service"
        id="projects-heading"
      />

      <div className="space-y-6">
        {featured.map((project, index) => (
          <FeaturedCard
            key={project.slug}
            project={project}
            reverse={index % 2 === 1}
            index={index}
          />
        ))}
      </div>

      {more.length > 0 ? (
        <div className="mt-14">
          <p className="mb-6 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-subtle">
            More Projects
          </p>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {more.map((project, index) => (
              <StandardCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
