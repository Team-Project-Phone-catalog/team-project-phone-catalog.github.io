import React from 'react';
import { useParams } from 'react-router-dom';
import { ColorLink } from '../../ColorMap/ColorLink.tsx';
import './ProductOptions.scss';

type Props = {
  itemId: string;
  namespaceId: string;
  colorsAvailable: string[];
  currentColor: string;
  capacityAvailable: string[];
  currentCapacity: string;
  onCapacityChange: (newItemId: string) => void;
};

export const ProductOptions: React.FC<Props> = ({
  namespaceId,
  colorsAvailable,
  currentColor,
  capacityAvailable,
  currentCapacity,
  onCapacityChange,
}) => {
  const { category } = useParams<{ category: string }>();

  const buildItemId = (capacity: string, color: string) => {
    const formattedCapacity = capacity.toLowerCase().replace(/\s+/g, '-');
    const formattedColor = color.toLowerCase().replace(/\s+/g, '-');
    return `${namespaceId}-${formattedCapacity}-${formattedColor}`;
  };

  return (
    <div className="product-options">
      <div className="product-options__title">Available colors</div>

      <div className="product-options__colors">
        <ul className="product-options__list">
          {colorsAvailable.map((clr) => {
            const newItemId = buildItemId(currentCapacity, clr);
            const targetLocation = `/${category}/${newItemId}`;
            const normalizedColor = clr.toLowerCase().replace(/\s+/g, '');

            return (
              <li
                key={clr}
                className="product-options__item"
              >
                <ColorLink
                  to={targetLocation}
                  color={normalizedColor}
                  selected={currentColor === clr}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="product-options__title--capacity">Select capacity</div>

      <div className="product-options__ram">
        {capacityAvailable.map((cap) => (
          <button
            key={cap}
            type="button"
            className={`product-options__ram-item ${
              currentCapacity === cap ? 'product-options__ram-item--active' : ''
            }`}
            onClick={() => onCapacityChange(buildItemId(cap, currentColor))}
          >
            {cap}
          </button>
        ))}
      </div>
    </div>
  );
};
