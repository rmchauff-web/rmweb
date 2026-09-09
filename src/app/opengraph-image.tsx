import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} — premium chauffeur services in London and the United Kingdom`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(70% 70% at 80% 0%, #26200e 0%, #0a0a0a 60%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #d4af37",
              borderRadius: 999,
              color: "#d4af37",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            {site.monogram}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 30, letterSpacing: 8, fontWeight: 600 }}>
              RM CHAUFFEUR
            </div>
            <div style={{ fontSize: 15, letterSpacing: 6, color: "#d4af37" }}>
              LONDON
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              lineHeight: 1.15,
              maxWidth: 900,
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex" }}>Driven by excellence.</div>
            <div style={{ display: "flex", color: "#d4af37" }}>
              Defined by trust.
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#b3b3b3", maxWidth: 780 }}>
            Premium chauffeur services across London and the United Kingdom.
            Airport transfers, weddings, special occasions and private hire.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #3a3529",
            paddingTop: 28,
            fontSize: 20,
            letterSpacing: 3,
            color: "#d4af37",
          }}
        >
          <div>AVAILABLE 24/7</div>
          <div>BOOKINGS@RMCHAUFFEUR.COM</div>
        </div>
      </div>
    ),
    size,
  );
}
