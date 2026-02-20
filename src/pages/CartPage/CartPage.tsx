import s from './CartPage.module.scss';
import { CartItem } from '../../components/ui/CartItem/CartItem.tsx';
import { CartProduct } from '../../components/ui/CartProduct/CartProduct.tsx';
import { BackButton } from '../../components/ui/Buttons/Back/BackButton.tsx';
import { useAppContext } from '../../hooks/useAppContext.ts';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useAppContext();
  console.log(cartItems);
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
              src="../../img/cart-zero.png"
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
            />
          </div>
        </div>
      }
    </div>
  );
};
