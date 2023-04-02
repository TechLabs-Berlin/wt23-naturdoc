import RatingShow from "./RatingShow";
import {  Box, Typography } from "@mui/material";

function RatingList({ ratings }) {


  const orderedRatings = ratings.slice().sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    
  const renderedRatings = orderedRatings.map((rating) => {
    return <RatingShow key={rating.ratingId} rating={rating} />;
  });

  return (
      <>
          <Box sx={{ mt: 5 }} component="section" maxWidth="md">
              <Typography variant="resultCount">
                  {ratings.length} {ratings.length === 1 ? 'review' : 'reviews'}
              </Typography>
              {renderedRatings}
          </Box>
      </>
  );
}

export default RatingList;
