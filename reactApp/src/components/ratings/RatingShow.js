function RatingShow({ rating }) {
  return (
    <>
      <h1>user: {rating.userId}</h1>
      <p>rating: {rating.rating}</p>
      <p>created: {rating.createdAt}</p>
    </>
  );
}

export default RatingShow;
