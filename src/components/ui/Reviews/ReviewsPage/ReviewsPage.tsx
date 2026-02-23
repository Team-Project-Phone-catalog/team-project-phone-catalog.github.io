import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WriteReview } from '../WriteReview.tsx/WriteReview';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { Stars } from '../Stars/Stars';
import './ReviewsPage.scss';

interface Rating {
  label: string;
  pct: number;
}

const TOTAL_REVIEWS = 20;
const AVG_SCORE = 4.45;

const ratings: Rating[] = [
  { label: '5 star', pct: 70 }, // 14/20
  { label: '4 star', pct: 15 }, // 3/20
  { label: '3 star', pct: 10 }, // 2/20
  { label: '2 star', pct: 0 }, // 0/20
  { label: '1 star', pct: 5 }, // 1/20
];

const reviews: Review[] = [
  {
    id: 1,
    name: 'Lucas M.',
    score: 5,
    title: 'Lorem ipsum dolor sit amet',
    date: 'Reviewed on 18 February 2026',
    verified: true,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    id: 2,
    name: 'Sophie R.',
    score: 5,
    title: 'Consectetur adipiscing elit sed do',
    date: 'Reviewed on 17 February 2026',
    verified: true,
    body: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
  {
    id: 3,
    name: 'Marco B.',
    score: 5,
    title: 'Eiusmod tempor incididunt ut labore',
    date: 'Reviewed on 16 February 2026',
    verified: true,
    body: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    name: 'Anna K.',
    score: 5,
    title: 'Dolore magna aliqua ut enim veniam',
    date: 'Reviewed on 15 February 2026',
    verified: true,
    body: 'Dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
  },
  {
    id: 5,
    name: 'James T.',
    score: 5,
    title: 'Ut labore et dolore magna aliqua',
    date: 'Reviewed on 14 February 2026',
    verified: true,
    body: 'Ut labore et dolore magna aliqua, ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
  },
  {
    id: 6,
    name: 'Elena V.',
    score: 4,
    title: 'Quis nostrud exercitation ullamco',
    date: 'Reviewed on 13 February 2026',
    verified: true,
    body: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  },
  {
    id: 7,
    name: 'Peter N.',
    score: 5,
    title: 'Laboris nisi ut aliquip ex commodo',
    date: 'Reviewed on 12 February 2026',
    verified: false,
    body: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat.',
  },
  {
    id: 8,
    name: 'Clara H.',
    score: 5,
    title: 'Duis aute irure dolor reprehenderit',
    date: 'Reviewed on 10 February 2026',
    verified: true,
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit.',
  },
  {
    id: 9,
    name: 'David W.',
    score: 3,
    title: 'Voluptate velit esse cillum dolore',
    date: 'Reviewed on 9 February 2026',
    verified: true,
    body: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 10,
    name: 'Nina F.',
    score: 5,
    title: 'Excepteur sint occaecat cupidatat',
    date: 'Reviewed on 8 February 2026',
    verified: true,
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
  },
  {
    id: 11,
    name: 'Oliver S.',
    score: 5,
    title: 'Sunt in culpa qui officia deserunt',
    date: 'Reviewed on 6 February 2026',
    verified: true,
    body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
  },
  {
    id: 12,
    name: 'Isabella C.',
    score: 4,
    title: 'Mollit anim id est laborum perspiciatis',
    date: 'Reviewed on 5 February 2026',
    verified: false,
    body: 'Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab.',
  },
  {
    id: 13,
    name: 'Max P.',
    score: 5,
    title: 'Perspiciatis unde omnis iste natus error',
    date: 'Reviewed on 4 February 2026',
    verified: true,
    body: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.',
  },
  {
    id: 14,
    name: 'Julia L.',
    score: 1,
    title: 'Natus error voluptatem accusantium',
    date: 'Reviewed on 3 February 2026',
    verified: true,
    body: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Nemo enim ipsam voluptatem quia voluptas.',
  },
  {
    id: 15,
    name: 'Felix O.',
    score: 5,
    title: 'Doloremque laudantium totam rem aperiam',
    date: 'Reviewed on 1 February 2026',
    verified: true,
    body: 'Doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.',
  },
  {
    id: 16,
    name: 'Mia G.',
    score: 5,
    title: 'Eaque ipsa quae ab illo inventore',
    date: 'Reviewed on 30 January 2026',
    verified: true,
    body: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    id: 17,
    name: 'Leon Z.',
    score: 4,
    title: 'Veritatis quasi architecto beatae vitae',
    date: 'Reviewed on 28 January 2026',
    verified: false,
    body: 'Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
  },
  {
    id: 18,
    name: 'Emma D.',
    score: 5,
    title: 'Beatae vitae dicta sunt explicabo nemo',
    date: 'Reviewed on 26 January 2026',
    verified: true,
    body: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
  },
  {
    id: 19,
    name: 'Tom R.',
    score: 3,
    title: 'Voluptatem quia voluptas sit aspernatur',
    date: 'Reviewed on 24 January 2026',
    verified: true,
    body: 'Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt neque porro quisquam qui dolorem ipsum.',
  },
  {
    id: 20,
    name: 'Sara B.',
    score: 5,
    title: 'Consequuntur magni dolores eos qui',
    date: 'Reviewed on 22 January 2026',
    verified: true,
    body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sed quia.',
  },
];

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

export const ReviewsPage = ({ onBack }: { onBack: () => void }) => {
  const { t } = useTranslation();
  const [showWriteReview, setShowWriteReview] = useState(false);

  if (showWriteReview) {
    return <WriteReview onBack={() => setShowWriteReview(false)} />;
  }

  return (
    <div className="reviews-page">
      <div className="reviews-page__inner">
        <div className="reviews-page__header">
          <h1 className="reviews-page__title">{t('reviews.title')}</h1>
          <button
            className="reviews-page__back"
            onClick={onBack}
          >
            ← {t('reviews.back')}
          </button>
        </div>
        <div className="reviews-page__body">
          <div className="summary-panel">
            <div className="summary-panel__score-row">
              <Stars score={AVG_SCORE} />
              <span className="summary-panel__score-text">
                {AVG_SCORE} {t('reviews.out_of')}
              </span>
            </div>
            <p className="summary-panel__count">
              {TOTAL_REVIEWS} {t('reviews.global_ratings')}
            </p>
            {ratings.map((r) => (
              <div
                key={r.label}
                className="summary-panel__bar-row"
              >
                <span className="summary-panel__bar-label">{r.label}</span>
                <div className="summary-panel__bar-track">
                  <div
                    className="summary-panel__bar-fill"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <span className="summary-panel__bar-pct">{r.pct}%</span>
              </div>
            ))}
            <div className="summary-panel__write-section">
              <p className="summary-panel__write-title">
                {t('reviews.write_title')}
              </p>
              <p className="summary-panel__write-sub">
                {t('reviews.write_sub')}
              </p>
              <button
                className="summary-panel__write-btn"
                onClick={() => setShowWriteReview(true)}
              >
                {t('reviews.write_btn')}
              </button>
            </div>
          </div>
          <div className="reviews-list">
            {reviews.slice(0, 5).map((r) => (
              <ReviewCard
                key={r.id}
                review={r}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
