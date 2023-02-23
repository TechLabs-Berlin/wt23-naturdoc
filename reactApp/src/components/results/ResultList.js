import ResultShow from "./ResultShow";

function ResultList({ remedies }) {
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy.id} remedy={remedy} />;
  });

  return (
    <div>
      {renderedRemedies} Number of matching remedies: {remedies.length}
    </div>
  );
}

export default ResultList;
