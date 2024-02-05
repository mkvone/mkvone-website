import { useGetEndpointsQuery } from '@/redux/services/Api';
import styled from 'styled-components';

const St = {
    Container: styled.div`
        margin-top: 5%;

        padding: 12px 16px;
        @media (min-width: 640px) {
            padding: 12px 24px;
        }
        @media (min-width: 1024px) {
            padding: 12px 32px;
        }
    `,
    Title: styled.h2`
        font-weight: 800;
        line-height: 1.2;
        color: ${({ theme }) => theme.text.primary};
        margin-bottom: 16px;
        text-align: center;

        font-size: 1.875rem;
        font-weight: bold;
        line-height: 1;

        @media (min-width: 640px) {
            font-size: 3rem;
        }

        @media (min-width: 1280px) {
            font-size: 4.5rem;
        }
    `,
    StyledTable: styled.table`
        margin-top: 2%;
        width: 100%;
        border-collapse: collapse;

        text-align: left;

        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);

        th,
        td {
            padding: 8px;
            border: 1px solid #ddd;
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
        background-color: #f9f9f9;
        tr:nth-child(even) {
            /* background-color: #f9f9f9; */
        }
        tr:nth-child(odd) {
            /* background-color: gray; */
            color: black;
        }
        th {
            background-color: gray;
            text-align: center;
        }
        a {
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
        @media (max-width: 700px) {
            display: none;
        }
    `,
};

const EndpointsTable = () => {
    const { data: endpointsData, isLoading, isError } = useGetEndpointsQuery(null);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !endpointsData) return <div>Error occurred!</div>;

    return (
        <St.Container>
            <St.Title>Public Endpoints</St.Title>
            <St.StyledTable>
                <thead>
                    <tr>
                        <th>Network</th>
                        <th>API</th>
                        <th>RPC</th>
                        <th>GRPC</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(endpointsData).map(([network, { api, rpc, grpc }]) => (
                        <EndpointRow key={network} network={network} api={api} rpc={rpc} grpc={grpc} />
                    ))}
                </tbody>
            </St.StyledTable>
        </St.Container>
    );
};

const EndpointRow = ({ network, api, rpc, grpc }: { network: string; api: string; rpc: string; grpc: string }) => {
    return (
        <tr>
            <td>{network}</td>
            <td>
                <a href={api} target="_blank" rel="noopener noreferrer">
                    {api}
                </a>
            </td>
            <td>
                <a href={rpc} target="_blank" rel="noopener noreferrer">
                    {rpc}
                </a>
            </td>
            <td>{grpc}</td>
        </tr>
    );
};

export default EndpointsTable;
