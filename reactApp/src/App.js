import { useState } from "react";
// Components
import Header from "components/layouts/Header";
import StickyFooter from "components/layouts/Footer";
import SearchBar from "components/results/SearchBar";
import ResultList from "components/results/ResultList";
// Data
import SearchContent from "data/api";
// Styles
import "assets/App.css";
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";

function App() {
  const [remedies, setRemedies] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchContent(term);

    setRemedies(result);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
          }}
          component="main"
        >
          <CssBaseline />
          <SearchBar onSubmit={handleSubmit} />
          <ResultList remedies={remedies} />
        </Box>

        <StickyFooter />
      </ThemeProvider>
    </>
  );
}

export default App;
