import { createTheme } from '@mui/material';

const primaryColor = '#1d7147';
const primaryColorLight = 'rgba(105,179,154,0.9)';
const secondaryColor = '#deedde';
const secondaryColorLight = '#EAE6B4';
const primaryFont = ['"Poppins"', '"Helvetica"', 'Arial', 'sans-serif'].join(
    ','
);
const secondaryFont = [
    '"Bree Serif"',
    '"Helvetica"',
    'Arial',
    'sans-serif',
].join(',');

const primaryTextColor = '#333333';

const theme = createTheme({
    palette: {
        mode: 'light',
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
            main: '#ff1744',
        },
        text: {
            primary: primaryTextColor,
            secondary: primaryColor,
        },
        background: {
            paper: '#ffffff',
            default: '#ffffff',
        },
        divider: primaryTextColor,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#deedde75',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'transparent',
                    color: '#0000009e',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: 'auto',
                    padding: 8, 
                    backgroundColor:"#ffffff"
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    fontSize: '2rem',
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                iconEmpty: {
                    color: '#cccccc',
                },
                iconFilled: {
                    color: primaryColor,
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
                    height: '68px',
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: primaryTextColor,
                    '&.Mui-selected': { color: '#ffffff' },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: '8px 0px',
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: '48px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { marginBottom: '16px' },
                resultCard: {
                    backgroundColor: secondaryColor,
                },
                homeCard: {
                    backgroundColor: '#ffffff',
                },
                reviewCard: {
                    marginTop: 32,
                    padding: '32px 16px',
                    border: '1px solid',
                    borderColor: primaryColor,
                    borderRadius: '4px',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    width: '25%',
                    margin: '16px 0',
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: secondaryColorLight,
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    backgroundColor: primaryColorLight,
                    color: '#ffffff',
                    fontWeight: 700,
                    clearIndicator: {
                        color: '#ffffff',
                        backgroundColor: '#000000',
                    },
                },
            },
        },
        MuiCardActionArea: {
            styleOverrides: {
                focusHighlight: {
                    backgroundColor: 'transparent',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                subheader: {
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                },
            },
        },
    },
    typography: {
        h1: {
            fontSize: '1.9rem',
            fontWeight: 400,
            color: primaryColor,
            lineHeight: '2.5rem',
        },
        h2: { fontSize: '1.25rem', fontWeight: 300, lineHeight: '1.75rem' },
        remedyTitle: {
            fontFamily: secondaryFont,
            fontWeight: 400,
            fontSize: '1.5rem',
        },
        resultCount: {
            fontFamily: primaryFont,
            fontWeight: 300,
            color: primaryColor,
            textTransform: 'uppercase',
        },
        reviewTitle: {
            fontFamily: secondaryFont,
            fontWeight: 400,
            fontSize: '0.95rem',
        },
        reviewTimestamp: {
            fontSize: '0.85rem',
            color: primaryTextColor,
        },
        reviewBody: {
            fontSize: '0.95rem',
            color: primaryTextColor,
        },
        fontFamily: primaryFont,
    },
});

export default theme;
