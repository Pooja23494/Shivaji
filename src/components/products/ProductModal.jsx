import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaCheckCircle,
  FaPhoneAlt,
  FaLeaf,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const features = [
    {
      icon: <FaLeaf />,
      text: "100% Premium Rice",
    },
    {
      icon: <FaShieldAlt />,
      text: "Quality Tested",
    },
    {
      icon: <FaCheckCircle />,
      text: "Hygienically Packed",
    },
    {
      icon: <FaTruck />,
      text: "Bulk Supply Available",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{ duration: 0.35 }}
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 rounded-full bg-red-500 p-3 text-white transition hover:bg-red-600"
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-10">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {product.category}
                </span>

                <h2 className="mt-6 text-4xl font-bold">{product.name}</h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {product.description}
                </p>

                <h3 className="mt-10 text-2xl font-bold">
                  Available Pack Sizes
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-xl border border-blue-700 px-5 py-3 font-semibold text-blue-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <h3 className="mt-10 text-2xl font-bold">Product Features</h3>

                <div className="mt-6 grid gap-4">
                  {features.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-4 rounded-xl bg-gray-50 p-4"
                    >
                      <div className="rounded-full bg-blue-700 p-3 text-white">
                        {item.icon}
                      </div>

                      <p className="font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                  aria-label="Phone"
                >
                  <FaPhoneAlt />
                  Contact for Inquiry
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
