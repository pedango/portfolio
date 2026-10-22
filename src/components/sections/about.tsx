import {
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";
import { aboutContent } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const strengthIcons = [
  ClipboardList,
  Users,
  Handshake,
  FileText,
  Lightbulb,
  CheckCircle2,
];

export function About() {
  const [lead, ...rest] = aboutContent.paragraphs;

  return (
    <AnimatedSection id="about" aria-labelledby="about-heading">
      <SectionHeader
        index="01 / ABOUT"
        title="About Me"
        subtitle="Computer Science graduate building web apps, EdTech, and community-impact systems"
        id="about-heading"
      />

      <div className="grid items-start gap-10 lg:grid-cols-[7fr_5fr] lg:gap-14">
        <div className="space-y-5">
          <p className="max-w-[64ch] text-lg leading-[30px] text-fg">{lead}</p>
          {rest.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="max-w-[64ch] text-base leading-7 text-fg-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4 lg:sticky lg:top-24">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                Core Strengths
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {aboutContent.highlights.map((highlight, index) => {
                  const Icon = strengthIcons[index] ?? CheckCircle2;
                  return (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-fg"
                    >
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  Focus
                </p>
                <h3 className="mt-2 text-base font-semibold text-fg">
                  Security & Quality
                </h3>
                <p className="mt-2 text-sm leading-[22px] text-fg-muted">
                  Working knowledge of JMeter for performance testing, Playwright
                  for end-to-end testing, and Snyk for vulnerability assessment.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-subtle">
                  Focus
                </p>
                <h3 className="mt-2 text-base font-semibold text-fg">
                  AI Proficiency
                </h3>
                <p className="mt-2 text-sm leading-[22px] text-fg-muted">
                  Proficient with modern AI tools across development workflows —
                  prompt engineering for code generation, automated testing, and
                  image creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
