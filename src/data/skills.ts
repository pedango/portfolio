import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Apache JMeter", "Snyk"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Professional Skills",
    icon: "Users",
    skills: [
      "Project Coordination",
      "Team Collaboration",
      "Communication",
      "Stakeholder Engagement",
      "Problem Solving",
      "Technical Documentation",
    ],
  },
];
