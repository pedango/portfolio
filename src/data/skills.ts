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
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
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
    title: "PDF & Annotation",
    icon: "FileText",
    skills: ["Fabric.js", "PDF.js", "pdf-lib", "jsPDF"],
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Apache JMeter", "Snyk", "Playwright"],
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Clerk",
      "Cloudinary",
      "Vercel",
      "Upstash Redis",
      "Zustand",
    ],
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
