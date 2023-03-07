import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      <small>
        <Link to={"/about"}>About Us</Link> {"Copyright © "}
        <a href="https://github.com/TechLabs-Berlin/wt23-naturdoc">
          Techlabs Naturdoc Team
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </small>
    </Typography>
  );
}

function StickyFooter() {
  return (
    <Box component="footer">
      <Container maxWidth="sm" sx={{ mt: 6, mb: 3 }}>
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default StickyFooter;
