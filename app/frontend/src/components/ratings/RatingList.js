import RatingShow from "./RatingShow";
import {  Box, Typography } from "@mui/material";

const RatingList = ({ ratings }) => {


  const orderedRatings = ratings.slice().sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    
  /* REFACTOR: do not use array index in key */
  const renderedRatings = orderedRatings.map((rating) => {
    const id = rating.ratingId;
    return <RatingShow key={id} rating={rating} />;
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
