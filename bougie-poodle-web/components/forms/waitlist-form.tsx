"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gift, Loader2, PartyPopper, Sparkles } from "lucide-react";
import { waitlistSchema, type WaitlistValues } from "@/lib/validations";
import { WAITLIST_FORMSPREE_ID } from "@/lib/constants";
import { recordWaitlistEntry, formatMemberNumber, type WaitlistEntry } from "@/lib/waitlist";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DAY_PREFERENCES: WaitlistValues["dayPreference"][] = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekends",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-bougie">{message}</p>;
}

export function WaitlistForm() {
  const [entry, setEntry] = useState<WaitlistEntry | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistValues>({ resolver: zodResolver(waitlistSchema) });

  async function onSubmit(values: WaitlistValues) {
    setSubmitError(null);
    try {
      if (WAITLIST_FORMSPREE_ID && WAITLIST_FORMSPREE_ID !== "YOUR_FORM_ID") {
        const res = await fetch(`https://formspree.io/f/${WAITLIST_FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Formspree submission failed");
      }
      const saved = recordWaitlistEntry(values);
      setEntry(saved);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your info. Please try again, or call us directly.");
    }
  }

  if (entry) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-[#c9a227]/40 bg-gradient-to-b from-[#fbf3de] to-white px-8 py-14 text-center">
        <span className="flex items-center gap-1.5 rounded-full border border-[#c9a227]/50 bg-[#f2dfa8]/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d10]">
          <Sparkles className="h-3.5 w-3.5" />
          Founding Membership
        </span>
        <p className="font-display text-5xl text-[#c9a227]">{formatMemberNumber(entry.memberNumber)}</p>
        <h3 className="font-display text-2xl text-ink">
          You&apos;re in, {entry.dogName}!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-stone">
          You&apos;ve just secured founding-member pricing, priority access to our opening schedule, and a welcome
          gift for {entry.dogName}&apos;s very first visit. Keep an eye on your inbox — we&apos;ll be in touch as
          opening day gets closer.
        </p>
        <div className="mt-1 flex items-center gap-4 text-xs text-stone">
          <span className="flex items-center gap-1.5">
            <PartyPopper className="h-4 w-4 text-[#c9a227]" strokeWidth={1.6} />
            Founding pricing
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="h-4 w-4 text-[#c9a227]" strokeWidth={1.6} />
            Welcome gift
          </span>
        </div>
        <Button variant="outline" className="mt-2 rounded-full border-ink/15" onClick={() => setEntry(null)}>
          Add another dog
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="wl-owner-name">Your name</Label>
          <Input id="wl-owner-name" placeholder="Jane Appleseed" {...register("ownerName")} />
          <FieldError message={errors.ownerName?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="wl-dog-name">Dog&apos;s name</Label>
          <Input id="wl-dog-name" placeholder="Milo" {...register("dogName")} />
          <FieldError message={errors.dogName?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="wl-email">Email</Label>
          <Input id="wl-email" type="email" placeholder="jane@email.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="wl-phone">Phone number</Label>
          <Input id="wl-phone" type="tel" placeholder="(914) 555-0100" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="wl-breed-size">Dog&apos;s breed / size</Label>
          <Input id="wl-breed-size" placeholder="Standard Poodle, Medium" {...register("breedSize")} />
          <FieldError message={errors.breedSize?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="wl-zip">ZIP code</Label>
          <Input id="wl-zip" inputMode="numeric" placeholder="10566" {...register("zip")} />
          <FieldError message={errors.zip?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="wl-day">Preferred day</Label>
        <Controller
          control={control}
          name="dayPreference"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger id="wl-day" className="h-10 w-full">
                <SelectValue placeholder="Select a preferred day" />
              </SelectTrigger>
              <SelectContent>
                {DAY_PREFERENCES.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.dayPreference?.message} />
      </div>

      <FieldError message={submitError ?? undefined} />

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-cream hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Join the Waitlist
      </Button>
    </form>
  );
}
