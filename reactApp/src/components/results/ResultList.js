import ResultShow from "./ResultShow";
import { Container, Box } from "@mui/material";
import ResultShowSkeleton from "./ResultShowSkeleton";

function ResultList({ remedies, loading }) {
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy._id} remedy={remedy} loading={loading} />;
  });

  const renderedLoading = [...Array(5)].map((e, i) => (
    <ResultShowSkeleton key={i} />
  ));

  return (
    <>
      <Container sx={{ mt: 1 }} component="section" maxWidth="sm">
        <Box>
          {!remedies.length ? "No" : remedies.length}
          {remedies.length === 1 ? " matching remedy" : " matching remedies"}
          {loading ? renderedLoading : renderedRemedies}
        </Box>
      </Container>
    </>
  );
}

export default ResultList;
