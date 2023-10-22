import { styled } from 'styled-components';

export const ProfilePageContentStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
`;

export const ProfilePageAvatarStyled = styled.img`
    width: 100%;
    height: 100%;
`;
export const ProfilePageDataStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & :not(:last-child) {
        margin-bottom: var(--margin-s);
    }
`;

export const ProfilePageDataItemStyled = styled.div`
    display: flex;

    & > :first-child {
        min-width: 100px;
        margin-right: var(--margin-m);
    }
`;
