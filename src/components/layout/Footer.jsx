import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">Shivaji Good Poha</h2>

            <p className="mt-5 text-blue-100 leading-7">
              Manufacturing premium quality hygienic poha with modern technology
              and trusted taste.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

            <div className="space-y-3">
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About</Link>
              <br />
              <Link to="/products">Products</Link>
              <br />
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Contact</h3>

            <p className="flex items-center gap-3" aria-label="Phone">
              <FaPhoneAlt />
              +91 76987 55577
            </p>

            <p className="mt-3 flex items-center gap-3" aria-label="Email">
              <FaEnvelope />
              shivajigoodpoha@gmail.com
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AadJhoCZ3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/shivaji_6914?igsh=ajNqYzlrMHEzdHI="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-blue-100">
          © {new Date().getFullYear()} Shivaji Good Poha. All Rights Reserved.{" "}
          <br />
          <p>
            Developed by <span className="text-blue-300">Pooja Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
