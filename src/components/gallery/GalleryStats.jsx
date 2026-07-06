import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCamera, FaBoxOpen, FaUsers, FaAward } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: FaCamera,
    number: 150,
    suffix: "+",
    title: "Factory Photos",
    description:
      "Captured moments from our manufacturing unit and production process.",
  },
  {
    id: 2,
    icon: FaBoxOpen,
    number: 35,
    suffix: "+",
    title: "Product Variants",
    description:
      "A wide range of premium-quality Poha products for every household.",
  },
  {
    id: 3,
    icon: FaUsers,
    number: 500,
    suffix: "+",
    title: "Happy Clients",
    description:
      "Trusted by distributors, retailers and customers across India.",
  },
  {
    id: 4,
    icon: FaAward,
    number: 10,
    suffix: "+",
    title: "Years Experience",
    description: "Delivering quality, trust and consistency for decades.",
  },
];

const GalleryStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 py-24"
    >
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center text-white">
          <span className="font-semibold uppercase tracking-[5px] text-blue-400">
            Our Achievements
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Numbers That Reflect Our Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Our commitment to quality, innovation and customer satisfaction has
            helped us grow into a trusted Poha manufacturer.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-400 text-3xl text-blue-900 shadow-xl">
                  <Icon />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-white">
                  {item.number}
                  {item.suffix}
                </h3>

                <h4 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-blue-100">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryStats;
