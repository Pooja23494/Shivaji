import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import team, { owner } from "../../data/team";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const TeamSection = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Our Team"
          title="Meet The People Behind Our Success"
          description="Our experienced professionals work together with passion and
            dedication to deliver premium quality products."
        />

        {/* Founder */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <div className="grid items-center lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={owner}
                alt="Founder"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-10 lg:p-14">
              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Founder & Managing Director
              </span>

              <h3 className="mt-6 text-4xl font-bold">Shivaji Patel</h3>

              <p className="mt-6 leading-8 text-gray-600">
                With years of dedication and experience in food manufacturing,
                our founder has built Shivaji Good Poha into a trusted brand
                known for quality, hygiene, and customer satisfaction.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                His vision continues to inspire innovation while maintaining
                traditional values that define our products.
              </p>

              <div className="mt-8 flex gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white transition hover:scale-110 hover:bg-blue-500"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold">{member.name}</h3>

                <p className="mt-2 font-medium text-blue-700">
                  {member.designation}
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-blue-700 hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
