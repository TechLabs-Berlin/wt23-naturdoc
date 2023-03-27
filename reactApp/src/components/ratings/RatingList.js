import RatingShow from "./RatingShow";
import { Container, Box } from "@mui/material";

function RatingList({ ratings }) {
  const renderedRatings = ratings.map((rating) => {
    return <RatingShow key={rating.id} rating={rating} />;
  });

  return (
    <>
      <Container sx={{ mt: 5 }} component="section" maxWidth="sm">
        <Box>{renderedRatings}</Box>
      </Container>
    </>
  );
}

export default RatingList;