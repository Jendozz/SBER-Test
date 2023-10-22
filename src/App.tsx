import { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';

import { LS_IS_LOGGED_IN_KEY } from '@global/globalConstants';
import { useAppDispatch } from '@store/hooks';
import { setIsLoggedIn } from '@store/reducers/authSlice';

import { Loader } from './components/Loader';
import { rootRouter } from './routes/rootRouter';
import { getLsItemByKey } from './utils/getLSItemByKey';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const item = getLsItemByKey<boolean>(LS_IS_LOGGED_IN_KEY);
        dispatch(setIsLoggedIn(!!item));
    }, [dispatch]);

    return <RouterProvider fallbackElement={<Loader />} router={rootRouter} />;
}

export default App;
