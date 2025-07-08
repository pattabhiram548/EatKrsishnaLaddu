import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id + item.variant} className="flex items-center bg-white rounded-lg shadow p-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div className="flex-1">
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="text-sm text-gray-500 mb-1">{item.variant}</div>
                <div className="text-sm text-gray-700">Unit Price: Rs. {item.price}</div>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-3 py-1 border rounded text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="ml-4 p-1 border rounded hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
              <div className="text-right font-bold text-xl ml-4">
                Rs. {item.price * item.quantity}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <div className="text-lg font-semibold">Total</div>
            <div className="text-2xl font-bold text-orange-600">Rs. {subtotal}</div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={clearCart}
              className="px-6 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate('/payment-options')}
              className="px-8 py-3 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 