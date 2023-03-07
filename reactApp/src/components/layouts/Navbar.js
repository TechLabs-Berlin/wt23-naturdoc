import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <Button
      component={Link}
      to={"/login"}
      href="#"
      variant="contained"
      disableElevation
      size="medium"
    >
      Login
      <AccountCircle sx={{ ml: 1 }} />
    </Button>
  );
}

export default Navbar;
