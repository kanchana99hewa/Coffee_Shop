
import PropTypes from 'prop-types';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-lg font-semibold">Order Coffee</h2>

        {/* Coffee order form */}
        <form>
          <div className="mb-4">
            <label htmlFor="coffeeType" className="block text-sm font-medium text-gray-700">Select Coffee</label>
            <select
              id="coffeeType"
              className="block w-full mt-1 border border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="espresso">Espresso</option>
              <option value="latte">Latte</option>
              <option value="cappuccino">Cappuccino</option>
              <option value="americano">Americano</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              id="quantity"
              type="number"
              min="1"
              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full py-2 text-white bg-yellow-600 rounded-md">
            Place Order
          </button>
        </form>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

OrderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderModal;
