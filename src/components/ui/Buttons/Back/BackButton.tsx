import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="buttonBack">
      <button
        className="buttonBackLink"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};
