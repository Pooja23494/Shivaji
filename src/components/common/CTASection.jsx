import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import ctaBg from "../../assets/images/cta-bg.webp";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <img
        src={ctaBg}
        alt="CTA"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/75 to-blue-800/80" />

      {/* Decorative Blur */}

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-5xl rounded-[40px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl md:p-16"
        >
          <span className="rounded-full bg-blue-400 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-900">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
            Bringing Premium Quality
            <br />
            Poha To Every Home
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're a wholesaler, distributor, retailer or business
            partner, we'd love to work with you. Contact us today and discover
            why Shivaji Good Poha is trusted for quality and consistency.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-400 px-8 py-4 font-semibold text-blue-900 transition duration-300 hover:scale-105 hover:bg-blue-300"
              aria-label="Contact Us"
            >
              Contact Us
              <FaPhoneAlt />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-blue-900"
              aria-label="Explore Products"
            >
              Explore Products
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
