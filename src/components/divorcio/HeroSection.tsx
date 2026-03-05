import heroImage from "@/assets/buenos-aires-skyline.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-slate-dark/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block w-20 h-[2px] bg-gold mb-6" />
        </div>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight mb-6">
          DIVORCIO EXPRESS{" "}
          <span className="text-gold">ARGENTINA</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Tramitamos tu divorcio de común acuerdo de forma rápida, digital y sin complicaciones
        </p>
        <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Iniciar Consulta por WhatsApp
          </a>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
