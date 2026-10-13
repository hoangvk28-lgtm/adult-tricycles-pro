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
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "m.media-amazon.com" }],
  },
};

export default nextConfig;
