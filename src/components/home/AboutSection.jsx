import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";

import aboutImage from "../../assets/images/about-factory.webp";

const features = [
  "Premium Quality Rice",
  "100% Hygienic Processing",
  "Modern Machinery",
  "Experienced Team",
  "Trusted Across Gujarat",
  "Fresh Packaging",
];

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Delivering Quality Poha Since 2016
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded bg-blue-400"></div>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImage}
              alt="Shivaji Good Poha Factory"
              className="h-64 w-full rounded-3xl object-cover shadow-2xl lg:h-96 xl:h-110"
              width={600}
              height={540}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              We Produce Healthy & Hygienic Poha
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Shivaji Good Poha is committed to delivering premium quality
              flattened rice manufactured with advanced technology and strict
              quality control. Our products are known for freshness, nutrition,
              taste and hygiene.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle
                    className="text-blue-700"
                    aria-label="Check Circle"
                  />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button
              to="/about"
              className="mt-10"
              aria-label="Learn More"
              variant="secondary"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
