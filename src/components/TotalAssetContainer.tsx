// 'use client';

// import { useGetAggregatedChainsQuery } from '@/redux/services/Api';
// import { differenceInSeconds } from 'date-fns';
// import Image from 'next/image';
// import styled from 'styled-components';

// const St = {
//     Container: styled.div`
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-evenly;
//         padding: 30px;
//     `,
//     Card: styled.div`
//         width: 300px;
//         padding: 10px;
//         background-color: #f3f4f6;
//         margin: 10px;
//         border-radius: 10px;
//         box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//     `,
//     // p-4 bg-gray-200 m-2 rounded-lg shadow-md text-center
//     CardImgContainer: styled.div`
//         text-align: center;
//     `,
//     CardTitle: styled.div`
//         text-align: center;
//         font-weight: ${({ theme }) => theme.fontWeight.bold};
//         font-size: ${({ theme }) => theme.fontSize.lg};
//         ${({ theme }) => theme.media.xxl} {
//             font-size: ${({ theme }) => theme.fontSize.xxxlg};
//         }
//         ${({ theme }) => theme.media.xl} {
//             font-size: ${({ theme }) => theme.fontSize.xxlg};
//         }
//         ${({ theme }) => theme.media.lg} {
//             font-size: ${({ theme }) => theme.fontSize.xlg};
//         }
//         padding-bottom: 10px;
//     `,
//     CardContent: styled.div`
//         text-align: center;
//         padding: 5px 5px;

//         font-size: ${({ theme }) => theme.fontSize.md};
//         ${({ theme }) => theme.media.xxl} {
//             font-size: ${({ theme }) => theme.fontSize.xxlg};
//         }
//         ${({ theme }) => theme.media.xl} {
//             font-size: ${({ theme }) => theme.fontSize.xlg};
//         }
//         ${({ theme }) => theme.media.lg} {
//             font-size: ${({ theme }) => theme.fontSize.lg};
//         }
//     `,
// };
// export function TotalAssetContainer() {
//     const { isLoading, isFetching, data, error } = useGetAggregatedChainsQuery(null);
//     const chainsCount = data?.ChainsCount;
//     const totalStakedSum = data?.totalStakedSum;
//     return (
//         <>
//             {error ? (
//                 <p>Oh no, there was an error</p>
//             ) : data ? (
//                 <St.Container>
//                     <Card title="Active Validators">{chainsCount} Validators</Card>
//                     <Card title="Total Staked Assets">$ {totalStakedSum?.toFixed(0)}</Card>
//                 </St.Container>
//             ) : null}
//         </>
//     );
// }
// const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
//     return (
//         <St.Card>
//             <St.CardTitle>{title}</St.CardTitle>
//             <St.CardContent>{children}</St.CardContent>
//         </St.Card>
//     );
// };
import { formatAmount } from '@/lib/utils';
import { useGetAggregatedChainsQuery } from '@/redux/services/Api';
import styled from 'styled-components';

const St = {
    Container: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 30px;
    `,
    Card: styled.div`
        width: 300px;
        padding: 10px;
        background-color: #f3f4f6;
        margin: 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    `,
    CardImgContainer: styled.div`
        text-align: center;
    `,
    CardTitle: styled.div`
        text-align: center;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
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
        padding-bottom: 10px;
    `,
    CardContent: styled.div`
        text-align: center;
        padding: 5px 5px;
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

export function TotalAssetContainer() {
    const { isLoading, isFetching, data, error } = useGetAggregatedChainsQuery(null);
    const chainsCount = data?.ChainsCount;
    const totalStakedSum = data ? Number(data.totalStakedSum) : undefined;

    return (
        <>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : data ? (
                <St.Container>
                    <Card title="Active Validators" count={chainsCount} />
                    <Card title="Total Staked Assets" amount={totalStakedSum?.toFixed(0)} />
                </St.Container>
            ) : null}
        </>
    );
}

const Card = ({ title, count, amount }: { title: string; count?: number; amount?: string | undefined }) => {
    return (
        <St.Card>
            <St.CardTitle>{title}</St.CardTitle>
            <St.CardContent>
                <St.CardContent>
                    {count ? `${count} Validators` : amount !== undefined ? `$ ${formatAmount(amount)}` : ''}
                </St.CardContent>
            </St.CardContent>
        </St.Card>
    );
};
