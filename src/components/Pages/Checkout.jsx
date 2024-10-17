import { useState } from "react";
import PropTypes from "prop-types";

const Checkout = ({ cart, setCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

    const decreaseQuantity = (productId) => {
        setCart(
            cart.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div className="container px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-3xl p-6 mx-auto mb-10 bg-white rounded-lg shadow-lg sm:p-8">
                <h2 className="mb-6 text-xl font-semibold sm:text-2xl">Your Cart</h2>
                {cart.length === 0 ? (
                    <div className="py-10 text-center text-gray-500">
                        <h3 className="text-lg font-medium sm:text-xl">
                            Your cart is empty.
                        </h3>
                        <p className="mt-2">
                            Add some items to your cart to proceed with checkout.
                        </p>
                    </div>
                ) : (
                    <>
                        <ul className="divide-y divide-gray-200">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="object-cover w-24 h-24 border border-gray-300 rounded-lg shadow-sm"
                                    />
                                    <div className="flex-grow">
                                        <div className="text-lg font-semibold">
                                            {item.name} - PKR {item.price}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            x {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-4 sm:mt-0">
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="w-10 h-10 px-2 py-1 text-white transition duration-300 bg-black rounded-lg shadow-sm hover:bg-gray-800"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="w-10 h-10 px-2 py-1 text-white transition duration-300 bg-yellow-600 rounded-lg shadow-sm hover:bg-yellow-600"
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="px-2 py-1 text-white transition duration-300 bg-red-700 rounded-lg shadow-sm hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="mt-2 text-lg font-semibold sm:mt-0">
                                        PKR {item.price * item.quantity}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 text-right">
                            <h2 className="text-xl font-bold sm:text-2xl">
                                Total: PKR {total}
                            </h2>
                        </div>
                        <button
                            className="px-4 py-2 mt-4 text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-600"
                        >
                            Confirm Order
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

Checkout.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            img: PropTypes.string,
        })
    ).isRequired,
    setCart: PropTypes.func.isRequired,
};

export default Checkout;
