import { createFileRoute } from "@tanstack/react-router";
import { KEYWORDS_META, SEO_CLUSTERS } from "../lib/seo-keywords";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Works from "../sections/Works";
import Requests from "../sections/Requests";
import Awards from "../sections/Awards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Юлия Вересова: разработка программных комплексов и консалтинг по ИИ | Technical Product Owner" },
      {
        name: "description",
        content:
          "Разработка и проектирование архитектуры программных комплексов для автономных систем, промышленности и MedTech: предиктивная диагностика по телеметрии, защищённая работа с данными и нейросетями, HMI. Консалтинг по внедрению ИИ.",
      },
      { name: "keywords", content: KEYWORDS_META },
      { property: "og:title", content: "Юлия Вересова: разработка программных комплексов и консалтинг по ИИ | Technical Product Owner" },
      {
        property: "og:description",
        content:
          "Разработка и проектирование архитектуры программных комплексов для автономных систем, промышленности и MedTech: предиктивная диагностика по телеметрии, защищённая работа с данными и нейросетями, HMI. Консалтинг по внедрению ИИ.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://juliaveresova.ru/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://juliaveresova.ru/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://juliaveresova.ru/og-image.jpg" },
      { name: "twitter:title", content: "Юлия Вересова: разработка программных комплексов и консалтинг по ИИ | Technical Product Owner" },
      {
        name: "twitter:description",
        content:
          "Разработка и проектирование архитектуры программных комплексов для автономных систем, промышленности и MedTech: предиктивная диагностика по телеметрии, защищённая работа с данными и нейросетями, HMI. Консалтинг по внедрению ИИ.",
      },

    ],
    links: [{ rel: "canonical", href: "https://juliaveresova.ru/" }],
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
      <Requests />
      <Works />
      <Awards />
    </main>
  );
}
