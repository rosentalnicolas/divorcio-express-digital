import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María L.",
    date: "Marzo 2024",
    text: "Excelente atención. Tramitaron mi divorcio en menos de un mes. Todo fue digital, no tuve que moverme de mi casa. Super recomendable.",
  },
  {
    name: "Carlos M.",
    date: "Noviembre 2023",
    text: "Muy profesionales y transparentes con los costos desde el primer momento. Me explicaron todo el proceso con paciencia. Quedé muy conforme.",
  },
  {
    name: "Luciana R.",
    date: "Julio 2023",
    text: "Tenía mucho miedo de empezar el trámite, pero me acompañaron en cada paso. La sentencia salió más rápido de lo que esperaba.",
  },
  {
    name: "Martín G.",
    date: "Febrero 2022",
    text: "Los contacté desde Córdoba y pudimos hacer todo a distancia sin ningún problema. Muy buena comunicación por WhatsApp durante todo el proceso.",
  },
  {
    name: "Sofía P.",
    date: "Agosto 2021",
    text: "Contraté el servicio para un divorcio unilateral. Fueron muy claros con los tiempos y cumplieron con todo lo pactado. Los recomiendo.",
  },
  {
    name: "Diego F.",
    date: "Enero 2020",
    text: "Después de consultar en varios estudios, elegí NR Abogados por la transparencia en los honorarios. No me arrepentí. Trámite impecable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Lo que dicen nuestros <span className="text-gold">clientes</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-16" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-foreground text-sm">{t.name}</span>
                <span className="font-body text-xs text-muted-foreground">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
