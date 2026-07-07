import FeaturedRecipe from "../components/recipes/FeaturedRecipe";
import RecipeCategories from "../components/recipes/RecipeCategories";
import CookingTips from "../components/recipes/CookingTips";
import RecipeVideos from "../components/recipes/RecipeVideos";
import RecipeCTA from "../components/recipes/RecipeCTA";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import banner from "../assets/images/recipes/recipe-banner.webp";

const Recipes = () => {
  return (
    <>
      <SEO
        title="Poha Recipes | Shivaji Good Poha"
        description="Discover delicious Poha recipes including Kanda Poha, Vegetable Poha, Masala Poha and more."
        keywords="Poha Recipes, Breakfast Recipes"
      />
      <PageBanner
        image={banner}
        title="Delicious Recipes"
        description="Discover delicious breakfast recipes made with Shivaji Good Poha.
          Quick, healthy, nutritious, and loved by every family."
        breadcrumb="Home > Recipes"
      />
      <FeaturedRecipe />
      <RecipeCategories />
      <CookingTips />
      <RecipeVideos />
      <RecipeCTA />
    </>
  );
};

export default Recipes;
