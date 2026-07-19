import { PawPrint, Scissors } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeInStagger, FadeIn } from "@/components/motion/fade-in";

type TeamMember = { name: string; title: string; bio: string; icon: typeof PawPrint };

const TEAM: TeamMember[] = [
  {
    name: "Johanna Vasquez",
    title: "Founder & Lead Groomer",
    bio: "Passionate about making every pup feel their most fabulous.",
    icon: PawPrint,
  },
  {
    name: "[Groomer Name]",
    title: "Senior Groomer",
    bio: "Specializing in breed-specific cuts with a gentle touch.",
    icon: Scissors,
  },
  {
    name: "[Groomer Name]",
    title: "Grooming Assistant",
    bio: "Every dog deserves to feel loved and pampered.",
    icon: PawPrint,
  },
];

export function MeetTheTeam() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <SectionHeading eyebrow="The Faces Behind The Fabulous" title="Meet the Team" align="center" className="mx-auto" />

      <FadeInStagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {TEAM.map((member, i) => {
          const Icon = member.icon;
          return (
            <FadeIn
              key={`${member.name}-${i}`}
              delay={i * 0.1}
              className="group rounded-2xl border border-sand/70 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a227]/50 hover:shadow-xl hover:shadow-[#c9a227]/10"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blush via-cream to-[#f2dfa8] ring-1 ring-[#c9a227]/30 transition-transform duration-500 ease-out group-hover:scale-105">
                <Icon className="h-8 w-8 text-[#c9a227]" strokeWidth={1.4} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{member.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-bougie">{member.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">{member.bio}</p>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </section>
  );
}
