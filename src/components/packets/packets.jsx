import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import pac from "../../assets/packets.png"; 
import pac1 from "../../assets/pac 1.png"; 

import pac3 from "../../assets/pac 3.png"; 
import pac4 from "../../assets/pac 4.png"; 
import pac5 from "../../assets/pac 5.png"; 


const Packets = () => {
  const coffeeData = [
    { id: 1, name: "Arabica", roast: "Dark Roast", imgSrc: pac },
    { id: 2, name: "House Blend", roast: "Dark Roast", imgSrc: pac1 },
    { id: 3, name: "Robusta", roast: "Dark Roast", imgSrc: pac },
    { id: 4, name: "Espresso", roast: "Dark Roast", imgSrc: pac3 },
    { id: 5, name: "Colombian", roast: "Medium Roast", imgSrc: pac4 },
    { id: 6, name: "French Roast", roast: "Dark Roast", imgSrc: pac5 },
    { id: 7, name: "Italian Roast", roast: "Dark Roast", imgSrc: pac },
    { id: 8, name: "House Blend", roast: "Dark Roast", imgSrc: pac1 },
    { id: 9, name: "Robusta", roast: "Dark Roast", imgSrc: pac },
    { id: 10, name: "Espresso", roast: "Dark Roast", imgSrc: pac3 },
    { id: 11, name: "Colombian", roast: "Medium Roast", imgSrc: pac4 },
    { id: 12, name: "French Roast", roast: "Dark Roast", imgSrc: pac5 },
    { id: 13, name: "Italian Roast", roast: "Dark Roast", imgSrc: pac },
  ];

  const [translateX, setTranslateX] = useState(0);
  const maxIndex = coffeeData.length;

  const itemWidth = 240; // width of each item (including margins)
  const step = itemWidth * 0.5; // Move by half the width for gradual movement

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
    <div className="bg-[#ffffff] py-10 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-4xl text-[#000000] font-cursive">Recommended</h2>
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
              className="bg-[#241713] w-[200px] rounded-lg p-5 relative mx-5"
              style={{ minWidth: '200px' }} // Ensure all items have the same width
            >
              <div className="relative">
                <img
                  src={coffee.imgSrc}
                  alt={coffee.name}
                  className="h-[150px] w-[150px] mx-auto"
                />
                <div className="absolute top-2 left-2">
                  <i className="fas fa-info-circle text-[#e9e6d9]"></i>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <h3 className="text-[#f5deb3] font-bold">{coffee.name}</h3>
                  <p className="text-[#8d6e63]">{coffee.roast}</p>
                </div>

                <div>
                  <i className="fas fa-shopping-cart text-[#f5deb3]"></i>
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
          className="bg-[#c4a484] p-3 rounded-full mx-2"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="bg-[#c4a484] p-3 rounded-full mx-2"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Packets;
