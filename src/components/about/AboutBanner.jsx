import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner from "../../assets/images/about/about-banner.webp";
import { FaChevronRight } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <section
      className="relative flex h-87.5 items-center justify-center overflow-hidden md:h-105"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/70" />

      {/* Decorative Circles */}

      <div className="absolute -left-20 top-16 h-52 w-52 rounded-full bg-green-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />

      {/* Content */}

      <div className="container relative z-10 mx-auto px-5 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold md:text-6xl"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mx-auto mt-5 max-w-2xl text-lg text-gray-200"
        >
          Delivering premium quality Poha with trust, innovation and excellence
          since our beginning.
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-8 flex items-center justify-center gap-3 text-sm font-medium md:text-base"
        >
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <FaChevronRight
            className="text-xs text-blue-400"
            aria-label="Right Arrow"
          />

          <span className="text-blue-400">About Us</span>
        </motion.div>
      </div>

      {/* Bottom Wave */}

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,80L80,74.7C160,69,320,59,480,58.7C640,59,800,69,960,80C1120,91,1280,101,1360,106.7L1440,112V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        />
      </svg>
    </section>
  );
};

export default AboutBanner;
