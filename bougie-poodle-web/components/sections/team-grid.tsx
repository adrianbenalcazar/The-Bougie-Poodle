import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";

type TeamMember = { initials: string; name: string; role: string; bio: string };

const TEAM: TeamMember[] = [
  {
    initials: "MB",
    name: "Marisol Bianchi",
    role: "Founder & Master Groomer",
    bio: "18 years behind the shears, trained in breed-standard styling across the Northeast's top show circuits.",
  },
  {
    initials: "JT",
    name: "Jules Tanaka",
    role: "Feline Specialist",
    bio: "Fear-free certified, with a rare gift for calming even the most reluctant cats into the tub.",
  },
  {
    initials: "RD",
    name: "Renata Diallo",
    role: "Senior Canine Stylist",
    bio: "Obsessed with the details — precision scissoring, hand-finishing, and the perfect final bow.",
  },
  {
    initials: "OC",
    name: "Oscar Callahan",
    role: "Coat Care & Deshedding Lead",
    bio: "Our resident coat-health expert, trusted with every double-coat and dematting case that walks in.",
  },
];

export function TeamGrid() {
  return (
    <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((member) => (
        <FadeIn key={member.name} className="rounded-2xl border border-sand/70 bg-white p-7 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink font-display text-lg text-cream">
            {member.initials}
          </div>
          <h3 className="mt-4 font-display text-lg text-ink">{member.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-bougie">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone">{member.bio}</p>
        </FadeIn>
      ))}
    </FadeInStagger>
  );
}
