import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  turbopack: { root: path.join(__dirname) },
  // Historical WordPress URLs end in "/"; keep that shape for every route.
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www -> apex (canonical is https://adulttricyclespro.com). Swap if the client prefers www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.adulttricyclespro.com" }],
        destination: "https://adulttricyclespro.com/:path*",
        permanent: true,
      },
      // Historical WordPress URLs (Wayback, 2019-2023) mapped to their closest current page.
      { source: "/5-safety-tips-for-riding-your-adult-tricycle", destination: "/how-to-ride-an-adult-tricycle-safely/", permanent: true },
      { source: "/7-reasons-you-need-a-3-wheel-bike-now", destination: "/how-to-shop-for-your-first-adult-three-wheel-bike/", permanent: true },
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/about-us/disclosure-statement", destination: "/affiliate-disclosure/", permanent: true },
      { source: "/about-us/privacy-policy", destination: "/privacy-policy/", permanent: true },
      { source: "/about-us/research-methodology", destination: "/how-we-research/", permanent: true },
      { source: "/about-us/media-press", destination: "/contact/", permanent: true },
      { source: "/category/blog", destination: "/guides/", permanent: true },
      { source: "/category/tricycle-reviews", destination: "/adult-tricycles/", permanent: true },
      { source: "/author/adulttricycle", destination: "/about/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "m.media-amazon.com" }],
  },
};

export default nextConfig;
