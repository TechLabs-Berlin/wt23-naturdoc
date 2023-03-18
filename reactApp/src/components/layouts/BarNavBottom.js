import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
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
            icon={<HomeIcon />}
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
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
