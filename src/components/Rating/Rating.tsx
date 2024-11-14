import React, { useState } from 'react'
import './styles/rating.scss';

interface StarRatingProps {
  initialRating?: number
  onChange?: (rating: number) => void
}

export default function StarRating({ initialRating = 0, onChange }: StarRatingProps = {}) {
  const [rating, setRating] = useState(initialRating)

  const handleRatingChange = (newRating: number) => {
    const clampedRating = Math.max(0, Math.min(5, newRating))
    setRating(clampedRating)
    if (onChange) {
      onChange(clampedRating)
    }
  }

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>, starIndex: number) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const halfWidth = rect.width / 2

    if (x < halfWidth) {
      handleRatingChange(starIndex - 0.5)
    } else {
      handleRatingChange(starIndex)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, starIndex: number) => {
    if (event.key === 'ArrowLeft') {
      handleRatingChange(Math.max(0, starIndex - 0.5))
    } else if (event.key === 'ArrowRight') {
      handleRatingChange(Math.min(5, starIndex + 0.5))
    }
  }

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          onClick={(e) => handleStarClick(e, starIndex)}
          onKeyDown={(e) => handleKeyDown(e, starIndex)}
          className="star-button"
          aria-label={`${starIndex} 별점`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              className={`star ${rating >= starIndex ? "star-filled" : "star-empty"}`}
            />
            {rating > starIndex - 1 && rating < starIndex && (
              <path
                d="M12 2L8.91 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77V2Z"
                className="star-half"
              />
            )}
          </svg>
        </button>
      ))}
      <span className="rating-value" aria-live="polite">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}