// dependencies
import { Link } from "react-router-dom";
// Material UI
import { Button, CardContent, CardActions,  Typography, Box } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";


const HomeRemediesContent = ( {item}) => {
  return (
      <>
          <Box
              sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  alignContent: 'flex-end',
                  pl: 1,
              }}
          >
              <CardContent sx={{ display: 'flex', p: 1 }}>
                  <Typography gutterBottom variant="remedyTitle" component="h2">
                      {item.title}
                  </Typography>
              </CardContent>
              <CardActions sx={{ p: 0, justifyContent: 'end' }}>
                  <Button
                      size="medium"
                      variant="outlined"
                      endIcon={<ChevronRight />}
                      component={Link}
                      to={`/remedies/${item.id}`}
                  >
                      Learn more
                  </Button>
              </CardActions>
          </Box>
      </>
  );
}

export default HomeRemediesContent