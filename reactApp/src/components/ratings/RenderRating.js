import AddRating from "./AddRating";
import RatingList from "./RatingList";

function renderRating({remedy, rating}) {
  if (remedy.totalNumberOfRatings > 0) {
    return (
      <>
      {rating.userId ? "" : <AddRating notRatedByUser />}
        <RatingList rating={rating} />;
      </>
    );
  } else {
    <AddRating noRatingsYet />;
  }
}

export default renderRating;
