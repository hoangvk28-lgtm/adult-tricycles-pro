import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Adult Tricycles Pro: research-based adult tricycle buying guides";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, background: "#fbfaf6", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, borderTop: "24px solid #12416b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="10" fill="#12416b" />
            <circle cx="13" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
            <circle cx="35" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
            <circle cx="31" cy="34" r="5" fill="none" stroke="#f3a27a" strokeWidth="2.5" />
            <path d="M13 31 L21 18 H30 L35 31 M21 18 L24 31 H35 M19 14 H25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#16202a" }}>Adult Tricycles Pro</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#16202a", lineHeight: 1.15, maxWidth: 1000 }}>
          Find a three-wheel bike that fits the rider, the route and the garage.
        </div>
        <div style={{ fontSize: 30, color: "#b8430f", fontWeight: 700 }}>Research-based buying guides · adulttricyclespro.com</div>
      </div>
    ),
    size,
  );
}
