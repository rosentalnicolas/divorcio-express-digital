import { Shield, Scale, Home, HeartHandshake } from "lucide-react";

const services = [
  { icon: Scale, label: "Propuesta Reguladora" },
  { icon: Home, label: "División de Bienes" },
  { icon: HeartHandshake, label: "Cuota Alimentaria" },
  { icon: Shield, label: "Régimen de Visitas" },
];

const IntegralService = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Servicio <span className="text-gold">Integral</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />
        <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          Nos encargamos de todo el proceso legal. Desde la elaboración de la propuesta reguladora, 
          la división de bienes y la determinación de la cuota alimentaria si fuera necesario. 
          Acompañamos a nuestros clientes en cada paso hasta la obtención de la sentencia.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-gold/30 bg-card flex items-center justify-center">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <span className="font-body text-sm text-foreground/80 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegralService;
