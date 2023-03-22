// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import SearchBar from "components/results/SearchBar";
import { Box, CardActionArea } from "@mui/material";
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
import Footer from "components/layouts/Footer";

const Home = () => {
  const cards = [1, 2, 3, 4];

  return (
    <>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container sx={{ m: "16px auto" }} component="section" maxWidth="sm">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to={"/"}>
              <img src={logo} width={90} alt={logo} />
            </Link>
          </Box>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Naturdoc
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            sx={{ fontSize: "1.25rem" }}
            align="center"
            color="text.secondary"
            paragraph
          >
            Find natural remedies from different medical traditions
          </Typography>
          <CardActionArea component={Link} to={`/search`}>
            <SearchBar />
          </CardActionArea>
        </Container>
      </Box>
      {/* End hero unit */}
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Typography
          component="h3"
          variant="h6"
          color="text.secondary"
          paragraph
        >
          Remedies that help with springtime Allergies
        </Typography>
        <Grid container spacing={3}>
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
                    // 16: 9,
                    // pt: "56.25%",
                    height: "200px",
                  }}
                  image="https://placehold.co/500x200"
                  alt="placeholder"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Honey
                  </Typography>
                  <Typography>
                    Cold, sore throots, coughs, immune system
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn more</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ py: 1 }} maxWidth="md">
        <Typography
          component="h3"
          variant="h6"
          color="text.secondary"
          paragraph
        >
          Keep in Mind!
        </Typography>
        <Box>
          <Typography variant="body1" color="text.secondary" paragraph>
            The information on this website is not intended to replace a
            one-on-one relationship with a qualified health care professional
            and is not intended as medical advice. It is intended as a sharing
            of knowledge and information from the research and experience of WHO
            Monograph. We encourage you to make your own health care decisions
            based upon your research and in partnership with a qualified health
            care professional. We are not responsible for any adverse effects or
            consequences resulting from the use of any of the suggestions,
            preparations, or procedures discussed on this website. We want to
            help you make the best health care decisions for yourself and your
            family. Here are some questions to help you figure out if you should
            see a doctor.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutHOC(Home);
