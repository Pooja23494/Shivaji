import {
  FaSeedling,
  FaWater,
  FaCogs,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

const process = [
  {
    icon: <FaSeedling />,
    title: "Rice Selection",
  },
  {
    icon: <FaWater />,
    title: "Cleaning",
  },
  {
    icon: <FaCogs />,
    title: "Processing",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
  },
  {
    icon: <FaTruck />,
    title: "Delivery",
  },
];

const ManufacturingProcess = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Manufacturing Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            From Rice to Your Plate
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          {process.map((item, index) => (
            <div key={item.title} className="relative text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl text-white shadow-lg">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              {index !== process.length - 1 && (
                <div className="absolute top-10 left-full hidden h-1 w-full bg-blue-300 md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
