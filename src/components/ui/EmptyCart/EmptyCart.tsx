import { ShoppingCart } from 'lucide-react';
import './EmptyCart.scss';

export default function CartIcon() {
  return (
    <div className="cart-container">
      <ShoppingCart
        className="cart-icon"
        strokeWidth={1}
        fill="none"
      />
    </div>
  );
}
