import PropTypes from "prop-types";

const ConfirmOrder = ({ total }) => {
    const Checkout = ({ cart, setCart }) => {
        const [showForm, setShowForm] = useState(false);
        const [formData, setFormData] = useState({
            name: "",
            phone: "",
            address: "",
            paymentMethod: "",
        });
        const [successMessage, setSuccessMessage] = useState("");
        const [errorMessage, setErrorMessage] = useState(""); // Added state for error messages
    
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
    
            // Prepare the order details
            const orderDetails = `
    *Order Details:*
    ${cart
                    .map((item) => `- ${item.name}: PKR ${item.price} (x${item.quantity})\n`)
                    .join("")}
    *Total:* PKR ${total}
    
    *Customer Details:*
    Name: ${formData.name}
    Phone: ${formData.phone}
    Address: ${formData.address}
    Payment Method: ${formData.paymentMethod}
            `;
    
            // Add instruction to attach screenshot if Bank Transfer is selected
            const additionalMessage =
                formData.paymentMethod === "Bank Transfer"
                    ? "\n\nPlease attach the screenshot of your payment in the WhatsApp message."
                    : "";
    
            // Encode the order details
            const encodedOrder = encodeURIComponent(
                orderDetails.trim() + additionalMessage
            );
    
            // Construct the WhatsApp URL
            const whatsappUrl = `https://wa.me/923253508178?text=${encodedOrder}`;
    
            // Open WhatsApp with the encoded URL
            window.open(whatsappUrl, "_blank");
    
            // Show success message
            setSuccessMessage(
                "Order placed successfully! Thank you for your purchase."
            );
    
            // Clear cart and form after submission (optional)
            setCart([]);
            setFormData({ name: "", phone: "", address: "", paymentMethod: "" });
            setShowForm(false);
        };
    
        const handleConfirmOrder = () => {
            if (cart.length === 0) {
                setErrorMessage(
                    "Your cart is empty. Please add items to your cart before confirming the order."
                );
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
    );
};

ConfirmOrder.propTypes = {
    total: PropTypes.number.isRequired,
};

export default ConfirmOrder;
