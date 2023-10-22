import type { FC } from 'react';

import { Typography } from '@mui/material';

import imgWelcome from '@assets/img/welcome.jpg';
import imgWork from '@assets/img/work.jpg';
import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/reducers/authSlice/selectors';

import {
    RootPageBannerImgStyled,
    RootPageBannerStyled,
} from './styled/RootPage.styled';

export const RootPage: FC = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    return (
        <div>
            <Typography component='h2' variant='h6'>
                Главная страница
            </Typography>

            <RootPageBannerStyled>
                {isLoggedIn ? (
                    <RootPageBannerImgStyled alt='banner' src={imgWelcome} />
                ) : (
                    <RootPageBannerImgStyled alt='banner' src={imgWork} />
                )}
            </RootPageBannerStyled>
        </div>
    );
};
