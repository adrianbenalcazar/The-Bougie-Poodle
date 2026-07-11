import { FAQS } from "@/lib/constants";
import { faqJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";

export function FaqAccordion() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <JsonLd data={faqJsonLd()} />
      <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" align="center" className="mx-auto" />
      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion>
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`} className="border-sand/70">
              <AccordionTrigger className="py-5 font-display text-base text-ink hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
