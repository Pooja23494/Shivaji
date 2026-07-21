import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import navLinks from "../../data/navLinks";
import logo from "../../assets/logo/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scroll
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-auto"
              width={123}
              height={80}
              loading="lazy"
              decoding="async"
            />

            <div>
              <h1 className="text-2xl font-bold text-blue-700">Shivaji</h1>

              <p className="text-sm text-gray-500">Good Poha</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium text-[16px] transition duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.title}

                    <span
                      className={`absolute left-0 -bottom-2 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Contact */}

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917698755577"
              className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-300 hover:text-black"
              aria-label="Phone"
            >
              <FaPhoneAlt />
              Contact Us
            </a>
          </div>

          {/* Mobile */}

          <button
            className="lg:hidden text-3xl text-blue-700"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 right-0 z-100 h-screen w-75 bg-white shadow-2xl transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-xl font-bold text-blue-700">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
            aria-label="Close Modal"
          >
            <HiOutlineX />
          </button>
        </div>

        <nav className="flex flex-col">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b px-8 py-5 transition ${
                  isActive ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <a
            href="tel:+917698755577"
            className="m-6 rounded-full bg-blue-700 py-4 text-center text-white"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        ></div>
      )}
    </>
  );
};

export default Navbar;
