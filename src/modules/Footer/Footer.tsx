import type { FC } from 'react';

import { Button } from '@mui/material';

import GHSvg from '@assets/icons/github-mark.svg?react';

import { FooterContainer, FooterWrapper } from './Footer.styled';

export const Footer: FC = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Button
                    endIcon={<GHSvg />}
                    href='https://github.com/Jendozz/SBER-Test'
                    target='_blank'
                >
                    created by Evgeniy Naumov
                </Button>
            </FooterWrapper>
        </FooterContainer>
    );
};
