import StickyFooter from "components/layouts/Footer";
import Header from "components/layouts/Header";
import { Box } from "@mui/material";

function About() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
        }}
        component="main"
      >
        <h1>ABOUT PAGE</h1>
      </Box>
      <StickyFooter />
    </div>
  );
}

export default About;
