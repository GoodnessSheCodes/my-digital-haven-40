import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Work Experience" },
      {
        name: "description",
        content: "Work experience of Mbali Mazibuko, full-stack developer at TechFlow Solutions and CloudNest Agency.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Work Experience" },
      {
        property: "og:description",
        content: "Work experience of Mbali Mazibuko, full-stack developer at TechFlow Solutions and CloudNest Agency.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return <PortfolioPage activeSection="experience" />;
}
