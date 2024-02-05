import React from 'react';
import { differenceInSeconds } from 'date-fns';
import Image from 'next/image';
import { Loader } from './Global/Loader';

import styled from 'styled-components';
import { ChainInfo, TextProps } from '@/types/types';
import { formatAmount } from '@/lib/utils';

interface ChainCardProps {
    chainName: string;
    chainData: ChainInfo;
}

const St = {
    Card: styled.div`
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;

        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
        ${({ theme }) => theme.media.xs} {
            width: 250px;
        }
        ${({ theme }) => theme.media.sm} {
            width: 250px;
        }
    `,

    CardImage: styled.div`
        width: 100%;
        text-align: center;
        border-radius: 8px 8px 0 0;
    `,

    CardTitle: styled.h3`
        width: 100%;
        margin-top: 16px;

        color: #4b5563; /* gray-700 */
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

    CardDetail: styled.div`
        display: flex;
        justify-content: start;
        align-items: center;
        text-align: center;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        margin-top: 4px;
        padding: 2px 0;
        /* font-size: 0.875rem; 14px */
        /* font-size: ${({ theme }) => theme.fontSize.xxxlg}; */

        color: #6b7280; /* gray-500 */
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
        gap: 5px;
    `,
    Text: styled.p<TextProps>`
        color: ${({ theme, type }) =>
            type === 'error' ? theme.colors.error : '#6b7280'}; /* 기본 gray-500, 오류시 theme.colors.error */
        text-transform: ${({ type }) => (type === 'error' ? 'none' : 'uppercase')};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
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
};

export function ChainCard({ chainName, chainData }: ChainCardProps) {
    const lastBlockTime = new Date(chainData.last_block_time);
    const timeDifference = differenceInSeconds(new Date(), lastBlockTime);

    return (
        <St.Card>
            <St.CardImage>
                <Image src={chainData.img_url} width={50} height={50} alt={chainName} />
            </St.CardImage>
            <St.CardTitle>
                {chainName}{' '}
                {isNaN(timeDifference) ? (
                    <Loader type="error" />
                ) : (
                    <>
                        {' '}
                        <Loader type="success" />
                    </>
                )}
            </St.CardTitle>
            <St.CardDetail>
                Latest Block: {formatAmount(chainData.latest_block_height)}
                {isNaN(timeDifference) ? <St.Text type="error">Not Connected</St.Text> : <> ({timeDifference}s ago)</>}
            </St.CardDetail>
            <St.CardDetail>
                Voting Power: {chainData.voting_power.toLocaleString()}
                <St.Text>{chainData.symbol}</St.Text>
            </St.CardDetail>
            <St.CardDetail>Staked: ${formatAmount(chainData.total_staked)}</St.CardDetail>
        </St.Card>
    );
}
