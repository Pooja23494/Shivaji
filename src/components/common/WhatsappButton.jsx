import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/917698755577"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-15 left-2 z-40
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500
        text-3xl text-white
        shadow-2xl
        transition hover:scale-110
        lg:bottom-6 lg:left-6
      "
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
