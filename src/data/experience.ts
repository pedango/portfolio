import type { EducationEntry, Experience, LeadershipEntry } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "WidePlus, Accra, Ghana",
    period: "September 2024 – January 2025",
    responsibilities: [
      "Assisted in developing, testing, and maintaining software solutions",
      "Participated in debugging and issue resolution activities",
      "Collaborated with development teams to improve software quality and functionality",
      "Supported implementation and maintenance of software systems",
    ],
  },
  {
    title: "Part-Time Teacher",
    company: "Kwame Nkrumah Memorial School",
    period: "July 2021 – December 2023",
    responsibilities: [
      "Taught Mathematics, Integrated Science, and Religious & Moral Education",
      "Prepared lesson plans and instructional materials",
      "Developed strong communication, mentoring, and stakeholder engagement skills",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    title: "BSc. Computer Science",
    school: "KNUST",
    period: "September 2025",
  },
  {
    title: "WASSCE, General Science",
    school: "Adisadel College",
    period: "June 2021",
  },
];

export const leadershipEntries: LeadershipEntry[] = [
  {
    title: "Dormitory Overseer",
    organization: "Hamlyn House, Adisadel College",
    period: "January – June 2021",
    highlights: [
      "Coordinated student welfare and dormitory activities",
      "Facilitated conflict resolution and disciplinary processes",
      "Provided mentorship and accountability for younger students",
    ],
  },
  {
    title: "Open the Book / Awana Club Volunteer",
    organization: "Bible Society",
    highlights: [
      "Delivered bible storytelling sessions for primary school students",
      "Organized faith-based games and activities to support spiritual and character development",
    ],
  },
];
