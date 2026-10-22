import { aboutContent } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  "Full-stack web applications",
  "Educational technology platforms",
  "Public-service and community systems",
  "Realtime communication (WebRTC)",
];

export function About() {
  const [lead, ...rest] = aboutContent.paragraphs;

  return (
    <AnimatedSection id="about" aria-labelledby="about-heading">
      <SectionHeader
        index="01 / ABOUT"
        title="Profile"
        subtitle="Computer Science graduate building web apps, EdTech, and community-impact systems"
        id="about-heading"
      />

      <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <p className="max-w-[64ch] text-[17px] leading-7 text-fg sm:text-lg sm:leading-[30px]">
            {lead}
          </p>
          {rest.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="max-w-[64ch] text-[15px] leading-6 text-fg-muted sm:text-base sm:leading-7"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-24">
          <Card>
            <CardContent className="p-5 sm:p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle sm:text-[12px]">
                Focus
              </h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-border pl-3 text-sm leading-6 text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 sm:p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-subtle sm:text-[12px]">
                Quality
              </h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                Working knowledge of JMeter for performance testing, Playwright
                for end-to-end testing, and Snyk for vulnerability assessment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
