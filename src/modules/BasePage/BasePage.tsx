import type { FC, ReactNode } from 'react';

import { Footer } from '@modules/Footer';
import { Header } from '@modules/Header';

import { BasePageContainer, BasePageMainContainer } from './BasePage.styled';

interface BasePageProps {
    children: ReactNode;
}

export const BasePage: FC<BasePageProps> = ({ children }) => {
    return (
        <BasePageContainer>
            <Header />
            <BasePageMainContainer>{children}</BasePageMainContainer>
            <Footer />
        </BasePageContainer>
    );
};
