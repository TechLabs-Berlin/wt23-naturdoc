import AddRating from "./AddRating";
import RatingList from "./RatingList";

function renderRating(remedy, ratings, userRating) {
  if (remedy.totalNumberOfRatings > 0) {
    return (
      <>
        !userRating ? <AddRating notRatedByUser /> : "";
        <RatingList ratings={ratings} />;
      </>
    );
  } else {
    <AddRating notRatingsYet />;
  }
}

export default renderRating;
