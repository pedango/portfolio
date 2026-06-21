import Link from "next/link";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { fetchGitHubRepos, formatRelativeDate } from "@/lib/github";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export async function GitHubSection() {
  const repos = await fetchGitHubRepos();

  return (
    <AnimatedSection id="github" className="bg-muted/30">
      <SectionHeading
        title="Open Source"
        subtitle="Repositories and contributions on GitHub"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            className="flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    <GitBranch className="h-4 w-4 shrink-0" />
                    {repo.name}
                  </Link>
                </CardTitle>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
              {repo.description && (
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {repo.description}
                </p>
              )}
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {repo.language && (
                  <Badge variant="tech">{repo.language}</Badge>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stargazers_count}
                </span>
                <span>{formatRelativeDate(repo.updated_at)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Repositories
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
