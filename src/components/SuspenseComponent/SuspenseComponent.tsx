import type { FC, LazyExoticComponent} from 'react';
import { Suspense } from 'react';

import { Loader } from '@components/Loader';

interface ISuspenseComponentProps {
    LazyComponent: LazyExoticComponent<FC>;
}

export const SuspenseComponent: FC<ISuspenseComponentProps> = ({
    LazyComponent,
}) => {
    return (
        <Suspense fallback={<Loader />}>
            <LazyComponent />
        </Suspense>
    );
};
