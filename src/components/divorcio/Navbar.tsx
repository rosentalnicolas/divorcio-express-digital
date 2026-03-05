import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Tipos", href: "#tipos" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-sm border-b border-border/10">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg font-bold text-primary-foreground tracking-wider">
          NR ABOGADOS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20por%20un%20divorcio" target="_blank" rel="noopener noreferrer">
              Consultar
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-dark border-t border-border/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-2" asChild>
            <a href="https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20por%20un%20divorcio" target="_blank" rel="noopener noreferrer">
              Consultar
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
