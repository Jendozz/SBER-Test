import type { FC } from 'react';

import LoaderSVG from '@assets/icons/loading.svg?react';

import { LoaderBackdropStyled, LoaderContainerStyled } from './Loader.styled';

export const Loader: FC = () => {
    return (
        <LoaderBackdropStyled>
            <LoaderContainerStyled>
                <LoaderSVG />
            </LoaderContainerStyled>
        </LoaderBackdropStyled>
    );
};
