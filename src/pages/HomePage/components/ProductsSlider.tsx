import React, { useEffect, useRef, useState } from 'react';
import { Product } from '../../../types/Product';
import { ProductCard } from '../../ProductCard';
import styles from '../HomePage.module.scss';

interface Props {
  title: string;
  products: Product[];
}

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false,
  });
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setScrollState({
        isAtStart: scrollLeft <= 0,
        isAtEnd: scrollLeft + clientWidth >= scrollWidth - 1,
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('article');
      const scrollAmount = (card?.offsetWidth || 272) + 16;

      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', updateScrollState);
      updateScrollState();
      return () => slider.removeEventListener('scroll', updateScrollState);
    }
  }, [products]);

  return (
    <section className={styles.section}>
      <div className={styles['section__header']}>
        <h2 className={styles['section__title']}>{title}</h2>
        <div className={styles['section__arrows']}>
          <button
            className={`${styles['arrow-btn']} ${styles['arrow-btn--prev']}`}
            onClick={() => scroll('left')}
            disabled={scrollState.isAtStart}
          />
          <button
            className={`${styles['arrow-btn']} ${styles['arrow-btn--next']}`}
            onClick={() => scroll('right')}
            disabled={scrollState.isAtEnd}
          />
        </div>
      </div>

      <div
        className={styles['products-slider']}
        ref={sliderRef}
      >
        <div className={styles['products-slider__track']}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
