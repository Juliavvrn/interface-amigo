import { createFileRoute } from "@tanstack/react-router";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Works from "../sections/Works";
import Awards from "../sections/Awards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julia Veresova — AI Product Owner Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Julia Veresova, technical product owner and full-stack AI engineer: voice agents, agentic workflows, RAG orchestration, data architecture and shipped AI products.",
      },
      { property: "og:title", content: "Julia Veresova — AI Product Owner Portfolio" },
      {
        property: "og:description",
        content:
          "Case studies in AI agents, agentic workflows, RAG orchestration and data architecture — from research to shipped product.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://interface-amigo.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://interface-amigo.lovable.app/" }],
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
