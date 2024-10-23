import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';


const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black"> {/* Outer container with bg-black */}
       <div className="flex-grow max-w-xl p-4 mx-auto text-white bg-black "> {/* Inner container with padding and text color */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-yellow-400">Your Cart</h1>
        </div>
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
                      Price: LKR {item.price} x {item.quantity}
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
              <h2 className="text-xl font-bold">Total: LKR {total}</h2>
            </div>

            {/* Checkout Button with Link to /checkout */}
            <div className="flex justify-end">
              <Link to="/checkout">
                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
       {/* Footer Section */}
       <div>
        <Footer />
      </div>
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
