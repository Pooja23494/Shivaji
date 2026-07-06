import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import banner from "../../assets/images/products/product-banner.webp";

const ProductBanner = () => {
  return (
    <section
      className="relative flex min-h-125 items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/75 to-blue-800/80" />

      {/* Decorative Blur */}

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>

      {/* Content */}

      <div className="container relative z-10 mx-auto px-5 text-center text-white">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-5xl font-extrabold md:text-7xl"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl"
        >
          Discover our premium range of hygienically processed Poha products,
          crafted with quality, consistency and freshness.
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-10 flex items-center justify-center gap-3 text-sm font-medium md:text-base"
        >
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <FaChevronRight
            className="text-xs text-blue-400"
            aria-label="Right Arrow"
          />

          <span className="text-blue-400">Products</span>
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
          d="M0,80L80,74.7C160,69,320,59,480,58.7C640,59,800,69,960,80C1120,91,1280,101,1360,106.7L1440,112V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        />
      </svg>
    </section>
  );
};

export default ProductBanner;
