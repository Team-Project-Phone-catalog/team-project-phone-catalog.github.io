import { useState } from 'react';
import './ProductGallery.scss';

export const ProductGallery = () => {
  const images = [
    '/img/phones/apple-iphone-12/black/00.webp',
    '/img/phones/apple-iphone-12/black/01.webp',
    '/img/phones/apple-iphone-12/black/02.webp',
    '/img/phones/apple-iphone-12/black/03.webp',
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="gallery">
      <div className="gallery__main">
        <img
          src={activeImage}
          alt="Product"
        />
      </div>

      <div className="gallery__thumbs">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb ${activeImage === img ? 'active' : ''}`}
            onClick={() => setActiveImage(img)}
          >
            <img
              src={img}
              alt="thumb"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
