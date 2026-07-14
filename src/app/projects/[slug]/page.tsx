import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ImageIcon,
  Layers,
  Lightbulb,
  Play,
  Star,
  Target,
  Wrench,
} from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { getGoogleDriveEmbedUrl } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Dango Edem Peter`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const galleryScreenshots =
    project.screenshots?.filter((shot) => shot.src !== project.image) ?? [];

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* 1. Hero image */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border/50">
          <Image
            src={project.image}
            alt={`${project.title} project`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* 2. Title + badges + intro */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.type}</Badge>
          {project.featured && (
            <Badge className="bg-primary text-primary-foreground">
              <Star className="mr-1 h-3 w-3" />
              Featured
            </Badge>
          )}
          {project.status === "Ongoing" && (
            <Badge variant="secondary">Ongoing</Badge>
          )}
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {project.description}
        </p>

        {/* 3. Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Primary CTA near title */}
        {project.githubUrl && (
          <Button asChild className="mt-8">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        )}

        <Separator className="my-12" />

        <div className="grid gap-8">
          {/* 4–5. Problem & Solution */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-5 w-5 text-primary" />
                  Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.problem}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Wrench className="h-5 w-5 text-primary" />
                  Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* 6. Contributions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                My Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 7. Key features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Star className="h-5 w-5 text-primary" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 8. Architecture */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Layers className="h-5 w-5 text-primary" />
                Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 9. Lessons learned */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Lightbulb className="h-5 w-5 text-primary" />
                Lessons Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                {project.lessonsLearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 10. Screenshots */}
        {galleryScreenshots.length > 0 && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <ImageIcon className="h-5 w-5 text-primary" />
                Screenshots
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryScreenshots.map((screenshot) => (
                  <div
                    key={screenshot.src}
                    className="relative aspect-video overflow-hidden rounded-xl border border-border/50"
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 432px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* 11. Demo video */}
        {project.demoVideoUrl && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Play className="h-5 w-5 text-primary" />
                Demo Video
              </h2>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted">
                <iframe
                  src={getGoogleDriveEmbedUrl(project.demoVideoUrl)}
                  title={`${project.title} demo video`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <Button asChild variant="outline" size="sm" className="mt-3">
                <Link
                  href={project.demoVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Google Drive
                </Link>
              </Button>
            </div>
          </>
        )}

        {/* 12. Links at bottom */}
        <Separator className="my-12" />
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
