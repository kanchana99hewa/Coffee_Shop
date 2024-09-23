

import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="max-w-xl mx-auto space-y-6"
            >
              {/* text section */}
              <h1 className="pl-3 text-2xl font-semibold text-center sm:text-left sm:text-4xl text-black/90">
                Coffee Cafe is available for Android and IOS
              </h1>
              {/* img section */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              
              </div>
            </div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
