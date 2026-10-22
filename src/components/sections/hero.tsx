"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const projectCount = projects.length;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-[72px] md:pt-32 md:pb-[112px]"
      aria-label="Introduction"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase leading-4 tracking-[0.08em] text-fg-subtle">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <h1 className="mt-4 text-[36px] font-semibold leading-[40px] tracking-[-0.03em] text-fg md:text-[56px] md:leading-[60px]">
              {personalInfo.name}
            </h1>

            <p className="mt-4 text-xl font-medium leading-7 text-fg">
              {personalInfo.title}
            </p>

            <p className="mt-4 max-w-[52ch] text-base leading-7 text-fg-muted md:text-lg md:leading-[30px]">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="h-11 min-w-[10.5rem]">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 min-w-[10.5rem]"
              >
                <a href={personalInfo.cvPath} download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-11">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <IconLink href={personalInfo.github} label="GitHub profile">
                <GitHubIcon />
              </IconLink>
              <IconLink href={personalInfo.linkedin} label="LinkedIn profile">
                <LinkedInIcon />
              </IconLink>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-lg">
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  Projects
                </dt>
                <dd className="mt-2 font-mono text-[28px] font-semibold leading-none tracking-tight text-fg">
                  {projectCount}
                </dd>
              </div>
              <div className="border-l border-border pl-4">
                <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  Stack
                </dt>
                <dd className="mt-2 text-sm font-medium leading-5 text-fg">
                  Next.js · TypeScript
                </dd>
              </div>
              <div className="border-l border-border pl-4">
                <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  Education
                </dt>
                <dd className="mt-2 text-sm font-medium leading-5 text-fg">
                  BSc. CS, KNUST
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease }}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border ring-1 ring-white/5">
              <Image
                src={personalInfo.portraitPath}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 1024px) 384px, 420px"
              />
            </div>
          </motion.div>
        </div>

        <p className="mt-14 hidden font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle md:block">
          Scroll
        </p>
      </Container>
    </section>
  );
}
