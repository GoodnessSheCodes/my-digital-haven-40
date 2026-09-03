import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Software Engineer' },
      {
        name: "description",
        content: "Portfolio of Goodness Mbali Mazibuko, a Johannesburg-based software engineer working in Java, Spring Boot and Python.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Software Engineer" },
      {
        property: "og:description",
        content: "Portfolio of Goodness Mbali Mazibuko, a Johannesburg-based software engineer working in Java, Spring Boot and Python.",
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
