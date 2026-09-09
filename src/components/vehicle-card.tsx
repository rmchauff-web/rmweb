import Image from "next/image";

import type { Vehicle } from "@/lib/site";
import { cn } from "@/lib/utils";

export function VehicleCard({
  vehicle,
  detailed = false,
  className,
}: {
  vehicle: Vehicle;
  detailed?: boolean;
  className?: string;
}) {
  return (
    <article
      id={vehicle.slug}
      className={cn(
        "group flex scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-colors duration-500 hover:border-gold/40",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        />
        <span className="glass-dark absolute top-4 left-4 rounded-full px-3.5 py-1.5 text-[0.62rem] font-medium tracking-[0.18em] text-gold uppercase">
          {vehicle.klass}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold sm:text-2xl">{vehicle.name}</h3>

        <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.68rem] font-medium tracking-[0.14em] text-gold uppercase">
          <div>
            <dt className="sr-only">Passengers</dt>
            <dd>{vehicle.passengers}</dd>
          </div>
          <div>
            <dt className="sr-only">Luggage</dt>
            <dd>{vehicle.luggage}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {vehicle.description}
        </p>

        {detailed ? (
          <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6 text-sm">
            {vehicle.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-gold"
                />
                <span className="text-foreground/85">{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
