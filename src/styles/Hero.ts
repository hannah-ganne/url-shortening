import styled from "styled-components";
import { Column } from './GlobalStyle'

export const HeroContainer = styled.section`
    overflow-x: hidden;
    padding-bottom: 10rem;

    & h1 {
        font-size: 2.3rem;
        letter-spacing: -0.08rem;
        line-height: 2.8rem;
        color: var(--very-dark-violet);
        text-align: center;
        margin: 1rem 0;
    }

    & p {
        color: var(--grayish-violet);
        text-align: center;
        margin: 0 1.5rem;
    }

    & img {
        @media(max-width: 375px) {
            max-width: 500px;
            margin-left: 1.5rem;
    }
    }
`

export const HeroColumn = styled(Column)`

`