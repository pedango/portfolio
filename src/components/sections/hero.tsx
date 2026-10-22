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
      className="relative overflow-hidden pt-24 pb-[var(--space-section-y)] sm:pt-28 lg:pt-32"
      aria-label="Introduction"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="min-w-0"
          >
            <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-fg-subtle sm:text-[12px]">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-fg sm:mt-4 sm:text-[44px] lg:text-[52px] lg:leading-[1.1]">
              {personalInfo.name}
            </h1>

            <p className="mt-3 text-lg font-medium leading-7 text-fg sm:mt-4 sm:text-xl">
              {personalInfo.title}
            </p>

            <p className="mt-3 max-w-[52ch] text-[15px] leading-6 text-fg-muted sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-[30px]">
              {personalInfo.tagline}
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-11 w-full sm:w-auto sm:min-w-[10.5rem]">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 w-full sm:w-auto sm:min-w-[10.5rem]"
              >
                <a href={personalInfo.cvPath} download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
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
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease }}
            className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-border ring-1 ring-white/5">
              <Image
                src={personalInfo.portraitPath}
                alt={`${personalInfo.name}, full-stack software developer based in ${personalInfo.location}`}
                fill
                priority
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 1024px) 320px, 400px"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
