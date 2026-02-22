import './Stars.scss';

export const Stars = ({ score }: { score: number }) => {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.min(1, Math.max(0, score - (n - 1)));
        return (
          <span
            key={n}
            className="stars__item"
          >
            ★
            <span
              className="stars__item-fill"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
};
