import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

type RatingStarProps = {
  value: number;
  onClick?: (value: number) => void;
};

const RatingStar: React.FC<RatingStarProps> = ({ value, onClick }) => {
  const stars = [];

  const handleClick = (starValue: number) => {
    if (onClick) {
      onClick(starValue);
    }
  };

  const calculateStarIcon = (starIndex: number) => {
    if (starIndex <= value) {
      return <RiStarFill size={12} />;
    } else if ((starIndex - 1) < value) {
      return <RiStarHalfFill size={12} />;
    } else {
      return <RiStarLine size={12} />;
    }
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className="text-yellow-400 text-2xl cursor-pointer"
        onClick={() => handleClick(i)}
      >
        {calculateStarIcon(i)}
      </span>
    );
  }

  return <div className="inline-flex">{stars}</div>;
};

export default RatingStar;
