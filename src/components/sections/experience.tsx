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
    <>
      <AnimatedSection id="experience" aria-labelledby="experience-heading">
        <SectionHeader
          index="04 / EXPERIENCE"
          title="Experience"
          subtitle="Professional and educational background"
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

      <AnimatedSection id="background" aria-labelledby="background-heading">
        <SectionHeader
          index="05 / BACKGROUND"
          title="Background"
          id="background-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-fg">
              Education
            </h3>
            <p className="mt-2 mb-6 text-sm text-fg-muted">
              Academic foundation in computer science and general science
            </p>
            <Timeline
              compact
              entries={education.map((entry, index) => ({
                title: entry.title,
                organization: entry.school,
                period: entry.period,
                accent: index === 0,
              }))}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-fg">
              Leadership & Volunteering
            </h3>
            <p className="mt-2 mb-6 text-sm text-fg-muted">
              Demonstrated leadership beyond the classroom and workplace
            </p>
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
    </>
  );
}
