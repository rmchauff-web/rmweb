import type { Metadata } from "next";

import { PageHero } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RM Chauffeur London collects, uses and protects personal data under UK GDPR.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is the data controller for the personal information described in this policy. You can reach us about anything data-related at ${site.email}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you enquire or travel with us we collect your name, contact details, journey details such as pick-up and destination addresses, flight numbers, passenger numbers and any preferences or requirements you choose to tell us about.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "To prepare quotations, arrange and carry out your journeys, keep you informed about your chauffeur and vehicle, take payment and meet our legal obligations as a private hire operator.",
      "We rely on performance of a contract for booking and delivering journeys, legal obligation for licensing and accounting records, and legitimate interests for service improvement and fraud prevention.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "Your chauffeur receives only the details needed to complete the journey. We share information with our payment processor, our accountants, and the authorities where we are legally required to do so.",
      "We never sell personal data, and we do not disclose the identity of our clients or the journeys they have taken to any third party unless compelled by law.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Booking and financial records are retained for as long as HMRC and licensing requirements demand. Enquiries that do not become bookings are deleted after twelve months.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You may ask for a copy of the personal data we hold about you, ask us to correct or delete it, object to processing, or withdraw consent at any time by emailing ${site.email}. If you are not satisfied you may complain to the Information Commissioner's Office at ico.org.uk.`,
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This website uses only the cookies required to serve pages securely. We do not run advertising trackers or third-party profiling scripts.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="We hold as little personal information as possible, for as short a time as possible, and we never trade it. This policy explains what that means in practice."
      />

      <section className="py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-[0.68rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Last updated 1 January 2026
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
