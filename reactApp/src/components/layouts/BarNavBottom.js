import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
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
