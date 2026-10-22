import type { Project } from "@/types";

/** Display order: GPS → MWC → AER → FHM-Meet → Digi-Receipt → Lambda LMS → Lambda Annotate */
export const projects: Project[] = [
  {
    slug: "gps-police-management",
    title: "Ghana Police Service Staff Management System",
    type: "Independent Project",
    featured: true,
    role: "Full-Stack Developer",
    year: "2025",
    metrics: [
      { value: "128", label: "Staff managed" },
      { value: "3", label: "System admins" },
      { value: "Realtime", label: "Calls, voice notes & docs" },
    ],
    description:
      "Secure, admin-only staff management platform for the Ghana Police Service Eastern North Region, supporting records management, messaging, and real-time communication.",
    shortDescription:
      "Ghana Police Service staff management with CRUD workflows, messaging, and LiveKit calls.",
    problem:
      "Regional police administrators needed a secure, centralized way to manage personnel records and coordinate between officers, but relied on fragmented tools without proper access control, search, or real-time communication.",
    solution:
      "Built an admin-only web platform with full CRUD for personnel records, role-restricted authentication, real-time messaging (text, files, voice notes), and LiveKit-powered video/audio calling for Eastern North Region staff coordination.",
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
    githubUrl: "https://github.com/pedango/gps-staff-management-system",
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
    slug: "mwc-member-registry",
    title: "MWC Member Registry",
    type: "Independent Project",
    featured: true,
    role: "Full-Stack Developer",
    year: "2025",
    metrics: [
      { value: "600+", label: "Members managed" },
      { value: "5", label: "System admins" },
      { value: "Live", label: "QR Sunday attendance" },
    ],
    description:
      "Admin-only church member management system for Mamprobi Worship Center (PIWC branch assembly), covering membership records, Sunday attendance with QR check-in, bulk import, and audit logging.",
    shortDescription:
      "Church member registry with CRUD, webcam photos, QR attendance, bulk import, and audit logs.",
    problem:
      "Mamprobi Worship Center needed a secure, centralized way for administrators to manage member records across assemblies, track Sunday attendance, and keep an audit trail — without spreadsheets or paper registers that are hard to search, export, or reconcile.",
    solution:
      "Built an admin-only web platform with member CRUD (including live webcam photo capture and duplicate-name detection), assembly filters and paginated search, spreadsheet bulk import, PDF/Excel export, Sunday attendance via door QR codes, and full audit logging for logins and exports.",
    contributions: [
      "Designed and built an admin-only church member management system for Mamprobi Worship Center (PIWC branch assembly)",
      "Implemented member CRUD with live webcam photo capture, duplicate-name detection, assembly filter views, and paginated search",
      "Built spreadsheet bulk import with template download, single-member PDF/Excel export, and full audit logging for logins and exports",
      "Added Sunday attendance workflows with door QR codes so members can open the check-in form on their phone",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL (Neon)",
      "NextAuth.js v5",
      "Cloudinary",
      "SheetJS",
      "pdf-lib",
      "Upstash Redis",
      "Tailwind CSS",
    ],
    liveUrl: "https://mwc-member-registry.vercel.app",
    githubUrl: "https://github.com/pedango/mwc-member-registry",
    image: "/assets/projects/mwc-member-registry/dashboard.png",
    screenshots: [
      {
        src: "/assets/projects/mwc-member-registry/dashboard.png",
        alt: "MWC dashboard with membership stats, recent activity, and quick actions",
      },
      {
        src: "/assets/projects/mwc-member-registry/login.jpg",
        alt: "MWC Member Registry sign-in page with church branding",
      },
      {
        src: "/assets/projects/mwc-member-registry/members.png",
        alt: "Members table with search, assembly, status, and row actions",
      },
      {
        src: "/assets/projects/mwc-member-registry/attendance.png",
        alt: "Sunday attendance page with present counts and door QR code",
      },
    ],
    architecture: [
      "Next.js full-stack application with protected admin workflows",
      "PostgreSQL on Neon with Prisma for members, assemblies, attendance, and audit events",
      "NextAuth.js v5 authentication with role-restricted administrator access",
      "Cloudinary for member photo storage from webcam capture uploads",
      "SheetJS and pdf-lib for spreadsheet import/export and PDF member exports",
      "Upstash Redis for session or rate-limit support in production",
    ],
    features: [
      "Member CRUD with live webcam photo capture",
      "Duplicate-name detection and assembly filter views",
      "Paginated search across name, contact, and location",
      "Spreadsheet bulk import with downloadable template",
      "Single-member PDF and Excel export",
      "Sunday attendance with door QR check-in",
      "Admin management and full audit logging for logins and exports",
    ],
    lessonsLearned: [
      "Church admin tools need clear role boundaries and an auditable trail of sensitive actions",
      "Bulk import succeeds when template download and validation catch bad rows early",
      "QR check-in removes friction for door volunteers compared with manual roll call",
      "Webcam capture must degrade gracefully when devices or permissions are unavailable",
    ],
  },
  {
    slug: "aer",
    title: "AER Website",
    type: "Team Project",
    role: "Full-Stack Developer",
    year: "2026",
    description:
      "Modern multi-page website for Advanced Economic Research, a consulting and research firm focused on agrifood systems, policy design, and climate resilience.",
    shortDescription:
      "Content-driven marketing site for Advanced Economic Research with services, portfolio, case studies, and insights.",
    problem:
      "Advanced Economic Research needed a professional web presence that presented services, portfolio partners, case studies, and research insights clearly — with a structure that the team could expand as new publications and engagements ship.",
    solution:
      "Designed and built a scalable, content-driven Next.js site with dedicated pages for services, portfolio, case studies, insights, team, and contact, plus reusable components, motion, and SEO-friendly metadata for stronger brand presence.",
    contributions: [
      "Designed and built a modern, multi-page website for Advanced Economic Research focused on agrifood systems, policy design, and climate resilience",
      "Created a scalable, content-driven architecture with dedicated pages for services, portfolio, case studies, insights, team, and contact",
      "Implemented a responsive front-end with reusable components, animated sections, and SEO-friendly metadata",
      "Built structured content models for projects, services, and insights to support efficient updates and future expansion",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://www.aer.africa",
    image: "/assets/projects/aer/home.png",
    screenshots: [
      {
        src: "/assets/projects/aer/home.png",
        alt: "AER homepage hero with economic research headline and call to action",
      },
      {
        src: "/assets/projects/aer/services.png",
        alt: "AER services page introducing economic interventions capabilities",
      },
      {
        src: "/assets/projects/aer/about.png",
        alt: "AER about page overview of the firm",
      },
      {
        src: "/assets/projects/aer/case-studies.png",
        alt: "AER case studies showcase of research engagements",
      },
      {
        src: "/assets/projects/aer/insights.png",
        alt: "AER insights and research publications listing",
      },
      {
        src: "/assets/projects/aer/team.png",
        alt: "AER team page introducing researchers and consultants",
      },
    ],
    architecture: [
      "Next.js App Router site with route groups for marketing pages",
      "Structured content models for services, portfolio, case studies, and insights",
      "Reusable layout, hero, and section components shared across pages",
      "Framer Motion for section and gallery motion",
      "SEO metadata, sitemap, and robots configuration for discoverability",
      "Deployed on Vercel at aer.africa",
    ],
    features: [
      "Multi-page structure for services, portfolio, case studies, insights, team, and contact",
      "Responsive design with reusable UI components",
      "Animated sections and image-rich showcases",
      "SEO-friendly metadata and canonical URLs",
      "Content models that support ongoing research and publication updates",
    ],
    lessonsLearned: [
      "Consulting brand sites need a clear information architecture before visual polish",
      "Structured content models keep case studies and insights maintainable as the firm grows",
      "Motion should support hierarchy without slowing first contentful paint",
      "Strong SEO defaults matter when the primary goal is professional discovery",
    ],
  },
  {
    slug: "fhm-meet",
    title: "FHM-Meet",
    type: "Independent Project",
    role: "Full-Stack Developer",
    year: "2026",
    description:
      "Zoom and Google Meet-style video conferencing web app for Flare Healing Ministries, with instant link-based meeting access and frictionless guest join.",
    shortDescription:
      "WebRTC video conferencing app with link-based meetings, screen share, live chat, and guest join.",
    problem:
      "Hosting virtual ministry meetings through third-party tools meant limited control, awkward guest onboarding, and features that were not tailored to how Flare Healing Ministries invites and runs sessions.",
    solution:
      "Built a dedicated conferencing web app with instant shareable meeting links, LiveKit-powered multi-participant video/audio, screen share, live chat, and a guest-join flow so invitees can enter without creating an account.",
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
    githubUrl: "https://github.com/pedango/fhm-meet",
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
    role: "Full-Stack Developer",
    year: "2026",
    description:
      "Web app for recording donations at any event that issues receipts — funerals, fundraising drives, church offerings, and similar occasions — then generating unique digital receipts and maintaining shared donor records.",
    shortDescription:
      "Digital donation receipt system for events: record gifts, issue PDF/text receipts, track totals, and export donor lists.",
    problem:
      "Issuing physical receipts for donations at funerals, fundraisers, and similar events is costly, slow, and error-prone — organizers burn through printed receipt books, handwriting slows the queue, and paper records are hard to reconcile after the event.",
    solution:
      "Built a web app that records donor name, phone, amount, and reason, generates a unique digital receipt instantly (PDF and plain text), and keeps a shared donor list with running totals and CSV export so the organizing party has accurate records without printed books.",
    contributions: [
      "Identified that issuing physical receipts for donations at funerals and similar events is costly, slow, and error-prone, and built a digital system to replace it",
      "Built a web app to record donor name, phone number, amount, and reason, generating a unique digital receipt instantly for any donation-driven event",
      "Implemented downloadable PDF and plain-text receipts, plus a shared, real-time donor list with running totals and CSV export for organizers' records",
      "Deployed on Vercel with a hosted Postgres database so the system runs reliably from a phone or tablet with no printed receipt books required",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "jsPDF",
    ],
    githubUrl: "https://github.com/pedango/digi-receipt",
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
      "Next.js application with donation recording, donor list, and event configuration workflows",
      "PostgreSQL (Vercel Postgres) for shared donation records across devices",
      "jsPDF for downloadable certificate-style PDF receipts",
      "Plain-text receipt download alongside PDF for simple sharing",
      "Running totals and CSV export for post-event reconciliation",
    ],
    features: [
      "Record donations with donor name, phone, amount, and optional reason",
      "Instant unique digital receipts with PDF and text download",
      "Shared donor list with running totals for any donation event",
      "CSV export for organizer records",
      "Configurable event name and date on every receipt",
      "Deployed on Vercel for field use from a single device without printed receipt books",
    ],
    lessonsLearned: [
      "Event organizers need a short path from recording a gift to handing over a receipt",
      "Exportable donor records matter as much as the receipt itself for reconciliation",
      "Hosted Postgres keeps a single shared source of truth when multiple people assist",
      "Replacing paper workflows succeeds when the digital path is faster under event pressure",
    ],
  },
  {
    slug: "lambda-lms",
    title: "Lambda LMS",
    type: "Team Project",
    role: "Full-Stack Developer",
    year: "2025",
    description:
      "Learning Management System designed to support online learning, assignment submission, grading, course management and educational content delivery.",
    shortDescription:
      "Full-featured LMS for online learning, assignments, grading, and course management.",
    problem:
      "Students, parents, and administrators needed a single platform for online learning, coursework, exams, and progress tracking — workflows that were scattered or hard to manage without a dedicated LMS.",
    solution:
      "Collaborated on a multi-role Learning Management System with portals for students, parents, and admins covering courses, assignments, exam catalogs, enrollment, and results.",
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
    role: "Full-Stack Developer",
    year: "2025",
    description:
      "PDF annotation tool designed to integrate into an LMS as the examiner marking interface, with drawing, comments, audio notes, and export.",
    shortDescription:
      "PDF marking interface with annotations, audio comments, and exportable feedback.",
    problem:
      "Examiners marking student work needed a digital way to draw, comment, and leave audio feedback on PDFs — and then return annotated files — rather than relying on paper or tools that lacked a proper marking workflow.",
    solution:
      "Built a PDF annotation tool for LMS examiner marking with freehand drawing, text and sticky notes, audio-recorded comments, and export that bakes all annotations into a downloadable PDF.",
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
    githubUrl: "https://github.com/pedango/Lambda-Annotate",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
