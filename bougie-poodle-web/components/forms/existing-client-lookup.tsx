"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, PawPrint, Search, UserRound } from "lucide-react";
import {
  existingClientLookupSchema,
  existingClientContinuationSchema,
  type ExistingClientLookupValues,
  type ExistingClientContinuationValues,
} from "@/lib/validations";
import { ADD_ONS, BUSINESS, SERVICE_TIERS } from "@/lib/constants";
import { findClientByPhone, type MockClient } from "@/lib/mock-clients";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-bougie">{message}</p>;
}

export function ExistingClientLookup({ defaultService }: { defaultService?: string }) {
  const [client, setClient] = useState<MockClient | null | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const lookupForm = useForm<ExistingClientLookupValues>({
    resolver: zodResolver(existingClientLookupSchema),
  });

  const continuationForm = useForm<ExistingClientContinuationValues>({
    resolver: zodResolver(existingClientContinuationSchema),
    defaultValues: { service: defaultService ?? "", addOns: [] },
  });

  async function onLookup(values: ExistingClientLookupValues) {
    await new Promise((r) => setTimeout(r, 700));
    setClient(findClientByPhone(values.phone) ?? null);
  }

  async function onBook(values: ExistingClientContinuationValues) {
    // Simulated submission — connect to the studio's real booking system to
    // actually confirm this appointment.
    await new Promise((r) => setTimeout(r, 800));
    void values;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-bougie" strokeWidth={1.5} />
        <h3 className="font-display text-xl">Booking request sent!</h3>
        <p className="max-w-sm text-sm text-stone">
          We&apos;ll confirm your appointment time within a few hours. Watch your inbox and phone for confirmation.
        </p>
        <Button
          variant="outline"
          className="mt-2 rounded-full border-ink/15"
          onClick={() => {
            setSubmitted(false);
            setClient(undefined);
            lookupForm.reset();
            continuationForm.reset({ service: defaultService ?? "", addOns: [] });
          }}
        >
          Book another visit
        </Button>
      </div>
    );
  }

  if (client === null) {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-sand/70 bg-white px-6 py-10 text-center">
          <p className="font-display text-lg">We couldn&apos;t find that number.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-stone">
            Double-check the number, or if this is your first visit, switch to the &ldquo;I&apos;m New Here&rdquo;
            tab. Need a hand? Call us at{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-bougie">
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
        <Button
          variant="outline"
          className="w-full rounded-full border-ink/15"
          onClick={() => setClient(undefined)}
        >
          Try another number
        </Button>
      </div>
    );
  }

  if (client) {
    return (
      <form onSubmit={continuationForm.handleSubmit(onBook)} className="space-y-6" noValidate>
        <div className="flex items-start gap-3 rounded-xl bg-blush/50 p-4 text-sm text-ink">
          <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
          <p>
            Welcome back, <span className="font-semibold">{client.ownerName}</span>! Booking for{" "}
            <span className="inline-flex items-center gap-1 font-semibold">
              <PawPrint className="h-3.5 w-3.5" /> {client.dogName}
            </span>{" "}
            ({client.breed}).
          </p>
        </div>

        <div className="space-y-1.5">
          <Label>Service</Label>
          <Controller
            control={continuationForm.control}
            name="service"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger className="h-10 w-full">
                  <SelectValue placeholder="Select a service">
                    {(value: string) => SERVICE_TIERS.find((t) => t.slug === value)?.name ?? "Select a service"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_TIERS.map((tier) => (
                    <SelectItem key={tier.slug} value={tier.slug}>
                      {tier.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={continuationForm.formState.errors.service?.message} />
        </div>

        <div className="space-y-2.5">
          <Label>Add-ons</Label>
          <Controller
            control={continuationForm.control}
            name="addOns"
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {ADD_ONS.map((addOn) => {
                  const checked = field.value?.includes(addOn.slug) ?? false;
                  return (
                    <label
                      key={addOn.slug}
                      className="flex items-center gap-2 rounded-lg border border-sand bg-white px-3 py-2.5 text-sm text-ink"
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(value) => {
                          const current = field.value ?? [];
                          field.onChange(
                            value ? [...current, addOn.slug] : current.filter((s) => s !== addOn.slug),
                          );
                        }}
                      />
                      {addOn.name}
                    </label>
                  );
                })}
              </div>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="ec-date">Preferred date</Label>
          <Input id="ec-date" type="date" {...continuationForm.register("preferredDate")} />
          <FieldError message={continuationForm.formState.errors.preferredDate?.message} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="ec-notes">Notes for your groomer</Label>
          <Textarea
            id="ec-notes"
            rows={3}
            placeholder="Anything new since your last visit?"
            {...continuationForm.register("notes")}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={continuationForm.formState.isSubmitting}
          className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-white hover:bg-bougie/90 sm:w-auto sm:px-10"
        >
          {continuationForm.formState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Request Appointment
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={lookupForm.handleSubmit(onLookup)} className="space-y-5" noValidate>
      <div className="flex items-start gap-3 rounded-xl bg-blush/50 p-4 text-sm text-ink">
        <Search className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
        <p>Welcome back! Enter your phone number and we&apos;ll pull up your profile.</p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="lookup-phone">Phone number</Label>
        <Input id="lookup-phone" type="tel" placeholder="(914) 555-0100" {...lookupForm.register("phone")} />
        <FieldError message={lookupForm.formState.errors.phone?.message} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={lookupForm.formState.isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-white hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {lookupForm.formState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Look Up My Profile
      </Button>
    </form>
  );
}
