import { useState, useEffect, useRef } from 'react';
import './RatingsWidget.scss';
import { Stars } from './Stars/Stars';
import { DropDown } from './DropDown/DropDown';
import { ReviewsPage } from './ReviewsPage/ReviewsPage';

export const RatingsWidget = () => {
  const [open, setOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (showReviews) return <ReviewsPage onBack={() => setShowReviews(false)} />;

  return (
    <div
      ref={wrapRef}
      className="ratings-widget"
    >
      <span className="ratings-widget__score">4.7</span>
      <button
        className="ratings-widget__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <Stars score={4.7} />
        <svg
          className={`ratings-widget__chevron${open ? ' ratings-widget__chevron--open' : ''}`}
          width={14}
          height={14}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className="ratings-widget__count">26 634</span>
      <DropDown
        open={open}
        onSeeAll={() => {
          setOpen(false);
          setShowReviews(true);
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
