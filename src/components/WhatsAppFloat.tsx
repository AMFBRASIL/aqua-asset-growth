import { MessageCircle } from "lucide-react";

const whatsappNumber = "5511920069049";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o Ibiunature Aqua Clube."
)}`;

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
