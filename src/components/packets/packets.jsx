import '@fortawesome/fontawesome-free/css/all.min.css';
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
  ];

  return (
    <div className="bg-[#ffffff] py-10">
      <div className="mb-8 text-center">
        <h2 className="text-4xl text-[#f5deb3] font-cursive">Recommended</h2>
      </div>

      <div className="flex justify-center space-x-8">
        {coffeeData.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-[#53362f] w-[250px] rounded-lg p-5 relative"
          >
            <div className="relative">
              <img
                src={coffee.imgSrc}
                alt={coffee.name}
                className="h-[280px] w-[180px] mx-auto"
              />
              <div className="absolute top-2 left-2">
                <i className="fas fa-info-circle text-[#e9e6d9]"></i> {/* FontAwesome icon */}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-left">
                <h3 className="text-[#f5deb3] font-bold">{coffee.name}</h3>
                <p className="text-[#8d6e63]">{coffee.roast}</p>
              </div>

              <div>
                <i className="fas fa-shopping-cart text-[#f5deb3]"></i> {/* FontAwesome icon */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#c4a484] p-3 rounded-full mx-2">
          <i className="fas fa-chevron-left"></i> {/* FontAwesome icon */}
        </button>
        <button className="bg-[#c4a484] p-3 rounded-full mx-2">
          <i className="fas fa-chevron-right"></i> {/* FontAwesome icon */}
        </button>
      </div>
    </div>
  );
};

export default Packets;
