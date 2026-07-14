"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-muted/30">
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world applications built for education, community, and public service"
      />

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
              <div className="relative aspect-video min-h-[220px] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                {project.featured && (
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                )}
                {project.status === "Ongoing" && (
                  <div
                    className={`absolute ${project.featured ? "left-4 top-14" : "left-4 top-4"}`}
                  >
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                )}
              </div>

              <div className="flex min-h-full flex-col justify-center p-6 sm:p-8">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{project.type}</Badge>
                  {project.status === "Ongoing" && (
                    <Badge variant="secondary">Ongoing</Badge>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
