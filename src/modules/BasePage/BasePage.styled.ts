import { styled } from 'styled-components';

import { LAYOUT_PADDING, MAX_CONTENT_WIDTH } from '@global/globalConstants';

export const BasePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
export const BasePageMainContainer = styled.main`
    flex: 1;
    display: flex;
    align-self: center;
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    padding: ${LAYOUT_PADDING};

`;
