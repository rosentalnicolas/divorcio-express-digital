import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto a la brevedad.",
    });
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Solicitar Entrevista
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />
        <p className="text-center font-body text-muted-foreground mb-12">
          Completá el formulario y nos pondremos en contacto a la brevedad.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Input
            type="tel"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Textarea
            placeholder="¿Necesitás divorciarte? Escribinos tu consulta..."
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            rows={5}
            className="bg-card border-border font-body resize-none"
          />
          <Button variant="gold" size="lg" type="submit" className="w-full py-6 text-base">
            <Send className="mr-2 h-5 w-5" />
            Solicitar Entrevista
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
