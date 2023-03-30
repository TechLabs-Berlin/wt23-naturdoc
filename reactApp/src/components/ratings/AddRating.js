import { useState } from "react";
import RatingForm from "components/ratings/RatingForm";
import { Card, Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material/";
import ChevronRight from "@mui/icons-material/ChevronRight";


function AddRating({remedy, ratings}) {
  
  const noRatingsYet = remedy.totalNumberofRatings
    ? ""
    : "No reviews yet. Be the first to add a review";
    console.log("No ratings yet?", noRatingsYet ? "true" : "false")

  const notRatedByUser = ratings.userId
    ? ""
    : "You have not shared your opinion yet. What do you think of this remedy?";
    console.log("Remedy not rated by User ?", notRatedByUser ? "true" : "false")

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let AddRatingtext
  if  ( !remedy.totalNumberofRatings) {
     AddRatingtext = noRatingsYet  
  } else if ( ratings.userId == null ) {
    AddRatingtext = notRatedByUser
  }

  return (
    <>
      <Card variant="reviewCard">
        <Typography variant="body1" sx={{ textAlign: "center" }} paragraph>
         <>
          {AddRatingtext}
        </>
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
      <RatingForm
        key={remedy.id}
        remedy={remedy}
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
      />
    </>
  );
}

export default AddRating;
