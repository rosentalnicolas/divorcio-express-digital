const Footer = () => {
  return (
    <footer className="py-10 bg-slate-dark text-center">
      <p className="font-body text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} NR Abogados — Estudio Jurídico. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
