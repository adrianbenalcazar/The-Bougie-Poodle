"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import { newClientFormSchema, type NewClientFormValues } from "@/lib/validations";
import { BUSINESS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NewClientForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewClientFormValues>({ resolver: zodResolver(newClientFormSchema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-bougie" strokeWidth={1.5} />
        <h3 className="font-display text-xl">Request received!</h3>
        <p className="max-w-sm text-sm text-stone">
          We&apos;ll call you within one business day to learn more about your pet and provide a personalized quote.
          In a hurry? Call us directly at{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-bougie">
            {BUSINESS.phone}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-2 rounded-full border-ink/15" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="flex items-start gap-3 rounded-xl bg-blush/50 p-4 text-sm text-ink">
        <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
        <p>
          New clients start with a quick call so we can learn about your pet before their first visit — this helps
          us give you an accurate, personalized quote.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="nc-name">Full name</Label>
          <Input id="nc-name" placeholder="Jane Appleseed" {...register("name")} />
          {errors.name && <p className="text-xs text-bougie">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nc-phone">Phone number</Label>
          <Input id="nc-phone" type="tel" placeholder="(914) 555-0100" {...register("phone")} />
          {errors.phone && <p className="text-xs text-bougie">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="nc-email">Email</Label>
        <Input id="nc-email" type="email" placeholder="jane@email.com" {...register("email")} />
        {errors.email && <p className="text-xs text-bougie">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-1.5">
          <Label htmlFor="nc-pet">Pet&apos;s name</Label>
          <Input id="nc-pet" placeholder="Milo" {...register("petName")} />
          {errors.petName && <p className="text-xs text-bougie">{errors.petName.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label>Species</Label>
          <Controller
            control={control}
            name="species"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger className="h-10 w-full sm:w-32">
                  <SelectValue placeholder="Dog / Cat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dog">Dog</SelectItem>
                  <SelectItem value="Cat">Cat</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.species && <p className="text-xs text-bougie">{errors.species.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nc-breed">Breed</Label>
          <Input id="nc-breed" placeholder="Standard Poodle" {...register("breed")} />
          {errors.breed && <p className="text-xs text-bougie">{errors.breed.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="nc-services">Services you&apos;re interested in</Label>
        <Input id="nc-services" placeholder="Full groom, deshedding, nail trim…" {...register("servicesInterested")} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="nc-notes">Anything else we should know?</Label>
        <Textarea id="nc-notes" rows={4} placeholder="Coat condition, temperament, allergies…" {...register("notes")} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-cream hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Request a Callback
      </Button>
    </form>
  );
}
