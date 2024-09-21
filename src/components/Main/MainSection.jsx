import React from "react";

const MainSection = () => {
  return (
    <section className="flex items-center justify-center h-screen text-white bg-black">
      <div className="flex flex-col items-center justify-center ml-40">
        <h2 className="ml-8 text-5xl font-semibold leading-normal text-center">
          <span>We Serve The</span> <br />
          Best<span className="text-yellow-500 text-8xl font-brush"> Coffee</span> For <br />
          <span> Your Preference</span>
        </h2>
        <button className="px-8 py-3 mt-8 text-xl text-black bg-yellow-600 rounded-full hover:bg-yellow-700">
          Order Now
        </button>
        <p className="mt-4 text-gray-400">Your favorite coffee, brewed to perfection.</p>
      </div>
      <div className="ml-16">
        <img
          src="/cup2.png"
          alt="Coffee"
          className="w-[60vw] h-[100vh] object-contain"
        />
      </div>
    </section>
  );
};

export default MainSection;
