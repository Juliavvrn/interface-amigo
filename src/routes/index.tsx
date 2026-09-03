import { createFileRoute } from "@tanstack/react-router";
import { KEYWORDS_META, SEO_CLUSTERS } from "../lib/seo-keywords";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Works from "../sections/Works";
import Awards from "../sections/Awards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      {
        name: "description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
      },
      { name: "keywords", content: KEYWORDS_META },
      { property: "og:title", content: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      {
        property: "og:description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://interface-amigo.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://interface-amigo.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://interface-amigo.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      {
        name: "twitter:description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
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
