import { Link } from 'react-router-dom';
import beansImage from "../../assets/beans.jpg";


const Order = () => {
 

  return (
    <div
      className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${beansImage})`, // Use the imported image here
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}

      <div className="relative px-4 text-center text-white">
        <h1 className="text-4xl font-bold">
          A MORNING WITHOUT <span className="text-[#ce9c14]">COFFEE</span> IS LIKE A SLEEP
        </h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur. Tellus at nulla ornare mauris ultrices.
        </p>

        {/* Order Now Button triggers the modal */}
        <button className="mt-6 px-8 py-2 bg-[#cc8809] text-white rounded-full text-lg">
        <Link to="/products" className="text-white">
          Order Now
        </Link>
      </button>
      </div>

 
    </div>
  );
};

export default Order;
