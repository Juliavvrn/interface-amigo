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
    const url = `https://interface-amigo.lovable.app/works/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectPage,
});
