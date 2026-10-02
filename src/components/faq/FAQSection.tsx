import { FAQPageType } from "@/src/types/faq.types";
import FAQCard from "./FAQCard";
import { log } from "console";

type FAQSectionProps = {
    sections: FAQPageType[]
    
}

const FAQSection = ({sections}: FAQSectionProps) => {
    console.log(sections)
    return (
        <section>
        <h1 className="mb-4">Preguntas Frecuentes</h1>
        <div className="grid grid-cols-12 gap-4 mb-8">
            {sections.map(section => 
                <FAQCard key={section.slug} label={section.title} href={`/faq${section.slug}`}/>
            )}
        </div>
    </section>
    )
}

export default FAQSection 