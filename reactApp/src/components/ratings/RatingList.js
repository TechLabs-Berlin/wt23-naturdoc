import RatingShow from "./RatingShow";
import {  Box } from "@mui/material";

function RatingList({ ratings }) {

  const orderedRatings = ratings.updated_at ? ratings.slice().sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    : ratings;
    
  const renderedRatings = orderedRatings.map((rating) => {
    return <RatingShow key={rating.ratingId} rating={rating} />;
  });

  return (
    <>
      <Box sx={{ mt: 5 }} component="section" maxWidth="md">
        {renderedRatings}
      </Box>
    </>
  );
}

export default RatingList;
