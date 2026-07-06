import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

const GalleryGrid = ({ images, onPreview }) => {
  return (
    <motion.div
      layout
      className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {images.map((item, index) => (
        <motion.div
          layout
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-3xl bg-white shadow-xl"
        >
          <div className="relative cursor-pointer overflow-hidden">
            <motion.img
              layoutId={`gallery-${item.id}`}
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div
              onClick={() => onPreview(item)}
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-blue-950/70 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <div className="text-center text-white">
                <FaSearchPlus
                  className="mx-auto text-5xl"
                  aria-label="Search"
                />

                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

                <p className="mt-2 text-blue-200">{item.category}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
