import heroImage from "@/assets/buenos-aires-skyline.jpg";
import { Button } from "@/components/ui/button";

const whatsappUrl = "https://wa.me/5491163739477?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }} />
      
      <div className="absolute inset-0 bg-[#1a1f2e]/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block px-6 py-2 border border-[#C5A059]/30 rounded-full">
            <span className="font-heading text-sm md:text-base tracking-[0.2em] text-white font-bold">
              NR ABOGADOS
            </span>
            <span className="font-body text-sm md:text-base tracking-[0.15em] text-[#C5A059] ml-2">
              · ESTUDIO JURÍDICO ·
            </span>
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-[0.95]">
          DIVORCIO EXPRESS
          <br />
          <span className="text-white">ARGENTINA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto mb-10 leading-relaxed">Tramitamos tu divorcio de común acuerdo de forma rápida y sin complicaciones

        </p>

        {/* CTA */}
        <Button
          variant="gold"
          size="lg"
          className="text-sm tracking-[0.15em] px-12 py-6"
          asChild>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            REALIZAR CONSULTA
          </a>
        </Button>
      </div>
    </section>);

};

export default HeroSection;