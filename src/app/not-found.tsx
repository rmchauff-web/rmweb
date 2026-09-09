import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 60% 10%, rgba(212, 175, 55, 0.14) 0%, transparent 65%)",
        }}
      />
      <div className="container-page relative">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-6 max-w-2xl text-4xl leading-[1.1] text-balance sm:text-5xl">
          This road does not go anywhere.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          The page you were looking for has moved or never existed. Our
          reservations desk, however, is exactly where it always is.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild variant="gold" size="xl">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="goldOutline" size="xl">
            <a href={site.emailHref}>{site.email}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
