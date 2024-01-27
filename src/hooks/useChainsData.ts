import { useGetChainsDataQuery } from '@/redux/services/Api';

export function useChainsData() {
    const { isLoading, isFetching, data, error } = useGetChainsDataQuery(null, {
        pollingInterval: 1000,
    });

    return { isLoading, isFetching, data, error };
}
