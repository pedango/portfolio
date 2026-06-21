import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, leadership } from "@/data/experience";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional and educational background"
      />

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card
            key={`${exp.company}-${exp.title}`}
            className="transition-all duration-300 hover:border-primary/30"
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {exp.title.includes("Teacher") ? (
                    <GraduationCap className="h-6 w-6" />
                  ) : (
                    <Briefcase className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          title="Leadership"
          subtitle="Demonstrated leadership beyond the classroom and workplace"
        />

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">{leadership.title}</CardTitle>
                <p className="mt-1 text-sm font-medium text-primary">
                  {leadership.organization}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
              {leadership.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
