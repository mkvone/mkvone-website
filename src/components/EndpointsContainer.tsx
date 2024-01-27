import { useGetEndpointsQuery } from '@/redux/services/Api';
import styled from 'styled-components';

const StyledTable = styled.table`
    margin-top: 5%;
    width: 100%;
    border-collapse: collapse;
    text-align: left;

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

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
    tr:nth-child(odd) {
        background-color: gray;
        color: black;
    }
    th {
        background-color: #3a5ea7;
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
`;

const EndpointsTable = () => {
    const { data: endpointsData, isLoading, isError } = useGetEndpointsQuery(null);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !endpointsData) return <div>Error occurred!</div>;

    return (
        <StyledTable>
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
        </StyledTable>
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
