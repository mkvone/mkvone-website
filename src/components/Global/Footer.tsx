import Link from 'next/link';
import { Discord, Envelope, Telegram } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { SocialMedia } from './SocialMedia';
const St = {
    Foooter: styled.footer`
        display: block;

        background-color: #1a1a1a;
        color: white;
        padding: 2.5rem 1.25rem;

        @media (min-width: 768px) {
            padding: 2.5rem;
        }
    `,
    GridContainer: styled.div`
        display: grid;
        /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
        gap: 2rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        ${({ theme }) => theme.media.md} {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.sm || theme.media.xs} {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        ${({ theme }) => theme.media.xs} {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    `,
    Section: styled.div`
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
    `,
    SocialMediaLinks: styled.div`
        display: flex;
        gap: 2rem;
    `,
    QuickLinks: styled.ul`
        list-style: none;
        padding: 0;
        li {
            margin-bottom: 0.5rem;
        }
        a {
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
    `,
    BottomText: styled.div`
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
    `,
    SocialIcon: styled.a`
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
            color: #6b7280; /* Lighten the color on hover */
            transform: scale(1.1); /* Slightly increase the size */
        }

        & + & {
            margin-left: 1rem;
        }
    `,
};

export default function Footer() {
    return (
        <St.Foooter>
            <St.GridContainer>
                <St.Section>
                    <h3>Metta Karuna Validator</h3>
                </St.Section>

                <St.Section>
                    <h3>Quick Links</h3>
                    <St.QuickLinks>
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                    </St.QuickLinks>
                </St.Section>
                <St.Section>
                    <h3>Dashboard</h3>
                    <St.QuickLinks>
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
                    </St.QuickLinks>
                </St.Section>
                <St.Section>
                    <h3>Contact Us</h3>
                    <p>Email: wooseong@mkv.one</p>
                    <br />
                    <br />
                    <SocialMedia />
                </St.Section>
            </St.GridContainer>
            <St.BottomText>© 2024 Metta Karuna Validator. All rights reserved.</St.BottomText>
        </St.Foooter>
    );
}
