import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const faqs = [
  {
    question: "What types of Poha do you manufacture?",
    answer:
      "We manufacture Thick Poha, Thin Poha, Premium Poha, Jumbo Poha, and customized bulk packaging for retailers, wholesalers, and distributors.",
  },
  {
    question: "What packaging sizes are available?",
    answer:
      "Our products are available in 500g, 1kg, 5kg, 25kg, and 50kg packaging. Custom packaging options are also available for bulk orders.",
  },
  {
    question: "Do you supply products in bulk?",
    answer:
      "Yes. We specialize in bulk orders for distributors, supermarkets, hotels, restaurants, catering businesses, and wholesalers across India.",
  },
  {
    question: "How do you maintain product quality?",
    answer:
      "Our Poha is manufactured using modern machinery, hygienically processed, quality tested, and packed in food-grade packaging to ensure freshness.",
  },
  {
    question: "Do you offer dealership or distributorship opportunities?",
    answer:
      "Yes. We welcome distributors and dealers from different regions. Please contact our sales team for partnership opportunities.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by contacting us via our Contact Form, WhatsApp, Phone, or Email. Our team will assist you with pricing and delivery details.",
  },
];

const ProductFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Frequently Asked Questions"
          title="Have Questions?"
          description="Find answers to the most commonly asked questions about our
            products, packaging, and services."
        />

        {/* FAQ */}

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
                aria-label="Down Arrow"
              >
                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-blue-700 p-3 text-white"
                >
                  <FaChevronDown aria-label="Down Arrow" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="border-t border-gray-200 px-8 pb-8 pt-5">
                      <p className="leading-8 text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductFAQ;
