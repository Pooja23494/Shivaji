import { motion } from "framer-motion";
import {
  FaLeaf,
  FaAward,
  FaIndustry,
  FaShieldAlt,
  FaTruckMoving,
  FaUsers,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const features = [
  {
    icon: FaLeaf,
    title: "100% Premium Rice",
    description:
      "We use carefully selected rice grains to produce fresh and delicious poha.",
  },
  {
    icon: FaAward,
    title: "Superior Quality",
    description:
      "Every batch undergoes strict quality checks before packaging.",
  },
  {
    icon: FaIndustry,
    title: "Modern Manufacturing",
    description:
      "Processed with advanced machinery for consistency and hygiene.",
  },
  {
    icon: FaShieldAlt,
    title: "Hygienic Packaging",
    description: "Food-grade packaging keeps every pack fresh and safe.",
  },
  {
    icon: FaTruckMoving,
    title: "Bulk Supply",
    description:
      "Reliable delivery network for wholesalers, retailers and distributors.",
  },
  {
    icon: FaUsers,
    title: "Trusted by Customers",
    description:
      "Thousands of happy customers rely on Shivaji Good Poha every day.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Why Choose Us"
          title="Premium Quality You Can Trust"
          description="We combine traditional expertise with modern technology to deliver
            premium quality poha that meets the highest standards."
        />

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-600 hover:shadow-2xl"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-linear-to-r from-blue-700 to-blue-500 text-3xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-28"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statistics */}

        <div className="mt-24 rounded-[40px] bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 p-10 text-white md:p-16">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-blue-400">10+</h3>
              <p className="mt-3 text-blue-100">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-400">100%</h3>
              <p className="mt-3 text-blue-100">Quality Checked</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-400">500+</h3>
              <p className="mt-3 text-blue-100">Business Clients</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-400">24/7</h3>
              <p className="mt-3 text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductFeatures;
