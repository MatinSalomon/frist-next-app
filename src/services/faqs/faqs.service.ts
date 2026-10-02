import { StrapiResultType } from "@/src/types/srapi.types"
import { FAQPageType } from "@/src/types/faq.types"
import { strapiGet } from "../common/strapi.service"

class FAQAPI {
    getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => strapiGet("/faq-pages")
}

const faqsApi =  new FAQAPI

export default faqsApi
