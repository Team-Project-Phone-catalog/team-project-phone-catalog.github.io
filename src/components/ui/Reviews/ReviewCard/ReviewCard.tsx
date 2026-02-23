import { Avatar } from '../Avatar/Avatar';
import { Stars } from '../Stars/Stars';
import './ReviewCard.scss';

interface Review {
  id: number;
  name: string;
  score: number;
  title: string;
  date: string;
  style: string;
  verified: boolean;
  body: string;
}

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="review-card">
      <div className="review-card__author">
        <Avatar name={review.name} />
        <span className="review-card__name">{review.name}</span>
      </div>
      <div className="review-card__title-row">
        <Stars score={review.score} />
        <span className="review-card__title">{review.title}</span>
      </div>
      <p className="review-card__date">{review.date}</p>
      <p className="review-card__meta">
        Style: {review.style}
        {review.verified && (
          <>
            {' '}
            | <span className="review-card__verified">Verified Purchase</span>
          </>
        )}
      </p>
      <p className="review-card__body">{review.body}</p>
    </div>
  );
};
