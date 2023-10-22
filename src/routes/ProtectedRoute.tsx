import { type FC, type ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/reducers/authSlice/selectors';

import { ERoutePath } from './routesConstants';

interface IProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate replace to={ERoutePath.LOGIN} />;
    }
    return <>{children}</>;
};
