import { Box, Typography, Link, Container } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      <small>
        {"Copyright © "}
        <Link href="https://github.com/TechLabs-Berlin/wt23-naturdoc">
          Techlabs Naturdoc Team
        </Link>{" "}
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
