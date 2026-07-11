"use client";

import { TESTIMONIALS } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/motion/fade-in";
import { TestimonialCard } from "@/components/sections/testimonial-card";

export function TestimonialsCarousel() {
  return (
    <FadeIn>
      <Carousel opts={{ loop: true, align: "start" }} className="mx-auto">
        <CarouselContent>
          {TESTIMONIALS.map((t) => (
            <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center gap-3">
          <CarouselPrevious className="static translate-x-0 translate-y-0 border-sand text-ink hover:bg-blush" />
          <CarouselNext className="static translate-x-0 translate-y-0 border-sand text-ink hover:bg-blush" />
        </div>
      </Carousel>
    </FadeIn>
  );
}
