import { FaAward, FaLeaf, FaIndustry, FaTruck } from "react-icons/fa";

const data = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    text: "Best quality rice selection.",
  },
  {
    icon: <FaIndustry />,
    title: "Modern Machinery",
    text: "Advanced processing technology.",
  },
  {
    icon: <FaLeaf />,
    title: "100% Hygienic",
    text: "Clean and safe manufacturing.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "Reliable supply across India.",
  },
];

const Highlights = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
