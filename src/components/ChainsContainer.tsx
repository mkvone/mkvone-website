import styled from 'styled-components';
import { ChainCard } from './ChainCard';
import { useChainsData } from '@/hooks/useChainsData';

const St = {
    Container: styled.div`
        max-width: 7xl;
        /* margin: auto; */
        padding: 12px 16px;
        @media (min-width: 640px) {
            padding: 12px 24px;
        }
        @media (min-width: 1024px) {
            padding: 12px 32px;
        }
    `,
    Title: styled.h2`
        /* font-size: 1.875rem; 30px */

        font-weight: 800;
        line-height: 1.2;
        color: ${({ theme }) => theme.text.primary};
        margin-bottom: 16px;
        text-align: center;

        font-size: 1.875rem;
        font-weight: bold;
        line-height: 1;
        margin: 0;

        @media (min-width: 640px) {
            font-size: 3rem;
        }

        @media (min-width: 1280px) {
            font-size: 4.5rem;
        }
    `,
    CardGrid: styled.div`
        margin-top: 24px;
        display: grid;
        gap: 40px 24px;

        ${({ theme }) => theme.media.xxl} {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.xl} {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.lg} {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.md} {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.sm} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        ${({ theme }) => theme.media.xs} {
            /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `,
};

export function ChainsContainer() {
    const { isLoading, isFetching, data, error } = useChainsData();

    return (
        <St.Container>
            <St.Title>Node Service</St.Title>
            <St.CardGrid>
                {error ? (
                    <p>Oh no, there was an error</p>
                ) : (
                    data &&
                    Object.entries(data).map(([chainName, chainData]) => (
                        <ChainCard key={chainName} chainName={chainName} chainData={chainData} />
                    ))
                )}
            </St.CardGrid>
        </St.Container>
    );
}
