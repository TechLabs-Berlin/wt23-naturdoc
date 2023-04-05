import ResultShow from "./ResultShow";
import { Container, Box, Typography } from "@mui/material";
import ResultShowSkeleton from "./ResultShowSkeleton";

const ResultList = ({ remedies, loading }) => {
  const renderedRemedies = remedies.map((remedy) => {
    return <ResultShow key={remedy._id} remedy={remedy} loading={loading} />;
  });

  const renderedLoading = [...Array(5)].map((e, i) => (
    <ResultShowSkeleton key={i} />
  ));

  return (
    <>
      <Container sx={{ mt: 1 }} component="section" maxWidth="sm">
        <Box component="div" sx={{ mb: 4 }}>
          <Typography variant="resultCount">
            {!remedies.length ? "No" : remedies.length}
            {remedies.length === 1 ? " result" : " results"}
          </Typography>
          {loading ? renderedLoading : renderedRemedies}
        </Box>
      </Container>
    </>
  );
}

export default ResultList;
