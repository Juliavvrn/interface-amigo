import { createFileRoute } from "@tanstack/react-router";
import ProjectPage from "../components/ProjectPage";

export const Route = createFileRoute("/works/$slug")({
  head: () => ({
    meta: [
      { title: "Case Study — JULIA VERESOVA" },
      {
        name: "description",
        content:
          "Case study by JULIA VERESOVA — independent digital design studio.",
      },
      { property: "og:title", content: "Case Study — JULIA VERESOVA" },
      {
        property: "og:description",
        content:
          "Case study by JULIA VERESOVA — independent digital design studio.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});
