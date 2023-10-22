import type { FC } from 'react';

import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ERoutePath } from '@/routes/routesConstants';

import { HeaderNavContainer } from './Header.styled';
import { getNavItemFontWeightByRoute } from './utils/getNavItemFontWeightByRoute';

export const HeaderNav: FC = () => {
    return (
        <HeaderNavContainer>
            <li>
                <Link to={ERoutePath.ROOT}>
                    <Typography
                        fontWeight={getNavItemFontWeightByRoute(
                            ERoutePath.ROOT
                        )}
                    >
                        Главная
                    </Typography>
                </Link>
            </li>
            <li>
                <Link to={ERoutePath.PROFILE}>
                    <Typography
                        fontWeight={getNavItemFontWeightByRoute(
                            ERoutePath.PROFILE
                        )}
                    >
                        Профиль
                    </Typography>
                </Link>
            </li>
        </HeaderNavContainer>
    );
};
