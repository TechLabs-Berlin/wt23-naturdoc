import { useState } from "react";
import RatingForm from "components/ratings/RatingForm";
import { Card, Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material/";
import ChevronRight from "@mui/icons-material/ChevronRight";


function AddRatingCTA({remedy, ratings}) {

const [open, setOpen] = useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

return (
    <>
        <Card variant="reviewCard">
            <Typography variant="body1" sx={{ textAlign: 'center' }} paragraph>
            <>
            {!remedy.totalNumberofRatings ?
     "No reviews yet. Be the first to add a review" : "Did you try the remedy? Tell us what you think!"}
  </>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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

export default AddRatingCTA;