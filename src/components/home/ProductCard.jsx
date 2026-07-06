import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Badge */}
      <div className="absolute z-10 m-4 rounded-full bg-blue-400 px-4 py-1 text-sm font-semibold text-black">
        {product.badge}
      </div>

      {/* Image */}
      <div className="overflow-hidden bg-blue-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="mb-3 flex gap-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} aria-label="Star" />
          ))}
        </div>

        <h3 className="mb-3 text-2xl font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mb-6 text-gray-600">{product.description}</p>

        <button
          className="flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-4"
          aria-label="View Details"
        >
          View Details
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
