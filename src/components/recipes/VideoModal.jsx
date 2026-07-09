import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const VideoModal = ({ video, isOpen, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-3xl text-white"
              aria-label="Time"
            >
              <FaTimes />
            </button>

            <div className="aspect-video overflow-hidden rounded-3xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
