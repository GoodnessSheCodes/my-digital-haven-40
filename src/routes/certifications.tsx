import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Certifications" },
      {
        name: "description",
        content: "Professional certifications of Mbali Mazibuko, including AWS Certified Cloud Practitioner.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Certifications" },
      {
        property: "og:description",
        content: "Professional certifications of Mbali Mazibuko, including AWS Certified Cloud Practitioner.",
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
