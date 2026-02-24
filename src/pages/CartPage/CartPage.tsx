import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './CartPage.module.scss';
import { CartItem } from '@components/cart/CartItem/CartItem';
import { CartProduct } from '@components/cart/CartProduct/CartProduct';
import { BackButton } from '@components/ui/Buttons/Back/BackButton';
import { useAppContext } from '@hooks/useAppContext';
import { CheckoutModal } from '@components/common/CheckoutModal';
import cartZeroImg from '@assets/cart-zero.png';

export const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useAppContext();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className={s.cart}>
      <BackButton />

      <div className={s.title}>
        <h1>Cart</h1>
      </div>

      {cartItems.length === 0 ?
        <div className={s.emptyCart}>
          <div className={s.imgWrapper}>
            <img
              className={s.img}
              src={cartZeroImg}
              alt="Empty Cart"
            />
          </div>

          <p>Your cart is empty</p>

          <Link
            to="/"
            className={s.addToCart}
          >
            Shop now
          </Link>
        </div>
      : <div className={s.cartContent}>
          <div className={s.products}>
            {cartItems.map((item) => (
              <CartProduct
                key={item.itemUniqueId}
                product={item}
                onRemove={() => removeFromCart(item.itemUniqueId)}
                onIncrease={() =>
                  updateQuantity(item.itemUniqueId, item.quantity + 1)
                }
                onDecrease={() =>
                  updateQuantity(item.itemUniqueId, item.quantity - 1)
                }
              />
            ))}
          </div>

          <div className={s.summary}>
            <CartItem
              totalPrice={getTotalPrice()}
              totalItems={getTotalItems()}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      }

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};
