import { Card, CardContent } from "@mui/material";

function RatingShow({ rating }) {
  return (
    <>
    <Card>
      <CardContent>
        <p>User Id is: <b>{rating.userId}</b></p>
        <p>_id of the rating:<b> {rating._id}</b></p>
        <p>Linked to remedy via remedyId: <b>{rating.remedyId}</b></p>
        <p>Value of the rating: <b>{rating.ratingValue}</b></p>
        <p>Title of the review:<b> {rating.reviewName}</b></p>
        <p>Description of the review: <b>{rating.reviewDescription}</b></p>
      </CardContent>
      </Card>
    </>
  );
}

export default RatingShow;
