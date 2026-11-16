"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import type { GitHubRepo, Project } from "@/types";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectMedia } from "@/components/ui/project-media";
import { Badge } from "@/components/ui/badge";
import { RepositoryList } from "@/components/sections/github";

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const leadSlug = "healtrac";
const gridSlugs = ["gps-police-management", "mwc-member-registry", "plusbuy-trustpay"];
const moreSlugs = ["aer", "fhm-meet", "digi-receipt", "lambda-lms", "payvoice"];

function bySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function WorkCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const stats = (project.metrics ?? []).slice(0, 3);

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : Math.min(index, 2) * 0.05, ease }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-4 transition-colors duration-150 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-6"
      >
        <ProjectMedia
          src={project.imageSm || project.image}
          alt={project.imageAlt || `${project.title} screenshot`}
          width={project.imageSm ? 800 : project.imageWidth ?? 1600}
          height={project.imageSm ? 500 : project.imageHeight ?? 1000}
          priority={priority}
          sizes={priority ? "(max-width: 1024px) 100vw, 1100px" : "(max-width: 1024px) 100vw, 360px"}
        />

        <div className="mt-6 flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[13px] text-fg-muted">
            <span>{[project.role, project.year].filter(Boolean).join(" · ")}</span>
            {project.status === "Demo" ? <Badge>Demo</Badge> : null}
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-base leading-7 text-fg-muted">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-8">
            {stats.length > 0 ? (
              <dl className="grid grid-cols-3 gap-4">
                {stats.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`}>
                    <dt className="text-2xl font-semibold tracking-tight text-fg">
                      {metric.value}
                    </dt>
                    <dd className="mt-1 text-[13px] leading-5 text-fg-muted">
                      {metric.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            <p className="mt-6 text-sm text-accent">View case study →</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Projects({ repos }: { repos: GitHubRepo[] }) {
  const lead = bySlug(leadSlug);
  const grid = gridSlugs
    .map(bySlug)
    .filter((project): project is Project => Boolean(project));
  const more = moreSlugs
    .map(bySlug)
    .filter((project): project is Project => Boolean(project));

  return (
    <AnimatedSection id="projects" aria-labelledby="projects-heading">
      <SectionHeader
        index="01 / WORK"
        title="Selected work"
        subtitle="Real-world applications built for education, community, and public service"
        id="projects-heading"
      />

      <div className="space-y-4">
        {lead ? <WorkCard project={lead} index={0} priority /> : null}
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {grid.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      </div>

      {more.length > 0 ? (
        <div className="mt-16">
          <h3 className="font-mono text-[13px] uppercase tracking-widest text-fg-muted">
            More projects
          </h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {more.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-6 py-4 text-fg transition-colors hover:text-accent"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{project.title}</span>
                    <span className="mt-1 line-clamp-1 block text-base leading-7 text-fg-muted">
                      {project.shortDescription}
                    </span>
                  </span>
                  {project.year ? (
                    <span className="shrink-0 font-mono text-[13px] text-fg-muted">
                      {project.year}
                    </span>
                  ) : null}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <RepositoryList repos={repos} />
    </AnimatedSection>
  );
}
