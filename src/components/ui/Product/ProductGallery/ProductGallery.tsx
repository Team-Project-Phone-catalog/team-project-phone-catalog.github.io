import React, { useState, useEffect } from 'react';
import './ProductGallery.scss';

type Props = {
  images: string[];
  name: string;
};

export const ProductGallery: React.FC<Props> = ({ images, name }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="gallery">
      <div className="gallery__thumbs">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb ${activeImage === img ? 'active' : ''}`}
            onClick={() => setActiveImage(img)}
          >
            <img
              src={`/${img}`}
              alt={`${name} thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="gallery__main">
        <img
          src={`/${activeImage}`}
          alt={name}
        />
      </div>
    </div>
  );
};
