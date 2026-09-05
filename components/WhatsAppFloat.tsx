import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const whatsappLink = whatsappUrl("Olá! Gostaria de saber mais sobre o Ibiunature Aqua Clube.");

const WhatsAppFloat = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

export default WhatsAppFloat;
