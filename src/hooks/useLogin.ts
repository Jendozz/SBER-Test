import { useCallback } from 'react';

import { setLSItemByKey } from '@/utils/setLSItemByKey';
import { LS_IS_LOGGED_IN_KEY } from '@global/globalConstants';
import { useAppDispatch } from '@store/hooks';
import { setIsLoggedIn } from '@store/reducers/authSlice';

export const useLogin = () => {
    const dispatch = useAppDispatch();

    const handleLogin = useCallback(() => {
        setLSItemByKey(LS_IS_LOGGED_IN_KEY, true);
        dispatch(setIsLoggedIn(true));
    }, [dispatch]);

    return handleLogin;
};
