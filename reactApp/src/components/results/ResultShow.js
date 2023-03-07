function ResultShow({ remedy }) {
  return (
    <>
      <p>
        <b>{remedy.title}</b>
        <br />
        Rating: 4
        <br />
        Recommended used for: <b>{remedy.matching_symptoms}</b>
      </p>
    </>
  );
}

export default ResultShow;
