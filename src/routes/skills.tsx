import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Skills' },
      {
        name: "description",
        content: "Technical and soft skills: Java, Spring Boot, Python, REST APIs, SQL, Docker, Kafka, plus analytical and teamwork strengths.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Skills" },
      {
        property: "og:description",
        content: "Technical and soft skills: Java, Spring Boot, Python, REST APIs, SQL, Docker, Kafka, plus analytical and teamwork strengths.",
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
