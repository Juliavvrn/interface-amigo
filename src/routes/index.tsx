import { createFileRoute } from "@tanstack/react-router";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Works from "../sections/Works";
import Awards from "../sections/Awards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JULIA VERESOVA — Digital Design Studio" },
      {
        name: "description",
        content:
          "JULIA VERESOVA — an independent digital design studio crafting award-winning brands, websites and experiences.",
      },
      { property: "og:title", content: "JULIA VERESOVA — Digital Design Studio" },
      {
        property: "og:description",
        content:
          "Independent digital design studio crafting award-winning brands, websites and experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Works />
      <Awards />
    </main>
  );
}
