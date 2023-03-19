import ResultShow from "./ResultShow";
import { Container, Box } from "@mui/material";

function ResultList({ remedies }) {
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy.id} remedy={remedy} />;
  });

  return (
    <Container sx={{ mt: 1 }} component="section" maxWidth="sm">
      {!remedies.length ? "No" : remedies.length}
      {remedies.length === 1 ? " matching remedy" : " matching remedies"}
      <Box>{renderedRemedies}</Box>
    </Container>
  );
}

export default ResultList;
