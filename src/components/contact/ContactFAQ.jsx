import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const faqs = [
  {
    question: "What types of Poha do you manufacture?",
    answer:
      "We manufacture Thick Poha, Thin Poha, Premium Poha, Jumbo Poha, and customized bulk packaging for retailers, wholesalers, and distributors.",
  },
  {
    question: "Do you supply Poha in bulk quantities?",
    answer:
      "Yes. We specialize in wholesale and bulk orders for distributors, retailers, supermarkets, and food businesses across India.",
  },
  {
    question: "How do you maintain product quality?",
    answer:
      "Our Poha is manufactured using modern machinery, hygienically processed, quality tested, and packed in food-grade packaging to ensure freshness.",
  },
  {
    question: "Can I become your distributor?",
    answer:
      "Absolutely! We welcome dealership and distributorship inquiries. Contact our sales team for more information.",
  },
  {
    question: "Do you provide customized packaging?",
    answer:
      "Yes, we offer customized packaging solutions for bulk buyers and private label requirements.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can submit the contact form, call us directly, or email us. Our team will get back to you shortly.",
  },
  {
    question: "Where is your manufacturing unit located?",
    answer:
      "Our manufacturing facility is located at Satem Road, Pardi (Sarpore), Navsari, Gujarat, India.",
  },
];

const ContactFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          subtitle="Frequently Asked Questions"
          title="Have Questions?"
          description="Find quick answers to the most common questions about our products,
            services, and dealership opportunities."
        />

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-2xl border bg-white shadow-md"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-label="Plus Minus"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>

                <div className="rounded-full bg-blue-700 p-2 text-white">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="px-6 pb-6 leading-8 text-gray-600">
                      {faq.answer}
                    </p>
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

export default ContactFAQ;
