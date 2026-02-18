import { CartItem } from '../../../types/Cart';
import { ProductDetails } from '../../../types/Product';
import s from './CartProduct.module.scss';

interface Props {
  product: CartItem | ProductDetails;
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
  const imagePath = 'images' in product ? product.images[0] : product.image;
  const imageUrl = `/${imagePath}`;

  const currentPrice =
    product.priceDiscount ?? ('price' in product ? product.price : undefined);

  const fullPrice =
    product.priceRegular ??
    ('fullPrice' in product ? product.fullPrice : undefined);

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
          alt={product.name}
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
          <span className={s.count}>
            {'quantity' in product ? product.quantity : 1}
          </span>
          <button
            className={s.btnPlus}
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <p className={s.price}>${currentPrice || fullPrice}</p>
      </div>
    </div>
  );
};
