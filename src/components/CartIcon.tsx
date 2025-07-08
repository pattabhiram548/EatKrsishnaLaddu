import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      className="relative p-2 rounded-full hover:bg-orange-100 transition-colors duration-200"
      onClick={() => navigate('/cart')}
      aria-label="View cart"
    >
      <ShoppingCart className="h-6 w-6 text-orange-600" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon; 