"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { existingClientBookingSchema, type ExistingClientBookingValues } from "@/lib/validations";
import { SERVICES } from "@/lib/constants";
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

export function ExistingClientForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExistingClientBookingValues>({ resolver: zodResolver(existingClientBookingSchema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-bougie" strokeWidth={1.5} />
        <h3 className="font-display text-xl">Booking request sent!</h3>
        <p className="max-w-sm text-sm text-stone">
          We&apos;ll confirm your appointment time within a few hours. Watch your inbox and phone for confirmation.
        </p>
        <Button variant="outline" className="mt-2 rounded-full border-ink/15" onClick={() => setSubmitted(false)}>
          Book another visit
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="flex items-start gap-3 rounded-xl bg-blush/50 p-4 text-sm text-ink">
        <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
        <p>Welcome back! Tell us when you&apos;d like to come in and we&apos;ll confirm your appointment shortly.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ec-name">Full name</Label>
          <Input id="ec-name" placeholder="Jane Appleseed" {...register("name")} />
          {errors.name && <p className="text-xs text-bougie">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ec-phone">Phone number</Label>
          <Input id="ec-phone" type="tel" placeholder="(914) 555-0100" {...register("phone")} />
          {errors.phone && <p className="text-xs text-bougie">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ec-email">Email</Label>
          <Input id="ec-email" type="email" placeholder="jane@email.com" {...register("email")} />
          {errors.email && <p className="text-xs text-bougie">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ec-pet">Pet&apos;s name</Label>
          <Input id="ec-pet" placeholder="Milo" {...register("petName")} />
          {errors.petName && <p className="text-xs text-bougie">{errors.petName.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Service</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger className="h-10 w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s.slug} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && <p className="text-xs text-bougie">{errors.service.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ec-date">Preferred date</Label>
          <Input id="ec-date" type="date" {...register("preferredDate")} />
          {errors.preferredDate && <p className="text-xs text-bougie">{errors.preferredDate.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label>Preferred time</Label>
          <Controller
            control={control}
            name="preferredTime"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger className="h-10 w-full">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning">Morning</SelectItem>
                  <SelectItem value="Midday">Midday</SelectItem>
                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.preferredTime && <p className="text-xs text-bougie">{errors.preferredTime.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ec-notes">Notes for your groomer</Label>
        <Textarea id="ec-notes" rows={3} placeholder="Anything new since your last visit?" {...register("notes")} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-cream hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Request Appointment
      </Button>
    </form>
  );
}
