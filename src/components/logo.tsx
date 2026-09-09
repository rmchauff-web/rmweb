import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  withStrapline = true,
}: {
  className?: string;
  withStrapline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <Image
        src="/images/rm-shield.png"
        alt=""
        width={289}
        height={308}
        priority
        className="h-10 w-auto shrink-0 sm:h-11"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-[0.14em] uppercase sm:text-base">
          RM Chauffeur
        </span>
        {withStrapline ? (
          <span className="mt-1 text-[0.55rem] font-medium tracking-[0.32em] text-gold uppercase">
            London
          </span>
        ) : null}
      </span>
    </Link>
  );
}
