import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <main className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero__title">Welcome to Nice Gadgets store!</h1>

          <div className="hero__slider">
            <button className="hero__arrow hero__arrow--left">
              <img
                src="/img/arrow-left.svg"
                alt="Previous"
              />
            </button>

            <div className="hero__banner">
              <img
                src="/img/banner-phones.png"
                alt="iPhone 14 Pro - Now available in our store"
                className="hero__banner-image"
              />
            </div>

            <button className="hero__arrow hero__arrow--right">
              <img
                src="/img/arrow-right.svg"
                alt="Next"
              />
            </button>
          </div>

          <div className="hero__dots">
            <span className="hero__dot hero__dot--active"></span>
            <span className="hero__dot"></span>
            <span className="hero__dot"></span>
          </div>
        </section>

        {/* Brand New Models */}
        <section className="section">
          <div className="section__header">
            <h2 className="section__title">Brand new models</h2>
            <div className="section__arrows">
              <button className="arrow-btn arrow-btn--prev">
                <img
                  src="/img/arrow-left.svg"
                  alt="Previous"
                />
              </button>
              <button className="arrow-btn arrow-btn--next">
                <img
                  src="/img/arrow-right.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>

          <div className="products-slider">
            <div className="products-slider__track">
              {/* Product 1 */}
              <article className="product-card">
                <img
                  src="/img/iphone-14-silver.png"
                  alt="iPhone 14 Pro Silver"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 14 Pro 128GB Silver (MQ023)
                </h3>

                <p className="product-card__price">$999</p>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.1" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">128 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">6 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Product 2 */}
              <article className="product-card">
                <img
                  src="/img/iphone-14-purple.png"
                  alt="iPhone 14 Pro Purple"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
                </h3>

                <p className="product-card__price">$999</p>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.1" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">128 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">6 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Product 3 */}
              <article className="product-card">
                <img
                  src="/img/iphone-14-gold.png"
                  alt="iPhone 14 Pro Gold"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 14 Pro 128GB Gold (MQ083)
                </h3>

                <p className="product-card__price">$999</p>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.1" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">128 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">6 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Product 4 */}
              <article className="product-card">
                <img
                  src="/img/iphone-14-red.png"
                  alt="iPhone 14 Plus Red"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 14 Plus 128GB PRODUCT Red (MQS13)
                </h3>

                <p className="product-card__price">$859</p>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.7" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">128 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">6 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="section">
          <h2 className="section__title">Shop by category</h2>

          <div className="categories">
            <article className="category-card">
              <div className="category-card__image category-card__image--phones">
                <img
                  src="/img/category-phones.png"
                  alt="Mobile phones"
                />
              </div>
              <h3 className="category-card__title">Mobile phones</h3>
              <p className="category-card__count">95 models</p>
            </article>

            <article className="category-card">
              <div className="category-card__image category-card__image--tablets">
                <img
                  src="/img/category-tablets.png"
                  alt="Tablets"
                />
              </div>
              <h3 className="category-card__title">Tablets</h3>
              <p className="category-card__count">24 models</p>
            </article>

            <article className="category-card">
              <div className="category-card__image category-card__image--accessories">
                <img
                  src="/img/category-accessories.png"
                  alt="Accessories"
                />
              </div>
              <h3 className="category-card__title">Accessories</h3>
              <p className="category-card__count">100 models</p>
            </article>
          </div>
        </section>

        {/* Hot Prices */}
        <section className="section">
          <div className="section__header">
            <h2 className="section__title">Hot prices</h2>
            <div className="section__arrows">
              <button className="arrow-btn arrow-btn--prev">
                <img
                  src="/img/arrow-left.svg"
                  alt="Previous"
                />
              </button>
              <button className="arrow-btn arrow-btn--next">
                <img
                  src="/img/arrow-right.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>

          <div className="products-slider">
            <div className="products-slider__track">
              {/* Hot Product 1 */}
              <article className="product-card">
                <img
                  src="/img/iphone-11-green.png"
                  alt="iPhone 11 Pro Max"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 11 Pro Max 512GB Midnight Green (iMYG2FS/A)
                </h3>

                <div className="product-card__prices">
                  <span className="product-card__price">$849</span>
                  <span className="product-card__price--old">$1199</span>
                </div>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.5" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">512 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">4 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Hot Product 2 */}
              <article className="product-card">
                <img
                  src="/img/iphone-11-gold.png"
                  alt="iPhone 11 Pro Max"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
                </h3>

                <div className="product-card__prices">
                  <span className="product-card__price">$799</span>
                  <span className="product-card__price--old">$999</span>
                </div>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.5" OLED'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">64 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">4 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Hot Product 3 */}
              <article className="product-card">
                <img
                  src="/img/iphone-11-purple.png"
                  alt="iPhone 11"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 11 256GB Purple (iMT9G2FS/A)
                </h3>

                <div className="product-card__prices">
                  <span className="product-card__price">$729</span>
                  <span className="product-card__price--old">$859</span>
                </div>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.2" IPS'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">256 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">4 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>

              {/* Hot Product 4 */}
              <article className="product-card">
                <img
                  src="/img/iphone-11-red.png"
                  alt="iPhone 11"
                  className="product-card__image"
                />

                <h3 className="product-card__title">
                  Apple iPhone 11 128GB (Product) Red (iMT9G2FS/A)
                </h3>

                <div className="product-card__prices">
                  <span className="product-card__price">$699</span>
                  <span className="product-card__price--old">$800</span>
                </div>

                <div className="product-card__divider"></div>

                <div className="product-card__specs">
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Screen</span>
                    <span className="product-card__spec-value">
                      {'6.2" IPS'}
                    </span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">Capacity</span>
                    <span className="product-card__spec-value">128 GB</span>
                  </div>
                  <div className="product-card__spec">
                    <span className="product-card__spec-label">RAM</span>
                    <span className="product-card__spec-value">4 GB</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--cart">
                    Add to cart
                  </button>
                  <button className="product-card__btn product-card__btn--fav">
                    <img
                      src="/img/heart.svg"
                      alt="Add to favorites"
                    />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
