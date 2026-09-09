import { NextResponse } from "next/server";

import {
  bookingSchema,
  buildReference,
  type BookingFieldErrors,
} from "@/lib/booking";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not read that request." },
      { status: 400 },
    );
  }

  const parsed = bookingSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: BookingFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as keyof BookingFieldErrors] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        fieldErrors,
      },
      { status: 422 },
    );
  }

  const booking = parsed.data;
  const reference = buildReference();

  // Without a mail provider configured the booking request is recorded in the
  // server log, so the site is fully usable in development and on a fresh
  // deployment. Set BOOKING_WEBHOOK_URL to forward requests to email, Slack
  // or any automation platform.
  const webhook = process.env.BOOKING_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reference, ...booking }),
      });
    } catch (error) {
      console.error("[booking] webhook delivery failed", error);
    }
  } else {
    console.info(
      `[booking] ${reference}`,
      JSON.stringify(
        {
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          service: booking.service,
          vehicle: booking.vehicle,
          pickup: booking.pickup,
          destination: booking.destination,
          date: booking.date,
          time: booking.time,
          passengers: booking.passengers,
          flight: booking.flight,
        },
        null,
        2,
      ),
    );
  }

  return NextResponse.json({ ok: true, reference });
}
