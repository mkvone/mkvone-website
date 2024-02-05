import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { TotalAssetContainer } from './TotalAssetContainer';

const St = {
    Container: styled.div`
        display: flex;
        flex: 1;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-top: 6rem;

        @media (min-width: 768px) {
            padding-top: 6rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        @media (min-width: 1024px) {
            padding-top: 8rem; /* Tailwind: lg:py-32 */
            padding-bottom: 8rem;
        }
    `,

    Content: styled.div`
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    `,
    Title: styled.h1`
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
    Description: styled.p`
        /* max-width: 600px; */
        margin-top: 1.5rem;

        line-height: 1.75;
        font-size: 1.25rem;

        font-size: ${({ theme }) => theme.fontSize.lg};
        ${({ theme }) => theme.media.xxl} {
            font-size: ${({ theme }) => theme.fontSize.xxxlg};
        }
        ${({ theme }) => theme.media.xl} {
            font-size: ${({ theme }) => theme.fontSize.xxlg};
        }
        ${({ theme }) => theme.media.lg} {
            font-size: ${({ theme }) => theme.fontSize.xlg};
        }
    `,
};

export default function LandingPage() {
    return (
        <St.Container>
            <St.Content>
                <St.Title>Blockchain Validator</St.Title>

                <St.Description>MKV is a blockchain validator in the future of decentralization.</St.Description>
                <TotalAssetContainer />
            </St.Content>
        </St.Container>
    );
}
