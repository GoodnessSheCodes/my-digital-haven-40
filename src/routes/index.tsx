import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mbali Mazibuko, a full-stack developer building fast, accessible web products.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Mbali Mazibuko, a full-stack developer building fast, accessible web products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return <PortfolioPage activeSection="home" />;
}
