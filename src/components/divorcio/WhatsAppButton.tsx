const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5491163739477?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Consultar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.336 22.594c-.39 1.1-1.932 2.014-3.162 2.28-.844.18-1.946.322-5.656-1.216-4.748-1.966-7.804-6.78-8.038-7.094-.226-.314-1.886-2.51-1.886-4.788s1.194-3.398 1.618-3.864c.39-.43.924-.644 1.434-.644.174 0 .33.016.47.03.424.182.698.44.972 1.032l.002.004c.34.738 1.148 2.804 1.25 3.01.102.206.206.478.07.748-.128.278-.236.44-.442.68-.206.24-.432.534-.618.716-.206.206-.42.43-.18.844.24.414 1.068 1.762 2.294 2.854 1.578 1.406 2.908 1.84 3.322 2.044.414.206.656.172.896-.1.248-.278 1.058-1.228 1.34-1.65.278-.414.562-.346.95-.206.39.138 2.462 1.162 2.884 1.374.424.206.704.314.806.49.102.174.102 1.012-.288 2.112z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
