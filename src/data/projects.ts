import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lambda-lms",
    title: "Lambda LMS",
    type: "Team Project",
    featured: true,
    description:
      "Learning Management System designed to support online learning, assignment submission, grading, course management and educational content delivery.",
    shortDescription:
      "Full-featured LMS for online learning, assignments, grading, and course management.",
    contributions: [
      "Collaborated on a Learning Management System for online learning and content delivery",
      "Contributed to system design, feature implementation, and platform improvements",
      "Worked with the team on full-stack delivery across student, parent, and admin portals",
      "Participated in testing and quality improvements across the platform",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/lambda-lms/home.png",
    screenshots: [
      {
        src: "/assets/projects/lambda-lms/home.png",
        alt: "Lambda LMS landing page with hero and call to action",
      },
      {
        src: "/assets/projects/lambda-lms/login.png",
        alt: "Sign-in page with email, password, and Google authentication",
      },
      {
        src: "/assets/projects/lambda-lms/admin-dashboard.png",
        alt: "Admin dashboard with student, examiner, and exam statistics",
      },
      {
        src: "/assets/projects/lambda-lms/admin-parents.png",
        alt: "Admin parents management table with search and add actions",
      },
      {
        src: "/assets/projects/lambda-lms/student-dashboard.png",
        alt: "Student portal dashboard with courses, exams, and results overview",
      },
      {
        src: "/assets/projects/lambda-lms/student-courses.png",
        alt: "Student courses page showing enrolled coursework",
      },
      {
        src: "/assets/projects/lambda-lms/student-assignments.png",
        alt: "Student assignments page for published coursework",
      },
      {
        src: "/assets/projects/lambda-lms/browse-exams.png",
        alt: "Exam catalog with published BECE, WASSCE, and mock exams",
      },
      {
        src: "/assets/projects/lambda-lms/my-exams.png",
        alt: "Student my exams page with enrollment status",
      },
      {
        src: "/assets/projects/lambda-lms/parent-dashboard.png",
        alt: "Family portal dashboard for linking and monitoring children",
      },
    ],
    architecture: [
      "Next.js frontend with role-based portals for students, parents, and administrators",
      "PostgreSQL database for courses, users, exams, and assignments",
      "Exam catalog and enrollment workflows for BECE, WASSCE, and mock assessments",
      "Admin dashboards for people management, exam creation, and reporting",
      "Modular component architecture for scalable feature development",
    ],
    features: [
      "Multi-role portals for students, parents, and administrators",
      "Exam catalog, enrollment, and results workflows",
      "Assignment and course management",
      "Parent account linking and family dashboard",
      "Responsive design for mobile and desktop learners",
    ],
    lessonsLearned: [
      "Designing for educators requires prioritizing clarity and workflow efficiency",
      "Team coordination is essential when building complex multi-role systems",
      "Early testing catches integration issues before they reach production",
      "Educational platforms must balance feature richness with usability",
    ],
  },
  {
    slug: "skillswap",
    title: "SkillSwap",
    type: "Team Project",
    description:
      "Peer-to-peer skill exchange platform connecting users who want to teach and learn skills.",
    shortDescription:
      "Peer-to-peer platform for teaching and learning skills with real-time communication.",
    contributions: [
      "Built a peer-to-peer skill exchange platform with real-time text messaging",
      "Developed audio and video communication features for virtual learning sessions",
      "Assisted with feature integration across the mobile application",
      "Participated in testing, debugging, and feature integration",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "REST APIs",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/skillswap/home.png",
    screenshots: [
      {
        src: "/assets/projects/skillswap/home.png",
        alt: "SkillSwap home screen with session booking and mentor discovery",
      },
      {
        src: "/assets/projects/skillswap/login.png",
        alt: "Login screen with social and email authentication",
      },
      {
        src: "/assets/projects/skillswap/matches.png",
        alt: "Mentor matches list with search and messaging",
      },
      {
        src: "/assets/projects/skillswap/profile.png",
        alt: "User profile with teaching and learning skills",
      },
      {
        src: "/assets/projects/skillswap/learning-progress.png",
        alt: "Learning progress dashboard with goals and analytics",
      },
    ],
    architecture: [
      "Flutter mobile application with Firebase-backed services",
      "Real-time messaging and mentor discovery flows",
      "User profiles with teaching and learning skill preferences",
      "Session booking, progress tracking, and community features",
      "Audio and video communication for virtual skill sessions",
    ],
    features: [
      "Mentor matching and skill discovery",
      "Real-time text messaging between users",
      "Audio and video communication for skill sessions",
      "User profiles with teach and learn preferences",
      "Learning progress tracking and session booking",
    ],
    lessonsLearned: [
      "Real-time communication features require careful error handling and fallbacks",
      "Integrating multiple communication channels demands consistent UX patterns",
      "Peer-to-peer platforms benefit from strong user matching and discovery flows",
      "Security is critical when handling user-generated content and sessions",
    ],
  },
  {
    slug: "gps-police-management",
    title: "Ghana Police Service Staff Management System",
    type: "Independent Project",
    description:
      "Secure, admin-only staff management platform for the Ghana Police Service Eastern North Region, supporting records management, messaging, and real-time communication.",
    shortDescription:
      "Ghana Police Service staff management with CRUD workflows, messaging, and LiveKit calls.",
    contributions: [
      "Built a secure personnel management system for the Ghana Police Service Eastern North Region",
      "Implemented full CRUD operations with search, filtering, and bulk data management",
      "Integrated real-time messaging with text, file sharing, and voice message support",
      "Developed video and audio calling features using LiveKit WebRTC infrastructure",
      "Designed role-restricted authentication with session management and route protection",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "LiveKit",
      "Pusher",
      "Cloudinary",
      "Upstash Redis",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/gps-police/login.png",
    screenshots: [
      {
        src: "/assets/projects/gps-police/dashboard.png",
        alt: "Regional overview dashboard with staff statistics and department filters",
      },
      {
        src: "/assets/projects/gps-police/login.png",
        alt: "Secure login page for staff officer access",
      },
      {
        src: "/assets/projects/gps-police/staffs.png",
        alt: "Staff records table with search and filter controls",
      },
      {
        src: "/assets/projects/gps-police/add-staff-personal.png",
        alt: "Add staff form for personal information and photo upload",
      },
      {
        src: "/assets/projects/gps-police/add-staff-service.png",
        alt: "Add staff form for service record and assignment details",
      },
      {
        src: "/assets/projects/gps-police/staff-officers.png",
        alt: "Staff officers directory with messaging actions",
      },
      {
        src: "/assets/projects/gps-police/messages.png",
        alt: "Secure messaging inbox for regional administrators",
      },
      {
        src: "/assets/projects/gps-police/messages-chat.png",
        alt: "Real-time chat with voice and video call options",
      },
      {
        src: "/assets/projects/gps-police/voice-call.png",
        alt: "In-app voice call interface",
      },
      {
        src: "/assets/projects/gps-police/video-call.png",
        alt: "In-app video call with screen sharing controls",
      },
    ],
    demoVideoUrl:
      "https://drive.google.com/file/d/1g36D7xpwNrGV9EE2uEeHJtoIa2yWSTsI/view?usp=sharing",
    architecture: [
      "Next.js full-stack application with API routes and protected admin workflows",
      "PostgreSQL database with Prisma for personnel and assignment records",
      "NextAuth.js authentication with role-based access control",
      "Pusher-powered real-time messaging between regional administrators",
      "LiveKit WebRTC infrastructure for in-app voice and video calls",
    ],
    features: [
      "Officer profile and record management with search and filtering",
      "Assignment tracking across divisions, districts, and stations",
      "Secure admin login with role-restricted route protection",
      "Real-time messaging with file sharing and voice notes",
      "In-app voice and video calling for staff coordination",
    ],
    lessonsLearned: [
      "Public service applications demand extra attention to data integrity and access control",
      "Independent development requires disciplined architecture planning upfront",
      "Administrative workflows should minimize steps for end users",
      "Clear database design simplifies complex reporting requirements",
    ],
  },
  {
    slug: "lambda-annotate",
    title: "Lambda Annotate",
    type: "Independent Project",
    description:
      "PDF annotation tool designed to integrate into an LMS as the examiner marking interface, with drawing, comments, audio notes, and export.",
    shortDescription:
      "PDF marking interface with annotations, audio comments, and exportable feedback.",
    contributions: [
      "Built a PDF annotation tool for LMS examiner marking workflows",
      "Implemented freehand drawing, text annotations, sticky notes, and audio-recorded comments",
      "Developed PDF export functionality that bakes annotations into a downloadable file",
      "Designed the annotation canvas and workflow management experience",
      "Delivered the application independently from architecture through implementation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Fabric.js",
      "PDF.js",
      "pdf-lib",
      "Zustand",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/lambda-annotate/home.png",
    screenshots: [
      {
        src: "/assets/projects/lambda-annotate/home.png",
        alt: "Lambda Annotate landing page with PDF import",
      },
      {
        src: "/assets/projects/lambda-annotate/annotations.png",
        alt: "PDF annotation workspace with drawing and text tools",
      },
      {
        src: "/assets/projects/lambda-annotate/comments.png",
        alt: "Comment panel with text, audio, and emoji support",
      },
      {
        src: "/assets/projects/lambda-annotate/insert-page.png",
        alt: "Page sidebar with insert page before or after options",
      },
    ],
    architecture: [
      "Next.js application with a canvas-driven annotation workspace",
      "Fabric.js and PDF.js for drawing and document rendering",
      "pdf-lib for exporting annotated PDFs with baked-in feedback",
      "Zustand for annotation tool and document state management",
      "Comment system supporting text, audio, emoji, and links",
    ],
    features: [
      "Freehand drawing, text markup, and sticky-note comments",
      "Audio-recorded feedback attached to document locations",
      "Page insertion and PDF workflow management",
      "Annotated PDF export for delivery back to learners",
      "Responsive design for efficient examiner workflows",
    ],
    lessonsLearned: [
      "Marking tools must prioritize speed and low-friction feedback capture",
      "Export fidelity matters when annotations need to travel outside the app",
      "Audio comments add valuable context for educators reviewing student work",
      "Solo projects benefit from delivering the core marking flow before extras",
    ],
  },
  {
    slug: "fhm-meet",
    title: "FHM-Meet",
    type: "Independent Project",
    status: "Ongoing",
    description:
      "Zoom and Google Meet-style video conferencing web app with instant link-based meeting access and frictionless guest join.",
    shortDescription:
      "WebRTC video conferencing app with link-based meetings and guest join — in active development.",
    contributions: [
      "Designing and building a multi-participant video conferencing web application",
      "Implementing real-time video and audio using LiveKit WebRTC infrastructure",
      "Developing mute, camera toggle, screen share, and live chat features",
      "Building a guest-join flow so invited users can enter meetings via shared link without an account",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "LiveKit",
      "Clerk",
      "Supabase",
      "Prisma",
      "Tailwind CSS",
    ],
    image: "/assets/projects/fhm-meet.svg",
    architecture: [
      "Next.js application with link-based meeting rooms",
      "LiveKit SFU for scalable multi-participant WebRTC sessions",
      "Clerk authentication for hosts with optional guest access",
      "Supabase and Prisma for meeting metadata and persistence",
      "Real-time chat alongside audio, video, and screen sharing",
    ],
    features: [
      "Instant meeting access via shareable links",
      "Multi-participant video and audio conferencing",
      "Mute, camera toggle, and screen sharing controls",
      "Live in-meeting chat",
      "Guest join without account creation",
    ],
    lessonsLearned: [
      "WebRTC UX needs clear connection states and graceful device-permission handling",
      "Guest-join flows must balance low friction with basic meeting security",
      "Screen sharing and chat add complexity to an already stateful real-time UI",
      "Ongoing development is prioritizing core meeting reliability before polish",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
