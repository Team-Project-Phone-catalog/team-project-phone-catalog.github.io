import { useState, useEffect, useRef } from 'react';
import './RatingsWidget.scss';
import { Stars } from './Stars/Stars';
import { DropDown } from './DropDown/DropDown';
import { ReviewsPage } from './ReviewsPage/ReviewsPage';

interface Rating {
  label: string;
  pct: number;
}

const TOTAL_REVIEWS = 20;
const AVG_SCORE = 4.45;

const ratings: Rating[] = [
  { label: '5 star', pct: 70 },
  { label: '4 star', pct: 15 },
  { label: '3 star', pct: 10 },
  { label: '2 star', pct: 0 },
  { label: '1 star', pct: 5 },
];

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
      <span className="ratings-widget__score">{AVG_SCORE}</span>
      <button
        className="ratings-widget__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <Stars score={AVG_SCORE} />
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
      <span className="ratings-widget__count">{TOTAL_REVIEWS}</span>
      <DropDown
        open={open}
        ratings={ratings}
        onSeeAll={() => {
          setOpen(false);
          setShowReviews(true);
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
