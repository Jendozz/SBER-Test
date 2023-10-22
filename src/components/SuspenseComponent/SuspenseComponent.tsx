import type { FC, LazyExoticComponent} from 'react';
import { Suspense } from 'react';

import { Loader } from '@components/Loader';

interface SuspenseComponentProps {
    LazyComponent: LazyExoticComponent<FC>;
}

export const SuspenseComponent: FC<SuspenseComponentProps> = ({
    LazyComponent,
}) => {
    return (
        <Suspense fallback={<Loader />}>
            <LazyComponent />
        </Suspense>
    );
};
