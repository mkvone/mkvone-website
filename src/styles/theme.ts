import { css } from 'styled-components';

const media = {
    xs: '@media (max-width: 400px)',
    sm: '@media (max-width: 600px)',
    md: '@media (max-width: 900px)',
    lg: '@media (max-width: 1280px)',
    xl: '@media (max-width: 1440px)',
    xxl: '@media (min-width: 1441px)',
};

const fontSize = {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xlg: '1.75rem',
    xxlg: '2rem',
    xxxlg: '2.25rem',
    xxxxl: '2.5rem',
    xxxxxl: '2.75rem',
    xxxxxxl: '3rem',
};
const fontWeight = {
    light: 300,
    normal: 400,
    bold: 700,
};
const light = {
    bg: {
        // primary: '#eff0f5',
        primary: '#F3F3F3',
        secondary: '#ffffff',
        inset: '#e2e4e8',
        input: 'rgba(65,67,78,0.12)',
    },
    text: {
        primary: '#050505',
        secondary: '#2f3037',
        tertiary: '#525560',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff',
    },
    // ...
};

const dark = {
    bg: {
        primary: '#050505',
        secondary: '#111111',
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
    },
    text: {
        primary: '#fbfbfc',
        secondary: '#e3e4e8',
        tertiary: '#a9abb6',
        quarternary: '#6c6f7e',
        placeholder: 'rgba(145,148,161,0.5)',
        onPrimary: '#050505',
    },
    // ...
};

const theme = {
    fontSize,
    fontWeight,
    media,
    colors: {
        colorName1: '#aabbcc',
        colorName2: 'hsla(50, 60%, 70%, 0.5)',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
    },
};
export const lightTheme = { ...theme, ...light };
export const darkTheme = { ...theme, ...dark };

export default theme;
