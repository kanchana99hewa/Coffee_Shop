import  { useEffect } from 'react'; 
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from './components/Main/MainSection';
import Services from './components/Services/Services';

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
    </div>
  );
};

export default App;
