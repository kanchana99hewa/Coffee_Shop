import React from "react";

const MainSection = () => {
  return (
    <section className="flex items-center justify-center h-screen text-white bg-black">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">
          We Serve The Best <span className="text-yellow-500">Coffee</span> For Your Preference
        </h2>
        <button className="px-8 py-3 mt-8 text-xl text-black bg-yellow-600 rounded-full hover:bg-yellow-700">
          Order Now
        </button>
      </div>
      <div className="ml-10">
        <img src="cofee2.png" alt="Coffee" className="h-auto w-96" />
      </div>
    </section>
  );
};

export default MainSection;
