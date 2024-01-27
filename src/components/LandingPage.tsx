import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { TotalAssetContainer } from './TotalAssetContainer';
const changeImage = keyframes`
  0%, 50% { background-image: url('/landing1.png'); }
  50.01%, 100% { background-image: url('/landing2.png'); }
`;

const Main = styled.main`
    flex: 1;
`;

const StyledSection = styled.section`
    width: 100%;
    /* padding-top: 3rem; Tailwind: py-12 */
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding-top: 6rem; /* Tailwind: md:py-24 */
        padding-bottom: 6rem;
    }

    @media (min-width: 1024px) {
        padding-top: 8rem; /* Tailwind: lg:py-32 */
        padding-bottom: 8rem;
    }
`;

const Container = styled.div`
    padding-left: 1rem; /* Tailwind: px-4 */
    padding-right: 1rem;

    @media (min-width: 768px) {
        padding-left: 1.5rem; /* Tailwind: md:px-6 */
        padding-right: 1.5rem;
    }
`;

const Grid = styled.div`
    display: grid;
    gap: 1.5rem; /* Tailwind: gap-6 */

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 400px; /* Tailwind: lg:grid-cols-[1fr_400px] */
        gap: 3rem; /* Tailwind: lg:gap-12 */
    }

    @media (min-width: 1280px) {
        grid-template-columns: 1fr 600px; /* Tailwind: xl:grid-cols-[1fr_600px] */
    }
`;

const HeroImage = styled.div`
    margin: auto;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 1rem; /* Tailwind: rounded-xl */
    width: 100%;
    height: 550px; /* Adjust the height as needed */
    background-size: cover;
    background-position: center;
    animation: ${changeImage} 15s infinite;

    @media (min-width: 640px) {
        width: 100%; /* Tailwind: sm:w-full */
    }

    @media (min-width: 1024px) {
        order: -1; /* Tailwind: lg:order-last */
        aspect-ratio: 1; /* Tailwind: lg:aspect-square */
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem; /* Tailwind: space-y-4 */
`;

const Title = styled.h1`
    font-size: 1.875rem; /* Tailwind: text-3xl */
    font-weight: bold;
    line-height: 1; /* Tailwind: tracking-tighter */
    margin: 0;

    @media (min-width: 640px) {
        font-size: 3rem; /* Tailwind: sm:text-5xl */
    }

    @media (min-width: 1280px) {
        font-size: 4.5rem; /* Tailwind: xl:text-6xl */
    }
`;

const Description = styled.p`
    max-width: 600px;
    margin-top: 1.5rem; /* Tailwind: mt-6 */

    line-height: 1.75; /* Tailwind: leading-loose */
    font-size: 1.25rem; /* Tailwind: md:text-xl */

    @media (prefers-color-scheme: dark) {
        color: #9ca3af; /* Tailwind: dark:text-gray-400 */
    }
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
`;

export default function LandingPage() {
    return (
        <div>
            <Main>
                {/* More sections */}
                <StyledSection>
                    <Container>
                        <Grid>
                            <HeroImage />
                            <Content>
                                <div>
                                    <Title>Blockchain Validator</Title>

                                    <Description>
                                        MKV is a blockchain validator in the future of decentralization.
                                    </Description>
                                    <TotalAssetContainer />
                                </div>
                                {/* Buttons will go here */}
                            </Content>
                        </Grid>
                    </Container>
                </StyledSection>
            </Main>
            {/* Footer */}
        </div>
    );
}
