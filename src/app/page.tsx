'use client';
import { ChainsContainer } from '@/components/ChainsContainer';
import EndpointsTable from '@/components/EndpointsContainer';
import LandingPage from '@/components/LandingPage';
import styled from 'styled-components';

const St = {
    Container: styled.div`
        padding: 0 10%;
        min-height: 100vh;
    `,
};

export default function Home() {
    return (
        <>
            {' '}
            <LandingPage />
            <St.Container>
                <ChainsContainer />
                <EndpointsTable />
            </St.Container>
        </>
    );
}
