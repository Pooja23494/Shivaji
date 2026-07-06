import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-poha.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-yellow-50">
      {/* Background Decoration */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🌾 Premium Quality Poha Manufacturer
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Fresh & Hygienic <br />
              <span className="text-blue-700">Good Poha</span> for Every Home
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We manufacture premium-quality poha using modern machinery,
              ensuring freshness, hygiene, and authentic taste trusted by
              families across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800"
                aria-label="Explore Products"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="rounded-full border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                aria-label="Contact us"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-700">10+</h2>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">500+</h2>
                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">100%</h2>
                <p className="text-gray-600">Quality Checked</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              rel="preload"
              src={heroImage}
              alt="Premium Poha"
              className="w-full max-w-md drop-shadow-2xl"
              width={560}
              height={373}
              loading="eager"
              decoding="async"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,58.7C1200,43,1320,21,1380,10.7L1440,0V120H0Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
