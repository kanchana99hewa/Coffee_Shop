import PropTypes from 'prop-types';
import { useState } from "react";
import Banklogo from "../../assets/meezan.png";
import Nayapay from "../../assets/nayapay.png";

const Checkout = ({ cart, setCart }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const orderDetails = `
*Order Details:*
${cart.map((item) => `- ${item.name}: PKR ${item.price} (x${item.quantity})\n`).join("")}
*Total:* PKR ${total}

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Payment Method: ${formData.paymentMethod}
        `;

        const additionalMessage =
            formData.paymentMethod === "Bank Transfer"
                ? "\n\nPlease attach the screenshot of your payment in the WhatsApp message."
                : "";

        const encodedOrder = encodeURIComponent(orderDetails.trim() + additionalMessage);
        const whatsappUrl = `https://wa.me/923253508178?text=${encodedOrder}`;

        window.open(whatsappUrl, "_blank");
        setSuccessMessage("Order placed successfully! Thank you for your purchase.");
        setCart([]);
        setFormData({ name: "", phone: "", address: "", paymentMethod: "" });
        setShowForm(false);
    };

    const handleConfirmOrder = () => {
        if (cart.length === 0) {
            setErrorMessage("Your cart is empty. Please add items to your cart before confirming the order.");
        } else {
            setErrorMessage("");
            setShowForm(true);
        }
    };

    return (
        <div className="container px-4 py-10 sm:px-6 lg:px-8">
            {successMessage && (
                <div className="p-4 mb-6 text-center text-green-700 bg-green-100 rounded">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="p-4 mb-6 text-center text-red-700 bg-red-100 rounded">
                    {errorMessage}
                </div>
            )}
            {showForm ? (
                <form
                    onSubmit={handleFormSubmit}
                    className="max-w-lg p-6 mx-auto mb-10 bg-white rounded-lg shadow-lg sm:p-8"
                >
                    <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
                        Customer Information
                    </h2>
                    {/* Add your form fields here */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your Name"
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Your Phone"
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        placeholder="Your Address"
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleFormChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Nayapay">Nayapay</option>
                    </select>
                    <button
                        type="submit"
                        className="px-6 py-3 mt-6 text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
                    >
                        Submit Order
                    </button>
                </form>
            ) : (
                <div className="max-w-3xl p-6 mx-auto mb-10 bg-white rounded-lg shadow-lg sm:p-8">
                    <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
                        Your Cart
                    </h2>
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
                        // Cart items rendering...
                        cart.map(item => (
                            <div key={item.id} className="flex justify-between p-4 border-b">
                                <span>{item.name} (x{item.quantity})</span>
                                <div>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="mt-4 text-lg font-bold">
                        Total: PKR {total}
                    </div>
                    <button
                        onClick={handleConfirmOrder}
                        className="px-6 py-3 mt-6 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Confirm Order
                    </button>
                </div>
            )}
        </div>
    );
};

// Prop types validation
Checkout.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            img: PropTypes.string, // Assuming there's an img property
        })
    ).isRequired,
    setCart: PropTypes.func.isRequired,
};

export default Checkout;
