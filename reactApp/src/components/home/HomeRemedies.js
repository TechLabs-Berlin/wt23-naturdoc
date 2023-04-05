// Material UI
import { Typography, Card, Container, CardMedia,  Grid, Divider } from "@mui/material";
//assets
import rosemary from "assets/remedies/rosemary.jpg";
import stingingNettle from "assets/remedies/stinging-nettle.jpg";
import garlic from "assets/remedies/garlic.png";
import turmeric from "assets/remedies/turmeric.png";
import HomeRemediesContent from "./HomeRemediesContent";



const season = "spring";

const springRemedies = [
    {
      src: rosemary, 
      title: "Rosemary",
      id: "641f60b3e7523a06fc0c0a20",
    },
    {
      src: stingingNettle,
      title: "Stinging Nettle",
      id: "641f60b3e7523a06fc0c2382",
    },
    {
      src: garlic,
      title: "Garlic",
      id: "641f60b3e7523a06fc0bf4af",
    },
    {
      src: turmeric,
      title: "Turmeric",
      id: "641f60b3e7523a06fc0c0085",
    },
  ];

const HomeRemedies = () => {
  return (
      <>
          <Container sx={{ pt: 2, pb: 4 }} maxWidth="md">
              <Typography
                  component="h2"
                  variant="h2"
                  color="text.primary"
                  paragraph
              >
                  Remedies that help with {season}time Allergies
              </Typography>
              <Divider />
              <Grid
                  container
                  spacing={3}
                  sx={{ py: 2, flexDirection: 'column' }}
              >
                  {springRemedies.map((item, index) => (
                      <Grid item key={index} xs={12} sm={12} md={12}>
                          {index % 2 === 0 ? (
                              <Card
                                  sx={{ display: 'flex', justifyContent: 'flex-start', }}
                                  variant="homeCard"
                              >
                                  <CardMedia
                                      component="img"
                                      variant="homeRemedyImage"
                                      image={item.src}
                                      alt={item.title}
                                  />
                                  <HomeRemediesContent item={item} />

                              </Card>
                          ) : (
                              <Card
                                  sx={{
                                      display: 'flex',
                                      justifyContent: 'flex-end',
                                  }}
                                  variant="homeCard"
                              >
                                  <HomeRemediesContent item={item} />
                                  <CardMedia
                                      component="img"
                                      variant="homeRemedyImage"
                                      image={item.src}
                                      alt={item.title}
                                  />
                              </Card>
                          )}
                      </Grid>
                  ))}
              </Grid>
          </Container>
      </>
  );
}

export default HomeRemedies;