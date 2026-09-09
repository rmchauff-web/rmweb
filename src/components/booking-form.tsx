"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { BookingFieldErrors } from "@/lib/booking";
import { fleet, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 rounded-xl border-border/70 bg-ink/50 text-sm focus-visible:border-gold/70";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: string;
  optional?: boolean;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="mb-2 text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground uppercase"
    >
      {children}
      {optional ? <span className="normal-case"> (optional)</span> : null}
    </Label>
  );
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") ?? "";
  const initialService = services.some((s) => s.slug === preselected)
    ? preselected
    : "";
  const preselectedVehicle = searchParams.get("vehicle") ?? "";
  const initialVehicle = fleet.some((v) => v.slug === preselectedVehicle)
    ? preselectedVehicle
    : "";

  const [service, setService] = useState(initialService);
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<BookingFieldErrors>({});
  const [reference, setReference] = useState<string | null>(null);

  function clearError(field: keyof BookingFieldErrors) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service,
      vehicle,
      pickup: String(data.get("pickup") ?? ""),
      destination: String(data.get("destination") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      passengers: String(data.get("passengers") ?? ""),
      flight: String(data.get("flight") ?? ""),
      notes: String(data.get("notes") ?? ""),
      consent,
    };

    setPending(true);
    setErrors({});

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setErrors(result.fieldErrors ?? {});
        toast.error(result.message ?? "We could not send that booking request.");
        return;
      }

      const top = form.getBoundingClientRect().top + window.scrollY - 150;
      setReference(result.reference as string);
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      form.reset();
      setConsent(false);
      setService("");
      setVehicle("");
      toast.success("Booking request received. We will confirm shortly.");
    } catch {
      toast.error(
        `Something went wrong. Please email ${site.email} and we will take the details.`,
      );
    } finally {
      setPending(false);
    }
  }

  if (reference) {
    return (
      <div className="glass rounded-2xl p-8 sm:p-10">
        <CheckCircle2 className="size-8 text-gold" strokeWidth={1.1} aria-hidden />
        <h2 className="mt-6 text-2xl sm:text-3xl">Your booking request is with us.</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Thank you — we are checking availability now. You will receive a
          personal confirmation and quotation by email shortly.
        </p>
        <dl className="mt-7 border-t border-border/60 pt-6">
          <dt className="text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Your reference
          </dt>
          <dd className="mt-2 text-lg font-semibold tracking-[0.1em] text-gold">
            {reference}
          </dd>
        </dl>
        <p className="mt-6 text-sm text-muted-foreground">
          Travelling in the next few hours? Email{" "}
          <a href={site.emailHref} className="text-gold hover:underline">
            {site.email}
          </a>{" "}
          and quote that reference.
        </p>
        <Button
          variant="goldOutline"
          size="wide"
          className="mt-8"
          onClick={() => setReference(null)}
        >
          Make another booking
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onInput={(event) => {
        const field = (event.target as HTMLInputElement).name;
        if (field) clearError(field as keyof BookingFieldErrors);
      }}
      noValidate
      className="glass rounded-2xl p-7 sm:p-9"
    >
      <h2 className="text-2xl sm:text-3xl">Book your journey</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Tell us the details below. No payment is taken now — we confirm
        availability and send you a personal quotation first.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="James Whitfield"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <FieldLabel htmlFor="phone">Telephone</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="07700 900123"
            aria-invalid={Boolean(errors.phone)}
            className={fieldClass}
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.co.uk"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <FieldLabel htmlFor="service">Type of journey</FieldLabel>
          <Select
            value={service}
            onValueChange={(value) => {
              setService(value);
              clearError("service");
            }}
          >
            <SelectTrigger
              id="service"
              aria-invalid={Boolean(errors.service)}
              className={cn(fieldClass, "w-full")}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {services.map((item) => (
                <SelectItem key={item.slug} value={item.slug}>
                  {item.title}
                </SelectItem>
              ))}
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
          <FieldError message={errors.service} />
        </div>

        <div>
          <FieldLabel htmlFor="vehicle">Preferred vehicle</FieldLabel>
          <Select
            value={vehicle}
            onValueChange={(value) => {
              setVehicle(value);
              clearError("vehicle");
            }}
          >
            <SelectTrigger
              id="vehicle"
              aria-invalid={Boolean(errors.vehicle)}
              className={cn(fieldClass, "w-full")}
            >
              <SelectValue placeholder="Select a vehicle" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {fleet.map((item) => (
                <SelectItem key={item.slug} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
          <FieldError message={errors.vehicle} />
        </div>

        <div>
          <FieldLabel htmlFor="pickup">Pick-up location</FieldLabel>
          <Input
            id="pickup"
            name="pickup"
            placeholder="Heathrow Terminal 5"
            aria-invalid={Boolean(errors.pickup)}
            className={fieldClass}
          />
          <FieldError message={errors.pickup} />
        </div>

        <div>
          <FieldLabel htmlFor="destination">Destination</FieldLabel>
          <Input
            id="destination"
            name="destination"
            placeholder="Central London"
            aria-invalid={Boolean(errors.destination)}
            className={fieldClass}
          />
          <FieldError message={errors.destination} />
        </div>

        <div>
          <FieldLabel htmlFor="date">Date</FieldLabel>
          <Input
            id="date"
            name="date"
            type="date"
            aria-invalid={Boolean(errors.date)}
            className={cn(fieldClass, "[&::-webkit-calendar-picker-indicator]:invert")}
          />
          <FieldError message={errors.date} />
        </div>

        <div>
          <FieldLabel htmlFor="time">Pick-up time</FieldLabel>
          <Input
            id="time"
            name="time"
            type="time"
            aria-invalid={Boolean(errors.time)}
            className={cn(fieldClass, "[&::-webkit-calendar-picker-indicator]:invert")}
          />
          <FieldError message={errors.time} />
        </div>

        <div>
          <FieldLabel htmlFor="passengers" optional>
            Passengers & luggage
          </FieldLabel>
          <Input
            id="passengers"
            name="passengers"
            placeholder="3 passengers, 2 suitcases"
            className={fieldClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="flight" optional>
            Flight number
          </FieldLabel>
          <Input
            id="flight"
            name="flight"
            placeholder="BA286"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor="notes" optional>
            Anything we should know
          </FieldLabel>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Child seat needed, return journey on Sunday evening, birthday decorations…"
            className="rounded-xl border-border/70 bg-ink/50 text-sm focus-visible:border-gold/70"
          />
        </div>
      </div>

      <div className="mt-7 flex items-start gap-3 border-t border-border/60 pt-6">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(value) => {
            setConsent(value === true);
            clearError("consent");
          }}
          aria-invalid={Boolean(errors.consent)}
          className="mt-0.5 rounded-md border-border/70 data-[state=checked]:border-gold data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
        />
        <div>
          <Label
            htmlFor="consent"
            className="text-xs leading-relaxed font-normal text-muted-foreground"
          >
            I am happy for RM Chauffeur London to contact me about this booking.
            We never share your details and you can ask us to delete them at any
            time.
          </Label>
          <FieldError message={errors.consent} />
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        disabled={pending}
        className="mt-8 w-full sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending
          </>
        ) : (
          "Request booking"
        )}
      </Button>
    </form>
  );
}
