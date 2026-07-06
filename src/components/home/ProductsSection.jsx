import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../../data/products";

const ProductsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Our Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Premium Quality Poha Collection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Carefully processed using modern machinery to deliver freshness,
            nutrition, and authentic taste.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded bg-blue-400"></div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
