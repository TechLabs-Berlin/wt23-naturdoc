import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#61876E",
    },
    secondary: {
      main: "#FFD4D4",
    },
    error: {
      main: "#ff1744",
    },
    text: {
      primary: "rgba(0,0,0,0.6)",
      secondary: "rgba(0,0,0,0.48)",
    },
    background: {
      paper: "rgba(255,255,255)",
      default: "#EEEFEE",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "transparent",
          color: "#0000009e",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: "auto",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // padding: "25px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        subheader: {
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        },
      },
    },
  },
});

export default theme;
