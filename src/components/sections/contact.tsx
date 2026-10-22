"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "peter-dango",
    href: personalInfo.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: personalInfo.githubUsername,
    href: personalInfo.github,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AnimatedSection id="contact" aria-labelledby="contact-heading">
      <SectionHeader
        index="07 / CONTACT"
        title="Get In Touch"
        subtitle="Open to opportunities in software engineering, app development, and educational technology"
        id="contact-heading"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="max-w-[64ch] text-lg leading-[30px] text-fg">
            I am actively seeking roles in software engineering, full-stack
            development, app development coordination, and graduate technology
            programs. Whether you have an opportunity or just want to connect, I
            would love to hear from you.
          </p>

          <ul className="mt-8 space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.label === "Email";
              const content = (
                <>
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle" />
                  <div className="min-w-0">
                    <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                      {link.label}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-fg",
                        isEmail && "text-xl font-medium"
                      )}
                    >
                      {link.value}
                    </p>
                  </div>
                </>
              );

              return (
                <li
                  key={link.label}
                  className="flex items-start justify-between gap-3 border-b border-border pb-4 last:border-b-0"
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      target={
                        link.label === "Email" || link.label === "Phone"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        link.label === "Email" || link.label === "Phone"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex min-w-0 flex-1 items-start gap-3 transition-colors hover:text-accent"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      {content}
                    </div>
                  )}
                  {isEmail ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={copyEmail}
                      aria-label={copied ? "Email copied" : "Copy email"}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  ) : null}
                </li>
              );
            })}
          </ul>
          {copied ? (
            <p className="mt-3 text-sm text-accent" role="status">
              Copied
            </p>
          ) : null}
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <Send className="mb-4 h-10 w-10 text-accent" />
                <h3 className="text-xl font-semibold">Thank you!</h3>
                <p className="mt-2 max-w-sm text-fg-muted">
                  Your email app should open with the message addressed to{" "}
                  {personalInfo.email}. I will reply from my inbox.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or how I can help..."
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Opening mail…" : "Send Message"}
                </Button>
                <p className="text-center font-mono text-[12px] leading-5 text-fg-subtle">
                  This opens your email app and sends the message to{" "}
                  {personalInfo.email}. I read and reply from that inbox — there
                  is no separate dashboard on this site.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
