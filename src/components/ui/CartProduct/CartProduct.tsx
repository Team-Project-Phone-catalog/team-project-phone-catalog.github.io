import { CartItem } from '../../../types/Cart';
import s from './CartProduct.module.scss';

interface Props {
  product: CartItem;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const CartProduct: React.FC<Props> = ({
  product,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  const imageUrl = product.images;

  return (
    <div className={s.item}>
      <button
        className={s.remove}
        type="button"
        onClick={onRemove}
      >
        x
      </button>

      <div className={s.imageWrapper}>
        <img
          src={imageUrl}
          alt="Apple iPhone 14 Pro"
          className={s.image}
        />
      </div>

      <div className={s.details}>
        <h3 className={s.name}>{product.name}</h3>
      </div>

      <div className={s.controls}>
        <div className={s.quantity}>
          <button
            className={s.btnMinus}
            onClick={onDecrease}
          >
            -
          </button>
          <span className={s.count}>{product.quantity}</span>
          <button
            className={s.btnPlus}
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <p className={s.price}>${product.priceDiscount}</p>
      </div>
    </div>
  );
};
