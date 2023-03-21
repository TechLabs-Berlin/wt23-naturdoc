import RatingShow from "./RatingShow";
import { Container, Box, Button } from "@mui/material";

function RatingList({ ratings }) {
  const renderedRatings = ratings.map((rating) => {
    return <RatingShow key={rating.id} rating={rating} />;
  });

  return (
    <>
      <Button variant="contained" color="primary" href="">
        Write a Review
      </Button>

      <Container sx={{ mt: 5 }} component="section" maxWidth="sm">
        {ratings.length} matching reviews
        <Box>{renderedRatings}</Box>
      </Container>
    </>
  );
}

export default RatingList;
