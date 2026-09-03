import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Education' },
      {
        name: "description",
        content: "Education: Occupational Certificate in Software Engineering (WeThinkCode_), LLB from the University of Johannesburg.",
      },
      { property: "og:title", content: "Education: Occupational Certificate in Software Engineering (WeThinkCode_), LLB from the University of Johannesburg." },
      { property: "og:description", content: "Education: Occupational Certificate in Software Engineering (WeThinkCode_), LLB from the University of Johannesburg." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Education,
});

function Education() {
  return <PortfolioPage activeSection="education" />;
}
