import { useState } from "react";
import recipes from "../../data/recipes";
import RecipeGrid from "./RecipeGrid";
import RecipeModal from "./RecipeModal";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const categories = [
  "All",
  "Breakfast",
  "Healthy",
  "Quick",
  "Kids",
  "Traditional",
];

const RecipeCategories = () => {
  const [active, setActive] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filtered =
    active === "All"
      ? recipes
      : recipes.filter((item) => item.category === active);

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Our Recipes"
          title="Browse Delicious Recipes"
          description=" Discover healthy and tasty recipes made using Shivaji Good Poha."
        />

        {/* Filter Buttons */}

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-7 py-3 font-semibold transition-all duration-300 ${
                active === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white hover:bg-blue-700 hover:text-white"
              }`}
              aria-label="Category"
            >
              {category}
            </button>
          ))}
        </div>

        <RecipeGrid recipes={filtered} onView={setSelectedRecipe} />
      </Container>
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
};

export default RecipeCategories;
