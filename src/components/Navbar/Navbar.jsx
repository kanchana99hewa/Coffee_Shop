import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import Logo from "../../assets/website/coffee_logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Menu", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Services", link: "/#ServiceSection" },
  { id: 5, name: "Beans", link: "/#Packets" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleCartClick = () => {
    navigate("/cart");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="text-yellow-600 bg-black shadow-md bg-gradient-to-r from-black to-black/90">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-4 sm:ml-16">
            <img src={Logo} alt="Logo" className="w-12 sm:w-16" />
            <div className="ml-2 text-2xl font-bold tracking-wider sm:text-3xl lg:text-4xl moon-dance-font">
              Coffee Cafe
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mr-4 md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </div>

          {/* Navigation Links */}
            <div className={`flex-grow ${isMobileMenuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-end`}>
              <ul className="flex flex-col items-center gap-4 md:flex-row">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-2 text-lg text-white duration-200 hover:text-white/70"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



          {/* Products Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Link to="/products">
              <button className="flex items-center gap-3 px-5 py-3 text-lg text-white">
                Products
              </button>
            </Link>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCartClick}
              className="flex items-center gap-3 px-5 py-3 text-lg text-white duration-200 bg-yellow-600 rounded-full hover:scale-105"
            >
              Cart
              <FaShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Yellow Line */}
        <div className="w-full h-1 my-3 bg-yellow-600 sm:my-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
