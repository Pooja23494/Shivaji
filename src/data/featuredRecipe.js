import image from "../assets/images/recipes/featured-poha.webp";

const featuredRecipe = {
  image,
  title: "Classic Kanda Poha",
  category: "Traditional Breakfast",
  rating: 5,
  time: "20 Minutes",
  servings: "4 People",
  difficulty: "Easy",

  description:
    "A delicious and nutritious Maharashtrian breakfast prepared with premium Shivaji Good Poha, fresh onions, peanuts, curry leaves and aromatic spices.",

  ingredients: [
    "2 Cups Shivaji Good Poha",
    "2 Onion (chopped)",
    "2 Green Chillies",
    "1/2 Cup Peanuts",
    "1 tsp Mustard Seeds",
    "Curry Leaves",
    "Turmeric Powder",
    "Salt",
    "Sugar",
    "Fresh Coriander",
    "Lemon",
  ],

  steps: [
    "Wash poha gently and keep aside for 5 minutes.",
    "Heat oil and roast peanuts until golden.",
    "Add mustard seeds and curry leaves.",
    "Add onions and sauté until transparent.",
    "Mix green chillies and turmeric.",
    "Add poha and mix gently.",
    "Cook on low flame for 3-4 minutes.",
    "Garnish with coriander, lemon and sev.",
  ],

  chefTip:
    "Always add lemon juice after turning off the flame to keep the poha fresh and fluffy.",

  nutrition: {
    calories: "280 kcal",
    protein: "6 g",
    carbs: "42 g",
    fat: "8 g",
  },
};

export default featuredRecipe;
