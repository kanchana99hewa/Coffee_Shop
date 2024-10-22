import Img from "../../assets/espre.png";
import Img4 from "../../assets/espre4.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Espresso",
    description:
      "A classic Italian coffee brewed by forcing steam through ground coffee beans.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img4,
    name: "Americano",
    description:
      "Espresso diluted with hot water, giving it a similar strength to drip coffee.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img,
    name: "Cappuccino",
    description:
      "Espresso topped with steamed milk foam, often served with cinnamon or chocolate.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    name: "Latte",
    description:
      "A smooth blend of espresso and steamed milk, topped with a thin layer of foam.",
    aosDelay: "100",
  },
  {
    id: 5,
    img: Img,
    name: "Macchiato",
    description:
      "Espresso marked with a dollop of steamed milk, a perfect balance of strong and smooth.",
    aosDelay: "300",
  },
  {
    id: 6,
    img: Img4,
    name: "Mocha",
    description:
      "A chocolatey twist on espresso with steamed milk and a shot of chocolate syrup.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 text-center bg-yellow-50 ">
        {/* Container */}
        <div className="container mx-auto">
          {/* Main Heading */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-black font-cursive">
              Best Coffee For You
            </h1>
          </div>

          {/* First Row Signature */}
          <div className="my-16">
            <h2 className="inline-block px-4 py-2 text-xl text-black bg-yellow-600 rounded-full">
              Espresso
            </h2>
          </div>

          {/* First Row of Service Cards */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-20 place-items-center">
            {ServicesData.slice(0, 3).map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-black text-yellow-600 hover:bg-yellow-600 hover:text-black relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-sm text-white group-hover:text-white duration-high line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtopic for the Middle */}
          <div className="my-16">
            <h2 className="inline-block px-4 py-2 text-xl text-black bg-yellow-600 rounded-full">
              Signature Drinks
            </h2>
          </div>

          {/* Second Row of Service Cards */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-20 place-items-center">
            {ServicesData.slice(3, 6).map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-black text-yellow-600 hover:bg-yellow-600 hover:text-black relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-sm text-white group-hover:text-white duration-high line-clamp-2">
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

export default Services;
