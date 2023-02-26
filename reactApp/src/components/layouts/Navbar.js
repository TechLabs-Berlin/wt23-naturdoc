import { Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <Button href="#" variant="contained" disableElevation size="medium">
      Login
      <AccountCircle sx={{ ml: 1 }} />
    </Button>
  );
}

export default Navbar;
