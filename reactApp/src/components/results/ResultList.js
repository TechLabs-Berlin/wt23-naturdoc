import ResultShow from "./ResultShow";
import { Container, Paper } from "@mui/material";

function ResultList({ remedies }) {
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy.id} remedy={remedy} />;
  });

  return (
    <Container sx={{ mt: 1 }} component="section" maxWidth="sm">
      <Paper>
        {renderedRemedies} Number of matching remedies: {remedies.length}
      </Paper>
    </Container>
  );
}

export default ResultList;
