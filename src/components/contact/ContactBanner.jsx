import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import banner from "../../assets/images/contact/contact-banner.webp";

const ContactBanner = () => {
  return (
    <section
      className="relative flex h-87.5 items-center justify-center overflow-hidden md:h-105"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-blue-800/80" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-5 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold md:text-6xl"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mx-auto mt-6 max-w-2xl text-lg text-blue-100"
        >
          We'd love to hear from you. Get in touch for bulk orders, dealership
          inquiries, or any product-related questions.
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-8 flex items-center justify-center gap-3 text-sm md:text-base"
        >
          <Link to="/" className="transition hover:text-yellow-400">
            Home
          </Link>

          <FaChevronRight
            className="text-xs text-yellow-400"
            aria-label="Right Arrow"
          />

          <span className="text-yellow-400">Contact Us</span>
        </motion.div>
      </div>

      {/* Bottom Wave */}

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
      >
        <path
          fill="#ffffff"
          d="M0,80L80,74.7C160,69,320,59,480,58.7C640,59,800,69,960,80C1120,91,1280,101,1360,106.7L1440,112V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        />
      </svg>
    </section>
  );
};

export default ContactBanner;
