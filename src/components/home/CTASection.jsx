import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-linear-to-r from-blue-700 to-blue-900 py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-white p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Looking for Premium Quality Poha?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Contact us today and experience fresh, hygienic and nutritious poha
            manufactured with modern technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/products"
              className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              aria-label="View Products"
            >
              View Products
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
