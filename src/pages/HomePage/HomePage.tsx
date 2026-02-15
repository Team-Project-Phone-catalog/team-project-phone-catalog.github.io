import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <main className="home">
      <div className="container">
        <section className="home__hero hero">
          <div className="hero__content">
            <h1 className="hero__title">Welcome to Nice Gadgets store!</h1>
            <div className="hero__banner">
              <div className="hero__text-side">
                <p className="hero__subtitle">Now available in our store!</p>
                <h2 className="hero__product-name">iPhone 14 Pro</h2>
                <p className="hero__promo">Be the first!</p>
                <button className="hero__button">ORDER NOW</button>
              </div>
              <div className="hero__image-side">
                <img
                  src="/img/iphone-14-pro.png"
                  alt="iPhone 14 Pro"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home__section">
          <div className="home__section-header">
            <h2 className="home__section-title">Brand new models</h2>
            <div className="home__arrows">
              <button className="arrow-btn arrow-btn--left"></button>
              <button className="arrow-btn arrow-btn--right"></button>
            </div>
          </div>

          <div className="home__grid">
            <article className="product-card">
              <img
                src="/img/iphone-14.png"
                alt="iPhone"
                className="product-card__image"
              />
              <h3 className="product-card__title">
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </h3>
              <p className="product-card__price">$999</p>
              <hr className="product-card__divider" />
              <div className="product-card__specs">
                <p>
                  <span>Screen</span> 6.1 OLED
                </p>
                <p>
                  <span>Capacity</span> 128 GB
                </p>
                <p>
                  <span>RAM</span> 6 GB
                </p>
              </div>
              <button className="product-card__button">Add to cart</button>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};
