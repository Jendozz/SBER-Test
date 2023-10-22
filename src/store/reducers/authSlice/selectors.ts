import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@store/store';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (authState) => authState.isLoggedIn
);
