import RatingShow from "./RatingShow";
import {  Box } from "@mui/material";

function RatingList({ ratings }) {
  const renderedRatings = ratings.map((rating) => {
    return <RatingShow key={rating._id} rating={rating} />;
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
