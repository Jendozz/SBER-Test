import { rootApi } from '@/api/rootApi';

import type { TMockDBUserResponse } from './types';

export const profileApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query<TMockDBUserResponse, void>({
            query: () => '/user.json',
        }),
    }),
});

export const { useGetUserDataQuery } = profileApi;
