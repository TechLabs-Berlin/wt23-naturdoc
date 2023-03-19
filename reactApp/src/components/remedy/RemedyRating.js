import { Box, Rating, Typography } from "@mui/material";

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
            <b>{remedy?.ratingAverage}</b>
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
                value={Math.floor(remedy.ratingAverage)}
                readOnly
              />
              <Box component={"div"} sx={{ fontSize: 14 }}>
                ({remedy.totalNumberofRatings} reviews)
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

export default RemedyRating;
