// dependencies
import { Link } from "react-router-dom";
// Material UI
import { Container , Typography, Box, CardActionArea } from "@mui/material";
//assets
import logo from "assets/logoNaturdoc.svg";
import searchButton from "assets/searchButton.png";

const HomeHero = () => {
  return (
      <>
          <Container
              sx={{ pt: 4, pb:6 }}
              component="section"
              maxWidth="sm"
          >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                      component="h1"
                      variant="h1"
                      color="text.secondary"
                      gutterBottom
                      sx={{ mt: 2 }}
                  >
                      Welcome to Naturdoc
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                      <img src={logo} width={86} alt={logo} />
                  </Box>
              </Box>
              <Typography
                  component="h2"
                  variant="h2"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 7 }}
              >
                  Find natural remedies from different medical traditions
              </Typography>
              <CardActionArea
                  component={Link}
                  to={`/search`}
                  sx={{ display: 'flex' }}
              >
                  <img src={searchButton} alt="Pick your symptoms" width="315" />
              </CardActionArea>
          </Container>
      </>
  );
}

export default HomeHero
