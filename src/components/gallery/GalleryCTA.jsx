import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaIndustry } from "react-icons/fa";
import bg from "../../assets/images/gallery/gallery-cta-bg.webp";

const GalleryCTA = () => {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/80 to-black/70" />

      {/* Decorative Blur */}

      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/10 p-10 text-center text-white shadow-2xl backdrop-blur-xl md:p-16"
        >
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-400 text-4xl text-blue-900 shadow-xl"
            aria-label="Industry"
          >
            <FaIndustry />
          </div>

          <span className="mt-8 inline-block rounded-full bg-blue-400/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-300">
            Factory Visit
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Experience Our Manufacturing Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Discover how premium-quality Poha is produced using advanced
            machinery, strict quality standards, and hygienic packaging. We
            welcome distributors, retailers, and business partners to visit our
            manufacturing facility.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-blue-400 px-8 py-4 font-semibold text-blue-900 transition duration-300 hover:scale-105 hover:bg-blue-300"
              aria-label="Contact Us"
            >
              Contact Us
              <FaArrowRight />
            </Link>

            <a
              href="tel:+917698755577"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-blue-900"
              aria-label="Book Factory Visit"
            >
              <FaPhoneAlt />
              Book Factory Visit
            </a>
          </div>

          {/* Bottom Stats */}

          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-blue-400">10+</h3>
              <p className="mt-2 text-blue-100">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">500+</h3>
              <p className="mt-2 text-blue-100">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">100%</h3>
              <p className="mt-2 text-blue-100">Quality Assurance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCTA;
