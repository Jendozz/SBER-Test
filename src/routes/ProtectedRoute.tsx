import { useLayoutEffect, type FC, type ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/reducers/authSlice/selectors';

import { ERoutePath } from './routesConstants';

interface IProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (!isLoggedIn) {
            navigate(ERoutePath.LOGIN, { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return <>{children}</>;
};
