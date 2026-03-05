import { Monitor, Zap, CreditCard } from "lucide-react";

const cards = [
  {
    icon: Monitor,
    title: "100% Digital",
    description: "Gestionamos todo a distancia, sin que tengas que moverte de tu casa.",
  },
  {
    icon: Zap,
    title: "Rapidez Garantizada",
    description: "Obtené tu sentencia de divorcio en tiempo récord en CABA y GBA.",
  },
  {
    icon: CreditCard,
    title: "Costo Fijo y Cuotas",
    description: "Honorarios transparentes y facilidades de pago adaptadas a vos.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          ¿Por qué elegirnos?
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-16" />
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group text-center p-8 rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <card.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
