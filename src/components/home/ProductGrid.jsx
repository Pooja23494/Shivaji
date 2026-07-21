import { useState } from "react";
import product from "../../data/products";
import ProductFilter from "./ProductFilter";
import ProductCard from "../home/ProductCard";
import ProductModal from "./ProductModal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts =
    activeCategory === "All"
      ? product
      : product.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Our Products"
          title="Premium Quality Poha Collection"
          description=" Browse our wide range of hygienically processed, premium quality
            Poha products."
        />

        <ProductFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleView}
            />
          ))}
        </div>
      </Container>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductGrid;
