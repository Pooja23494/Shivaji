import { motion } from "framer-motion";

const SectionHeading = ({
  subtitle,
  title,
  description,
  center = true,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-14 ${className}`}
    >
      {subtitle && (
        <span className="text-blue-700 font-semibold uppercase tracking-widest">
          {subtitle}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-gray-900">{title}</h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-gray-600">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
