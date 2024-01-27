import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    id: number;
    name: string;
    email: number;
};
type ChainInfo = {
    Chain_Id: string;
    'Validator Address': string;
    catching_up: boolean;
    latest_block_height: number;
    last_block_time: string;
    voting_power: number;
    coin_price: number;
    total_staked: number;
    img_url: string;
    symbol: string;
};
type AggregatedChainInfo = {
    ChainsCount: number;
    totalStakedSum: number;
};
type Endpoint = {
    network: string;
    rpc: string;
    api: string;
    grpc: string;
};

type EndpointsInfo = {
    [key: string]: Endpoint;
};
export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend.mkv.one/',
    }),
    endpoints: (builder) => ({
        getChainsData: builder.query<ChainInfo[], null>({
            query: () => 'chains',
        }),
        getAggregatedChains: builder.query<AggregatedChainInfo, null>({
            query: () => 'aggregated-chains',
        }),
        getEndpoints: builder.query<EndpointsInfo, null>({
            query: () => 'endpoints',
        }),
    }),
});

export const { useGetChainsDataQuery, useGetAggregatedChainsQuery, useGetEndpointsQuery } = userApi;
