import { useEffect, useState } from "react";
import getUserRatings from "data/getUserRatings";
import AddRating from "./AddRating";
import RatingList from "./RatingList";

function RenderRating({ remedy }) {
  const [ratings, setRatings] = useState([]);

  // get the remedy ratings from the API
  useEffect(() => {
    getUserRatings()
      .then((response) => {
        setRatings(response);
        console.log("user ratings", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (remedy.totalNumberOfRatings > 0) {
    return (
      <>
        Logic: if not rated by user display bloctest: !userRating ? AddRating :
        ""
        <AddRating remedy={remedy} notRatedByUser />
        <RatingList ratings={ratings} />;
      </>
    );
  } else {
    <AddRating noRatingsYet />;
  }
}

export default RenderRating;
