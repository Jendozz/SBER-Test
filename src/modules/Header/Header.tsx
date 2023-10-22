import type { FC } from 'react';

import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ERoutePath } from '@/routes/routesConstants';
import Logo from '@assets/icons/react.svg?react';
import { useLogout } from '@hooks/useLogout';
import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/reducers/authSlice/selectors';

import {
    HeaderContainer,
    HeaderLogoContainer,
    HeaderWrapper,
} from './Header.styled';
import { HeaderNav } from './HeaderNav';

export const Header: FC = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const handleLogout = useLogout();
    return (
        <HeaderContainer $isLoggedIn={isLoggedIn}>
            <HeaderWrapper>
                <HeaderLogoContainer>
                    <Link to={ERoutePath.ROOT}>
                        <Logo />
                        <Typography component='h1' variant='h5'>
                            SBER-Test
                        </Typography>
                    </Link>
                </HeaderLogoContainer>
                <HeaderNav />
                {isLoggedIn && (
                    <Button
                        color='secondary'
                        variant='outlined'
                        onClick={handleLogout}
                    >
                        Выйти
                    </Button>
                )}
            </HeaderWrapper>
        </HeaderContainer>
    );
};
