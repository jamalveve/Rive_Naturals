import React, { useState } from 'react';
import { useCart } from '../components/CartContext'; // Adjust path if needed

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, fetchCart } = useCart(); // Access shared cart

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleRemoveItem = async (cartItemId) => {
    try {
      await fetch(`http://localhost:8080/api/carts/${cartItemId}`, {
        method: "DELETE",
      });
      fetchCart();
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await fetch(`http://localhost:8080/api/carts/${cartItemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      fetchCart();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Cart Icon */}
      <button
        onClick={toggleCart}
        className="relative p-2 rounded-full hover:bg-[#e6eee6] transition"
        aria-label="Open cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-[#4c6b5a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13L17 13M7 13h10M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="p-4 border-b relative">
          <h2 className="text-lg font-semibold text-[#5f7c6e]">
            Your Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={toggleCart}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="p-4 overflow-y-auto h-[calc(100vh-170px)]">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center mb-6 border-b pb-4 last:border-b-0"
              >
                <img
                  src={`http://localhost:8080${item.image_path}`}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4 border"
                />
                <div className="flex-1">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-gray-500 text-sm">
                    {item.description || ''}
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center border rounded-full px-3 py-1 mr-3 bg-white shadow-sm">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="text-xl text-green-700 px-2"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="text-xl text-green-700 px-2"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 text-xl"
                      title="Remove"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4 text-right min-w-[90px]">
                  {item.original_price && item.original_price > item.price ? (
                    <div>
                      <span className="line-through text-gray-400 mr-1">
                        ₹{item.original_price}
                      </span>
                      <span className="font-bold text-[#5f7c6e]">
                        ₹{item.price}
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold text-[#5f7c6e]">
                      ₹{item.price}
                    </span>
                  )}
                  <div className="text-xs text-gray-500">
                    {item.coupon_code && `with ${item.coupon_code}`}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button className="bg-[#5f7c6e] text-white px-4 py-2 rounded w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
