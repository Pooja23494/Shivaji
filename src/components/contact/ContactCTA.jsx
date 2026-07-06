import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import bg from "../../assets/images/contact/contact-cta-bg.webp";

const ContactCTA = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/80 to-blue-800/85" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-[3px] uppercase backdrop-blur">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Ready to Partner With Shivaji Good Poha?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you're looking for premium Poha, bulk supply,
            distributorship, or business partnerships, our team is ready to help
            you succeed.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="tel:+917698755577"
              className="flex items-center gap-3 rounded-full bg-blue-400 px-8 py-4 font-semibold text-gray-900 transition hover:scale-105"
              aria-label="Phone"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="mailto:shivajigoodpoha@gmail.com"
              className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
              aria-label="Email"
            >
              <FaEnvelope />
              Email Us
            </a>

            <a
              href="/products"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition hover:scale-105"
              aria-label="Explore Products"
            >
              Explore Products
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
