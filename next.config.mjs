// import createMDX from "@next/mdx";
import createPWA from "@ducanh2912/next-pwa";

const withPWA = createPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  images: { unoptimized: true },
};

// const withMDX = createMDX();

export default withPWA(nextConfig);
