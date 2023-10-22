import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { SuspenseComponent } from '@components/SuspenseComponent/SuspenseComponent';
import { BasePage } from '@modules/BasePage';
import { LoginPage } from '@pages/LoginPage';

import { LazyProfilePage, LazyRootPage } from './lazyComponents';
import { ProtectedRoute } from './ProtectedRoute';
import { ERoutePath } from './routesConstants';

export const routes: Array<RouteObject> = [
    {
        path: ERoutePath.LOGIN,
        element: (
            <BasePage>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: ERoutePath.ROOT,

        element: (
            <BasePage>
                <SuspenseComponent LazyComponent={LazyRootPage} />
            </BasePage>
        ),
    },
    {
        path: ERoutePath.PROFILE,
        element: (
            <ProtectedRoute>
                <BasePage>
                    <SuspenseComponent LazyComponent={LazyProfilePage} />
                </BasePage>
            </ProtectedRoute>
        ),
    },
];

export const rootRouter = createBrowserRouter(routes);
