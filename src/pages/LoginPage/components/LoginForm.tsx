import { useState, type ChangeEvent, type FC } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { replaceSpaces } from '@/utils/replaceSpaces';
import { useLogin } from '@hooks/useLogin';

import { initialLoginFormValues } from '../constants';
import { useValidateUserAuth } from '../hooks/useValidateUserAuth';
import {
    LoginFormFieldsStyled,
    LoginFormStyled,
} from '../styled/LoginForm.styled';
import type { LoginFormValues } from '../types';
import { setLoginFormSchema } from '../validation';

export const LoginForm: FC = () => {
    const [isError, setIsError] = useState(false);

    const handleLogin = useLogin();

    const { handleValidate, isFetching } = useValidateUserAuth();

    const handleSubmitLogin = (values: LoginFormValues) => {
        const isValid = handleValidate(values);
        if (isValid) {
            handleLogin();
        } else {
            setIsError(true);
        }
    };

    const { values, touched, errors, handleChange, handleSubmit } =
        useFormik<LoginFormValues>({
            initialValues: initialLoginFormValues,
            validationSchema: setLoginFormSchema(),
            onSubmit: handleSubmitLogin,
        });

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <LoginFormFieldsStyled>
                <TextField
                    error={(touched.login && !!errors.login) || isError}
                    helperText={touched.login && errors.login}
                    name='login'
                    placeholder='Логин'
                    value={values.login}
                    variant='standard'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setIsError(false);
                        return handleChange('login')(
                            replaceSpaces(event.target.value)
                        );
                    }}
                />

                <TextField
                    error={(touched.password && !!errors.password) || isError}
                    helperText={touched.password && errors.password}
                    name='password'
                    placeholder='Пароль'
                    type='password'
                    value={values.password}
                    variant='standard'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setIsError(false);
                        return handleChange('password')(
                            replaceSpaces(event.target.value)
                        );
                    }}
                />
            </LoginFormFieldsStyled>
            <Button
                fullWidth
                disabled={isFetching}
                type='submit'
                variant='contained'
            >
                Войти
            </Button>
            {isError && (
                <Typography color='error' variant='body2'>
                    Неверный логин или пароль
                </Typography>
            )}
        </LoginFormStyled>
    );
};
