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
      { title: "Юлия Вересова: управление проектами и разработка в сфере БАС | Technical Product Owner" },
      {
        name: "description",
        content:
          "Управление проектами и разработка программных комплексов в сфере беспилотных авиационных систем (БАС): диагностика по бортовой телеметрии, HMI, закрытые контуры данных. Консалтинг по внедрению ИИ. Смежный вектор R&D: MedTech.",
      },
      { name: "keywords", content: KEYWORDS_META },
      { property: "og:title", content: "Юлия Вересова: управление проектами и разработка в сфере БАС | Technical Product Owner" },
      {
        property: "og:description",
        content:
          "Управление проектами и разработка программных комплексов в сфере беспилотных авиационных систем (БАС): диагностика по бортовой телеметрии, HMI, закрытые контуры данных. Консалтинг по внедрению ИИ. Смежный вектор R&D: MedTech.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://juliaveresova.ru/" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://juliaveresova.ru/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://juliaveresova.ru/og-image.jpg" },
      { name: "twitter:title", content: "Юлия Вересова: управление проектами и разработка в сфере БАС | Technical Product Owner" },
      {
        name: "twitter:description",
        content:
          "Управление проектами и разработка программных комплексов в сфере беспилотных авиационных систем (БАС): диагностика по бортовой телеметрии, HMI, закрытые контуры данных. Консалтинг по внедрению ИИ. Смежный вектор R&D: MedTech.",
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
