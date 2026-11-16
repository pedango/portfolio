import { aboutContent } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Skills } from "@/components/sections/skills";

const focusAreas = [
  "Production web applications",
  "Role-based systems",
  "Real-time video and PDF tooling",
  "Community-impact products",
];

export function About() {
  const summary = aboutContent.paragraphs.join(" ");

  return (
    <AnimatedSection id="about" aria-labelledby="about-heading">
      <SectionHeader index="02 / ABOUT" title="About" id="about-heading" />

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <p className="max-w-prose text-base leading-7 text-fg-muted">{summary}</p>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-mono text-[13px] uppercase tracking-widest text-fg-muted">
              Focus
            </h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-border pl-3 text-base leading-7 text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-[13px] uppercase tracking-widest text-fg-muted">
          Stack
        </h3>
        <div className="mt-8">
          <Skills />
        </div>
      </div>
    </AnimatedSection>
  );
}
