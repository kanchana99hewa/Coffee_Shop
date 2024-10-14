import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react'; 
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







const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
        <Navbar />
   
        <MainSection />
        <Services />
        <Banner />
        <ServiceSection />
        <Shop />
        <Packets/>
        <Order />
  
        <AppStore />
        <Testimonials />
        <Footer />
        
        
        
        
      </div>
    </Router>
  );
};

export default App;
