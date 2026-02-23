import { useState } from 'react';
import './WriteReview.scss';

export const WriteReview = ({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: (data: {
    name: string;
    score: number;
    title: string;
    body: string;
  }) => Promise<boolean>;
}) => {
  const [starScore, setStarScore] = useState(0);
  const [hoverScore, setHoverScore] = useState(0);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const starLabels = [
    '',
    'I hate it',
    "I don't like it",
    "It's OK",
    'I like it',
    'I love it',
  ];

  const canSubmit =
    starScore > 0 &&
    name.trim().length > 0 &&
    title.trim().length > 0 &&
    body.length >= 20;

  async function handleSubmit() {
    if (!canSubmit) return;
    setLoading(true);
    const ok = await onSubmit({ name, score: starScore, title, body });
    setLoading(false);
    if (ok) setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="write-review">
        <div className="write-review__inner">
          <div className="write-review__success">
            <div className="write-review__success-icon">✅</div>
            <h2 className="write-review__success-title">
              Thank you for your review!
            </h2>
            <p className="write-review__success-sub">
              Your review has been submitted and will appear shortly after
              moderation.
            </p>
            <button
              className="write-review__cancel"
              onClick={onBack}
            >
              ← Back to reviews
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="write-review">
      <div className="write-review__inner">
        <div className="write-review__header">
          <h1 className="write-review__title">Create Review</h1>
          <button
            className="write-review__back"
            onClick={onBack}
          >
            ← Back
          </button>
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">Your name</div>
          <input
            className="write-review__input"
            type="text"
            placeholder="e.g. John D."
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
          />
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">Overall rating</div>
          <div className="star-picker">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`star-picker__star${(hoverScore || starScore) >= n ? ' star-picker__star--active' : ''}`}
                onMouseEnter={() => setHoverScore(n)}
                onMouseLeave={() => setHoverScore(0)}
                onTouchStart={() => setStarScore(n)}
                onClick={() => setStarScore(n)}
              >
                ★
              </button>
            ))}
          </div>
          {(hoverScore || starScore) > 0 && (
            <div style={{ fontSize: 13, color: '#75767f', marginTop: 6 }}>
              {starLabels[hoverScore || starScore]}
            </div>
          )}
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">Add a headline</div>
          <input
            className="write-review__input"
            type="text"
            placeholder="What's most important to know?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={150}
          />
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">
            Add a written review
          </div>
          <textarea
            className="write-review__textarea"
            placeholder="What did you like or dislike? What did you use this product for?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="write-review__hint">
            Minimum 20 characters ({body.length} / 20)
          </div>
        </div>

        <div className="write-review__actions">
          <button
            className="write-review__submit"
            onClick={handleSubmit}
            disabled={!canSubmit || loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          <button
            className="write-review__cancel"
            onClick={onBack}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
