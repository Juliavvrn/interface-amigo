import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";
import { getProject } from "../data/content";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project
      ? `${project.title.en} — Julia Veresova`
      : "Case study — Julia Veresova";
    const description = project
      ? (project.description[0]?.en ?? `${project.title.en} — case study by Julia Veresova.`).slice(0, 155)
      : "AI product case study by Julia Veresova — technical product owner and full-stack AI engineer.";
    const url = `https://juliaveresova.ru/works/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://juliaveresova.ru/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: "https://juliaveresova.ru/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                name: title,
                headline: project?.title.en ?? "Case study",
                description,
                url,
                inLanguage: ["ru", "en"],
                author: {
                  "@type": "Person",
                  name: "Julia Veresova",
                  url: "https://juliaveresova.ru",
                },
                image: "https://juliaveresova.ru/og-image.jpg",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Julia Veresova",
                    item: "https://juliaveresova.ru/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: project?.title.en ?? "Case study",
                    item: url,
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },

  component: ProjectPage,
});
