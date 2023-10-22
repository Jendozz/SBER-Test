import type { FC, ReactNode } from 'react';

import { Footer } from '@modules/Footer';
import { Header } from '@modules/Header';

import { BasePageContainer, BasePageMainContainer } from './BasePage.styled';

interface IBasePageProps {
    children: ReactNode;
}

export const BasePage: FC<IBasePageProps> = ({ children }) => {
    return (
        <BasePageContainer>
            <Header />
            <BasePageMainContainer>{children}</BasePageMainContainer>
            <Footer />
        </BasePageContainer>
    );
};
