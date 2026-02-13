import './ProductCard.scss';

export const ProductCard = () => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__image"
          src="../../img/phones/apple-iphone-14-pro/spaceblack/00.webp"
          alt="iPhone"
          width="208px"
          height="196px"
        />
      </div>

      <h2 className="card__title">Apple iPhone 14 Pro 128GB Silver (MQ023)</h2>

      <p className="card__price">
        <span className="card__price-current">$999</span>
        <span className="card__price-full">$899</span>
      </p>
      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>
          <span className="card__feature-value">6.1” OLED</span>
        </p>
        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>
          <span className="card__feature-value">128 GB</span>
        </p>
        <p className="card__feature">
          <span className="card__feature-name">RAM</span>
          <span className="card__feature-value">6 GB</span>
        </p>
      </div>

      <div className="card__buy">
        <a
          href=""
          className="card__add-to-card"
        >
          Add to cart
        </a>

        <a
          href=""
          className="card__favorites-icon"
        ></a>
      </div>
    </div>
  );
};
