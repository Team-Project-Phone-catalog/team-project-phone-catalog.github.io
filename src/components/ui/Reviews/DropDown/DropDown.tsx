import { BarRow } from '../BarRow/BarRow';
import './DropDown.scss';

interface Rating {
  label: string;
  pct: number;
}

const ratings: Rating[] = [
  { label: '5 star', pct: 70 }, // 14/20
  { label: '4 star', pct: 15 }, // 3/20
  { label: '3 star', pct: 10 }, // 2/20
  { label: '2 star', pct: 0 }, // 0/20
  { label: '1 star', pct: 5 }, // 1/20
];

export const DropDown = ({
  open,
  onSeeAll,
  onClose,
}: {
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
          animate={open} // просто передаем open напрямую
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
