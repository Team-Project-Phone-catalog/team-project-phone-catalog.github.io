import s from './CartPage.module.scss';
import { CartItem } from '../../components/ui/CartItem/CartItem.tsx';
import { CartProduct } from '../../components/ui/CartProduct/CartProduct.tsx';

export const CartPage = () => {
  return (
    <div className={s.cart}>
      <div className={s.buttonBack}>
        <a
          className={s.buttonBackLink}
          href="#"
        >
          Back
        </a>
      </div>

      <div className={s.title}>
        <h1>Cart</h1>
      </div>

      <CartProduct />

      <CartItem />
    </div>
  );
};
