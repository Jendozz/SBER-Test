import type { FC } from 'react';

import { useAuthNavigate } from '@hooks/useAuthNavigate';

import { LoginForm } from './components/LoginForm';
import {
    LoginPageContainer,
    LoginPageFormContainer,
} from './styled/LoginPage.styled';

export const LoginPage: FC = () => {
    useAuthNavigate();

    return (
        <LoginPageContainer>
            <LoginPageFormContainer>
                <LoginForm />
            </LoginPageFormContainer>
        </LoginPageContainer>
    );
};
