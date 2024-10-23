import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Menu",
    link: "/#Services",
  },
  {
    title: "Services",
    link: "/#ServiceSection",
  },
  {
    title: "Beans",
    link: "/#Packets",
  },
  {
    title: "Products",
    link: "/#products",
  },
];

const Footer = () => {
  return (
    <div className="-mt-10 text-white bg-darkAmber">
      <div className="bg-black/40 min-h-[250px]">
        <div className="container grid pt-4 pb-10 md:grid-cols-3">
          <div className="px-4 py-4">
            <a
              href="#"
              className="text-2xl font-semibold tracking-widest sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-2">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-4">
              <h1 className="mb-2 text-xl font-semibold sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-2">
                {FooterLinks.slice(0, 4).map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second column links */}
            <div className="px-4 py-4">
              <h1 className="mb-2 text-xl font-semibold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-2">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="col-span-2 px-4 py-4 sm:col-auto">
              <h1 className="mb-2 text-xl font-semibold sm:text-left">
                Address
              </h1>
              <div>
                <p className="mb-2">No 123,colombo</p>
                <p>0708 654 123</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-4">
                  <a href="#">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl duration-200 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl duration-200 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
