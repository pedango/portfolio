import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";

const GitHubSection = dynamic(
  () =>
    import("@/components/sections/github").then((mod) => mod.GitHubSection),
  { loading: () => <div className="py-20 text-center text-muted-foreground">Loading repositories...</div> }
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
