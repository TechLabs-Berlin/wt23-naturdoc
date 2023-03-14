import {
  Card,
  CardHeader,
  Rating,
  CardActionArea,
  CardContent,
  Avatar,
} from "@mui/material";
import MedicationLiquidRoundedIcon from "@mui/icons-material/MedicationLiquidRounded";

function ResultShow({ remedy }) {
  return (
    <>
      <CardActionArea>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <CardHeader
            sx={{
              alignItems: "flex-start",
            }}
            avatar={
              <Avatar
                variant="rounded"
                sx={{ width: 56, height: 56, bgcolor: "#61876E" }}
                aria-label="remedy"
              >
                <MedicationLiquidRoundedIcon />
              </Avatar>
            }
            // action={<IconButton aria-label="settings">ICON</IconButton>}
            title={remedy.title}
            titleTypographyProps={{ variant: "h5" }}
            subheader={remedy.matching_symptoms}
            subheaderTypographyProps={{
              variant: "subtitle1",
              color: "text.secondary",
              component: "div",
            }}
          />
          <CardContent sx={{ textAlign: "right" }}>
            <Rating name="read-only" size="small" value={4} readOnly />
            <br />4 (413)
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
}

export default ResultShow;
