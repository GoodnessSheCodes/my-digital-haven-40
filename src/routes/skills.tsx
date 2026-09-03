import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Skills" },
      {
        name: "description",
        content:
          "Technical and soft skills of Mbali Mazibuko, including React, TypeScript, Node.js, leadership and mentoring.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Skills" },
      {
        property: "og:description",
        content:
          "Technical and soft skills of Mbali Mazibuko, including React, TypeScript, Node.js, leadership and mentoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return <PortfolioPage activeSection="skills" />;
}
