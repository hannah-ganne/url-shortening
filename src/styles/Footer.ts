import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--very-dark-violet);
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(148deg) brightness(102%) contrast(105%);
    }

    & .icons {
        margin-top: 2rem;

        & img {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(148deg) brightness(102%) contrast(105%);
            width: 1.5rem;
            margin: 0 0.5rem;
        }
    }
`

