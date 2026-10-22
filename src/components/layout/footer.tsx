import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-fg">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-fg-muted">{personalInfo.location}</p>
          </div>

          <div className="flex items-center gap-3">
            <IconLink href={personalInfo.github} label="GitHub">
              <GitHubIcon />
            </IconLink>
            <IconLink href={personalInfo.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
            <IconLink
              href={`mailto:${personalInfo.email}`}
              label="Email"
              external={false}
            >
              <Mail className="h-5 w-5" />
            </IconLink>
          </div>

          <Link
            href="#hero"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>

        <p className="mt-8 font-mono text-[12px] leading-5 text-fg-subtle">
          © {currentYear} {personalInfo.name}. Built with Next.js, TypeScript &
          Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
