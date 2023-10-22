import { styled } from 'styled-components';

import { globalColors } from '@global/globalColors';

export const LoginPageContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex: 1;
    padding-top: 20%;
`;

export const LoginPageFormContainer = styled.div`
    padding: var(--padding-xl);
    border: 1px solid ${globalColors.borders.dark};
    border-radius: 12px;
`;
