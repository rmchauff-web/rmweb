import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all duration-500 hover:border-gold/45",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold sm:text-2xl">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <span className="mt-6 text-[0.68rem] font-medium tracking-[0.2em] text-gold uppercase transition-colors group-hover:text-gold-light">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
