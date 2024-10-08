import { useState } from 'react';
import OrderModal from '../popUp/OrderModal/OrderModal'; // Import OrderModal

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <section className="flex items-center justify-center h-screen text-white bg-black">
      <div className="flex flex-col items-center justify-center ml-40">
        <h2 className="mb-10 ml-8 text-5xl font-semibold leading-relaxed text-center">
          <span>We Serve The</span> <br />
          <span className="whitespace-nowrap">
            Best<span className="text-yellow-500 text-8xl font-brush"> Coffee</span> For
          </span>
          <br />
          <span>Your Preference</span>
        </h2>

        {/* Button triggers the modal */}
        <button
          onClick={openModal}  // Open modal on click
          className="px-8 py-3 mt-4 text-xl text-black bg-yellow-600 rounded-full hover:bg-yellow-700"
        >
          Order Now
        </button>
      </div>

      <div className="ml-16">
        <img
          src="/cup2.png"
          alt="Coffee"
          className="w-[60vw] h-[100vh] object-contain"
        />
      </div>

      {/* Render OrderModal and pass props */}
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default MainSection;
