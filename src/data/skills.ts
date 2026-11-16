import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "JWT", "WebRTC/LiveKit"],
  },
  {
    title: "Data",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Prisma", "Supabase", "Upstash Redis"],
  },
  {
    title: "Auth & Services",
    icon: "KeyRound",
    skills: ["Clerk", "Cloudinary", "Vercel"],
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Playwright", "JMeter", "Snyk"],
  },
];
