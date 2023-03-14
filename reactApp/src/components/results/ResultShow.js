import {
  Card,
  Box,
  Rating,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import RemedyIcon from "../remedy/RemedyIcon";

function ResultShow({ remedy }) {
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardActionArea>
          <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
            <RemedyIcon icon={remedy?.icon} sx={{ width: 180 }} />
            <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography component="div" sx={{ fontWeight: 500, ml: 0.25 }}>
                  {remedy?.title}{" "}
                </Typography>
              </Box>
              <Box sx={{ flex: "1 0 auto" }}>
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
                    <b>{remedy?.ratingAverage}</b> (
                    {remedy?.totalNumberofRatings})
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {remedy?.matching_symptoms}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ResultShow;
