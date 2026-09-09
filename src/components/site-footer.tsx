import Link from "next/link";

import { Logo } from "@/components/logo";
import { nav, services, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-ink">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline} Premium chauffeur-driven travel across London and
              the United Kingdom, with professionalism, discretion and comfort
              at the heart of everything we do.
            </p>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-foreground/80 transition-colors hover:text-gold"
                >
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-foreground/80 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/fleet"
                  className="text-foreground/80 transition-colors hover:text-gold"
                >
                  Our Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
              Reservations
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="break-all transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground">
                {site.address.line1}, {site.address.line2}
              </li>
              <li className="text-muted-foreground">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div aria-hidden className="hairline mt-14" />

        <div className="mt-8 flex flex-col gap-4 text-[0.65rem] font-medium tracking-[0.14em] text-muted-foreground uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
