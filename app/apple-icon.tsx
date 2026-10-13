import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, background: "#12416b", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="150" height="150" viewBox="0 0 48 48">
          <circle cx="13" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="35" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="31" cy="34" r="5" fill="none" stroke="#f3a27a" strokeWidth="2.5" />
          <path d="M13 31 L21 18 H30 L35 31 M21 18 L24 31 H35 M19 14 H25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
