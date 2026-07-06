import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import banner from "../../assets/images/gallery/gallery-banner.webp";

const GalleryBanner = () => {
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

      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/75 to-black/70" />

      {/* Decorative Blur */}

      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}

      <div className="container relative z-10 mx-auto px-5 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold md:text-6xl"
        >
          Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100"
        >
          Explore our modern manufacturing facility, premium products,
          production process, packaging standards, and memorable moments that
          define Shivaji Good Poha.
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          className="mt-8 flex items-center justify-center gap-3 text-sm font-medium md:text-base"
        >
          <Link to="/" className="transition hover:text-yellow-300">
            Home
          </Link>

          <FaChevronRight
            className="text-xs text-yellow-400"
            aria-label="Right Arrow"
          />

          <span className="font-semibold text-yellow-400">Gallery</span>
        </motion.div>
      </div>

      {/* Bottom Wave */}

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,80L80,74.7C160,69,320,59,480,58.7C640,59,800,69,960,80C1120,91,1280,101,1360,106.7L1440,112V120H0Z"
        />
      </svg>
    </section>
  );
};

export default GalleryBanner;
