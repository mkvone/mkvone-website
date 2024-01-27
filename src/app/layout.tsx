'use client';
import Header from '@/components/Global/Header';

import GlobalStyles from '@/styles/GlobalStyles';
import { Providers as ThemeProviders } from '@/styles/Provider';
import { Providers as ReduxProviders } from '@/redux/Provider';
import Footer from '@/components/Global/Footer';
import styled from 'styled-components';

const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ReduxProviders>
                    <ThemeProviders>
                        <GlobalStyles />

                        <Header />
                        {children}

                        <Footer />
                    </ThemeProviders>
                </ReduxProviders>
            </body>
        </html>
    );
}
