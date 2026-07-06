import { motion } from "framer-motion";
import {
  FaAward,
  FaLeaf,
  FaIndustry,
  FaTruck,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "Only the finest rice is selected to produce high-quality poha.",
  },
  {
    icon: <FaLeaf />,
    title: "100% Hygienic",
    description:
      "Manufactured under strict hygiene standards using modern technology.",
  },
  {
    icon: <FaIndustry />,
    title: "Advanced Machinery",
    description:
      "Fully automated production process ensures consistent quality.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    description: "Reliable distribution network delivering across India.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    description: "Every batch is carefully inspected before packaging.",
  },
  {
    icon: <FaUsers />,
    title: "Trusted Brand",
    description: "Thousands of happy customers trust our products every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-linear-to-br from-blue-700 to-blue-900 py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-300">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Trusted Quality, Every Time
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            We combine traditional values with modern technology to deliver
            healthy, fresh, and premium-quality poha.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 text-3xl text-blue-900">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>

              <p className="leading-7 text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
