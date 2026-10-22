import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "JWT Authentication", "WebRTC (LiveKit)"],
  },
  {
    title: "Data",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Prisma", "Supabase"],
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Playwright", "Apache JMeter", "Snyk"],
  },
  {
    title: "PDF & Annotation",
    icon: "FileText",
    skills: ["Fabric.js", "PDF.js", "pdf-lib", "jsPDF"],
  },
  {
    title: "Platforms",
    icon: "Wrench",
    skills: ["Vercel", "Clerk", "Cloudinary", "Upstash Redis", "Zustand"],
  },
];
