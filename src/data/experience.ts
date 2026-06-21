import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "WidePlus",
    period: "September 2024 – January 2025",
    responsibilities: [
      "Software development across assigned product features",
      "Testing and debugging to maintain code quality",
      "Application maintenance and iterative improvements",
      "Collaborating with team members on shared deliverables",
    ],
  },
  {
    title: "Part-Time Teacher",
    company: "Kwame Nkrumah Memorial School",
    period: "July 2021 – December 2023",
    responsibilities: [
      "Mathematics and science instruction for diverse learners",
      "Lesson planning aligned with curriculum objectives",
      "Stakeholder communication with parents and school staff",
      "Student mentorship and academic support",
    ],
  },
];

export const leadership = {
  title: "Dormitory Overseer",
  organization: "Adisadel College",
  highlights: [
    "Leadership and team coordination across dormitory residents",
    "Conflict resolution and maintaining a positive community environment",
    "Decision-making in time-sensitive situations",
    "Accountability and mentorship for younger students",
  ],
} as const;
