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
        index="04 / EXPERIENCE"
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

      <div
        id="background"
        className="mt-14 border-t border-border pt-12 sm:mt-16 sm:pt-14"
        aria-labelledby="background-heading"
      >
        <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-fg-subtle sm:text-[12px]">
          Background
        </p>
        <h3
          id="background-heading"
          className="mt-2 text-[24px] font-semibold leading-8 tracking-[-0.02em] text-fg sm:mt-3 sm:text-[28px] sm:leading-9"
        >
          Education & leadership
        </h3>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h4 className="text-base font-semibold tracking-tight text-fg">
              Education
            </h4>
            <p className="mt-1.5 mb-5 text-sm leading-6 text-fg-muted">
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
            <h4 className="text-base font-semibold tracking-tight text-fg">
              Leadership & Volunteering
            </h4>
            <p className="mt-1.5 mb-5 text-sm leading-6 text-fg-muted">
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
      </div>
    </AnimatedSection>
  );
}
