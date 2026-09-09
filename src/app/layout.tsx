import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site";

import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Chauffeur Service in London`,
    template: `%s | ${site.name}`,
  },
  description:
    "RM Chauffeur London provides premium chauffeur services across London and the UK — airport transfers, weddings, special occasions and private hire in a Mercedes-Benz S-Class, V-Class or party bus. Driven by excellence, defined by trust.",
  keywords: [
    "chauffeur service London",
    "airport transfer London",
    "Heathrow chauffeur",
    "wedding car hire London",
    "Mercedes S-Class chauffeur",
    "Mercedes V-Class chauffeur",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Premium Chauffeur Service in London`,
    description:
      "Premium chauffeur-driven travel across London and the UK. Airport transfers, weddings, special occasions and private hire — available 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium Chauffeur Service`,
    description:
      "Premium chauffeur services across London and the United Kingdom.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineService",
  name: site.name,
  description:
    "Premium chauffeur services across London and the United Kingdom, including airport transfers, weddings, special occasions and private hire.",
  url: site.url,
  email: site.email,
  priceRange: "£££",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${body.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Toaster position="bottom-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
