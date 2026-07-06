import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you supply Poha in bulk quantities?",
    answer:
      "Yes. We specialize in wholesale and bulk orders for distributors, retailers, supermarkets, and food businesses across India.",
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
      <div className="container mx-auto max-w-4xl px-5">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold">Have Questions?</h2>

          <p className="mt-5 text-gray-600">
            Find quick answers to the most common questions about our products,
            services, and dealership opportunities.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default ContactFAQ;
