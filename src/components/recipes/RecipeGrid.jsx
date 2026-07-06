import { AnimatePresence, motion } from "framer-motion";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes, onView }) => {
  return (
    <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onView={onView} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default RecipeGrid;
