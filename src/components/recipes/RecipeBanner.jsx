import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import banner from "../../assets/images/recipes/recipe-banner.webp";

const RecipeBanner = () => {
  return (
    <section
      className="relative flex h-95 items-center justify-center overflow-hidden md:h-125"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-blue-950/70 to-slate-900/85" />

      {/* Decorative Blur */}

      <div className="absolute left-0 top-10 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Floating Circles */}

      <div className="absolute left-20 top-28 h-5 w-5 rounded-full bg-blue-400/80" />

      <div className="absolute right-40 top-20 h-4 w-4 rounded-full bg-blue-400/80" />

      <div className="absolute bottom-24 left-1/4 h-3 w-3 rounded-full bg-white/70" />

      {/* Content */}

      <div className="container relative z-10 mx-auto px-5 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[4px] backdrop-blur-md"
        >
          Delicious Recipes
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-6 text-4xl font-extrabold md:text-6xl"
        >
          Healthy & Tasty Poha Recipes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200"
        >
          Discover delicious breakfast recipes made with Shivaji Good Poha.
          Quick, healthy, nutritious, and loved by every family.
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
          }}
          className="mt-10 flex items-center justify-center gap-3 text-sm md:text-base"
        >
          <Link to="/" className="transition duration-300 hover:text-blue-400">
            Home
          </Link>

          <FaChevronRight
            className="text-xs text-blue-400"
            aria-label="Right Arrow"
          />

          <span className="font-semibold text-blue-400">Recipes</span>
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
          d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32V120H0Z"
        />
      </svg>
    </section>
  );
};

export default RecipeBanner;
