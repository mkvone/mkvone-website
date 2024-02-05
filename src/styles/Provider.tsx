import { ThemeProvider } from 'styled-components';
import theme, { darkTheme, lightTheme } from '@/styles/theme';
import StyledComponentsRegistry from '@/lib/registry';

export const Providers = (props: React.PropsWithChildren) => {
    const theme = lightTheme;

    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
};

// export default Providers;
