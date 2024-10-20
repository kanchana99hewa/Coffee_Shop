import PropTypes from "prop-types";
import { useState } from "react";

const ConfirmOrder = ({ total, cart, setCart }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Basic validation for empty fields
        if (!formData.name || !formData.phone || !formData.address || !formData.paymentMethod) {
            setErrorMessage("Please fill in all the fields.");
            return;
        }

        // Prepare the order details
        const orderDetails = `
*Order Details:*
${cart.map(item => `- ${item.name}: PKR ${item.price} (x${item.quantity})\n`).join("")}
*Total:* PKR ${total}

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Payment Method: ${formData.paymentMethod}
        `;

        // Show additional message if Bank Transfer is selected
        const additionalMessage = formData.paymentMethod === "Bank Transfer"
            ? "\n\nPlease attach the screenshot of your payment in the WhatsApp message."
            : "";

        // Here you would typically send the orderDetails to your backend or API
        console.log(orderDetails + additionalMessage); // For demo purposes

        // Show success message
        setSuccessMessage("Order placed successfully! Thank you for your purchase.");
        
        // Clear cart and form after submission (optional)
        setCart([]);
        setFormData({ name: "", phone: "", address: "", paymentMethod: "" });
        setErrorMessage(""); // Clear any error messages on success
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

            {/* Form for Placing the Order */}
            <form onSubmit={handleFormSubmit} className="max-w-lg p-6 mx-auto mb-10 bg-white rounded-lg shadow-lg sm:p-8">
                <h2 className="mb-6 text-xl font-semibold sm:text-2xl">Customer Information</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Address Input */}
                <div className="mb-4">
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Payment Method Selection */}
                <div className="mb-4">
                    <label className="block mb-2 text-base font-medium text-black sm:text-lg">Payment Method</label>
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

                {/* Submit Button */}
                <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-green-800 rounded-lg shadow-md hover:bg-green-600">
                    Place Order
                </button>
            </form>
        </div>
    );
};

ConfirmOrder.propTypes = {
    total: PropTypes.number.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};

export default ConfirmOrder;
