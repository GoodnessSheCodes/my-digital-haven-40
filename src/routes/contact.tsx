import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Mbali Mazibuko — Contact" },
      {
        name: "description",
        content: "Get in touch with Mbali Mazibuko via email, GitHub or LinkedIn. Download the CV.",
      },
      { property: "og:title", content: "Mbali Mazibuko — Contact" },
      { property: "og:description", content: "Get in touch with Mbali Mazibuko via email, GitHub or LinkedIn. Download the CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return <PortfolioPage activeSection="contact" />;
}
