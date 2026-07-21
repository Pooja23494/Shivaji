import { motion } from "framer-motion";
import factory from "../../assets/images/about/factory.webp";
import Button from "../common/Button";
import { useState } from "react";

const features = [
  "Premium Quality Poha",
  "Modern Manufacturing Unit",
  "Hygienic Packaging",
  "Trusted Across Gujarat",
];

const CompanyIntro = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={factory}
              alt="Factory"
              className="h-125 w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />

            {/* Experience Card */}

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-blue-700 p-6 text-white shadow-2xl">
              <h3 className="text-4xl font-bold">10+</h3>
              <p>Years Experience</p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-blue-700">
              About Company
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Delivering Premium Quality Poha Since Years
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Shivaji Good Poha is one of the trusted names in the poha
              manufacturing industry. We are committed to producing high-quality
              flattened rice using advanced processing techniques while
              maintaining traditional taste and purity.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our focus on hygiene, quality control, customer satisfaction, and
              continuous innovation has helped us build long-term relationships
              with distributors and retailers across Gujarat and beyond.
            </p>

            {/* Features */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 shadow-sm"
                >
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="mt-10 rounded-xl"
              onClick={() => setShowModal(true)}
              aria-label="Learn More"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}

            <div className="sticky top-0 flex items-center justify-between border-b bg-white p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">
                  Our Story
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  The Journey of Shivaji Good Poha
                </h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="text-3xl font-bold text-gray-500 transition hover:text-blue-500"
              >
                ×
              </button>
            </div>

            {/* Content */}

            <div className="space-y-8 p-8 leading-8 text-gray-700">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-blue-700">
                  Our Beginning
                </h3>

                <p>
                  In <strong>2016</strong>, <strong>Shanti Food Product</strong>{" "}
                  began an extraordinary journey with a simple yet powerful
                  mission: to deliver premium-quality Poha without compromising
                  on purity, hygiene, or authentic taste.
                </p>

                <p className="mt-4">
                  Poha has always been a cherished breakfast across India, and
                  we believed every family deserved the finest quality. From the
                  very beginning, we were committed to producing Poha in its
                  purest form, free from impurities while preserving its
                  traditional flavor and nutritional value.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-blue-700">
                  Humble Beginnings
                </h3>

                <p>
                  With no large team or advanced infrastructure in the early
                  days, we personally managed every stage of production—from
                  sourcing quality rice to processing, packaging, and delivering
                  each order with care.
                </p>

                <p className="mt-4">
                  This hands-on approach helped us build trust, understand
                  customer needs, and establish a reputation for consistency and
                  reliability.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-blue-700">
                  Our Growth
                </h3>

                <p>
                  As customer confidence grew, so did the demand for our
                  products. To maintain consistent quality and increase
                  production capacity, we gradually upgraded from manual
                  packaging to fully automated packaging systems and modern
                  manufacturing technology.
                </p>

                <p className="mt-4">
                  Today, every package is processed using hygienic methods and
                  strict quality control standards to ensure freshness and
                  excellence.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-blue-700">
                  Our Vision
                </h3>

                <p>
                  Our Guiding Principle is to create products that promote a
                  healthy lifestyle for every family. Due to our increasing
                  popularity and rising demand, we have slowly moved from manual
                  packaging to the implementation of fully automated packaging
                  equipment.
                </p>
              </div>
            </div>

            {/* Footer */}

            <div className="flex justify-end border-t p-6">
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CompanyIntro;
