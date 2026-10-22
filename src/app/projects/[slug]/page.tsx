import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
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

  const typeLabel =
    project.type === "Independent Project" ? "INDEPENDENT" : "TEAM";

  return (
    <article className="min-h-screen pt-24 pb-20">
      <Container className="max-w-4xl">
        <nav className="mb-8 font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
          <Link href="/#projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-fg-muted">{project.title}</span>
        </nav>

        <div className="relative mb-8 aspect-video overflow-hidden rounded-[12px] border border-border">
          <Image
            src={project.image}
            alt={`${project.title} project`}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
          {project.role ? <span>{project.role}</span> : null}
          {project.year ? <span>{project.year}</span> : null}
          <span>{typeLabel}</span>
          {project.featured ? (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3 w-3" aria-hidden="true" />
              Featured
            </span>
          ) : null}
          {project.status === "Ongoing" ? <span>Ongoing</span> : null}
        </div>

        <h1 className="mt-4 text-[32px] font-semibold leading-[38px] tracking-[-0.02em] text-fg md:text-[40px] md:leading-[46px]">
          {project.title}
        </h1>

        <p className="mt-4 max-w-[64ch] text-lg leading-[30px] text-fg-muted">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 ? (
          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  {metric.label}
                </dt>
                <dd className="mt-2 font-mono text-[28px] font-semibold leading-none tracking-tight text-fg">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <p className="mt-6 font-mono text-[12px] leading-5 text-fg-subtle">
          {project.technologies.join(" · ")}
        </p>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant={project.liveUrl ? "outline" : "default"}>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        )}

        <Separator className="my-12" />

        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-fg-subtle" />
                  Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-fg-muted">{project.problem}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-fg-subtle" />
                  Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-fg-muted">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-fg-subtle" />
                My Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm leading-6 text-fg-muted">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-4 w-4 text-fg-subtle" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm leading-6 text-fg-muted">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-fg-subtle" />
                Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm leading-6 text-fg-muted">
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-fg-subtle" />
                Lessons Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-sm leading-6 text-fg-muted">
                {project.lessonsLearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {galleryScreenshots.length > 0 && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <ImageIcon className="h-4 w-4 text-fg-subtle" />
                Screenshots
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryScreenshots.map((screenshot) => (
                  <div
                    key={screenshot.src}
                    className="relative aspect-video overflow-hidden rounded-[8px] border border-border"
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

        {project.demoVideoUrl && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Play className="h-4 w-4 text-fg-subtle" />
                Demo Video
              </h2>
              <div className="relative aspect-video overflow-hidden rounded-[12px] border border-border bg-surface-2">
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
                  Open in Google Drive
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </>
        )}

        <Separator className="my-12" />
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant={project.liveUrl ? "outline" : "default"}>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </Button>
        </div>
      </Container>
    </article>
  );
}
