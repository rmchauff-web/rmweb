import type { Metadata } from "next";

import { PageHero } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The booking, payment, waiting time and cancellation terms that apply to chauffeur services provided by RM Chauffeur London.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Bookings and quotations",
    body: [
      "A booking is confirmed only when we have issued a written confirmation with a reference number. Quotations are based on the journey details supplied to us. Material changes — additional stops, extra passengers requiring a larger vehicle, or a significant change of route — may alter the price, and we will always tell you before the journey begins.",
    ],
  },
  {
    heading: "2. Prices and payment",
    body: [
      "Quotations state clearly what is included. No payment is taken through this website; payment terms are agreed when your booking is confirmed.",
      "For multi-day and long-term private hire we can usually offer a better price than our fixed rates — contact us for a personal quotation.",
    ],
  },
  {
    heading: "3. Airport collections and waiting time",
    body: [
      "Airport collections include a complimentary waiting period measured from the actual landing time, which we confirm with your booking. Because we track your flight, a delayed arrival simply moves the collection — the delay itself is not charged.",
    ],
  },
  {
    heading: "4. Cancellations and no-shows",
    body: [
      "Cancellation terms are stated in your written confirmation. Weddings, special occasion vehicles and multi-day itineraries carry their own terms, which are always set out before you commit.",
    ],
  },
  {
    heading: "5. Our responsibilities",
    body: [
      "All vehicles are licensed, maintained and insured for private hire, and all chauffeurs hold the required licences.",
      "We plan journeys with a margin for traffic and will do everything reasonable to arrive on time. We cannot accept liability for delays caused by circumstances beyond our control, including road closures, severe weather, accidents or acts of authority.",
    ],
  },
  {
    heading: "6. Passenger conduct and vehicles",
    body: [
      "Smoking, vaping and the consumption of illegal substances are not permitted in our vehicles. Seat belts must be worn. Assistance dogs are always welcome; other animals by prior arrangement.",
      "Passengers are responsible for damage or soiling caused to a vehicle, charged at the cost of specialist cleaning or repair. Chauffeurs may end a journey where a passenger's conduct puts safety at risk.",
    ],
  },
  {
    heading: "7. Luggage and property",
    body: [
      "Luggage must be declared at the time of booking so that a suitable vehicle is allocated. Property left in a vehicle is logged and held securely; we will arrange return by courier at cost.",
    ],
  },
  {
    heading: "8. Complaints and governing law",
    body: [
      `Please raise any concern with us at ${site.email} within 14 days of travel. These terms are governed by the law of England and Wales and are subject to the exclusive jurisdiction of its courts.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        intro="Plain terms, written to be read. If anything here is unclear, ask us before you book and we will explain it properly."
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
