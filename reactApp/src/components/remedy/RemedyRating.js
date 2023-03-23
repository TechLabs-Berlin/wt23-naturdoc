import { Box, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RemedyRating = ({ remedy, summary }) => {
  if (summary) {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="read-only"
            size="small"
            defaultValue={1}
            max={1}
            readOnly
            sx={{ mr: 0.5 }}
          />
          <Box component="span">
            <b>{remedy.ratingAverage}</b> ({remedy.totalNumberofRatings})
          </Box>
        </Box>
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
                value={remedy.ratingAverage ? remedy.ratingAverage : "0"}
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
