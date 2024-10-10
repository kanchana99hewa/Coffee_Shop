import BannerImg from "../../assets/room.jpg";

const bgImage = {
  backgroundColor: "#000000",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Shop = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0" style={{ backgroundColor: '#000000' }}>
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Image section */}
              <div>
                <img
                  src={BannerImg}
                  alt="coffee shop"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-3xl font-bold sm:text-4xl font-cursive" style={{ color: '#fff' }}>
                  Visit our shop
                </h1>

                <p className="text-sm" style={{ color: '#fff', textAlign: 'justify' }}>
                  Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.
                  At Coffee Café, we believe that a great cup of coffee is more than just a drink—it’s an experience. Founded with a passion for crafting the perfect brew, 
                  our café is a haven for coffee lovers and enthusiasts alike. We source our beans from the finest farms, ensuring that every sip offers a unique blend of rich flavors and aromas. Whether you’re stopping by for a quick espresso or settling in for a relaxed afternoon with friends, we’re dedicated to making your visit memorable. Our cozy atmosphere and friendly staff are always ready to welcome you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
