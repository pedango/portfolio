"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28"
      aria-label="Introduction"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[7fr_5fr] lg:gap-12">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="min-w-0"
          >
            <p className="inline-flex items-center gap-2 font-mono text-[13px] font-medium uppercase tracking-widest text-fg-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] tracking-tight text-fg">
              {personalInfo.name}
            </h1>

            <p className="mt-4 text-xl font-medium leading-7 text-fg">
              {personalInfo.title}
            </p>

            <p className="mt-4 max-w-prose text-base leading-7 text-fg-muted">
              {personalInfo.tagline}
            </p>
            <p className="mt-4 max-w-prose text-base leading-7 text-fg">
              Built HealTrac, used by 2 UPMC hospitals in Pennsylvania.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href={personalInfo.cvPath} download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <IconLink href={personalInfo.github} label="GitHub profile">
                  <GitHubIcon />
                </IconLink>
                <IconLink href={personalInfo.linkedin} label="LinkedIn profile">
                  <LinkedInIcon />
                </IconLink>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.06, ease }}
            className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={personalInfo.portraitPath}
                alt={`${personalInfo.name}, full-stack software developer based in ${personalInfo.location}`}
                fill
                priority
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 1024px) 384px, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
