import { motion } from "framer-motion";
import { FaSeedling, FaCogs, FaBoxOpen, FaTruck } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const process = [
  {
    id: 1,
    icon: FaSeedling,
    title: "Raw Material Selection",
    description:
      "We carefully source premium quality rice from trusted farmers to ensure superior taste and consistency.",
  },
  {
    id: 2,
    icon: FaCogs,
    title: "Cleaning & Processing",
    description:
      "Advanced machinery and strict quality checks ensure hygienic processing and perfect poha texture.",
  },
  {
    id: 3,
    icon: FaBoxOpen,
    title: "Hygienic Packaging",
    description:
      "Products are packed in food-grade packaging to preserve freshness, taste and nutritional value.",
  },
  {
    id: 4,
    icon: FaTruck,
    title: "Distribution",
    description:
      "Finished products are delivered efficiently through our trusted distribution network across India.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle=" Manufacturing Process"
          title="From Farm To Your Table"
          description="Every step of our manufacturing process follows strict quality
            standards to ensure fresh, hygienic and premium-quality Poha."
        />

        {/* Timeline */}

        <div className="relative">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative"
                >
                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-blue-700 text-5xl text-white shadow-2xl">
                    <Icon />
                  </div>

                  {/* Card */}

                  <div className="mt-8 rounded-3xl bg-gray-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                      {item.id}
                    </div>

                    <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>

                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
