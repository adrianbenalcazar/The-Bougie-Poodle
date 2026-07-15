import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  petName: z.string().trim().min(1, "Please enter your pet's name."),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  address: z.string().trim().min(5, "Please enter your address."),
  dogName: z.string().trim().min(1, "Please enter your dog's name."),
  breed: z.string().trim().min(1, "Please enter your dog's breed."),
  age: z.string().trim().min(1, "Please enter your dog's age."),
  weight: z.string().trim().min(1, "Please enter your dog's approximate weight."),
  sex: z.enum(["Male", "Female"]),
  spayedNeutered: z.enum(["Yes", "No"]),
  groomingHistory: z.enum(["First time", "Has been groomed before"]),
  coatCondition: z.enum(["Normal", "Matted", "Very matted"]),
  allergies: z.string().trim().optional(),
  behavior: z.enum(["Calm", "Nervous", "Aggressive", "Mixed"]),
  notes: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select a service."),
  addOns: z.array(z.string()),
  preferredDate: z.string().trim().min(1, "Please choose a preferred date."),
});

export type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;

export const existingClientLookupSchema = z.object({
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
});

export type ExistingClientLookupValues = z.infer<typeof existingClientLookupSchema>;

export const existingClientContinuationSchema = z.object({
  service: z.string().trim().min(1, "Please select a service."),
  addOns: z.array(z.string()),
  preferredDate: z.string().trim().min(1, "Please choose a preferred date."),
  notes: z.string().trim().optional(),
});

export type ExistingClientContinuationValues = z.infer<typeof existingClientContinuationSchema>;

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
