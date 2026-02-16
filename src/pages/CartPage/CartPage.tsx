import s from './CartPage.module.scss';
import { CartItem } from '../../components/ui/CartItem/CartItem.tsx';
import { CartProduct } from '../../components/ui/CartProduct/CartProduct.tsx';
import { BackButton } from '../../components/ui/Buttons/Back/BackButton.tsx';

export const CartPage = () => {
  return (
    <div className={s.cart}>
      <BackButton />

      <div className={s.title}>
        <h1>Cart</h1>
      </div>

      <div className={s.cartContent}>
        <div className={s.products}>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>

        <div className={s.summary}>
          <CartItem />
        </div>
      </div>
    </div>
  );
};
