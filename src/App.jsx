


import  { useEffect } from 'react'; 
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from './components/Main/MainSection';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ServiceSection from './components/ServiceSection/ServiceSection.jsx';
import Shop from "./components/Shop/Shop.jsx";
import Order from "./components/Order/Order.jsx";
import Ordernow from "./components/Ordernow/Ordernow.jsx";



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    
  }, []);

  return (
    <div className="overflow-x-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <MainSection/>
      <Services />
      <Banner/>
      <ServiceSection/>
      <Shop/>
      <Order/>
      <AppStore/>
      <Testimonials/>
      <Footer/>
      <Ordernow/>
    </div>
   
  );
};

export default App;
