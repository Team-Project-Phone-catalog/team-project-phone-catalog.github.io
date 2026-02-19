import { Link } from 'react-router-dom';
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

  const productId = 'itemId' in product ? product.itemId : product.id;

  const idString = String(productId).toLowerCase();

  let category = 'phones';

  if (idString.includes('ipad')) {
    category = 'tablets';
  } else if (idString.includes('watch')) {
    category = 'accessories';
  } else if ('category' in product && product.category) {
    category = product.category as string;
  }

  const linkTo = `/${category}/${productId}`;

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
        <Link
          to={linkTo}
          className="card__link"
        >
          <img
            src={imageUrl}
            alt={product.name}
            className={s.image}
          />
        </Link>
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
