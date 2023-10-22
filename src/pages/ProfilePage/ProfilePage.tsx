import type { FC } from 'react';

import { Chip, Typography } from '@mui/material';

import imgAvatarfrom from '@assets/img/avatar.jpg';
import { Loader } from '@components/Loader';

import { useGetUserDataQuery } from './api';
import {
    ProfilePageAvatarStyled,
    ProfilePageContentStyled,
    ProfilePageDataItemStyled,
    ProfilePageDataStyled,
} from './styled/ProfilePage.styled';

export const ProfilePage: FC = () => {
    const { data, isFetching, isError } = useGetUserDataQuery();

    return (
        <div>
            <Typography component='h2' variant='h6'>
                Профиль
            </Typography>

            {isFetching && <Loader />}
            {data && !isFetching && !isError && (
                <ProfilePageContentStyled>
                    <ProfilePageAvatarStyled alt='avatar' src={imgAvatarfrom} />
                    <ProfilePageDataStyled>
                        <ProfilePageDataItemStyled>
                            <Chip label='Имя' />
                            <Typography>{data.name}</Typography>
                        </ProfilePageDataItemStyled>
                        <ProfilePageDataItemStyled>
                            <Chip label='Фамилия' />
                            <Typography>{data.surname}</Typography>
                        </ProfilePageDataItemStyled>
                        <ProfilePageDataItemStyled>
                            <Chip label='Данные' />
                            <Typography>{data.description}</Typography>
                        </ProfilePageDataItemStyled>
                    </ProfilePageDataStyled>
                </ProfilePageContentStyled>
            )}
        </div>
    );
};
