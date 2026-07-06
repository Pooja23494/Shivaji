import { motion } from "framer-motion";

const categories = ["All", "Thick", "Thin", "Premium", "Ready Mix"];

const ProductFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-7 py-3 font-semibold transition-all duration-300

          ${
            activeCategory === category
              ? "bg-blue-700 text-white shadow-lg"
              : "border border-gray-300 bg-white hover:border-blue-700 hover:text-blue-700"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProductFilter;
