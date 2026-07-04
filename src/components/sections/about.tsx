import Image from "next/image";
import { aboutContent, personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <AnimatedSection id="about" className="bg-muted/30">
      <SectionHeading
        title="About Me"
        subtitle="Computer Science graduate passionate about building software that makes a difference"
      />

      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-5">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-stretch gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 shadow-lg">
            <Image
              src={personalInfo.portraitPath}
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-semibold">Core Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {aboutContent.highlights.map((highlight) => (
                <Badge key={highlight} variant="default">
                  {highlight}
                </Badge>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border/30 bg-background/50 p-5">
                <p className="text-sm font-medium text-foreground">
                  Security & Quality
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Experienced with Snyk for vulnerability scanning and Apache
                  JMeter for performance testing.
                </p>
              </div>
              <div className="rounded-lg border border-border/30 bg-background/50 p-5">
                <p className="text-sm font-medium text-foreground">
                  Education Focus
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Teaching experience and EdTech project work inform user-centered
                  design decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
