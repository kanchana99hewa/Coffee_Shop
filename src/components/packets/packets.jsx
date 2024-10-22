import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';


import web from "../../assets/image (1).jpg"; 
import web2 from "../../assets/image (2).jpg"; 
import web3 from "../../assets/image.jpg"; 


const Packets = () => {
  const coffeeData = [
    { id: 1, name: "Arabica", roast: "Dark Roast", imgSrc: web3 },
    { id: 2, name: "House Blend", roast: "Dark Roast", imgSrc: web },
    { id: 3, name: "Robusta", roast: "Dark Roast", imgSrc: web2  },
    { id: 4, name: "Espresso", roast: "Dark Roast", imgSrc:web3  },
    { id: 5, name: "Colombian", roast: "Medium Roast", imgSrc: web2  },
    { id: 6, name: "French Roast", roast: "Dark Roast", imgSrc: web  },
    { id: 7, name: "Italian Roast", roast: "Dark Roast", imgSrc: web2 },
    { id: 8, name: "House Blend", roast: "Dark Roast", imgSrc: web3  },
    { id: 9, name: "Robusta", roast: "Dark Roast", imgSrc: web  },
    { id: 10, name: "Espresso", roast: "Dark Roast", imgSrc: web3  },
    { id: 11, name: "Colombian", roast: "Medium Roast", imgSrc:web  },
    { id: 12, name: "French Roast", roast: "Dark Roast", imgSrc: web2 },
    { id: 13, name: "Italian Roast", roast: "Dark Roast", imgSrc: web3 },
  ];

  const [translateX, setTranslateX] = useState(0);
  const maxIndex = coffeeData.length;

  const itemWidth = 240; // width of each item (including margins)
  const step = itemWidth * 0.9; // Move by half the width for gradual movement

  // Move left
  const handlePrevious = () => {
    setTranslateX((prev) => Math.min(prev + step, 0)); // Ensure we don't go past the start
  };

  // Move right
  const handleNext = () => {
    setTranslateX((prev) => 
      Math.max(prev - step, -(itemWidth * (maxIndex - 5)))
    ); // Ensure we don't go past the end
  };

  return (
    
    <div className="py-10 overflow-hidden bg-yellow-50 ">
          
      <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-black font-cursive">Recommended</h1>
      </div>

      {/* Coffee item list */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {coffeeData.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-[#1f1010] w-[200px] rounded-lg p-5 relative mx-5"
              style={{ minWidth: '200px' }} // Ensure all items have the same width
            >
              <div className="relative">
                <img
                  src={coffee.imgSrc}
                  alt={coffee.name}
                  className="h-[150px] w-[150px] mx-auto"
                />
               
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <h3 className="text-[#f5deb3] font-bold">{coffee.name}</h3>
                  <p className="text-[#9b7c71]">{coffee.roast}</p>
                </div>

                <div>
                <Link to="/products">
                  <i className="fas fa-shopping-cart text-[#e2b451] cursor-pointer"></i>
                </Link>
              </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-6">
      <button
        onClick={handlePrevious}
        className="bg-[#d6b967] w-10 h-10 rounded-full mx-2 flex items-center justify-center"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={handleNext}
        className="bg-[#e4c36b] w-10 h-10 rounded-full mx-2 flex items-center justify-center"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>

      
    </div>
  );
};

export default Packets;
