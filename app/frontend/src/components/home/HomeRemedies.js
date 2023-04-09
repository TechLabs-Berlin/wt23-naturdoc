// Material UI
import { Typography, Card, Container, CardMedia,  Grid, Divider } from "@mui/material";
//assets
import rosemary from "assets/remedies/rosemary.jpg";
import stingingNettle from "assets/remedies/stinging-nettle.jpg";
import garlic from "assets/remedies/garlic.png";
import turmeric from "assets/remedies/turmeric.png";
import HomeRemediesContent from "./HomeRemediesContent";

// As of 2023-04-06, the Data Science API does not have a way to filter by season, nor to retrieve a unique "common name for the remedy" (e.g. "rosemary" instead of "Rosmarinus officinalis").
// Therefore, the data below is hard-coded.
const season = "spring";

const springRemedies = [
    {
      src: rosemary, 
      title: "Rosemary",
      id: "64283e77746bfc1f34fe56cd",
    },
    {
      src: stingingNettle,
      title: "Stinging Nettle",
      id: "64283e77746bfc1f34fe702f",
    },
    {
      src: garlic,
      title: "Garlic",
      id: "64283e77746bfc1f34fe415c",
    },
    {
      src: turmeric,
      title: "Turmeric",
      id: "64283e77746bfc1f34fe4d35",
    },
  ];

const HomeRemedies = () => {
  return (
      <>
          <Container sx={{ py: 4 }} maxWidth="md">
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
                  {springRemedies.map((item, index) => {
                    const id = item.id;
                        return (
                      <Grid item key={id} xs={12} sm={12} md={12}>
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
                    );
                  })}
              </Grid>
          </Container>
      </>
  );
}

export default HomeRemedies;