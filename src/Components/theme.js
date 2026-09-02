import { createTheme } from '@mui/material/styles';

/**
 * Système de design centralisé.
 * Toute la palette / typo / radius du portfolio passe par ici,
 * pour éviter la dérive qu'on avait entre Fichier.css (light) et
 * Navbar/Footer (dark) codés en dur.
 */

export const gradients = {
    primary: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
    subtle: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, rgba(34,211,238,0) 100%)',
    text: 'linear-gradient(135deg, #e4e4f0 0%, #a5a5d8 100%)',
};

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#08080f',
            paper: '#100f1c',
        },
        primary: { main: '#6366f1', light: '#818cf8', contrastText: '#08080f' },
        secondary: { main: '#22d3ee', contrastText: '#08080f' },
        success: { main: '#3fb950' },
        text: {
            primary: '#e8e8f4',
            secondary: '#8b8b9e',
        },
        divider: 'rgba(148,148,255,0.10)',
    },
    typography: {
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        h1: { fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1 },
        h2: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 },
        h3: { fontWeight: 600, letterSpacing: '-0.01em' },
        body1: { lineHeight: 1.7 },
        button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: { borderRadius: 18 },
    spacing: 8,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: { scrollBehavior: 'smooth' },
                body: { backgroundColor: '#08080f' },
                '::selection': { background: 'rgba(99,102,241,0.35)' },
            },
        },
        MuiPaper: {
            styleOverrides: { root: { backgroundImage: 'none' } },
        },
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 12, padding: '10px 22px' },
            },
        },
        MuiTextField: {
            defaultProps: { variant: 'outlined' },
        },
    },
});

export default theme;
