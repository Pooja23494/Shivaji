import { motion } from "framer-motion";
import timeline from "../../data/timeline";

const CompanyTimeline = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Our Journey
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Company Timeline
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every milestone reflects our dedication to quality, innovation and
            customer satisfaction.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-blue-200 lg:block"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative mb-14 flex items-center ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Card */}

                <div className="w-full lg:w-[45%]">
                  <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <span className="inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white">
                      {item.year}
                    </span>

                    <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-blue-700 to-blue-500 text-2xl text-white shadow-lg">
                      <Icon />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}

                <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                  <div className="h-6 w-6 rounded-full border-4 border-white bg-blue-400 shadow-lg"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
