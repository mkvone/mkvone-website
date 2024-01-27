'use client';
import { ChainsContainer } from '@/components/ChainsContainer';
import EndpointsTable from '@/components/EndpointsContainer';
import LandingPage from '@/components/LandingPage';
import styled from 'styled-components';

const St = {
    Container: styled.div`
        padding: 5% 10%;
        min-height: 100vh; // height 대신 min-height 사용
    `,
};

export default function Home() {
    return (
        <>
            {' '}
            <St.Container>
                <LandingPage />
                <ChainsContainer />
                <EndpointsTable />
            </St.Container>
        </>
    );
}
