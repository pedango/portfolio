import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { EducationLeadership, Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { fetchGitHubRepos } from "@/lib/github";

export default async function Home() {
  let repos: Awaited<ReturnType<typeof fetchGitHubRepos>> = [];

  try {
    repos = await fetchGitHubRepos();
  } catch {
    repos = [];
  }

  return (
    <>
      <Hero />
      <Projects repos={repos.slice(0, 3)} />
      <About />
      <Experience />
      <EducationLeadership />
      <Contact />
    </>
  );
}
