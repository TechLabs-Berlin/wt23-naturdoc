import AddRatingCTA from "./AddRatingCTA";
import getUsers from "data/getUsers";
import { Box, Card, Typography } from "@mui/material/";

const AddRating = ({remedy, ratings}) => {

const alreadyRated = ratings.find(rating => rating.userId === getUsers()); 

console.log(alreadyRated ? "User already rated" : "Not rated by user")
  return (
      <>
          <Box component="div" sx={{ mt: 2 }} id="ratings-section">
              {alreadyRated ? (
                  <Card variant="reviewCard">
                      <Typography
                          variant="body1"
                          sx={{ textAlign: 'center', mb: 0 }}
                          paragraph
                      >
                          Thanks for sharing your opinion!
                      </Typography>
                  </Card>
              ) : (
                  <AddRatingCTA remedy={remedy} ratings={ratings} />
              )}
          </Box>
      </>
  );
}

export default AddRating;
