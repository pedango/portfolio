import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fetchGitHubRepos, formatRelativeDate } from "@/lib/github";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dart: "#00b4ab",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export async function GitHubSection() {
  let repos: Awaited<ReturnType<typeof fetchGitHubRepos>> = [];
  let errored = false;

  try {
    repos = await fetchGitHubRepos();
  } catch {
    errored = true;
  }

  return (
    <AnimatedSection id="github" aria-labelledby="github-heading">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          index="06 / GITHUB"
          title="Open Source"
          subtitle="Repositories and contributions on GitHub"
          id="github-heading"
          className="mb-0"
        />
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-fg-muted">
            @{personalInfo.githubUsername}
          </span>
          <Button asChild variant="outline" size="sm">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Repositories
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      {errored || repos.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-sm text-fg-muted">
            Repositories could not be loaded right now.{" "}
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              Visit @{personalInfo.githubUsername} on GitHub
            </Link>
            .
          </CardContent>
        </Card>
      ) : (
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="flex h-full flex-col transition-colors duration-150 hover:border-border-strong"
            >
              <CardContent className="flex h-full flex-col p-6">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-fg transition-colors hover:text-accent"
                >
                  {repo.name}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </Link>
                {repo.description ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-fg-muted">
                    {repo.description}
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-fg-subtle">No description</p>
                )}
                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5 text-xs text-fg-subtle">
                  {repo.language ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] ?? "#6b7280",
                        }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </span>
                  ) : null}
                  {repo.stargazers_count > 0 ? (
                    <span>{repo.stargazers_count} stars</span>
                  ) : null}
                  <span>{formatRelativeDate(repo.updated_at)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
