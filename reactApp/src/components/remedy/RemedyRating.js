import { Box, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const RemedyRating = ({ remedy, summary }) => {
  if (summary) {
    return (
      <>
        {remedy.ratingAverage ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              size="small"
              readOnly
              sx={{ mr: 0.5 }}
              icon={<CircleIcon fontSize="inherit" />}
              emptyIcon={<CircleIcon fontSize="inherit" />}
              value={remedy.ratingAverage}
            />
            <Box component="span">
              <b>{remedy.ratingAverage}</b> ({remedy.totalNumberofRatings})
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            "No ratings yet"
          </Box>
        )}
      </>
    );
  } else {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 52 }}>
            {" "}
            <b>{remedy.ratingAverage}</b>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: 1.5,
              lineHeight: 1,
            }}
          >
            <Box sx={{}}>
              <Rating
                max={5}
                precision={0.5}
                readOnly
                value={remedy.ratingAverage}
              />
              <Box component={"div"} sx={{ fontSize: 14 }}>
                {/* [BUG] Ask Soma: how to anchor link dynamic URL?] */}
                <Link component={Link} to="/remedy/:{remedy.id}">
                  {" "}
                  ({remedy.totalNumberofRatings} reviews)
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

export default RemedyRating;
