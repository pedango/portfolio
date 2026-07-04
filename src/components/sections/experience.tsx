import { Briefcase, GraduationCap } from "lucide-react";
import {
  education,
  experiences,
  leadershipEntries,
} from "@/data/experience";
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
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center gap-4">
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
            <CardContent className="px-6 pb-6 pt-4">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in computer science and general science"
          className="mb-8"
        />

        <div className="space-y-6">
          {education.map((entry) => (
            <Card
              key={`${entry.school}-${entry.title}`}
              className="transition-all duration-300 hover:border-primary/30"
            >
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{entry.title}</CardTitle>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {entry.school}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeading
          title="Leadership & Volunteering"
          subtitle="Demonstrated leadership beyond the classroom and workplace"
          className="mb-8"
        />

        <div className="space-y-6">
          {leadershipEntries.map((entry) => (
            <Card
              key={`${entry.organization}-${entry.title}`}
              className="border-primary/20 bg-primary/5"
            >
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{entry.title}</CardTitle>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {entry.organization}
                    </p>
                    {entry.period && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.period}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-4">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
