import type { Project } from "@/types";

/** Order matches the CV: FHM-Meet → Digi-Receipt → GPS → Lambda LMS → Lambda Annotate → SkillSwap */
export const projects: Project[] = [
  {
    slug: "fhm-meet",
    title: "FHM-Meet",
    type: "Independent Project",
    featured: true,
    description:
      "Zoom and Google Meet-style video conferencing web app for Flare Healing Ministries, with instant link-based meeting access and frictionless guest join.",
    shortDescription:
      "WebRTC video conferencing app with link-based meetings, screen share, live chat, and guest join.",
    contributions: [
      "Designed and built a Zoom/Google Meet-style video conferencing web app with instant link-based meeting access",
      "Implemented real-time multi-participant video/audio using WebRTC (LiveKit SFU), with mute, camera toggle, screen share, and live chat",
      "Built a frictionless guest-join flow allowing invited users to enter meetings instantly via shared link without account creation",
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
    image: "/assets/projects/fhm-meet/home.png",
    demoVideoUrl:
      "https://drive.google.com/file/d/1uPEQgcduyhoFLvDkzAEc0MngT0G9Gf0v/view?usp=drivesdk",
    screenshots: [
      {
        src: "/assets/projects/fhm-meet/home.png",
        alt: "FHM-Meet dashboard with new meeting, join, and recent meetings",
      },
      {
        src: "/assets/projects/fhm-meet/login.png",
        alt: "Sign in to Flare Healing Ministries with Google, GitHub, or email via Clerk",
      },
      {
        src: "/assets/projects/fhm-meet/creatingMeeting.png",
        alt: "Start a new meeting modal with title input and create and join action",
      },
      {
        src: "/assets/projects/fhm-meet/meetingCreated.png",
        alt: "Pre-join lobby with camera preview and Join Now button",
      },
      {
        src: "/assets/projects/fhm-meet/participants.png",
        alt: "In-call view with host and guest participants panel",
      },
      {
        src: "/assets/projects/fhm-meet/meetingChat.png",
        alt: "In-call messages sidebar during an active video meeting",
      },
      {
        src: "/assets/projects/fhm-meet/screenSharing.png",
        alt: "Browser screen sharing active to an FHM-Meet session",
      },
    ],
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
      "Reliable SFU-backed media and clear lobby flows matter more than feature breadth",
    ],
  },
  {
    slug: "digi-receipt",
    title: "Digi-Receipt System",
    type: "Independent Project",
    description:
      "Digital system that replaces costly, slow, and error-prone physical receipts for condolence donations at funerals and similar events, with instant e-receipts and shared donor records.",
    shortDescription:
      "Usher-facing donation e-receipts with PDF/text download, live donor totals, and CSV export.",
    contributions: [
      "Identified that issuing physical receipts for condolence donations at funerals and similar events is costly, slow, and error-prone, and built a digital system to replace it",
      "Built an usher-facing web app to record donor name, phone number, amount, and reason, generating a unique digital receipt instantly",
      "Implemented downloadable PDF and plain-text receipts, plus a shared, real-time donor list with running totals and CSV export for the family's records",
      "Deployed on Vercel with a hosted Postgres database so the system runs reliably from a single device with no printed receipt books required",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "jsPDF",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/digi-receipt/home.png",
    demoVideoUrl:
      "https://drive.google.com/file/d/12k-U_V8xOyYVy5vHmdtttl-gYBQWsfzR/view?usp=drivesdk",
    screenshots: [
      {
        src: "/assets/projects/digi-receipt/home.png",
        alt: "Digi-Receipt home with Record Donation, Donor List, and Event Details tabs",
      },
      {
        src: "/assets/projects/digi-receipt/recordDonation.png",
        alt: "Record a donation form with donor name, phone, amount, and reason fields",
      },
      {
        src: "/assets/projects/digi-receipt/recordDonation2.png",
        alt: "Filled donation form ready to save and generate a receipt",
      },
      {
        src: "/assets/projects/digi-receipt/generatedReceipt1.png",
        alt: "Generated certificate of condolence donation with PDF and text download",
      },
      {
        src: "/assets/projects/digi-receipt/generatedReceipt2.png",
        alt: "Digital receipt card showing donor details and amount donated",
      },
      {
        src: "/assets/projects/digi-receipt/donorlist1.png",
        alt: "Donor list empty state with donation totals and CSV export",
      },
      {
        src: "/assets/projects/digi-receipt/donorList2.png",
        alt: "Donor list table with receipt number, amount, and delete actions",
      },
      {
        src: "/assets/projects/digi-receipt/donorList3.png",
        alt: "Donor list showing search and recorded donation entries",
      },
      {
        src: "/assets/projects/digi-receipt/eventDetails.png",
        alt: "Event details form for name and date shown on generated receipts",
      },
    ],
    architecture: [
      "Next.js application with usher-facing donation, donor list, and event workflows",
      "PostgreSQL (Vercel Postgres) for shared donation records across devices",
      "jsPDF for downloadable certificate-style PDF receipts",
      "Plain-text receipt download alongside PDF for simple sharing",
      "Running totals and CSV export for family reconciliation after the event",
    ],
    features: [
      "Record donations with donor name, phone, amount, and optional reason",
      "Instant unique digital receipts with PDF and text download",
      "Shared real-time donor list with running totals",
      "CSV export for family records",
      "Configurable event name and date on every receipt",
      "Deployed on Vercel for single-device field use without printed receipt books",
    ],
    lessonsLearned: [
      "Event organizers need a short path from recording a gift to handing over a receipt",
      "Exportable donor records matter as much as the receipt itself for reconciliation",
      "Hosted Postgres keeps a single shared source of truth when multiple ushers may assist",
      "Replacing paper workflows succeeds when the digital path is faster under event pressure",
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
      "Built a secure, admin-only personnel management system for the Ghana Police Service Eastern North Region",
      "Implemented full CRUD operations for police personnel records including search, filtering, and bulk data management",
      "Integrated real-time direct messaging between administrators with text, file sharing, and voice message support",
      "Developed video and audio calling features using LiveKit WebRTC infrastructure",
      "Designed and deployed a role-restricted authentication system with session management and route protection",
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
    slug: "lambda-lms",
    title: "Lambda LMS",
    type: "Team Project",
    description:
      "Learning Management System designed to support online learning, assignment submission, grading, course management and educational content delivery.",
    shortDescription:
      "Full-featured LMS for online learning, assignments, grading, and course management.",
    contributions: [
      "Collaborated on a Learning Management System for online learning and content delivery",
      "Contributed to system design, feature implementation, and platform improvements",
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
    slug: "lambda-annotate",
    title: "Lambda Annotate",
    type: "Independent Project",
    description:
      "PDF annotation tool designed to integrate into an LMS as the examiner marking interface, with drawing, comments, audio notes, and export.",
    shortDescription:
      "PDF marking interface with annotations, audio comments, and exportable feedback.",
    contributions: [
      "Built a PDF annotation tool designed to integrate into an LMS as the examiner marking interface",
      "Implemented freehand drawing, text annotations, sticky notes, and audio-recorded comments",
      "Developed PDF export functionality that bakes all annotations into a downloadable PDF file",
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
      "Participated in testing, debugging, and feature integration",
    ],
    technologies: [
      "Flutter",
      "Firebase",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
