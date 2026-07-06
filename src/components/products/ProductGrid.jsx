import { useState } from "react";
import productData from "../../data/productData";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

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
      ? productData
      : productData.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-blue-700">
            Our Products
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Premium Quality Poha Collection
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Browse our wide range of hygienically processed, premium quality
            Poha products.
          </p>
        </div>

        <ProductFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((productData) => (
            <ProductCard
              key={productData.id}
              productData={productData}
              onView={handleView}
            />
          ))}
        </div>
      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductGrid;
