import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import process from "../../data/process";

const ManufacturingProcess = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Manufacturing Process
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            From Farm to Your Kitchen
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every stage of our manufacturing process follows strict quality
            standards to deliver fresh, hygienic, and premium-quality Poha.
          </p>
        </div>

        {/* Process */}

        <div className="grid gap-8 lg:grid-cols-5">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative"
              >
                {/* Arrow */}

                {index !== process.length - 1 && (
                  <div className="absolute top-1/2 left-full z-10 hidden -translate-y-1/2 lg:flex">
                    <FaArrowRight
                      className="mx-3 text-2xl text-blue-300"
                      aria-label="Right Arrow"
                    />
                  </div>
                )}

                {/* Card */}

                <div className="group h-full rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Number */}

                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                    {step.id}
                  </span>

                  {/* Icon */}

                  <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-r from-blue-700 to-blue-500 text-3xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>

                  {/* Bottom Line */}

                  <div className="mx-auto mt-8 h-1 w-12 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-24"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
