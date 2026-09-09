import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { fleet, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Journey",
  description:
    "Book your chauffeur-driven journey with RM Chauffeur London. Airport transfers, weddings, special occasions and private hire — available 24/7.",
  alternates: { canonical: "/booking" },
};

function FormFallback() {
  return (
    <div className="glass rounded-2xl p-7 sm:p-9">
      <Skeleton className="h-8 w-64 rounded-lg" />
      <Skeleton className="mt-4 h-4 w-full max-w-md rounded-lg" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-16 w-full rounded-xl" />
        ))}
      </div>
      <Skeleton className="mt-8 h-12 w-48 rounded-full" />
    </div>
  );
}

const steps = [
  {
    title: "Send your details",
    body: "Complete the form with your journey details. It takes less than two minutes.",
  },
  {
    title: "We confirm availability",
    body: "We check the diary and reply by email with a personal quotation for your journey.",
  },
  {
    title: "Your chauffeur arrives",
    body: "On the day, your chauffeur arrives early in an immaculate Mercedes-Benz.",
  },
] as const;

export default function BookingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <Image
          src="/images/hero-desktop.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink"
        />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 rounded-full bg-gold/60" />
              <span className="eyebrow">Booking</span>
            </div>
            <h1 className="mt-6 text-4xl leading-[1.08] text-balance sm:text-5xl">
              Book your journey.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Chauffeur-driven transportation tailored to your needs,
              {" "}{site.hours.toLowerCase()}. No payment is taken online — we
              confirm every booking personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="min-w-0">
            <Suspense fallback={<FormFallback />}>
              <BookingForm />
            </Suspense>
          </Reveal>

          <div className="min-w-0 space-y-6">
            <Reveal delay={120} className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
                How it works
              </h2>
              <ol className="mt-5 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/40 text-xs font-semibold text-gold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={180} className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
                Vehicle guide
              </h2>
              <ul className="mt-5 space-y-4">
                {fleet.map((vehicle) => (
                  <li key={vehicle.slug} className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-sm font-medium">{vehicle.name}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {vehicle.passengers} · {vehicle.luggage}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240} className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
                Prefer to email?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Send your itinerary to{" "}
                <a href={site.emailHref} className="text-gold hover:underline">
                  {site.email}
                </a>{" "}
                and we will reply with a quotation. For multi-day private hire
                we can usually offer a better price than our fixed rates.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
