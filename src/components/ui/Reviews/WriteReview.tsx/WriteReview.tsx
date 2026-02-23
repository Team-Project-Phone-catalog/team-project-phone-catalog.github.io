import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './WriteReview.scss';

export const WriteReview = ({ onBack }: { onBack: () => void }) => {
  const { t } = useTranslation();
  const [starScore, setStarScore] = useState(0);
  const [hoverScore, setHoverScore] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const starLabels = t('write_review.star_labels', {
    returnObjects: true,
  }) as string[];

  const canSubmit =
    starScore > 0 && title.trim().length > 0 && body.length >= 20;

  if (submitted)
    return (
      <div className="write-review">
        <div className="write-review__inner">
          <div className="write-review__success">
            <div className="write-review__success-icon">✅</div>
            <h2 className="write-review__success-title">
              {t('write_review.success_title')}
            </h2>
            <p className="write-review__success-sub">
              {t('write_review.success_sub')}
            </p>
            <button
              className="write-review__cancel"
              onClick={onBack}
            >
              ← {t('write_review.back_to')}
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="write-review">
      <div className="write-review__inner">
        <div className="write-review__header">
          <h1 className="write-review__title">{t('write_review.title')}</h1>
          <button
            className="write-review__back"
            onClick={onBack}
          >
            ← {t('write_review.back')}
          </button>
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">
            {t('write_review.overall')}
          </div>
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
          <div className="write-review__section-title">
            {t('write_review.headline')}
          </div>
          <input
            className="write-review__input"
            type="text"
            placeholder={t('write_review.headline_placeholder')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={150}
          />
        </div>

        <div className="write-review__section">
          <div className="write-review__section-title">
            {t('write_review.written')}
          </div>
          <textarea
            className="write-review__textarea"
            placeholder={t('write_review.written_placeholder')}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="write-review__hint">
            {t('write_review.hint')} ({body.length} / 20)
          </div>
        </div>

        <div className="write-review__actions">
          <button
            className="write-review__submit"
            onClick={() => canSubmit && setSubmitted(true)}
            disabled={!canSubmit}
          >
            {t('write_review.submit')}
          </button>
          <button
            className="write-review__cancel"
            onClick={onBack}
          >
            {t('write_review.cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};
