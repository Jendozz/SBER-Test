import { styled } from 'styled-components';

export const LoaderBackdropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

export const LoaderContainerStyled = styled.div`
    position: absolute;
    z-index: 500;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    svg {
        width: 100px;
        height: 100px;
    }
`;
