// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5', // Darker shade of blue
        },
        secondary: {
            main: '#f50057', // Accent color similar to pink
        },
        background: {
            default: '#f4f6f8', // Light gray background color
            paper: '#ffffff', // White for cards and other surfaces
        },
        text: {
            primary: '#333333', // Dark gray for primary text
            secondary: '#666666', // Medium gray for secondary text
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h6: {
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#333333', // Ensure title text is visible
        },
        body1: {
            fontSize: '1rem',
            color: '#555555',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            color: '#777777',
            lineHeight: 1.5,
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1.15rem',
            color: '#333333', // Subtitles and labels
        },
    },
    shape: {
        borderRadius: 8, // Slightly rounded corners
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#3f51b5',
                    boxShadow: 'none',
                    borderBottom: '1px solid #dddddd', // Subtle border below AppBar
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '64px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '16px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
                    borderRadius: '8px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#333333',
                },
            },
        },
    },
});

export default theme;
