import thick from "../assets/images/products/thick-poha.webp";
import medium from "../assets/images/products/medium-poha.webp";
import thin from "../assets/images/products/thin-poha.webp";
import special from "../assets/images/products/special-poha.webp";

const products = [
  {
    id: 1,
    name: "Thick Poha",
    category: "Thick",
    image: thick,
    badge: "Best Seller",
    description:
      "Premium thick poha made from high-quality rice with excellent texture.",
    sizes: ["500g", "1kg", "5kg", "25kg", "50kg"],
  },
  {
    id: 2,
    name: "Medium Poha",
    category: "Medium",
    image: medium,
    badge: "Popular",
    description: "Soft and delicious poha suitable for everyday breakfast.",
    sizes: ["500g", "1kg", "5kg"],
  },
  {
    id: 3,
    name: "Thin Poha",
    category: "Thin",
    image: thin,
    badge: "Healthy",
    description: "Lightweight and nutritious poha ideal for snacks.",
    sizes: ["500g", "1kg", "5kg"],
  },
  {
    id: 4,
    name: "Special Premium Poha",
    category: "Premium",
    image: special,
    badge: "Premium",
    description: "Finest quality poha specially processed for superior taste.",
    sizes: ["1kg", "5kg", "25kg"],
  },
];

export default products;
