import { PawPrint, Scissors } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social-icons";

const TILE_ICONS = [PawPrint, Scissors, PawPrint];

function SocialTile({ index, delay }: { index: number; delay: number }) {
  const Icon = TILE_ICONS[index % TILE_ICONS.length];
  return (
    <FadeIn delay={delay} className="group aspect-square overflow-hidden rounded-2xl border border-sand/60">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blush via-cream to-[#f2dfa8] transition-transform duration-500 ease-out group-hover:scale-110">
        <Icon className="h-7 w-7 text-[#c9a227] sm:h-8 sm:w-8" strokeWidth={1.4} />
      </div>
    </FadeIn>
  );
}

function PlatformColumn({
  icon,
  label,
  handle,
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5 text-ink">
        {icon}
        <p className="font-display text-lg">
          {label} <span className="text-stone">{handle}</span>
        </p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
        {[0, 1, 2].map((i) => (
          <SocialTile key={i} index={i} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}

export function FollowAlong() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <div>
        <SectionHeading eyebrow="Join Our World" title="Follow Along" align="center" className="mx-auto" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <PlatformColumn icon={<InstagramIcon className="h-5 w-5 text-bougie" />} label="Instagram" handle="@thebougiepoodle" />
          <PlatformColumn icon={<FacebookIcon className="h-5 w-5 text-bougie" />} label="Facebook" handle="The Bougie Poodle" />
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center gap-2">
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 rounded-full border-sand bg-transparent px-7 text-sm font-semibold text-ink hover:bg-white/60"
                nativeButton={false}
                render={<a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" />}
              >
                <InstagramIcon className="h-4 w-4" />
                Follow on Instagram
              </Button>
              <span className="rounded-full border border-[#c9a227]/40 bg-[#f2dfa8]/40 px-3 py-1 text-xs font-medium tracking-wide text-[#8a6d10]">
                Coming Soon
              </span>
            </div>
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full bg-bougie px-7 text-sm font-semibold text-cream hover:bg-bougie/90"
              nativeButton={false}
              render={<a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" />}
            >
              <FacebookIcon className="h-4 w-4" />
              Follow on Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
