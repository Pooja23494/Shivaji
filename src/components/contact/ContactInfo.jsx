import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Address",
    value: (
      <>
        Shanti Food Product
        <br />
        Satem Road, Pardi (Sarpore)
        <br />
        Navsari - 396433
        <br />
        Gujarat, India
      </>
    ),
    color: "from-blue-700 to-blue-500",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    value: (
      <a href="tel:+917698755577" className="transition hover:text-blue-700">
        +91 76987 55577
      </a>
    ),
    color: "from-green-600 to-green-500",
  },
  {
    icon: FaEnvelope,
    title: "Email Address",
    value: (
      <a
        href="mailto:shivajigoodpoha@gmail.com"
        className="break-all transition hover:text-blue-700"
      >
        shivajigoodpoha@gmail.com
      </a>
    ),
    color: "from-yellow-500 to-orange-400",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: (
      <>
        Monday - Saturday
        <br />
        9:00 AM - 6:00 PM
      </>
    ),
    color: "from-purple-600 to-indigo-600",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Get In Touch"
          title="We'd Love to Hear From You"
          description="Whether you're looking for premium quality Poha, bulk orders,
            distributorship opportunities, or have any questions, our team is
            here to help."
        />

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                {/* Icon */}

                <div
                  className={`flex h-18 w-18 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-3xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-4 leading-8 text-gray-600">{item.value}</div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
