import { useCallback } from 'react';

import { setLSItemByKey } from '@/utils/setLSItemByKey';
import { LS_IS_LOGGED_IN_KEY } from '@global/globalConstants';
import { useAppDispatch } from '@store/hooks';
import { setIsLoggedIn } from '@store/reducers/authSlice';

export const useLogout = () => {
    const dispatch = useAppDispatch();

    const handleLogout = useCallback(() => {
        setLSItemByKey(LS_IS_LOGGED_IN_KEY, false);
        dispatch(setIsLoggedIn(false));
    }, [dispatch]);

    return handleLogout;
};
