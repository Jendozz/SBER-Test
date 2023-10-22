import { styled } from 'styled-components';

import { LAYOUT_PADDING, MAX_CONTENT_WIDTH } from '@global/globalConstants';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 60px;
`;
export const FooterWrapper = styled.footer`
    margin: 0 auto;
    padding: 0 ${LAYOUT_PADDING};
    max-width: ${MAX_CONTENT_WIDTH};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & svg {
        height: 40px !important;
        width: 40px !important;
        
    }
`;
