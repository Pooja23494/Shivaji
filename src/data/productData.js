import thickPoha from "../assets/images/products/thick-poha1.webp";
import thinPoha from "../assets/images/products/thin-poha1.webp";
import premiumPoha from "../assets/images/products/premium-poha.webp";
import masalaPoha from "../assets/images/products/masala-poha.webp";
import jumboPoha from "../assets/images/products/jumbo-poha.webp";
import organicPoha from "../assets/images/products/organic-poha.webp";

const productData = [
  {
    id: 1,
    name: "Premium Thick Poha",
    category: "Thick",
    image: thickPoha,
    description:
      "Premium quality thick poha made from carefully selected rice grains.",
    sizes: ["500g", "1kg", "5kg", "25kg", "50kg"],
  },

  {
    id: 2,
    name: "Thin Poha",
    category: "Thin",
    image: thinPoha,
    description: "Soft and light poha perfect for breakfast and snacks.",
    sizes: ["500g", "1kg", "5kg"],
  },

  {
    id: 3,
    name: "Premium Poha",
    category: "Premium",
    image: premiumPoha,
    description: "Our finest grade with superior taste and texture.",
    sizes: ["1kg", "5kg", "25kg"],
  },

  {
    id: 4,
    name: "Masala Poha Mix",
    category: "Ready Mix",
    image: masalaPoha,
    description: "Ready-to-cook delicious masala poha.",
    sizes: ["250g", "500g"],
  },

  {
    id: 5,
    name: "Jumbo Poha",
    category: "Thick",
    image: jumboPoha,
    description: "Extra thick premium flakes for hotels and restaurants.",
    sizes: ["5kg", "25kg", "50kg"],
  },

  {
    id: 6,
    name: "Organic Poha",
    category: "Premium",
    image: organicPoha,
    description: "Made from organically cultivated rice without additives.",
    sizes: ["500g", "1kg"],
  },
];

export default productData;
