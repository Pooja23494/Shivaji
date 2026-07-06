import { motion } from "framer-motion";
import { FaHeadset, FaTruck, FaHandshake, FaAward } from "react-icons/fa";

const features = [
  {
    icon: FaHeadset,
    title: "Fast Response",
    description:
      "Our support team responds quickly to all inquiries and business requests.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: FaTruck,
    title: "Bulk Orders",
    description:
      "Reliable manufacturing and timely delivery for wholesalers and distributors.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: FaHandshake,
    title: "Dealer Support",
    description:
      "Partner with us for dealership opportunities and long-term business growth.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: FaAward,
    title: "Premium Quality",
    description:
      "Manufactured with strict quality standards using modern production facilities.",
    color: "from-purple-600 to-indigo-600",
  },
];

const WhyContact = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            We're Always Ready to Help
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From product inquiries to bulk supply and dealership opportunities,
            our dedicated team is committed to providing exceptional service and
            premium-quality products.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                {/* Decorative Background */}

                <div
                  className={`absolute right-0 top-0 h-28 w-28 rounded-full bg-linear-to-br ${item.color} opacity-10 blur-2xl`}
                />

                {/* Icon */}

                <div
                  className={`flex h-18 w-18 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-3xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-1 w-12 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-24"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyContact;
