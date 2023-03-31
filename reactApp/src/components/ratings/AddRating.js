import AddRatingCTA from "./AddRatingCTA";
import getUsers from "data/getUsers";
import { Card, Typography } from "@mui/material/";

function AddRating({remedy, ratings}) {

const alreadyRated = ratings.find(rating => rating.userId === getUsers()); 

console.log(alreadyRated ? "there is a rating from user" : "no rating from user")
  return (
    <>
    {alreadyRated ? 
    <Card variant="reviewCard">
      <Typography variant="body1" sx={{ textAlign: 'center', mb:0 }} paragraph>
      Thanks for sharing your opinion!    
            </Typography>

        </Card>
    
    : <AddRatingCTA remedy={remedy} ratings={ratings}/>}
      </>
  );
}

export default AddRating;
