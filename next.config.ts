// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
  output: "standalone",
});

export default nextConfig;
