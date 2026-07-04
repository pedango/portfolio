"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Open to opportunities in software engineering, app development, and educational technology"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            I am actively seeking roles in software engineering, full-stack
            development, app development coordination, and graduate technology
            programs. Whether you have an opportunity or just want to connect, I
            would love to hear from you.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                rel={
                  link.label === "Email" || link.label === "Phone"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group"
              >
                <Card className="transition-all duration-300 hover:border-primary/30">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <Send className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or how I can help..."
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-center text-sm text-muted-foreground">
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
