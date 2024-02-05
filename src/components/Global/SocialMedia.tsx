import { Discord, Envelope, Telegram } from 'react-bootstrap-icons';
import styled from 'styled-components';

const St = {
    SocialMediaLinks: styled.div`
        display: flex;
        gap: 2rem;
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

export const SocialMedia = () => (
    <St.SocialMediaLinks>
        <St.SocialIcon href="https://t.me/mkv_one" target="_blank">
            <Telegram size={24} />
        </St.SocialIcon>
        <St.SocialIcon href="https://discord.gg/jbEEQt9m3y" target="_blank">
            <Discord size={24} />
        </St.SocialIcon>
        <St.SocialIcon href="mailto:wooseong@mkv.one" target="_blank">
            <Envelope size={24} />
        </St.SocialIcon>
    </St.SocialMediaLinks>
);
