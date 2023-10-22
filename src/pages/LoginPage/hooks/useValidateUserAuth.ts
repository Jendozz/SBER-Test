import { useCallback } from 'react';

import { useGetAuthDataQuery } from '@/api/rootApi';

import type { LoginFormValues } from '../types';

export const useValidateUserAuth = () => {
    const { data, isFetching } = useGetAuthDataQuery();
    const handleValidate = useCallback(
        (userCred: LoginFormValues) => {
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
