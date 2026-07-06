import { motion } from "framer-motion";
import homeGallery from "../../data/homeGallery";

const GallerySection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-700 font-semibold">
            Gallery
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Inside Our Manufacturing Unit
          </h2>

          <p className="text-gray-600 mt-4">
            Explore our premium production facilities and quality process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeGallery.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
