import { motion } from "framer-motion";
import { FaClock, FaUsers, FaStar, FaFire, FaArrowRight } from "react-icons/fa";

import featuredRecipe from "../../data/featuredRecipe";

const FeaturedRecipe = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[5px] text-blue-700">
            Featured Recipe
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Chef's Special Poha
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600 leading-8">
            Start your day with a healthy and flavorful breakfast made using
            Shivaji Good Poha.
          </p>
        </div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[35px] bg-white shadow-2xl"
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Image */}

            <div className="relative overflow-hidden">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute left-6 top-6 rounded-full bg-blue-400 px-5 py-2 font-semibold">
                Featured
              </div>
            </div>

            {/* Content */}

            <div className="p-8 lg:p-14">
              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                {featuredRecipe.category}
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                {featuredRecipe.title}
              </h2>

              {/* Rating */}

              <div className="mt-5 flex items-center gap-2 text-yellow-500">
                {[...Array(featuredRecipe.rating)].map((_, i) => (
                  <FaStar key={i} aria-label="Star" />
                ))}

                <span className="ml-3 text-gray-500">5.0 Rating</span>
              </div>

              {/* Info */}

              <div className="mt-8 flex flex-wrap gap-5">
                <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-5 py-3">
                  <FaClock className="text-blue-700" aria-label="Clock" />

                  {featuredRecipe.time}
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-5 py-3">
                  <FaUsers className="text-blue-700" aria-label="User" />

                  {featuredRecipe.servings}
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-5 py-3">
                  <FaFire className="text-orange-500" aria-label="Fire" />

                  {featuredRecipe.difficulty}
                </div>
              </div>

              {/* Description */}

              <p className="mt-8 leading-8 text-gray-600">
                {featuredRecipe.description}
              </p>

              {/* Ingredients */}

              <h4 className="mt-10 text-xl font-bold">Ingredients</h4>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {featuredRecipe.ingredients.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>

                    {item}
                  </div>
                ))}
              </div>

              {/* Button */}

              <button
                className="mt-10 flex items-center gap-3 rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                aria-label="View Recipe"
              >
                View Full Recipe
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRecipe;
