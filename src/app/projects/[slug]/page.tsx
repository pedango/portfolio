import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Play, Star } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { getGoogleDriveEmbedUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ProjectMedia } from "@/components/ui/project-media";

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

function ProseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-subtle">
        {title}
      </h2>
      <div className="mt-4 max-w-[64ch] text-base leading-7 text-fg-muted">
        {children}
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const galleryScreenshots =
    project.screenshots?.filter((shot) => shot.src !== project.image) ?? [];

  const typeLabel =
    project.type === "Independent Project" ? "Independent" : "Team";

  const meta = [
    project.role,
    project.year,
    typeLabel,
    project.featured ? "Featured" : null,
    project.status === "Ongoing" ? "Ongoing" : null,
  ].filter(Boolean);

  return (
    <article className="min-h-screen scroll-mt-24 pt-24 pb-20 md:pb-28">
      <Container className="max-w-3xl">
        <nav className="mb-8 font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
          <Link href="/#projects" className="transition-colors hover:text-accent">
            Work
          </Link>
          <span className="mx-2">/</span>
          <span className="text-fg-muted">{project.title}</span>
        </nav>

        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
          {meta.join(" · ")}
          {project.featured ? (
            <Star className="ml-2 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
          ) : null}
        </p>

        <h1 className="mt-4 text-[32px] font-semibold leading-[38px] tracking-[-0.02em] text-fg md:text-[40px] md:leading-[46px]">
          {project.title}
        </h1>

        <p className="mt-4 max-w-[64ch] text-lg leading-[30px] text-fg">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 ? (
          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-3">
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
        ) : (
          <Separator className="my-8" />
        )}

        {project.image ? (
          <ProjectMedia
            src={project.image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            width={project.imageWidth ?? 1600}
            height={project.imageHeight ?? 1000}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-8"
          />
        ) : null}

        <p className="mt-6 font-mono text-[12px] leading-5 text-fg-subtle">
          {project.technologies.join(" · ")}
        </p>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
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
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        )}

        <div className="mt-12 space-y-10">
          <div className="grid gap-10 md:grid-cols-2">
            <ProseSection title="Problem">
              <p>{project.problem}</p>
            </ProseSection>
            <ProseSection title="Solution">
              <p>{project.solution}</p>
            </ProseSection>
          </div>

          <ProseSection title="Contributions">
            <ul className="list-disc space-y-2 pl-5 marker:text-fg-subtle">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProseSection>

          <ProseSection title="Features">
            <ul className="list-disc space-y-2 pl-5 marker:text-fg-subtle">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProseSection>

          <ProseSection title="Architecture">
            <ul className="list-disc space-y-2 pl-5 marker:text-fg-subtle">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProseSection>

          <ProseSection title="Lessons">
            <ul className="list-disc space-y-2 pl-5 marker:text-fg-subtle">
              {project.lessonsLearned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProseSection>
        </div>

        {galleryScreenshots.length > 0 ? (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-subtle">
              Screenshots
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {galleryScreenshots.map((screenshot) => (
                <ProjectMedia
                  key={screenshot.src}
                  src={screenshot.src}
                  alt={screenshot.alt}
                  sizes="(max-width: 640px) 100vw, 384px"
                />
              ))}
            </div>
          </section>
        ) : null}

        {project.demoVideoUrl ? (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-4 flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-subtle">
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              Demo
            </h2>
            <div className="rounded-2xl border border-border bg-surface p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <iframe
                  src={getGoogleDriveEmbedUrl(project.demoVideoUrl)}
                  title={`${project.title} demo video`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
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
          </section>
        ) : null}

        <div className="mt-12 border-t border-border pt-8">
          <Button asChild variant="outline">
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>
          </Button>
        </div>
      </Container>
    </article>
  );
}
