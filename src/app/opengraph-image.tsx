import { ImageResponse } from "next/og";

export const alt = "Dango Edem Peter - Full Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0B0D",
          color: "#ECEEF1",
          padding: "64px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 20,
            color: "#A1A7B0",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#2DD4BF",
            }}
          />
          Accra, Ghana
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Dango Edem Peter
          </div>
          <div style={{ fontSize: 28, color: "#A1A7B0", lineHeight: 1.4 }}>
            Full-Stack Software Developer
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 22,
              color: "#6B7280",
              maxWidth: 820,
              lineHeight: 1.45,
            }}
          >
            Builds secure, scalable web applications for education, public
            service, and community impact.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#6B7280",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>dangoedempeter.vercel.app</span>
          <span style={{ color: "#2DD4BF" }}>Next.js · TypeScript</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
