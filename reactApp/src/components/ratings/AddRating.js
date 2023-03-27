import { Typography } from "@mui/material";
import { Card, Box, Button } from "@mui/material/";
import ChevronRight from "@mui/icons-material/ChevronRight";

function AddRating(
  remedy,
  ratings,
  notRatedByUser,
  notRatingsYet,
  handleClickOpen
) {
  return (
    <>
      {ratings.length} matching reviews
      {/* Case 1a: No reviews yet */}
      <Typography variant="remedyTitle"></Typography>
      {/* Case 1B: No reviews from user  yet */}
      <Typography variant="remedyTitle"></Typography>
      <Card variant="reviewCard">
        <Typography variant="body1" sx={{ textAlign: "center" }} paragraph>
          {remedy.ratingAverage
            ? "You have not shared your opinion yet. What do you think of this remedy?"
            : "Be the first to add a review."}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            align="center"
            size="large"
            variant="outlined"
            onClick={handleClickOpen}
            endIcon={<ChevronRight />}
          >
            Write a review
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default AddRating;
