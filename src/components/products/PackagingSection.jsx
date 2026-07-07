import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaWeightHanging,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

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
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Packaging"
          title="Available Packaging Sizes"
          description="Flexible packaging options suitable for households, retailers,
            wholesalers and bulk buyers."
        />

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

        <div className="mt-16 rounded-3xl bg-white p-5 shadow-xl sm:mt-20 sm:p-8 lg:mt-24 lg:p-10">
          <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white shadow-lg"
              aria-label="weight hanging"
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
                className="flex flex-col gap-3 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-green-600" />

                  <span className="font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>

                <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 sm:bg-transparent sm:px-0 sm:py-0">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Download */}

          <div className="mt-10 text-center">
            <Button className="gap-3 rounded-xl" aria-label="Download">
              <FaDownload />
              Download Product Brochure
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PackagingSection;
