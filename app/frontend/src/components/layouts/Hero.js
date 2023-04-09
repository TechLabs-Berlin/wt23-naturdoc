import { Container, Box, Typography } from "@mui/material"
import logo from "assets/logoNaturdoc.svg"



const Hero = ({title, mtTitle, subtitle, subtitleColor}) => {

  return (
      <>
          <Container sx={{ pt: 4, pb: 2 }} component="section" maxWidth="sm">
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                      component="h1"
                      variant="h1"
                      color="text.secondary"
                      gutterBottom
                      sx={mtTitle}
                  >
                      {title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                      <img src={logo} width={86} alt={logo} />
                  </Box>
              </Box>
              <Typography
                  component="h2"
                  variant="h2"
                  color={subtitleColor}
                  sx={{ mb: 0 }}
              >
                  {subtitle}
              </Typography>
          </Container>
      </>
  );
}

export default Hero