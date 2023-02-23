function ResultShow({ remedy }) {
  return (
    <div>
      <p>
        <b>Remedy: Id {remedy.id}</b>
      </p>
      <p> Description: {remedy.body}</p>
    </div>
  );
}

export default ResultShow;
