import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaClock } from "react-icons/fa";
import videos from "../../data/videos";
import VideoModal from "./VideoModal";

const RecipeVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[5px] text-blue-700">
            Watch & Learn
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Delicious Poha Recipes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Watch easy step-by-step videos and prepare delicious recipes using
            Shivaji Good Poha.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="group relative cursor-pointer overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-blue-700 shadow-xl transition group-hover:scale-110">
                    <FaPlay className="ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-7">
                <div
                  className="mb-3 flex items-center gap-2 text-sm text-blue-700"
                  aria-label="Clock"
                >
                  <FaClock />

                  {video.duration}
                </div>

                <h3 className="text-2xl font-bold">{video.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

export default RecipeVideos;
