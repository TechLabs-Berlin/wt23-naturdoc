import logo from "assets/logo.svg";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "components/layouts/Navbar";

function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ p: 0 }}>
      <Toolbar>
        <Link to={"/"}>
          <img className="App-logo" src={logo} width={60} alt={logo} />
        </Link>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          <Link to={"/"}> Naturdoc</Link>
        </Typography>

        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
