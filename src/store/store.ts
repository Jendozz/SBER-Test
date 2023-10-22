import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { rootApi } from '@/api/rootApi';
import authReducer from '@store/reducers/authSlice';

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([rootApi.middleware]),
    devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
