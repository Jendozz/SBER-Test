import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { SuspenseComponent } from '@components/SuspenseComponent/SuspenseComponent';
import { BasePage } from '@modules/BasePage';
import { LoginPage } from '@pages/LoginPage';
import { RootPage } from '@pages/RootPage';

import { LazyProfilePage } from './lazyComponents';
import { ERoutePath } from './routesConstants';

export const routes: Array<RouteObject> = [
    {
        path: ERoutePath.ROOT,
        element: <RootPage />,
    },
    {
        path: ERoutePath.LOGIN,
        element: (
            <BasePage>
                <LoginPage />
            </BasePage>
        ),
    },
    {
        path: ERoutePath.PROFILE,
        element: (
            <BasePage>
                <SuspenseComponent LazyComponent={LazyProfilePage} />
            </BasePage>
        ),
    },
];

export const rootRouter = createBrowserRouter(routes);
