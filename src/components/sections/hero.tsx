"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden pt-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 bg-muted shadow-xl shadow-primary/10 sm:h-40 sm:w-40">
              <Image
                src={personalInfo.portraitPath}
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {personalInfo.location}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {personalInfo.title}
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground/80 sm:text-lg">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <Button asChild size="lg" className="h-12 min-h-12 min-w-[11rem] px-6">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 min-h-12 min-w-[11rem] border-border px-6"
          >
            <a href={personalInfo.cvPath} download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 min-h-12 min-w-[11rem] border-border bg-white/5 px-6 backdrop-blur-md"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex items-center justify-center gap-4"
        >
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/50 bg-background/50 p-3 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/50 bg-background/50 p-3 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            className="rounded-full border border-border/50 bg-background/50 p-3 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span>Learn more</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
