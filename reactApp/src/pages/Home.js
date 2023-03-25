// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import SearchBar from "components/results/SearchBar";
import { Box, CardActionArea, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import logo from "assets/logoNaturdoc.svg";
// import Footer from "components/layouts/Footer";
import { ChevronRight } from "@mui/icons-material";

const Home = () => {
  const cards = [1, 2, 3, 4];

  return (
    <>
      {/* Hero unit */}
      <Box
        sx={{
          pt: 2,
          pb: 6,
        }}
      >
        <Container sx={{ m: "16px auto" }} component="section" maxWidth="sm">
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography
              component="h1"
              variant="h1"
              color="text.secondary"
              gutterBottom
              sx={{ mt: 2 }}
            >
              Welcome to Naturdoc
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to={"/"}>
                  <img src={logo} width={86} alt={logo} />
                </Link>
              </Box>
              <Box sx={{ flex: "1 0 auto" }}></Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
          <Typography
            component="h2"
            variant="h2"
            color="text.secondary"
            paragraph
            sx={{ mb: 7 }}
          >
            Here you can find natural remedies from different medical traditions
          </Typography>

          <CardActionArea component={Link} to={`/search`}>
            <SearchBar />
          </CardActionArea>
        </Container>
      </Box>
      {/* End hero unit */}
      <Container sx={{ pt: 2, pb: 4 }} maxWidth="md">
        {/* End hero unit */}
        <Typography component="h2" variant="h2" color="text.primary" paragraph>
          Remedies that help with springtime Allergies
        </Typography>
        <Divider />
        <Grid container spacing={3} sx={{ py: 2 }}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "200px",
                  }}
                  image="https://placehold.co/500x200"
                  alt="placeholder"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="remedyTitle" component="h2">
                    Honey
                  </Typography>
                  <Typography>
                    Cold, sore throots, coughs, immune system
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "end" }}>
                  <Button
                    size="medium"
                    variant="outlined"
                    endIcon={<ChevronRight />}
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
