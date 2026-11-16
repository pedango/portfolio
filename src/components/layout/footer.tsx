import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="grid grid-cols-3 items-center gap-4">
          <p className="justify-self-start font-mono text-[13px] text-fg-muted">
            © {currentYear} {personalInfo.name}
          </p>

          <div className="flex items-center justify-self-center gap-3">
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
            className="inline-flex items-center justify-self-end gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
