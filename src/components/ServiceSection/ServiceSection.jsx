import coffee2 from "../../assets/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: coffee2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit ipsum dolor sit dolor sit ipsum dolor sit amet.",
    aosDelay: "100", // You can remove this if no animation is needed
  },
  {
    id: 2,
    img: coffee2,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300", // You can remove this if no animation is needed
  },
  {
    id: 3,
    img: coffee2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500", // You can remove this if no animation is needed
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
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-20 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="text-black relative group max-w-[300px]"
              >
                {/* Image section */}
                <div className="h-[122px]">
                  <img
                    src={service.img}
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
