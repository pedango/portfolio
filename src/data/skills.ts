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
    skills: ["Node.js", "REST APIs", "JWT Authentication", "WebRTC (LiveKit)"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Apache JMeter", "Snyk"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Clerk"],
  },
  {
    title: "Professional Skills",
    icon: "Users",
    skills: [
      "Project Coordination",
      "Team Collaboration",
      "Stakeholder Engagement",
      "Problem Solving",
      "User Support",
      "Technical Documentation",
    ],
  },
];
