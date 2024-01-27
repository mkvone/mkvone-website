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

export default theme;
