import s from './CartProduct.module.scss';

export const CartProduct = () => {
  return (
    <div className={s.item}>
      <button
        className={s.remove}
        type="button"
      >
        ×
      </button>

      <div className={s.imageWrapper}>
        <img
          src="/public/img/phones/apple-iphone-14-pro/spaceblack/00.webp"
          alt="Apple iPhone 14 Pro"
          className={s.image}
        />
      </div>

      <div className={s.details}>
        <h3 className={s.name}>Apple iPhone 14 Pro 128GB Silver (MQ023)</h3>

        <div className={s.controls}>
          <div className={s.quantity}>
            <button className={s.countBtn}>-</button>
            <span className={s.count}>1</span>
            <button className={`${s.countBtn} ${s.active}`}>+</button>
          </div>

          <p className={s.price}>$999</p>
        </div>
      </div>
    </div>
  );
};
