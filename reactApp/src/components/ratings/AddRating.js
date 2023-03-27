import { Typography } from "@mui/material";
import { Card, Box, Button } from "@mui/material/";
import ChevronRight from "@mui/icons-material/ChevronRight";
import RatingForm from "components/ratings/RatingForm";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function AddRating(remedy, user) {
  const noRatingsYet = remedy.totalNumberofRatings
    ? ""
    : "Be the first to add a review.";

  const notRatedByUser = user.ratings
    ? ""
    : "You have not shared your opinion yet. What do you think of this remedy?";

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card variant="reviewCard">
        {remedy.totalNumberofRatings} reviews
        <Typography variant="body1" sx={{ textAlign: "center" }} paragraph>
          {/* Case 1: No ratings yet */}
          {noRatingsYet}
          {/* Case 2: No ratings from user yet */}
          {notRatedByUser}
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
