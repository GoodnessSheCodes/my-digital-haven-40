import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Experience' },
      {
        name: "description",
        content: "Experience of Goodness Mbali Mazibuko: peer mentor at WeThinkCode_ and legal trainee at the UJ Law Clinic.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Experience" },
      {
        property: "og:description",
        content: "Experience of Goodness Mbali Mazibuko: peer mentor at WeThinkCode_ and legal trainee at the UJ Law Clinic.",
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
