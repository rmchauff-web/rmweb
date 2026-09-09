import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { PageHero, SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RM Chauffeur London represents premium travel experiences with professionalism, discretion and comfort at the heart of everything we do.",
  alternates: { canonical: "/about" },
};

const commitments = [
  {
    title: "Discretion as standard",
    body: "What happens in the car stays in the car. Our chauffeurs are courteous, professional and discreet — present when you need them, invisible when you don't.",
  },
  {
    title: "Punctual, every time",
    body: "Routes are planned in advance, traffic is monitored, and your chauffeur arrives early. Flights are tracked so a delay never affects your collection.",
  },
  {
    title: "Comfort in every detail",
    body: "From the temperature of the cabin to the water in the door, every vehicle is prepared before your journey so nothing is left to chance.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Driven by excellence. Defined by trust."
        intro="RM Chauffeur London represents premium travel experiences with professionalism, discretion and comfort at the heart of everything we do."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 rounded-full bg-gold/60" />
              <span className="eyebrow">Who we are</span>
            </div>
            <h2 className="mt-5 text-3xl leading-[1.12] text-balance sm:text-4xl">
              A London chauffeur service built on trust.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                RM Chauffeur London was built around a simple idea: that
                premium travel is about more than a beautiful car. It is about
                the confidence of knowing your chauffeur will be early, your
                route is planned, and every detail has been thought about
                before you step outside.
              </p>
              <p>
                We serve private clients, families and businesses across London
                and the United Kingdom — from daily airport transfers to
                weddings, celebrations and long-term private hire. Whatever the
                journey, the standard is the same.
              </p>
              <p>
                Our Mercedes-Benz fleet is kept in immaculate condition, and
                our chauffeurs are chosen for their professionalism as much as
                their driving. Safety, punctuality, professionalism and luxury
                are not slogans to us — they are how every booking is run.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/interior-leather.png"
                alt="Quilted black leather rear seats inside a Mercedes-Benz"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/25 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="What every journey is built on."
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

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our promise"
            title="Three commitments, kept on every booking."
          />
          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-3">
            {commitments.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className="border-t border-gold/25 pt-7"
              >
                <span className="text-[0.68rem] font-semibold tracking-[0.24em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="glass rounded-2xl p-8 text-center sm:p-14">
            <span className="eyebrow">Travel with us</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-tight text-balance sm:text-4xl">
              Experience the difference a professional chauffeur makes.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {site.hours}. Book online or email{" "}
              <a href={site.emailHref} className="text-gold hover:underline">
                {site.email}
              </a>
              .
            </p>
            <Button asChild variant="gold" size="xl" className="mt-9">
              <Link href="/booking">Book your journey</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
