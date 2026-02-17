import './ProductOptions.scss';
import {useNavigate, useParams} from 'react-router-dom';

interface Props {
    itemId: string;
    namespaceId: string;
    colorsAvailable: string[];
    currentColor: string;
    capacityAvailable: string[];
    currentCapacity: string;
}

export const ProductOptions: React.FC<Props> = ({
                                                    namespaceId,
                                                    colorsAvailable,
                                                    currentColor,
                                                    capacityAvailable,
                                                    currentCapacity,
                                                }) => {
    const navigate = useNavigate();
    const {category} = useParams<{ category: string }>();

    const buildItemId = (capacity: string, color: string) => {
        const formattedCapacity = capacity.toLowerCase().replace(/\s+/g, '-');
        const formattedColor = color.toLowerCase().replace(/\s+/g, '-');

        return `${namespaceId}-${formattedCapacity}-${formattedColor}`;
    };

    const handleColorChange = (newColor: string) => {
        const newItemId = buildItemId(currentCapacity, newColor);
        navigate(`/${category}/${newItemId}`);
    };

    const handleCapacityChange = (newCapacity: string) => {
        const newItemId = buildItemId(newCapacity, currentColor);
        navigate(`/${category}/${newItemId}`);
    };

    return (
        <div className="product-options">
            <div className="product-options__title">Available colors</div>

            <div className="product-options__colors">
                {colorsAvailable.map((clr) => (
                    <button
                        key={clr}
                        className={`product-options__color-item ${currentColor === clr ? 'product-options__color-item--active' : ''}`}
                        onClick={() => handleColorChange(clr)}
                    >
            <span
                className="product-options__color"
                style={{backgroundColor: clr}}
            />
                    </button>
                ))}
            </div>

            <div className="product-options__title--capacity">Select capacity</div>

            <div className="product-options__ram">
                {capacityAvailable.map((cap) => (
                    <button
                        key={cap}
                        className={`product-options__ram-item ${currentCapacity === cap ? 'product-options__ram-item--active' : ''}`}
                        onClick={() => handleCapacityChange(cap)}
                    >
                        {cap}
                    </button>
                ))}
            </div>
        </div>
    );
};