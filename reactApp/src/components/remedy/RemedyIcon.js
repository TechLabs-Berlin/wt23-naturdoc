import { Avatar } from "@mui/material";
import MedicationLiquidRoundedIcon from "@mui/icons-material/MedicationLiquidRounded";

function RemedyIcon() {
  return (
    <Avatar
      variant="rounded"
      sx={{ bgcolor: "#61876E", mt: 0.7 }}
      aria-label="remedy"
    >
      <MedicationLiquidRoundedIcon />
    </Avatar>
  );
}

export default RemedyIcon;
