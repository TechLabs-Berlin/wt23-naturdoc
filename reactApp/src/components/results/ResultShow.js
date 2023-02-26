function ResultShow({ remedy }) {
  return (
    <>
      <p>
        <b>Remedy: Id {remedy.id}</b>
        <br />
        Description: {remedy.body}
      </p>
    </>
  );
}

export default ResultShow;
