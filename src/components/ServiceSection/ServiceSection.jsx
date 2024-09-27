import coffee2 from "../../assets/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: coffee2, // Use the imported image here
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit ipsum dolor sit dolor sit ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: coffee2, // Use the imported image here
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: coffee2, // Use the imported image here
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const ServiceSection = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-white">
        {/* Added gray background here */}
        <div className="container">
          {/* Heading section */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl font-bold text-black font-cursive">
              {/* Changed text color to black */}
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-20 place-items-center">
            {/* Increased gap between rows */}
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl hover:text-black relative shadow-xl duration-high group max-w-[300px] border border-gray-300"
                // Removed background classes
              >
                <div className="h-[122px]">
                  <img
                    src={service.img} // Use dynamic image source here
                    alt={service.name} // Provide a descriptive alt tag
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-sm text-gray-600 group-hover:text-black duration-high line-clamp-2">
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
