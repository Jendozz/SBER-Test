import { lazy } from 'react';

export const LazyProfilePage = lazy(() =>
    import('@pages/ProfilePage').then((module) => ({
        default: module.ProfilePage,
    }))
);
