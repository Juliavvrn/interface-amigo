import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";
import { getProject } from "../data/content";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project
      ? `${project.title.ru} — кейс Юлии Вересовой`
      : "Кейс — Юлия Вересова";
    const description = project
      ? `${project.title.ru}. ${project.description[0]?.ru ?? ''}`.replace(/\s+/g, ' ').slice(0, 157).replace(/\s\S*$/, '') + '…'
      : "Кейс Юлии Вересовой — Technical Product Owner в AI, HMI и автономных системах.";
    const keywords = project
      ? [project.title.ru, project.domain.ru, project.category.ru, project.stack.ru, 'Юлия Вересова', 'Technical Product Owner', 'кейс'].join(', ')
      : 'Юлия Вересова, кейс';
    const url = `https://juliaveresova.ru/works/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:site_name", content: "Юлия Вересова" },
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
                headline: project?.title.ru ?? "Кейс",
                description,
                url,
                inLanguage: "ru", keywords, dateCreated: project?.year, about: project?.domain.ru,
                author: {
                  "@type": "Person",
                  name: "Юлия Вересова",
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
                    name: "Юлия Вересова",
                    item: "https://juliaveresova.ru/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: project?.title.ru ?? "Кейс",
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
