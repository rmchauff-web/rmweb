import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: lets the preview browser/proxy load dev assets without 403s.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
