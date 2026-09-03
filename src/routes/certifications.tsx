import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Certifications' },
      {
        name: "description",
        content: "Certifications: AWS Cloud Practitioner Essentials, FNB App Academy Full Stack Development, GenAI for Software Engineers.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Certifications" },
      {
        property: "og:description",
        content: "Certifications: AWS Cloud Practitioner Essentials, FNB App Academy Full Stack Development, GenAI for Software Engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return <PortfolioPage activeSection="certifications" />;
}
