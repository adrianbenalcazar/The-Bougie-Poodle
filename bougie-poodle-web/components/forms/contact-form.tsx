"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-bougie" strokeWidth={1.5} />
        <h3 className="font-display text-xl">Message sent.</h3>
        <p className="max-w-xs text-sm text-stone">
          Thank you for reaching out — a member of our team will be in touch within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-2 rounded-full border-ink/15"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Jane Appleseed" {...register("name")} />
          {errors.name && <p className="text-xs text-bougie">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="(914) 555-0100" {...register("phone")} />
          {errors.phone && <p className="text-xs text-bougie">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="jane@email.com" {...register("email")} />
          {errors.email && <p className="text-xs text-bougie">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="petName">Pet&apos;s name</Label>
          <Input id="petName" placeholder="Milo" {...register("petName")} />
          {errors.petName && <p className="text-xs text-bougie">{errors.petName.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your pet and what you're looking for…"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-bougie">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-cream hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Message
      </Button>
    </form>
  );
}
