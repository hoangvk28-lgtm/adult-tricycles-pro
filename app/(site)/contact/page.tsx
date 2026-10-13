import { buildMetadata } from "@/lib/seo";
import { StaticPage } from "@/components/StaticPage";

export const metadata = buildMetadata({
  title: "Contact Adult Tricycles Pro",
  description: "Contact Adult Tricycles Pro to report a specification error, suggest a tricycle topic, or ask about our editorial and affiliate policies.",
  path: "/contact/",
});

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Contact() {
  return (
    <StaticPage title="Contact" path="/contact/">
      <p>Spotted a specification that has changed, or want us to cover a topic? We read every message, though we cannot give personal medical advice or recommend a trike for a specific health condition.</p>
      {EMAIL ? (
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      ) : (
        <p>Our contact address is being set up. Please check back soon.</p>
      )}
    </StaticPage>
  );
}
