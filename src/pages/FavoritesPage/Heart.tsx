import { Heart } from 'lucide-react';
import './Heart.scss';

export default function AnimatedHeart() {
  return (
    <div className="heart-container">
      {/* Серый базовый контур */}
      <Heart
        className="heart-base"
        fill="none"
        strokeWidth={1} // тонкий контур
      />

      {/* Красный анимированный контур */}
      <Heart
        className="heart-animated"
        fill="none"
        strokeWidth={1} // тонкий контур
      />
    </div>
  );
}
