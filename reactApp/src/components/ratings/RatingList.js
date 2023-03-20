import RatingShow from "./RatingShow";
import RatingForm from "./RatingForm";
import { useState } from "react";
import { Container, Box, Button } from "@mui/material";

function RatingList({ ratings }) {
  const renderedRatings = ratings.map((rating) => {
    return <RatingShow key={rating.id} rating={rating} />;
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Write a Review
      </Button>

      <Container sx={{ mt: 5 }} component="section" maxWidth="sm">
        {ratings.length} matching reviews
        <Box>{renderedRatings}</Box>
      </Container>
      <RatingForm open={open} handleClose={handleClose} />
    </>
  );
}

export default RatingList;
