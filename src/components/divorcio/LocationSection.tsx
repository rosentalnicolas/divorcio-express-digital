import { MapPin, Star } from "lucide-react";

const reviews = [
{
  name: "Alejandra V.",
  text: "Excelentes profesionales, me ayudaron con todo el trámite de divorcio de forma impecable. Muy recomendables."
},
{
  name: "Fernando T.",
  text: "Atención de primera. Respondieron todas mis dudas y el proceso fue mucho más rápido de lo que imaginé."
},
{
  name: "Paula S.",
  text: "Muy buena experiencia. Transparentes con los costos y siempre disponibles. Los recomiendo sin dudarlo."
}];


const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nuestra <span className="text-gold">Ubicación</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />

        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) =>
            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            )}
          </div>
          <span className="font-body text-sm text-muted-foreground">Más de 100 reseñas positivas en Google Maps

          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-lg overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.3!2d-58.4377!3d-34.5592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3e4b0f0c7%3A0x0!2sAv.+del+Libertador+5990%2C+C1428ARP+CABA!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación NR Abogados" />
              
            </div>
            <div className="flex items-center gap-2 mt-4">
              <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">
                Av. Libertador 5990, Piso 8° — Capital Federal, Buenos Aires
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Reseñas destacadas
            </h3>
            {reviews.map((r) =>
            <div key={r.name} className="p-5 rounded-lg border border-border bg-card">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) =>
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                )}
                </div>
                <p className="font-body text-sm text-muted-foreground italic mb-2">"{r.text}"</p>
                <span className="font-heading text-sm font-semibold text-foreground">{r.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default LocationSection;