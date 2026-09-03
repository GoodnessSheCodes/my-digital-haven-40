import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Education" },
      {
        name: "description",
        content: "Education background of Mbali Mazibuko, a full-stack developer.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Education" },
      { property: "og:description", content: "Education background of Mbali Mazibuko, a full-stack developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Education,
});

function Education() {
  return <PortfolioPage activeSection="education" />;
}
