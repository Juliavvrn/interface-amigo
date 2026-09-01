import { createFileRoute } from "@tanstack/react-router";
import { KEYWORDS_META, SEO_CLUSTERS } from "../lib/seo-keywords";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Works from "../sections/Works";
import Awards from "../sections/Awards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julia Veresova — Technical Product Owner & Full-Stack AI Engineer" },
      {
        name: "description",
        content:
          "Разработка MVP и AI SaaS под ключ, MedTech/NeuroTech платформы, RAG-архитектуры и оркестрация LLM, technical product ownership, full-cycle разработка на React и Supabase. Портфолио и кейсы Юлии Вересовой.",
      },
      { name: "keywords", content: KEYWORDS_META },
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
