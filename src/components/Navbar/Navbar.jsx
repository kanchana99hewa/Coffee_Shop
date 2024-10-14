import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCoffee, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/website/coffee_logo.png";
import "./Navbar.css";

// Menu items
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Menu",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Services",
    link: "/#",
  },
  {
    id: 5,
    name: "Products",
    link: "/#products",
  },
  {
    id: 6,
    name: "Beans",
    link: "/#about",
  },
];

const Navbar = ({ cart, setCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigate to checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Scroll to services section
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="mt-4 text-yellow-600 bg-black shadow-md bg-gradient-to-r from-black to-black/90">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div className="flex items-center ml-16">
              <img src={Logo} alt="Logo" className="w-14" />
              <div className="ml-2 text-2xl font-bold tracking-wider sm:text-3xl moon-dance-font whitespace-nowrap">
                Coffee Cafe
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm-lg:flex-grow sm-lg:ml-[40rem]">
              <ul
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="flex items-center justify-center gap-4"
              >
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-4 text-xl text-white duration-200 hover:text-white/70"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleCheckout}
                className="flex items-center gap-3 px-4 py-2 text-white duration-200 bg-yellow-600 rounded-full hover:scale-105"
              >
                Cart ({cart.length})
                <FaShoppingCart className="text-xl text-white cursor-pointer drop-shadow-sm hover:text-black" />
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className="sm-lg:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 sm-lg:hidden">
              <ul className="flex flex-col gap-4 text-center">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      onClick={toggleMenu}
                      className="inline-block px-4 py-4 text-lg duration-200 sm-lg:text-xl text-white/70 hover:text-white"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleCheckout}
                    className="flex items-center gap-3 px-4 py-2 mx-auto text-white bg-yellow-600 rounded-full"
                  >
                    Cart ({cart.length})
                    <FaCoffee className="text-lg text-white cursor-pointer sm-lg:text-xl drop-shadow-sm" />
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Centered yellow line */}
          <div
            className="w-full h-1 my-4 bg-yellow-600"
            style={{ marginLeft: "4%" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
