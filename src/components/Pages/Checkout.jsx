import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Banklogo from "../../assets/coffee2.png";
import Nayapay from "../../assets/coffee2.png";

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
                    <div className="mb-4">
                        <label className="block mb-2 text-base font-medium sm:text-lg">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-base font-medium sm:text-lg">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-base font-medium sm:text-lg">
                            Address
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleFormChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-base font-medium sm:text-lg">
                            Payment Method
                        </label>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    onChange={handleFormChange}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                    required
                                />
                                Cash on Delivery
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Bank Transfer"
                                    onChange={handleFormChange}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                    required
                                />
                                Bank Transfer
                            </label>
                        </div>
                    </div>
                    {formData.paymentMethod === "Bank Transfer" && (
                        <div className="p-4 mb-4 border border-gray-300 rounded-lg bg-gray-50">
                            <h3 className="mb-4 text-lg font-semibold">Bank Details</h3>
                            <p className="pb-5 text-md">
                                Send Screenshot of Payment in WhatsApp Chat.
                            </p>
                            <div className="space-y-4 md:space-y-6">
                                <div className="p-4 bg-white border rounded shadow-sm">
                                    <div className="flex flex-col items-center md:flex-row md:space-x-4">
                                        <img
                                            src={Banklogo}
                                            alt="Bank Logo"
                                            className="object-cover w-16 h-16 mb-4 md:mb-0"
                                        />
                                        <div className="text-center md:text-left">
                                            <p className="font-semibold">Bank: Meezan Bank Limited</p>
                                            <p>Account Name: MUHAMMAD ARSALAN AFTAB</p>
                                            <p>Account Number: 01310107190082</p>
                                            <p>IBAN: PK20MEZN0001310107190082</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border rounded shadow-sm">
                                    <div className="flex flex-col items-center md:flex-row md:space-x-4">
                                        <img
                                            src={Nayapay}
                                            alt="EasyPaisa Logo"
                                            className="object-cover w-16 h-16 mb-4 md:mb-0"
                                        />
                                        <div className="text-center md:text-left">
                                            <p className="font-semibold">Bank: NAYA PAY</p>
                                            <p>Account Name: MUHAMMAD ARSALAN AFTAB</p>
                                            <p>Account Number: 0325-3508178</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
                        <>
                            <ul className="divide-y divide-gray-200">
                                {cart.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center"
                                    >
                                        <img
                                            src={item.img} // Assuming img property exists in cart items
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
                                                className="px-2 py-1 text-white transition duration-300 bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="px-2 py-1 text-white transition duration-300 bg-yellow-500 rounded-lg shadow-sm hover:bg-yellow-600"
                                            >
                                                -
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="px-2 py-1 text-white transition duration-300 bg-red-500 rounded-lg shadow-sm hover:bg-red-600"
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
                                onClick={handleConfirmOrder}
                                className="px-4 py-2 mt-4 text-white transition duration-300 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
                            >
                                Confirm Order
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

// Define PropTypes for the component
Checkout.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            img: PropTypes.string, // Optional, in case not all items have an image
        })
    ).isRequired,
    setCart: PropTypes.func.isRequired,
};

export default Checkout;
