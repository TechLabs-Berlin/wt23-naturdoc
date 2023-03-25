import { Typography } from "@mui/material";

function AddRating(notRatedByUser, notRatingsYet) {
  return (
    <>
      {/* Case 1a: No reviews yet */}
      <Typography variant="remedyTitle"></Typography>

      {/* Case 1B: No reviews from user  yet */}
      <Typography variant="remedyTitle"></Typography>

      {/* Case 1C: Display review from user */}
      <Typography variant="remedyTitle"></Typography>
    </>
  );
}

export default AddRating;
