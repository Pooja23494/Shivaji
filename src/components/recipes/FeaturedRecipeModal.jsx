import { useRef } from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";

import {
  FaTimes,
  FaStar,
  FaClock,
  FaFire,
  FaUsers,
  FaUtensils,
  FaDownload,
  FaPrint,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

const FeaturedRecipeModal = ({ recipe, isOpen, onClose }) => {
  const [favorite, setFavorite] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });
  const isFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((item) => item.id === recipe.id);
  };

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some((item) => item.id === recipe.id);

    if (exists) {
      favorites = favorites.filter((item) => item.id !== recipe.id);
      setFavorite(false);
    } else {
      favorites.push(recipe);
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    if (!recipe) return;

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favorites.some((item) => item.id === recipe.id));
  }, [recipe]);

  const downloadRecipe = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(recipe.title, 20, 20);

    doc.setFontSize(14);
    doc.text(`Time: ${recipe.time}`, 20, 35);
    doc.text(`Difficulty: ${recipe.difficulty}`, 20, 45);
    doc.text(`Servings: ${recipe.servings}`, 20, 55);

    doc.text("Ingredients:", 20, 75);

    let y = 85;

    recipe.ingredients.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 10;
    });

    y += 10;

    doc.text("Steps:", 20, y);

    y += 10;

    recipe.steps.forEach((step, index) => {
      doc.text(`${index + 1}. ${step}`, 25, y);
      y += 10;
    });

    y += 10;

    doc.text(`Chef Tip: ${recipe.chefTip}`, 20, y);

    doc.save(`${recipe.title}.pdf`);
  };
  if (!recipe) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 overflow-y-auto bg-black/70 backdrop-blur-md p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto max-w-7xl rounded-[35px] bg-white shadow-2xl overflow-hidden"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-lg transition 
              hover:rotate-90 hover:bg-red-500 hover:text-white"
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>

            {/* Header */}
            <div ref={printRef}>
              <div className="grid lg:grid-cols-5">
                {/* Image */}

                <div className="lg:col-span-2 p-6">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="`h-80 w-full object-cover md:h-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Featured */}

                    <div className="absolute left-5 top-5 rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold shadow">
                      ⭐ Featured
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div className="lg:col-span-3 p-8 lg:p-10">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700"
                    aria-label="Utensils"
                  >
                    <FaUtensils />

                    {recipe.category}
                  </span>

                  <h2 className="mt-5 text-5xl font-bold text-gray-900">
                    {recipe.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {recipe.description}
                  </p>

                  {/* Rating */}

                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex text-yellow-400">
                      {[...Array(recipe.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="mr-1 text-xl"
                          aria-label="Star"
                        />
                      ))}
                    </div>

                    <span className="font-medium text-gray-500">
                      {recipe.rating}.0 (120+ Reviews)
                    </span>
                  </div>

                  {/* Info Cards */}

                  <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-2xl border p-5 shadow-sm">
                      <FaClock
                        className="mb-4 text-3xl text-blue-700"
                        aria-label="Clock"
                      />

                      <p className="text-gray-500">Prep Time</p>

                      <h4 className="mt-2 font-bold">{recipe.time}</h4>
                    </div>

                    <div className="rounded-2xl border p-5 shadow-sm">
                      <FaClock
                        className="mb-4 text-3xl text-orange-500"
                        aria-label="Clock"
                      />

                      <p className="text-gray-500">Cook Time</p>

                      <h4 className="mt-2 font-bold">{recipe.time}</h4>
                    </div>

                    <div className="rounded-2xl border p-5 shadow-sm">
                      <FaUsers
                        className="mb-4 text-3xl text-green-600"
                        aria-label="Users"
                      />

                      <p className="text-gray-500">Servings</p>

                      <h4 className="mt-2 font-bold">{recipe.servings}</h4>
                    </div>

                    <div className="rounded-2xl border p-5 shadow-sm">
                      <FaFire
                        className="mb-4 text-3xl text-red-500"
                        aria-label="Fire"
                      />

                      <p className="text-gray-500">Difficulty</p>

                      <h4 className="mt-2 font-bold">{recipe.difficulty}</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========= PART 2 STARTS HERE ========= */}

              {/* Bottom Section */}

              <div className="grid gap-8 border-t p-8 lg:grid-cols-12 lg:p-10">
                {/* ================= Ingredients ================= */}

                <div className="lg:col-span-4">
                  <div className="rounded-3xl bg-blue-50 p-6 shadow-sm">
                    <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-blue-700">
                      <FaCheckCircle aria-label="Check Circle" />
                      Ingredients
                    </h3>

                    <div className="space-y-4">
                      {recipe.ingredients.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="mt-1 text-blue-700">
                            <FaCheckCircle aria-label="Check Circle" />
                          </span>

                          <span className="leading-7 text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowIngredients(true)}
                      className="mt-8 w-full rounded-xl border-2 border-blue-700 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                    >
                      View Full Ingredients
                    </button>
                  </div>
                </div>

                {/* ================= Cooking Steps ================= */}

                <div className="lg:col-span-5">
                  <h3 className="mb-8 text-2xl font-bold text-blue-700">
                    Cooking Steps
                  </h3>

                  <div className="space-y-5">
                    {recipe.steps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                          {index + 1}
                        </div>

                        <div className="flex-1 border-b pb-4">
                          <p className="leading-7 text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ================= Chef Tip ================= */}

                <div className="lg:col-span-3">
                  <div className="rounded-3xl bg-linear-to-br from-yellow-50 to-orange-100 p-8 shadow-sm">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-3xl">
                      👨‍🍳
                    </div>

                    <h3 className="text-3xl font-bold text-yellow-900">
                      Chef's Tip
                    </h3>

                    <p className="mt-5 leading-8 text-gray-700">
                      {recipe.chefTip}
                    </p>

                    <div className="mt-8 text-5xl">🍋</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Footer ================= */}

            <div className="flex flex-col gap-5 border-t p-8 md:flex-row md:items-center md:justify-between">
              <button
                onClick={toggleFavorite}
                className={`flex items-center justify-center gap-3 rounded-xl border px-8 py-4 font-semibold transition-all duration-300 ${
                  favorite
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-500"
                }`}
                aria-label="Heart"
              >
                <FaHeart
                  className={`transition-all duration-300 ${
                    favorite ? "fill-red-500 scale-110" : ""
                  }`}
                />

                {favorite ? "Favorited" : "Add to Favorites"}
              </button>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={downloadRecipe}
                  className="flex items-center justify-center gap-3 rounded-xl border px-8 py-4 font-semibold transition hover:border-blue-700 hover:text-blue-700"
                  aria-label="Download"
                >
                  <FaDownload />
                  Download Recipe
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                  aria-label="Print"
                >
                  <FaPrint />
                  Print Recipe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
        {showIngredients && (
          <motion.div
            className="fixed inset-0 z-10000 flex items-center justify-center bg-black/70 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowIngredients(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-blue-700">
                  🥣 Ingredients
                </h2>

                <button
                  onClick={() => setShowIngredients(false)}
                  className="rounded-full bg-red-500 p-2 text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-4">
                {recipe.ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl bg-blue-50 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white">
                      <FaCheckCircle />
                    </div>

                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-yellow-50 p-5">
                <h4 className="font-bold text-yellow-700">
                  💡 Preparation Tips
                </h4>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Wash poha gently under running water.</li>
                  <li>Do not soak for more than 30 seconds.</li>
                  <li>Roast peanuts separately for extra crunch.</li>
                  <li>Add lemon juice only after turning off the flame.</li>
                </ul>
              </div>

              <button
                onClick={() => setShowIngredients(false)}
                className="mt-8 w-full rounded-xl bg-blue-700 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default FeaturedRecipeModal;
