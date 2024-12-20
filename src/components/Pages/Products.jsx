import PropTypes from 'prop-types';
import { useState } from "react";

import Img from "../../assets/espre.png";
import Img4 from "../../assets/espre4.png";
import Footer from '../Footer/Footer';


const Products = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedProducts, setAddedProducts] = useState(new Set());

  // Categories
  const categories = [
    { id: "all", name: "All" },
    { id: "espresso", name: "Espresso" },
    { id: "americano", name: "Americano" },
    { id: "cappuccino", name: "Cappuccino" },
    { id: "cold-coffee", name: "Cold Coffee" },
  ];

  // Products
  const products = {
    all: [
      { id: 1, name: "Espresso", img: Img, price: 250 },
      { id: 2, name: "Americano", img: Img4, price: 350 },
      { id: 3, name: "Cappuccino", img: Img, price: 400 },
      { id: 4, name: "Cold Coffee", img: Img4, price: 850 },
      { id: 5, name: "Ice-cream Coffee", img: Img, price: 1100 },
      { id: 6, name: "Milk Cold Coffee", img:Img4, price: 700 },
      { id: 7, name: "Black Coffee", img: Img, price: 300 },
      { id: 8, name: "Latte", img: Img4, price: 400 },
    ],
    espresso: [
      { id: 1, name: "Espresso", img: Img, price: 250 },
      { id: 8, name: "Latte", img: Img4, price: 400 },
    ],
    americano: [
      { id: 2, name: "Americano", img: Img4, price: 350 },
      { id: 7, name: "Black Coffee", img: Img, price: 300 },
    ],
    cappuccino: [
      { id: 3, name: "Cappuccino", img: Img4, price: 400 },
    ],
    "cold-coffee": [
      { id: 4, name: "Cold Coffee", img: Img, price: 850 },
      { id: 5, name: "Ice-cream Coffee", img: Img4, price: 1100 },
      { id: 6, name: "Milk Cold Coffee", img: Img, price: 700 },
    ],
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Add product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If product already exists in the cart, increase its quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Otherwise, add the new product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setAddedProducts(prev => new Set(prev).add(product.id));
  };

  // Get the products for the selected category
  const currentProducts = products[selectedCategory] || [];

  return (
    <div className="min-h-screen py-10 overflow-hidden bg-black">
           <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Categories Section */}
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`py-2 px-4 rounded-full text-sm sm:text-base transition duration-300 ease-in-out ${
                  selectedCategory === category.id
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "bg-white text-black hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-20 text-center">
          <h1 className="text-2xl font-bold text-yellow-200 sm:text-3xl md:text-4xl">
            {categories.find(cat => cat.id === selectedCategory)?.name || "Products"}
          </h1>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 place-items-center">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="relative max-w-xs text-black transition duration-300 ease-in-out transform bg-white shadow-lg rounded-2xl hover:bg-yellow-100 group md:max-w-sm hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-48 md:h-56">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-lg font-bold sm:text-xl">{product.name}</h1>
                  <p className="text-sm font-bold text-gray-700">LKR {Math.floor(product.price)}</p>

                  <button
                    onClick={() => addToCart(product)}
                    className={`mt-4 py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out ${
                      addedProducts.has(product.id)
                        ? "bg-green-500 text-white shadow-md hover:bg-green-600"
                        : "bg-yellow-600 text-white shadow-md hover:bg-black"
                    }`}
                  >
                    {addedProducts.has(product.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available in this category.</p>
          )}
        </div>
      </div>
       {/* Footer Section */}
       <div className="mt-28 h-[260px]">
        <Footer />
      </div>

    </div>
  );
};

// Prop types validation
Products.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number, 
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};


export default Products;
