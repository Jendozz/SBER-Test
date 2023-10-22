import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TMockDBAuthResponse } from './types';

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getAuthData: builder.query<TMockDBAuthResponse, void>({
            query: () => '/auth.json',
        }),
    }),
});

export const { useGetAuthDataQuery } = rootApi;
