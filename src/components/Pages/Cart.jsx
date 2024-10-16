import PropTypes from 'prop-types';

const Cart = ({ cart, setCart, handleCheckout }) => {
  // Function to remove item from cart by productId
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Function to increase quantity of an item in the cart by productId
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div className="p-4 text-black bg-white rounded shadow-lg w-80">
      <h2 className="mb-4 text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <div>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </div>
              <div>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleCheckout}
        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded"
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};

export default Cart;
