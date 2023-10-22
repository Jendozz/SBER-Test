import { css, styled } from 'styled-components';

import { globalColors } from '@global/globalColors';
import { MAX_CONTENT_WIDTH, LAYOUT_PADDING } from '@global/globalConstants';

interface IHeaderContainerProps {
    $isLoggedIn?: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainerProps>`
    width: 100%;
    height: 60px;
    background-color: ${(props) =>
        props.$isLoggedIn ? globalColors.primary : globalColors.default};
    && a {
        color: ${(props) =>
            props.$isLoggedIn
                ? globalColors.fonts.light
                : globalColors.fonts.dark};
    }

    ${(props) => {
        if (!props.$isLoggedIn) {
            return css`
                border-bottom: 1px solid ${globalColors.borders.dark};
            `;
        }
        return undefined;
    }}

    & svg path {
        fill: ${(props) =>
            props.$isLoggedIn ? globalColors.default : globalColors.primary};
    }
`;

export const HeaderWrapper = styled.div`
    margin: 0 auto;
    padding: 0 ${LAYOUT_PADDING};
    max-width: ${MAX_CONTENT_WIDTH};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogoContainer = styled.div`
    width: 180px;
    & > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        display: flex;
        text-decoration: none;
        color: ${globalColors.fonts.dark};
    }
`;

export const HeaderNavContainer = styled.ul`
    padding: 0;
    margin: var(--margin-xl);
    list-style: none;
    display: flex;
    flex: 1;
    justify-self: flex-start;
    & :not(:last-child) {
        margin-right: var(--margin-m);
    }
    & a {
        text-decoration: none;
    }
`;
