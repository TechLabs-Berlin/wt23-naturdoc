function RatingShow({ rating }) {
  return (
    <>
      <h1>user: {rating.userId}</h1>
      <p>remedyId: {rating.remedyId}</p>
      <p>_id: {rating._id}</p>
      <p>value: {rating.ratingValue}</p>
      <p>review name: {rating.reviewName}</p>
      <p>description: {rating.reviewDescription}</p>
    </>
  );
}

export default RatingShow;
