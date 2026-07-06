import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaWeightHanging,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

const packages = [
  {
    size: "500g",
    title: "Retail Pack",
    desc: "Perfect for small families and daily household use.",
  },
  {
    size: "1 Kg",
    title: "Family Pack",
    desc: "Ideal for regular home consumption.",
  },
  {
    size: "5 Kg",
    title: "Value Pack",
    desc: "Suitable for hotels, restaurants and caterers.",
  },
  {
    size: "25 Kg",
    title: "Wholesale Pack",
    desc: "Designed for retailers and distributors.",
  },
  {
    size: "50 Kg",
    title: "Bulk Pack",
    desc: "Best choice for industrial and bulk buyers.",
  },
];

const specifications = [
  {
    title: "Raw Material",
    value: "Premium Quality Rice",
  },
  {
    title: "Processing",
    value: "Fully Automatic Plant",
  },
  {
    title: "Packaging",
    value: "Food Grade Packaging",
  },
  {
    title: "Shelf Life",
    value: "12 Months",
  },
  {
    title: "Storage",
    value: "Store in Cool & Dry Place",
  },
  {
    title: "Availability",
    value: "Pan India",
  },
];

const PackagingSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Packaging
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Available Packaging Sizes
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Flexible packaging options suitable for households, retailers,
            wholesalers and bulk buyers.
          </p>
        </div>

        {/* Package Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {packages.map((item, index) => (
            <motion.div
              key={item.size}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:shadow-2xl"
            >
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl text-white"
                aria-label="Box Open"
              >
                <FaBoxOpen />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-blue-700">
                {item.size}
              </h3>

              <p className="mt-3 text-xl font-semibold">{item.title}</p>

              <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Specifications */}

        <div className="mt-24 rounded-[35px] bg-white p-10 shadow-xl">
          <div className="mb-10 flex items-center gap-4">
            <div
              className="rounded-xl bg-blue-700 p-4 text-white"
              aria-label="Weight Hanging"
            >
              <FaWeightHanging />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Product Specifications</h2>

              <p className="text-gray-500">
                Quality standards maintained across every package.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {specifications.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-5"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle
                    className="text-green-600"
                    aria-label="Check Circle"
                  />

                  <span className="font-semibold">{item.title}</span>
                </div>

                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Download */}

          <div className="mt-10 text-center">
            <button
              className="inline-flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              aria-label="Download"
            >
              <FaDownload />
              Download Product Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;
