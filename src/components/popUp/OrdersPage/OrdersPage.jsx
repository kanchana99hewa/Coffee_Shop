import React, { useState } from 'react';
import OrderModal from '../../../components/OrderModal';

const OrdersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-2xl font-bold">Place Your Coffee Order</h1>

      {/* Order button to open the modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-indigo-600 rounded-lg"
      >
        Order Coffee
      </button>

      {/* Order Coffee Modal */}
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default OrdersPage;
