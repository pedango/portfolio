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
      "Participated in system design and architecture planning",
      "Developed core platform features for course and content delivery",
      "Collaborated with team members on full-stack implementation",
      "Contributed to testing and quality improvements across the platform",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/lambda-lms.svg",
    architecture: [
      "Next.js frontend with server-side rendering for performance",
      "Node.js REST API layer handling business logic and authentication",
      "MySQL relational database for courses, users, and assignments",
      "Role-based access control for students, instructors, and administrators",
      "Modular component architecture for scalable feature development",
    ],
    features: [
      "Course creation and content delivery",
      "Assignment submission and grading workflows",
      "User enrollment and progress tracking",
      "Instructor dashboards for class management",
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
      "Built text messaging functionality for user communication",
      "Implemented audio communication features",
      "Developed video communication capabilities",
      "Assisted with feature integration across the platform",
      "Participated in testing and debugging sessions",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/skillswap.svg",
    architecture: [
      "React and Next.js frontend with real-time UI updates",
      "Node.js backend with RESTful API endpoints",
      "PostgreSQL database for user profiles and skill listings",
      "JWT-based authentication for secure session management",
      "WebRTC integration for audio and video communication",
    ],
    features: [
      "Skill listing and discovery",
      "Real-time text messaging between users",
      "Audio and video communication for skill sessions",
      "User profiles with teach/learn preferences",
      "Secure authentication and authorization",
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
    title: "GPS Police Personnel Management System",
    type: "Independent Project",
    description:
      "Personnel management platform designed for managing police officer records, assignments and administrative processes.",
    shortDescription:
      "End-to-end personnel management system for police officer records and assignments.",
    contributions: [
      "Designed and built the entire application independently",
      "Architected the database schema for personnel records",
      "Developed both frontend and backend systems",
      "Implemented authentication and role-based authorization",
      "Built administrative workflows for assignments and reporting",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/gps-police.svg",
    architecture: [
      "Next.js full-stack application with API routes",
      "PostgreSQL database with normalized personnel and assignment tables",
      "JWT authentication with role-based access control",
      "Administrative dashboard for record management",
      "Audit-friendly data structures for public service compliance",
    ],
    features: [
      "Officer profile and record management",
      "Assignment tracking and scheduling",
      "Administrative workflow automation",
      "Secure login with role-based permissions",
      "Search and filter across personnel records",
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
      "Web-based annotation platform for structured annotation workflows and data management.",
    shortDescription:
      "Structured annotation platform with workflow management and data export.",
    contributions: [
      "Sole developer responsible for the entire application",
      "Designed system architecture and data models",
      "Built intuitive annotation interfaces",
      "Implemented backend functionality and API endpoints",
      "Developed workflow management features for annotation pipelines",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/pedango",
    image: "/assets/projects/lambda-annotate.svg",
    architecture: [
      "Next.js application with server components for data-heavy views",
      "PostgreSQL for annotation data and workflow state",
      "Component-driven annotation canvas with structured schemas",
      "Workflow engine for multi-stage annotation pipelines",
      "Export utilities for annotated datasets",
    ],
    features: [
      "Structured annotation interfaces",
      "Workflow management for annotation pipelines",
      "Data validation and quality checks",
      "Export and data management tools",
      "Responsive design for annotator productivity",
    ],
    lessonsLearned: [
      "Annotation tools must prioritize speed and keyboard-friendly interactions",
      "Workflow flexibility is key when requirements evolve during projects",
      "Data validation at input time prevents costly downstream corrections",
      "Solo projects benefit from incremental delivery of core features first",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
