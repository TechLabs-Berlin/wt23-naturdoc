import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Material UI
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";


const SimpleBottomNavigation = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setValue(0);
    } else if (window.location.pathname === "/search") {
      setValue(1);
    } else if (window.location.pathname === "/login") {
      setValue(2);
    }
  }, []);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          mb: 0,
          backgroundColor: "primaryColorLight",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels={false}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to={"/"}
            label="home"
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={"/search"}
            label="search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={"/login"}
            label="Login"
            icon={<PersonOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default SimpleBottomNavigation;