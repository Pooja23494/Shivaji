import { motion } from "framer-motion";
import homeGallery from "../../data/homeGallery";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const GallerySection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Gallery"
          title="Inside Our Manufacturing Unit"
          description="Explore our premium production facilities and quality process."
        />

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
      </Container>
    </section>
  );
};

export default GallerySection;
