import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import pac from "../../assets/packets.png"; 

const Packets = () => {
  const coffeeData = [
    {
      id: 1,
      name: "Arabica",
      roast: "Dark Roast",
      imgSrc: pac,
    },
    {
      id: 2,
      name: "House Blend",
      roast: "Dark Roast",
      imgSrc: pac,
    },
    {
      id: 3,
      name: "Robusta",
      roast: "Dark Roast",
      imgSrc: pac,
    },
    {
      id: 4,
      name: "Espresso",
      roast: "Dark Roast",
      imgSrc: pac,
    },
    {
      id: 5,
      name: "Colombian",
      roast: "Medium Roast",
      imgSrc: pac,
    },
    {
      id: 6,
      name: "French Roast",
      roast: "Dark Roast",
      imgSrc: pac,
    },
    {
      id: 7,
      name: "Italian Roast",
      roast: "Dark Roast",
      imgSrc: pac,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coffeeData.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= coffeeData.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const currentItems = coffeeData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-[#ffffff] py-10">
      <div className="mb-8 text-center">
        <h2 className="text-4xl text-[#f5deb3] font-cursive">Recommended</h2>
      </div>

      {/* Display the current set of coffee items */}
      <div className="flex justify-center px-10 space-x-24"> {/* Increased space-x to 12 */}
        {currentItems.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-[#241713] w-[200px] rounded-lg p-5 relative"
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
