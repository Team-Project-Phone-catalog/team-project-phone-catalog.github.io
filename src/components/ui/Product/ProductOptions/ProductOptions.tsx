import { useState } from 'react';
import './ProductOptions.scss';

export const ProductOptions = () => {
  const color = ['gold', 'blue', 'grey'];
  const phone_ram = ['64 GB', '128 GB', '256 GB'];
  const [activeColor, setActiveColor] = useState(color[0]);
  const [activePhoneRam, setActivePhoneRam] = useState(phone_ram[0]);

  return (
    <div className="product-options">
      <div className="product-options__title">Available colors</div>

      <div className="product-options__colors">
        {color.map((clr, index) => (
          <a
            key={index}
            href={`/${clr}`}
            className={`product-options__color-item ${activeColor === clr ? 'product-options__color-item--active' : ''}`}
            onClick={() => setActiveColor(clr)}
          >
            <span
              className="product-options__color"
              style={{ backgroundColor: clr }}
            ></span>
          </a>
        ))}
      </div>

      <div className="product-options__title--capacity">Select capacity</div>

      <div className="product-options__ram">
        {phone_ram.map((ram, index) => (
          <a
            key={index}
            href={`/${ram}`}
            className={`product-options__ram-item ${activePhoneRam === ram ? 'product-options__ram-item--active' : ''}`}
            onClick={() => setActivePhoneRam(ram)}
          >
            {ram}
          </a>
        ))}
      </div>
    </div>
  );
};
