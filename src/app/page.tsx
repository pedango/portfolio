import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";

function GitHubSkeleton() {
  return (
    <section
      id="github"
      className="py-[var(--space-section-y)]"
      aria-busy="true"
      aria-label="Loading repositories"
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <div className="mb-[var(--space-header-mb)] h-8 w-48 animate-pulse rounded bg-surface-2" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-40 animate-pulse rounded-[12px] border border-border bg-surface"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const GitHubSection = dynamic(
  () =>
    import("@/components/sections/github").then((mod) => mod.GitHubSection),
  { loading: () => <GitHubSkeleton /> }
);

const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubSection />
      <Contact />
    </>
  );
}
