"use client";

import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ImagePlus, Loader2, X } from "lucide-react";
import { quoteRequestSchema, type QuoteRequestValues } from "@/lib/validations";
import { ADD_ONS, BUSINESS, SERVICE_TIERS } from "@/lib/constants";
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

export function QuoteRequestForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestValues>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      service: defaultService ?? "",
      addOns: [],
    },
  });

  async function onSubmit(values: QuoteRequestValues) {
    // Simulated submission — no backend is connected yet. Wire this up to a
    // real email/API service (e.g. a Next.js route calling Resend) to actually
    // deliver requests to hello@thebougiepoodleny.com, including the photo.
    await new Promise((r) => setTimeout(r, 800));
    void values;
    setSubmitted(true);
    reset();
    setPhoto(null);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-bougie" strokeWidth={1.5} />
        <h3 className="font-display text-xl">Quote request sent!</h3>
        <p className="max-w-sm text-sm text-stone">
          Thank you — our team will review your dog&apos;s details and follow up within one business day with a
          personalized quote. In a hurry? Call us directly at{" "}
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div>
        <p className="eyebrow mb-3">Your Info</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="qr-name">Full name</Label>
            <Input id="qr-name" placeholder="Jane Appleseed" {...register("name")} />
            <FieldError message={errors.name?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-phone">Phone number</Label>
            <Input id="qr-phone" type="tel" placeholder="(914) 555-0100" {...register("phone")} />
            <FieldError message={errors.phone?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-email">Email</Label>
            <Input id="qr-email" type="email" placeholder="jane@email.com" {...register("email")} />
            <FieldError message={errors.email?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-address">Address</Label>
            <Input id="qr-address" placeholder="123 Main St, Peekskill, NY" {...register("address")} />
            <FieldError message={errors.address?.message} />
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Your Dog</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="qr-dog-name">Dog&apos;s name</Label>
            <Input id="qr-dog-name" placeholder="Milo" {...register("dogName")} />
            <FieldError message={errors.dogName?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-breed">Breed</Label>
            <Input id="qr-breed" placeholder="Standard Poodle" {...register("breed")} />
            <FieldError message={errors.breed?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-age">Age</Label>
            <Input id="qr-age" placeholder="2 years" {...register("age")} />
            <FieldError message={errors.age?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="qr-weight">Approximate weight</Label>
            <Input id="qr-weight" placeholder="45 lbs" {...register("weight")} />
            <FieldError message={errors.weight?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>Sex</Label>
            <Controller
              control={control}
              name="sex"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Select sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.sex?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>Spayed / Neutered</Label>
            <Controller
              control={control}
              name="spayedNeutered"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.spayedNeutered?.message} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label>Grooming history</Label>
            <Controller
              control={control}
              name="groomingHistory"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="First time or groomed before?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="First time">First time grooming</SelectItem>
                    <SelectItem value="Has been groomed before">Has been groomed before</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.groomingHistory?.message} />
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Health &amp; Behavior</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label>Coat condition</Label>
            <Controller
              control={control}
              name="coatCondition"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Select coat condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="Matted">Matted</SelectItem>
                    <SelectItem value="Very matted">Very matted</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.coatCondition?.message} />
          </div>
          <div className="space-y-1.5">
            <Label>Behavior</Label>
            <Controller
              control={control}
              name="behavior"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 w-full">
                    <SelectValue placeholder="Select behavior" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Calm">Calm</SelectItem>
                    <SelectItem value="Nervous">Nervous</SelectItem>
                    <SelectItem value="Aggressive">Aggressive</SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.behavior?.message} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="qr-allergies">Allergies</Label>
            <Input id="qr-allergies" placeholder="None, or list any known allergies" {...register("allergies")} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="qr-notes">Additional notes</Label>
            <Textarea id="qr-notes" rows={3} placeholder="Anything else we should know?" {...register("notes")} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label>Dog photo</Label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
            />
            {photo ? (
              <div className="flex items-center justify-between rounded-lg border border-sand bg-white px-3.5 py-2.5 text-sm">
                <span className="truncate text-ink">{photo.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    setPhoto(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  aria-label="Remove photo"
                  className="ml-3 shrink-0 text-stone hover:text-bougie"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-10 w-full items-center gap-2 rounded-lg border border-dashed border-sand px-3.5 text-sm text-stone transition-colors hover:border-bougie hover:text-bougie"
              >
                <ImagePlus className="h-4 w-4" />
                Upload a photo (optional)
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Service &amp; Scheduling</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label>Service</Label>
            <Controller
              control={control}
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
            <FieldError message={errors.service?.message} />
          </div>

          <div className="space-y-2.5 sm:col-span-2">
            <Label>Add-ons</Label>
            <Controller
              control={control}
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

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="qr-date">Preferred date</Label>
            <Input id="qr-date" type="date" {...register("preferredDate")} />
            <FieldError message={errors.preferredDate?.message} />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full gap-2 rounded-full bg-bougie text-base font-semibold text-white hover:bg-bougie/90 sm:w-auto sm:px-10"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Quote Request
      </Button>
    </form>
  );
}
