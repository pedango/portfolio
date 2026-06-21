export interface Project {
  slug: string;
  title: string;
  type: "Team Project" | "Independent Project";
  description: string;
  shortDescription: string;
  contributions: string[];
  technologies: string[];
  githubUrl?: string;
  featured?: boolean;
  image: string;
  architecture: string[];
  features: string[];
  lessonsLearned: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}
