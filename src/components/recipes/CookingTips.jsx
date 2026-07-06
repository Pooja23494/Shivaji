import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import cookingTips from "../../data/cookingTips";

const CookingTips = () => {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-5">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[5px] text-blue-700">
            Kitchen Secrets
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Cooking Tips for Perfect Poha
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple cooking techniques that make every plate of Shivaji Good Poha
            softer, tastier and healthier.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cookingTips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl ${tip.bg} transition duration-300 group-hover:scale-110`}
                >
                  <Icon className={`text-4xl ${tip.color}`} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{tip.title}</h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Chef Secret */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-[35px] bg-linear-to-r from-blue-700 to-blue-900 p-10 text-white shadow-2xl md:p-14"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
              <FaLightbulb
                className="text-4xl text-yellow-300"
                aria-label="Light Bulb"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold">Chef's Secret</h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                The secret to restaurant-style Poha is using premium quality
                flattened rice, cooking it gently on low heat, and finishing
                with fresh coriander, lemon juice, and crispy roasted peanuts
                just before serving.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CookingTips;
