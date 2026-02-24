import { BarRow } from '@components/product/Reviews/BarRow/BarRow';
import './DropDown.scss';

interface Rating {
  label: string;
  pct: number;
}

export const DropDown = ({
  ratings,
  open,
  onSeeAll,
  onClose,
}: {
  ratings: Rating[];
  open: boolean;
  onSeeAll: () => void;
  onClose: () => void;
}) => {
  return (
    <div className={`dropdown${open ? ' dropdown--open' : ''}`}>
      <div className="dropdown__header">
        <p className="dropdown__title">% of reviews by stars</p>
        <button
          className="dropdown__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {ratings.map((r) => (
        <BarRow
          key={r.label}
          label={r.label}
          pct={r.pct}
          animate={open}
          onClick={onSeeAll}
        />
      ))}

      <div className="dropdown__divider" />
      <a
        href="#"
        className="dropdown__link"
        onClick={(e) => {
          e.preventDefault();
          onSeeAll();
        }}
      >
        See all customer reviews
      </a>
    </div>
  );
};
