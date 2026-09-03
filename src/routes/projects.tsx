import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Projects" },
      {
        name: "description",
        content:
          "Selected projects by Mbali Mazibuko: EcoTrack Dashboard, ShopMate Mobile App and Portfolio CMS.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Projects" },
      {
        property: "og:description",
        content:
          "Selected projects by Mbali Mazibuko: EcoTrack Dashboard, ShopMate Mobile App and Portfolio CMS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return <PortfolioPage activeSection="projects" />;
}
