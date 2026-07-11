import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  petName: z.string().trim().min(1, "Please enter your pet's name."),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newClientFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  petName: z.string().trim().min(1, "Please enter your pet's name."),
  species: z.enum(["Dog", "Cat"]),
  breed: z.string().trim().min(1, "Please enter your pet's breed."),
  servicesInterested: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export type NewClientFormValues = z.infer<typeof newClientFormSchema>;

export const existingClientBookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  petName: z.string().trim().min(1, "Please enter your pet's name."),
  preferredDate: z.string().trim().min(1, "Please choose a preferred date."),
  preferredTime: z.enum(["Morning", "Midday", "Afternoon"]),
  service: z.string().trim().min(1, "Please select a service."),
  notes: z.string().trim().optional(),
});

export type ExistingClientBookingValues = z.infer<typeof existingClientBookingSchema>;

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
