import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { VehicleCard } from "@/components/vehicle-card";
import { Button } from "@/components/ui/button";
import { fleet } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Choose your vehicle: Mercedes-Benz S-Class for up to 3 passengers, V-Class for up to 6, and the Mercedes party bus for celebrations.",
  alternates: { canonical: "/fleet" },
};

const onboard = [
  "Immaculately valeted before every journey",
  "Chilled bottled water on board",
  "Phone chargers for every connector",
  "Child seats available on request",
  "Privacy glass throughout the fleet",
  "Wedding ribbons and decorations by arrangement",
] as const;

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Choose your vehicle"
        title="A Mercedes-Benz for every occasion."
        intro="Three vehicles, one standard of presentation. Tell us your passengers and luggage, and we will recommend the right car — or choose your favourite when you book."
      />

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <Reveal key={vehicle.slug} delay={(index % 3) * 90} className="h-full">
              <VehicleCard vehicle={vehicle} detailed className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/25 py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="On board as standard"
            title="The details, already taken care of."
            intro="Every vehicle is prepared before your chauffeur sets off, so the cabin is exactly as it should be when the door opens."
          />

          <Reveal delay={120} className="grid gap-3 sm:grid-cols-2">
            {onboard.map((item) => (
              <p
                key={item}
                className="glass rounded-xl px-5 py-4 text-sm text-foreground/85"
              >
                {item}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-balance sm:text-4xl">
              Tell us the passengers and luggage. We will recommend the car.
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">Book your journey</Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
