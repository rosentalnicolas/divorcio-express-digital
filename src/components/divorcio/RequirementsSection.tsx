import { IdCard, BookOpen, Baby } from "lucide-react";

const requirements = [
  {
    icon: IdCard,
    title: "DNI de ambos esposos",
    description: "Fotocopia del Documento Nacional de Identidad de cada cónyuge.",
  },
  {
    icon: BookOpen,
    title: "Libreta o Acta de Matrimonio",
    description: "Original o copia certificada del acta de matrimonio.",
  },
  {
    icon: Baby,
    title: "Partida de nacimiento de los hijos",
    description: "Solo en caso de que haya hijos menores de edad.",
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Documentación Requerida
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-16" />
        <div className="grid md:grid-cols-3 gap-10">
          {requirements.map((req) => (
            <div key={req.title} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <req.icon className="h-10 w-10 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {req.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
