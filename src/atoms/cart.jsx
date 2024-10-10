import { FaShoppingCart } from 'react-icons/fa';  // Import shopping cart icon
import { useState } from 'react';

const CartButton = ({ openModal, cartItemsCount }) => {
  return (
    <button
      onClick={openModal}  // Open modal on button click
      className="flex items-center gap-3 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
    >
      {/* Cart Label */}
      <span>Cart</span>
      
      {/* Shopping cart icon */}
      <FaShoppingCart className="text-xl text-white drop-shadow-sm" />

      {/* Cart item count */}
      {cartItemsCount > 0 && (
        <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
          {cartItemsCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
