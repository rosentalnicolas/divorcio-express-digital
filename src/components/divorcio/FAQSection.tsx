import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda un divorcio express?",
    answer:
      "El tiempo varía según la jurisdicción. En CABA, un divorcio de común acuerdo puede resolverse en aproximadamente 20 a 45 días hábiles. En Provincia de Buenos Aires, puede extenderse hasta 2 o 3 meses dependiendo del juzgado asignado.",
  },
  {
    question: "¿Necesito el consentimiento de mi cónyuge?",
    answer:
      "No necesariamente. Existe el divorcio unilateral, que puede ser solicitado por una sola de las partes sin el consentimiento ni la firma del otro cónyuge. Desde 2015, el Código Civil y Comercial argentino permite el divorcio sin expresión de causa.",
  },
  {
    question: "¿Qué pasa con los bienes?",
    answer:
      "La división de bienes se incluye dentro de la propuesta reguladora que se presenta al juzgado. Si los cónyuges están de acuerdo, pueden determinar cómo se reparten los bienes gananciales. Si no hay acuerdo, será el juez quien decida.",
  },
  {
    question: "¿Es necesario tener abogado para divorciarse?",
    answer:
      "Sí, la legislación argentina requiere que cada parte cuente con patrocinio letrado. En el caso del divorcio de común acuerdo, un mismo abogado puede representar a ambas partes.",
  },
  {
    question: "¿Puedo tramitar el divorcio a distancia?",
    answer:
      "Sí. Ofrecemos la posibilidad de gestionar todo el trámite de manera 100% digital. Solo necesitás enviarnos la documentación por foto o escaneada y podemos coordinar las audiencias de forma virtual.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Preguntas Frecuentes
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-12" />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:text-gold py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
