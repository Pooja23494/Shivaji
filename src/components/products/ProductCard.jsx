import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ productData, onView }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-xl transition"
    >
      <div className="overflow-hidden">
        <img
          src={productData.image}
          alt={productData.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-8">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {productData.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold">{productData.name}</h3>

        <p className="mt-4 leading-7 text-gray-600">
          {productData.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {productData.sizes.map((size) => (
            <span
              key={size}
              className="rounded-lg bg-gray-100 px-3 py-1 text-sm"
            >
              {size}
            </span>
          ))}
        </div>

        <button
          onClick={() => onView(productData)}
          className="mt-8 flex items-center gap-3 font-semibold text-blue-700 transition hover:gap-4"
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
