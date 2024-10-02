import { useState } from 'react';



const coffeeItems = [
  { id: 1, name: 'Espresso', price: 3.5, image: '/assets/espresso.jpg' },
  { id: 2, name: 'Cappuccino', price: 4.0, image: '/assets/cappuccino.jpg' },
  { id: 3, name: 'Latte', price: 4.5, image: '/assets/latte.jpg' },
];

const OrderNow = () => { 
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    items: coffeeItems.map(item => ({ ...item, quantity: 1 }))
  });

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    setOrderDetails({
      ...orderDetails,
      items: orderDetails.items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderDetails);
    alert('Order submitted successfully!');
  };

  return (
    <div className="max-w-2xl p-6 mx-auto bg-yellow-100 rounded-lg shadow-lg">
      <h1 className="mb-8 text-3xl font-bold text-center">Order Now</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Customer Information */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={orderDetails.name}
            onChange={handleInputChange}
            className="p-3 bg-white border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={orderDetails.phone}
            onChange={handleInputChange}
            className="p-3 bg-white border rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className="col-span-2 p-3 bg-white border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={orderDetails.city}
            onChange={handleInputChange}
            className="p-3 bg-white border rounded"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={orderDetails.postalCode}
            onChange={handleInputChange}
            className="p-3 bg-white border rounded"
            required
          />
        </div>

        {/* Coffee Items */}
        <h2 className="mb-4 text-xl font-bold">Select Your Coffee</h2>
        <div className="mb-6 space-y-4">
          {orderDetails.items.map(item => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="object-cover w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}
                  className="px-2 bg-gray-300 rounded"
                >-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border rounded"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-2 bg-gray-300 rounded"
                >+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-3 font-bold text-white bg-yellow-600 rounded-lg">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderNow;
