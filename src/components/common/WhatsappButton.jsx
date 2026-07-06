import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/917698755577"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110"
      aria-label="Whatsapp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
