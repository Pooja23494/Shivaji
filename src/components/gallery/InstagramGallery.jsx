import { motion } from "framer-motion";
import {
  FaInstagram,
  FaHeart,
  FaRegCommentDots,
} from "react-icons/fa";
import instagramGallery from "../../data/instagramGallery";

const InstagramGallery = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[5px] text-blue-700">
            Social Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Follow Our Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay connected with Shivaji Good Poha and explore our latest
            products, manufacturing moments, customer experiences and events.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {instagramGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={item.image}
                alt={`Instagram ${item.id}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/75 opacity-0 transition duration-300 group-hover:opacity-100">
                <FaInstagram
                  className="mb-4 text-5xl text-white"
                  aria-label="Instagram"
                />

                <div className="flex items-center gap-8 text-white">
                  <div className="flex items-center gap-2">
                    <FaHeart aria-label="Heart" />
                    <span>1.2k</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegCommentDots aria-label="Comment" />
                    <span>84</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/shivaji_6914?igsh=ajNqYzlrMHEzdHI="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            aria-label="Instagram"
          >
            <FaInstagram />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;