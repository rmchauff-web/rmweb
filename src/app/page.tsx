import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { VehicleCard } from "@/components/vehicle-card";
import { Button } from "@/components/ui/button";
import { fleet, process, services, site, values } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <Image
          src="/images/hero-mobile.png"
          alt="A black Mercedes-Benz outside a London hotel at sunset, with Big Ben in the distance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] md:hidden"
        />
        <Image
          src="/images/hero-desktop.png"
          alt="A black Mercedes-Benz on a London street at sunset, with Big Ben and the Houses of Parliament behind"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_center] md:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink from-[18%] via-ink/70 via-[52%] to-ink/25 md:from-ink md:via-ink/40 md:to-ink/20"
        />

        <div className="container-page relative pt-40 pb-16 sm:pb-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Premium Chauffeuring Services</span>

            <h1 className="mt-5 text-4xl leading-[1.08] text-balance sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
              Driven by excellence.
              <br />
              <span className="gold-text">Defined by trust.</span>
            </h1>

            <p className="mt-5 hidden max-w-lg text-base leading-relaxed text-white/80 md:block lg:text-lg">
              Airport transfers, events and private hire across London —
              chauffeur-driven, from the moment the door opens.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">Book your journey</Link>
              </Button>
              <Button asChild variant="quiet" size="xl" className="glass-dark border-white/20">
                <Link href="/services">Our services</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-14 hidden sm:mt-20 md:block">
            <div className="glass-dark grid grid-cols-3 gap-8 rounded-full px-10 py-7">
              {[
                { value: "24/7", label: "Available every day" },
                { value: "6", label: "London airports covered" },
                { value: "Mercedes", label: "Chauffeur-driven fleet" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-semibold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] font-medium tracking-[0.16em] text-white/70 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 rounded-full bg-gold/60" />
              <span className="eyebrow">Welcome</span>
            </div>
            <h2 className="mt-5 text-3xl leading-[1.12] text-balance sm:text-4xl">
              Premium travel, with trust at the heart of every journey.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              RM Chauffeur London represents premium travel experiences with
              professionalism, discretion and comfort at the heart of
              everything we do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From airport transfers to weddings and special occasions, our
              chauffeurs arrive early, plan every route, and look after the
              details — so all you think about is the destination.
            </p>
            <Button asChild variant="goldOutline" size="wide" className="mt-8">
              <Link href="/about">About us</Link>
            </Button>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/chauffeur-door.png"
                alt="A chauffeur opening the rear door of a black Mercedes-Benz"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="glass-dark absolute -bottom-5 left-5 max-w-[16rem] rounded-2xl p-5 sm:left-8">
              <p className="text-sm font-medium text-gold">
                {site.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/60 bg-card/25 py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Chauffeur-driven, whatever the occasion."
              intro="Four services, one standard. Every booking is planned in advance and driven by a professional chauffeur in an immaculate Mercedes-Benz."
            />
            <Reveal delay={120}>
              <Button asChild variant="goldOutline" size="wide">
                <Link href="/services">All services</Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 2) * 100} className="h-full">
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Choose your vehicle"
              title="A Mercedes-Benz for every journey."
              intro="The S-Class for executive travel, the V-Class for groups and luggage, and the party bus for celebrations that start before you arrive."
            />
            <Reveal delay={120}>
              <Button asChild variant="goldOutline" size="wide">
                <Link href="/fleet">View the fleet</Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle, index) => (
              <Reveal key={vehicle.slug} delay={index * 100} className="h-full">
                <VehicleCard vehicle={vehicle} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-card/25 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why RM Chauffeur"
            title="Four values behind every journey."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 90}
                className="glass h-full rounded-2xl p-7 text-center"
              >
                <h3 className="text-lg font-semibold text-gold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Booked in three simple steps."
            align="center"
          />

          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90} as="li">
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-sm font-semibold text-gold">
                    {item.step}
                  </span>
                  <span aria-hidden className="hairline flex-1" />
                </div>
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-32">
        <Image
          src="/images/interior-leather.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink"
        />
        <div className="container-page relative text-center">
          <Reveal>
            <span className="eyebrow">Reservations</span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl leading-[1.12] text-balance sm:text-4xl lg:text-5xl">
              Your chauffeur is one booking away.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.hours}. Tell us your journey and we will take care of
              everything else.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">Book now</Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={site.emailHref}>{site.email}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
