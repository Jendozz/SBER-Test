import { useCallback } from 'react';

import { useGetAuthDataQuery } from '@/api/rootApi';

import type { ILoginFormValues } from '../types';

export const useValidateUserAuth = () => {
    const { data, isFetching } = useGetAuthDataQuery();
    const handleValidate = useCallback(
        (userCred: ILoginFormValues) => {
            if (
                data &&
                userCred.login === data.login &&
                userCred.password === data.password
            ) {
                return true;
            }
            return false;
        },
        [data]
    );

    return { handleValidate, isFetching };
};
