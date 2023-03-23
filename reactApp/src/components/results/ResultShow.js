import {
  Card,
  Box,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
/* import RemedyIcon from "../remedy/RemedyIcon"; */
import RemedyRating from "components/remedy/RemedyRating";
import { Link } from "react-router-dom";

function ResultShow({ remedy }) {
  return (
    <>
      <Card sx={{ my: 2 }} variant="resultCard">
        <CardActionArea
          component={Link}
          to={`/remedies/${remedy._id}`}
          key={remedy._id}
        >
          <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
            {/* <RemedyIcon icon={remedy.icon} sx={{ width: 180 }} smallIcon /> */}
            <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="div"
                  variant="remedyTitle"
                  sx={{ fontSize: "1rem" }}
                >
                  {remedy.remedyName}{" "}
                </Typography>
              </Box>
              <Box sx={{ flex: "1 0 auto" }}>
                {!remedy.ratingAverage ? (
                  " "
                ) : (
                  <RemedyRating remedy={remedy} summary />
                )}
                <Typography variant="body2" color="text.secondary">
                  {remedy.symptomsMatched}
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
