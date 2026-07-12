"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className, dark = false }: { className?: string; dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className={cn("flex items-center gap-2 text-sm", dark ? "text-cream" : "text-ink", className)}>
        <Check className="h-4 w-4 text-bougie" />
        You&apos;re on the list — welcome to The Bougie Poodle.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-2", className)} noValidate>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          className={cn(
            "h-11 rounded-full border-sand bg-white/90 px-4 text-ink placeholder:text-stone",
            dark && "border-white/15 bg-white/5 text-cream placeholder:text-cream/50",
          )}
          {...register("email")}
        />
        <Button
          type="submit"
          size="icon-lg"
          disabled={isSubmitting}
          className="h-11 w-11 shrink-0 rounded-full bg-bougie text-cream hover:bg-bougie/90"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      {errors.email && <p className="text-xs text-bougie">{errors.email.message}</p>}
    </form>
  );
}
