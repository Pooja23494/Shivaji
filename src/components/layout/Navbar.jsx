import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineHome } from "react-icons/hi";

import {
  FaPhoneAlt,
  FaBoxOpen,
  FaUtensils,
  FaInfoCircle,
} from "react-icons/fa";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}

      <header
        className={`fixed left-0 top-0 z-50 hidden w-full transition-all duration-500 lg:block ${
          scroll
            ? "bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shivaji Good Poha"
              className="h-16 w-auto"
              width={123}
              height={80}
              loading="eager"
              decoding="async"
            />

            <div>
              <h1 className="text-2xl font-bold text-blue-700">Shivaji</h1>

              <p className="text-sm text-gray-500">Good Poha</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition ${
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
                      className={`absolute -bottom-2 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Contact */}

          <a
            href="tel:+917698755577"
            className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
            aria-label="Contact Us"
          >
            <FaPhoneAlt />
            Contact Us
          </a>
        </div>
      </header>

      {/* ================= MOBILE TOP HEADER ================= */}

      <header className="fixed left-0 top-0 z-40 flex h-18 w-full items-center justify-between border-b border-gray-100 bg-white/95 px-5 shadow-sm backdrop-blur-xl lg:hidden">
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Shivaji Good Poha"
            className="h-12 w-auto"
            width={90}
            height={60}
            loading="eager"
            decoding="async"
          />

          <div>
            <h1 className="text-lg font-bold text-blue-700">Shivaji</h1>

            <p className="text-xs text-gray-500">Good Poha</p>
          </div>
        </NavLink>

        <a
          href="tel:+917698755577"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white shadow-md"
          aria-label="Call Us"
        >
          <FaPhoneAlt />
        </a>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`fixed right-0 top-0 z-100 h-screen w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-xl font-bold text-blue-700">
              Shivaji Good Poha
            </h2>

            <p className="text-sm text-gray-500">Premium Quality Poha</p>
          </div>

          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl transition hover:bg-red-500 hover:text-white"
            aria-label="Close Menu"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Sidebar Links */}

        <nav className="flex flex-col p-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-5 py-4 font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Contact */}

        <div className="absolute bottom-8 left-5 right-5">
          <a
            href="tel:+917698755577"
            className="flex items-center justify-center gap-3 rounded-xl bg-blue-700 py-4 font-semibold text-white"
          >
            <FaPhoneAlt />
            Call Us Now
          </a>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}

      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

      <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-gray-200 bg-white/95 shadow-[0_-5px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden">
        <div className="relative mx-auto flex h-20 max-w-lg items-center justify-around px-2">
          {/* HOME */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex w-16 flex-col items-center gap-1 text-xs font-medium transition ${
                isActive ? "text-blue-700" : "text-gray-500"
              }`
            }
          >
            <HiOutlineHome className="text-xl" />

            <span>Home</span>
          </NavLink>

          {/* PRODUCTS */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex w-16 flex-col items-center gap-1 text-xs font-medium transition ${
                isActive ? "text-blue-700" : "text-gray-500"
              }`
            }
          >
            <FaInfoCircle className="text-xl" />

            <span>About</span>
          </NavLink>

          {/* CENTER MENU */}

          <button
            onClick={() => setOpen(!open)}
            className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-700 text-2xl text-white shadow-xl transition hover:scale-105"
            aria-label={open ? "Close Menu" : "Open Menu"}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* RECIPES */}

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `flex w-16 flex-col items-center gap-1 text-xs font-medium transition ${
                isActive ? "text-blue-700" : "text-gray-500"
              }`
            }
          >
            <FaUtensils className="text-xl" />

            <span>Recipes</span>
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex w-16 flex-col items-center gap-1 text-xs font-medium transition ${
                isActive ? "text-blue-700" : "text-gray-500"
              }`
            }
          >
            <FaPhoneAlt className="text-xl" />

            <span>Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
