import Button from "../common/Button";

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
            <Button to="/products" aria-label="View Products">
              View Products
            </Button>

            <Button to="/contact" variant="outline" aria-label="Contact Us">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
