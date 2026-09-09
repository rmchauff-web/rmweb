import { z } from "zod";

import { fleet, services } from "@/lib/site";

const serviceSlugs = services.map((service) => service.slug);
const vehicleSlugs = fleet.map((vehicle) => vehicle.slug);

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a contact number we can reach you on")
    .max(24, "That number looks too long"),
  service: z
    .string()
    .refine((value) => serviceSlugs.includes(value) || value === "other", {
      message: "Choose the type of journey",
    }),
  vehicle: z
    .string()
    .refine((value) => vehicleSlugs.includes(value) || value === "unsure", {
      message: "Choose a vehicle, or select 'Not sure yet'",
    }),
  pickup: z.string().trim().min(3, "Where should your chauffeur collect you?"),
  destination: z.string().trim().min(3, "Where are you travelling to?"),
  date: z.string().trim().min(1, "Choose your travel date"),
  time: z.string().trim().min(1, "Choose your pick-up time"),
  passengers: z.string().trim().optional().or(z.literal("")),
  flight: z.string().trim().max(24).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm we may contact you about this booking"),
});

export type BookingInput = z.input<typeof bookingSchema>;
export type BookingValues = z.output<typeof bookingSchema>;
export type BookingFieldErrors = Partial<Record<keyof BookingValues, string>>;

export function buildReference(date = new Date()) {
  const stamp = date.toISOString().slice(2, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `RM-${stamp}-${random}`;
}
