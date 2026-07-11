import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAF6F1",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, #FBE1DC 0%, rgba(251,225,220,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            borderRadius: "50%",
            backgroundColor: "#E8412C",
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 40 }}>🐩</div>
        </div>
        <div
          style={{
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9C2A1B",
            fontWeight: 600,
            marginBottom: 18,
            display: "flex",
          }}
        >
          Westchester County
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#1B1815",
            fontWeight: 600,
            lineHeight: 1.05,
            display: "flex",
            maxWidth: 900,
          }}
        >
          {BUSINESS.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#6B655F",
            marginTop: 22,
            display: "flex",
            maxWidth: 820,
          }}
        >
          Luxury Dog &amp; Cat Grooming
        </div>
      </div>
    ),
    { ...size }
  );
}
