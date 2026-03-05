import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "INICIO", href: "#" },
  { label: "TIPOS", href: "#tipos" },
  { label: "REQUISITOS", href: "#requisitos" },
  { label: "TESTIMONIOS", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACTO", href: "#contacto" },
];

const whatsappUrl = "https://wa.me/5491163739477?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1f2e]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-[0.2em] text-[#C5A059]"
        >
          NR ABOGADOS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-xs tracking-[0.15em] text-white/70 hover:text-[#C5A059] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="gold"
            size="sm"
            className="text-xs tracking-[0.15em]"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              CONSULTAR
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-xs tracking-[0.15em] text-white/70 hover:text-[#C5A059] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-2 text-xs tracking-[0.15em]" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              CONSULTAR
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
