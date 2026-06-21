import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {personalInfo.name}. Built with Next.js, TypeScript &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
