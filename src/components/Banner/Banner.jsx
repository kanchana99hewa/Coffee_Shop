import BannerImg from "../../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const bgImage = {
  backgroundColor: "#000000", 

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0" style={{ backgroundColor: '#000000' }}>
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="coffee img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-bold sm:text-4xl font-cursive"
                  style={{ color: '#fff' }} // Adjusting text color to stand out on the black background
                >
                  Premium Blend Coffee
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm leading-5 tracking-wide text-gray-500"
                  style={{ color: '#fff' }} // Adjusting text color to white
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="w-12 h-12 p-3 text-2xl bg-red-100 rounded-full shadow-sm " />
                      <span style={{ color: '#fff' }}>Premium Coffee</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="w-12 h-12 p-3 text-2xl bg-orange-100 rounded-full shadow-sm " />
                      <span style={{ color: '#fff' }}>Hot Coffee</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="w-12 h-12 p-3 text-4xl bg-yellow-100 rounded-full shadow-sm" />
                      <span style={{ color: '#fff' }}>Cold Coffee</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="pl-6 space-y-2 border-l-4 border-primary/50"
                  >
                    <h1 className="text-2xl font-semibold font-cursive" style={{ color: '#fff' }}>
                      Tea Lover
                    </h1>
                    <p className="text-sm" style={{ color: '#fff' }}>
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
