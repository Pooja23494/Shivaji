import { motion } from "framer-motion";
import factory from "../../assets/images/about/factory.webp";

const features = [
  "Premium Quality Poha",
  "Modern Manufacturing Unit",
  "Hygienic Packaging",
  "Trusted Across Gujarat",
];

const CompanyIntro = () => {
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

            <button
              className="mt-10 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
