import {
  FaSeedling,
  FaWater,
  FaCogs,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

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
      <Container>
        <SectionHeading
          subtitle="Manufacturing Process"
          title="From Rice to Your Plate"
        />
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
      </Container>
    </section>
  );
};

export default ManufacturingProcess;
