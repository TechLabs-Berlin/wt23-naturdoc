import logo from "assets/logo.svg";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Navbar from "components/layouts/Navbar";

function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ p: 0 }}>
      <Toolbar>
        <img className="App-logo" src={logo} width={60} alt={logo} />
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Naturdoc
        </Typography>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
