import ResultShow from "./ResultShow";
import { Container, Paper } from "@mui/material";

function ResultList({ remedies }) {
  //*[TODO] change remedies.map so we can retrieve multiple remedies
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy.id} remedy={remedy} />;
  });

  return (
    <Container sx={{ mt: 1 }} component="section" maxWidth="sm">
      {remedies.length} matching remedies
      <Paper>{renderedRemedies}</Paper>
    </Container>
  );
}

export default ResultList;
