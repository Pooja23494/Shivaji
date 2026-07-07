import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaRegCommentDots } from "react-icons/fa";
import instagramGallery from "../../data/instagramGallery";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import Button from "../common/Button";

const InstagramGallery = () => {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Social Gallery"
          title="Follow Our Journey"
          description="Stay connected with Shivaji Good Poha and explore our latest
            products, manufacturing moments, customer experiences and events."
        />

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
          <Button
            href="https://www.instagram.com/shivaji_6914?igsh=ajNqYzlrMHEzdHI="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
            Follow Us on Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default InstagramGallery;
