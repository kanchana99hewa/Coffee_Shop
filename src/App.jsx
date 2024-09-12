import  { useEffect } from 'react'; 
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

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
      {/* Your other components */}
    </div>
  );
};

export default App;
