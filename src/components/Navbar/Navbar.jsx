
import Logo from "../../assets/website/coffee_logo.png";
import {  FaShoppingCart } from "react-icons/fa";
import './Navbar.css';


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
    name: "Services ",
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

const Navbar = () => {
 

  return (
    <>
      <div className="mt-4 text-yellow-600 bg-black shadow-md bg-gradient-to-r from-black to-black/90">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center ml-16">
              <img src={Logo} alt="Logo" className="w-14" />
              <div className="ml-2 text-2xl font-bold tracking-wider sm:text-3xl moon-dance-font whitespace-nowrap">
              Coffee Cafe
              </div>

            </div>

          {/* Navigation Links in the center, shifted further to the right */}
          <div className="flex-grow ml-[40rem]"> {/* Changed margin-left to custom value ml-[40rem] */}
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




            {/* Login, Cart, and Order Now on the right */}
            <div className="flex items-center gap-4">
              {/* Order Now Button */}
              <button
              
                className="flex items-center gap-3 px-4 py-2 text-white duration-200 bg-yellow-600 rounded-full hover:scale-105"
              >
                Cart
                
              <FaShoppingCart className="text-xl text-white cursor-pointer drop-shadow-sm hover:text-black" />
              </button>

           

            
            </div>
          </div>

          {/* Centered yellow line */}
          <div className="w-full h-1 my-4 bg-yellow-600" style={{ marginLeft: '4%' }}></div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
