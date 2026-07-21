import { motion } from "framer-motion";
import { FaBullseye, FaRocket } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Our Vision",
    color: "from-blue-700 to-blue-500",
    description:
      "Our aim is to offer high-quality, entirely natural food staples to promote a healthier and more nutritious diet for all. We are committed to fostering local opportunities, growth, and impact throughout our entire process. Our approach focuses on developing exceptional food products for the health-conscious generations of today and the future.",
  },
  {
    icon: <FaRocket />,
    title: "Our Mission",
    color: "from-blue-500 to-amber-400",
    description:
      "To consistently produce fresh, hygienically processed, and high-quality Poha using modern manufacturing techniques while preserving authentic taste and building long-term relationships with our customers.",
  },
];

const VisionMission = () => {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Vision & Mission"
          title="Building Trust Through Quality"
          description=" Every grain of Poha we produce reflects our commitment to quality,
            innovation, and customer satisfaction. Our vision and mission guide
            every step of our journey."
        />

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Gradient Circle */}

              <div
                className={`absolute -right-14 -top-14 h-44 w-44 rounded-full bg-linear-to-br ${card.color} opacity-10 transition-all duration-500 group-hover:scale-125`}
              />

              {/* Icon */}

              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-r ${card.color} text-3xl text-white shadow-lg`}
              >
                {card.icon}
              </div>

              <h3 className="mb-5 text-3xl font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="leading-8 text-gray-600">{card.description}</p>

              {/* Bottom Border */}

              <div
                className={`mt-8 h-1 w-20 rounded-full bg-linear-to-r ${card.color} transition-all duration-500 group-hover:w-full`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
