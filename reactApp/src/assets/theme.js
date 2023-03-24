import { createTheme } from "@mui/material";

const primaryColor = "#1d7147";
const primaryColorLight = "rgba(105,179,154,0.9)";
const secondaryColor = "#deedde";
const secondaryColorLight = "#EAE6B4";
const primaryFont = ['"Poppins"', '"Helvetica"', "Arial", "sans-serif"].join(
  ","
);
const secondaryFont = [
  '"Bree Serif"',
  '"Helvetica"',
  "Arial",
  "sans-serif",
].join(",");

const primaryTextColor = "#333333";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
      light: primaryColorLight,
    },
    secondary: {
      main: secondaryColor,
      contrastText: primaryTextColor,
      light: secondaryColorLight,
    },
    error: {
      main: "#ff1744",
    },
    text: {
      primary: primaryTextColor,
      secondary: "#1D7147",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
    divider: primaryTextColor,
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
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: "2rem",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: "#ffffff",
        },
        iconFilled: {
          color: "#1d7147",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: secondaryFont,
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColorLight,
          height: "68px",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: primaryTextColor,
          "&.Mui-selected": { color: "#ffffff" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        resultCard: {
          backgroundColor: secondaryColor,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "25%",
          margin: "16px 0",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryColorLight,
          // color: "#ffffff",
          "&.Mui-expanded": {
            // backgroundColor: primaryColor,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          "&:hover": {
            //  backgroundColor: primaryColorLight,
          },
        },
        tag: {
          backgroundColor: primaryColorLight,
          color: "#ffffff",
          fontWeight: 700,
          clearIndicator: {
            color: "#ffffff",
            backgroundColor: "#000000",
          },
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
  typography: {
    h1: {
      fontSize: "1.9rem",
      fontWeight: 400,
      color: primaryColor,
      lineHeight: "2.5rem",
    },
    h2: { fontSize: "1.25rem", fontWeight: 300, lineHeight: "1.75rem" },
    remedyTitle: {
      fontFamily: secondaryFont,
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    resultCount: {
      fontFamily: primaryFont,
      fontWeight: 300,
      color: primaryColor,
      textTransform: "uppercase",
    },
    fontFamily: primaryFont,
  },
});

export default theme;
