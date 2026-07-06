import kanda from "../assets/images/recipes/kanda-poha.webp";
import masala from "../assets/images/recipes/masala-poha.webp";
import vegetable from "../assets/images/recipes/vegetable-poha.webp";
import cheese from "../assets/images/recipes/cheese-poha.webp";
import lemon from "../assets/images/recipes/lemon-poha.webp";
import indori from "../assets/images/recipes/indori-poha.webp";
import healthy from "../assets/images/recipes/healthy-poha.webp";

const recipes = [
  {
    id: 1,
    title: "Kanda Poha",
    category: "Breakfast",
    image: kanda,
    rating: 5,
    time: "20 Min",
    servings: "4 Persons",
    difficulty: "Easy",
    description:
      "A classic Maharashtrian breakfast made with premium Shivaji Good Poha, fresh onions, peanuts, and aromatic spices. Light, fluffy, and perfect for a healthy start to the day.",

    ingredients: [
      "2 Cups Thick Poha",
      "1 Large Onion (Finely Chopped)",
      "2 Green Chillies",
      "1 tsp Mustard Seeds",
      "10 Curry Leaves",
      "1/2 tsp Turmeric Powder",
      "1/2 Cup Roasted Peanuts",
      "Salt to Taste",
      "Fresh Coriander",
      "1 Lemon",
    ],

    steps: [
      "Wash the poha gently and drain completely.",
      "Heat oil and splutter mustard seeds.",
      "Add curry leaves, green chillies and onions.",
      "Cook onions until soft and translucent.",
      "Add turmeric powder and roasted peanuts.",
      "Mix in the poha gently.",
      "Cook on low flame for 3-4 minutes.",
      "Garnish with coriander and lemon juice before serving.",
    ],

    chefTip:
      "Never soak poha in water for a long time. A quick rinse keeps it soft and fluffy.",
  },

  {
    id: 2,
    title: "Masala Poha",
    category: "Quick",
    image: masala,
    rating: 5,
    time: "25 Min",
    servings: "4 Persons",
    difficulty: "Easy",
    description:
      "A spicy and flavorful poha recipe loaded with vegetables and traditional Indian spices for a delicious breakfast.",

    ingredients: [
      "2 Cups Thick Poha",
      "1 Onion",
      "1 Tomato",
      "Capsicum",
      "Green Peas",
      "Turmeric Powder",
      "Red Chilli Powder",
      "Garam Masala",
      "Peanuts",
      "Fresh Coriander",
    ],

    steps: [
      "Wash poha and keep aside.",
      "Saute onion until golden.",
      "Add tomatoes and vegetables.",
      "Cook until vegetables soften.",
      "Mix all spices.",
      "Add poha carefully.",
      "Cook for 4 minutes.",
      "Serve hot with coriander.",
    ],

    chefTip: "Add a pinch of sugar to perfectly balance the spicy flavors.",
  },

  {
    id: 3,
    title: "Vegetable Poha",
    category: "Healthy",
    image: vegetable,
    rating: 5,
    time: "30 Min",
    servings: "4 Persons",
    difficulty: "Medium",
    description:
      "Nutritious vegetable poha packed with colorful vegetables, fiber, and vitamins. A healthy meal for the entire family.",

    ingredients: [
      "Poha",
      "Carrot",
      "Beans",
      "Green Peas",
      "Sweet Corn",
      "Capsicum",
      "Onion",
      "Turmeric",
      "Peanuts",
      "Coriander",
    ],

    steps: [
      "Prepare vegetables.",
      "Cook onions until soft.",
      "Add vegetables and cook well.",
      "Season with spices.",
      "Mix poha carefully.",
      "Cook for 5 minutes.",
      "Garnish with coriander.",
      "Serve immediately.",
    ],

    chefTip: "Do not overcook vegetables to retain their nutrition and crunch.",
  },

  {
    id: 4,
    title: "Cheese Poha",
    category: "Kids",
    image: cheese,
    rating: 4,
    time: "20 Min",
    servings: "3 Persons",
    difficulty: "Easy",
    description:
      "A creamy and cheesy poha recipe specially loved by children. A fun twist on traditional poha.",

    ingredients: [
      "Poha",
      "Cheese Cubes",
      "Butter",
      "Onion",
      "Capsicum",
      "Black Pepper",
      "Salt",
      "Oregano",
      "Chilli Flakes",
    ],

    steps: [
      "Cook poha normally.",
      "Add butter.",
      "Mix vegetables.",
      "Season with pepper.",
      "Top generously with cheese.",
      "Cover for 2 minutes.",
      "Serve warm.",
    ],

    chefTip: "Use mozzarella cheese for the best melt and creamy texture.",
  },

  {
    id: 5,
    title: "Lemon Poha",
    category: "Breakfast",
    image: lemon,
    rating: 5,
    time: "15 Min",
    servings: "4 Persons",
    difficulty: "Easy",
    description:
      "Refreshing lemon-flavored poha with a perfect balance of tanginess and freshness. Ideal for a light breakfast.",

    ingredients: [
      "Poha",
      "Lemon Juice",
      "Green Chillies",
      "Mustard Seeds",
      "Turmeric",
      "Peanuts",
      "Curry Leaves",
      "Coriander",
    ],

    steps: [
      "Wash poha.",
      "Prepare tempering.",
      "Add peanuts.",
      "Mix poha gently.",
      "Cook briefly.",
      "Switch off flame.",
      "Add fresh lemon juice.",
      "Serve immediately.",
    ],

    chefTip:
      "Always add lemon juice after turning off the flame for maximum freshness.",
  },

  {
    id: 6,
    title: "Indori Poha",
    category: "Traditional",
    image: indori,
    rating: 5,
    time: "30 Min",
    servings: "5 Persons",
    difficulty: "Medium",
    description:
      "Authentic Indori-style poha served with crispy sev, fresh pomegranate, fennel flavor, and aromatic spices.",

    ingredients: [
      "Thin Poha",
      "Onion",
      "Turmeric",
      "Sugar",
      "Fennel Seeds",
      "Sev",
      "Pomegranate",
      "Fresh Coriander",
      "Lemon",
    ],

    steps: [
      "Prepare poha.",
      "Cook onions.",
      "Add spices.",
      "Mix poha.",
      "Steam for 3 minutes.",
      "Top with sev.",
      "Add pomegranate.",
      "Serve hot.",
    ],

    chefTip:
      "The signature Indori taste comes from adding fresh sev just before serving.",
  },

  {
    id: 7,
    title: "Healthy Poha",
    category: "Healthy",
    image: healthy,
    rating: 5,
    time: "25 Min",
    servings: "4 Persons",
    difficulty: "Easy",
    description:
      "Low-oil healthy poha enriched with sprouts, vegetables, and natural ingredients. Perfect for fitness-conscious people.",

    ingredients: [
      "Organic Poha",
      "Sprouts",
      "Carrot",
      "Spinach",
      "Peanuts",
      "Olive Oil",
      "Green Chillies",
      "Lemon",
      "Coriander",
    ],

    steps: [
      "Wash poha.",
      "Cook vegetables.",
      "Add sprouts.",
      "Season lightly.",
      "Mix poha.",
      "Cook for 3 minutes.",
      "Finish with lemon.",
      "Serve fresh.",
    ],

    chefTip: "Use olive oil instead of regular oil for a healthier version.",
  },
];

export default recipes;
