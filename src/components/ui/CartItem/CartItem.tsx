import s from './CartItem.module.scss';

export const CartItem = () => {
  return (
    <div className={s.block}>
      <h2 className={s.price}>$2656</h2>
      <p className={s.info}>Total for 3 items</p>

      <div className={s.button}>
        <button className={s.buttonCheck}>Checkout</button>
      </div>
    </div>
  );
};
