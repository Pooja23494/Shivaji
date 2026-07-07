import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner from "../../assets/images/about/about-banner.webp";
import { FaChevronRight } from "react-icons/fa";

const AboutBanner = ({
  image,
  title,
  description,
  breadcrumb,
  height = "h-[450px]",
}) => {
  return (
    <section
      className="relative flex h-87.5 items-center justify-center overflow-hidden md:h-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          {title}
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mx-auto mt-5 max-w-2xl text-lg text-gray-200"
        >
          {description}
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

          <span className="text-blue-400">{title}</span>
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
