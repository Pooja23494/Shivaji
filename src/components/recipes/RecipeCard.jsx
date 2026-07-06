import { motion } from "framer-motion";
import { FaClock, FaFire, FaArrowRight } from "react-icons/fa";

const RecipeCard = ({ recipe, onView }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-7">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {recipe.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold">{recipe.title}</h3>

        <div className="mt-4 flex gap-5 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <FaClock className="text-blue-700" aria-label="Clock" />
            {recipe.time}
          </span>

          <span className="flex items-center gap-2">
            <FaFire className="text-orange-500" aria-label="Fire" />
            {recipe.difficulty}
          </span>
        </div>

        <p className="mt-5 leading-7 text-gray-600">{recipe.description}</p>

        <button
          onClick={() => onView(recipe)}
          className="mt-6 flex items-center gap-2 font-semibold text-blue-700 transition-all hover:gap-4"
          aria-label="View Recipe"
        >
          View Recipe
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
