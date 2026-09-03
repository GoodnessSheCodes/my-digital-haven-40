import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: 'Goodness Mbali Mazibuko — Contact' },
      {
        name: "description",
        content: "Contact Goodness Mbali Mazibuko by email, phone, GitHub or LinkedIn, and download her CV.",
      },
      { property: "og:title", content: "Goodness Mbali Mazibuko — Contact" },
      { property: "og:description", content: "Contact Goodness Mbali Mazibuko by email, phone, GitHub or LinkedIn, and download her CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return <PortfolioPage activeSection="contact" />;
}
