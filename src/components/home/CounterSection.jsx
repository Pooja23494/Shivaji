import CountUp from "react-countup";

const counters = [
  {
    number: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 500,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    number: 50,
    suffix: "+",
    title: "Dealers",
  },
  {
    number: 100,
    suffix: "%",
    title: "Quality Checked",
  },
];

const CounterSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {counters.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-blue-50 p-8 text-center shadow-md transition hover:shadow-xl"
            >
              <h2 className="text-5xl font-bold text-blue-700">
                {item.number}
                {item.suffix}
              </h2>

              <p className="mt-4 text-lg font-medium text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
