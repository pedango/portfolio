import Link from "next/link";
import type { GitHubRepo } from "@/types";
import { personalInfo } from "@/data/personal";

export function RepositoryList({ repos }: { repos: GitHubRepo[] }) {
  const visible = repos.slice(0, 3);

  return (
    <div className="mt-16">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold text-fg">Repositories</h3>
        <Link
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent"
        >
          View all on GitHub
        </Link>
      </div>

      {visible.length === 0 ? (
        <p className="text-base leading-7 text-fg-muted">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Visit @{personalInfo.githubUsername} on GitHub
          </Link>
        </p>
      ) : (
        <ul className="grid gap-8 md:grid-cols-3">
          {visible.map((repo) => (
            <li key={repo.id}>
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-fg hover:text-accent"
              >
                {repo.name}
              </Link>
              {repo.description ? (
                <p className="mt-2 text-base leading-7 text-fg-muted">
                  {repo.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
