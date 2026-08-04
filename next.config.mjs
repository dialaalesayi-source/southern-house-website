/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Local placeholder art is SVG for now — swap in real JPG/PNG/WebP
    // photography and this can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
};

export default nextConfig;
