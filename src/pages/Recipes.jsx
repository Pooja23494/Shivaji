import RecipeBanner from "../components/recipes/RecipeBanner";
import FeaturedRecipe from "../components/recipes/FeaturedRecipe";
import RecipeCategories from "../components/recipes/RecipeCategories";
import CookingTips from "../components/recipes/CookingTips";
import RecipeVideos from "../components/recipes/RecipeVideos";
import RecipeCTA from "../components/recipes/RecipeCTA";
import SEO from "../components/common/SEO";

const Recipes = () => {
  return (
    <>
      <SEO
        title="Poha Recipes | Shivaji Good Poha"
        description="Discover delicious Poha recipes including Kanda Poha, Vegetable Poha, Masala Poha and more."
        keywords="Poha Recipes, Breakfast Recipes"
      />
      <RecipeBanner />
      <FeaturedRecipe />
      <RecipeCategories />
      <CookingTips />
      <RecipeVideos />
      <RecipeCTA />
    </>
  );
};

export default Recipes;
