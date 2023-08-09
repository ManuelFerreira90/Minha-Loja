import React from 'react';

const RatingStars = ({ rate }) => {
  const roundedRate = Math.round(rate)
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      {index + 1 <= roundedRate ? '★' : '☆'}
    </span>
  ));

  return <div className="rating-stars">{starIcons}</div>;
};

export default RatingStars;
