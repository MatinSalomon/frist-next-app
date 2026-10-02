import FAQCard from "@/src/components/faq/FAQCard";
import FAQSection from "@/src/components/faq/FAQSection";
import faqsApi from "@/src/services/faqs/faqs.service";
import Link from "next/link";

export default async function FAQPage({params}: {params: {slug: string}}) {
  const faqPages = await faqsApi.getFAQPages()
  const {slug} = await params

  const faqPage = faqPages.data.find(page => page.slug === `/${slug}`)

  console.log(slug)
  return (
    <main>
      <FAQSection sections={faqPages.data}/>

      <section className="flex flex-col">
        <h2>{faqPage?.title}</h2>
        <div>{faqPage?.createdAt}</div>
      </section>

    </main>
  );
}
