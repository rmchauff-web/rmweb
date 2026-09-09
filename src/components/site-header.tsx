"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <header
        className={cn(
          "glass-dark mx-auto max-w-7xl rounded-2xl transition-all duration-500 sm:rounded-full",
          scrolled && "shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)]",
        )}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-4 sm:h-[4.25rem] sm:px-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors",
                    active ? "text-gold" : "text-foreground/75 hover:text-gold",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full bg-gold transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild variant="gold" size="wide" className="hidden sm:inline-flex">
              <Link href="/booking">Book now</Link>
            </Button>

            <Button
              asChild
              variant="gold"
              size="sm"
              className="rounded-full px-4 text-[0.65rem] font-medium tracking-[0.14em] uppercase sm:hidden"
            >
              <Link href="/booking">Book</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="quiet"
                  size="icon-lg"
                  className="rounded-full lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full border-gold/20 bg-ink p-0 sm:max-w-sm"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                    <Logo withStrapline={false} />
                    <SheetClose asChild>
                      <Button
                        variant="quiet"
                        size="icon-lg"
                        className="rounded-full"
                        aria-label="Close menu"
                      >
                        <X className="size-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <nav aria-label="Mobile" className="flex-1 px-5 py-6">
                    <ul className="space-y-1">
                      {[...nav, { href: "/booking", label: "Booking" }].map(
                        (item, index) => (
                          <li key={item.href}>
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="flex items-baseline gap-4 border-b border-border/40 py-4 transition-colors hover:text-gold"
                              >
                                <span className="text-[0.6rem] font-medium text-gold/70">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-2xl font-semibold tracking-tight">
                                  {item.label}
                                </span>
                              </Link>
                            </SheetClose>
                          </li>
                        ),
                      )}
                    </ul>
                  </nav>

                  <div className="space-y-3 border-t border-border/60 px-5 py-6">
                    <SheetClose asChild>
                      <Button asChild variant="gold" size="xl" className="w-full">
                        <Link href="/booking">Book now</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        asChild
                        variant="goldOutline"
                        size="xl"
                        className="w-full"
                      >
                        <a href={site.emailHref}>{site.email}</a>
                      </Button>
                    </SheetClose>
                    <p className="pt-2 text-center text-[0.6rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                      {site.hours}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
