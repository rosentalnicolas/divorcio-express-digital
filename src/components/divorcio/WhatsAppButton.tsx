import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5491163739477?text=Hola,%20quiero%20consultar%20por%20un%20divorcio";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Consultar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
