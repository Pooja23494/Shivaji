import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GalleryModal = ({
  images,
  selectedImage,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close */}

          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition hover:rotate-90"
            aria-label="Time"
          >
            <FaTimes />
          </button>

          {/* Previous */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
            aria-label="Left Arrow"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
            aria-label="Right Arrow"
          >
            <FaChevronRight />
          </button>

          {/* Image */}

          <motion.div
            layoutId={`gallery-${selectedImage.id}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl"
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto rounded-3xl shadow-2xl"
              loading="lazy"
              decoding="async"
            />

            <div className="mt-6 text-center text-white">
              <span className="rounded-full bg-blue-600 px-4 py-1 text-sm">
                {selectedImage.category}
              </span>

              <h2 className="mt-4 text-3xl font-bold">{selectedImage.title}</h2>

              <p className="mt-3 text-gray-300">
                Image {selectedIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
