import PropTypes from 'prop-types'; // For prop validation
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="p-4 mx-auto bg-black max-w-none">

      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>
                    Price: PKR {item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 text-white bg-red-700 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total: PKR {total}</h2>
          </div>
           
           {/* Checkout Button with Link to /checkout */}
           <div className="flex justify-end pl-96">
            <Link to="/checkout">
              <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded">
                Checkout
              </button>
            </Link>
          </div>

          
        </div>
      )}
    </div>
  );
};

// Define PropTypes for the component
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
