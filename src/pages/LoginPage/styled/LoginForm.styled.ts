import { styled } from 'styled-components';

export const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > :not(:last-child) {
        margin-bottom: var(--margin-xl);
    }
`;

export const LoginFormFieldsStyled = styled.div`
    display: flex;
    flex-direction: column;
    & > :not(:last-child) {
        margin-bottom: var(--margin-m);
    }

    & > .MuiFormControl-root {
        padding: var(--padding-s);
    }

    & .MuiFormHelperText-root {
        position: absolute;
        top: calc(100% - var(--padding-s));
    }
`;