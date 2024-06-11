import { useState } from "react";
import "../assets/styles/InitialState.css";
export default function InitialState({
  rating = -1,
  ratingItems = [1, 2, 3, 4, 5],
  onRatingSelected,
}: {
  rating: number;
  ratingItems?: number[];
  onRatingSelected: (newRating: number) => void;
}) {
  const [tempRating, setTempRating] = useState(rating);
  return (
    <div className="initial-state-block flex-block">
      <div className="star-img"></div>
      <h1 className="font-attractive-1">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul role="radiogroup" aria-required aria-label="List of buttons to selected desired rating value" className="rating-list">
        {ratingItems.map((item) => (
            <button key={item} role="radio" aria-label={`Rating ${item}`} className="rating-list-item" aria-checked={item === tempRating} onClick={() => setTempRating(item)}>{item}</button>
        ))}
      </ul>
      <button aria-label={tempRating !== -1 ? `Submit selected rating ${tempRating}` : "You should select rating first before clicking this button"} className="button button--primary" onClick={() => onRatingSelected(tempRating)}>Submit</button>
    </div>
  );
}
