import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { airports, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Airport transfers to all six London airports, weddings, special occasions and private hire — premium chauffeur services from RM Chauffeur London.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every journey, tailored to you."
        intro="Whether you are heading to a special event, a business meeting or an airport, our services are designed to make your journey as comfortable as possible — in an immaculate, chauffeur-driven Mercedes-Benz."
      />

      <section className="py-16 sm:py-24">
        <div className="container-page space-y-16 sm:space-y-24">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              as="article"
              className="scroll-mt-36 grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                id={service.slug}
                className={
                  index % 2 === 1 ? "lg:order-2" : undefined
                }
              >
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>
                <ul className="mt-7 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-gold"
                      />
                      <span className="text-sm leading-relaxed text-foreground/85">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="goldOutline" size="wide" className="mt-8">
                  <Link href={`/booking?service=${service.slug}`}>
                    Book this service
                  </Link>
                </Button>
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:order-1" : undefined
                }
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/25 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="London airports"
            title="All six London airports, covered."
            intro="Average travel times are estimated from pick-up to Zone 1 Central London under normal traffic conditions. We monitor your flight and adjust the collection automatically."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {airports.map((airport, index) => (
              <Reveal
                key={airport.code}
                delay={(index % 3) * 80}
                className="glass h-full rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold">{airport.name}</h3>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-gold">
                    {airport.code}
                  </span>
                </div>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <dt className="sr-only">Location</dt>
                    <dd>{airport.location}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Distance</dt>
                    <dd>{airport.distance}</dd>
                  </div>
                  <div className="pt-2">
                    <dt className="text-[0.62rem] font-medium tracking-[0.16em] text-gold uppercase">
                      Average travel time
                    </dt>
                    <dd className="mt-1 text-foreground/85">{airport.time}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="glass rounded-2xl p-8 text-center sm:p-14">
            <span className="eyebrow">Not sure which service you need?</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-tight text-balance sm:text-4xl">
              Tell us about the day, and we will recommend the rest.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              One transfer or a full itinerary — email{" "}
              <a href={site.emailHref} className="text-gold hover:underline">
                {site.email}
              </a>{" "}
              or use the booking page and we will reply with a personal
              quotation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">Book your journey</Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
