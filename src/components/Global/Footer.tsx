import Link from 'next/link';
import { Discord, Envelope, Telegram } from 'react-bootstrap-icons';
import styled from 'styled-components';

const Foooter = styled.footer`
    /* position: relative;
    transform: translateY(0%); */
    /* padding-top: 10px; */
    /* position: relative;
    
    transform: translatY(-100%); */
    display: block;
    width: 100%;
    background-color: #1f2937;
    color: white;
    padding: 2.5rem 1.25rem; /* py-10 px-5 */

    @media (min-width: 768px) {
        padding: 2.5rem; /* md:px-10 */
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

const Section = styled.div`
    h3 {
        font-size: 1.125rem; /* text-lg */
        font-weight: 600; /* font-semibold */
        margin-bottom: 0.5rem;
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
    }
    p {
        font-size: 0.875rem; /* text-sm */
        font-size: ${({ theme }) => theme.fontSize.md};
        ${({ theme }) => theme.media.xxl} {
            font-size: ${({ theme }) => theme.fontSize.xxlg};
        }
        ${({ theme }) => theme.media.xl} {
            font-size: ${({ theme }) => theme.fontSize.xlg};
        }
        ${({ theme }) => theme.media.lg} {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }
    }
`;

const SocialMediaLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

const QuickLinks = styled.ul`
    list-style: none;
    padding: 0;
    li {
        margin-bottom: 0.5rem;
    }
    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        font-size: ${({ theme }) => theme.fontSize.md};
        ${({ theme }) => theme.media.xxl} {
            font-size: ${({ theme }) => theme.fontSize.xxlg};
        }
        ${({ theme }) => theme.media.xl} {
            font-size: ${({ theme }) => theme.fontSize.xlg};
        }
        ${({ theme }) => theme.media.lg} {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }
    }
`;

const BottomText = styled.div`
    margin-top: 2.5rem;
    border-top: 1px solid #374151; /* border-gray-700 */
    padding-top: 1.25rem; /* pt-5 */
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    ${({ theme }) => theme.media.xxl} {
        font-size: ${({ theme }) => theme.fontSize.xxlg};
    }
    ${({ theme }) => theme.media.xl} {
        font-size: ${({ theme }) => theme.fontSize.xlg};
    }
    ${({ theme }) => theme.media.lg} {
        font-size: ${({ theme }) => theme.fontSize.lg};
    }
`;
const SocialIcon = styled.a`
    color: white;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #6b7280; /* Lighten the color on hover */
        transform: scale(1.1); /* Slightly increase the size */
    }

    & + & {
        margin-left: 1rem;
    }
`;
export default function Footer() {
    return (
        <Foooter>
            <GridContainer>
                <Section>
                    <h3>Metta Karuna Validator</h3>
                    <p>
                        {/* We are a leading company in the industry, committed to providing excellent services and creating
                        long-term value for our customers. */}
                    </p>
                </Section>

                <Section>
                    <h3>Quick Links</h3>
                    <QuickLinks>
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                    </QuickLinks>
                </Section>
                <Section>
                    <h3>Dashboard</h3>
                    <QuickLinks>
                        <li>
                            <Link href="https://monitor.mkv.one" target="_blank">
                                Grafana
                            </Link>
                        </li>
                        <li>
                            <Link href="https://tenderduty.mkv.one" target="_blank">
                                Tenderduty
                            </Link>
                        </li>
                        <li>
                            <Link href="https://explorer.mkv.one" target="_blank">
                                Explorer
                            </Link>
                        </li>
                    </QuickLinks>
                </Section>
                <Section>
                    <h3>Contact Us</h3>
                    <p>Email: wooseong@mkv.one</p>
                    <br />
                    <br />
                    <SocialMediaLinks>
                        <SocialIcon href="https://t.me/mkv_one" target="_blank">
                            <Telegram size={24} />
                        </SocialIcon>
                        <SocialIcon href="https://discord.gg/jbEEQt9m3y" target="_blank">
                            <Discord size={24} />
                        </SocialIcon>
                        <SocialIcon href="mailto:wooseong@mkv.one" target="_blank">
                            <Envelope size={24} />
                        </SocialIcon>
                    </SocialMediaLinks>
                </Section>
            </GridContainer>
            <BottomText>© 2024 Metta Karuna Validator. All rights reserved.</BottomText>
        </Foooter>
    );
}
