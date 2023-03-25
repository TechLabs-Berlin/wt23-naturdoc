import { Box, Rating, Typography } from "@mui/material";

function renderRating(value, isSummary) {
  if (value) {
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
            <b>{value}</b> (totalNumberOfRatings)
          </Box>
        </Box>
      </>
    );
  } else if (isSummary) {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="read-only"
            size="small"
            defaultValue={0}
            max={1}
            readOnly
            sx={{ mr: 0.5 }}
          />
          <Box component="span">
            <Typography sx={{ fontStyle: "italic", fontSize: "0.9rem" }}>
              No ratings yet
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default renderRating;
