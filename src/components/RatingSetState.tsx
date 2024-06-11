import "../assets/styles/RatingSetState.css"
export default function RatingSetState({ rating }: { rating: number }) {
  return (
    <div className="flex-block rating-set-block">
      <img
        className="img--transaction"
        src="/illustration-thank-you.svg"
        alt="There is a credit card and bill printed by electronic device described on a picture, symbolizing successful transaction"
      ></img>
      <span className="tag tag--primary">You selected {rating} out of 5</span>
      <h1 className="font-attractive-1">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
