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
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="-mt-10 text-white bg-darkAmber"> {/* Changed background to brown */}
      <div className="bg-black/40 min-h-[250px]"> {/* Reduced minimum height */}
        <div className="container grid pt-4 pb-10 md:grid-cols-3"> {/* Reduced padding */}
          {/* Company details */}
          <div className="px-4 py-4"> {/* Reduced padding */}
            <a
              href="#"
              className="text-2xl font-semibold tracking-widest sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-2"> {/* Reduced padding */}
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-4"> {/* Reduced padding */}
              <h1 className="mb-2 text-xl font-semibold sm:text-left"> {/* Reduced margin */}
                Important Links
              </h1>
              <ul className="space-y-2"> {/* Reduced space between items */}
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
            {/* Second column links */}
            <div className="px-4 py-4"> {/* Reduced padding */}
              <h1 className="mb-2 text-xl font-semibold sm:text-left"> {/* Reduced margin */}
                Quick Links
              </h1>
              <ul className="space-y-2"> {/* Reduced space between items */}
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
            <div className="col-span-2 px-4 py-4 sm:col-auto"> {/* Reduced padding */}
              <h1 className="mb-2 text-xl font-semibold sm:text-left"> {/* Reduced margin */}
                Address
              </h1>
              <div>
                <p className="mb-2">Noida, Uttar Pradesh</p> {/* Reduced margin */}
                <p>+91 1234567890</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-4"> {/* Reduced margin */}
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
