import { HandshakeIcon, UserIcon } from "lucide-react";

const types = [
  {
    icon: HandshakeIcon,
    title: "Divorcio de Común Acuerdo",
    description:
      "Ambas partes están de acuerdo en divorciarse. Se presenta una propuesta reguladora conjunta ante el juzgado. Es el trámite más rápido y económico.",
    features: ["Trámite más ágil", "Menor costo", "Un solo abogado para ambas partes"],
  },
  {
    icon: UserIcon,
    title: "Divorcio Unilateral",
    description:
      "Una sola de las partes solicita el divorcio sin necesidad del consentimiento del otro cónyuge. Desde 2015, no se requiere expresar causa.",
    features: ["Sin consentimiento del otro", "Sin expresión de causa", "Derecho garantizado por ley"],
  },
];

const DivorceTypesSection = () => {
  return (
    <section id="tipos" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Tipos de <span className="text-gold">Divorcio</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-16" />
        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type) => (
            <div
              key={type.title}
              className="p-8 rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <type.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 text-center">
                {type.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-center mb-6">
                {type.description}
              </p>
              <ul className="space-y-2">
                {type.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivorceTypesSection;
