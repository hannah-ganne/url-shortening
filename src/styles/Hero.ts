import styled from "styled-components";
import { Column } from './GlobalStyle'

export const HeroContainer = styled.section`
    position: relative;
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
        max-width: 500px;
        margin-left: 1.5rem;
    }

    @media(min-width: 1440px) {
        padding-bottom: 15rem;

        img {
            max-width: 700px;
            position: absolute;
            right: -5rem;
        }

    }
`

export const HeroColumn = styled(Column)`

    @media(min-width: 1440px) {
    
    padding: 0 5rem;
    align-items: flex-start;

    h1 {
        font-size: 4.2rem;
        text-align: left;
        width: 50%;
        line-height: 5rem;
    }

    p {
        text-align: left;
        margin: 0;
        width: 50%;
        font-size: 1.3rem;
    }

    }
`