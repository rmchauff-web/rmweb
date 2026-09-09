import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { PageHero, SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact RM Chauffeur London — available 24/7 for bookings, quotations and enquiries by phone or email.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    note: "The quickest way to receive a quotation",
  },
  {
    label: "Telephone",
    value: site.phone,
    href: site.phoneHref,
    note: "Speak to us directly about your journey",
  },
  {
    label: "Based in",
    value: `${site.address.line1}, ${site.address.line2}`,
    href: null,
    note: "Serving London, all airports and the UK",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We are here around the clock."
        intro="Questions, quotations or a booking for later today — reach us any time and we will come straight back to you."
      />

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <Reveal
                key={channel.label}
                delay={index * 90}
                className="glass h-full rounded-2xl p-7"
              >
                <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
                  {channel.label}
                </h2>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-3 block break-words text-lg font-medium transition-colors hover:text-gold"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-medium">{channel.value}</p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">{channel.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10">
            <div className="glass rounded-2xl p-8 text-center sm:p-12">
              <h2 className="mx-auto max-w-2xl text-2xl leading-tight text-balance sm:text-3xl">
                Ready to travel? Booking takes less than two minutes.
              </h2>
              <Button asChild variant="gold" size="xl" className="mt-8">
                <Link href="/booking">Book your journey</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="faqs"
        className="scroll-mt-32 border-t border-border/60 bg-card/25 py-20 sm:py-28"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Frequent questions"
            title="The things clients ask before booking."
            intro="If your question is not here, email us — we would rather answer it now than have you find out afterwards."
          />

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-gold hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
