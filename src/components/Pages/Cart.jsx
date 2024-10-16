

const Cart = ({ cart, isCartOpen, toggleCart, handleCheckout, setCart }) => {
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed p-4 text-black bg-white rounded shadow-lg top-16 right-5 w-80">
          <h2 className="mb-4 text-xl font-bold">Cart</h2>
          {cart.length === 0 ? (
            <p className="">Your cart is empty.</p>
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
                      className="px-2 py-1 bg-red-500 rounded text-"
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
            className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
