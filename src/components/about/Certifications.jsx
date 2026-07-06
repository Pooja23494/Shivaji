import { motion } from "framer-motion";
import certifications from "../../data/certifications";
import { FaShieldAlt, FaAward, FaCheckCircle } from "react-icons/fa";

const qualityPoints = [
  {
    icon: FaShieldAlt,
    title: "100% Hygienic",
    description: "Processed in a clean and controlled environment.",
  },
  {
    icon: FaAward,
    title: "Premium Quality",
    description: "Only carefully selected raw materials are used.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Checked",
    description: "Every batch undergoes multiple quality inspections.",
  },
];

const Certifications = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Quality Assurance
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We follow strict manufacturing standards and quality control
            processes to ensure every pack of Shivaji Good Poha meets customer
            expectations.
          </p>
        </div>

        {/* Certificates */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
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
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-contain bg-gray-50 p-6 transition duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Highlights */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {qualityPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
