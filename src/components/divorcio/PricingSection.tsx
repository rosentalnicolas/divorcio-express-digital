import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/5491163739477?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

const plans = [
  {
    title: "Divorcio CABA",
    subtitle: "Capital Federal",
    price: "$125.000",
    installments: "12 cuotas fijas de $10.417",
    features: [
      "Divorcio de común acuerdo",
      "Propuesta reguladora incluida",
      "Tramitación 100% digital",
      "Seguimiento personalizado",
      "Sentencia en 30-60 días",
    ],
    highlighted: true,
  },
  {
    title: "Divorcio GBA",
    subtitle: "Gran Buenos Aires",
    price: "Consultar",
    installments: "Planes de pago disponibles",
    features: [
      "Divorcio de común acuerdo o unilateral",
      "Propuesta reguladora incluida",
      "Gestión presencial y digital",
      "Seguimiento personalizado",
      "Plazo según jurisdicción",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Honorarios <span className="text-gold">Transparentes</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-center font-body text-muted-foreground mb-14 max-w-2xl mx-auto">
          Sin costos ocultos. Sabés exactamente cuánto vas a pagar desde el primer momento.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-lg p-8 border transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-gold bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-accent-foreground text-xs font-body font-semibold tracking-[0.1em] px-4 py-1 rounded-full">
                    MÁS ELEGIDO
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {plan.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {plan.subtitle}
                </p>
              </div>

              <div className="text-center mb-6">
                <span className="font-heading text-4xl font-bold text-gold">
                  {plan.price}
                </span>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  {plan.installments}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "gold" : "goldOutline"}
                size="lg"
                className="w-full py-5 text-sm tracking-[0.1em]"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  CONSULTAR AHORA
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
