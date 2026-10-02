import FAQCard from "@/src/components/faq/FAQCard";
import FAQSection from "@/src/components/faq/FAQSection";
import faqsApi from "@/src/services/faqs/faqs.service";
import Link from "next/link";

export default async function FAQPage() {
  const faqPages = await faqsApi.getFAQPages()


  return (
    <main>
        <FAQSection sections={faqPages.data}/>

        <section>
            <h2>nueva seccion</h2>
        </section>

    </main>
  );
}
