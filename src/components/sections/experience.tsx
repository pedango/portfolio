import {
  education,
  experiences,
  leadershipEntries,
} from "@/data/experience";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  return (
    <AnimatedSection id="experience" aria-labelledby="experience-heading">
      <SectionHeader
        index="03 / EXPERIENCE"
        title="Experience"
        subtitle="Roles and responsibilities"
        id="experience-heading"
      />

      <Timeline
        entries={experiences.map((exp, index) => ({
          title: exp.title,
          organization: exp.company,
          period: exp.period,
          bullets: [...exp.responsibilities],
          accent: index === 0,
        }))}
      />
    </AnimatedSection>
  );
}

export function EducationLeadership() {
  return (
    <AnimatedSection id="education" aria-labelledby="education-heading">
      <SectionHeader
        index="04 / EDUCATION"
        title="Education & leadership"
        id="education-heading"
      />

      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="mb-6 text-base font-semibold leading-7 text-fg">Education</h3>
          <Timeline
            entries={education.map((entry, index) => ({
              title: entry.title,
              organization: entry.school,
              period: entry.period,
              accent: index === 0,
            }))}
          />
        </div>

        <div>
          <h3 className="mb-6 text-base font-semibold leading-7 text-fg">Leadership</h3>
          <Timeline
            entries={leadershipEntries.map((entry, index) => ({
              title: entry.title,
              organization: entry.organization,
              period: entry.period,
              bullets: [...entry.highlights],
              accent: index === 0,
            }))}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
