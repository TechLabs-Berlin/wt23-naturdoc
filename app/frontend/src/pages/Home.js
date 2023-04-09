// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import HomeHero from "components/home/HomeHero"; 
// Material UI
import { Button, Container, Typography, Box, Divider } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import HomeRemedies from "components/home/HomeRemedies";



const Home = () => {
  return (
    <>
      <HomeHero />

      <HomeRemedies />

      <Container sx={{ py: 1 }} maxWidth="md">
        <Typography component="h2" variant="h2" color="text.primary" paragraph>
          Keep in Mind!
        </Typography>
        <Divider />
        <Box>
          <Typography variant="body1" paragraph>
            We want to help you get back on track. Here are some questions to
            help you figure out, if and when you should go to the doctor.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              align="center"
              size="large"
              variant="outlined"
              endIcon={<ChevronRight />}
            >
              Read more
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LayoutHOC(Home);
