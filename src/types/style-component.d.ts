import theme, { lightTheme, darkTheme } from '@/styles/theme';
import 'styled-components';

type Theme = typeof theme;
type ThemeExtension = {
    bg: {
        primary: string;
        secondary: string;
        inset: string;
        input: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quarternary: string;
        placeholder: string;
        onPrimary: string;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme, ThemeExtension {}
}
