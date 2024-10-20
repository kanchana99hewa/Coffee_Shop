import BannerImg from "../../assets/coffee-white.png";

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
        <div
          className="min-h-[550px] flex justify-center items-center py-12 sm:py-0"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> {/* Reduced gap between image and text */}
              {/* Image section */}
              <div
                data-aos="zoom-in"
                className="flex ml-60"  
              >
                <img
                  src={BannerImg}
                  alt="coffee img"
                  className="max-w-[430px] w-full drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-bold sm:text-4xl font-cursive"  // Align text to the left
                  style={{ color: "#fff" }}
                >
                  About us
                </h1>

                <div className="flex flex-col gap-4">  {/* Removed flex between to avoid unnecessary gaps */}
                  <div className="pl-4 border-l-4 border-primary/50">
                    <p className="text-left text-white"> {/* Align paragraph text to the left */}
                      At Coffee Haven, we believe that a great cup of coffee is more
                      than just a drink—it’s an experience. Established with a passion
                      for crafting the perfect brew, our café is a cozy retreat for
                      coffee lovers and those who appreciate the finer things in life.
                      Every cup we serve is made from ethically sourced beans, carefully
                      selected from the world’s best coffee-growing regions. Our skilled
                      baristas bring these beans to life, ensuring each sip bursts with
                      flavor and warmth. Whether you are here for a quick morning
                      pick-me-up, a leisurely afternoon with friends, or just some quiet
                      time with a book, we’ve created the perfect atmosphere to relax and
                      unwind. From our freshly brewed espresso to our indulgent specialty
                      drinks, every detail is designed to make your visit memorable. At
                      Coffee Haven, we don’t just serve coffee—we craft moments of joy,
                      one cup at a time.
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
