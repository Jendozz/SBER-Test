import { lazy } from 'react';

export const LazyRootPage = lazy(() =>
    import('@pages/RootPage').then((module) => ({
        default: module.RootPage,
    }))
);
export const LazyProfilePage = lazy(() =>
    import('@pages/ProfilePage').then((module) => ({
        default: module.ProfilePage,
    }))
);
