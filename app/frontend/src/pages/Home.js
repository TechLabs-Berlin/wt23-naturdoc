import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { homeTransition } from "assets/animations";
// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import Hero from "components/layouts/Hero";
import HomeRemedies from "components/home/HomeRemedies";
// Material UI
import { Button, Container, Typography, Box, Divider, CardActionArea } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
//assets
import searchButton from "assets/searchButton.png";

const Home = () => {
  return (
      <motion.div
          initial="in"
          animate="animate"
          exit="out"
          variants={homeTransition}
      >
          <Hero
              title="Welcome to Naturdoc"
              mtTitle={{ mt: 2 }}
              subtitle="Find natural remedies from different medical traditions"
              subtitleColor="text.secondary"
          />
          <CardActionArea
              component={Link}
              to={`/search`}
              sx={{ display: 'flex', py: 4 }}
          >
              <img src={searchButton} alt="Pick your symptoms" width="315" />
          </CardActionArea>


          <HomeRemedies />

          <Container sx={{ py: 1 }} maxWidth="md">
              <Typography
                  component="h2"
                  variant="h2"
                  color="text.primary"
                  paragraph
              >
                  Keep in Mind!
              </Typography>
              <Divider />
              <Box>
                  <Typography variant="body1" paragraph>
                      We want to help you get back on track. Here are some
                      questions to help you figure out, if and when you should
                      go to the doctor.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                          align="center"
                          size="large"
                          variant="outlined"
                          endIcon={<ChevronRight />}
                          to={'/see-doctor'}
                          component={Link}
                      >
                          Read more
                      </Button>
                  </Box>
              </Box>
          </Container>

      </motion.div>
  );
};

export default LayoutHOC(Home);
