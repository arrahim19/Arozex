import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  const distDir = phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-build";

  return {
    distDir,
    output: "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };
}
