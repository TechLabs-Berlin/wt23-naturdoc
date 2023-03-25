import { Typography } from "@mui/material";

function AddRating(ratings, notRatedByUser, notRatingsYet) {
  return (
    <>
      {ratings.length} matching reviews
      {/* Case 1a: No reviews yet */}
      <Typography variant="remedyTitle"></Typography>
      {/* Case 1B: No reviews from user  yet */}
      <Typography variant="remedyTitle"></Typography>
    </>
  );
}

export default AddRating;
