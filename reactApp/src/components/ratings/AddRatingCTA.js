import { useState } from "react";
import RatingForm from "components/ratings/RatingForm";
import { Card, Box, Button, Typography } from "@mui/material/";
import ChevronRight from "@mui/icons-material/ChevronRight";


const AddRatingCTA = ({remedy, ratings}) => {

const [openForm, setOpenForm] = useState(false);
const [openCTA, setOpenCTA] = useState(true);

const handleClickOpen = () => {
    setOpenForm(true);
    setOpenCTA(false);
  };
  

  const handleClose = () => {
    setOpenForm(false);
    setOpenCTA(true);
  };

return (
    <>
    {openCTA && 
        <Card variant="reviewCard">
            <Typography variant="body1" sx={{ textAlign: 'center' }} paragraph>
                <>
                    {!remedy.totalNumberofRatings
                        ? 'No reviews yet.'
                        : 'Did you try the remedy? Tell us what you think!'}
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
}
        {openForm && (
            <RatingForm
                key={remedy.id}
                remedy={remedy}
                open={openForm}
                handleClose={handleClose}
            />
        )}
    </>
);
}

export default AddRatingCTA;