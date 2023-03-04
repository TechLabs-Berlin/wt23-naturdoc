import { useState } from "react";
// Components
import Header from "components/layouts/Header";
import StickyFooter from "components/layouts/Footer";
import SearchBar from "components/results/SearchBar";
import ResultList from "components/results/ResultList";
// Data
import GetRemedies from "data/GetRemedies";
// Styles
import "assets/App.css";
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";

function App() {
  const [remedies, setRemedies] = useState([]);

  const handleChange = async (terms) => {
    const result = await GetRemedies(terms);
    console.log("(onchange) Do a search with", terms);
    if (!terms.length) {
      setRemedies([]);
      console.log("no data found");
    } else {
      setRemedies(result);
    }
    // setRemedies(result);
    console.log("Search Result:", result);
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
          <SearchBar onChange={handleChange} />
          <ResultList remedies={remedies} />
        </Box>

        <StickyFooter />
      </ThemeProvider>
    </>
  );
}

export default App;
