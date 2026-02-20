import { useState, useEffect } from 'react';

interface Review {
  id: number;
  rating: number;
  comment: string;
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('reviews');
    return saved ? JSON.parse(saved) : [];
  });

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating || !comment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      rating,
      comment,
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment('');
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
          }}
        >
          ★
        </span>
      ))}

      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Напишіть відгук"
        />
        <button type="submit">Додати</button>
      </form>

      <hr />

      {reviews.map((review: Review) => (
        <div key={review.id}>
          {'★'.repeat(review.rating)}
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
