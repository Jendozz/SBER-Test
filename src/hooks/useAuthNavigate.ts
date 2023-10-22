import { useLayoutEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ERoutePath } from '@/routes/routesConstants';
import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/reducers/authSlice/selectors';

export const useAuthNavigate = () => {
    const navigate = useNavigate();

    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    useLayoutEffect(() => {
        if (!isLoggedIn) {
            return;
        }
        navigate(ERoutePath.PROFILE, { replace: true });
    }, [isLoggedIn, navigate]);
};
