import { personalInfo } from "@/data/personal";

export const siteConfig = {
  name: personalInfo.name,
  title: `${personalInfo.name} | Full Stack Developer Portfolio`,
  description:
    "Portfolio of Dango Edem Peter — Computer Science Graduate and Full Stack Developer specializing in educational technology, secure web applications, and community-focused software solutions.",
  url: personalInfo.siteUrl,
  ogImage: "/assets/og-image.svg",
  keywords: [
    "Dango Edem Peter",
    "Full Stack Developer",
    "Computer Science Graduate",
    "Educational Technology",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "App Development Coordinator",
    "Ghana Developer",
    "Accra",
    "Lambda LMS",
    "SkillSwap",
  ],
  author: personalInfo.name,
  twitterHandle: "@pedango",
} as const;

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Full Stack Developer",
    description: personalInfo.tagline,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    url: siteConfig.url,
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Educational Technology",
      "Full Stack Development",
    ],
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };
}
