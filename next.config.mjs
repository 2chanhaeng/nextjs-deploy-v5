import { images } from "./images.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images,
};

export default nextConfig;
