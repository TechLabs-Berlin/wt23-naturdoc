import ResultShow from "./ResultShow";
import { Container, Box } from "@mui/material";

function ResultList({ remedies }) {
  const renderedRemedies = remedies.slice(0, 10).map((remedy) => {
    return <ResultShow key={remedy.id} remedy={remedy} />;
  });

  return (
    <Container sx={{ mt: 5 }} component="section" maxWidth="sm">
      {remedies.length} matching remedies
      <Box>{renderedRemedies}</Box>
    </Container>
  );
}

export default ResultList;
