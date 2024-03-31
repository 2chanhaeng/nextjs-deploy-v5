import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js App",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.png",
        purpose: "any",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
