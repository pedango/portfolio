"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const secondaryLinks = [
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined as string | undefined,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/peter-dango",
    href: personalInfo.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: `github.com/${personalInfo.githubUsername}`,
    href: personalInfo.github,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatedSection id="contact" aria-labelledby="contact-heading">
      <SectionHeader
        index="06 / CONTACT"
        title="Contact"
        subtitle="Open to opportunities in software engineering, app development, and educational technology"
        id="contact-heading"
      />

      <div className="grid items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="max-w-[60ch] text-[17px] leading-7 text-fg sm:text-lg sm:leading-[30px]">
            I am actively seeking roles in software engineering, full-stack
            development, app development coordination, and graduate technology
            programs. Whether you have an opportunity or just want to connect, I
            would love to hear from you.
          </p>

          <ul className="mt-6 space-y-0 sm:mt-8">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              const body = (
                <>
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle" />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle sm:text-[12px]">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm text-fg">{link.value}</p>
                  </div>
                </>
              );

              return (
                <li
                  key={link.label}
                  className="flex items-start gap-3 border-b border-border py-3.5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-0 flex-1 items-start gap-3 transition-colors hover:text-accent"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <Card className="h-full">
          <CardContent className="flex h-full flex-col justify-center p-5 sm:p-6 lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle sm:text-[12px]">
              Email
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 break-all text-xl font-semibold tracking-tight text-fg transition-colors hover:text-accent sm:mt-3 sm:text-2xl"
            >
              {personalInfo.email}
            </a>
            <p className="mt-3 text-sm leading-6 text-fg-muted">
              Prefer email? Reach me directly — I read and reply from this inbox.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:flex-1">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full sm:flex-1"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy email"}
              </Button>
            </div>

            {copied ? (
              <p className="mt-3 text-sm text-accent" role="status">
                Email address copied to clipboard.
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
