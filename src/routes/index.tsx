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
      { property: "og:title", content: "Julia Veresova — Technical Product Owner & Full-Stack AI Engineer" },
      {
        property: "og:description",
        content:
          "MVP и AI SaaS под ключ · MedTech/NeuroTech · RAG и LLM-оркестрация · Product Ownership · React & Supabase. Кейсы от исследования до продакшена.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://interface-amigo.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://interface-amigo.lovable.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://interface-amigo.lovable.app/og-image.png" },
      { name: "twitter:title", content: "Julia Veresova — Technical Product Owner & Full-Stack AI Engineer" },
      {
        name: "twitter:description",
        content:
          "Разработка MVP и AI SaaS под ключ, MedTech/NeuroTech платформы, RAG и оркестрация LLM, full-cycle разработка на React и Supabase.",
      },
    ],
    links: [{ rel: "canonical", href: "https://interface-amigo.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services",
          itemListElement: SEO_CLUSTERS.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: c.cluster,
              description: c.queries.join("; "),
              provider: { "@type": "Person", name: "Julia Veresova" },
            },
          })),
        }),
      },
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
