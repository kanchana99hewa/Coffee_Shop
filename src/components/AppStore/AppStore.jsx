import PlayStoreImg from "../../assets/website/play_store.png";

const backgroundStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#fef3c7",  // Equivalent to bg-yellow-50 in Tailwind
  height: "45vh",  // Adjusted to take 45% of the viewport height
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div className="py-4" style={backgroundStyle} > {/* Reduced padding */}
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="max-w-xl mx-auto space-y-6"
            >
              {/* text section */}
              <h1 className="pl-3 text-xl font-semibold text-center sm:text-left sm:text-4xl text-black/90">
                Coffee Cafe is available for Android 
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
            {/* Beans Image on the right side */}
            <div className="flex justify-center sm:justify-end">
            <img
              src="/bis.png"
              alt="Coffee beans"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] -mt-24" // Applied negative top margin
            />
          </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default AppStore;
