import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const ProductInquiry = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-800 to-blue-600 py-24">
      {/* Decorative Background */}

      {/* Mesh Gradient */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-400 blur-[150px]" />

        <div className="absolute right-0 top-20 h-112.5 w-112.5 rounded-full bg-blue-300 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-cyan-400 blur-[180px]" />
      </div>

      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-10 top-20 h-24 w-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-20 right-20 h-40 w-40 rounded-full border border-yellow-400/30 bg-yellow-400/10"
      />

      <motion.div
        animate={{
          x: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute right-1/3 top-10 h-16 w-16 rounded-full bg-blue-300/20 blur-xl"
      />

      <div className="container relative z-10 mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-white/10 bg-white/10 p-10 text-center text-white shadow-2xl backdrop-blur-xl md:p-16"
        >
          <span className="rounded-full bg-blue-400 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-blue-900">
            Bulk Orders Welcome
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Become Our
            <span className="block text-blue-400">Distributor Partner</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Looking for premium quality Poha for your business? We supply
            retailers, wholesalers, supermarkets, hotels, restaurants, and
            distributors with consistent quality and timely delivery.
          </p>

          {/* Benefits */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div
              className="relative overflow-hidden rounded-[40px] border border-white/20
                bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-10 md:p-16"
            >
              <h3 className="text-xl font-bold text-blue-400">
                Premium Quality
              </h3>

              <p className="mt-3 text-blue-100">
                Hygienically processed using modern manufacturing technology.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-[40px] border border-white/20
                bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-10 md:p-16"
            >
              <h3 className="text-xl font-bold text-blue-400">
                Competitive Pricing
              </h3>

              <p className="mt-3 text-blue-100">
                Attractive wholesale prices for distributors and bulk buyers.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-[40px] border border-white/20
                bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-10 md:p-16"
            >
              <h3 className="text-xl font-bold text-blue-400">
                Pan India Delivery
              </h3>

              <p className="mt-3 text-blue-100">
                Fast and reliable logistics network across India.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Button
              href="https://wa.me/917698755577"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white hover:bg-green-600 rounded-xl"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={22} />
              WhatsApp Us
            </Button>

            <Button
              href="tel:+917698755577"
              className="rounded-xl"
              variant="lightBlue"
              aria-label="Phone"
            >
              <FaPhoneAlt />
              Call Now
            </Button>

            <Button
              href="mailto:shivajigoodpoha@gmail.com"
              className="rounded-xl"
              variant="white"
              aria-label="Email"
            >
              <FaEnvelope />
              Email Us
            </Button>
          </div>

          {/* Contact Page Button */}

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-semibold text-blue-400 transition hover:gap-4"
              aria-label="Request"
            >
              Request a Custom Quote
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInquiry;
