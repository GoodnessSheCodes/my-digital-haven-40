import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Projects' },
      {
        name: "description",
        content: "Projects by Goodness Mbali Mazibuko: Payment Ledger, an event-driven messaging service and a full-stack web application.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Projects" },
      {
        property: "og:description",
        content: "Projects by Goodness Mbali Mazibuko: Payment Ledger, an event-driven messaging service and a full-stack web application.",
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
