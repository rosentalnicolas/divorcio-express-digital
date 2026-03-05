import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTABanner = () => {
  const whatsappUrl = "https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

  return (
    <section className="py-14 bg-slate-dark">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="font-body text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
          Consultanos sin compromiso. Respondemos en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </Button>
          <Button variant="goldOutline" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#contacto">
              Solicitar Entrevista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
