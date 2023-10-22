import { RouterProvider } from 'react-router-dom';

import { Loader } from './components/Loader';
import { rootRouter } from './routes/rootRouter';

function App() {
    return <RouterProvider fallbackElement={<Loader />} router={rootRouter} />;
}

export default App;
