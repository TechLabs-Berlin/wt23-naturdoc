import { HashLink as Link } from 'react-router-hash-link';
import RemedyRating from "components/remedy/RemedyRating";
import { Box, Typography } from "@mui/material";

const RemedyHeader = ({remedy}) => {
  return (
      <>
          <Box component="div">
              <Typography variant="remedyTitle" component="h1">
                  {remedy.remedyName}
              </Typography>
              {remedy.ratingAverage ? (
                  <RemedyRating remedy={remedy} />
              ) : (
                  <Box component={'div'} sx={{ my: 2 }}>
                      <Typography>
                          No ratings yet.{' '}
                          <Link
                              component={Link}
                              smooth
                              to={`/remedies/${remedy._id}#ratings-section`}
                          >
                              Be the first to add one.
                          </Link>
                      </Typography>
                  </Box>
              )}
          </Box>
      </>
  );
}

export default RemedyHeader