import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import './Navbar.css'; 
import { useNavigate } from "react-router-dom";  // Import useNavigate for programmatic navigation
import OrderModal from '../popUp/OrderModal/OrderModal';


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  return (
    <>
      <div className="mt-4 text-yellow-600 bg-black shadow-md bg-gradient-to-r from-black to-black/90">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div className="flex items-center ml-16 ">
              <img src={Logo} alt="Logo" className="w-14" />
              <div className="ml-2 text-2xl font-bold tracking-wider sm:text-3xl moon-dance-font">
                Coffee Cafe
              </div>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex items-center justify-between gap-4"
            >
              <ul className="items-center hidden gap-4 sm:flex">
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

              {/* Order Now Button */}
              <button
                onClick={() => navigate("/OrderNow")}  // Correct use of navigate
                className="flex items-center gap-3 px-4 py-2 text-white duration-200 bg-yellow-600 rounded-full hover:scale-105"
              >
                Order
                <FaCoffee className="text-xl text-white cursor-pointer drop-shadow-sm" />
              </button>
            </div>
          </div>

          {/* Centered yellow line */}
          <div className="w-full h-1 my-4 bg-yellow-600" style={{ marginLeft: '4%' }}></div>
        </div>
      </div>

      {/* Render OrderModal somewhere in the JSX */}
      <OrderModal />
    </>
  );
};

export default Navbar;
