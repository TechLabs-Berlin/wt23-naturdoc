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

const primaryTextColor = '#222222';

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
                    backgroundColor: '#ffffff',
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
            variants: [
                {
                    props: { variant: 'authenticationButton' },
                    style: {
                        backgroundColor: primaryColor,
                        padding: '12px 16px',
                        margin: '24px 0',
                        color: '#ffffff',
                        fontSize: '1.3rem',
                        fontFamily: primaryFont,
                        fontWeight: 100,
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: '#104028',
                        },
                    },
                },
                {
                    props: { variant: 'authenticationButtonAlt' },
                    style: {
                        backgroundColor: primaryColorLight,
                        padding: '12px 16px',
                        marginTop: '0',
                        color: '#ffffff',
                        fontSize: '1.3rem',
                        fontFamily: primaryFont,
                        fontWeight: 100,
                        borderRadius: '10px',
                        textDecoration: 'none',
                        '&:hover': {
                            backgroundColor: primaryColor,
                        },
                    },
                },
            ],
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginRight: 0,
                },
                label: {
                    fontSize: '0.85rem',
                    fontFamily: secondaryFont,
                    fontWeight: 100,
                    margin: '12px 0',
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
        MuiCardMedia: {
            variants: [
                {
                    props: { variant: 'homeRemedyImage' },
                    style: {
                        width: '170px',
                        border: '1px solid #1d7147',
                        borderRadius: '5px',
                    },
                },
            ],
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
                    marginTop: 16,
                    padding: '24px 16px',
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
                    marginTop: '32px',
                    marginBottom: '32px',
                },
            },
            variants: [
                {
                    props: { variant: 'authenticationDivider' },
                    style: {
                        width: '100%',
                        margin: '32px 0 16px',
                        color: primaryColor,
                        fontFamily: primaryFont,
                        fontSize: '0.85rem',
                        '&::before, &::after': {
                            borderTop: '1px solid',
                            borderColor: primaryColor,
                        },
                    },
                },
            ],
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&::before': {
                        backgroundColor: '#ffffff',
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: secondaryColorLight,
                    borderRadius: '5px',
                },
                expandIconWrapper: {
                    color: primaryColor,
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    background:
                        'linear-gradient(180deg, rgba(234,230,180,1) 0%, rgba(234,230,180,0.8) 10%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 100%)',
                    marginTop: '-5px',
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginTop: '8px',
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
        authenticationTitle: {
            fontFamily: secondaryFont,
            color: primaryColor,
            fontWeight: 400,
            fontSize: '1.2rem',
            textTransform: 'uppercase',
        },
        authenticationLink: {
            fontFamily: primaryFont,
            color: primaryColor,
            fontSize: '1rem',
            fontWeight: 400,
            textDecoration: 'none',
        },
        fontFamily: primaryFont,
    },
});

export default theme;
