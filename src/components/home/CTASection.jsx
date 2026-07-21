import Button from "../common/Button";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
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
            <div className="mt-14 flex flex-wrap justify-center gap-5">
              <Button
                href="https://wa.me/917698755577"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white hover:bg-green-600 rounded-xl"
                aria-label="Whatsapp"
              >
                <FaWhatsapp size={22} />
                WhatsApp Us
              </Button>

              <Button
                href="tel:+917698755577"
                className="rounded-xl"
                variant="lightBlue"
                aria-label="Phone"
              >
                <FaPhoneAlt />
                Call Now
              </Button>

              <Button
                href="mailto:shivajigoodpoha@gmail.com"
                className="rounded-xl"
                aria-label="Email"
              >
                <FaEnvelope />
                Email Us
              </Button>
            </div>
          </div>

          {/* Contact Page Button */}

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-semibold text-blue-400 transition hover:gap-4"
              aria-label="Request"
            >
              Request a Custom Quote
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
