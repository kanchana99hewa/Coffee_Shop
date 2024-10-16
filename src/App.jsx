import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainSection from './components/Main/MainSection';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Packets from './components/Packets/Packets';

// Import Pages
import Cart from './components/Pages/Cart';          // Updated path
import Products from './components/Pages/Products';  // Updated path
import Checkout from './components/Pages/Checkout';  // Updated path

const App = () => {
  const [cart, setCart] = useState([]);  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    console.log('Proceed to checkout');
    // Handle checkout logic here
  };

  return (
    <Router>
      <div className="overflow-x-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
        {/* Pass cart and toggleCart to Navbar */}
        <Navbar cart={cart} toggleCart={toggleCart} />

        {/* Define routes for the app */}
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                isCartOpen={isCartOpen}
                toggleCart={toggleCart}
                handleCheckout={handleCheckout}
              />
            }
          />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
       
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <Services />
                <Banner />
                <ServiceSection />
                <Shop />
                <Packets />
                <Order />
                <AppStore />
                <Testimonials />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
