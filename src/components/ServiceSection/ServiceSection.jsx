
import cup1 from "../../assets/cup1.png";
import cup4 from "../../assets/cup4.png";
import cup5 from "../../assets/cup5.png";

const ServicesData = [
  {
    id: 1,
    img: cup1, // Different image for Espresso
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit ipsum dolor sit dolor sit ipsum dolor sit amet.",
    
  },
  {
    id: 2,
    img: cup4, // Different image for Americano
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
   
  },
  {
    id: 3,
    img: cup5, // Different image for Cappuccino
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    
  },
];

const ServiceSection = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-gray-300">
        {/* Gray background for the section */}
        <div className="container">
          {/* Heading section */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl font-bold text-black font-cursive">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 gap-20 pl-20 sm:grid-cols-2 md:grid-cols-3 md:gap-20 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="text-black relative group max-w-[300px]"
              >
                {/* Image section */}
                <div className="h-[100px] mb-4">
                  <img
                    src={service.img} // Use dynamic image
                    alt={service.name}
                    className="max-w-[200px] block mx-auto"
                  />
                </div>
                {/* Text section */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
