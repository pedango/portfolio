import type { GitHubRepo } from "@/types";
import { personalInfo } from "@/data/personal";

const PRIORITY_REPOS = [
  "lambda-lms",
  "skillswap",
  "gps-police-management",
  "lambda-annotate",
  "lambda-lms",
  "Lambda-LMS",
  "SkillSwap",
  "GPS-Police-Personnel-Management-System",
  "Lambda-Annotate",
];

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=30`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      return getFallbackRepos();
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .sort((a, b) => {
        const aPriority = PRIORITY_REPOS.findIndex((name) =>
          a.name.toLowerCase().includes(name.toLowerCase())
        );
        const bPriority = PRIORITY_REPOS.findIndex((name) =>
          b.name.toLowerCase().includes(name.toLowerCase())
        );

        const aScore = aPriority === -1 ? 999 : aPriority;
        const bScore = bPriority === -1 ? 999 : bPriority;

        if (aScore !== bScore) return aScore - bScore;
        return b.stargazers_count - a.stargazers_count;
      })
      .slice(0, 6);
  } catch {
    return getFallbackRepos();
  }
}

function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: "Lambda-LMS",
      description:
        "Learning Management System for online learning, assignments, and grading.",
      html_url: personalInfo.github,
      stargazers_count: 0,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: "SkillSwap",
      description:
        "Peer-to-peer skill exchange platform with real-time communication.",
      html_url: personalInfo.github,
      stargazers_count: 0,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      name: "GPS-Police-Management",
      description:
        "Personnel management platform for police officer records and assignments.",
      html_url: personalInfo.github,
      stargazers_count: 0,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Lambda-Annotate",
      description:
        "Web-based annotation platform for structured annotation workflows.",
      html_url: personalInfo.github,
      stargazers_count: 0,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
  ];
}

export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Updated today";
  if (diffDays === 1) return "Updated yesterday";
  if (diffDays < 30) return `Updated ${diffDays} days ago`;
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `Updated ${years} year${years > 1 ? "s" : ""} ago`;
}
