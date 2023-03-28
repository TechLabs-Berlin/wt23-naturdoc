import { Avatar } from "@mui/material";
import MedicationLiquidRoundedIcon from "@mui/icons-material/MedicationLiquidRounded";

const RemedyIcon = ({ smallIcon }) => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: "primary.main",
        mt: 0.7,
        width: smallIcon ? "default" : 60,
        height: smallIcon ? "default" : 60,
      }}
      aria-label="remedy"
    >
      <MedicationLiquidRoundedIcon />
    </Avatar>
  );
};

export default RemedyIcon;
