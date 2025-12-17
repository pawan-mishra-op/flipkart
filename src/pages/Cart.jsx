import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LEFT: CART ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
            <p className="text-gray-600 mb-4">Summary</p>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
       
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-2xl font-semibold mb-4">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
